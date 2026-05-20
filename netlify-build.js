import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Create _redirects for SPA routing
const clientDir = path.join(__dirname, 'dist/client');
const redirectsContent = `/*  /index.html  200`;
const redirectsPath = path.join(clientDir, '_redirects');
fs.writeFileSync(redirectsPath, redirectsContent);
console.log('✓ Generated _redirects for SPA routing');
