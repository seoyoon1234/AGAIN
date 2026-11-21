# AGAIN update — multilingual, voice, bottom sheet, location

## Features

- Settings (gear in the top bar) with separate interface and speech recognition language selectors; 17 locales.
- Main navigation, labels on the discover/search/settings screens translated. Detailed place descriptions, story scripts, prices, and route demo labels remain English; full product localization is not complete.
- Language selections persist in localStorage, with no login.
- Browser SpeechRecognition/webkitSpeechRecognition uses the selected speech locale. Requires browser support, microphone permission and may require network access. Browser providers vary; not a guaranteed offline feature. Recognition results can match featured locations (including a few Korean/Japanese/Chinese aliases), or search an external Nominatim map geocoder where network access is available. Search is not a full-fledged production POI API.
- Bottom panel: draggable grip, grip click to cycle expanded/collapsed, interior content scrolls vertically. Panel height is persisted.
- Current-location button: browser location permission request, map fly-to, blue accuracy marker, informative errors. Requires HTTPS or localhost and map availability. Location is requested only when the user presses the button and is not saved.

## Tested

- `node build.mjs`: pass.
- Inline application JavaScript syntax: pass.
- Headless browser with embedded HTML: settings opens, language switches to Korean, voice language to Japanese, Korean place alias finds Bukchon, no page JavaScript errors.
- Actual online map tile loading and real device geolocation/voice input were not validated here because this test browser blocked network navigation and map assets. Test those features in a browser with internet access at http://127.0.0.1:4173/ or an HTTPS deployment.

## Start

```
node build.mjs
node preview.mjs
```

Then open http://127.0.0.1:4173/. Keep the terminal open.

Note: External Leaflet files, tile servers, and Nominatim require an internet connection. For production, evaluate map/search provider quotas and usage policies. ElevenLabs real audio remains a separate task.
