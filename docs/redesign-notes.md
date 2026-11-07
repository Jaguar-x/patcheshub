# Studio direction, November 4, 2026

## Design
- Self-hosted Bricolage Grotesque display font and DM Sans body font, downloaded from the official Google Fonts repository. SIL Open Font License files are kept beside the fonts in `src/assets/fonts/`.
- A transparent original product collage replaces the rectangular hero photograph.
- Navy orbital backdrop, product labels, circular typography, and pointer tilt reinforce the creative studio direction.
- Shaped product compositions, interactive material tabs, a type ribbon with a pause button, staggered process cards, and a graphic project invitation.
- All motion respects `prefers-reduced-motion`. Material tabs support Left/Right, Home, and End keys.
- Contact page and navigation inherit the updated typography, colors, and visual language. Quote delivery stays disconnected as requested.

## Screenshot warning
The supplied screenshot shows `data-scribe-recorder-ready="true"` added to `<html>`. The application does not render this attribute. It is consistent with a recording extension or browser integration changing the document before hydration.

The root `<html>` now uses React's `suppressHydrationWarning` escape hatch, scoped to that element. Descendant component hydration warnings are not suppressed. No DOM attributes are removed and no extension settings are changed.

References:
- https://nextjs.org/docs/messages/react-hydration-error
- https://react.dev/reference/react-dom/client/hydrateRoot#suppressing-unavoidable-hydration-mismatch-errors
- https://github.com/google/fonts/tree/main/ofl/bricolagegrotesque
- https://github.com/google/fonts/tree/main/ofl/dmsans

## New illustration
Built-in imagegen output: `public/assets/editorial/custom-goods-collage-v2.png`. Original illustrative merchandise concepts, not customer order photographs. Prompt:

Use case: product-mockup. Asset type: transparent-background product collage for PatchesHub website hero. Create a premium, incredibly detailed photorealistic cutout arrangement of FOUR custom merchandise objects, all completely isolated on a genuinely TRANSPARENT background with alpha channel. Composition is a playful floating diagonal cluster, NOT a flat grid, occupying a square canvas. Upper left: a large circular embroidered patch with a thick cream merrow border, navy fabric, original red sunrise and ivory wave stitching, realistic individual threads, tilted 14 degrees counterclockwise. Upper right: a polished gold circular enamel pin with a red sun, navy and cream graphic waves, tilted 15 degrees clockwise. Lower left: one substantial gold challenge coin with intricate sculpted sun rays, engraved rings and navy/red enamel, tilted slightly to show thickness and metallic ridged edge. Lower right: one rounded-arch navy molded PVC keychain with red and cream rising sun motif and real silver split ring, tilted 12 degrees clockwise. Products should overlap only slightly and retain clear recognizable silhouettes; embroidery patch largest, coin second largest, keychain third, pin smallest. Photographic studio light, meticulous craftsmanship, realistic subtle shadows on the objects only, rich red #E91925, deep navy #00204A, ivory and warm gold. Edges of the four items cleanly cut out; actual transparent alpha everywhere between and around products, no white backdrop, no floor, no plates, no plinth, no cast shadow rectangle, no UI, no text, no letters, no existing brands. The design should feel tactile, bold, creative, and collectible.
