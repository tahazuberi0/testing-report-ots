import { chromium } from '@playwright/test';

const checks = [
  { name: 'Logo img', fn: (p) => p.getByRole('img', { name: 'Logo', exact: true }) },
  { name: 'OTS Logo img', fn: (p) => p.getByRole('img', { name: 'OTS Logo' }) },
  { name: 'Home text', fn: (p) => p.getByText('Home') },
  { name: 'Explore exact', fn: (p) => p.getByText('Explore', { exact: true }) },
  { name: 'Reels text', fn: (p) => p.getByText('Reels') },
  { name: 'menu-button prefix', fn: (p) => p.locator('[id^="menu-button-"]') },
  { name: 'Dashboard menuitem', fn: (p) => p.getByRole('menuitem', { name: 'Dashboard' }) },
  { name: 'Register menuitem', fn: (p) => p.getByRole('menuitem', { name: 'Register' }) },
  {
    name: 'Hero badge nth(1)',
    fn: (p) =>
      p.locator('div').filter({ hasText: /^Pakistan's First Free EdTech Platform$/ }).nth(1),
  },
  { name: 'Your Journey to', fn: (p) => p.getByText('Your Journey to') },
  { name: 'Growth', fn: (p) => p.getByText('Growth') },
  { name: 'Free,world-class education', fn: (p) => p.getByText('Free,world-class education') },
  {
    name: 'Search textbox',
    fn: (p) => p.getByRole('textbox', { name: 'Search chapters by title (e.g' }),
  },
  {
    name: "Start Learning — It's Free",
    fn: (p) => p.getByRole('link', { name: "Start Learning — It's Free" }),
  },
  { name: 'Digital School', fn: (p) => p.getByText('Digital School') },
  {
    name: 'Kindergarten link',
    fn: (p) => p.getByRole('link', { name: 'Kindergarten Early learning' }),
  },
  {
    name: 'Primary link',
    fn: (p) => p.getByRole('link', { name: 'Primary Classes 1-5 with core' }),
  },
  {
    name: 'Secondary link',
    fn: (p) => p.getByRole('link', { name: 'Secondary Classes 6-8 with' }),
  },
  {
    name: 'Higher Secondary link',
    fn: (p) => p.getByRole('link', { name: 'Higher Secondary Classes 9-12' }),
  },
  { name: 'Applied Learning', fn: (p) => p.getByText('Applied Learning') },
  { name: 'Skilled Courses', fn: (p) => p.getByText('Skilled Courses') },
  { name: 'View All Skills', fn: (p) => p.getByRole('link', { name: 'View All Skills' }) },
  {
    name: 'Basic Computer',
    fn: (p) => p.getByRole('link', { name: 'Basic Computer Fundamentals' }),
  },
  {
    name: 'Canva Design',
    fn: (p) => p.getByRole('link', { name: 'Canva Design Graphic design' }),
  },
  {
    name: 'Web Design',
    fn: (p) => p.getByRole('link', { name: 'Web Design Canva, Photoshop' }),
  },
  { name: 'Our Impact', fn: (p) => p.getByText('Our Impact') },
  { name: 'Numbers That Speak', fn: (p) => p.getByText('Numbers That Speak') },
  {
    name: 'Transforming education across',
    fn: (p) => p.getByText('Transforming education across'),
  },
  {
    name: '5,000+Active Students nth(1)',
    fn: (p) => p.locator('div').filter({ hasText: /^5,000\+Active Students$/ }).nth(1),
  },
  {
    name: '500+EdTech videos nth(1)',
    fn: (p) => p.locator('div').filter({ hasText: /^500\+EdTech videos$/ }).nth(1),
  },
  {
    name: '1,000+lessons covered nth(1)',
    fn: (p) => p.locator('div').filter({ hasText: /^1,000\+lessons covered$/ }).nth(1),
  },
  {
    name: '200+Educators nth(1)',
    fn: (p) => p.locator('div').filter({ hasText: /^200\+Educators$/ }).nth(1),
  },
  { name: 'The learning Flow', fn: (p) => p.getByText('The learning Flow') },
  { name: 'How It Works exact', fn: (p) => p.getByText('How It Works', { exact: true }) },
  { name: 'Start your learning journey', fn: (p) => p.getByText('Start your learning journey') },
  { name: 'Create Account', fn: (p) => p.getByText('Create Account') },
  { name: 'Sign up for free in seconds.', fn: (p) => p.getByText('Sign up for free in seconds.') },
  { name: 'Choose Your Class', fn: (p) => p.getByText('Choose Your Class') },
  { name: 'Select your grade level and', fn: (p) => p.getByText('Select your grade level and') },
  {
    name: 'Start Learning paragraph',
    fn: (p) => p.getByRole('paragraph').filter({ hasText: 'Start Learning' }),
  },
  {
    name: 'Watch engaging video lessons',
    fn: (p) => p.getByText('Watch engaging video lessons'),
  },
  { name: 'Track Progress', fn: (p) => p.getByText('Track Progress') },
  {
    name: 'Monitor your improvement and',
    fn: (p) => p.getByText('Monitor your improvement and'),
  },
  { name: 'Get Start link', fn: (p) => p.getByRole('link', { name: 'Get Start' }) },
  {
    name: 'Video Lessons marker',
    fn: (p) => p.locator('div').filter({ hasText: /^Video Lessons$/ }),
  },
  {
    name: 'Our YouTube Learning Hub',
    fn: (p) => p.getByRole('heading', { name: 'Our YouTube Learning Hub' }),
  },
  { name: 'Channel Logo', fn: (p) => p.getByRole('img', { name: 'Channel Logo' }) },
  { name: 'OTS EdTech heading', fn: (p) => p.getByRole('heading', { name: 'OTS EdTech' }) },
  { name: '2.0K Subs', fn: (p) => p.getByText('2.0K Subs') },
  { name: '496 Videos', fn: (p) => p.getByText('496 Videos') },
  { name: '146.2K Views', fn: (p) => p.getByText('146.2K Views') },
  { name: 'Subscribe exact link', fn: (p) => p.getByRole('link', { name: 'Subscribe', exact: true }) },
  { name: 'View All Videos', fn: (p) => p.getByRole('link', { name: 'View All Videos' }) },
  { name: 'Daily Micro Learning', fn: (p) => p.getByText('Daily Micro Learning') },
  {
    name: 'Learn Something New In A',
    fn: (p) => p.getByRole('heading', { name: 'Learn Something New In A' }),
  },
  { name: 'Scroll, Tap and Learn.', fn: (p) => p.getByText('Scroll, Tap and Learn.') },
  {
    name: 'Follow us on Instagram',
    fn: (p) => p.getByRole('link', { name: 'Follow us on Instagram' }),
  },
  { name: 'Avg reel length', fn: (p) => p.getByText('Avg reel length') },
  { name: 'Concepts simplified', fn: (p) => p.getByText('Concepts simplified') },
  { name: 'Monthly views', fn: (p) => p.getByText('Monthly views') },
  { name: '500+ paragraph', fn: (p) => p.getByRole('paragraph').filter({ hasText: '500+' }) },
  { name: '100K+', fn: (p) => p.getByText('100K+') },
  {
    name: 'Start Learning exact link',
    fn: (p) => p.getByRole('link', { name: 'Start Learning', exact: true }),
  },
  { name: 'Our YouTube Channels', fn: (p) => p.getByText('Our YouTube Channels') },
  { name: 'Explore Our exact', fn: (p) => p.getByText('Explore Our', { exact: true }) },
  { name: 'Educational Network', fn: (p) => p.getByText('Educational Network') },
  {
    name: 'Off The School Comprehensive',
    fn: (p) => p.getByRole('link', { name: 'Off The School Comprehensive' }),
  },
  {
    name: 'EdNews Latest education',
    fn: (p) => p.getByRole('link', { name: 'EdNews Latest education' }),
  },
  {
    name: 'EdTech Technology-driven',
    fn: (p) => p.getByRole('link', { name: 'EdTech Technology-driven' }),
  },
  {
    name: 'EdSense Educational insights',
    fn: (p) => p.getByRole('link', { name: 'EdSense Educational insights' }),
  },
  {
    name: 'EdFun Fun & engaging learning',
    fn: (p) => p.getByRole('link', { name: 'EdFun Fun & engaging learning' }),
  },
  {
    name: 'Subscribe Our Channels',
    fn: (p) => p.getByRole('link', { name: 'Subscribe Our Channels' }),
  },
  {
    name: 'Stay UpdatedSubscribe to our',
    fn: (p) => p.getByText('Stay UpdatedSubscribe to our'),
  },
  {
    name: 'Footer tagline nth(5)',
    fn: (p) =>
      p
        .locator('div')
        .filter({
          hasText:
            "Pakistan's first free EdTech platform. Learn smartly at your own Pace, Anywhere",
        })
        .nth(5),
  },
];

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();
await page.goto('https://edu.offtheschool.io/', { waitUntil: 'networkidle', timeout: 60000 });
await page.waitForTimeout(2000);

const results = [];
for (const check of checks) {
  const locator = check.fn(page);
  let count = 0;
  let error = null;
  try {
    count = await locator.count();
  } catch (e) {
    error = e.message;
  }

  // For menuitems, open menu first and recount
  if ((check.name.includes('menuitem') || check.name.includes('Menu')) && count === 0) {
    try {
      await page.locator('[id^="menu-button-"]').first().click({ timeout: 3000 });
      count = await locator.count();
    } catch {
      // ignore
    }
  }

  let status = 'OK';
  if (error) status = 'ERROR';
  else if (count === 0) status = 'MISSING';
  else if (count > 1) status = 'MULTI';

  results.push({ name: check.name, count, status, error });
}

const multi = results.filter((r) => r.status === 'MULTI');
const missing = results.filter((r) => r.status === 'MISSING');
const ok = results.filter((r) => r.status === 'OK');

console.log(JSON.stringify({ summary: { ok: ok.length, multi: multi.length, missing: missing.length, total: results.length }, multi, missing, all: results }, null, 2));
await browser.close();
