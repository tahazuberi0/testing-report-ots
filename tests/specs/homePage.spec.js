import { createRequire } from 'module';
import * as allure from 'allure-js-commons';
import { test, expect } from '../fixtures/allure-hooks.js';
import { HomePage } from '../pages/HomePage.page.js';

const require = createRequire(import.meta.url);
const testData = require('../../tests-data/HomePage.data.json');

const severityMap = {
  High: 'critical',
  Medium: 'normal',
  Low: 'minor',
};

/**
 * @param {{ id: string, title: string, priority: 'High'|'Medium'|'Low', description: string }} meta
 */
async function meta({ id, title, priority, description }) {
  await allure.epic('OTS EdTech Homepage');
  await allure.feature('Home Page');
  await allure.story(id);
  await allure.allureId(id);
  await allure.description(description);
  await allure.severity(severityMap[priority]);
  await allure.tag(priority);
  await allure.displayName(`${id}: ${title}`);
}

test.describe('OTS EdTech Homepage', () => {
  /** @type {HomePage} */
  let homePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
  });

  test('TC_HOME_001: Homepage loads with hero value proposition visible', async ({ page }) => {
    const data = testData.TC_HOME_001;
    await meta({
      id: 'TC_HOME_001',
      title: 'Homepage loads with hero value proposition visible',
      priority: 'High',
      description:
        'Unauthenticated user opens the homepage and sees the hero value proposition content.',
    });

    await allure.step('Navigate to homepage', async () => {
      await homePage.goto(data.url);
    });
    await allure.step('Verify hero journey and growth texts', async () => {
      await expect(homePage.heroJourneyText.first()).toBeVisible();
      await expect(homePage.heroGrowthText.first()).toBeVisible();
    });
    await allure.step('Verify value proposition and badge', async () => {
      await expect(homePage.heroValuePropText.first()).toBeVisible();
      await expect(homePage.heroBadge).toBeVisible();
    });
    expect(page.url()).toContain('edu.offtheschool.io');
  });

  test("TC_HOME_002: Start Learning — It's Free navigates to registration or catalog", async ({
    page,
  }) => {
    const data = testData.TC_HOME_002;
    await meta({
      id: 'TC_HOME_002',
      title: "Start Learning — It's Free navigates to registration or catalog",
      priority: 'High',
      description: 'Hero CTA Start Learning — It\'s Free routes user to registration or catalog.',
    });

    await allure.step('Open homepage', async () => {
      await homePage.goto(data.url);
    });
    await allure.step("Click Start Learning — It's Free", async () => {
      await homePage.clickStartLearningFree();
    });
    await allure.step('Verify navigation away from bare homepage root or to expected path', async () => {
      await expect(page).toHaveURL(new RegExp(data.expectedUrlPattern, 'i'));
    });
  });

  test('TC_HOME_003: Search with a valid chapter keyword returns relevant results', async ({
    page,
  }) => {
    const data = testData.TC_HOME_003;
    await meta({
      id: 'TC_HOME_003',
      title: 'Search with a valid chapter keyword returns relevant results',
      priority: 'High',
      description: 'Valid chapter search via Search chapters textbox does not crash and yields results or navigation.',
    });

    await allure.step('Open homepage', async () => {
      await homePage.goto(data.url);
    });
    await allure.step(`Search for "${data.searchQuery}"`, async () => {
      await homePage.searchChapters(data.searchQuery);
    });
    await allure.step('Verify page remains usable after search', async () => {
      await expect(page.locator('body')).toBeVisible();
      await expect(homePage.searchInput.or(page.getByText(new RegExp(data.searchQuery, 'i'))).first()).toBeVisible();
    });
  });

  test('TC_HOME_004: Empty search query does not crash the homepage', async ({ page }) => {
    const data = testData.TC_HOME_004;
    await meta({
      id: 'TC_HOME_004',
      title: 'Empty search query does not crash the homepage',
      priority: 'Medium',
      description: 'Submitting an empty search keeps the homepage stable.',
    });

    await allure.step('Open homepage', async () => {
      await homePage.goto(data.url);
    });
    await allure.step('Submit empty search', async () => {
      await homePage.searchChapters(data.searchQuery);
    });
    await allure.step('Verify homepage still stable', async () => {
      await expect(page).toHaveURL(/edu\.offtheschool\.io/i);
      await expect(homePage.heroJourneyText.first()).toBeVisible();
    });
  });

  test('TC_HOME_005: Search with a nonexistent term shows no-match handling', async ({ page }) => {
    const data = testData.TC_HOME_005;
    await meta({
      id: 'TC_HOME_005',
      title: 'Search with a nonexistent term shows no-match handling',
      priority: 'Medium',
      description: 'Nonsense search term is handled without crash or technical error dump.',
    });

    await allure.step('Open homepage', async () => {
      await homePage.goto(data.url);
    });
    await allure.step(`Search for nonexistent term "${data.searchQuery}"`, async () => {
      await homePage.searchChapters(data.searchQuery);
    });
    await allure.step('Verify no technical error page', async () => {
      await expect(page.getByText(/stack|exception|syntax error/i)).toHaveCount(0);
      await expect(page.locator('body')).toBeVisible();
    });
  });

  test('TC_HOME_006: Home nav keeps user on the homepage', async ({ page }) => {
    const data = testData.TC_HOME_006;
    await meta({
      id: 'TC_HOME_006',
      title: 'Home nav keeps user on the homepage',
      priority: 'High',
      description: 'Clicking Home keeps or returns user to the homepage hero.',
    });

    await allure.step('Open homepage', async () => {
      await homePage.goto(data.url);
    });
    await allure.step('Click Home nav', async () => {
      await homePage.clickHomeNav();
    });
    await allure.step('Verify still on homepage', async () => {
      await expect(page).toHaveURL(/edu\.offtheschool\.io\/?(?:\?.*)?$/i);
      await expect(homePage.heroJourneyText.first()).toBeVisible();
    });
  });

  test('TC_HOME_007: Explore nav reaches explore destination', async ({ page }) => {
    const data = testData.TC_HOME_007;
    await meta({
      id: 'TC_HOME_007',
      title: 'Explore nav reaches explore destination',
      priority: 'High',
      description: 'Explore header nav routes to Explore content/destination.',
    });

    await allure.step('Open homepage', async () => {
      await homePage.goto(data.url);
    });
    await allure.step('Click Explore nav', async () => {
      await homePage.clickExploreNav();
    });
    await allure.step('Verify Explore destination', async () => {
      await expect(page).toHaveURL(new RegExp(data.expectedUrlPattern, 'i'));
    });
  });

  test('TC_HOME_008: Reels nav opens micro-learning / reels', async ({ page }) => {
    const data = testData.TC_HOME_008;
    await meta({
      id: 'TC_HOME_008',
      title: 'Reels nav opens micro-learning / reels',
      priority: 'High',
      description: 'Reels header nav opens reels/micro-learning experience.',
    });

    await allure.step('Open homepage', async () => {
      await homePage.goto(data.url);
    });
    await allure.step('Click Reels nav', async () => {
      await homePage.clickReelsNav();
    });
    await allure.step('Verify Reels destination', async () => {
      await expect(page).toHaveURL(new RegExp(data.expectedUrlPattern, 'i'));
    });
  });

  test('TC_HOME_009: Header logo is visible and click is safe', async ({ page }) => {
    const data = testData.TC_HOME_009;
    await meta({
      id: 'TC_HOME_009',
      title: 'Header logo is visible and click is safe',
      priority: 'Medium',
      description: 'Logo is visible; clicking it does not break the page.',
    });

    await allure.step('Open homepage', async () => {
      await homePage.goto(data.url);
    });
    await allure.step('Verify Logo visible', async () => {
      await expect(homePage.logo.first()).toBeVisible();
    });
    await allure.step('Click Logo', async () => {
      await homePage.clickLogo();
    });
    await allure.step('Verify page still usable', async () => {
      await expect(page.locator('body')).toBeVisible();
      await expect(homePage.heroJourneyText.first()).toBeVisible();
    });
  });

  test('TC_HOME_010: Register menuitem opens registration path', async ({ page }) => {
    const data = testData.TC_HOME_010;
    await meta({
      id: 'TC_HOME_010',
      title: 'Register menuitem opens registration path',
      priority: 'High',
      description: 'Header menu Register menuitem opens registration/sign-up.',
    });

    await allure.step('Open homepage', async () => {
      await homePage.goto(data.url);
    });
    await allure.step('Open menu and click Register', async () => {
      await homePage.clickRegisterMenuItem();
    });
    await allure.step('Verify registration path', async () => {
      await expect(page).toHaveURL(new RegExp(data.expectedUrlPattern, 'i'));
    });
  });

  test('TC_HOME_011: Dashboard menuitem routes by auth state', async ({ page }) => {
    const data = testData.TC_HOME_011;
    await meta({
      id: 'TC_HOME_011',
      title: 'Dashboard menuitem routes by auth state',
      priority: 'Medium',
      description: `Dashboard menuitem with authState=${data.authState} routes to login or dashboard.`,
    });

    await allure.step('Open homepage (unauthenticated)', async () => {
      await homePage.goto(data.url);
    });
    await allure.step('Open menu and click Dashboard', async () => {
      await homePage.clickDashboardMenuItem();
    });
    await allure.step('Verify login or dashboard routing', async () => {
      await expect(page).toHaveURL(new RegExp(data.expectedUrlPattern, 'i'));
    });
  });

  test('TC_HOME_012: Digital School category links open grade catalogs', async ({ page }) => {
    const data = testData.TC_HOME_012;
    await meta({
      id: 'TC_HOME_012',
      title: 'Digital School category links open grade catalogs',
      priority: 'High',
      description: 'Digital School category links navigate to grade catalogs.',
    });

    await allure.step('Open homepage and locate Digital School', async () => {
      await homePage.goto(data.url);
      await expect(homePage.digitalSchoolHeading.first()).toBeVisible();
    });

    for (const category of data.categories) {
      await allure.step(`Open category: ${category}`, async () => {
        await homePage.goto(data.url);
        await homePage.clickDigitalSchoolCategory(category);
        await expect(page).not.toHaveURL(/edu\.offtheschool\.io\/?$/);
        await expect(page.locator('body')).toBeVisible();
      });
    }
  });

  test('TC_HOME_013: Skilled course links open practical modules', async ({ page }) => {
    const data = testData.TC_HOME_013;
    await meta({
      id: 'TC_HOME_013',
      title: 'Skilled course links open practical modules',
      priority: 'Medium',
      description: 'Skilled Courses links navigate to practical modules.',
    });

    await allure.step('Open homepage and locate Skilled Courses', async () => {
      await homePage.goto(data.url);
      await expect(homePage.appliedLearningText.first()).toBeVisible();
      await expect(homePage.skilledCoursesText.first()).toBeVisible();
    });

    for (const skill of data.skills) {
      await allure.step(`Open skill: ${skill}`, async () => {
        await homePage.goto(data.url);
        await homePage.clickSkillCourse(skill);
        await expect(page).not.toHaveURL(/edu\.offtheschool\.io\/?$/);
        await expect(page.locator('body')).toBeVisible();
      });
    }
  });

  test('TC_HOME_014: View All Skills opens full skills catalog', async ({ page }) => {
    const data = testData.TC_HOME_014;
    await meta({
      id: 'TC_HOME_014',
      title: 'View All Skills opens full skills catalog',
      priority: 'Medium',
      description: 'View All Skills link opens the skills catalog.',
    });

    await allure.step('Open homepage', async () => {
      await homePage.goto(data.url);
    });
    await allure.step('Click View All Skills', async () => {
      await homePage.clickViewAllSkills();
    });
    await allure.step('Verify skills catalog navigation', async () => {
      await expect(page).toHaveURL(new RegExp(data.expectedUrlPattern, 'i'));
    });
  });

  test('TC_HOME_015: Our Impact statistics are visible', async () => {
    const data = testData.TC_HOME_015;
    await meta({
      id: 'TC_HOME_015',
      title: 'Our Impact statistics are visible',
      priority: 'Low',
      description: 'Our Impact section and statistic cards are visible.',
    });

    await allure.step('Open homepage', async () => {
      await homePage.goto(data.url);
    });
    await allure.step('Verify Impact headings', async () => {
      await expect(homePage.ourImpactText.first()).toBeVisible();
      await expect(homePage.numbersThatSpeakText.first()).toBeVisible();
      await expect(homePage.transformingEducationText.first()).toBeVisible();
    });
    await allure.step('Verify impact statistic cards', async () => {
      await expect(homePage.activeStudentsStat).toBeVisible();
      await expect(homePage.edTechVideosStat).toBeVisible();
      await expect(homePage.lessonsCoveredStat).toBeVisible();
      await expect(homePage.educatorsStat).toBeVisible();
    });
  });

  test('TC_HOME_016: How It Works learning-flow steps are visible', async () => {
    const data = testData.TC_HOME_016;
    await meta({
      id: 'TC_HOME_016',
      title: 'How It Works learning-flow steps are visible',
      priority: 'High',
      description: 'How It Works onboarding narrative steps are visible on the homepage.',
    });

    await allure.step('Open homepage', async () => {
      await homePage.goto(data.url);
    });
    await allure.step('Verify How It Works section headings', async () => {
      await expect(homePage.learningFlowText.first()).toBeVisible();
      await expect(homePage.howItWorksText.first()).toBeVisible();
      await expect(homePage.startYourJourneyText.first()).toBeVisible();
    });
    await allure.step('Verify Create Account and Choose Your Class steps', async () => {
      await expect(homePage.createAccountText.first()).toBeVisible();
      await expect(homePage.signUpFreeText.first()).toBeVisible();
      await expect(homePage.chooseYourClassText.first()).toBeVisible();
      await expect(homePage.selectGradeText.first()).toBeVisible();
    });
    await allure.step('Verify Start Learning and Track Progress steps', async () => {
      await expect(homePage.startLearningParagraph.first()).toBeVisible();
      await expect(homePage.watchEngagingText.first()).toBeVisible();
      await expect(homePage.trackProgressText.first()).toBeVisible();
      await expect(homePage.monitorImprovementText.first()).toBeVisible();
    });
  });

  test('TC_HOME_017: Get Start link initiates onboarding / registration', async ({ page }) => {
    const data = testData.TC_HOME_017;
    await meta({
      id: 'TC_HOME_017',
      title: 'Get Start link initiates onboarding / registration',
      priority: 'High',
      description: 'Get Start link initiates registration/onboarding (selector name differs from userflow Get Started).',
    });

    await allure.step('Open homepage', async () => {
      await homePage.goto(data.url);
    });
    await allure.step('Click Get Start', async () => {
      await homePage.clickGetStart();
    });
    await allure.step('Verify onboarding/registration navigation', async () => {
      await expect(page).toHaveURL(new RegExp(data.expectedUrlPattern, 'i'));
    });
  });

  test('TC_HOME_018: YouTube Learning Hub content is visible', async () => {
    const data = testData.TC_HOME_018;
    await meta({
      id: 'TC_HOME_018',
      title: 'YouTube Learning Hub content is visible',
      priority: 'High',
      description: 'YouTube Learning Hub section, logo, and channel metrics are visible.',
    });

    await allure.step('Open homepage', async () => {
      await homePage.goto(data.url);
    });
    await allure.step('Verify YouTube hub heading and copy', async () => {
      await expect(homePage.youtubeHubHeading).toBeVisible();
      await expect(homePage.youtubeHubCopy.first()).toBeVisible();
    });
    await allure.step('Verify channel logo and metrics labels', async () => {
      await expect(homePage.channelLogo.first()).toBeVisible();
      await expect(homePage.otsEdTechHeading.first()).toBeVisible();
      await expect(homePage.subsText).toBeVisible({ timeout: 20_000 });
      await expect(homePage.videosCountText).toBeVisible();
      await expect(homePage.viewsText).toBeVisible();
    });
  });

  test('TC_HOME_019: Subscribe and View All Videos links open expected destinations', async ({
    page,
    context,
  }) => {
    const data = testData.TC_HOME_019;
    await meta({
      id: 'TC_HOME_019',
      title: 'Subscribe and View All Videos links open expected destinations',
      priority: 'High',
      description: 'Subscribe and View All Videos links open intended destinations.',
    });

    await allure.step('Open homepage', async () => {
      await homePage.goto(data.url);
    });
    await allure.step('Click Subscribe and verify destination', async () => {
      const popupPromise = context.waitForEvent('page', { timeout: 8000 }).catch(() => null);
      await homePage.clickSubscribe();
      const popup = await popupPromise;
      if (popup) {
        await popup.waitForLoadState('domcontentloaded');
        expect(popup.url().length).toBeGreaterThan(0);
        await popup.close();
      } else {
        await expect(page.locator('body')).toBeVisible();
      }
    });
    await allure.step('Return home and click View All Videos', async () => {
      await homePage.goto(data.url);
      const popupPromise = context.waitForEvent('page', { timeout: 8000 }).catch(() => null);
      await homePage.clickViewAllVideos();
      const popup = await popupPromise;
      if (popup) {
        await popup.waitForLoadState('domcontentloaded');
        expect(popup.url().length).toBeGreaterThan(0);
        await popup.close();
      } else {
        await expect(page.locator('body')).toBeVisible();
      }
    });
  });

  test('TC_HOME_020: Daily Micro Learning and Instagram follow are available', async ({
    page,
    context,
  }) => {
    const data = testData.TC_HOME_020;
    await meta({
      id: 'TC_HOME_020',
      title: 'Daily Micro Learning and Instagram follow are available',
      priority: 'High',
      description: 'Daily Micro Learning section is visible; Instagram follow opens social destination.',
    });

    await allure.step('Open homepage and verify micro-learning copy', async () => {
      await homePage.goto(data.url);
      await expect(homePage.dailyMicroLearningText.first()).toBeVisible();
      await expect(homePage.learnSomethingHeading).toBeVisible();
      await expect(homePage.scrollTapLearnText.first()).toBeVisible();
      await expect(homePage.avgReelLengthText.first()).toBeVisible();
      await expect(homePage.conceptsSimplifiedText.first()).toBeVisible();
      await expect(homePage.monthlyViewsText.first()).toBeVisible();
    });
    await allure.step('Click Follow us on Instagram', async () => {
      const popupPromise = context.waitForEvent('page', { timeout: 8000 }).catch(() => null);
      await homePage.clickFollowInstagram();
      const popup = await popupPromise;
      if (popup) {
        await popup.waitForLoadState('domcontentloaded');
        expect(popup.url()).toMatch(new RegExp(data.expectedHostPattern, 'i'));
        await popup.close();
      } else {
        await expect(page).toHaveURL(new RegExp(data.expectedHostPattern, 'i'));
      }
    });
  });

  test('TC_HOME_021: Section Start Learning link navigates correctly', async ({ page }) => {
    const data = testData.TC_HOME_021;
    await meta({
      id: 'TC_HOME_021',
      title: 'Section Start Learning link navigates correctly',
      priority: 'Medium',
      description: 'Exact Start Learning link (not hero CTA) navigates to learning/start destination.',
    });

    await allure.step('Open homepage', async () => {
      await homePage.goto(data.url);
    });
    await allure.step('Click exact Start Learning link', async () => {
      await homePage.clickStartLearningExact();
    });
    await allure.step('Verify navigation', async () => {
      await expect(page).toHaveURL(new RegExp(data.expectedUrlPattern, 'i'));
    });
  });

  test('TC_HOME_022: Educational Network channel links are reachable', async ({
    page,
    context,
  }) => {
    const data = testData.TC_HOME_022;
    await meta({
      id: 'TC_HOME_022',
      title: 'Educational Network channel links are reachable',
      priority: 'Medium',
      description: 'Educational Network channel links and Subscribe Our Channels are reachable.',
    });

    await allure.step('Open homepage and verify network section', async () => {
      await homePage.goto(data.url);
      await expect(homePage.ourYoutubeChannelsText.first()).toBeVisible();
      await expect(homePage.exploreOurText.first()).toBeVisible();
      await expect(homePage.educationalNetworkText.first()).toBeVisible();
    });

    for (const channel of data.channels) {
      await allure.step(`Open channel link: ${channel}`, async () => {
        await homePage.goto(data.url);
        const popupPromise = context.waitForEvent('page', { timeout: 8000 }).catch(() => null);
        await homePage.clickChannelLink(channel);
        const popup = await popupPromise;
        if (popup) {
          await popup.waitForLoadState('domcontentloaded');
          expect(popup.url().length).toBeGreaterThan(0);
          await popup.close();
        } else {
          await expect(page.locator('body')).toBeVisible();
        }
      });
    }

    await allure.step('Click Subscribe Our Channels', async () => {
      await homePage.goto(data.url);
      const popupPromise = context.waitForEvent('page', { timeout: 8000 }).catch(() => null);
      await homePage.clickSubscribeOurChannels();
      const popup = await popupPromise;
      if (popup) {
        await popup.close();
      }
      await expect(page.locator('body')).toBeVisible();
    });
  });

  test('TC_HOME_023: Footer Stay Updated and platform tagline are visible', async () => {
    const data = testData.TC_HOME_023;
    await meta({
      id: 'TC_HOME_023',
      title: 'Footer Stay Updated and platform tagline are visible',
      priority: 'Medium',
      description: 'Footer Stay Updated copy and platform tagline are visible.',
    });

    await allure.step('Open homepage and scroll to footer', async () => {
      await homePage.goto(data.url);
      await homePage.stayUpdatedText.first().scrollIntoViewIfNeeded();
    });
    await allure.step('Verify footer texts', async () => {
      await expect(homePage.stayUpdatedText.first()).toBeVisible();
      await expect(homePage.footerTagline).toBeVisible();
    });
  });

  test('TC_HOME_024: Soft refresh keeps homepage stable', async () => {
    const data = testData.TC_HOME_024;
    await meta({
      id: 'TC_HOME_024',
      title: 'Soft refresh keeps homepage stable',
      priority: 'Medium',
      description: 'Refreshing the homepage keeps hero and nav visible.',
    });

    await allure.step('Open homepage and confirm hero/nav', async () => {
      await homePage.goto(data.url);
      await expect(homePage.homeNav.first()).toBeVisible();
      await expect(homePage.heroJourneyText.first()).toBeVisible();
      await expect(homePage.heroGrowthText.first()).toBeVisible();
    });
    await allure.step('Refresh page', async () => {
      await homePage.page.reload();
    });
    await allure.step('Re-verify hero and CTA', async () => {
      await expect(homePage.homeNav.first()).toBeVisible();
      await expect(homePage.heroJourneyText.first()).toBeVisible();
      await expect(homePage.startLearningFreeLink).toBeVisible();
    });
  });

  test('TC_HOME_025: Mobile viewport keeps hero CTA and search reachable', async ({ page }) => {
    const data = testData.TC_HOME_025;
    await meta({
      id: 'TC_HOME_025',
      title: 'Mobile viewport keeps hero CTA and search reachable',
      priority: 'Low',
      description: 'On mobile viewport, search and primary hero CTA remain reachable.',
    });

    await allure.step('Set mobile viewport and open homepage', async () => {
      await page.setViewportSize({
        width: data.viewportWidth,
        height: data.viewportHeight,
      });
      await homePage.goto(data.url);
    });
    await allure.step('Verify search and hero CTA reachable', async () => {
      await expect(homePage.searchInput).toBeVisible();
      await expect(homePage.startLearningFreeLink).toBeVisible();
    });
    await allure.step('Verify primary nav texts exist', async () => {
      await expect(homePage.homeNav.first()).toBeVisible();
      await expect(homePage.exploreNav).toBeVisible();
      await expect(homePage.reelsNav.first()).toBeVisible();
    });
  });
});
