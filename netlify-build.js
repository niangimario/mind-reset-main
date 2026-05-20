import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Copy public/index.html to dist/client/index.html
const sourceHtml = path.join(__dirname, 'public/index.html');
const targetHtml = path.join(__dirname, 'dist/client/index.html');

if (fs.existsSync(sourceHtml)) {
  const html = fs.readFileSync(sourceHtml, 'utf-8');
  fs.writeFileSync(targetHtml, html);
  console.log('✓ Copied index.html to dist/client/');
}

// Create _redirects for SPA routing
const redirectsContent = `/*  /index.html  200`;
const redirectsPath = path.join(__dirname, 'dist/client/_redirects');
fs.writeFileSync(redirectsPath, redirectsContent);
console.log('✓ Generated _redirects for SPA routing');
