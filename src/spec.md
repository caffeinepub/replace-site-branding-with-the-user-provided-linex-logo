# Specification

## Summary
**Goal:** Convert the project into a frontend-only, fully static React/Vite SPA that can be deployed on Netlify without any Internet Computer (dfx/canister) backend or Internet Identity runtime dependency, while keeping the visible UI unchanged.

**Planned changes:**
- Remove/decouple IC backend canister code and IC/dfx-specific build/deploy configuration so builds run without dfx and no backend is required.
- Switch `frontend/index.html` to boot the app via a new static-only entry file (e.g., `frontend/src/main.static.tsx`) so existing immutable frontend files (including `frontend/src/main.tsx` and II/actor hooks) remain untouched.
- Update the Contact form to avoid any backend/canister/actor submission and instead handle submission locally with an in-app success/failure message (English), keeping the same form UI.
- Add Netlify SPA deployment configuration (e.g., `netlify.toml`) and an SPA redirect rule (e.g., `frontend/public/_redirects`) so deep links and refreshes work across all routes.
- Ensure the visible frontend layout/styling/content remains the same, with no new auth/backend UI.

**User-visible outcome:** The site looks the same and all routes work on Netlify (including refresh/deep links), the app loads without Internet Identity, and the Contact form submits locally with an on-screen confirmation message without any backend.
