import { createRequire } from 'module';
import * as allure from 'allure-js-commons';
import { test, expect } from '../fixtures/allure-hooks.js';
import { ChangePasswordPage } from '../pages/changePassword_Page.page.js';

const require = createRequire(import.meta.url);
const testData = require('../data/changePassword.data.json');

const severityMap = { High: 'critical', Medium: 'normal', Low: 'minor' };

async function annotate({ id, title, priority, description }) {
  await allure.epic('OTS EdTech Dashboard');
  await allure.feature('Change Password');
  await allure.story(id);
  await allure.allureId(id);
  await allure.description(description);
  await allure.severity(severityMap[priority]);
  await allure.tag(priority);
  await allure.displayName(`${id}: ${title}`);
}

test.describe('OTS EdTech Change Password', () => {
  test.setTimeout(90_000);

  /** @type {ChangePasswordPage} */
  let chgPwdPage;

  test.beforeEach(async ({ page }) => {
    chgPwdPage = new ChangePasswordPage(page);
  });

  test('TC_CHGPWD_001: Change Password page loads with heading and email field visible', async () => {
    const data = testData.TC_CHGPWD_001;
    await annotate({ id: 'TC_CHGPWD_001', title: 'Change Password page loads with heading and email field visible', priority: 'High', description: 'Navigate via Profile Settings > Change Password; heading and email input visible.' });

    await allure.step('Sign in and navigate to Change Password', async () => {
      await chgPwdPage.ensureAuthenticatedChangePassword(data.validStudentSession, data.loginUrl, data.profileUrl);
    });
    await allure.step('Verify heading and email field', async () => {
      await expect(chgPwdPage.changePasswordHeading).toBeVisible();
      await expect(chgPwdPage.emailAddressInput).toBeVisible();
    });
  });

  test('TC_CHGPWD_002: Email Address label and textbox are present', async () => {
    const data = testData.TC_CHGPWD_002;
    await annotate({ id: 'TC_CHGPWD_002', title: 'Email Address label and textbox are present', priority: 'High', description: 'Email Address* label and textbox both visible.' });

    await allure.step('Sign in and navigate to Change Password', async () => {
      await chgPwdPage.ensureAuthenticatedChangePassword(data.validStudentSession, data.loginUrl, data.profileUrl);
    });
    await allure.step('Verify label and textbox', async () => {
      await expect(chgPwdPage.emailAddressLabel).toBeVisible();
      await expect(chgPwdPage.emailAddressInput).toBeVisible();
    });
  });

  test('TC_CHGPWD_003: Send OTP button is visible and clickable with valid email', async () => {
    const data = testData.TC_CHGPWD_003;
    await annotate({ id: 'TC_CHGPWD_003', title: 'Send OTP button is visible and clickable with valid email', priority: 'High', description: 'Send OTP accepts click with valid email; page transitions without crash.' });

    await allure.step('Sign in and navigate to Change Password', async () => {
      await chgPwdPage.ensureAuthenticatedChangePassword(data.validStudentSession, data.loginUrl, data.profileUrl);
    });
    await allure.step('Fill email and click Send OTP', async () => {
      await chgPwdPage.emailAddressInput.fill(data.validEmail);
      await expect(chgPwdPage.sendOtpButton).toBeVisible();
      await chgPwdPage.sendOtpButton.click();
      await chgPwdPage.page.waitForTimeout(3000);
    });
    await allure.step('Verify no crash', async () => {
      await expect(chgPwdPage.page.locator('body')).toBeVisible();
    });
  });

  test('TC_CHGPWD_004: Clicking Send OTP transitions to Verification OTP screen', async () => {
    const data = testData.TC_CHGPWD_004;
    await annotate({ id: 'TC_CHGPWD_004', title: 'Clicking Send OTP transitions to Verification OTP screen', priority: 'High', description: 'After Send OTP, Verification OTP heading appears.' });

    await allure.step('Sign in and navigate to Change Password', async () => {
      await chgPwdPage.ensureAuthenticatedChangePassword(data.validStudentSession, data.loginUrl, data.profileUrl);
    });
    await allure.step('Fill email and click Send OTP', async () => {
      await chgPwdPage.emailAddressInput.fill(data.validEmail);
      await chgPwdPage.sendOtpButton.click();
    });
    await allure.step('Verify Verification OTP heading', async () => {
      await expect(chgPwdPage.verificationOtpHeading).toBeVisible({ timeout: 15000 });
    });
  });

  test('TC_CHGPWD_005: Verification OTP heading and subtext are visible after Send OTP', async () => {
    const data = testData.TC_CHGPWD_005;
    await annotate({ id: 'TC_CHGPWD_005', title: 'Verification OTP heading and subtext are visible after Send OTP', priority: 'High', description: 'Verification OTP heading and We have sent subtext visible.' });

    await allure.step('Sign in and navigate to Change Password', async () => {
      await chgPwdPage.ensureAuthenticatedChangePassword(data.validStudentSession, data.loginUrl, data.profileUrl);
    });
    await allure.step('Fill email and click Send OTP', async () => {
      await chgPwdPage.emailAddressInput.fill(data.validEmail);
      await chgPwdPage.sendOtpButton.click();
    });
    await allure.step('Verify OTP screen chrome', async () => {
      await expect(chgPwdPage.verificationOtpHeading).toBeVisible({ timeout: 15000 });
      await expect(chgPwdPage.verificationSubtext).toBeVisible();
    });
  });

  test('TC_CHGPWD_006: Back to Profile button navigates away from Change Password', async ({ page }) => {
    const data = testData.TC_CHGPWD_006;
    await annotate({ id: 'TC_CHGPWD_006', title: 'Back to Profile button navigates away from Change Password', priority: 'High', description: 'Back to Profile returns to profile dashboard without credential changes.' });

    await allure.step('Sign in and navigate to Change Password', async () => {
      await chgPwdPage.ensureAuthenticatedChangePassword(data.validStudentSession, data.loginUrl, data.profileUrl);
    });
    await allure.step('Click Back to Profile', async () => {
      await chgPwdPage.backToProfileButton.click();
    });
    await allure.step('Verify returned to profile', async () => {
      await expect(chgPwdPage.myProfileHeading).toBeVisible({ timeout: 10000 });
    });
  });

  test('TC_CHGPWD_007: Send OTP with empty email field (edge)', async () => {
    const data = testData.TC_CHGPWD_007;
    await annotate({ id: 'TC_CHGPWD_007', title: 'Send OTP with empty email field', priority: 'Medium', description: 'Empty email + Send OTP does not transition to Verification OTP.' });

    await allure.step('Sign in and navigate to Change Password', async () => {
      await chgPwdPage.ensureAuthenticatedChangePassword(data.validStudentSession, data.loginUrl, data.profileUrl);
    });
    await allure.step('Clear email and click Send OTP', async () => {
      await chgPwdPage.emailAddressInput.clear();
      await chgPwdPage.sendOtpButton.click();
      await chgPwdPage.page.waitForTimeout(2000);
    });
    await allure.step('Verify still on Change Password', async () => {
      await expect(chgPwdPage.changePasswordHeading).toBeVisible();
      await expect(chgPwdPage.verificationOtpHeading).toHaveCount(0);
    });
  });

  test('TC_CHGPWD_008: Send OTP with invalid email format (edge)', async () => {
    const data = testData.TC_CHGPWD_008;
    await annotate({ id: 'TC_CHGPWD_008', title: 'Send OTP with invalid email format', priority: 'Medium', description: 'Invalid email + Send OTP does not transition to Verification OTP.' });

    await allure.step('Sign in and navigate to Change Password', async () => {
      await chgPwdPage.ensureAuthenticatedChangePassword(data.validStudentSession, data.loginUrl, data.profileUrl);
    });
    await allure.step('Fill invalid email and click Send OTP', async () => {
      await chgPwdPage.emailAddressInput.fill(data.invalidEmail);
      await chgPwdPage.sendOtpButton.click();
      await chgPwdPage.page.waitForTimeout(2000);
    });
    await allure.step('Verify still on Change Password', async () => {
      await expect(chgPwdPage.changePasswordHeading).toBeVisible();
      await expect(chgPwdPage.verificationOtpHeading).toHaveCount(0);
    });
  });

  test('TC_CHGPWD_009: Double-click Send OTP does not break the flow', async () => {
    const data = testData.TC_CHGPWD_009;
    await annotate({ id: 'TC_CHGPWD_009', title: 'Double-click Send OTP does not break the flow', priority: 'Medium', description: 'Double-clicking Send OTP reaches a single stable state.' });

    await allure.step('Sign in and navigate to Change Password', async () => {
      await chgPwdPage.ensureAuthenticatedChangePassword(data.validStudentSession, data.loginUrl, data.profileUrl);
    });
    await allure.step('Fill email and double-click Send OTP', async () => {
      await chgPwdPage.emailAddressInput.fill(data.validEmail);
      await chgPwdPage.sendOtpButton.dblclick();
      await chgPwdPage.page.waitForTimeout(3000);
    });
    await allure.step('Verify stable state', async () => {
      await expect(chgPwdPage.page.locator('body')).toBeVisible();
      await expect(chgPwdPage.page.getByText(/stack|exception|syntax error/i)).toHaveCount(0);
    });
  });
});
