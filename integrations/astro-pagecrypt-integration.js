import { exec } from "child_process";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { promisify } from "util";

const execPromise = promisify(exec);

export default function createIntegration() {
  return {
    name: "astro-pagecrypt-integration",
    hooks: {
      "astro:build:done": async ({ dir }) => {
        const password = process.env.PAGECRYPT_PASSWORD;

        if (!password) {
          throw new Error("PAGECRYPT_PASSWORD environment variable is not set");
        }

        const outputDir = fileURLToPath(dir);
        const htmlFiles = getHtmlFiles(outputDir);

        await Promise.all(
          htmlFiles.map(async (filePath) => {
            try {
              await execPromise(
                `node_modules/.bin/pagecrypt "${filePath}" "${filePath}" "${password}"`,
              );
              console.log(
                `Encrypted ${path.relative(outputDir, filePath)} with PageCrypt`,
              );
            } catch (error) {
              console.error(
                `Failed to encrypt ${path.relative(outputDir, filePath)}:`,
                error,
              );
            }
          }),
        );

        console.log("All files encrypted");
      },
    },
  };
}

function getHtmlFiles(dir) {
  const files = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...getHtmlFiles(fullPath));
    } else if (entry.isFile() && entry.name.endsWith(".html")) {
      files.push(fullPath);
    }
  }

  return files;
}
