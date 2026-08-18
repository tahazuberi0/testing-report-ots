import { chromium } from '@playwright/test';
import { ExplorePage } from '../tests/pages/Explore-Page.page.js';

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();
await page.goto('https://edu.offtheschool.io/explore', {
  waitUntil: 'networkidle',
  timeout: 60000,
});
await page.waitForTimeout(2000);

const explore = new ExplorePage(page);

const checks = [
  ['digitalSchoolHeading', explore.digitalSchoolHeading],
  ['skillsAcademyHeading', explore.skillsAcademyHeading],
  ['digitalSchoolStartBtn (Explore Courses, scoped)', explore.digitalSchoolStartBtn],
  ['skillsAcademyStartBtn (Explore Courses, scoped)', explore.skillsAcademyStartBtn],
  ['digitalSchoolCard', explore.digitalSchoolCard],
  ['skillsAcademyCard', explore.skillsAcademyCard],
  ["selectors.md Let's Start! (unscoped)", explore.digitalSchoolLetsStartBtn],
  ['unscoped Explore Courses buttons', page.getByRole('button', { name: 'Explore Courses' })],
];

const report = [];
for (const [name, locator] of checks) {
  const count = await locator.count();
  let status = 'OK';
  if (count === 0) status = 'MISSING';
  else if (count > 1) status = 'MULTI';
  report.push({ name, count, status });
}

console.log(
  JSON.stringify(
    {
      url: page.url(),
      summary: {
        ok: report.filter((r) => r.status === 'OK').length,
        multi: report.filter((r) => r.status === 'MULTI').length,
        missing: report.filter((r) => r.status === 'MISSING').length,
      },
      multi: report.filter((r) => r.status === 'MULTI'),
      missing: report.filter((r) => r.status === 'MISSING'),
      report,
    },
    null,
    2
  )
);
await browser.close();
