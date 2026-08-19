/**
 * Page Object for Leaderboard (`/dashboard/leaderboard`).
 * Locator priority: role/label/text > data-testid > stable CSS > nth-child (commented if used).
 *
 * LIVE notes:
 * - Current class indicator and filter/header containers use brittle div+nth filters from selectors.md.
 * - Filter option-level locators (All Subjects, By Subject, By Chapter) are not available.
 */
export class LeaderboardPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;

    // --- Navigation ---
    this.sidebarLeaderboard = page.getByRole('group').filter({ hasText: 'Leaderboard' });

    // --- Page Chrome ---
    this.pageHeading = page.getByRole('heading', { name: 'Leaderboard' });
    this.subtitleText = page.getByText('Compete with the best and');
    // FALLBACK nth(2): selectors.md header container — brittle concatenated string
    this.headerContainer = page
      .locator('div')
      .filter({ hasText: /^LeaderboardCompete with the best and climb the ranks!$/ })
      .nth(2);

    // --- Class context ---
    this.showingLeaderboardForText = page.getByText('Showing leaderboard for:');
    // FALLBACK nth(1): selectors.md — environment-specific class number in regex
    this.currentClassIndicator = page
      .locator('div')
      .filter({ hasText: /^Showing leaderboard for: Class \d+$/ })
      .nth(1);

    // --- Filters ---
    this.filterByLabel = page.getByText('Filter by:');
    // FALLBACK nth(1): selectors.md — concatenated filter option text
    this.subjectFilterContainer = page
      .locator('div')
      .filter({ hasText: /^Filter by:All SubjectsBy SubjectBy Chapter$/ })
      .nth(1);

    // --- Tabs ---
    this.globalTab = page.getByRole('tab', { name: 'Global' });
    this.weeklyTab = page.getByRole('tab', { name: 'Weekly' });

    // --- Newly resolved gap selectors ---
    this.filterAllSubjects = page.getByText('All Subjects', { exact: true });
    this.filterBySubject = page.getByText('By Subject', { exact: true });
    this.filterByChapter = page.getByText('By Chapter', { exact: true });

    // Not in Leaderboard_selectors.md — needed to expand collapsed sidebar
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

  async gotoLeaderboard(
    leaderboardUrl = 'https://edu.offtheschool.io/dashboard/leaderboard'
  ) {
    await this.page.goto(leaderboardUrl, { waitUntil: 'domcontentloaded' });
    await this.pageHeading.waitFor({ state: 'visible', timeout: 20000 });
    // LIVE: class context loads asynchronously after initial render
    await this.showingLeaderboardForText
      .waitFor({ state: 'visible', timeout: 30000 })
      .catch(() => {});
  }

  async ensureAuthenticatedLeaderboard(credentials, loginUrl, leaderboardUrl) {
    await this.loginAsStudent(credentials, loginUrl);
    await this.gotoLeaderboard(leaderboardUrl);
  }

  async clickFilterContainer() {
    await this.subjectFilterContainer.click();
  }
}
