const url = process.argv[2] || "https://mdhiyaulatha.me";
const key = (process.env.PSI_API_KEY || "").trim();
const endpoint = new URL("https://www.googleapis.com/pagespeedonline/v5/runPagespeed");
endpoint.searchParams.set("url", url);
endpoint.searchParams.set("strategy", "mobile");
endpoint.searchParams.set("category", "performance");
if (key) {
  endpoint.searchParams.set("key", key);
}

async function run() {
  const response = await fetch(endpoint);
  const data = await response.json();
  const audits = (data.lighthouseResult && data.lighthouseResult.audits) ? data.lighthouseResult.audits : {};
  const lcp = audits["largest-contentful-paint"];
  const lcpElem = audits["largest-contentful-paint-element"];
  const lcpVal = lcp && lcp.displayValue ? lcp.displayValue : "n/a";

  console.log("LCP:", lcpVal);

  if (lcpElem && lcpElem.details && lcpElem.details.items && lcpElem.details.items.length) {
    const item = lcpElem.details.items[0];
    const snippet = item.node && item.node.snippet ? item.node.snippet : "n/a";
    const lcpUrl = item.url || "n/a";
    const size = item.size || "n/a";
    console.log("LCP Element:", snippet);
    console.log("LCP URL:", lcpUrl);
    console.log("LCP Size:", size);
  } else {
    console.log("LCP Element: n/a");
  }
}

run().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
