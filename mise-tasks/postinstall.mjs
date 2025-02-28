#!/usr/bin/env node

import { execSync } from "node:child_process";
import { writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function main() {
  try {
    // Get PNPM version using mise
    const pnpmVersion = execSync('mise -C "${HOME}" x pnpm -- pnpm -v')
      .toString()
      .trim();

    // Read and update package.json
    const packagePath = path.join(__dirname, "..", "package.json");
    const packageJson = JSON.parse(execSync(`cat ${packagePath}`).toString());

    packageJson.packageManager = `pnpm@${pnpmVersion}`;

    // Write updated package.json
    await writeFile(
      packagePath,
      JSON.stringify(packageJson, undefined, 2) + "\n",
    );

    console.log("Updated packageManager in package.json");
  } catch (error) {
    console.error("Error updating package.json:", error);
    process.exit(1);
  }
}

await main();
