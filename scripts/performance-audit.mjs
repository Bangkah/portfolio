const apiKey = process.env.PSI_API_KEY;
const targetUrl = process.env.PSI_TARGET_URL || 'https://mdhiyaulatha.me/';
const targetLcpSeconds = Number(process.env.PSI_TARGET_LCP_SECONDS || '7');
const targetCls = Number(process.env.PSI_TARGET_CLS || '0.4');

if (!apiKey) {
  console.error('PSI_API_KEY secret is missing. Set it in GitHub repo settings > Secrets and variables > Actions.');
  process.exit(1);
}

const url = new URL('https://www.googleapis.com/pagespeedonline/v5/runPagespeed');
url.searchParams.set('url', targetUrl);
url.searchParams.set('strategy', 'mobile');
url.searchParams.set('category', 'performance');
url.searchParams.set('key', apiKey);

const response = await fetch(url);
if (!response.ok) {
  const body = await response.text();
  console.error(`PageSpeed Insights request failed with ${response.status}: ${body}`);
  process.exit(1);
}

const payload = await response.json();
const audits = payload?.lighthouseResult?.audits;
const lcpMs = audits?.['largest-contentful-paint']?.numericValue;
const cls = audits?.['cumulative-layout-shift']?.numericValue;

if (typeof lcpMs !== 'number' || typeof cls !== 'number') {
  console.error('PageSpeed Insights response did not contain the expected performance metrics.');
  process.exit(1);
}

const lcpSeconds = lcpMs / 1000;
const failures = [];

if (lcpSeconds > targetLcpSeconds) {
  failures.push(`LCP ${lcpSeconds.toFixed(2)}s exceeds target ${targetLcpSeconds}s`);
}

if (cls > targetCls) {
  failures.push(`CLS ${cls.toFixed(3)} exceeds target ${targetCls}`);
}

console.log(`Mobile performance for ${targetUrl}`);
console.log(`- LCP: ${lcpSeconds.toFixed(2)}s (target ${targetLcpSeconds}s)`);
console.log(`- CLS: ${cls.toFixed(3)} (target ${targetCls})`);

if (failures.length > 0) {
  console.error('Performance gate failed:');
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log('Performance gate passed.');
