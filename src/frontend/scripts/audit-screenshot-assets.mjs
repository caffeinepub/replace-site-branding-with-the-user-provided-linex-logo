#!/usr/bin/env node

import { readdir, readFile } from 'fs/promises';
import { join, relative } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Screenshot-like filename patterns
const SCREENSHOT_PATTERNS = [
  /^IMG_\d+.*\.png$/i,
  /^Screenshot.*\.png$/i,
  /^screen.*\.png$/i,
  /^image-\d+\.png$/i,
  /^image\.png$/i,
];

// Directories to scan for references
const SCAN_DIRS = [
  join(__dirname, '../src'),
  join(__dirname, '../index.html'),
];

const ASSETS_DIR = join(__dirname, '../public/assets');

/**
 * Check if a filename matches screenshot patterns
 */
function isScreenshotLike(filename) {
  return SCREENSHOT_PATTERNS.some(pattern => pattern.test(filename));
}

/**
 * Recursively get all files in a directory
 */
async function getAllFiles(dir, fileList = []) {
  try {
    const files = await readdir(dir, { withFileTypes: true });
    
    for (const file of files) {
      const fullPath = join(dir, file.name);
      
      if (file.isDirectory()) {
        // Skip node_modules and other common directories
        if (!['node_modules', '.git', 'dist', 'build'].includes(file.name)) {
          await getAllFiles(fullPath, fileList);
        }
      } else {
        fileList.push(fullPath);
      }
    }
  } catch (err) {
    // Directory might not exist, skip
  }
  
  return fileList;
}

/**
 * Check if an asset path is referenced in the codebase
 */
async function isAssetReferenced(assetFilename, scanFiles) {
  const searchPatterns = [
    `/assets/${assetFilename}`,
    `assets/${assetFilename}`,
    assetFilename,
  ];
  
  for (const file of scanFiles) {
    try {
      const content = await readFile(file, 'utf-8');
      
      // Check if any pattern appears in the file
      if (searchPatterns.some(pattern => content.includes(pattern))) {
        return true;
      }
    } catch (err) {
      // Skip files that can't be read
      continue;
    }
  }
  
  return false;
}

/**
 * Main audit function
 */
async function auditScreenshotAssets() {
  console.log('🔍 Auditing screenshot-like assets...\n');
  
  // Get all screenshot-like files in assets directory
  let assetFiles;
  try {
    assetFiles = await readdir(ASSETS_DIR);
  } catch (err) {
    console.error(`❌ Error reading assets directory: ${err.message}`);
    process.exit(1);
  }
  
  const screenshotFiles = assetFiles.filter(isScreenshotLike);
  
  if (screenshotFiles.length === 0) {
    console.log('✅ No screenshot-like files found in assets directory.');
    return;
  }
  
  console.log(`📁 Found ${screenshotFiles.length} screenshot-like file(s):\n`);
  
  // Get all files to scan for references
  const scanFiles = [];
  for (const scanPath of SCAN_DIRS) {
    const files = await getAllFiles(scanPath);
    scanFiles.push(...files);
  }
  
  console.log(`📝 Scanning ${scanFiles.length} source file(s) for references...\n`);
  
  // Check each screenshot file
  const results = {
    referenced: [],
    unreferenced: [],
  };
  
  for (const filename of screenshotFiles) {
    const isReferenced = await isAssetReferenced(filename, scanFiles);
    
    if (isReferenced) {
      results.referenced.push(filename);
    } else {
      results.unreferenced.push(filename);
    }
  }
  
  // Print results
  console.log('═══════════════════════════════════════════════════════\n');
  console.log('📊 AUDIT RESULTS\n');
  console.log('═══════════════════════════════════════════════════════\n');
  
  if (results.referenced.length > 0) {
    console.log(`✅ Referenced (${results.referenced.length}):\n`);
    results.referenced.forEach(file => {
      console.log(`   • ${file}`);
    });
    console.log('');
  }
  
  if (results.unreferenced.length > 0) {
    console.log(`⚠️  Unreferenced (${results.unreferenced.length}):\n`);
    results.unreferenced.forEach(file => {
      console.log(`   • ${file}`);
    });
    console.log('');
    console.log('💡 These files can potentially be deleted to free up space.\n');
  } else {
    console.log('✅ All screenshot-like files are referenced in the codebase.\n');
  }
  
  console.log('═══════════════════════════════════════════════════════\n');
  
  // Summary
  console.log('📈 SUMMARY\n');
  console.log(`   Total screenshot-like files: ${screenshotFiles.length}`);
  console.log(`   Referenced: ${results.referenced.length}`);
  console.log(`   Unreferenced: ${results.unreferenced.length}`);
  console.log('');
}

// Run the audit
auditScreenshotAssets().catch(err => {
  console.error('❌ Audit failed:', err);
  process.exit(1);
});

