import { copyFile, mkdir, readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const output = resolve(root, "dist", "server");
const publicOutput = resolve(root, "dist", "public");

const sourceAssets = [
  ["/index.html", "index.html", "text/html; charset=utf-8"],
  ["/styles.css", "styles.css", "text/css; charset=utf-8"],
  ["/app.js", "app.js", "text/javascript; charset=utf-8"],
];

const assets = {};
for (const [route, file, contentType] of sourceAssets) {
  assets[route] = {
    body: await readFile(resolve(root, file), "utf8"),
    contentType,
  };
}

const worker = `const assets = ${JSON.stringify(assets)};

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const path = url.pathname === "/" ? "/index.html" : url.pathname;
    const asset = assets[path];

    if (!asset) {
      return new Response("Not found", {
        status: 404,
        headers: { "content-type": "text/plain; charset=utf-8" },
      });
    }

    return new Response(asset.body, {
      headers: {
        "content-type": asset.contentType,
        "cache-control": path === "/index.html" ? "no-cache" : "public, max-age=3600",
        "x-content-type-options": "nosniff",
      },
    });
  },
};
`;

await mkdir(output, { recursive: true });
await mkdir(publicOutput, { recursive: true });
await writeFile(resolve(output, "index.js"), worker, "utf8");
await Promise.all(sourceAssets.map(([, file]) => copyFile(resolve(root, file), resolve(publicOutput, file))));
console.log("Built deployable site to dist/server/index.js");
