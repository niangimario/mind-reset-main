import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Ensure dist/client exists
const clientDir = path.join(__dirname, 'dist/client');
if (!fs.existsSync(clientDir)) {
  fs.mkdirSync(clientDir, { recursive: true });
}

// Copy public/index.html to dist/client/index.html
const sourceHtml = path.join(__dirname, 'public/index.html');
const targetHtml = path.join(clientDir, 'index.html');

if (fs.existsSync(sourceHtml)) {
  const html = fs.readFileSync(sourceHtml, 'utf-8');
  fs.writeFileSync(targetHtml, html);
  console.log('✓ Copied index.html to dist/client/');
}

// Create _redirects for SPA routing
const redirectsContent = `/*  /index.html  200`;
const redirectsPath = path.join(clientDir, '_redirects');
fs.writeFileSync(redirectsPath, redirectsContent);
console.log('✓ Generated _redirects for SPA routing');
