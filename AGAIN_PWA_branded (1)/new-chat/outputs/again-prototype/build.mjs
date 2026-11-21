import { readFile, writeFile, mkdir, cp } from 'node:fs/promises';
import { resolve } from 'node:path';

const projectRoot = new URL('.', import.meta.url);
const fragmentPath = new URL('./src/again-map-first.html', projectRoot);
const dataPath = new URL('./src/data/places.json', projectRoot);
const outputDir = new URL('./dist/', projectRoot);
const outputPath = new URL('./dist/index.html', projectRoot);
const fragment = await readFile(fragmentPath, 'utf8');
const places = JSON.parse(await readFile(dataPath, 'utf8'));
const serializedPlaces = JSON.stringify(places).replaceAll('<', '\\u003c');

const document = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
  <meta name="theme-color" content="#2E5AA7">
  <meta name="description" content="AGAIN helps travelers discover, hear and find local Korean scenery along their route.">
  <link rel="manifest" href="/manifest.webmanifest">
  <link rel="icon" href="/brand/icon-192.png" type="image/png">
  <link rel="apple-touch-icon" href="/brand/icon-192.png">
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css">
  <title>AGAIN — See it. Hear it. Find it.</title>
  <style>
    :root { color-scheme: light dark; font-family: Inter, "Segoe UI", Arial, sans-serif; }
    * { box-sizing: border-box; }
    body {
      margin: 0;
      min-width: 320px;
      min-height: 100vh;
      display: grid;
      place-items: start center;
      padding: 20px 12px 32px;
      background: light-dark(#f3f7fb, #0e1728);
    }
    main { width: min(100%, 460px); }
    .prototype-note {
      margin: 0 auto 12px;
      color: light-dark(#506078, #b8c8df);
      font-size: 13px;
      text-align: center;
    }
    .cursor-interaction { cursor: pointer; }
    @media (max-width: 480px) {
      body { padding: 0; place-items: start stretch; }
      main { width: 100%; }
      .prototype-note { display: none; }
      #again-map-first .am-phone { width: 100%; height: 100svh; min-height: 680px; border: 0; border-radius: 0; }
    }
  </style>
  <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
  <script src="https://unpkg.com/lucide@0.468.0/dist/umd/lucide.min.js" defer></script>
  <script>window.AGAIN_PLACES = ${serializedPlaces};</script>
</head>
<body>
  <main>
    <p class="prototype-note">Interactive prototype · example route times and voice controls are demos; verify live visitor details</p>
    ${fragment}
  </main>
  <script>
    window.addEventListener('DOMContentLoaded', () => {
      if (window.lucide) window.lucide.createIcons({ attrs: { width: 18, height: 18 } });
      if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
        navigator.serviceWorker.register('/sw.js').catch(() => {});
      }
    });
  </script>
</body>
</html>`;

await mkdir(outputDir, { recursive: true });
await writeFile(outputPath, document, 'utf8');
await cp(new URL('./src/manifest.webmanifest', projectRoot), new URL('./dist/manifest.webmanifest', projectRoot));
await cp(new URL('./src/sw.js', projectRoot), new URL('./dist/sw.js', projectRoot));
await cp(new URL('./src/offline.html', projectRoot), new URL('./dist/offline.html', projectRoot));
await mkdir(new URL('./dist/data/', projectRoot), { recursive: true });
await cp(dataPath, new URL('./dist/data/places.json', projectRoot));
await mkdir(new URL('./dist/brand/', projectRoot), { recursive: true });
await cp(new URL('./src/brand/', projectRoot), new URL('./dist/brand/', projectRoot), { recursive: true });
await mkdir(new URL('./dist/icons/', projectRoot), { recursive: true });
await cp(new URL('./src/icons/again-icon.svg', projectRoot), new URL('./dist/icons/again-icon.svg', projectRoot));
console.log(resolve(outputPath.pathname.slice(1)));
