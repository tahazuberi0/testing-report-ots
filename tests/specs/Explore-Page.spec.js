import { createRequire } from 'module';
import * as allure from 'allure-js-commons';
import { test, expect } from '../fixtures/allure-hooks.js';
import { ExplorePage } from '../pages/Explore-Page.page.js';

const require = createRequire(import.meta.url);
const testData = require('../tests-data/Explore_Page.data.json');

const severityMap = {
  High: 'critical',
  Medium: 'normal',
  Low: 'minor',
};

/**
 * @param {{ id: string, title: string, priority: 'High'|'Medium'|'Low', description: string }} meta
 */
async function meta({ id, title, priority, description }) {
  await allure.epic('OTS EdTech Explore');
  await allure.feature('Explore Page');
  await allure.story(id);
  await allure.allureId(id);
  await allure.description(description);
  await allure.severity(severityMap[priority]);
  await allure.tag(priority);
  await allure.displayName(`${id}: ${title}`);
}

test.describe('OTS EdTech Explore Page', () => {
  /** @type {ExplorePage} */
  let explorePage;

  test.beforeEach(async ({ page }) => {
    explorePage = new ExplorePage(page);
  });

  test("TC_EXPLORE_001: Explore page loads with Digital School heading and Let's Start! visible", async ({
    page,
  }) => {
    const data = testData.TC_EXPLORE_001;
    await meta({
      id: 'TC_EXPLORE_001',
      title: "Explore page loads with Digital School heading and Let's Start! visible",
      priority: 'High',
      description:
        'Explore hub loads with Digital School heading and Let\'s Start! button visible.',
    });

    await allure.step('Navigate to Explore hub', async () => {
      await explorePage.goto(data.url);
    });
    await allure.step('Verify Digital School heading and CTA', async () => {
      await expect(explorePage.digitalSchoolHeading).toBeVisible();
      await expect(explorePage.digitalSchoolStartBtn).toBeVisible();
    });
    expect(page.url()).toMatch(/\/explore/i);
  });

  test("TC_EXPLORE_002: Digital School Let's Start! redirects to Digital School catalog", async ({
    page,
  }) => {
    const data = testData.TC_EXPLORE_002;
    await meta({
      id: 'TC_EXPLORE_002',
      title: "Digital School Let's Start! redirects to Digital School catalog",
      priority: 'High',
      description:
        "Clicking Digital School Let's Start! redirects to /explore/digitalschool.",
    });

    await allure.step('Open Explore hub', async () => {
      await explorePage.goto(data.url);
      await expect(explorePage.digitalSchoolHeading).toBeVisible();
    });
    await allure.step("Click Digital School Let's Start!", async () => {
      await explorePage.clickDigitalSchoolStart();
    });
    await allure.step('Verify Digital School catalog URL', async () => {
      await expect(page).toHaveURL(new RegExp(data.expectedUrlPattern, 'i'));
    });
  });

  test('TC_EXPLORE_003: Digital School card container and visuals are present', async () => {
    const data = testData.TC_EXPLORE_003;
    await meta({
      id: 'TC_EXPLORE_003',
      title: 'Digital School card container and visuals are present',
      priority: 'Medium',
      description:
        'Digital School card is a distinct entry with heading and CTA; layout remains intact.',
    });

    await allure.step('Open Explore hub', async () => {
      await explorePage.goto(data.url);
    });
    await allure.step('Verify Digital School card via heading and button', async () => {
      await expect(explorePage.digitalSchoolHeading).toBeVisible();
      await expect(explorePage.digitalSchoolStartBtn).toBeVisible();
      await expect(explorePage.digitalSchoolCard).toBeVisible();
      const box = await explorePage.digitalSchoolStartBtn.boundingBox();
      expect(box).not.toBeNull();
    });
  });

  test("TC_EXPLORE_004: Skills Academy heading and Let's Start! are visible on Explore hub", async () => {
    const data = testData.TC_EXPLORE_004;
    await meta({
      id: 'TC_EXPLORE_004',
      title: "Skills Academy heading and Let's Start! are visible on Explore hub",
      priority: 'High',
      description: "Skills Academy heading and Let's Start! button are visible on Explore hub.",
    });

    await allure.step('Open Explore hub', async () => {
      await explorePage.goto(data.url);
    });
    await allure.step('Verify Skills Academy heading and CTA', async () => {
      await expect(explorePage.skillsAcademyHeading).toBeVisible();
      await expect(explorePage.skillsAcademyStartBtn).toBeVisible();
    });
  });

  test("TC_EXPLORE_005: Skills Academy Let's Start! redirects to Skills Academy catalog", async ({
    page,
  }) => {
    const data = testData.TC_EXPLORE_005;
    await meta({
      id: 'TC_EXPLORE_005',
      title: "Skills Academy Let's Start! redirects to Skills Academy catalog",
      priority: 'High',
      description:
        "Clicking Skills Academy Let's Start! redirects to /explore/skilledbased.",
    });

    await allure.step('Open Explore hub', async () => {
      await explorePage.goto(data.url);
      await expect(explorePage.skillsAcademyHeading).toBeVisible();
    });
    await allure.step("Click Skills Academy Let's Start!", async () => {
      await explorePage.clickSkillsAcademyStart();
    });
    await allure.step('Verify Skills Academy catalog URL', async () => {
      await expect(page).toHaveURL(new RegExp(data.expectedUrlPattern, 'i'));
    });
  });

  test('TC_EXPLORE_006: Digital School and Skills Academy cards are both visible together', async () => {
    const data = testData.TC_EXPLORE_006;
    await meta({
      id: 'TC_EXPLORE_006',
      title: 'Digital School and Skills Academy cards are both visible together',
      priority: 'Medium',
      description:
        'Both category cards are visible together; CTAs remain reachable without overlap hiding them.',
    });

    await allure.step('Open Explore hub', async () => {
      await explorePage.goto(data.url);
    });
    await allure.step('Verify both cards and CTAs are visible and have layout boxes', async () => {
      await expect(explorePage.digitalSchoolHeading).toBeVisible();
      await expect(explorePage.digitalSchoolStartBtn).toBeVisible();
      await expect(explorePage.skillsAcademyHeading).toBeVisible();
      await expect(explorePage.skillsAcademyStartBtn).toBeVisible();
      const digitalBox = await explorePage.digitalSchoolStartBtn.boundingBox();
      const skillsBox = await explorePage.skillsAcademyStartBtn.boundingBox();
      expect(digitalBox).not.toBeNull();
      expect(skillsBox).not.toBeNull();
    });
  });

  test('TC_EXPLORE_007: Soft refresh keeps Explore cards and CTAs visible', async () => {
    const data = testData.TC_EXPLORE_007;
    await meta({
      id: 'TC_EXPLORE_007',
      title: 'Soft refresh keeps Explore cards and CTAs visible',
      priority: 'Medium',
      description: 'Refreshing /explore keeps both cards and Let\'s Start! CTAs visible.',
    });

    await allure.step('Open Explore hub and confirm cards', async () => {
      await explorePage.goto(data.url);
      await expect(explorePage.digitalSchoolHeading).toBeVisible();
      await expect(explorePage.skillsAcademyHeading).toBeVisible();
      await expect(explorePage.digitalSchoolStartBtn).toBeVisible();
      await expect(explorePage.skillsAcademyStartBtn).toBeVisible();
    });
    await allure.step('Refresh the page', async () => {
      await explorePage.page.reload();
    });
    await allure.step('Re-verify both cards and CTAs', async () => {
      await expect(explorePage.digitalSchoolHeading).toBeVisible();
      await expect(explorePage.skillsAcademyHeading).toBeVisible();
      await expect(explorePage.digitalSchoolStartBtn).toBeVisible();
      await expect(explorePage.skillsAcademyStartBtn).toBeVisible();
    });
  });

  test("TC_EXPLORE_008: Double-click on Digital School Let's Start! does not break navigation", async ({
    page,
  }) => {
    const data = testData.TC_EXPLORE_008;
    await meta({
      id: 'TC_EXPLORE_008',
      title: "Double-click on Digital School Let's Start! does not break navigation",
      priority: 'Medium',
      description:
        "Rapid double-click of Digital School Let's Start! still lands on a stable Digital School catalog.",
    });

    await allure.step('Open Explore hub', async () => {
      await explorePage.goto(data.url);
      await expect(explorePage.digitalSchoolHeading).toBeVisible();
    });
    await allure.step("Double-click Digital School Let's Start!", async () => {
      await explorePage.doubleClickDigitalSchoolStart();
    });
    await allure.step('Verify stable Digital School catalog destination', async () => {
      await expect(page).toHaveURL(new RegExp(data.expectedUrlPattern, 'i'));
      await expect(page.locator('body')).toBeVisible();
    });
  });

  test('TC_EXPLORE_009: Browser Back from Digital School catalog returns to usable Explore hub', async ({
    page,
  }) => {
    const data = testData.TC_EXPLORE_009;
    await meta({
      id: 'TC_EXPLORE_009',
      title: 'Browser Back from Digital School catalog returns to usable Explore hub',
      priority: 'Low',
      description:
        'Browser Back from Digital School catalog returns to a usable Explore hub with both CTAs.',
    });

    await allure.step('Open Explore and go to Digital School catalog', async () => {
      await explorePage.goto(data.url);
      await explorePage.clickDigitalSchoolStart();
      await expect(page).toHaveURL(new RegExp(data.digitalSchoolUrlPattern, 'i'));
    });
    await allure.step('Use browser Back', async () => {
      await page.goBack();
    });
    await allure.step('Verify Explore hub cards remain interactive', async () => {
      await expect(explorePage.digitalSchoolHeading).toBeVisible();
      await expect(explorePage.skillsAcademyHeading).toBeVisible();
      await expect(explorePage.digitalSchoolStartBtn).toBeVisible();
      await expect(explorePage.skillsAcademyStartBtn).toBeEnabled();
      await expect(explorePage.digitalSchoolStartBtn).toBeEnabled();
    });
  });

  test('TC_EXPLORE_010: Header navigation links Home, Reels, Meet Our Team are visible', async () => {
    const data = testData.TC_EXPLORE_010;
    await meta({
      id: 'TC_EXPLORE_010',
      title: 'Header navigation links Home, Reels, Meet Our Team are visible',
      priority: 'Medium',
      description: 'Header nav elements Home link, Reels text, Meet Our Team text are visible on Explore.',
    });

    await allure.step('Navigate to Explore', async () => {
      await explorePage.goto(data.url);
    });
    await allure.step('Verify header navigation elements', async () => {
      await expect(explorePage.homeLink).toBeVisible();
      await expect(explorePage.reelsText).toBeVisible();
      await expect(explorePage.meetOurTeamText).toBeVisible();
    });
  });

  test('TC_EXPLORE_011: Footer links FAQ, Privacy Policy, Terms of Use are visible', async () => {
    const data = testData.TC_EXPLORE_011;
    await meta({
      id: 'TC_EXPLORE_011',
      title: 'Footer links FAQ, Privacy Policy, Terms of Use are visible',
      priority: 'Low',
      description: 'Footer quick links FAQ, Privacy Policy, Terms of Use are visible on Explore.',
    });

    await allure.step('Navigate to Explore', async () => {
      await explorePage.goto(data.url);
    });
    await allure.step('Verify footer links', async () => {
      await explorePage.faqLink.scrollIntoViewIfNeeded();
      await expect(explorePage.faqLink).toBeVisible();
      await expect(explorePage.privacyPolicyLink).toBeVisible();
      await expect(explorePage.termsOfUseLink).toBeVisible();
    });
  });

  test('TC_EXPLORE_012: Footer Download App and Google Play are visible', async () => {
    const data = testData.TC_EXPLORE_012;
    await meta({
      id: 'TC_EXPLORE_012',
      title: 'Footer Download App and Google Play are visible',
      priority: 'Low',
      description: 'Footer Download App text and Google Play link are visible on Explore.',
    });

    await allure.step('Navigate to Explore', async () => {
      await explorePage.goto(data.url);
    });
    await allure.step('Verify Download App and Google Play', async () => {
      await explorePage.downloadAppText.scrollIntoViewIfNeeded();
      await expect(explorePage.downloadAppText).toBeVisible();
      await expect(explorePage.googlePlayLink).toBeVisible();
    });
  });

  test('TC_EXPLORE_013: Footer Stay Updated email field is present', async () => {
    const data = testData.TC_EXPLORE_013;
    await meta({
      id: 'TC_EXPLORE_013',
      title: 'Footer Stay Updated email field is present',
      priority: 'Low',
      description: 'Footer Stay Updated email input field is visible on Explore.',
    });

    await allure.step('Navigate to Explore', async () => {
      await explorePage.goto(data.url);
    });
    await allure.step('Verify email input', async () => {
      await explorePage.stayUpdatedEmail.scrollIntoViewIfNeeded();
      await expect(explorePage.stayUpdatedEmail).toBeVisible();
    });
  });
});
