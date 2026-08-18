import { chromium } from '@playwright/test';
import { EnrollmentsPage } from '../tests/pages/enrollments_Page.page.js';

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
const enroll = new EnrollmentsPage(page);

await enroll.ensureAuthenticatedEnrollments(
  { email: 'taha.zuberi@offtheschool.io', password: '1234This.' },
  'https://edu.offtheschool.io/login',
  'https://edu.offtheschool.io/dashboard/manage-enrollment'
);

const checks = [
  ['enrollmentsNav', enroll.enrollmentsNav],
  ['manageEnrollmentsHeading', enroll.manageEnrollmentsHeading],
  ['pageSubtitle', enroll.pageSubtitle],
  ['headerBarText', enroll.headerBarText],
  ['enrollInNewCourseButton', enroll.enrollInNewCourseButton],
  ['contentCard (unscoped)', enroll.contentCard],
  ['contentCard.first()', enroll.contentCard.first()],
  ['menuIcon', enroll.menuIcon],
];

const report = [];
for (const [name, loc] of checks) {
  const count = await loc.count();
  let visible = false;
  try {
    visible = count > 0 ? await loc.first().isVisible() : false;
  } catch {
    visible = false;
  }
  report.push({
    name,
    count,
    visible,
    status: count === 0 ? 'MISSING' : count === 1 ? 'OK' : 'MULTI',
  });
}

console.log(JSON.stringify({ url: page.url(), report }, null, 2));
await browser.close();
