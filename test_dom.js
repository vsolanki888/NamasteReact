const fs = require('fs');
const { JSDOM } = require('jsdom');

const html = fs.readFileSync('2.helloworldwithjs.html', 'utf8');
const dom = new JSDOM(html, { runScripts: 'dangerously', resources: 'usable' });

// Wait a short time for scripts to execute
setTimeout(() => {
  const h1 = dom.window.document.querySelector('h1');
  if (h1) {
    console.log('FOUND:', h1.textContent);
    process.exit(0);
  } else {
    console.error('h1 not found');
    console.log(dom.serialize());
    process.exit(2);
  }
}, 100);
