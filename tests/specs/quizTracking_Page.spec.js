import { createRequire } from 'module';
import * as allure from 'allure-js-commons';
import { test, expect } from '../fixtures/allure-hooks.js';
import { QuizTrackingPage } from '../pages/quizTracking_Page.page.js';

const require = createRequire(import.meta.url);
const testData = require('../data/quizTracking_Page.data.json');

const severityMap = {
  High: 'critical',
  Medium: 'normal',
  Low: 'minor',
};

async function annotate({ id, title, priority, description }) {
  await allure.epic('OTS EdTech Dashboard');
  await allure.feature('Quiz Performance Tracking');
  await allure.story(id);
  await allure.allureId(id);
  await allure.description(description);
  await allure.severity(severityMap[priority]);
  await allure.tag(priority);
  await allure.displayName(`${id}: ${title}`);
}

test.describe('OTS EdTech Quiz Performance Tracking', () => {
  test.setTimeout(90_000);

  /** @type {QuizTrackingPage} */
  let quizPage;

  test.beforeEach(async ({ page }) => {
    quizPage = new QuizTrackingPage(page);
  });

  test('TC_QUIZTRACKING_001: Authenticated student lands on Quiz Tracking with page chrome visible', async () => {
    const data = testData.TC_QUIZTRACKING_001;
    await annotate({
      id: 'TC_QUIZTRACKING_001',
      title: 'Authenticated student lands on Quiz Tracking with page chrome visible',
      priority: 'High',
      description:
        'Logged-in student reaches Quiz Tracking with back bar, heading, and description visible.',
    });

    await allure.step('Sign in and open Quiz Tracking', async () => {
      await quizPage.ensureAuthenticatedQuizTracking(
        data.validStudentSession,
        data.loginUrl,
        data.quizTrackingUrl
      );
    });
    await allure.step('Verify page chrome', async () => {
      await expect(quizPage.backBarText).toBeVisible();
      await expect(quizPage.pageHeading).toBeVisible();
      await expect(quizPage.descriptionText).toBeVisible();
    });
  });

  test('TC_QUIZTRACKING_002: Page heading and description text are visible', async () => {
    const data = testData.TC_QUIZTRACKING_002;
    await annotate({
      id: 'TC_QUIZTRACKING_002',
      title: 'Page heading and description text are visible',
      priority: 'High',
      description: 'Quiz Performance Tracking heading and description text are visible.',
    });

    await allure.step('Sign in and open Quiz Tracking', async () => {
      await quizPage.ensureAuthenticatedQuizTracking(
        data.validStudentSession,
        data.loginUrl,
        data.quizTrackingUrl
      );
    });
    await allure.step('Verify heading and description', async () => {
      await expect(quizPage.pageHeading).toBeVisible();
      await expect(quizPage.descriptionText).toBeVisible();
    });
  });

  test('TC_QUIZTRACKING_003: Filters section with all three dropdowns visible', async () => {
    const data = testData.TC_QUIZTRACKING_003;
    await annotate({
      id: 'TC_QUIZTRACKING_003',
      title: 'Filters section with all three dropdowns visible',
      priority: 'High',
      description: 'Filters heading, Filter by Quiz, Sort By, and Show Results are all visible.',
    });

    await allure.step('Sign in and open Quiz Tracking', async () => {
      await quizPage.ensureAuthenticatedQuizTracking(
        data.validStudentSession,
        data.loginUrl,
        data.quizTrackingUrl
      );
    });
    await allure.step('Verify filters section', async () => {
      await expect(quizPage.filtersHeading).toBeVisible();
      await expect(quizPage.filterByQuiz).toBeVisible();
      await expect(quizPage.sortBy).toBeVisible();
      await expect(quizPage.showResults).toBeVisible();
    });
  });

  test('TC_QUIZTRACKING_004: Filter by Quiz dropdown is clickable and page stays stable', async () => {
    const data = testData.TC_QUIZTRACKING_004;
    await annotate({
      id: 'TC_QUIZTRACKING_004',
      title: 'Filter by Quiz dropdown is clickable and page stays stable',
      priority: 'Medium',
      description: 'Clicking Filter by Quiz keeps page heading visible.',
    });

    await allure.step('Sign in and open Quiz Tracking', async () => {
      await quizPage.ensureAuthenticatedQuizTracking(
        data.validStudentSession,
        data.loginUrl,
        data.quizTrackingUrl
      );
    });
    await allure.step('Click Filter by Quiz', async () => {
      await quizPage.filterByQuiz.click();
      await quizPage.page.waitForTimeout(1000);
    });
    await allure.step('Verify page stability', async () => {
      await expect(quizPage.pageHeading).toBeVisible();
    });
  });

  test('TC_QUIZTRACKING_005: Sort By dropdown is clickable and page stays stable', async () => {
    const data = testData.TC_QUIZTRACKING_005;
    await annotate({
      id: 'TC_QUIZTRACKING_005',
      title: 'Sort By dropdown is clickable and page stays stable',
      priority: 'Medium',
      description: 'Clicking Sort By keeps page heading visible.',
    });

    await allure.step('Sign in and open Quiz Tracking', async () => {
      await quizPage.ensureAuthenticatedQuizTracking(
        data.validStudentSession,
        data.loginUrl,
        data.quizTrackingUrl
      );
    });
    await allure.step('Click Sort By', async () => {
      await quizPage.sortBy.click();
      await quizPage.page.waitForTimeout(1000);
    });
    await allure.step('Verify page stability', async () => {
      await expect(quizPage.pageHeading).toBeVisible();
    });
  });

  test('TC_QUIZTRACKING_006: Show Results trigger is clickable and page stays stable', async () => {
    const data = testData.TC_QUIZTRACKING_006;
    await annotate({
      id: 'TC_QUIZTRACKING_006',
      title: 'Show Results trigger is clickable and page stays stable',
      priority: 'Medium',
      description: 'Clicking Show Results keeps page heading visible.',
    });

    await allure.step('Sign in and open Quiz Tracking', async () => {
      await quizPage.ensureAuthenticatedQuizTracking(
        data.validStudentSession,
        data.loginUrl,
        data.quizTrackingUrl
      );
    });
    await allure.step('Click Show Results', async () => {
      await quizPage.showResults.click();
      await quizPage.page.waitForTimeout(1000);
    });
    await allure.step('Verify page stability', async () => {
      await expect(quizPage.pageHeading).toBeVisible();
    });
  });

  test('TC_QUIZTRACKING_007: Content card container is present on page', async () => {
    const data = testData.TC_QUIZTRACKING_007;
    await annotate({
      id: 'TC_QUIZTRACKING_007',
      title: 'Content card container is present on page',
      priority: 'Medium',
      description: 'CSS fallback .css-1iob08 content card container is present.',
    });

    await allure.step('Sign in and open Quiz Tracking', async () => {
      await quizPage.ensureAuthenticatedQuizTracking(
        data.validStudentSession,
        data.loginUrl,
        data.quizTrackingUrl
      );
    });
    await allure.step('Verify content card container', async () => {
      await expect(quizPage.contentCard.first()).toBeVisible();
    });
  });

  test('TC_QUIZTRACKING_008: Back navigation exits Quiz Tracking page', async ({ page }) => {
    const data = testData.TC_QUIZTRACKING_008;
    await annotate({
      id: 'TC_QUIZTRACKING_008',
      title: 'Back navigation exits Quiz Tracking page',
      priority: 'High',
      description: 'Clicking BackQuiz Performance bar navigates away from Quiz Tracking.',
    });

    await allure.step('Sign in and open Quiz Tracking', async () => {
      await quizPage.ensureAuthenticatedQuizTracking(
        data.validStudentSession,
        data.loginUrl,
        data.quizTrackingUrl
      );
    });
    await allure.step('Click Back bar', async () => {
      await quizPage.clickBackBar();
    });
    await allure.step('Verify left Quiz Tracking page', async () => {
      await expect(page).not.toHaveURL(/\/dashboard\/quiz-tracking$/i);
      await expect(page.locator('body')).toBeVisible();
    });
  });

  test('TC_QUIZTRACKING_009: Soft refresh keeps Quiz Tracking chrome visible', async () => {
    const data = testData.TC_QUIZTRACKING_009;
    await annotate({
      id: 'TC_QUIZTRACKING_009',
      title: 'Soft refresh keeps Quiz Tracking chrome visible',
      priority: 'Medium',
      description: 'Refreshing Quiz Tracking keeps headings visible.',
    });

    await allure.step('Sign in and open Quiz Tracking', async () => {
      await quizPage.ensureAuthenticatedQuizTracking(
        data.validStudentSession,
        data.loginUrl,
        data.quizTrackingUrl
      );
      await expect(quizPage.pageHeading).toBeVisible();
      await expect(quizPage.filtersHeading).toBeVisible();
    });
    await allure.step('Refresh page', async () => {
      await quizPage.page.reload({ waitUntil: 'domcontentloaded' });
    });
    await allure.step('Re-verify chrome', async () => {
      await expect(quizPage.pageHeading).toBeVisible();
      await expect(quizPage.filtersHeading).toBeVisible();
    });
  });

  test('TC_QUIZTRACKING_010: Unauthenticated access does not show quiz data', async ({
    page,
  }) => {
    const data = testData.TC_QUIZTRACKING_010;
    await annotate({
      id: 'TC_QUIZTRACKING_010',
      title: 'Unauthenticated access does not show quiz data',
      priority: 'High',
      description: 'Direct quiz-tracking access without session redirects to login.',
    });

    await allure.step('Open Quiz Tracking without authentication', async () => {
      await page.goto(data.quizTrackingUrl, { waitUntil: 'domcontentloaded' });
    });
    await allure.step('Verify login gate and no quiz chrome', async () => {
      await expect(page).toHaveURL(new RegExp(data.expectedLoginUrlPattern, 'i'));
      await expect(quizPage.pageHeading).toHaveCount(0);
      await expect(quizPage.filtersHeading).toHaveCount(0);
    });
  });
});
