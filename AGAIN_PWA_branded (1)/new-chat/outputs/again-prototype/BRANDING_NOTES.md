# AGAIN branding integration

- Header: supplied AGAIN compass/map-pin mascot crop (`src/brand/again-pin.png`).
- Explore: travel mascot from the supplied character sheet (`again-mascot.png`).
- Ask/route: listening and navigating mascot crops (`again-listen.png`, `again-navigate.png`).
- Saved empty state: remembering illustration (`again-remember.png`).
- PWA install graphics: 192/512px icons generated from the user's pin-logo.
- Original uploaded branding artworks are preserved in `src/brand/originals/`.

All image assets are copied to `dist/brand` by `node build.mjs`; service worker precaches the essential branding assets. Other functionality is unchanged.
