const fs = require('fs');
const path = require('path');

// Ensure dist/client exists
const clientDir = path.join(__dirname, 'dist/client');
if (!fs.existsSync(clientDir)) {
  fs.mkdirSync(clientDir, { recursive: true });
}

// Find the actual JS and CSS files
const assetsDir = path.join(clientDir, 'assets');
let jsFile = 'index.js';
let cssFile = 'styles.css';

if (fs.existsSync(assetsDir)) {
  const files = fs.readdirSync(assetsDir);
  const foundJs = files.find(f => f.startsWith('index-') && f.endsWith('.js'));
  const foundCss = files.find(f => f.startsWith('styles-') && f.endsWith('.css'));
  if (foundJs) jsFile = foundJs;
  if (foundCss) cssFile = foundCss;
}

// Create index.html
const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>This Is Keeping You Stuck in Depression Depression No More</title>
  <link rel="stylesheet" href="/assets/${cssFile}" />
</head>
<body>
  <div id="root"></div>
  <script type="module" src="/assets/${jsFile}"><\/script>
</body>
</html>`;

const indexPath = path.join(clientDir, 'index.html');
fs.writeFileSync(indexPath, html);
console.log('✓ Generated index.html for Netlify');

// Create _redirects for SPA routing
const redirectsContent = `/*  /index.html  200`;
const redirectsPath = path.join(clientDir, '_redirects');
fs.writeFileSync(redirectsPath, redirectsContent);
console.log('✓ Generated _redirects for SPA routing');
