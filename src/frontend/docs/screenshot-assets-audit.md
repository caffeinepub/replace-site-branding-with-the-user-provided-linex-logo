# Screenshot Assets Audit Tool

## Overview

The screenshot assets audit tool helps identify which screenshot-like image files in your project are actively used in the codebase and which ones are unreferenced and can potentially be deleted to free up storage space.

## What It Does

The audit script:

1. **Scans** the `frontend/public/assets` directory for screenshot-like filenames
2. **Searches** the entire frontend codebase (`frontend/src`, `frontend/index.html`, and CSS files) for references to these files
3. **Reports** which files are referenced vs unreferenced

## Screenshot Patterns

The tool identifies files matching these patterns as "screenshot-like":

- `IMG_*.png` (e.g., `IMG_8637.png`, `IMG_8640-1.png`)
- `Screenshot*.png` (e.g., `Screenshot_2024.png`)
- `screen*.png` (e.g., `screen-capture.png`)
- `image-*.png` (e.g., `image-1.png`, `image-14.png`)
- `image.png`

## What "Referenced" Means

A file is considered **referenced** if its filename appears anywhere in:

- TypeScript/TSX source files (e.g., `import` statements, string literals with `/assets/...` paths)
- HTML files (e.g., `<img src="/assets/...">`)
- CSS files (e.g., `background-image: url('/assets/...')`)

The tool searches for these patterns:
- `/assets/filename.png`
- `assets/filename.png`
- `filename.png`

## How to Run

From the project root or frontend directory, run:

