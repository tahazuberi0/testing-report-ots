import { createRequire } from 'module';
import * as allure from 'allure-js-commons';
import { test, expect } from '../fixtures/allure-hooks.js';
import { SignUpPage } from '../pages/signUp_Page.page.js';

const require = createRequire(import.meta.url);
const testData = require('../data/signUp_Page.data.json');

const severityMap = { High: 'critical', Medium: 'normal', Low: 'minor' };

async function annotate({ id, title, priority, description }) {
  await allure.epic('OTS EdTech');
  await allure.feature('Sign Up Page');
  await allure.story(id);
  await allure.allureId(id);
  await allure.description(description);
  await allure.severity(severityMap[priority]);
  await allure.tag(priority);
  await allure.displayName(`${id}: ${title}`);
}

test.describe('OTS EdTech Sign Up Page', () => {
  test.setTimeout(90_000);

  /** @type {SignUpPage} */
  let signUpPage;

  test.beforeEach(async ({ page }) => {
    signUpPage = new SignUpPage(page);
  });

  test('TC_SIGNUP_001: Sign Up page loads with heading and form fields visible', async () => {
    const data = testData.TC_SIGNUP_001;
    await annotate({ id: 'TC_SIGNUP_001', title: 'Sign Up page loads with heading and form fields visible', priority: 'High', description: 'Sign Up page loads with heading and all three form fields visible.' });

    await allure.step('Open Sign Up page', async () => {
      await signUpPage.gotoSignUp(data.signUpUrl);
    });
    await allure.step('Verify heading and fields', async () => {
      await expect(signUpPage.pageHeading).toBeVisible();
      await expect(signUpPage.emailAddressInput).toBeVisible();
      await expect(signUpPage.createPasswordInput).toBeVisible();
      await expect(signUpPage.confirmPasswordInput).toBeVisible();
    });
  });

  test('TC_SIGNUP_002: OTS Logo and subheading are visible', async () => {
    const data = testData.TC_SIGNUP_002;
    await annotate({ id: 'TC_SIGNUP_002', title: 'OTS Logo and subheading are visible', priority: 'High', description: 'OTS Logo and subheading text visible.' });

    await allure.step('Open Sign Up page', async () => {
      await signUpPage.gotoSignUp(data.signUpUrl);
    });
    await allure.step('Verify logo and subheading', async () => {
      await expect(signUpPage.otsLogo).toBeVisible();
      await expect(signUpPage.subheadingText).toBeVisible();
    });
  });

  test('TC_SIGNUP_003: Email Address label and textbox are present', async () => {
    const data = testData.TC_SIGNUP_003;
    await annotate({ id: 'TC_SIGNUP_003', title: 'Email Address label and textbox are present', priority: 'High', description: 'Email Address* label and textbox visible.' });

    await allure.step('Open Sign Up page', async () => {
      await signUpPage.gotoSignUp(data.signUpUrl);
    });
    await allure.step('Verify email label and textbox', async () => {
      await expect(signUpPage.emailAddressLabel).toBeVisible();
      await expect(signUpPage.emailAddressInput).toBeVisible();
    });
  });

  test('TC_SIGNUP_004: Create Password and Confirm Password fields are present', async () => {
    const data = testData.TC_SIGNUP_004;
    await annotate({ id: 'TC_SIGNUP_004', title: 'Create Password and Confirm Password fields are present', priority: 'High', description: 'Both password labels and textboxes visible.' });

    await allure.step('Open Sign Up page', async () => {
      await signUpPage.gotoSignUp(data.signUpUrl);
    });
    await allure.step('Verify password fields', async () => {
      await expect(signUpPage.createPasswordLabel).toBeVisible();
      await expect(signUpPage.createPasswordInput).toBeVisible();
      await expect(signUpPage.confirmPasswordLabel).toBeVisible();
      await expect(signUpPage.confirmPasswordInput).toBeVisible();
    });
  });

  test('TC_SIGNUP_005: Email and password fields accept typed input', async () => {
    const data = testData.TC_SIGNUP_005;
    await annotate({ id: 'TC_SIGNUP_005', title: 'Email and password fields accept typed input', priority: 'High', description: 'All three fields accept typed input.' });

    await allure.step('Open Sign Up page', async () => {
      await signUpPage.gotoSignUp(data.signUpUrl);
    });
    await allure.step('Type into fields', async () => {
      await signUpPage.emailAddressInput.fill(data.testEmail);
      await expect(signUpPage.emailAddressInput).toHaveValue(data.testEmail);
      await signUpPage.createPasswordInput.fill(data.testPassword);
      await expect(signUpPage.createPasswordInput).toHaveValue(data.testPassword);
      await signUpPage.confirmPasswordInput.fill(data.testPassword);
      await expect(signUpPage.confirmPasswordInput).toHaveValue(data.testPassword);
    });
  });

  test('TC_SIGNUP_006: Terms checkbox text and links are visible', async () => {
    const data = testData.TC_SIGNUP_006;
    await annotate({ id: 'TC_SIGNUP_006', title: 'Terms checkbox text and links are visible', priority: 'High', description: 'Terms checkbox text, Terms link, Privacy Policy link visible.' });

    await allure.step('Open Sign Up page', async () => {
      await signUpPage.gotoSignUp(data.signUpUrl);
    });
    await allure.step('Verify terms section', async () => {
      await expect(signUpPage.termsCheckboxText).toBeVisible();
      await expect(signUpPage.termsLink).toBeVisible();
      await expect(signUpPage.privacyPolicyLink).toBeVisible();
    });
  });

  test('TC_SIGNUP_007: Terms and Privacy Policy links are clickable', async ({ page }) => {
    const data = testData.TC_SIGNUP_007;
    await annotate({ id: 'TC_SIGNUP_007', title: 'Terms and Privacy Policy links are clickable', priority: 'Medium', description: 'Terms and Privacy Policy links navigate without crash.' });

    await allure.step('Open Sign Up page', async () => {
      await signUpPage.gotoSignUp(data.signUpUrl);
    });
    await allure.step('Click Terms link', async () => {
      await signUpPage.termsLink.click();
      await page.waitForTimeout(2000);
      await expect(page.locator('body')).toBeVisible();
    });
    await allure.step('Return and click Privacy Policy', async () => {
      await page.goto(data.signUpUrl, { waitUntil: 'domcontentloaded' });
      await signUpPage.pageHeading.waitFor({ state: 'visible', timeout: 15000 });
      await signUpPage.privacyPolicyLink.click();
      await page.waitForTimeout(2000);
      await expect(page.locator('body')).toBeVisible();
    });
  });

  test('TC_SIGNUP_008: Sign in link navigates to login page', async ({ page }) => {
    const data = testData.TC_SIGNUP_008;
    await annotate({ id: 'TC_SIGNUP_008', title: 'Sign in link navigates to login page', priority: 'High', description: 'Sign in link redirects to /login.' });

    await allure.step('Open Sign Up page', async () => {
      await signUpPage.gotoSignUp(data.signUpUrl);
    });
    await allure.step('Click Sign in', async () => {
      await signUpPage.signInLink.click();
    });
    await allure.step('Verify login URL', async () => {
      await expect(page).toHaveURL(new RegExp(data.expectedLoginUrlPattern, 'i'));
    });
  });

  test('TC_SIGNUP_009: "or with email" divider is visible', async () => {
    const data = testData.TC_SIGNUP_009;
    await annotate({ id: 'TC_SIGNUP_009', title: '"or with email" divider is visible', priority: 'Low', description: 'or with email divider visible.' });

    await allure.step('Open Sign Up page', async () => {
      await signUpPage.gotoSignUp(data.signUpUrl);
    });
    await allure.step('Verify divider', async () => {
      await expect(signUpPage.orWithEmailDivider).toBeVisible();
    });
  });

  test('TC_SIGNUP_010: Soft refresh keeps Sign Up chrome visible', async () => {
    const data = testData.TC_SIGNUP_010;
    await annotate({ id: 'TC_SIGNUP_010', title: 'Soft refresh keeps Sign Up chrome visible', priority: 'Medium', description: 'Refreshing keeps heading visible.' });

    await allure.step('Open Sign Up page', async () => {
      await signUpPage.gotoSignUp(data.signUpUrl);
      await expect(signUpPage.pageHeading).toBeVisible();
    });
    await allure.step('Refresh page', async () => {
      await signUpPage.page.reload({ waitUntil: 'domcontentloaded' });
    });
    await allure.step('Re-verify heading', async () => {
      await expect(signUpPage.pageHeading).toBeVisible();
    });
  });

  test('TC_SIGNUP_011: Password mismatch edge case', async () => {
    const data = testData.TC_SIGNUP_011;
    await annotate({ id: 'TC_SIGNUP_011', title: 'Password mismatch edge case', priority: 'Medium', description: 'Different Create/Confirm passwords; observe behavior.' });

    await allure.step('Open Sign Up page', async () => {
      await signUpPage.gotoSignUp(data.signUpUrl);
    });
    await allure.step('Fill mismatched passwords', async () => {
      await signUpPage.emailAddressInput.fill(data.testEmail);
      await signUpPage.createPasswordInput.fill(data.testPassword);
      await signUpPage.confirmPasswordInput.fill(data.mismatchPassword);
    });
    await allure.step('Verify page stable', async () => {
      await expect(signUpPage.pageHeading).toBeVisible();
    });
  });

  test('TC_SIGNUP_012: Empty form submission edge case', async () => {
    const data = testData.TC_SIGNUP_012;
    await annotate({ id: 'TC_SIGNUP_012', title: 'Empty form submission edge case', priority: 'Medium', description: 'All fields empty; observe behavior.' });

    await allure.step('Open Sign Up page', async () => {
      await signUpPage.gotoSignUp(data.signUpUrl);
    });
    await allure.step('Verify fields are empty', async () => {
      await expect(signUpPage.emailAddressInput).toHaveValue('');
      await expect(signUpPage.createPasswordInput).toHaveValue('');
      await expect(signUpPage.confirmPasswordInput).toHaveValue('');
    });
    await allure.step('Verify page stable', async () => {
      await expect(signUpPage.pageHeading).toBeVisible();
    });
  });

  test('TC_SIGNUP_013: Create Account button is visible on page load', async () => {
    const data = testData.TC_SIGNUP_013;
    await annotate({ id: 'TC_SIGNUP_013', title: 'Create Account button is visible on page load', priority: 'High', description: 'Create Account button visible.' });

    await allure.step('Open Sign Up page', async () => {
      await signUpPage.gotoSignUp(data.signUpUrl);
    });
    await allure.step('Verify Create Account button', async () => {
      await expect(signUpPage.createAccountButton).toBeVisible();
    });
  });

  test('TC_SIGNUP_014: Continue with Google button is visible', async () => {
    const data = testData.TC_SIGNUP_014;
    await annotate({ id: 'TC_SIGNUP_014', title: 'Continue with Google button is visible', priority: 'High', description: 'Continue with Google button visible.' });

    await allure.step('Open Sign Up page', async () => {
      await signUpPage.gotoSignUp(data.signUpUrl);
    });
    await allure.step('Verify Continue with Google button', async () => {
      await expect(signUpPage.continueWithGoogleButton).toBeVisible();
    });
  });

  test('TC_SIGNUP_015: Back to Home link is visible and clickable', async ({ page }) => {
    const data = testData.TC_SIGNUP_015;
    await annotate({ id: 'TC_SIGNUP_015', title: 'Back to Home link is visible and clickable', priority: 'Medium', description: 'Back to Home link navigates to home.' });

    await allure.step('Open Sign Up page', async () => {
      await signUpPage.gotoSignUp(data.signUpUrl);
    });
    await allure.step('Verify and click Back to Home', async () => {
      await expect(signUpPage.backToHomeLink).toBeVisible();
      await signUpPage.backToHomeLink.click();
    });
    await allure.step('Verify navigation to home', async () => {
      await expect(page).toHaveURL(new RegExp(data.expectedHomeUrlPattern, 'i'));
    });
  });

  test('TC_SIGNUP_016: Terms agreement checkbox can be toggled', async () => {
    const data = testData.TC_SIGNUP_016;
    await annotate({ id: 'TC_SIGNUP_016', title: 'Terms agreement checkbox can be toggled', priority: 'Medium', description: 'Terms checkbox toggles.' });

    await allure.step('Open Sign Up page', async () => {
      await signUpPage.gotoSignUp(data.signUpUrl);
    });
    await allure.step('Toggle checkbox', async () => {
      await expect(signUpPage.termsCheckbox).not.toBeChecked();
      await signUpPage.termsCheckbox.check();
      await expect(signUpPage.termsCheckbox).toBeChecked();
    });
  });
});
