# Specification

## Summary
**Goal:** Fix site-wide branding so the user-provided logo and all referenced SEO/icon assets load correctly across the deployed site.

**Planned changes:**
- Ensure the user-provided logo file is present in frontend static assets and is fetchable at `/assets/generated/linex-logo-user.dim_512x512.png`.
- Update header and footer branding to consistently use `/assets/generated/linex-logo-user.dim_512x512.png` on all main pages and remove any remaining usage of the old generated logo path for header/footer branding.
- Verify that the favicon, apple-touch icon, and social preview image referenced by `frontend/index.html` exist and load successfully from the deployed site, keeping branding-related titles/descriptions/alt text in English.

**User-visible outcome:** The correct (user-provided) logo appears in the header and footer across the site, and all browser/SEO branding icons (favicon, apple-touch icon, OG image) load without broken/missing assets.
