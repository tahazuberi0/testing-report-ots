/**
 * Page Object for Manage Enrollments (`/dashboard/manage-enrollment`).
 * Locator priority: role/label/text > data-testid > stable CSS > nth-child (commented if used).
 *
 * LIVE notes:
 * - Sidebar starts collapsed; expand via menu icon before clicking Enrollments (menu icon is
 *   not in enrollments_Page_selectors.md — required for TC_ENROLL_001 entry).
 * - Header bar concatenated text may be 0 live; do not fail if heading + CTA are present.
 */
export class EnrollmentsPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;

    this.enrollmentsNav = page.getByRole('group').filter({ hasText: 'Enrollments' });
    this.manageEnrollmentsHeading = page.getByRole('heading', { name: 'Manage Enrollments' });
    this.pageSubtitle = page.getByText('View and manage your course');
    this.headerBarText = page.getByText('BackManage EnrollmentsEnroll');
    // LIVE: exact name can miss; accessible name still matches regex
    this.enrollInNewCourseButton = page.getByRole('button', { name: /Enroll in New Course/i });
    // FALLBACK CSS: selectors.md Content Container / Card Element
    this.contentCard = page.locator('.css-1iob08');

    // Not in enrollments_Page_selectors.md — needed to expand collapsed sidebar
    this.menuIcon = page.getByRole('img', { name: 'menu icon' });
  }

  /**
   * @param {{ email: string, password: string }} credentials
   * @param {string} loginUrl
   */
  async loginAsStudent(credentials, loginUrl = 'https://edu.offtheschool.io/login') {
    await this.page.goto(loginUrl, { waitUntil: 'domcontentloaded' });
    const emailInput = this.page.getByRole('textbox', { name: 'Email Address' });
    await emailInput.waitFor({ state: 'visible', timeout: 20000 });
    await this.page.keyboard.press('Escape').catch(() => {});
    await emailInput.fill(credentials.email);
    await this.page
      .getByLabel(/^Password/)
      .or(this.page.getByRole('textbox', { name: 'Password' }))
      .fill(credentials.password);
    await this.page.getByRole('button', { name: 'Sign In' }).click();
    await this.page.waitForURL(/\/(home|dashboard)/i, { timeout: 45000 });
  }

  async gotoManageEnrollments(
    manageEnrollmentUrl = 'https://edu.offtheschool.io/dashboard/manage-enrollment'
  ) {
    await this.page.goto(manageEnrollmentUrl, { waitUntil: 'domcontentloaded' });
    await this.manageEnrollmentsHeading.waitFor({ state: 'visible', timeout: 20000 });
    await this.enrollInNewCourseButton.waitFor({ state: 'visible', timeout: 15000 });
  }

  async ensureAuthenticatedEnrollments(credentials, loginUrl, manageEnrollmentUrl) {
    await this.loginAsStudent(credentials, loginUrl);
    await this.gotoManageEnrollments(manageEnrollmentUrl);
  }

  async expandSidebarIfCollapsed() {
    const label = this.page.getByText('Enrollments', { exact: true });
    if (!(await label.isVisible().catch(() => false))) {
      await this.menuIcon.click();
      await label.waitFor({ state: 'visible', timeout: 5000 });
    }
  }

  async clickEnrollmentsNav() {
    await this.expandSidebarIfCollapsed();
    const label = this.page.getByText('Enrollments', { exact: true });
    await label.click({ timeout: 8000 }).catch(() => label.click({ force: true }));
    await this.manageEnrollmentsHeading.waitFor({ state: 'visible', timeout: 15000 });
  }

  async clickEnrollInNewCourse() {
    await this.enrollInNewCourseButton.click();
  }
}
