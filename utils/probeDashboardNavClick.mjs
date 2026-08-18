import { chromium } from '@playwright/test';

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto('https://edu.offtheschool.io/login', { waitUntil: 'domcontentloaded' });
await page.getByRole('textbox', { name: 'Email Address' }).fill('taha.zuberi@offtheschool.io');
await page.getByLabel(/^Password/).or(page.getByRole('textbox', { name: 'Password' })).fill('1234This.');
await page.getByRole('button', { name: 'Sign In' }).click();
await page.waitForURL(/\/dashboard/i, { timeout: 45000 });
await page.waitForTimeout(2000);

async function expandSidebar() {
  if (!(await page.getByText('Switch Class', { exact: true }).isVisible())) {
    await page.getByRole('img', { name: 'menu icon' }).click();
    await page.getByText('Switch Class', { exact: true }).waitFor({ state: 'visible', timeout: 5000 });
  }
}

await expandSidebar();

await page.getByRole('group').filter({ hasText: 'Switch Class' }).click();
await page.waitForTimeout(2000);
console.log('switch', {
  url: page.url(),
  switchClasses: await page.getByRole('heading', { name: 'Switch Classes' }).count(),
  selectYourClass: await page.getByRole('heading', { name: 'Select Your Class' }).count(),
  available: await page.getByText('Available Classes').count(),
  close: await page.getByRole('button', { name: 'Close' }).count(),
});

if (await page.getByRole('button', { name: 'Close' }).count()) {
  await page.getByRole('button', { name: 'Close' }).first().click();
  await page.waitForTimeout(500);
}

await expandSidebar();
await page.getByRole('group').filter({ hasText: 'Quiz Tracking' }).click();
await page.waitForTimeout(2000);
console.log('quiz', page.url(), await page.getByRole('heading', { name: 'Quiz Performance Tracking' }).count());

await page.goto('https://edu.offtheschool.io/dashboard');
await page.waitForTimeout(1500);
await expandSidebar();
await page.getByRole('group').filter({ hasText: 'Leaderboard' }).click();
await page.waitForTimeout(2000);
console.log('leaderboard', page.url(), await page.getByRole('heading', { name: 'Leaderboard' }).count());

await page.goto('https://edu.offtheschool.io/dashboard');
await page.waitForTimeout(1500);
await page.getByRole('button', { name: 'Watch video' }).first().click();
await page.waitForTimeout(3000);
console.log('watch', page.url());

await page.goto('https://edu.offtheschool.io/dashboard');
await page.waitForTimeout(1500);
await page.getByRole('button', { name: 'Carousel view' }).click();
await page.waitForTimeout(800);
console.log('scroll after carousel', {
  left: await page.getByRole('button', { name: 'Scroll Left' }).count(),
  right: await page.getByRole('button', { name: 'Scroll Right' }).count(),
});
await page.getByRole('button', { name: 'Scroll Right' }).click();
await page.getByRole('button', { name: 'Scroll Left' }).click();
console.log('scroll ok');

await browser.close();
