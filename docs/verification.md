# Homepage, contact, and navigation verification

Verified locally on November 4, 2026 using the bundled Node.js 24 runtime.

- Production build compiled both `/` and `/contact`, including TypeScript validation.
- Desktop homepage and contact page visually inspected.
- Desktop product dropdown opens and closes; product images and navigation destinations inspected.
- Phone layouts inspected at a 390px viewport. No horizontal overflow on contact.
- Narrow phone homepage checked at 320px. No horizontal overflow.
- Mobile navigation opens, traps backward keyboard focus, closes after selecting Contact, and restores page scrolling.
- Required-field validation blocks an empty contact form.
- Sample valid contact details produce the clearly labeled local preview; no network submission or storage is implemented.
- A product-specific contact URL correctly preselects Custom pins.
- FAQ expansion works; returning home after expansion no longer causes the native-details hydration warning discovered during QA.
- Viewport override reset after responsive testing.

Email delivery, uploads, actual quote processing, individual product pages, canonical production URLs, and search indexing are outside this change. The existing developer server on port 3000 was reused rather than stopped or replaced.

## Studio redesign verification

- Production compilation and TypeScript checks pass after the studio redesign.
- New transparent collage inspected against the navy backdrop; no baked background rectangle.
- Local fonts load without a runtime dependency on Google Fonts.
- Material tabs verified with mouse clicks, ArrowRight, and End. Each selection updates the content and inquiry destination.
- Moving text pause button verified through its pressed state and computed animation-play-state.
- Desktop layout and menu inspected at the browser's default 1280px viewport.
- Phone layout checked at 390px and 320px; narrow-screen heading and category arrow overflows corrected.
- Mobile navigation traps reverse keyboard focus and restores focus to its toggle on Escape.
- Product links correctly preselect Custom keychains on the contact page. The project anchor now lands on the form panel.
- Browser checks showed no hydration warning overlay. The supplied recording extension itself is not present in the QA browser; the root-only handling follows React's documented one-level escape hatch.
- Desktop and phone screenshots saved as `docs/previews/studio-desktop-v2.png` and `docs/previews/studio-mobile-v2.png`.
