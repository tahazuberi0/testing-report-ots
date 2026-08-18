import { chromium } from '@playwright/test';

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto('https://edu.offtheschool.io/login', { waitUntil: 'domcontentloaded' });
await page.getByRole('textbox', { name: 'Email Address' }).fill('taha.zuberi@offtheschool.io');
await page.getByLabel(/^Password/).or(page.getByRole('textbox', { name: 'Password' })).fill('1234This.');
await page.getByRole('button', { name: 'Sign In' }).click();
await page.waitForURL(/\/dashboard/i, { timeout: 45000 });
await page.goto('https://edu.offtheschool.io/dashboard/manage-enrollment', {
  waitUntil: 'domcontentloaded',
});
await page.waitForTimeout(2500);

const buttons = await page.getByRole('button').allTextContents();
const links = await page.getByRole('link').allTextContents();
console.log('url', page.url());
console.log('buttons', buttons);
console.log('links', links.slice(0, 40));
console.log('enroll text', await page.getByText(/enroll/i).count());
const enrolls = page.getByText(/enroll/i);
for (let i = 0; i < Math.min(await enrolls.count(), 8); i++) {
  const info = await enrolls.nth(i).evaluate((n) => ({
    tag: n.tagName,
    role: n.getAttribute('role'),
    text: n.textContent?.trim().slice(0, 80),
  }));
  console.log(i, info);
}
console.log('body snippet', (await page.locator('body').innerText()).slice(0, 1500));

await browser.close();
