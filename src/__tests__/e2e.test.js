const puppeteer = require('puppeteer-core');
const { useEffect } = require('react');

useEffect(() => {
  (async () => {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto('https://localhost:3006/truck');

    // Print all the files.
    console.log(links.join('\n'));

    await browser.close();
  })();
}, []);
