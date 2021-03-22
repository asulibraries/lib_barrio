# ASU Library Bootstrap Barrio SASS subtheme

## How to add Unity to this theme locally
* Authenticate with private package repo ASU Unity stuff as in https://github.com/ASU/asu-unity-stack readme.
* `npm install @asu-design-system/bootstrap4-theme@dev`
* `npm install @asu-design-system/design-tokens@dev`
* Change gulpfile if needed.
* Edit import.scss in theme and other scss files to reference Unity elements if needed.
Eg: `@import “../node_modules/@asu-design-system/design-tokens/build/assets/fontawesome…”`
* Then run gulp.

## Updating Unity elements
`npm upgrade` in theme folder to update asu-design-system in node_modules
See: https://docs.google.com/document/d/1fz_HL6sWAcbLrLNcgmQb9vUwJ_snkQwg6ANuEHGoxho/edit
