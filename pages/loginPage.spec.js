/**
 * Page Object Model for the Login Page.
 * Locators use resilient role/label queries only — no raw selectors in tests.
 */
export class LoginPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;

    this.logo = page.getByRole('img', { name: 'OTS Logo' });
    this.backToHomeButton = page.getByRole('button', { name: 'Back to Home' });
    this.heading = page.getByRole('heading', { name: 'Sign in to your account' });
    this.subheading = page.getByText('Continue your learning');
    this.googleSignInButton = page.getByRole('button', { name: 'Continue with Google' });
    this.emailDivider = page.getByText('or continue with email');
    this.emailLabel = page.getByText('Email Address*');
    this.emailInput = page.getByRole('textbox', { name: 'Email Address' });
    this.passwordLabel = page.getByText('Password*');
    this.passwordInput = page.getByLabel(/^Password/).or(page.getByRole('textbox', { name: 'Password' }));
    this.rememberMeCheckbox = page.getByRole('checkbox', { name: /Remember me/i });
    this.rememberMeLabel = page.getByText('Remember me');
    this.forgotPasswordLink = page.getByRole('link', { name: /Forgot Password/i }).or(
      page.getByText('Forgot Password?')
    );
    this.signInButton = page.getByRole('button', { name: 'Sign In' });
    this.signUpLink = page.getByText('Sign up for free');
    this.termsOfServiceLink = page.getByText('Terms of Service');
    this.privacyPolicyLink = page.getByText('Privacy Policy');
    this.openReelsButton = page.getByRole('button', { name: 'Open reels' });
    this.legalDisclaimer = page.getByText('By signing in, you agree to');
    this.signUpPrompt = page.getByText(/Don't have an account\?/i);
    this.errorMessage = page.getByRole('alert').or(page.getByText(/invalid|incorrect|required|error|unable|failed|try again|network/i));
    this.snailIllustration = page.getByRole('img', { name: /snail|illustration/i });
  }

  async goto(loginUrl) {
    await this.page.goto(loginUrl);
    await this.heading.waitFor({ state: 'visible' });
  }

  async fillEmail(email) {
    await this.emailInput.fill(email);
  }

  async fillPassword(password) {
    await this.passwordInput.fill(password);
  }

  async pasteEmail(email) {
    await this.emailInput.click();
    await this.page.evaluate(async (value) => {
      await navigator.clipboard.writeText(value);
    }, email);
    await this.page.keyboard.press('ControlOrMeta+V');
  }

  async pastePassword(password) {
    await this.passwordInput.click();
    await this.page.evaluate(async (value) => {
      await navigator.clipboard.writeText(value);
    }, password);
    await this.page.keyboard.press('ControlOrMeta+V');
  }

  async checkRememberMe() {
    if (!(await this.isRememberMeChecked())) {
      await this.rememberMeLabel.click();
    }
  }

  async uncheckRememberMe() {
    if (await this.isRememberMeChecked()) {
      await this.rememberMeLabel.click();
    }
  }

  async toggleRememberMe() {
    await this.rememberMeLabel.click();
  }

  async isRememberMeChecked() {
    if (await this.rememberMeCheckbox.count()) {
      return this.rememberMeCheckbox.isChecked();
    }
    return this.rememberMeLabel.getAttribute('aria-checked').then((v) => v === 'true').catch(() => false);
  }

  async submitForm() {
    await this.signInButton.click();
  }

  /**
   * Fills credentials and submits. Optionally checks Remember me.
   * @param {{ email: string, password: string, rememberMe?: boolean }} credentials
   */
  async login({ email, password, rememberMe = false }) {
    await this.fillEmail(email);
    await this.fillPassword(password);
    if (rememberMe) {
      await this.checkRememberMe();
    } else {
      await this.uncheckRememberMe();
    }
    await this.submitForm();
  }

  async loginWithEnter({ email, password }) {
    await this.fillEmail(email);
    await this.fillPassword(password);
    await this.passwordInput.press('Enter');
  }

  async clickForgotPassword() {
    await this.forgotPasswordLink.click();
  }

  async clickSignUp() {
    await this.signUpLink.click();
  }

  async clickBackToHome() {
    await this.backToHomeButton.click();
  }

  async clickGoogleSignIn() {
    await this.googleSignInButton.click();
  }

  async clickLogo() {
    await this.logo.click();
  }

  async clickTermsOfService() {
    await this.termsOfServiceLink.click();
  }

  async clickPrivacyPolicy() {
    await this.privacyPolicyLink.click();
  }

  async clickOpenReels() {
    await this.openReelsButton.click();
  }

  async clickEmailLabel() {
    await this.emailLabel.click();
  }

  async clickPasswordLabel() {
    await this.passwordLabel.click();
  }

  async hoverSnail() {
    await this.snailIllustration.first().hover({ force: true });
  }

  getEmailValue() {
    return this.emailInput.inputValue();
  }

  getPasswordValue() {
    return this.passwordInput.inputValue();
  }

  getPasswordInputType() {
    return this.passwordInput.getAttribute('type');
  }

  getSignInButton() {
    return this.signInButton;
  }

  getEmailInput() {
    return this.emailInput;
  }

  getPasswordInput() {
    return this.passwordInput;
  }

  getHeading() {
    return this.heading;
  }

  getLogo() {
    return this.logo;
  }

  getGoogleSignInButton() {
    return this.googleSignInButton;
  }

  getEmailDivider() {
    return this.emailDivider;
  }

  getErrorMessage() {
    return this.errorMessage;
  }

  getRememberMeCheckbox() {
    return this.rememberMeCheckbox.count().then((c) =>
      c ? this.rememberMeCheckbox : this.rememberMeLabel
    );
  }

  getForgotPasswordLink() {
    return this.forgotPasswordLink;
  }

  getSignUpLink() {
    return this.signUpLink;
  }

  getOpenReelsButton() {
    return this.openReelsButton;
  }

  getSnailIllustration() {
    return this.snailIllustration.first();
  }

  getCurrentUrl() {
    return this.page.url();
  }

  async expectStillOnLogin(loginPath = '/login') {
    await this.page.waitForURL((url) => url.pathname.includes(loginPath.replace(/^\//, '')) || url.href.includes('login'));
  }
}
