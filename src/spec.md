# Specification

## Summary
**Goal:** Replace the two logo images shown in the HomePage “Brands We Deal In” (section 3) banner with the provided external image URLs.

**Planned changes:**
- Update the first logo `<img>` in `frontend/src/components/home/BrandsBanner.tsx` to use `src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Siemens_AG_logo.svg"`.
- Update the second logo `<img>` in `frontend/src/components/home/BrandsBanner.tsx` to use `src="https://www.ruralelec.org/wp-content/uploads/2016/04/Schneider-Electric-logo-jpg-.png"`.
- Keep the banner’s existing layout and styling (including sizing, object-contain, and grayscale hover effect) unchanged and do not modify any other images/logos.

**User-visible outcome:** The “Brands We Deal In” banner displays the Siemens logo in the first slot and the Schneider Electric logo in the second slot, loaded from the specified URLs, with all other page visuals unchanged.
