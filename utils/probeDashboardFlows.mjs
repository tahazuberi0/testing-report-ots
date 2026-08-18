import { chromium } from '@playwright/test';

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();

async function login() {
  await page.goto('https://edu.offtheschool.io/login', { waitUntil: 'domcontentloaded' });
  await page.getByRole('textbox', { name: 'Email Address' }).fill('taha.zuberi@offtheschool.io');
  await page.getByLabel(/^Password/).or(page.getByRole('textbox', { name: 'Password' })).fill('1234This.');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.waitForURL(/\/dashboard/i, { timeout: 45000 });
  await page.waitForTimeout(2000);
}

await login();

// Switch Class with force
await page.getByRole('group').filter({ hasText: 'Switch Class' }).click({ force: true });
await page.waitForTimeout(1500);
console.log('switch class', {
  url: page.url(),
  switchClasses: await page.getByRole('heading', { name: 'Switch Classes' }).count(),
  selectYourClass: await page.getByRole('heading', { name: 'Select Your Class' }).count(),
  available: await page.getByText('Available Classes').count(),
  close: await page.getByRole('button', { name: 'Close' }).count(),
  body: (await page.locator('body').innerText()).slice(0, 400),
});

if (await page.getByRole('button', { name: 'Close' }).count()) {
  await page.getByRole('button', { name: 'Close' }).first().click({ force: true });
  await page.waitForTimeout(500);
}

await page.goto('https://edu.offtheschool.io/dashboard');
await page.waitForTimeout(2000);

await page.getByRole('group').filter({ hasText: 'Enrollments' }).click({ force: true });
await page.waitForTimeout(2000);
console.log('enrollments', {
  url: page.url(),
  heading: await page.getByRole('heading', { name: 'Manage Enrollments' }).count(),
});

await page.goto('https://edu.offtheschool.io/dashboard');
await page.waitForTimeout(1500);
await page.getByRole('group').filter({ hasText: 'Quiz Tracking' }).click({ force: true });
await page.waitForTimeout(2000);
console.log('quiz', {
  url: page.url(),
  heading: await page.getByRole('heading', { name: 'Quiz Performance Tracking' }).count(),
});

await page.goto('https://edu.offtheschool.io/dashboard');
await page.waitForTimeout(1500);
await page.getByRole('group').filter({ hasText: 'Leaderboard' }).click({ force: true });
await page.waitForTimeout(2000);
console.log('leaderboard', {
  url: page.url(),
  heading: await page.getByRole('heading', { name: 'Leaderboard' }).count(),
});

await page.goto('https://edu.offtheschool.io/dashboard');
await page.waitForTimeout(1500);
await page.getByRole('button', { name: 'Watch video' }).first().click({ force: true });
await page.waitForTimeout(3000);
console.log('watch video dest', page.url());

await page.goto('https://edu.offtheschool.io/dashboard');
await page.waitForTimeout(1500);
await page.getByRole('button', { name: 'Start Learning' }).first().click({ force: true });
await page.waitForTimeout(3000);
console.log('start learning dest', page.url());

const ctx2 = await browser.newContext();
const p2 = await ctx2.newPage();
await p2.goto('https://edu.offtheschool.io/dashboard', { waitUntil: 'networkidle' });
await p2.waitForTimeout(2000);
console.log('unauth', {
  url: p2.url(),
  mySubjects: await p2.getByRole('heading', { name: 'My Subjects' }).count(),
});

await browser.close();
