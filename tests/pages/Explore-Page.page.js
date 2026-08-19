/**
 * Page Object for the OTS EdTech Explore hub (`/explore`).
 * Locator priority: role/label/text > data-testid > stable CSS > nth-child (commented if used).
 *
 * LIVE vs selectors.md: selectors.md documents button "Let's Start!" (0 matches on live page).
 * Live + userflow use "Explore Courses" (2 buttons — scoped to each card below).
 */
export class ExplorePage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;

    this.digitalSchoolHeading = page.getByRole('heading', { name: 'Digital School' });
    this.skillsAcademyHeading = page.getByRole('heading', { name: 'Skills Academy' });

    // Unscoped getByRole('button', { name: 'Explore Courses' }) matches 2 elements.
    // Exclude the sibling card heading so we do not match the shared outer wrapper.
    this.digitalSchoolCard = page
      .locator('div')
      .filter({ has: this.digitalSchoolHeading })
      .filter({ hasNot: this.skillsAcademyHeading })
      .filter({ has: page.getByRole('button', { name: 'Explore Courses' }) })
      .last();
    this.digitalSchoolStartBtn = this.digitalSchoolCard.getByRole('button', {
      name: 'Explore Courses',
    });

    this.skillsAcademyCard = page
      .locator('div')
      .filter({ has: this.skillsAcademyHeading })
      .filter({ hasNot: this.digitalSchoolHeading })
      .filter({ has: page.getByRole('button', { name: 'Explore Courses' }) })
      .last();
    this.skillsAcademyStartBtn = this.skillsAcademyCard.getByRole('button', {
      name: 'Explore Courses',
    });

    // STALE selectors.md locators (live count = 0) — kept for documentation only
    this.digitalSchoolLetsStartBtn = page.getByRole('button', { name: "Let's Start!" });
    this.skillsAcademyLetsStartBtn = page.getByRole('button', { name: "Let's Start!" });

    // --- Newly resolved gap selectors ---
    this.homeLink = page.getByRole('link', { name: 'Home' }).first();
    this.reelsText = page.getByText('Reels', { exact: true });
    this.meetOurTeamText = page.getByText('Meet Our Team');
    this.downloadAppText = page.getByText('Download App');
    this.googlePlayLink = page.getByRole('link', { name: /google play/i });
    this.stayUpdatedEmail = page.getByRole('textbox', { name: /email/i });
    this.faqLink = page.getByRole('link', { name: 'FAQ' }).first();
    this.privacyPolicyLink = page.getByRole('link', { name: 'Privacy Policy' });
    this.termsOfUseLink = page.getByRole('link', { name: 'Terms of Use' });

    // FALLBACK nth: selectors.md visual locators — not used as primary assertions
    this.digitalSchoolCardImg = page.getByRole('img').nth(5);
    this.digitalSchoolIcon = page.locator('i').first();
    this.digitalSchoolCardCss = page.locator('.css-1uxsqe').first();
  }

  async goto(url = 'https://edu.offtheschool.io/explore') {
    await this.page.goto(url);
    await this.digitalSchoolHeading.waitFor({ state: 'visible' });
  }

  async clickDigitalSchoolStart() {
    await this.digitalSchoolStartBtn.click();
  }

  async clickSkillsAcademyStart() {
    await this.skillsAcademyStartBtn.click();
  }

  async doubleClickDigitalSchoolStart() {
    await this.digitalSchoolStartBtn.dblclick();
  }
}
