const fs = require('fs');
const path = require('path');

// Find the actual JS and CSS files in dist/client/assets
const assetsDir = path.join(__dirname, 'dist/client/assets');
let jsFile = '';
let cssFile = '';

if (fs.existsSync(assetsDir)) {
  const files = fs.readdirSync(assetsDir);
  jsFile = files.find(f => f.startsWith('index-') && f.endsWith('.js')) || 'index.js';
  cssFile = files.find(f => f.startsWith('styles-') && f.endsWith('.css')) || 'styles.css';
}

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

const indexPath = path.join(__dirname, 'dist/client/index.html');
fs.writeFileSync(indexPath, html);
console.log('✓ Generated index.html');
