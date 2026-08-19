/**
 * Page Object for Change Password flow (reached via Profile > Settings > Change Password).
 * Locator priority: role/label/text > data-testid > stable CSS > nth-child (commented if used).
 *
 * All selectors use role/label/text — no CSS or nth fallbacks needed.
 * Downstream OTP entry, new password, and confirmation have no selectors.
 */
export class ChangePasswordPage {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    this.page = page;

    // --- Profile trigger ---
    this.changePasswordTrigger = page.getByRole('button', { name: 'Change Password' });

    // --- Change Password screen ---
    this.changePasswordHeading = page.getByRole('heading', { name: 'Change Password' });
    this.emailAddressLabel = page.getByText('Email Address*');
    this.emailAddressInput = page.getByRole('textbox', { name: 'Email Address' });
    this.sendOtpButton = page.getByRole('button', { name: 'Send OTP' });
    this.backToProfileButton = page.getByRole('button', { name: 'Back to Profile' });

    // --- Verification OTP screen ---
    this.verificationOtpHeading = page.getByRole('heading', { name: 'Verification OTP' });
    this.verificationSubtext = page.getByText('Verification OTPWe have sent');

    // --- Profile tabs (for navigation) ---
    this.settingsTab = page.getByRole('button', { name: 'Settings' });
    this.myProfileHeading = page.getByRole('heading', { name: 'My Profile' });
  }

  /** @param {{ email: string, password: string }} credentials */
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

  async navigateToChangePassword(profileUrl = 'https://edu.offtheschool.io/dashboard/profile') {
    await this.page.goto(profileUrl, { waitUntil: 'domcontentloaded' });
    await this.myProfileHeading.waitFor({ state: 'visible', timeout: 20000 });
    await this.settingsTab.click();
    await this.changePasswordTrigger.waitFor({ state: 'visible', timeout: 10000 });
    await this.changePasswordTrigger.click();
    await this.changePasswordHeading.waitFor({ state: 'visible', timeout: 15000 });
  }

  async ensureAuthenticatedChangePassword(credentials, loginUrl, profileUrl) {
    await this.loginAsStudent(credentials, loginUrl);
    await this.navigateToChangePassword(profileUrl);
  }
}
