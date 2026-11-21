# AGAIN map upgrade

- Replaced Leaflet raster tiles with MapLibre GL JS and OpenFreeMap Bright vector basemap.
- Map labels try the chosen app language, then English, then native names, where source data supports it. Some roads/places may not have translations.
- Brand pins show AGAIN imagery instead of A/B letters.
- Layer button toggles Bright/Liberty themes.
- Current location, external place search, filtering and favorite map pins adapted to MapLibre.
- Vector maps and external scripts require online connectivity; PWA shell remains accessible offline.
- CDN and tile availability must be checked in the deployed browser; local environment cannot guarantee third-party resources.
- Keep required OpenFreeMap/OSM attribution.
- No API keys required for this prototype. Review OpenFreeMap usage policy before scaling traffic.

## GitHub deployment update

Existing Cloudflare Worker Git integration already points to `AGAIN_PWA_branded (1)/new-chat/outputs/again-prototype` on GitHub. To avoid changing root directory now, replace the files inside that directory with contents of this folder. After GitHub Push, Cloudflare should rebuild on the same URL. For long-term maintainability, move the app to repository root in a separate change and update Cloudflare root configuration.
