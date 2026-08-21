import { createRequire } from 'module';
import * as allure from 'allure-js-commons';
import { test, expect } from '../fixtures/allure-hooks.js';
import { EnrollmentsPage } from '../pages/enrollments_Page.page.js';

const require = createRequire(import.meta.url);
const testData = require('../data/enrollments_Page.data.json');

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
  await allure.feature('Enrollments Page');
  await allure.story(id);
  await allure.allureId(id);
  await allure.description(description);
  await allure.severity(severityMap[priority]);
  await allure.tag(priority);
  await allure.displayName(`${id}: ${title}`);
}

test.describe('OTS EdTech Enrollments Page', () => {
  test.setTimeout(90_000);
  /** @type {EnrollmentsPage} */
  let enrollmentsPage;

  test.beforeEach(async ({ page }) => {
    enrollmentsPage = new EnrollmentsPage(page);
  });

  test('TC_ENROLL_001: Authenticated student opens Manage Enrollments via sidebar Enrollments', async ({
    page,
  }) => {
    const data = testData.TC_ENROLL_001;
    await annotate({
      id: 'TC_ENROLL_001',
      title: 'Authenticated student opens Manage Enrollments via sidebar Enrollments',
      priority: 'High',
      description:
        'Logged-in student opens Manage Enrollments from sidebar Enrollments and sees the heading.',
    });

    await allure.step('Sign in and land on Dashboard', async () => {
      await enrollmentsPage.loginAsStudent(data.validStudentSession, data.loginUrl);
      if (!/\/dashboard/i.test(page.url())) {
        await page.goto(data.dashboardUrl, { waitUntil: 'domcontentloaded' });
      }
    });
    await allure.step('Click sidebar Enrollments', async () => {
      await enrollmentsPage.clickEnrollmentsNav();
    });
    await allure.step('Verify Manage Enrollments page', async () => {
      await expect(page).toHaveURL(/\/dashboard\/manage-enrollment/i);
      await expect(enrollmentsPage.manageEnrollmentsHeading).toBeVisible();
    });
  });

  test('TC_ENROLL_002: Heading and subtitle are visible', async () => {
    const data = testData.TC_ENROLL_002;
    await annotate({
      id: 'TC_ENROLL_002',
      title: 'Heading and subtitle are visible',
      priority: 'High',
      description: 'Manage Enrollments heading and View and manage your course subtitle are visible.',
    });

    await allure.step('Sign in and open Manage Enrollments', async () => {
      await enrollmentsPage.ensureAuthenticatedEnrollments(
        data.validStudentSession,
        data.loginUrl,
        data.manageEnrollmentUrl
      );
    });
    await allure.step('Verify heading and subtitle', async () => {
      await expect(enrollmentsPage.manageEnrollmentsHeading).toBeVisible();
      await expect(enrollmentsPage.pageSubtitle).toBeVisible();
    });
  });

  test('TC_ENROLL_003: Enroll in New Course button is visible', async () => {
    const data = testData.TC_ENROLL_003;
    await annotate({
      id: 'TC_ENROLL_003',
      title: 'Enroll in New Course button is visible',
      priority: 'High',
      description: 'Enroll in New Course is visible under the Manage Enrollments heading.',
    });

    await allure.step('Sign in and open Manage Enrollments', async () => {
      await enrollmentsPage.ensureAuthenticatedEnrollments(
        data.validStudentSession,
        data.loginUrl,
        data.manageEnrollmentUrl
      );
    });
    await allure.step('Verify Enroll in New Course', async () => {
      await expect(enrollmentsPage.manageEnrollmentsHeading).toBeVisible();
      await expect(enrollmentsPage.enrollInNewCourseButton).toBeVisible();
    });
  });

  test('TC_ENROLL_004: Enroll in New Course redirects to course catalog', async ({ page }) => {
    const data = testData.TC_ENROLL_004;
    await annotate({
      id: 'TC_ENROLL_004',
      title: 'Enroll in New Course redirects to course catalog',
      priority: 'High',
      description: 'Enroll in New Course redirects to /dashboard/explore catalog.',
    });

    await allure.step('Sign in and open Manage Enrollments', async () => {
      await enrollmentsPage.ensureAuthenticatedEnrollments(
        data.validStudentSession,
        data.loginUrl,
        data.manageEnrollmentUrl
      );
    });
    await allure.step('Click Enroll in New Course', async () => {
      await enrollmentsPage.clickEnrollInNewCourse();
    });
    await allure.step('Verify catalog destination', async () => {
      await expect(page).toHaveURL(/\/dashboard\/explore/i);
    });
  });

  test('TC_ENROLL_005: Content container / card element is present', async () => {
    const data = testData.TC_ENROLL_005;
    await annotate({
      id: 'TC_ENROLL_005',
      title: 'Content container / card element is present',
      priority: 'Medium',
      description: 'Documented .css-1iob08 card container is present on Manage Enrollments.',
    });

    await allure.step('Sign in and open Manage Enrollments', async () => {
      await enrollmentsPage.ensureAuthenticatedEnrollments(
        data.validStudentSession,
        data.loginUrl,
        data.manageEnrollmentUrl
      );
    });
    await allure.step('Verify content container is present', async () => {
      await expect(enrollmentsPage.manageEnrollmentsHeading).toBeVisible();
      await expect(enrollmentsPage.contentCard.first()).toBeVisible();
    });
  });

  test('TC_ENROLL_006: Header bar concatenated text is present if exposed', async () => {
    const data = testData.TC_ENROLL_006;
    await annotate({
      id: 'TC_ENROLL_006',
      title: 'Header bar concatenated text is present if exposed',
      priority: 'Low',
      description:
        'Page chrome stays visible; brittle BackManage EnrollmentsEnroll text is optional.',
    });

    await allure.step('Sign in and open Manage Enrollments', async () => {
      await enrollmentsPage.ensureAuthenticatedEnrollments(
        data.validStudentSession,
        data.loginUrl,
        data.manageEnrollmentUrl
      );
    });
    await allure.step('Verify preferred chrome; observe header bar if present', async () => {
      await expect(enrollmentsPage.manageEnrollmentsHeading).toBeVisible();
      await expect(enrollmentsPage.enrollInNewCourseButton).toBeVisible();
      const headerCount = await enrollmentsPage.headerBarText.count();
      if (headerCount > 0) {
        await expect(enrollmentsPage.headerBarText.first()).toBeVisible();
      }
    });
  });

  test('TC_ENROLL_007: Soft refresh keeps Manage Enrollments chrome visible', async () => {
    const data = testData.TC_ENROLL_007;
    await annotate({
      id: 'TC_ENROLL_007',
      title: 'Soft refresh keeps Manage Enrollments chrome visible',
      priority: 'Medium',
      description: 'Refreshing Manage Enrollments keeps heading, subtitle, and CTA visible.',
    });

    await allure.step('Sign in and open Manage Enrollments', async () => {
      await enrollmentsPage.ensureAuthenticatedEnrollments(
        data.validStudentSession,
        data.loginUrl,
        data.manageEnrollmentUrl
      );
      await expect(enrollmentsPage.manageEnrollmentsHeading).toBeVisible();
      await expect(enrollmentsPage.pageSubtitle).toBeVisible();
      await expect(enrollmentsPage.enrollInNewCourseButton).toBeVisible();
    });
    await allure.step('Refresh page', async () => {
      await enrollmentsPage.page.reload({ waitUntil: 'domcontentloaded' });
    });
    await allure.step('Re-verify chrome', async () => {
      await expect(enrollmentsPage.manageEnrollmentsHeading).toBeVisible();
      await expect(enrollmentsPage.pageSubtitle).toBeVisible();
      await expect(enrollmentsPage.enrollInNewCourseButton).toBeVisible();
    });
  });

  test('TC_ENROLL_008: Unauthenticated access to Manage Enrollments does not show student content', async ({
    page,
  }) => {
    const data = testData.TC_ENROLL_008;
    await annotate({
      id: 'TC_ENROLL_008',
      title: 'Unauthenticated access to Manage Enrollments does not show student content',
      priority: 'High',
      description:
        'Direct manage-enrollment access without session redirects to login and hides student content.',
    });

    await allure.step('Open Manage Enrollments without authentication', async () => {
      await page.goto(data.manageEnrollmentUrl, { waitUntil: 'domcontentloaded' });
    });
    await allure.step('Verify login gate and no student chrome', async () => {
      await expect(page).toHaveURL(new RegExp(data.expectedLoginUrlPattern, 'i'));
      await expect(enrollmentsPage.manageEnrollmentsHeading).toHaveCount(0);
      await expect(enrollmentsPage.enrollInNewCourseButton).toHaveCount(0);
    });
  });

  test('TC_ENROLL_009: Double-click Enroll in New Course does not break navigation', async ({
    page,
  }) => {
    const data = testData.TC_ENROLL_009;
    await annotate({
      id: 'TC_ENROLL_009',
      title: 'Double-click Enroll in New Course does not break navigation',
      priority: 'Medium',
      description: 'Double-clicking Enroll in New Course reaches a single stable catalog page.',
    });

    await allure.step('Sign in and open Manage Enrollments', async () => {
      await enrollmentsPage.ensureAuthenticatedEnrollments(
        data.validStudentSession,
        data.loginUrl,
        data.manageEnrollmentUrl
      );
    });
    await allure.step('Double-click Enroll in New Course', async () => {
      await enrollmentsPage.enrollInNewCourseButton.dblclick();
    });
    await allure.step('Verify stable catalog destination', async () => {
      await expect(page).toHaveURL(/\/dashboard\/explore/i);
      await expect(page.getByText(/stack|exception|syntax error/i)).toHaveCount(0);
    });
  });

  test('TC_ENROLL_010: Current Enrollments heading is visible', async () => {
    const data = testData.TC_ENROLL_010;
    await annotate({
      id: 'TC_ENROLL_010',
      title: 'Current Enrollments heading is visible',
      priority: 'High',
      description: 'Current Enrollments heading is visible on Manage Enrollments page.',
    });

    await allure.step('Sign in and open Manage Enrollments', async () => {
      await enrollmentsPage.ensureAuthenticatedEnrollments(
        data.validStudentSession,
        data.loginUrl,
        data.manageEnrollmentUrl
      );
    });
    await allure.step('Verify Current Enrollments heading', async () => {
      await expect(enrollmentsPage.currentEnrollmentsHeading).toBeVisible();
    });
  });
});
