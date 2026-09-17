const https = require('https');

https.get('https://lhconstruction.ltd', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    // Extract images
    const imgMatches = [...data.matchAll(/https:\/\/img1\.wsimg\.com\/isteam\/ip\/[^\s"'<>\\]+/g)].map(m => m[0]);
    console.log('=== REAL WSIMG ASSETS ===');
    console.log([...new Set(imgMatches)].join('\n'));

    // Extract text blocks
    const textBlocks = [...data.matchAll(/>([^<]{15,})</g)]
      .map(m => m[1].replace(/&amp;/g, '&').replace(/&#39;/g, "'").replace(/&quot;/g, '"').trim())
      .filter(t => !t.includes('{') && !t.includes('function') && !t.includes('var ') && !t.includes('Copyright'));
    console.log('=== REAL TEXT CONTENT ===');
    console.log([...new Set(textBlocks)].join('\n'));
  });
}).on('error', err => console.error(err));
