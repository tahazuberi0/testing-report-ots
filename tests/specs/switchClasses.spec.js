import { createRequire } from 'module';
import * as allure from 'allure-js-commons';
import { test, expect } from '../fixtures/allure-hooks.js';
import { SwitchClassesPage } from '../pages/switchClasses.page.js';

const require = createRequire(import.meta.url);
const testData = require('../data/switchClasses.data.json');

const severityMap = {
  High: 'critical',
  Medium: 'normal',
  Low: 'minor',
};

async function annotate({ id, title, priority, description }) {
  await allure.epic('OTS EdTech Dashboard');
  await allure.feature('Switch Classes Page');
  await allure.story(id);
  await allure.allureId(id);
  await allure.description(description);
  await allure.severity(severityMap[priority]);
  await allure.tag(priority);
  await allure.displayName(`${id}: ${title}`);
}

test.describe('OTS EdTech Switch Classes Page', () => {
  test.setTimeout(90_000);

  /** @type {SwitchClassesPage} */
  let switchPage;

  test.beforeEach(async ({ page }) => {
    switchPage = new SwitchClassesPage(page);
  });

  test('TC_SWITCH_001: Authenticated student lands on Switch Classes with key chrome visible', async () => {
    const data = testData.TC_SWITCH_001;
    await annotate({
      id: 'TC_SWITCH_001',
      title: 'Authenticated student lands on Switch Classes with key chrome visible',
      priority: 'High',
      description:
        'Logged-in student reaches Switch Classes with Back, Switch Classes heading, and Select Your Class visible.',
    });

    await allure.step('Sign in and open Switch Classes', async () => {
      await switchPage.ensureAuthenticatedSwitchClasses(
        data.validStudentSession,
        data.loginUrl,
        data.changeCourseUrl
      );
    });
    await allure.step('Verify key page chrome', async () => {
      await expect(switchPage.backButton).toBeVisible();
      await expect(switchPage.switchClassesHeading).toBeVisible();
      await expect(switchPage.selectYourClassHeading).toBeVisible();
    });
  });

  test('TC_SWITCH_002: Select Your Class module labels are visible', async () => {
    const data = testData.TC_SWITCH_002;
    await annotate({
      id: 'TC_SWITCH_002',
      title: 'Select Your Class module labels are visible',
      priority: 'High',
      description: 'Select Your Class heading, Available Classes, Choose from enrolled, and Class button are visible.',
    });

    await allure.step('Sign in and open Switch Classes', async () => {
      await switchPage.ensureAuthenticatedSwitchClasses(
        data.validStudentSession,
        data.loginUrl,
        data.changeCourseUrl
      );
    });
    await allure.step('Verify class selection labels', async () => {
      await expect(switchPage.selectYourClassHeading).toBeVisible();
      await expect(switchPage.availableClassesText).toBeVisible();
      await expect(switchPage.chooseFromEnrolledText).toBeVisible();
      await expect(switchPage.classSelectorButton).toBeVisible();
    });
  });

  test('TC_SWITCH_003: Class selector button is clickable and page remains stable', async () => {
    const data = testData.TC_SWITCH_003;
    await annotate({
      id: 'TC_SWITCH_003',
      title: 'Class selector button is clickable and page remains stable',
      priority: 'High',
      description: 'Clicking Class selector keeps Your Progress and My Subjects visible.',
    });

    await allure.step('Sign in and open Switch Classes', async () => {
      await switchPage.ensureAuthenticatedSwitchClasses(
        data.validStudentSession,
        data.loginUrl,
        data.changeCourseUrl
      );
    });
    await allure.step('Click Class selector', async () => {
      await switchPage.classSelectorButton.click();
      await switchPage.page.waitForTimeout(1000);
    });
    await allure.step('Verify page stability', async () => {
      await expect(switchPage.yourProgressHeading).toBeVisible();
      await expect(switchPage.mySubjectsHeading).toBeVisible();
    });
  });

  test('TC_SWITCH_004: Your Progress section shows overall completion copy', async () => {
    const data = testData.TC_SWITCH_004;
    await annotate({
      id: 'TC_SWITCH_004',
      title: 'Your Progress section shows overall completion copy',
      priority: 'High',
      description: 'Your Progress heading and overall completion text visible without fixed percentage.',
    });

    await allure.step('Sign in and open Switch Classes', async () => {
      await switchPage.ensureAuthenticatedSwitchClasses(
        data.validStudentSession,
        data.loginUrl,
        data.changeCourseUrl
      );
    });
    await allure.step('Verify Your Progress section', async () => {
      await expect(switchPage.yourProgressHeading).toBeVisible();
      await expect(switchPage.overallCompletionText).toBeVisible();
      await expect(switchPage.progressLabel).toBeVisible();
    });
  });

  test('TC_SWITCH_005: My Subjects section and enrolled count are visible', async () => {
    const data = testData.TC_SWITCH_005;
    await annotate({
      id: 'TC_SWITCH_005',
      title: 'My Subjects section and enrolled count are visible',
      priority: 'High',
      description: 'My Subjects heading, enrolled count, Watch video and Start Learning are present.',
    });

    await allure.step('Sign in and open Switch Classes', async () => {
      await switchPage.ensureAuthenticatedSwitchClasses(
        data.validStudentSession,
        data.loginUrl,
        data.changeCourseUrl
      );
    });
    await allure.step('Verify My Subjects and controls', async () => {
      await expect(switchPage.mySubjectsHeading).toBeVisible();
      await expect(switchPage.mySubjectsEnrolled).toBeVisible();
      await expect(switchPage.watchVideoButton).toBeVisible();
      await expect(switchPage.startLearningButton).toBeVisible();
    });
  });

  test('TC_SWITCH_006: Grid view and Carousel view controls are usable', async () => {
    const data = testData.TC_SWITCH_006;
    await annotate({
      id: 'TC_SWITCH_006',
      title: 'Grid view and Carousel view controls are usable',
      priority: 'Medium',
      description: 'Grid / Carousel view toggles keep My Subjects usable.',
    });

    await allure.step('Sign in and open Switch Classes', async () => {
      await switchPage.ensureAuthenticatedSwitchClasses(
        data.validStudentSession,
        data.loginUrl,
        data.changeCourseUrl
      );
    });
    await allure.step('Toggle Grid view then Carousel view', async () => {
      await switchPage.gridViewButton.click();
      await expect(switchPage.mySubjectsHeading).toBeVisible();
      await switchPage.carouselViewButton.click();
      await expect(switchPage.mySubjectsHeading).toBeVisible();
    });
  });

  test('TC_SWITCH_007: Scroll Left / Scroll Right move the subjects carousel', async () => {
    const data = testData.TC_SWITCH_007;
    await annotate({
      id: 'TC_SWITCH_007',
      title: 'Scroll Left / Scroll Right move the subjects carousel',
      priority: 'Medium',
      description: 'After Carousel view, Scroll Left/Right are clickable without breaking My Subjects.',
    });

    await allure.step('Sign in and open Switch Classes', async () => {
      await switchPage.ensureAuthenticatedSwitchClasses(
        data.validStudentSession,
        data.loginUrl,
        data.changeCourseUrl
      );
    });
    await allure.step('Enable Carousel view and scroll', async () => {
      await switchPage.enableCarouselView();
      await switchPage.scrollRightButton.click();
      await switchPage.scrollLeftButton.click();
    });
    await allure.step('Verify My Subjects still visible', async () => {
      await expect(switchPage.mySubjectsHeading).toBeVisible();
    });
  });

  test('TC_SWITCH_008: Watch video opens learning / video experience', async () => {
    const data = testData.TC_SWITCH_008;
    await annotate({
      id: 'TC_SWITCH_008',
      title: 'Watch video opens learning / video experience',
      priority: 'High',
      description: 'Watch video opens lecture dialog without crash; Close is available if modal.',
    });

    await allure.step('Sign in and open Switch Classes', async () => {
      await switchPage.ensureAuthenticatedSwitchClasses(
        data.validStudentSession,
        data.loginUrl,
        data.changeCourseUrl
      );
    });
    await allure.step('Click Watch video', async () => {
      await switchPage.openWatchVideo();
    });
    await allure.step('Verify learning experience opened', async () => {
      await expect(switchPage.lectureDialog.or(switchPage.closeButton).first()).toBeVisible();
    });
  });

  test('TC_SWITCH_009: Start Learning navigates to subject module', async ({ page }) => {
    const data = testData.TC_SWITCH_009;
    await annotate({
      id: 'TC_SWITCH_009',
      title: 'Start Learning navigates to subject module',
      priority: 'High',
      description: 'Start Learning redirects to course-details or equivalent.',
    });

    await allure.step('Sign in and open Switch Classes', async () => {
      await switchPage.ensureAuthenticatedSwitchClasses(
        data.validStudentSession,
        data.loginUrl,
        data.changeCourseUrl
      );
    });
    await allure.step('Click Start Learning', async () => {
      await switchPage.clickStartLearning();
    });
    await allure.step('Verify course details destination', async () => {
      await expect(page).toHaveURL(new RegExp(data.courseDetailsUrlPattern, 'i'));
    });
  });

  test('TC_SWITCH_010: Back button exits Switch Classes page', async ({ page }) => {
    const data = testData.TC_SWITCH_010;
    await annotate({
      id: 'TC_SWITCH_010',
      title: 'Back button exits Switch Classes page',
      priority: 'High',
      description: 'Back navigates away from Switch Classes without error.',
    });

    await allure.step('Sign in and open Switch Classes', async () => {
      await switchPage.ensureAuthenticatedSwitchClasses(
        data.validStudentSession,
        data.loginUrl,
        data.changeCourseUrl
      );
    });
    await allure.step('Click Back', async () => {
      await switchPage.backButton.click();
    });
    await allure.step('Verify left Switch Classes page', async () => {
      await expect(page).not.toHaveURL(/\/dashboard\/change-course$/i);
      await expect(page.locator('body')).toBeVisible();
    });
  });

  test('TC_SWITCH_011: Soft refresh keeps Switch Classes chrome visible', async () => {
    const data = testData.TC_SWITCH_011;
    await annotate({
      id: 'TC_SWITCH_011',
      title: 'Soft refresh keeps Switch Classes chrome visible',
      priority: 'Medium',
      description: 'Refreshing Switch Classes keeps headings visible.',
    });

    await allure.step('Sign in and open Switch Classes', async () => {
      await switchPage.ensureAuthenticatedSwitchClasses(
        data.validStudentSession,
        data.loginUrl,
        data.changeCourseUrl
      );
      await expect(switchPage.switchClassesHeading).toBeVisible();
      await expect(switchPage.selectYourClassHeading).toBeVisible();
      await expect(switchPage.mySubjectsHeading).toBeVisible();
    });
    await allure.step('Refresh page', async () => {
      await switchPage.page.reload({ waitUntil: 'domcontentloaded' });
    });
    await allure.step('Re-verify chrome', async () => {
      await expect(switchPage.switchClassesHeading).toBeVisible();
      await expect(switchPage.selectYourClassHeading).toBeVisible();
      await expect(switchPage.mySubjectsHeading).toBeVisible();
    });
  });

  test('TC_SWITCH_012: Unauthenticated access to change-course does not show student content', async ({
    page,
  }) => {
    const data = testData.TC_SWITCH_012;
    await annotate({
      id: 'TC_SWITCH_012',
      title: 'Unauthenticated access to change-course does not show student content',
      priority: 'High',
      description: 'Direct change-course access without session redirects to login.',
    });

    await allure.step('Open Switch Classes without authentication', async () => {
      await page.goto(data.changeCourseUrl, { waitUntil: 'domcontentloaded' });
    });
    await allure.step('Verify login gate and no student chrome', async () => {
      await expect(page).toHaveURL(new RegExp(data.expectedLoginUrlPattern, 'i'));
      await expect(switchPage.switchClassesHeading).toHaveCount(0);
      await expect(switchPage.mySubjectsHeading).toHaveCount(0);
    });
  });

  test('TC_SWITCH_013: Double-click Watch video does not break navigation', async () => {
    const data = testData.TC_SWITCH_013;
    await annotate({
      id: 'TC_SWITCH_013',
      title: 'Double-click Watch video does not break navigation',
      priority: 'Medium',
      description: 'Double-clicking Watch video reaches a single stable dialog without crash.',
    });

    await allure.step('Sign in and open Switch Classes', async () => {
      await switchPage.ensureAuthenticatedSwitchClasses(
        data.validStudentSession,
        data.loginUrl,
        data.changeCourseUrl
      );
    });
    await allure.step('Double-click Watch video', async () => {
      await switchPage.watchVideoButton.dblclick();
      await switchPage.lectureDialog
        .or(switchPage.closeButton)
        .first()
        .waitFor({ state: 'visible', timeout: 15000 });
    });
    await allure.step('Verify stable state', async () => {
      await expect(switchPage.lectureDialog.or(switchPage.closeButton).first()).toBeVisible();
      await expect(switchPage.page.getByText(/stack|exception|syntax error/i)).toHaveCount(0);
    });
  });
});
