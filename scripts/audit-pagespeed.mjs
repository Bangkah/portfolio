const defaultUrl = process.env.PSI_AUDIT_URL || "https://mdhiyaulatha.me";
const targetUrl = process.argv[2] || defaultUrl;
const targetLcpSeconds = Number(process.env.PSI_TARGET_LCP_SECONDS || "3");
const targetCls = Number(process.env.PSI_TARGET_CLS || "0.1");
const psiApiKeyRaw = (process.env.PSI_API_KEY || "").trim();
const psiApiKey = /YOUR_PAGESPEED_API_KEY/i.test(psiApiKeyRaw) ? "" : psiApiKeyRaw;
const maxRetries = Number(process.env.PSI_MAX_RETRIES || "3");
const retryDelayMs = Number(process.env.PSI_RETRY_DELAY_MS || "2000");
const allowFailure = (process.env.PSI_ALLOW_FAILURE || "true").toLowerCase() === "true";

function createEndpoint(useKey) {
  const endpoint = new URL("https://www.googleapis.com/pagespeedonline/v5/runPagespeed");
  endpoint.searchParams.set("url", targetUrl);
  endpoint.searchParams.set("strategy", "mobile");
  endpoint.searchParams.set("category", "performance");
  if (useKey && psiApiKey) {
    endpoint.searchParams.set("key", psiApiKey);
  }
  return endpoint;
}

function parseSeconds(value) {
  if (typeof value !== "string") return null;
  const normalized = value.trim().replace("s", "");
  const parsed = Number(normalized);
  return Number.isFinite(parsed) ? parsed : null;
}

function parseNumeric(value) {
  if (typeof value !== "string") return null;
  const normalized = value.trim().replace(/[^0-9.]/g, "");
  const parsed = Number(normalized);
  return Number.isFinite(parsed) ? parsed : null;
}

function getAudit(audits, key) {
  const audit = audits?.[key];
  return {
    title: audit?.title || key,
    displayValue: audit?.displayValue || "n/a",
    score: typeof audit?.score === "number" ? audit.score : null,
  };
}

function isTransientLighthouseError(bodyText) {
  return (
    bodyText.includes("FAILED_DOCUMENT_REQUEST") ||
    bodyText.includes("lighthouseUserError") ||
    bodyText.includes("ERR_TIMED_OUT")
  );
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function run() {
  let endpoint = createEndpoint(true);
  let response;
  let bodyText = "";

  for (let attempt = 0; attempt <= maxRetries; attempt += 1) {
    response = await fetch(endpoint);

    if (response.ok) {
      break;
    }

    bodyText = await response.text();

    if (response.status === 400 && psiApiKey && bodyText.includes("API_KEY_INVALID")) {
      console.warn("PSI_API_KEY invalid, retrying without key...");
      endpoint = createEndpoint(false);
      continue;
    }

    if (response.status === 400 && isTransientLighthouseError(bodyText) && attempt < maxRetries) {
      console.warn(`PSI transient error, retrying (${attempt + 1}/${maxRetries})...`);
      await sleep(retryDelayMs);
      continue;
    }

    break;
  }

  if (!response || !response.ok) {
    const quotaHint =
      response?.status === 429
        ? " Quota habis. Set PSI_API_KEY dari Google Cloud lalu jalankan ulang."
        : "";
    const responseBody = bodyText || (response ? await response.text() : "");
    const errorMessage = `PageSpeed API error: ${response?.status || "unknown"} ${response?.statusText || ""}.${quotaHint} Response: ${responseBody}`;

    if (allowFailure) {
      console.warn(`${errorMessage}\nContinuing without failing the workflow (PSI_ALLOW_FAILURE=true).`);
      return;
    }

    throw new Error(errorMessage);
  }

  const data = await response.json();
  const lighthouse = data.lighthouseResult || {};
  const categories = lighthouse.categories || {};
  const audits = lighthouse.audits || {};

  const performanceScore = Math.round((categories.performance?.score || 0) * 100);
  const fcp = getAudit(audits, "first-contentful-paint");
  const lcp = getAudit(audits, "largest-contentful-paint");
  const tbt = getAudit(audits, "total-blocking-time");
  const cls = getAudit(audits, "cumulative-layout-shift");
  const speedIndex = getAudit(audits, "speed-index");

  const lcpSeconds = parseSeconds(lcp.displayValue);
  const clsValue = parseNumeric(cls.displayValue);
  const passLcp = lcpSeconds !== null && lcpSeconds < targetLcpSeconds;
  const passCls = clsValue !== null && clsValue <= targetCls;
  const passGate = passLcp && passCls;

  console.log(`URL: ${targetUrl}`);
  console.log(`Performance score (mobile): ${performanceScore}`);
  console.log(`FCP: ${fcp.displayValue}`);
  console.log(`LCP: ${lcp.displayValue}`);
  console.log(`Speed Index: ${speedIndex.displayValue}`);
  console.log(`TBT: ${tbt.displayValue}`);
  console.log(`CLS: ${cls.displayValue}`);
  console.log(`Target LCP < ${targetLcpSeconds}s: ${passLcp ? "PASS" : "FAIL"}`);
  console.log(`Target CLS <= ${targetCls}: ${passCls ? "PASS" : "FAIL"}`);

  if (!passGate) {
    process.exitCode = 2;
  }
}

run().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
