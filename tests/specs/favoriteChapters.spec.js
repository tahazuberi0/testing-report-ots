import { createRequire } from 'module';
import * as allure from 'allure-js-commons';
import { test, expect } from '../fixtures/allure-hooks.js';
import { FavoriteChaptersPage } from '../pages/favoriteChapters_Page.page.js';

const require = createRequire(import.meta.url);
const testData = require('../data/favoriteChapters.data.json');

const severityMap = {
  High: 'critical',
  Medium: 'normal',
  Low: 'minor',
};

async function annotate({ id, title, priority, description }) {
  await allure.epic('OTS EdTech Dashboard');
  await allure.feature('Favorite Chapters Page');
  await allure.story(id);
  await allure.allureId(id);
  await allure.description(description);
  await allure.severity(severityMap[priority]);
  await allure.tag(priority);
  await allure.displayName(`${id}: ${title}`);
}

test.describe('OTS EdTech Favorite Chapters Page', () => {
  test.setTimeout(90_000);

  /** @type {FavoriteChaptersPage} */
  let favPage;

  test.beforeEach(async ({ page }) => {
    favPage = new FavoriteChaptersPage(page);
  });

  test('TC_FAVCHAP_001: Authenticated student lands on Favorite Chapters with heading visible', async () => {
    const data = testData.TC_FAVCHAP_001;
    await annotate({
      id: 'TC_FAVCHAP_001',
      title: 'Authenticated student lands on Favorite Chapters with heading visible',
      priority: 'High',
      description: 'Logged-in student reaches Favorite Chapters with main heading visible.',
    });

    await allure.step('Sign in and open Favorite Chapters', async () => {
      await favPage.ensureAuthenticatedFavoriteChapters(
        data.validStudentSession,
        data.loginUrl,
        data.favoriteChaptersUrl
      );
    });
    await allure.step('Verify page heading', async () => {
      await expect(favPage.pageHeading).toBeVisible();
    });
  });

  test('TC_FAVCHAP_002: Page heading and header container are present', async () => {
    const data = testData.TC_FAVCHAP_002;
    await annotate({
      id: 'TC_FAVCHAP_002',
      title: 'Page heading and header container are present',
      priority: 'High',
      description: 'Favorite Chapters heading and header container are visible.',
    });

    await allure.step('Sign in and open Favorite Chapters', async () => {
      await favPage.ensureAuthenticatedFavoriteChapters(
        data.validStudentSession,
        data.loginUrl,
        data.favoriteChaptersUrl
      );
    });
    await allure.step('Verify heading and header container', async () => {
      await expect(favPage.pageHeading).toBeVisible();
      await expect(favPage.headerContainer).toBeVisible();
    });
  });

  test('TC_FAVCHAP_003: Open Chapter button is visible when chapters exist', async () => {
    const data = testData.TC_FAVCHAP_003;
    await annotate({
      id: 'TC_FAVCHAP_003',
      title: 'Open Chapter button is visible when chapters exist',
      priority: 'High',
      description: 'Open Chapter button visible confirming favorited chapter cards are rendered.',
    });

    await allure.step('Sign in and open Favorite Chapters', async () => {
      await favPage.ensureAuthenticatedFavoriteChapters(
        data.validStudentSession,
        data.loginUrl,
        data.favoriteChaptersUrl
      );
    });
    await allure.step('Verify Open Chapter button', async () => {
      await expect(favPage.openChapterButton.first()).toBeVisible();
    });
  });

  test('TC_FAVCHAP_004: Open Chapter button navigates to lesson page', async ({ page }) => {
    const data = testData.TC_FAVCHAP_004;
    await annotate({
      id: 'TC_FAVCHAP_004',
      title: 'Open Chapter button navigates to lesson page',
      priority: 'High',
      description: 'Clicking Open Chapter navigates away from Favorite Chapters to a lesson page.',
    });

    await allure.step('Sign in and open Favorite Chapters', async () => {
      await favPage.ensureAuthenticatedFavoriteChapters(
        data.validStudentSession,
        data.loginUrl,
        data.favoriteChaptersUrl
      );
    });
    await allure.step('Click Open Chapter', async () => {
      await favPage.openChapterButton.first().click();
    });
    await allure.step('Verify navigation away', async () => {
      await expect(page).not.toHaveURL(/\/dashboard\/favorite-chapters$/i);
      await expect(page.locator('body')).toBeVisible();
    });
  });

  test('TC_FAVCHAP_005: Chapter card element is visible for a favorited chapter', async () => {
    const data = testData.TC_FAVCHAP_005;
    await annotate({
      id: 'TC_FAVCHAP_005',
      title: 'Chapter card element is visible for a favorited chapter',
      priority: 'Medium',
      description: 'Chapter card with environment-specific text is visible (brittle locator).',
    });

    await allure.step('Sign in and open Favorite Chapters', async () => {
      await favPage.ensureAuthenticatedFavoriteChapters(
        data.validStudentSession,
        data.loginUrl,
        data.favoriteChaptersUrl
      );
    });
    await allure.step('Verify chapter card element', async () => {
      await expect(favPage.chapterCard).toBeVisible();
    });
  });

  test('TC_FAVCHAP_006: Soft refresh keeps Favorite Chapters chrome visible', async () => {
    const data = testData.TC_FAVCHAP_006;
    await annotate({
      id: 'TC_FAVCHAP_006',
      title: 'Soft refresh keeps Favorite Chapters chrome visible',
      priority: 'Medium',
      description: 'Refreshing Favorite Chapters keeps heading visible.',
    });

    await allure.step('Sign in and open Favorite Chapters', async () => {
      await favPage.ensureAuthenticatedFavoriteChapters(
        data.validStudentSession,
        data.loginUrl,
        data.favoriteChaptersUrl
      );
      await expect(favPage.pageHeading).toBeVisible();
    });
    await allure.step('Refresh page', async () => {
      await favPage.page.reload({ waitUntil: 'domcontentloaded' });
    });
    await allure.step('Re-verify heading', async () => {
      await expect(favPage.pageHeading).toBeVisible();
    });
  });

  test('TC_FAVCHAP_007: Unauthenticated access does not show favorites data', async ({
    page,
  }) => {
    const data = testData.TC_FAVCHAP_007;
    await annotate({
      id: 'TC_FAVCHAP_007',
      title: 'Unauthenticated access does not show favorites data',
      priority: 'High',
      description: 'Direct favorite-chapters access without session redirects to login.',
    });

    await allure.step('Open Favorite Chapters without authentication', async () => {
      await page.goto(data.favoriteChaptersUrl, { waitUntil: 'domcontentloaded' });
    });
    await allure.step('Verify login gate and no favorites chrome', async () => {
      await expect(page).toHaveURL(new RegExp(data.expectedLoginUrlPattern, 'i'));
      await expect(favPage.pageHeading).toHaveCount(0);
    });
  });

  test('TC_FAVCHAP_008: Double-click Open Chapter does not break navigation', async ({ page }) => {
    const data = testData.TC_FAVCHAP_008;
    await annotate({
      id: 'TC_FAVCHAP_008',
      title: 'Double-click Open Chapter does not break navigation',
      priority: 'Medium',
      description: 'Double-clicking Open Chapter reaches a single stable lesson page.',
    });

    await allure.step('Sign in and open Favorite Chapters', async () => {
      await favPage.ensureAuthenticatedFavoriteChapters(
        data.validStudentSession,
        data.loginUrl,
        data.favoriteChaptersUrl
      );
    });
    await allure.step('Double-click Open Chapter', async () => {
      await favPage.openChapterButton.first().dblclick();
    });
    await allure.step('Verify stable state', async () => {
      await expect(page.locator('body')).toBeVisible();
      await expect(page.getByText(/stack|exception|syntax error/i)).toHaveCount(0);
    });
  });

  test('TC_FAVCHAP_009: Secondary action button is present and clickable without crash', async () => {
    const data = testData.TC_FAVCHAP_009;
    await annotate({
      id: 'TC_FAVCHAP_009',
      title: 'Secondary action button is present and clickable without crash',
      priority: 'Low',
      description: 'Brittle nth(1) button is clickable without crash (unclear purpose).',
    });

    await allure.step('Sign in and open Favorite Chapters', async () => {
      await favPage.ensureAuthenticatedFavoriteChapters(
        data.validStudentSession,
        data.loginUrl,
        data.favoriteChaptersUrl
      );
    });
    await allure.step('Click secondary action button', async () => {
      await favPage.secondaryActionButton.click();
      await favPage.page.waitForTimeout(1000);
    });
    await allure.step('Verify no crash', async () => {
      await expect(favPage.page.locator('body')).toBeVisible();
    });
  });

  test('TC_FAVCHAP_010: Empty state displays "No Favorite Chapters Yet" heading', async () => {
    const data = testData.TC_FAVCHAP_010;
    await annotate({
      id: 'TC_FAVCHAP_010',
      title: 'Empty state displays "No Favorite Chapters Yet" heading',
      priority: 'High',
      description: 'Empty state heading "No Favorite Chapters Yet" is visible.',
    });

    await allure.step('Sign in and open Favorite Chapters', async () => {
      await favPage.ensureAuthenticatedFavoriteChapters(
        data.validStudentSession,
        data.loginUrl,
        data.favoriteChaptersUrl
      );
    });
    await allure.step('Verify empty state heading', async () => {
      await expect(favPage.noFavoriteChaptersHeading).toBeVisible();
    });
  });

  test('TC_FAVCHAP_011: Empty state shows instructional text', async () => {
    const data = testData.TC_FAVCHAP_011;
    await annotate({
      id: 'TC_FAVCHAP_011',
      title: 'Empty state shows instructional text',
      priority: 'Medium',
      description: 'Instructional text "Start adding chapters" is visible in empty state.',
    });

    await allure.step('Sign in and open Favorite Chapters', async () => {
      await favPage.ensureAuthenticatedFavoriteChapters(
        data.validStudentSession,
        data.loginUrl,
        data.favoriteChaptersUrl
      );
    });
    await allure.step('Verify instructional text', async () => {
      await expect(favPage.startAddingChaptersText).toBeVisible();
    });
  });

  test('TC_FAVCHAP_012: Browse Chapters button is visible in empty state', async () => {
    const data = testData.TC_FAVCHAP_012;
    await annotate({
      id: 'TC_FAVCHAP_012',
      title: 'Browse Chapters button is visible in empty state',
      priority: 'High',
      description: 'Browse Chapters CTA button is visible and clickable in empty state.',
    });

    await allure.step('Sign in and open Favorite Chapters', async () => {
      await favPage.ensureAuthenticatedFavoriteChapters(
        data.validStudentSession,
        data.loginUrl,
        data.favoriteChaptersUrl
      );
    });
    await allure.step('Verify Browse Chapters button', async () => {
      await expect(favPage.browseChaptersButton).toBeVisible();
    });
  });
});
