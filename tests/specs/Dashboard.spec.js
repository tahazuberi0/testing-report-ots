import { createRequire } from 'module';
import * as allure from 'allure-js-commons';
import { test, expect } from '../fixtures/allure-hooks.js';
import { DashboardPage } from '../pages/Dashboard.page.js';

const require = createRequire(import.meta.url);
const testData = require('../data/Dashboard.data.json');

const severityMap = {
  High: 'critical',
  Medium: 'normal',
  Low: 'minor',
};

/**
 * @param {{ id: string, title: string, priority: 'High'|'Medium'|'Low', description: string }} meta
 */
async function annotate({ id, title, priority, description }) {
  await allure.epic('OTS EdTech Dashboard');
  await allure.feature('Dashboard Page');
  await allure.story(id);
  await allure.allureId(id);
  await allure.description(description);
  await allure.severity(severityMap[priority]);
  await allure.tag(priority);
  await allure.displayName(`${id}: ${title}`);
}

test.describe('OTS EdTech Dashboard Page', () => {
  /** @type {DashboardPage} */
  let dashboardPage;

  test.beforeEach(async ({ page }) => {
    dashboardPage = new DashboardPage(page);
  });

  test('TC_DASH_001: Authenticated student lands on Dashboard with key chrome visible', async () => {
    const data = testData.TC_DASH_001;
    await annotate({
      id: 'TC_DASH_001',
      title: 'Authenticated student lands on Dashboard with key chrome visible',
      priority: 'High',
      description:
        'Logged-in student reaches Dashboard with OTS logo, Dashboard nav, Your Progress, and My Subjects visible.',
    });

    await allure.step('Sign in and open Dashboard', async () => {
      await dashboardPage.ensureAuthenticatedDashboard(
        data.validStudentSession,
        data.loginUrl,
        data.dashboardUrl
      );
    });
    await allure.step('Verify key Dashboard chrome', async () => {
      await expect(dashboardPage.otsLogo).toBeVisible();
      await expect(dashboardPage.dashboardNav).toBeVisible();
      await expect(dashboardPage.yourProgressHeading).toBeVisible();
      await expect(dashboardPage.mySubjectsHeading).toBeVisible();
    });
  });

  test('TC_DASH_002: Your Progress section shows overall completion copy', async () => {
    const data = testData.TC_DASH_002;
    await annotate({
      id: 'TC_DASH_002',
      title: 'Your Progress section shows overall completion copy',
      priority: 'High',
      description: 'Your Progress heading and overall completion copy are visible without hard-coded percentages.',
    });

    await allure.step('Sign in and open Dashboard', async () => {
      await dashboardPage.ensureAuthenticatedDashboard(
        data.validStudentSession,
        data.loginUrl,
        data.dashboardUrl
      );
    });
    await allure.step('Verify Your Progress section', async () => {
      await expect(dashboardPage.yourProgressHeading).toBeVisible();
      await expect(dashboardPage.overallCompletionText).toBeVisible();
      await expect(dashboardPage.progressLabel).toBeVisible();
    });
  });

  test('TC_DASH_003: My Subjects section and enrolled subjects area are visible', async () => {
    const data = testData.TC_DASH_003;
    await annotate({
      id: 'TC_DASH_003',
      title: 'My Subjects section and enrolled subjects area are visible',
      priority: 'High',
      description: 'My Subjects heading, enrolled count, and Watch video / Start Learning controls are present.',
    });

    await allure.step('Sign in and open Dashboard', async () => {
      await dashboardPage.ensureAuthenticatedDashboard(
        data.validStudentSession,
        data.loginUrl,
        data.dashboardUrl
      );
    });
    await allure.step('Verify My Subjects and action controls', async () => {
      await expect(dashboardPage.mySubjectsHeading).toBeVisible();
      await expect(dashboardPage.mySubjectsEnrolled).toBeVisible();
      await expect(dashboardPage.watchVideoButton).toBeVisible();
      await expect(dashboardPage.startLearningButton).toBeVisible();
    });
  });

  test('TC_DASH_004: Watch video navigates to learning / video experience', async () => {
    const data = testData.TC_DASH_004;
    await annotate({
      id: 'TC_DASH_004',
      title: 'Watch video navigates to learning / video experience',
      priority: 'High',
      description: 'Watch video opens the lecture dialog / learning experience without crash.',
    });

    await allure.step('Sign in and open Dashboard', async () => {
      await dashboardPage.ensureAuthenticatedDashboard(
        data.validStudentSession,
        data.loginUrl,
        data.dashboardUrl
      );
    });
    await allure.step('Click Watch video', async () => {
      await dashboardPage.openWatchVideo();
    });
    await allure.step('Verify learning experience opened', async () => {
      await expect(dashboardPage.lectureDialog.or(dashboardPage.closeButton).first()).toBeVisible();
    });
  });

  test('TC_DASH_005: Start Learning navigates to subject module/chapter list', async ({ page }) => {
    const data = testData.TC_DASH_005;
    await annotate({
      id: 'TC_DASH_005',
      title: 'Start Learning navigates to subject module/chapter list',
      priority: 'High',
      description: 'Start Learning redirects to course-details / chapter selection.',
    });

    await allure.step('Sign in and open Dashboard', async () => {
      await dashboardPage.ensureAuthenticatedDashboard(
        data.validStudentSession,
        data.loginUrl,
        data.dashboardUrl
      );
    });
    await allure.step('Click Start Learning', async () => {
      await dashboardPage.clickStartLearning();
    });
    await allure.step('Verify course details destination', async () => {
      await expect(page).toHaveURL(new RegExp(data.expectedUrlPattern, 'i'));
    });
  });

  test('TC_DASH_006: Grid view and Carousel view controls are usable', async () => {
    const data = testData.TC_DASH_006;
    await annotate({
      id: 'TC_DASH_006',
      title: 'Grid view and Carousel view controls are usable',
      priority: 'Medium',
      description: 'Grid view and Carousel view toggles keep My Subjects usable.',
    });

    await allure.step('Sign in and open Dashboard', async () => {
      await dashboardPage.ensureAuthenticatedDashboard(
        data.validStudentSession,
        data.loginUrl,
        data.dashboardUrl
      );
    });
    await allure.step('Toggle Grid view then Carousel view', async () => {
      await dashboardPage.gridViewButton.click();
      await expect(dashboardPage.mySubjectsHeading).toBeVisible();
      await dashboardPage.carouselViewButton.click();
      await expect(dashboardPage.mySubjectsHeading).toBeVisible();
    });
  });

  test('TC_DASH_007: Scroll Left / Scroll Right move the subjects carousel', async () => {
    const data = testData.TC_DASH_007;
    await annotate({
      id: 'TC_DASH_007',
      title: 'Scroll Left / Scroll Right move the subjects carousel',
      priority: 'Medium',
      description: 'After Carousel view, Scroll Left/Right are clickable without breaking My Subjects.',
    });

    await allure.step('Sign in and open Dashboard', async () => {
      await dashboardPage.ensureAuthenticatedDashboard(
        data.validStudentSession,
        data.loginUrl,
        data.dashboardUrl
      );
    });
    await allure.step('Enable Carousel view and scroll', async () => {
      await dashboardPage.enableCarouselView();
      await dashboardPage.scrollRightButton.click();
      await dashboardPage.scrollLeftButton.click();
    });
    await allure.step('Verify My Subjects still visible', async () => {
      await expect(dashboardPage.mySubjectsHeading).toBeVisible();
    });
  });

  test('TC_DASH_008: Sidebar Switch Class opens Switch Classes UI', async ({ page }) => {
    const data = testData.TC_DASH_008;
    await annotate({
      id: 'TC_DASH_008',
      title: 'Sidebar Switch Class opens Switch Classes UI',
      priority: 'High',
      description: 'Sidebar Switch Class opens Switch Classes / Select Your Class destination.',
    });

    await allure.step('Sign in and open Dashboard', async () => {
      await dashboardPage.ensureAuthenticatedDashboard(
        data.validStudentSession,
        data.loginUrl,
        data.dashboardUrl
      );
    });
    await allure.step('Click Switch Class nav', async () => {
      await dashboardPage.clickSidebarNav(dashboardPage.switchClassNav);
    });
    await allure.step('Verify Switch Classes UI', async () => {
      await expect(page).toHaveURL(new RegExp(data.changeCourseUrlPattern, 'i'));
      await expect(dashboardPage.switchClassesHeading).toBeVisible();
      await expect(dashboardPage.selectYourClassHeading).toBeVisible();
    });
  });

  test('TC_DASH_009: Sidebar Enrollments opens Manage Enrollments', async ({ page }) => {
    const data = testData.TC_DASH_009;
    await annotate({
      id: 'TC_DASH_009',
      title: 'Sidebar Enrollments opens Manage Enrollments',
      priority: 'High',
      description: 'Sidebar Enrollments opens Manage Enrollments heading / URL.',
    });

    await allure.step('Sign in and open Dashboard', async () => {
      await dashboardPage.ensureAuthenticatedDashboard(
        data.validStudentSession,
        data.loginUrl,
        data.dashboardUrl
      );
    });
    await allure.step('Click Enrollments nav', async () => {
      await dashboardPage.clickSidebarNav(dashboardPage.enrollmentsNav);
    });
    await allure.step('Verify Manage Enrollments destination', async () => {
      await expect(page).toHaveURL(/\/dashboard\/manage-enrollment/i);
      await expect(dashboardPage.manageEnrollmentsHeading).toBeVisible();
    });
  });

  test('TC_DASH_010: Sidebar Quiz Tracking opens Quiz Performance Tracking', async ({ page }) => {
    const data = testData.TC_DASH_010;
    await annotate({
      id: 'TC_DASH_010',
      title: 'Sidebar Quiz Tracking opens Quiz Performance Tracking',
      priority: 'High',
      description: 'Sidebar Quiz Tracking opens Quiz Performance Tracking.',
    });

    await allure.step('Sign in and open Dashboard', async () => {
      await dashboardPage.ensureAuthenticatedDashboard(
        data.validStudentSession,
        data.loginUrl,
        data.dashboardUrl
      );
    });
    await allure.step('Click Quiz Tracking nav', async () => {
      await dashboardPage.clickSidebarNav(dashboardPage.quizTrackingNav);
    });
    await allure.step('Verify Quiz Tracking destination', async () => {
      await expect(page).toHaveURL(/\/dashboard\/quiz-tracking/i);
      await expect(dashboardPage.quizPerformanceHeading).toBeVisible();
    });
  });

  test('TC_DASH_011: Sidebar Leaderboard opens Leaderboard', async ({ page }) => {
    const data = testData.TC_DASH_011;
    await annotate({
      id: 'TC_DASH_011',
      title: 'Sidebar Leaderboard opens Leaderboard',
      priority: 'High',
      description: 'Sidebar Leaderboard opens Leaderboard heading / URL.',
    });

    await allure.step('Sign in and open Dashboard', async () => {
      await dashboardPage.ensureAuthenticatedDashboard(
        data.validStudentSession,
        data.loginUrl,
        data.dashboardUrl
      );
    });
    await allure.step('Click Leaderboard nav', async () => {
      await dashboardPage.clickSidebarNav(dashboardPage.leaderboardNav);
    });
    await allure.step('Verify Leaderboard destination', async () => {
      await expect(page).toHaveURL(/\/dashboard\/leaderboard/i);
      await expect(dashboardPage.leaderboardHeading).toBeVisible();
    });
  });

  test('TC_DASH_012: Soft refresh keeps Dashboard progress and My Subjects visible', async () => {
    const data = testData.TC_DASH_012;
    await annotate({
      id: 'TC_DASH_012',
      title: 'Soft refresh keeps Dashboard progress and My Subjects visible',
      priority: 'Medium',
      description: 'Refreshing Dashboard keeps Your Progress and My Subjects visible.',
    });

    await allure.step('Sign in and open Dashboard', async () => {
      await dashboardPage.ensureAuthenticatedDashboard(
        data.validStudentSession,
        data.loginUrl,
        data.dashboardUrl
      );
      await expect(dashboardPage.yourProgressHeading).toBeVisible();
      await expect(dashboardPage.mySubjectsHeading).toBeVisible();
    });
    await allure.step('Refresh page', async () => {
      await dashboardPage.page.reload({ waitUntil: 'domcontentloaded' });
    });
    await allure.step('Re-verify progress and subjects', async () => {
      await expect(dashboardPage.yourProgressHeading).toBeVisible();
      await expect(dashboardPage.mySubjectsHeading).toBeVisible();
    });
  });

  test('TC_DASH_013: Unauthenticated access to Dashboard does not show student My Subjects', async ({
    page,
  }) => {
    const data = testData.TC_DASH_013;
    await annotate({
      id: 'TC_DASH_013',
      title: 'Unauthenticated access to Dashboard does not show student My Subjects',
      priority: 'High',
      description: 'Direct Dashboard access without session redirects to login and hides student content.',
    });

    await allure.step('Open Dashboard without authentication', async () => {
      await page.goto(data.dashboardUrl, { waitUntil: 'domcontentloaded' });
    });
    await allure.step('Verify login gate and no My Subjects', async () => {
      await expect(page).toHaveURL(new RegExp(data.expectedLoginUrlPattern, 'i'));
      await expect(dashboardPage.mySubjectsHeading).toHaveCount(0);
      await expect(dashboardPage.yourProgressHeading).toHaveCount(0);
    });
  });

  test('TC_DASH_014: Double-click Watch video does not break navigation', async () => {
    const data = testData.TC_DASH_014;
    await annotate({
      id: 'TC_DASH_014',
      title: 'Double-click Watch video does not break navigation',
      priority: 'Medium',
      description: 'Double-clicking Watch video reaches a stable lecture dialog without crash.',
    });

    await allure.step('Sign in and open Dashboard', async () => {
      await dashboardPage.ensureAuthenticatedDashboard(
        data.validStudentSession,
        data.loginUrl,
        data.dashboardUrl
      );
    });
    await allure.step('Double-click Watch video', async () => {
      await dashboardPage.watchVideoButton.dblclick();
      await dashboardPage.lectureDialog
        .or(dashboardPage.closeButton)
        .first()
        .waitFor({ state: 'visible', timeout: 15000 });
    });
    await allure.step('Verify stable learning dialog', async () => {
      await expect(dashboardPage.lectureDialog.or(dashboardPage.closeButton).first()).toBeVisible();
      await expect(dashboardPage.page.getByText(/stack|exception|syntax error/i)).toHaveCount(0);
    });
  });

  test('TC_DASH_015: Close button is available without crashing the dashboard', async () => {
    const data = testData.TC_DASH_015;
    await annotate({
      id: 'TC_DASH_015',
      title: 'Close button is available without crashing the dashboard',
      priority: 'Low',
      description:
        'Close control appears after Watch video opens lecture dialog; clicking it does not crash Dashboard.',
    });

    await allure.step('Sign in and open Dashboard', async () => {
      await dashboardPage.ensureAuthenticatedDashboard(
        data.validStudentSession,
        data.loginUrl,
        data.dashboardUrl
      );
    });
    await allure.step('Open Watch video dialog so Close is present', async () => {
      await dashboardPage.openWatchVideo();
      await expect(dashboardPage.closeButton.first()).toBeVisible();
    });
    await allure.step('Click Close and verify Dashboard remains stable', async () => {
      await dashboardPage.closeButton.first().click();
      await expect(dashboardPage.mySubjectsHeading).toBeVisible();
      await expect(dashboardPage.yourProgressHeading).toBeVisible();
    });
  });

  test('TC_DASH_016: Day Streak gamification text is visible', async () => {
    const data = testData.TC_DASH_016;
    await annotate({
      id: 'TC_DASH_016',
      title: 'Day Streak gamification text is visible',
      priority: 'Medium',
      description: 'Day streak gamification text is visible on Dashboard.',
    });

    await allure.step('Sign in and open Dashboard', async () => {
      await dashboardPage.ensureAuthenticatedDashboard(
        data.validStudentSession,
        data.loginUrl,
        data.dashboardUrl
      );
    });
    await allure.step('Verify Day Streak text is visible', async () => {
      await expect(dashboardPage.dayStreakText).toBeVisible();
    });
  });

  test('TC_DASH_017: Accumulated XP is visible', async () => {
    const data = testData.TC_DASH_017;
    await annotate({
      id: 'TC_DASH_017',
      title: 'Accumulated XP is visible',
      priority: 'Medium',
      description: 'Accumulated XP count is visible on Dashboard.',
    });

    await allure.step('Sign in and open Dashboard', async () => {
      await dashboardPage.ensureAuthenticatedDashboard(
        data.validStudentSession,
        data.loginUrl,
        data.dashboardUrl
      );
    });
    await allure.step('Verify XP text is visible', async () => {
      await expect(dashboardPage.xpText).toBeVisible();
    });
  });

  test('TC_DASH_018: Weekly Progress section is visible', async () => {
    const data = testData.TC_DASH_018;
    await annotate({
      id: 'TC_DASH_018',
      title: 'Weekly Progress section is visible',
      priority: 'Medium',
      description: 'Weekly Progress and weekly goal text are visible on Dashboard.',
    });

    await allure.step('Sign in and open Dashboard', async () => {
      await dashboardPage.ensureAuthenticatedDashboard(
        data.validStudentSession,
        data.loginUrl,
        data.dashboardUrl
      );
    });
    await allure.step('Verify Weekly Progress and goal text', async () => {
      await expect(dashboardPage.weeklyProgressText).toBeVisible();
      await expect(dashboardPage.weeklyGoalText).toBeVisible();
    });
  });

  test('TC_DASH_019: Feedback sidebar link is visible', async () => {
    const data = testData.TC_DASH_019;
    await annotate({
      id: 'TC_DASH_019',
      title: 'Feedback sidebar link is visible',
      priority: 'Low',
      description: 'Feedback link is visible in the sidebar.',
    });

    await allure.step('Sign in and open Dashboard', async () => {
      await dashboardPage.ensureAuthenticatedDashboard(
        data.validStudentSession,
        data.loginUrl,
        data.dashboardUrl
      );
    });
    await allure.step('Expand sidebar and verify Feedback', async () => {
      await dashboardPage.expandSidebarIfCollapsed();
      await expect(dashboardPage.feedbackText).toBeVisible();
    });
  });

  test('TC_DASH_020: Logout sidebar link is visible', async () => {
    const data = testData.TC_DASH_020;
    await annotate({
      id: 'TC_DASH_020',
      title: 'Logout sidebar link is visible',
      priority: 'Medium',
      description: 'Logout link is visible in the sidebar.',
    });

    await allure.step('Sign in and open Dashboard', async () => {
      await dashboardPage.ensureAuthenticatedDashboard(
        data.validStudentSession,
        data.loginUrl,
        data.dashboardUrl
      );
    });
    await allure.step('Expand sidebar and verify Logout', async () => {
      await dashboardPage.expandSidebarIfCollapsed();
      await expect(dashboardPage.logoutText).toBeVisible();
    });
  });

  test('TC_DASH_021: Subject cards are individually identifiable by name', async () => {
    const data = testData.TC_DASH_021;
    await annotate({
      id: 'TC_DASH_021',
      title: 'Subject cards are individually identifiable by name',
      priority: 'Medium',
      description: 'COMPUTER and MATHEMATICS subject name texts are visible on Dashboard.',
    });

    await allure.step('Sign in and open Dashboard', async () => {
      await dashboardPage.ensureAuthenticatedDashboard(
        data.validStudentSession,
        data.loginUrl,
        data.dashboardUrl
      );
    });
    await allure.step('Verify subject card names are visible', async () => {
      await expect(dashboardPage.subjectComputer).toBeVisible();
      await expect(dashboardPage.subjectMathematics).toBeVisible();
    });
  });
});
