/**
 * Page Object for Sign Up page (`/signup`).
 * Locator priority: role/label/text > data-testid > stable CSS > nth-child (commented if used).
 *
 * LIVE notes:
 * - Create Account button and Continue with Google button have NO selectors.
 * - Password toggle icons use brittle CSS path selectors.
 * - Checkbox uses brittle span.nth(5).
 */
export class SignUpPage {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    this.page = page;

    // --- Header & Branding ---
    // LIVE: matches 2 elements — use .first() for the primary header logo
    this.otsLogo = page.getByRole('img', { name: 'OTS Logo' }).first();
    this.pageHeading = page.getByRole('heading', { name: 'Create your free account' });
    this.subheadingText = page.getByText("Start learning with Pakistan'");
    this.orWithEmailDivider = page.getByText('or with email');

    // --- Form Fields ---
    this.emailAddressLabel = page.getByText('Email Address*');
    this.emailAddressInput = page.getByRole('textbox', { name: 'Email Address' });
    this.createPasswordLabel = page.getByText('Create Password*');
    this.createPasswordInput = page.getByRole('textbox', { name: 'Create Password' });
    this.confirmPasswordLabel = page.getByText('Confirm Password*');
    this.confirmPasswordInput = page.getByRole('textbox', { name: 'Confirm Password' });

    // FALLBACK CSS: brittle password toggle selectors
    this.createPasswordToggle = page.locator('.chakra-icon.css-2pij1h > path').first();
    // FALLBACK CSS: brittle deep CSS path
    this.confirmPasswordToggle = page.locator(
      'div:nth-child(3) > .chakra-form-control > .chakra-input__group > .chakra-input__right-element > .chakra-icon'
    );

    // --- Terms, Policy & Navigation ---
    this.termsCheckboxText = page.getByText('I agree to the Terms and');
    this.termsLink = page.getByText('Terms');
    this.privacyPolicyLink = page.getByText('Privacy Policy');
    this.accountPromptText = page.getByText('Already have an account? Sign');
    this.signInLink = page.getByText('Sign in');
    // LIVE: concatenated text 'Back to HomeCreate your free' does not match — selector broken
    this.formContainerHeader = page.getByText('Back to HomeCreate your free');

    // FALLBACK nth(5): brittle checkbox span
    this.checkboxSpan = page.locator('span').nth(5);
    // FALLBACK CSS: brittle container wrapper
    this.containerWrapper = page.locator('.css-11aznge');

    // --- Newly resolved selectors ---
    this.createAccountButton = page.getByRole('button', { name: /create account/i });
    this.continueWithGoogleButton = page.getByRole('button', { name: /continue with google/i });
    this.backToHomeLink = page.getByText(/^back to home$/i);
    this.termsCheckboxInput = page.locator('input[type="checkbox"]');
    this.termsCheckbox = page.getByRole('checkbox');
  }

  async gotoSignUp(signUpUrl = 'https://edu.offtheschool.io/signup') {
    await this.page.goto(signUpUrl, { waitUntil: 'domcontentloaded' });
    await this.pageHeading.waitFor({ state: 'visible', timeout: 20000 });
  }
}
