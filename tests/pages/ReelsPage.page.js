/**
 * Page Object for the OTS EdTech Reels player (`/reels`).
 * Locator priority: role/label/text > data-testid > stable CSS > nth-child (commented if used).
 *
 * LIVE vs selectors.md:
 * - Header "Reels" is paragraph text (not role=link); Open reels button is the icon control.
 * - getByRole('link', { name: 'Reels' }) matches 0 on live homepage.
 * - Back button: description 'Back' not exposed; multiple aria-label Back to home (use first visible).
 * - Video Element .css-ohxuui matches 8 nodes — use .first().
 */
export class ReelsPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;

    // LIVE: header "Reels" renders as paragraph text; role=link { name: 'Reels' } matches 0
    this.reelsNavLink = page.getByRole('link', { name: 'Reels' });
    this.reelsNavLabel = page.getByText('Reels', { exact: true });
    this.openReelsButton = page.getByRole('button', { name: 'Open reels' });
    this.otsReelsPromoLink = page.getByRole('link', { name: /OTS Reels/i });

    this.scrollTrigger = page
      .locator('div')
      .filter({ hasText: /^Scroll down to see more reels — new clips load as you go\.$/ });
    this.scrollTriggerLoose = page.getByText(/Scroll down to see more reels/i);

    // FALLBACK CSS: selectors.md — 8 matches live; use first for active player
    this.videoElement = page.locator('.css-ohxuui').first();

    // FALLBACK CSS: selectors.md Navigation Icon (SVG)
    this.navigationIcon = page.locator('.css-1fobv7y > svg');

    // selectors.md documents description 'Back' — live exposes aria-label only; unscoped matches 9
    this.backButton = page.getByRole('button', { name: 'Back to home' });
    // FALLBACK nth: index 0 is often a hidden duplicate off-screen reel card
    this.activeBackButton = page.getByRole('button', { name: 'Back to home' }).nth(1);

    // BRITTLE: selectors.md title-specific video container — environment-dependent
    this.videoContainerByTitle = (titlePattern) =>
      page
        .locator('div')
        .filter({ hasText: new RegExp(titlePattern, 'i') })
        .nth(1);
  }

  async gotoEntry(entryPageUrl = 'https://edu.offtheschool.io/') {
    await this.page.goto(entryPageUrl, { waitUntil: 'networkidle' });
    await this.dismissOverlays();
    await this.reelsNavLabel.or(this.openReelsButton).first().waitFor({ state: 'visible', timeout: 20000 });
  }

  async gotoReels(reelsUrl = 'https://edu.offtheschool.io/reels') {
    await this.page.goto(reelsUrl, { waitUntil: 'domcontentloaded' });
    await this.dismissOverlays();
    await this.waitForPlayerReady();
  }

  async dismissOverlays() {
    const modal = this.page.locator('.chakra-modal__content-container');
    await this.page.waitForTimeout(750);
    for (let attempt = 0; attempt < 5; attempt += 1) {
      if (!(await modal.count())) return;
      const closeBtn = this.page.getByRole('button', { name: 'Close' });
      if (await closeBtn.count()) {
        await closeBtn
          .first()
          .click({ timeout: 5000 })
          .catch(async () => closeBtn.first().click({ force: true }));
      }
      await this.page.keyboard.press('Escape').catch(() => {});
      const hidden = await modal
        .first()
        .waitFor({ state: 'hidden', timeout: 5000 })
        .then(() => true)
        .catch(() => false);
      if (hidden) return;
      await this.page.waitForTimeout(500);
    }
  }

  async waitForPlayerReady() {
    await this.scrollTriggerLoose.or(this.videoElement).first().waitFor({ state: 'visible', timeout: 20000 });
  }

  async clickReelsNav() {
    await this.dismissOverlays();
    const modal = this.page.locator('.chakra-modal__content-container');
    const clickOptions = (await modal.count()) ? { force: true } : {};

    if (await this.reelsNavLabel.count()) {
      await this.reelsNavLabel.first().click(clickOptions);
      return;
    }
    if (await this.openReelsButton.count()) {
      await this.openReelsButton.click(clickOptions);
      return;
    }
    if (await this.otsReelsPromoLink.count()) {
      await this.otsReelsPromoLink.first().click();
      return;
    }
    if (await this.reelsNavLink.count()) {
      await this.reelsNavLink.first().click(clickOptions);
    }
  }

  async clickScrollTrigger() {
    await this.scrollTrigger.first().click();
  }

  async clickNavigationIcon() {
    await this.navigationIcon.click();
  }

  async doubleClickNavigationIcon() {
    await this.navigationIcon.dblclick();
  }

  async clickBackToHome() {
    await this.activeBackButton.click();
  }

  async clickVideoElement() {
    await this.videoElement.click();
  }

  getCurrentReelTitle() {
    return this.page.locator('h1, h2, h3').first().innerText().catch(() => '');
  }

  getPlayerSurface() {
    return this.scrollTriggerLoose.or(this.videoElement).first();
  }
}
