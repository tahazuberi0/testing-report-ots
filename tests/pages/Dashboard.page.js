/**
 * Page Object for the OTS EdTech Student Dashboard (`/dashboard`).
 * Locator priority: role/label/text > data-testid > stable CSS > nth-child (commented if used).
 *
 * LIVE notes:
 * - Sidebar starts collapsed; expand via menu icon before clicking labeled nav groups.
 * - Watch video / Start Learning each match 5 subject cards — use .first() per selectors.md.
 * - Scroll Left/Right appear after Carousel view.
 * - Close appears after Watch video opens the lecture dialog (not on idle dashboard).
 * - Progress label uses .nth(1) per selectors.md.
 */
export class DashboardPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;

    this.otsLogo = page.getByRole('img', { name: 'OTS logo' });
    this.menuIcon = page.getByRole('img', { name: 'menu icon' });

    this.dashboardNav = page.getByRole('group').filter({ hasText: 'Dashboard' });
    this.switchClassNav = page.getByRole('group').filter({ hasText: 'Switch Class' });
    this.reelsNav = page.getByRole('group').filter({ hasText: 'Reels' });
    this.enrollmentsNav = page.getByRole('group').filter({ hasText: 'Enrollments' });
    this.quizTrackingNav = page.getByRole('group').filter({ hasText: 'Quiz Tracking' });
    this.leaderboardNav = page.getByRole('group').filter({ hasText: 'Leaderboard' });
    this.favoriteChaptersNav = page.getByRole('group').filter({ hasText: 'Favorite Chapters' });

    this.yourProgressHeading = page.getByRole('heading', { name: 'Your Progress' });
    this.overallCompletionText = page.getByText('Overall completion for your');
    // FALLBACK nth: selectors.md Progress.nth(1)
    this.progressLabel = page.getByText('Progress').nth(1);

    this.mySubjectsHeading = page.getByRole('heading', { name: 'My Subjects' });
    this.mySubjectsEnrolled = page.getByText(/My Subjects\s*\d*\s*Enrolled/i);

    this.gridViewButton = page.getByRole('button', { name: 'Grid view' });
    this.carouselViewButton = page.getByRole('button', { name: 'Carousel view' });
    this.scrollLeftButton = page.getByRole('button', { name: 'Scroll Left' });
    this.scrollRightButton = page.getByRole('button', { name: 'Scroll Right' });

    // FALLBACK first: selectors.md — live matches 5 subject cards
    this.watchVideoButton = page.getByRole('button', { name: 'Watch video' }).first();
    // FALLBACK first: selectors.md — live matches 5 subject cards
    this.startLearningButton = page.getByRole('button', { name: 'Start Learning' }).first();

    this.closeButton = page.getByRole('button', { name: 'Close' });
    this.lectureDialog = page.getByRole('dialog');

    this.switchClassesHeading = page.getByRole('heading', { name: 'Switch Classes' });
    this.selectYourClassHeading = page.getByRole('heading', { name: 'Select Your Class' });
    this.manageEnrollmentsHeading = page.getByRole('heading', { name: 'Manage Enrollments' });
    this.quizPerformanceHeading = page.getByRole('heading', { name: 'Quiz Performance Tracking' });
    this.leaderboardHeading = page.getByRole('heading', { name: 'Leaderboard' });
  }

  /**
   * @param {{ email: string, password: string }} credentials
   * @param {string} loginUrl
   */
  async loginAsStudent(credentials, loginUrl = 'https://edu.offtheschool.io/login') {
    await this.page.goto(loginUrl, { waitUntil: 'domcontentloaded' });
    await this.page.getByRole('textbox', { name: 'Email Address' }).fill(credentials.email);
    await this.page
      .getByLabel(/^Password/)
      .or(this.page.getByRole('textbox', { name: 'Password' }))
      .fill(credentials.password);
    await this.page.getByRole('button', { name: 'Sign In' }).click();
    await this.page.waitForURL(/\/(home|dashboard)/i, { timeout: 45000 });
  }

  async gotoDashboard(dashboardUrl = 'https://edu.offtheschool.io/dashboard') {
    await this.page.goto(dashboardUrl, { waitUntil: 'domcontentloaded' });
    await this.yourProgressHeading.or(this.mySubjectsHeading).first().waitFor({
      state: 'visible',
      timeout: 20000,
    });
  }

  async ensureAuthenticatedDashboard(credentials, loginUrl, dashboardUrl) {
    await this.loginAsStudent(credentials, loginUrl);
    if (!/\/dashboard/i.test(this.page.url())) {
      await this.gotoDashboard(dashboardUrl);
    } else {
      await this.yourProgressHeading.or(this.mySubjectsHeading).first().waitFor({
        state: 'visible',
        timeout: 20000,
      });
    }
  }

  async expandSidebarIfCollapsed() {
    const label = this.page.getByText('Switch Class', { exact: true });
    if (!(await label.isVisible().catch(() => false))) {
      await this.menuIcon.click();
      await label.waitFor({ state: 'visible', timeout: 5000 });
    }
  }

  async clickSidebarNav(navGroup) {
    await this.expandSidebarIfCollapsed();
    await navGroup.click();
  }

  async openWatchVideo() {
    await this.watchVideoButton.click();
    await this.lectureDialog.or(this.closeButton).first().waitFor({ state: 'visible', timeout: 15000 });
  }

  async clickStartLearning() {
    await this.startLearningButton.click();
  }

  async enableCarouselView() {
    await this.carouselViewButton.click();
    await this.scrollRightButton.waitFor({ state: 'visible', timeout: 10000 });
  }
}
