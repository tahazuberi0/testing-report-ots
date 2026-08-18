import { chromium } from '@playwright/test';
import { HomePage } from '../tests/pages/HomePage.page.js';

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();
await page.goto('https://edu.offtheschool.io/', { waitUntil: 'networkidle', timeout: 60000 });
await page.waitForTimeout(2000);

const home = new HomePage(page);
await home.headerMenuButton.click().catch(() => {});

const checks = [
  ['logo', home.logo],
  ['otsLogo', home.otsLogo],
  ['homeNav', home.homeNav],
  ['exploreNav', home.exploreNav],
  ['reelsNav', home.reelsNav],
  ['headerMenuButton', home.headerMenuButton],
  ['dashboardMenuItem', home.dashboardMenuItem],
  ['registerMenuItem', home.registerMenuItem],
  ['heroBadge', home.heroBadge],
  ['heroJourneyText', home.heroJourneyText],
  ['heroGrowthText', home.heroGrowthText],
  ['heroValuePropText', home.heroValuePropText],
  ['searchInput', home.searchInput],
  ['startLearningFreeLink', home.startLearningFreeLink],
  ['digitalSchoolHeading', home.digitalSchoolHeading],
  ['kindergartenLink', home.kindergartenLink],
  ['primaryLink', home.primaryLink],
  ['secondaryLink', home.secondaryLink],
  ['higherSecondaryLink', home.higherSecondaryLink],
  ['appliedLearningText', home.appliedLearningText],
  ['skilledCoursesText', home.skilledCoursesText],
  ['viewAllSkillsLink', home.viewAllSkillsLink],
  ['basicComputerLink', home.basicComputerLink],
  ['canvaDesignLink', home.canvaDesignLink],
  ['webDesignLink', home.webDesignLink],
  ['ourImpactText', home.ourImpactText],
  ['activeStudentsStat', home.activeStudentsStat],
  ['edTechVideosStat', home.edTechVideosStat],
  ['lessonsCoveredStat', home.lessonsCoveredStat],
  ['educatorsStat', home.educatorsStat],
  ['howItWorksText', home.howItWorksText],
  ['getStartLink', home.getStartLink],
  ['youtubeHubHeading', home.youtubeHubHeading],
  ['channelLogo', home.channelLogo],
  ['subsText', home.subsText],
  ['videosCountText', home.videosCountText],
  ['viewsText', home.viewsText],
  ['subscribeLink', home.subscribeLink],
  ['viewAllVideosLink', home.viewAllVideosLink],
  ['dailyMicroLearningText', home.dailyMicroLearningText],
  ['followInstagramLink', home.followInstagramLink],
  ['startLearningExactLink', home.startLearningExactLink],
  ['offTheSchoolChannelLink', home.offTheSchoolChannelLink],
  ['edNewsLink', home.edNewsLink],
  ['subscribeOurChannelsLink', home.subscribeOurChannelsLink],
  ['stayUpdatedText', home.stayUpdatedText],
  ['footerTagline', home.footerTagline],
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
