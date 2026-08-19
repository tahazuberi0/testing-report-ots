/**
 * Page Object for Favorite Chapters (`/dashboard/favorite-chapters`).
 * Locator priority: role/label/text > data-testid > stable CSS > nth-child (commented if used).
 *
 * LIVE notes:
 * - Header container uses .nth(3) — brittle.
 * - Chapter card locator uses environment-specific text ("Forward Counting") — brittle.
 * - Open Chapter wrapper uses .first() — brittle.
 * - Secondary action button uses .nth(1) — brittle, unclear semantic purpose.
 * - Empty state elements (heart icon, "No Favorite Chapters Yet", Browse Chapters) have no selectors.
 */
export class FavoriteChaptersPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;

    // --- Navigation ---
    this.sidebarFavoriteChapters = page.getByRole('group').filter({ hasText: 'Favorite Chapters' });

    // --- Page Chrome ---
    this.pageHeading = page.getByRole('heading', { name: 'Favorite Chapters', exact: true });
    // FALLBACK nth(3): selectors.md header container
    this.headerContainer = page.locator('div').filter({ hasText: /^Favorite Chapters$/ }).nth(3);

    // --- Chapter Cards ---
    // FALLBACK first + env-specific text: selectors.md chapter card
    this.chapterCard = page.locator('div').filter({ hasText: /^Forward Counting$/ }).first();
    this.openChapterButton = page.getByRole('button', { name: 'Open Chapter' });
    // FALLBACK first: selectors.md Open Chapter wrapper
    this.openChapterWrapper = page.locator('div').filter({ hasText: /^Open Chapter$/ }).first();

    // --- Newly resolved gap selectors (empty state) ---
    this.noFavoriteChaptersHeading = page.getByRole('heading', { name: 'No Favorite Chapters Yet' });
    this.startAddingChaptersText = page.getByText('Start adding chapters');
    this.browseChaptersButton = page.getByRole('button', { name: 'Browse Chapters' });

    // --- Interface Controls ---
    // FALLBACK nth(1): selectors.md — unclear semantic purpose
    this.secondaryActionButton = page.getByRole('button').nth(1);
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

  async gotoFavoriteChapters(
    favoriteChaptersUrl = 'https://edu.offtheschool.io/dashboard/favorite-chapters'
  ) {
    await this.page.goto(favoriteChaptersUrl, { waitUntil: 'domcontentloaded' });
    await this.pageHeading.waitFor({ state: 'visible', timeout: 20000 });
  }

  async ensureAuthenticatedFavoriteChapters(credentials, loginUrl, favoriteChaptersUrl) {
    await this.loginAsStudent(credentials, loginUrl);
    await this.gotoFavoriteChapters(favoriteChaptersUrl);
  }
}
