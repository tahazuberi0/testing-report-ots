import { createRequire } from 'module';
import * as allure from 'allure-js-commons';
import { test, expect } from '../fixtures/allure-hooks.js';
import { LeaderboardPage } from '../pages/Leaderboard.page.js';

const require = createRequire(import.meta.url);
const testData = require('../data/Leaderboard_.data.json');

const severityMap = {
  High: 'critical',
  Medium: 'normal',
  Low: 'minor',
};

async function annotate({ id, title, priority, description }) {
  await allure.epic('OTS EdTech Dashboard');
  await allure.feature('Leaderboard Page');
  await allure.story(id);
  await allure.allureId(id);
  await allure.description(description);
  await allure.severity(severityMap[priority]);
  await allure.tag(priority);
  await allure.displayName(`${id}: ${title}`);
}

test.describe('OTS EdTech Leaderboard Page', () => {
  test.describe.configure({ mode: 'serial' });
  test.setTimeout(90_000);

  /** @type {LeaderboardPage} */
  let leaderboardPage;

  test.beforeEach(async ({ page }) => {
    leaderboardPage = new LeaderboardPage(page);
  });

  test('TC_LEADERBOARD_001: Authenticated student lands on Leaderboard with key chrome visible', async () => {
    const data = testData.TC_LEADERBOARD_001;
    await annotate({
      id: 'TC_LEADERBOARD_001',
      title: 'Authenticated student lands on Leaderboard with key chrome visible',
      priority: 'High',
      description:
        'Logged-in student reaches Leaderboard with heading, subtitle, and class context visible.',
    });

    await allure.step('Sign in and open Leaderboard', async () => {
      await leaderboardPage.ensureAuthenticatedLeaderboard(
        data.validStudentSession,
        data.loginUrl,
        data.leaderboardUrl
      );
    });
    await allure.step('Verify page chrome', async () => {
      await expect(leaderboardPage.pageHeading).toBeVisible();
      await expect(leaderboardPage.subtitleText).toBeVisible();
      await expect(leaderboardPage.showingLeaderboardForText).toBeVisible();
    });
  });

  test('TC_LEADERBOARD_002: Page heading and subtitle description are visible', async () => {
    const data = testData.TC_LEADERBOARD_002;
    await annotate({
      id: 'TC_LEADERBOARD_002',
      title: 'Page heading and subtitle description are visible',
      priority: 'High',
      description: 'Leaderboard heading and Compete with the best subtitle are visible.',
    });

    await allure.step('Sign in and open Leaderboard', async () => {
      await leaderboardPage.ensureAuthenticatedLeaderboard(
        data.validStudentSession,
        data.loginUrl,
        data.leaderboardUrl
      );
    });
    await allure.step('Verify heading and subtitle', async () => {
      await expect(leaderboardPage.pageHeading).toBeVisible();
      await expect(leaderboardPage.subtitleText).toBeVisible();
    });
  });

  test('TC_LEADERBOARD_003: Class context indicator shows active leaderboard scope', async () => {
    const data = testData.TC_LEADERBOARD_003;
    await annotate({
      id: 'TC_LEADERBOARD_003',
      title: 'Class context indicator shows active leaderboard scope',
      priority: 'High',
      description: 'Showing leaderboard for text and class indicator container are visible.',
    });

    await allure.step('Sign in and open Leaderboard', async () => {
      await leaderboardPage.ensureAuthenticatedLeaderboard(
        data.validStudentSession,
        data.loginUrl,
        data.leaderboardUrl
      );
    });
    await allure.step('Verify class context', async () => {
      await expect(leaderboardPage.showingLeaderboardForText).toBeVisible();
      await expect(leaderboardPage.currentClassIndicator).toBeVisible();
    });
  });

  test('TC_LEADERBOARD_004: Global and Weekly tabs are visible', async () => {
    const data = testData.TC_LEADERBOARD_004;
    await annotate({
      id: 'TC_LEADERBOARD_004',
      title: 'Global and Weekly tabs are visible',
      priority: 'High',
      description: 'Global and Weekly scope tabs are visible on Leaderboard.',
    });

    await allure.step('Sign in and open Leaderboard', async () => {
      await leaderboardPage.ensureAuthenticatedLeaderboard(
        data.validStudentSession,
        data.loginUrl,
        data.leaderboardUrl
      );
    });
    await allure.step('Verify tabs', async () => {
      await expect(leaderboardPage.globalTab).toBeVisible();
      await expect(leaderboardPage.weeklyTab).toBeVisible();
    });
  });

  test('TC_LEADERBOARD_005: Global tab is clickable and page stays stable', async () => {
    const data = testData.TC_LEADERBOARD_005;
    await annotate({
      id: 'TC_LEADERBOARD_005',
      title: 'Global tab is clickable and page stays stable',
      priority: 'Medium',
      description: 'Clicking Global tab keeps Leaderboard heading visible.',
    });

    await allure.step('Sign in and open Leaderboard', async () => {
      await leaderboardPage.ensureAuthenticatedLeaderboard(
        data.validStudentSession,
        data.loginUrl,
        data.leaderboardUrl
      );
    });
    await allure.step('Click Global tab', async () => {
      await leaderboardPage.globalTab.click();
      await leaderboardPage.page.waitForTimeout(1000);
    });
    await allure.step('Verify page stability', async () => {
      await expect(leaderboardPage.pageHeading).toBeVisible();
    });
  });

  test('TC_LEADERBOARD_006: Weekly tab is clickable and page stays stable', async () => {
    const data = testData.TC_LEADERBOARD_006;
    await annotate({
      id: 'TC_LEADERBOARD_006',
      title: 'Weekly tab is clickable and page stays stable',
      priority: 'Medium',
      description: 'Clicking Weekly tab keeps Leaderboard heading visible.',
    });

    await allure.step('Sign in and open Leaderboard', async () => {
      await leaderboardPage.ensureAuthenticatedLeaderboard(
        data.validStudentSession,
        data.loginUrl,
        data.leaderboardUrl
      );
    });
    await allure.step('Click Weekly tab', async () => {
      await leaderboardPage.weeklyTab.click();
      await leaderboardPage.page.waitForTimeout(1000);
    });
    await allure.step('Verify page stability', async () => {
      await expect(leaderboardPage.pageHeading).toBeVisible();
    });
  });

  test('TC_LEADERBOARD_007: Filter by label and filter container are visible', async () => {
    const data = testData.TC_LEADERBOARD_007;
    await annotate({
      id: 'TC_LEADERBOARD_007',
      title: 'Filter by label and filter container are visible',
      priority: 'High',
      description: 'Filter by label and subject filter container are visible.',
    });

    await allure.step('Sign in and open Leaderboard', async () => {
      await leaderboardPage.ensureAuthenticatedLeaderboard(
        data.validStudentSession,
        data.loginUrl,
        data.leaderboardUrl
      );
    });
    await allure.step('Verify filter section', async () => {
      await expect(leaderboardPage.filterByLabel).toBeVisible();
      await expect(leaderboardPage.subjectFilterContainer).toBeVisible();
    });
  });

  test('TC_LEADERBOARD_008: Filter container is clickable and page stays stable', async () => {
    const data = testData.TC_LEADERBOARD_008;
    await annotate({
      id: 'TC_LEADERBOARD_008',
      title: 'Filter container is clickable and page stays stable',
      priority: 'Medium',
      description: 'Clicking filter container keeps Leaderboard heading visible.',
    });

    await allure.step('Sign in and open Leaderboard', async () => {
      await leaderboardPage.ensureAuthenticatedLeaderboard(
        data.validStudentSession,
        data.loginUrl,
        data.leaderboardUrl
      );
    });
    await allure.step('Click filter container', async () => {
      await leaderboardPage.clickFilterContainer();
      await leaderboardPage.page.waitForTimeout(1000);
    });
    await allure.step('Verify page stability', async () => {
      await expect(leaderboardPage.pageHeading).toBeVisible();
    });
  });

  test('TC_LEADERBOARD_009: Toggle between Global and Weekly keeps Leaderboard usable', async () => {
    const data = testData.TC_LEADERBOARD_009;
    await annotate({
      id: 'TC_LEADERBOARD_009',
      title: 'Toggle between Global and Weekly keeps Leaderboard usable',
      priority: 'Medium',
      description: 'Switching Weekly then Global keeps Leaderboard chrome usable.',
    });

    await allure.step('Sign in and open Leaderboard', async () => {
      await leaderboardPage.ensureAuthenticatedLeaderboard(
        data.validStudentSession,
        data.loginUrl,
        data.leaderboardUrl
      );
    });
    await allure.step('Toggle Weekly then Global', async () => {
      await leaderboardPage.weeklyTab.click();
      await expect(leaderboardPage.pageHeading).toBeVisible();
      await leaderboardPage.globalTab.click();
    });
    await allure.step('Verify Leaderboard still usable', async () => {
      await expect(leaderboardPage.pageHeading).toBeVisible();
      await expect(leaderboardPage.showingLeaderboardForText).toBeVisible();
    });
  });

  test('TC_LEADERBOARD_010: Soft refresh keeps Leaderboard chrome visible', async () => {
    const data = testData.TC_LEADERBOARD_010;
    await annotate({
      id: 'TC_LEADERBOARD_010',
      title: 'Soft refresh keeps Leaderboard chrome visible',
      priority: 'Medium',
      description: 'Refreshing Leaderboard keeps heading and tabs visible.',
    });

    await allure.step('Sign in and open Leaderboard', async () => {
      await leaderboardPage.ensureAuthenticatedLeaderboard(
        data.validStudentSession,
        data.loginUrl,
        data.leaderboardUrl
      );
      await expect(leaderboardPage.pageHeading).toBeVisible();
      await expect(leaderboardPage.globalTab).toBeVisible();
      await expect(leaderboardPage.weeklyTab).toBeVisible();
    });
    await allure.step('Refresh page', async () => {
      await leaderboardPage.page.reload({ waitUntil: 'domcontentloaded' });
    });
    await allure.step('Re-verify chrome', async () => {
      await expect(leaderboardPage.pageHeading).toBeVisible();
      await expect(leaderboardPage.globalTab).toBeVisible();
      await expect(leaderboardPage.weeklyTab).toBeVisible();
    });
  });

  test('TC_LEADERBOARD_011: Unauthenticated access does not show leaderboard data', async ({
    page,
  }) => {
    const data = testData.TC_LEADERBOARD_011;
    await annotate({
      id: 'TC_LEADERBOARD_011',
      title: 'Unauthenticated access does not show leaderboard data',
      priority: 'High',
      description: 'Direct leaderboard access without session redirects to login.',
    });

    await allure.step('Open Leaderboard without authentication', async () => {
      await page.goto(data.leaderboardUrl, { waitUntil: 'domcontentloaded' });
    });
    await allure.step('Verify login gate and no leaderboard chrome', async () => {
      await expect(page).toHaveURL(new RegExp(data.expectedLoginUrlPattern, 'i'));
      await expect(leaderboardPage.pageHeading).toHaveCount(0);
      await expect(leaderboardPage.globalTab).toHaveCount(0);
    });
  });

  test('TC_LEADERBOARD_012: Filter options All Subjects, By Subject, and By Chapter are visible', async () => {
    const data = testData.TC_LEADERBOARD_012;
    await annotate({
      id: 'TC_LEADERBOARD_012',
      title: 'Filter options All Subjects, By Subject, and By Chapter are visible',
      priority: 'High',
      description: 'All three filter options (All Subjects, By Subject, By Chapter) are visible on Leaderboard.',
    });

    await allure.step('Sign in and open Leaderboard', async () => {
      await leaderboardPage.ensureAuthenticatedLeaderboard(
        data.validStudentSession,
        data.loginUrl,
        data.leaderboardUrl
      );
    });
    await allure.step('Verify filter options', async () => {
      await expect(leaderboardPage.filterAllSubjects).toBeVisible();
      await expect(leaderboardPage.filterBySubject).toBeVisible();
      await expect(leaderboardPage.filterByChapter).toBeVisible();
    });
  });
});
