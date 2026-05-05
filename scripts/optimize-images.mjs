import path from "node:path";
import fs from "node:fs/promises";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");
const assetsRoot = path.join(projectRoot, "src", "Assets");

const SOURCE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png"]);
const runFullOptimization = process.argv.includes("--all");

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) return walk(fullPath);
      return [fullPath];
    })
  );
  return files.flat();
}

function toWebpPath(filePath) {
  const ext = path.extname(filePath);
  return filePath.slice(0, -ext.length) + ".webp";
}

function getTargetRange(filePath) {
  if (filePath.includes(`${path.sep}Certificates${path.sep}`)) {
    return { minSaving: 60, maxSaving: 80, qualities: [95, 93, 91, 89, 87, 85, 83, 81, 79] };
  }

  return { minSaving: 45, maxSaving: 85, qualities: [88, 85, 82, 79, 76] };
}

async function encodeAtQuality(inputPath, quality) {
  const inputBuffer = await fs.readFile(inputPath);
  const outputBuffer = await sharp(inputBuffer)
    .rotate()
    .webp({ quality, effort: 6 })
    .toBuffer();

  return {
    quality,
    inputBytes: inputBuffer.length,
    outputBytes: outputBuffer.length,
    outputBuffer,
  };
}

function savingPercent(inputBytes, outputBytes) {
  return ((inputBytes - outputBytes) / inputBytes) * 100;
}

function pickCandidate(candidates, minSaving, maxSaving) {
  const inRange = candidates.find((c) => {
    const s = savingPercent(c.inputBytes, c.outputBytes);
    return s >= minSaving && s <= maxSaving;
  });

  if (inRange) return inRange;

  const target = (minSaving + maxSaving) / 2;
  return candidates.reduce((best, current) => {
    const currentDelta = Math.abs(savingPercent(current.inputBytes, current.outputBytes) - target);
    const bestDelta = Math.abs(savingPercent(best.inputBytes, best.outputBytes) - target);
    return currentDelta < bestDelta ? current : best;
  });
}

async function main() {
  const allFiles = await walk(assetsRoot);
  const sourceFiles = allFiles.filter((filePath) => SOURCE_EXTENSIONS.has(path.extname(filePath).toLowerCase()));
  const scopeLabel = runFullOptimization ? "full" : "incremental";

  let optimizedCount = 0;
  let totalBefore = 0;
  let totalAfter = 0;

  for (const filePath of sourceFiles) {
    const { minSaving, maxSaving, qualities } = getTargetRange(filePath);
    const outPath = toWebpPath(filePath);

    if (!runFullOptimization) {
      try {
        const [srcStat, outStat] = await Promise.all([fs.stat(filePath), fs.stat(outPath)]);
        if (outStat.mtimeMs >= srcStat.mtimeMs) {
          continue;
        }
      } catch {
        // If output does not exist, continue and optimize.
      }
    }

    const candidates = [];

    for (const q of qualities) {
      candidates.push(await encodeAtQuality(filePath, q));
    }

    const chosen = pickCandidate(candidates, minSaving, maxSaving);
    await fs.writeFile(outPath, chosen.outputBuffer);

    optimizedCount += 1;
    totalBefore += chosen.inputBytes;
    totalAfter += chosen.outputBytes;
  }

  if (optimizedCount === 0) {
    console.log(`No images needed optimization (${scopeLabel} mode).`);
    return;
  }

  const totalSaving = savingPercent(totalBefore, totalAfter);
  console.log(`Optimized ${optimizedCount} images to WebP (${scopeLabel} mode).`);
  console.log(`Total size: ${(totalBefore / (1024 * 1024)).toFixed(2)} MB -> ${(totalAfter / (1024 * 1024)).toFixed(2)} MB (${totalSaving.toFixed(1)}% saved)`);
}

main().catch((error) => {
  console.error("Image optimization failed:", error);
  process.exit(1);
});
