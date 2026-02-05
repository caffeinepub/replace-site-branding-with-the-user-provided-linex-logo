# Specification

## Summary
**Goal:** Add a typing + backspace word-cycling animation to the selected Home page hero headline span without changing its styling.

**Planned changes:**
- Update only the specified `<span>` in `frontend/src/pages/HomePage.tsx` to animate its text by typing “Planning”, backspacing it полностью, then typing “Precision”, backspacing it, then typing “Performance”, backspacing it, and looping continuously.
- Ensure the span’s existing Tailwind classes (including font/size/color) remain unchanged and the animation does not cause clipping or layout breakage on desktop or mobile.

**User-visible outcome:** On the Home page hero headline, the highlighted word animates with a smooth typing and backspace effect cycling through Planning → Precision → Performance repeatedly, while the headline’s appearance (font/color) stays the same.
