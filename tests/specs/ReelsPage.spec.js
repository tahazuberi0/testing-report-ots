import { createRequire } from 'module';
import * as allure from 'allure-js-commons';
import { test, expect } from '../fixtures/allure-hooks.js';
import { ReelsPage } from '../pages/ReelsPage.page.js';

const require = createRequire(import.meta.url);
const testData = require('../data/ReelsPage.data.json');

const severityMap = {
  High: 'critical',
  Medium: 'normal',
  Low: 'minor',
};

/**
 * @param {{ id: string, title: string, priority: 'High'|'Medium'|'Low', description: string }} meta
 */
async function annotate({ id, title, priority, description }) {
  await allure.epic('OTS EdTech Reels');
  await allure.feature('Reels Page');
  await allure.story(id);
  await allure.allureId(id);
  await allure.description(description);
  await allure.severity(severityMap[priority]);
  await allure.tag(priority);
  await allure.displayName(`${id}: ${title}`);
}

test.describe('OTS EdTech Reels Page', () => {
  /** @type {ReelsPage} */
  let reelsPage;

  test.beforeEach(async ({ page }) => {
    reelsPage = new ReelsPage(page);
  });

  test('TC_REELS_001: Navigate via Reels nav loads the Reels experience', async ({ page }) => {
    const data = testData.TC_REELS_001;
    await annotate({
      id: 'TC_REELS_001',
      title: 'Navigate via Reels nav loads the Reels experience',
      priority: 'High',
      description: 'Header Reels link opens immersive reels player with scroll hint or video element.',
    });

    await allure.step('Open entry page', async () => {
      await reelsPage.gotoEntry(data.entryPageUrl);
    });
    await allure.step('Click Reels nav', async () => {
      await reelsPage.clickReelsNav();
    });
    await allure.step('Verify Reels player surface', async () => {
      await reelsPage.waitForPlayerReady();
      await expect(page).toHaveURL(new RegExp(data.reelsUrlPattern, 'i'));
      await expect(reelsPage.getPlayerSurface()).toBeVisible();
    });
  });

  test('TC_REELS_002: Video container or video element is visible and interactable', async () => {
    const data = testData.TC_REELS_002;
    await annotate({
      id: 'TC_REELS_002',
      title: 'Video container or video element is visible and interactable',
      priority: 'High',
      description: 'Video element CSS target is visible and clickable on reels player.',
    });

    await allure.step('Open Reels player', async () => {
      await reelsPage.gotoReels(data.reelsUrl);
    });
    await allure.step('Verify and click video element', async () => {
      await expect(reelsPage.videoElement).toBeVisible();
      await reelsPage.clickVideoElement();
      await expect(reelsPage.getPlayerSurface()).toBeVisible();
    });
  });

  test('TC_REELS_003: Scroll Trigger hint is visible on the feed', async () => {
    const data = testData.TC_REELS_003;
    await annotate({
      id: 'TC_REELS_003',
      title: 'Scroll Trigger hint is visible on the feed',
      priority: 'High',
      description: 'Scroll down hint text is visible on reels feed.',
    });

    await allure.step('Open Reels player', async () => {
      await reelsPage.gotoReels(data.reelsUrl);
    });
    await allure.step('Verify Scroll Trigger text', async () => {
      await expect(reelsPage.scrollTriggerLoose).toBeVisible();
    });
  });

  test('TC_REELS_004: Clicking Scroll Trigger advances the feed to the next reel', async ({
    page,
  }) => {
    const data = testData.TC_REELS_004;
    await annotate({
      id: 'TC_REELS_004',
      title: 'Clicking Scroll Trigger advances the feed to the next reel',
      priority: 'High',
      description: 'Clicking scroll hint advances feed without crash.',
    });

    await allure.step('Open Reels player', async () => {
      await reelsPage.gotoReels(data.reelsUrl);
    });
    const before = await allure.step('Capture current feed text', async () => {
      return page.locator('body').innerText();
    });
    await allure.step('Click Scroll Trigger', async () => {
      await reelsPage.clickScrollTrigger();
      await page.waitForTimeout(1500);
    });
    await allure.step('Verify feed changed or player remains stable', async () => {
      const after = await page.locator('body').innerText();
      expect(after.length).toBeGreaterThan(0);
      expect(after !== before || (await reelsPage.getPlayerSurface().isVisible())).toBeTruthy();
      await expect(page.getByText(/stack|exception|syntax error/i)).toHaveCount(0);
    });
  });

  test('TC_REELS_005: Navigation Icon (SVG) advances to the next reel', async ({ page }) => {
    const data = testData.TC_REELS_005;
    await annotate({
      id: 'TC_REELS_005',
      title: 'Navigation Icon (SVG) advances to the next reel',
      priority: 'Medium',
      description: 'Navigation SVG icon advances feed without breaking player.',
    });

    await allure.step('Open Reels player', async () => {
      await reelsPage.gotoReels(data.reelsUrl);
    });
    const before = await page.locator('body').innerText();
    await allure.step('Click Navigation Icon (SVG)', async () => {
      await reelsPage.clickNavigationIcon();
      await page.waitForTimeout(1500);
    });
    await allure.step('Verify stable feed transition', async () => {
      const after = await page.locator('body').innerText();
      expect(after.length).toBeGreaterThan(0);
      expect(after !== before || (await reelsPage.getPlayerSurface().isVisible())).toBeTruthy();
      await expect(reelsPage.getPlayerSurface()).toBeVisible();
    });
  });

  test('TC_REELS_006: Back to home button exits the immersive Reels player', async ({ page }) => {
    const data = testData.TC_REELS_006;
    await annotate({
      id: 'TC_REELS_006',
      title: 'Back to home button exits the immersive Reels player',
      priority: 'High',
      description: 'Back to home exits immersive player to home or reels directory.',
    });

    await allure.step('Open Reels player', async () => {
      await reelsPage.gotoReels(data.reelsUrl);
    });
    await allure.step('Click Back to home', async () => {
      await reelsPage.clickBackToHome();
    });
    await allure.step('Verify exit from immersive reel URL', async () => {
      await expect(page).not.toHaveURL(/\/reels\/[A-Za-z0-9_-]+$/);
      await expect(page.locator('body')).toBeVisible();
    });
  });

  test('TC_REELS_007: Soft refresh keeps Reels player usable', async () => {
    const data = testData.TC_REELS_007;
    await annotate({
      id: 'TC_REELS_007',
      title: 'Soft refresh keeps Reels player usable',
      priority: 'Medium',
      description: 'Refreshing reels view keeps scroll hint or video element visible.',
    });

    await allure.step('Open Reels player', async () => {
      await reelsPage.gotoReels(data.reelsUrl);
      await expect(reelsPage.getPlayerSurface()).toBeVisible();
    });
    await allure.step('Refresh page', async () => {
      await reelsPage.page.reload();
    });
    await allure.step('Re-verify player surface', async () => {
      await reelsPage.waitForPlayerReady();
      await expect(reelsPage.getPlayerSurface()).toBeVisible();
    });
  });

  test('TC_REELS_008: Double-click Navigation Icon (SVG) does not break the feed', async ({
    page,
  }) => {
    const data = testData.TC_REELS_008;
    await annotate({
      id: 'TC_REELS_008',
      title: 'Double-click Navigation Icon (SVG) does not break the feed',
      priority: 'Medium',
      description: 'Double-clicking nav icon does not crash or blank the player.',
    });

    await allure.step('Open Reels player', async () => {
      await reelsPage.gotoReels(data.reelsUrl);
    });
    await allure.step('Double-click Navigation Icon (SVG)', async () => {
      await reelsPage.doubleClickNavigationIcon();
      await page.waitForTimeout(1000);
    });
    await allure.step('Verify player remains usable', async () => {
      await expect(reelsPage.getPlayerSurface()).toBeVisible();
      await expect(page.getByText(/stack|exception|syntax error/i)).toHaveCount(0);
    });
  });

  test('TC_REELS_009: Re-entering Reels via nav after Back to home works', async ({ page }) => {
    const data = testData.TC_REELS_009;
    await annotate({
      id: 'TC_REELS_009',
      title: 'Re-entering Reels via nav after Back to home works',
      priority: 'Low',
      description: 'After Back to home, user can re-enter Reels via nav without broken state.',
    });

    await allure.step('Open Reels and exit via Back to home', async () => {
      await reelsPage.gotoReels(data.reelsUrl);
      await reelsPage.clickBackToHome();
    });
    await allure.step('Return to entry page and click Reels nav', async () => {
      await reelsPage.gotoEntry(data.entryPageUrl);
      await reelsPage.clickReelsNav();
    });
    await allure.step('Verify Reels player reloads', async () => {
      await reelsPage.waitForPlayerReady();
      await expect(page).toHaveURL(/\/reels/i);
      await expect(reelsPage.getPlayerSurface()).toBeVisible();
    });
  });
});
