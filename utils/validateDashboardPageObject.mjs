import { chromium } from '@playwright/test';
import { DashboardPage } from '../tests/pages/Dashboard.page.js';

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
const dash = new DashboardPage(page);

await dash.ensureAuthenticatedDashboard(
  { email: 'taha.zuberi@offtheschool.io', password: '1234This.' },
  'https://edu.offtheschool.io/login',
  'https://edu.offtheschool.io/dashboard'
);

const checks = [
  ['otsLogo', dash.otsLogo],
  ['menuIcon', dash.menuIcon],
  ['dashboardNav', dash.dashboardNav],
  ['switchClassNav', dash.switchClassNav],
  ['enrollmentsNav', dash.enrollmentsNav],
  ['quizTrackingNav', dash.quizTrackingNav],
  ['leaderboardNav', dash.leaderboardNav],
  ['yourProgressHeading', dash.yourProgressHeading],
  ['overallCompletionText', dash.overallCompletionText],
  ['progressLabel', dash.progressLabel],
  ['mySubjectsHeading', dash.mySubjectsHeading],
  ['mySubjectsEnrolled', dash.mySubjectsEnrolled],
  ['gridViewButton', dash.gridViewButton],
  ['carouselViewButton', dash.carouselViewButton],
  ['watchVideoButton', dash.watchVideoButton],
  ['startLearningButton', dash.startLearningButton],
  ['closeButton (idle)', dash.closeButton],
  ['scrollRight (idle)', dash.scrollRightButton],
];

const report = [];
for (const [name, loc] of checks) {
  const count = await loc.count();
  report.push({
    name,
    count,
    status: count === 0 ? 'MISSING' : count === 1 ? 'OK' : 'MULTI',
  });
}

await dash.enableCarouselView();
report.push({
  name: 'scrollRight (carousel)',
  count: await dash.scrollRightButton.count(),
  status: (await dash.scrollRightButton.count()) === 1 ? 'OK' : 'MULTI/MISSING',
});
report.push({
  name: 'scrollLeft (carousel)',
  count: await dash.scrollLeftButton.count(),
  status: (await dash.scrollLeftButton.count()) === 1 ? 'OK' : 'MULTI/MISSING',
});

await dash.gotoDashboard();
await dash.openWatchVideo();
report.push({
  name: 'closeButton (after Watch video)',
  count: await dash.closeButton.count(),
  status: (await dash.closeButton.count()) >= 1 ? 'OK' : 'MISSING',
});
report.push({
  name: 'lectureDialog (after Watch video)',
  count: await dash.lectureDialog.count(),
  status: (await dash.lectureDialog.count()) === 1 ? 'OK' : 'MULTI/MISSING',
});

console.log(JSON.stringify(report, null, 2));
await browser.close();
