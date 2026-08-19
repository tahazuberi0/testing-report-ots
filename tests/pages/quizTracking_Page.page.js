/**
 * Page Object for Quiz Performance Tracking (`/dashboard/quiz-tracking`).
 * Locator priority: role/label/text > data-testid > stable CSS > nth-child (commented if used).
 *
 * LIVE notes:
 * - Back navigation uses concatenated text `BackQuiz Performance` — no standalone Back button locator.
 * - Filter/Sort/Show Results use paragraph-filter locators; no option-level locators available.
 */
export class QuizTrackingPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;

    // --- Navigation & Header ---
    this.sidebarQuizTracking = page.getByRole('group').filter({ hasText: 'Quiz Tracking' });
    this.backBarText = page.getByText('BackQuiz Performance');

    // --- Page Chrome ---
    this.pageHeading = page.getByRole('heading', { name: 'Quiz Performance Tracking' });
    this.descriptionText = page.getByText('Track your progress and');

    // --- Filters ---
    this.filtersHeading = page.getByRole('heading', { name: 'Filters' });
    this.filterByQuiz = page.getByRole('paragraph').filter({ hasText: 'Filter by Quiz' });
    this.sortBy = page.getByRole('paragraph').filter({ hasText: 'Sort By' });
    this.showResults = page.getByRole('paragraph').filter({ hasText: 'Show Results' });

    // FALLBACK CSS: no role/text locator available
    this.contentCard = page.locator('.css-1iob08');
    // FALLBACK CSS: no role/text locator available
    this.filterWrapper = page.locator('.css-1qmf9hg');

    // Not in quizTracking_selectors.md — needed to expand collapsed sidebar
    this.menuIcon = page.getByRole('img', { name: 'menu icon' });

    // --- Newly resolved gap selectors ---
    this.totalAttemptsText = page.getByText('Total Attempts');
    this.quizzesTakenText = page.getByText('Quizzes Taken');
    this.averageScoreText = page.getByText('Average Score');
    this.bestScoreText = page.getByText('Best Score');
    this.quizAttemptsByChapterHeading = page.getByText('Quiz Attempts by Chapter');
    this.backButton = page.getByRole('button', { name: 'Back' });
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

  async gotoQuizTracking(
    quizTrackingUrl = 'https://edu.offtheschool.io/dashboard/quiz-tracking'
  ) {
    await this.page.goto(quizTrackingUrl, { waitUntil: 'domcontentloaded' });
    await this.pageHeading.waitFor({ state: 'visible', timeout: 20000 });
  }

  async ensureAuthenticatedQuizTracking(credentials, loginUrl, quizTrackingUrl) {
    await this.loginAsStudent(credentials, loginUrl);
    await this.gotoQuizTracking(quizTrackingUrl);
  }

  async clickBackBar() {
    await this.backBarText.click();
  }

  async openSortByDropdown() {
    await this.sortBy.first().click({ force: true });
  }

  async openShowResultsDropdown() {
    await this.showResults.first().click({ force: true });
  }

  async openFilterByQuizDropdown() {
    await this.filterByQuiz.first().click({ force: true });
  }
}
