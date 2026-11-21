# AGAIN — continuation notes (2026-11-21)

## Changes in this continuation
- Fixed local preview server's Windows/Linux project path handling; the previous server returned 404 on Linux.
- Kept the Leaflet 1.9.4 stylesheet without the incorrect integrity attribute; CSS and script are pinned to the same version.
- Updated the service worker to cache and serve the app shell (`index.html`) for offline navigation rather than always returning the generic offline page. Offline map tiles and CDN-hosted UI dependencies still need bundled local assets to work.
- Escaped the voice-entered destination when inserted into the route form HTML, and escaped map popup place text.
- Added safeguards when restoring a saved selection and using the geolocation button without map initialization.
- Labeled the prototype's progress-only voice controls, Soundscape toggle, and route time estimates as demos, to avoid implying working ElevenLabs integrations or live route data.

## Verified
- `node build.mjs` succeeds.
- `node --check` succeeds for build script, preview server, service worker and extracted app JS.
- HTTP preview serves `/` and `/manifest.webmanifest` with status 200.

## Still to implement / validate
- Full browser verification of OSM map tiles / markers in a network-enabled browser.
- Bundle Leaflet and Lucide assets locally for genuine offline usability.
- ElevenLabs audio generation/playback via securely held API credentials; no API keys in client code.
- Real multilingual voice search and destination geocoding (currently browser STT / simple matching).
- Confirm actual visitor details and pricing against current official sources.
- Route duration/transport costs remain demonstration estimates until connected to routing APIs.
- Web PWA installability depends on HTTPS or localhost in a compatible browser. SVG icon may need PNG variants for wider device compatibility.

## Run
`node build.mjs`
`node preview.mjs`
Open `http://127.0.0.1:4173/`.
