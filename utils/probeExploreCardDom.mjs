import { chromium } from '@playwright/test';

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();
await page.goto('https://edu.offtheschool.io/explore', {
  waitUntil: 'networkidle',
  timeout: 60000,
});
await page.waitForTimeout(2000);

const heading = page.getByRole('heading', { name: 'Digital School' });
const info = await heading.evaluate((el) => {
  const walk = [];
  let n = el;
  for (let i = 0; i < 8 && n; i += 1) {
    walk.push({
      tag: n.tagName,
      className: (n.className || '').toString().slice(0, 80),
      buttonCount: n.querySelectorAll('button').length,
      headings: [...n.querySelectorAll('h1,h2,h3,h4,h5,h6')].map((h) => h.textContent.trim()),
    });
    n = n.parentElement;
  }
  return walk;
});

const siblingBtn = await heading.evaluate((el) => {
  const parent = el.parentElement;
  return {
    parentTag: parent?.tagName,
    parentText: parent?.innerText?.slice(0, 200),
    buttons: [...(parent?.querySelectorAll('button') || [])].map((b) => b.innerText.trim()),
  };
});

console.log(JSON.stringify({ info, siblingBtn }, null, 2));
await browser.close();
