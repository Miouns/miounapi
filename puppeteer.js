const express = require('express');
const app = express();
const matter = require('gray-matter');
const md = require('markdown-it');
const ejs = require('ejs');

const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});
  const page = await browser.newPage();
  await page.goto('https://buddy.works');
  await page.screenshot({path: 'buddy-screenshot.png'});

  await browser.close();
})();

app.get('/', (req, res) => {
  res.send('a');
})

app.listen(process.env.PORT)
