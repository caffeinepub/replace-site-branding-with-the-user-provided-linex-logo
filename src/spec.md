# Specification

## Summary
**Goal:** Replace the header logo with the user-provided Linex Automation logo and ensure the old generated logo is no longer used in the header.

**Planned changes:**
- Update `frontend/src/components/layout/SiteHeader.tsx` so the header logo `<img>` uses `src={BRANDING.logo.main}` and `alt={BRANDING.logo.alt}` (no hardcoded logo path).
- Update `frontend/src/config/branding.ts` to set `BRANDING.logo.main` to `/assets/generated/linex-logo-user.dim_512x512.png` while keeping the alt text in English.
- Ensure the static asset `frontend/public/assets/generated/linex-logo-user.dim_512x512.png` is present and served in the deployed build output.

**User-visible outcome:** The header displays the user-provided Linex Automation logo instead of the previous generated logo.
