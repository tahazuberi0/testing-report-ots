/**
 * Page Object for the Switch Classes page (`/dashboard/change-course`).
 * Locator priority: role/label/text > data-testid > stable CSS > nth-child (commented if used).
 *
 * LIVE notes:
 * - Watch video / Start Learning each match multiple subject cards — use .first().
 * - Scroll Left / Right appear only after Carousel view is active.
 * - Close appears after Watch video opens the lecture dialog.
 * - Progress label uses .nth(1) per selectors.md.
 */
export class SwitchClassesPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;

    // --- Navigation & Page Header ---
    this.backButton = page.getByRole('button', { name: 'Back' });
    this.switchClassesHeading = page.getByRole('heading', { name: 'Switch Classes' });
    this.headerSubtext = page.getByText('Switch ClassesChange your');

    // --- Class Selection ---
    this.selectYourClassHeading = page.getByRole('heading', { name: 'Select Your Class' });
    this.availableClassesText = page.getByText('Available Classes');
    this.chooseFromEnrolledText = page.getByText('Choose from your enrolled');
    this.classSelectorButton = page.getByRole('button', { name: 'Class' });

    // --- Your Progress ---
    this.yourProgressHeading = page.getByRole('heading', { name: 'Your Progress' });
    this.overallCompletionText = page.getByText('Overall completion for your');
    // FALLBACK nth: selectors.md Progress.nth(1)
    this.progressLabel = page.getByText('Progress').nth(1);

    // --- My Subjects ---
    this.mySubjectsHeading = page.getByRole('heading', { name: 'My Subjects' });
    this.mySubjectsEnrolled = page.getByText(/My Subjects\s*\d*\s*Enrolled/i);

    this.gridViewButton = page.getByRole('button', { name: 'Grid view' });
    this.carouselViewButton = page.getByRole('button', { name: 'Carousel view' });
    this.scrollLeftButton = page.getByRole('button', { name: 'Scroll Left' });
    this.scrollRightButton = page.getByRole('button', { name: 'Scroll Right' });

    // FALLBACK first: selectors.md — multiple subject cards
    this.watchVideoButton = page.getByRole('button', { name: 'Watch video' }).first();
    // FALLBACK first: selectors.md — multiple subject cards
    this.startLearningButton = page.getByRole('button', { name: 'Start Learning' }).first();

    this.closeButton = page.getByRole('button', { name: 'Close' });
    this.lectureDialog = page.getByRole('dialog');

    // Not in switchClasses_selectors.md — needed to expand collapsed sidebar
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

  async gotoSwitchClasses(
    changeCourseUrl = 'https://edu.offtheschool.io/dashboard/change-course'
  ) {
    await this.page.goto(changeCourseUrl, { waitUntil: 'domcontentloaded' });
    await this.switchClassesHeading.waitFor({ state: 'visible', timeout: 20000 });
  }

  async ensureAuthenticatedSwitchClasses(credentials, loginUrl, changeCourseUrl) {
    await this.loginAsStudent(credentials, loginUrl);
    await this.gotoSwitchClasses(changeCourseUrl);
  }

  async openWatchVideo() {
    await this.watchVideoButton.click();
    await this.lectureDialog.or(this.closeButton).first().waitFor({
      state: 'visible',
      timeout: 15000,
    });
  }

  async clickStartLearning() {
    await this.startLearningButton.click();
  }

  async enableCarouselView() {
    await this.carouselViewButton.click();
    await this.scrollRightButton.waitFor({ state: 'visible', timeout: 10000 });
  }
}
