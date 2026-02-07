import { readFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, '..');

const EXPECTED_DOMAINS = ['linexautomation.com', 'www.linexautomation.com'];

function verifyIcDomainsFile(filePath, label) {
  console.log(`\n✓ Checking ${label}...`);
  
  if (!existsSync(filePath)) {
    console.error(`✗ ERROR: ${label} does not exist at ${filePath}`);
    return false;
  }

  const content = readFileSync(filePath, 'utf-8');
  const lines = content.trim().split('\n').map(line => line.trim()).filter(line => line.length > 0);

  if (lines.length !== EXPECTED_DOMAINS.length) {
    console.error(`✗ ERROR: ${label} has ${lines.length} domains, expected ${EXPECTED_DOMAINS.length}`);
    console.error(`  Found: ${JSON.stringify(lines)}`);
    console.error(`  Expected: ${JSON.stringify(EXPECTED_DOMAINS)}`);
    return false;
  }

  for (let i = 0; i < EXPECTED_DOMAINS.length; i++) {
    if (lines[i] !== EXPECTED_DOMAINS[i]) {
      console.error(`✗ ERROR: ${label} line ${i + 1} mismatch`);
      console.error(`  Found: "${lines[i]}"`);
      console.error(`  Expected: "${EXPECTED_DOMAINS[i]}"`);
      return false;
    }
  }

  console.log(`  ✓ Contains correct domains: ${EXPECTED_DOMAINS.join(', ')}`);
  return true;
}

function verifyRedirectsFile() {
  console.log(`\n✓ Checking _redirects file...`);
  
  const redirectsPath = join(projectRoot, 'public', '_redirects');
  
  if (!existsSync(redirectsPath)) {
    console.error(`✗ ERROR: _redirects file does not exist at ${redirectsPath}`);
    return false;
  }

  const content = readFileSync(redirectsPath, 'utf-8');
  
  // Check for .well-known/* rule
  if (!content.includes('/.well-known/*') || !content.match(/\/\.well-known\/\*\s+200/)) {
    console.error(`✗ ERROR: _redirects missing or incorrect /.well-known/* rule`);
    return false;
  }

  // Check for ic-assets.json rule
  if (!content.includes('/ic-assets.json') || !content.match(/\/ic-assets\.json\s+200/)) {
    console.error(`✗ ERROR: _redirects missing or incorrect /ic-assets.json rule`);
    return false;
  }

  // Check for SPA fallback
  if (!content.includes('/*') || !content.match(/\/\*\s+\/index\.html\s+200/)) {
    console.error(`✗ ERROR: _redirects missing or incorrect SPA fallback rule`);
    return false;
  }

  console.log(`  ✓ Contains correct redirect rules for .well-known/*, ic-assets.json, and SPA fallback`);
  return true;
}

function verifyIcAssetsJson() {
  console.log(`\n✓ Checking ic-assets.json files...`);
  
  const srcPath = join(projectRoot, 'src', 'ic-assets.json');
  const publicPath = join(projectRoot, 'public', 'ic-assets.json');
  
  let allValid = true;

  for (const [path, label] of [[srcPath, 'src/ic-assets.json'], [publicPath, 'public/ic-assets.json']]) {
    if (!existsSync(path)) {
      console.warn(`  ⚠ Warning: ${label} does not exist (optional)`);
      continue;
    }

    try {
      const content = readFileSync(path, 'utf-8');
      const config = JSON.parse(content);
      
      // Check that .well-known is not ignored
      if (config.ignore && Array.isArray(config.ignore)) {
        const ignoresWellKnown = config.ignore.some(pattern => 
          pattern.includes('.well-known') || pattern === '**/.well-known/**'
        );
        
        if (ignoresWellKnown) {
          console.error(`  ✗ ERROR: ${label} ignores .well-known directory`);
          allValid = false;
        } else {
          console.log(`  ✓ ${label} does not ignore .well-known`);
        }
      } else {
        console.log(`  ✓ ${label} has no ignore rules (OK)`);
      }
    } catch (err) {
      console.error(`  ✗ ERROR: Failed to parse ${label}: ${err.message}`);
      allValid = false;
    }
  }

  return allValid;
}

// Run all verifications
console.log('=== IC Domain Verification Build Check ===');

const srcIcDomainsPath = join(projectRoot, 'src', '.well-known', 'ic-domains');
const publicIcDomainsPath = join(projectRoot, 'public', '.well-known', 'ic-domains');

const results = [
  verifyIcDomainsFile(srcIcDomainsPath, 'src/.well-known/ic-domains'),
  verifyIcDomainsFile(publicIcDomainsPath, 'public/.well-known/ic-domains'),
  verifyRedirectsFile(),
  verifyIcAssetsJson(),
];

console.log('\n=== Verification Summary ===');

if (results.every(r => r)) {
  console.log('✓ All checks passed! IC domain verification is correctly configured.');
  process.exit(0);
} else {
  console.error('✗ Some checks failed. Please review the errors above.');
  process.exit(1);
}
