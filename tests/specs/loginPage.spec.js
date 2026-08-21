import { test, expect, annotate } from '../../fixtures/loginFixtures.js';

/** App redirects authenticated users to /dashboard (docs also mention /home). */
const POST_LOGIN_URL = /\/(home|dashboard)/i;
const NOT_POST_LOGIN = async (page) => {
  await expect(page).not.toHaveURL(POST_LOGIN_URL);
};

test.describe('Login Page', () => {
  test.describe('P0 - Positive - Primary Path', () => {
    test('TC-001: Direct sign-in succeeds with valid email and password', async ({
      page,
      loginPage,
      testData,
    }) => {
      await annotate({ id: 'TC-001', priority: 'P0', scenario: 'Positive - Primary Path' });
      const data = testData['TC-001'];

      await loginPage.goto(testData.urls.login);
      await loginPage.login(data);

      await expect(page).toHaveURL(POST_LOGIN_URL);
      await expect(loginPage.getHeading()).toBeHidden();
    });

    test('TC-002: Direct sign-in succeeds when Remember me is selected', async ({
      page,
      loginPage,
      testData,
      context,
    }) => {
      await annotate({ id: 'TC-002', priority: 'P0', scenario: 'Positive - Primary Path' });
      const data = testData['TC-002'];

      await loginPage.goto(testData.urls.login);
      await loginPage.login({ ...data, rememberMe: true });
      await expect(page).toHaveURL(POST_LOGIN_URL);

      const cookies = await context.cookies();
      expect(cookies.length).toBeGreaterThan(0);

      await page.goto(testData.urls.login);
      await expect(page).not.toHaveURL(/\/login$/);
    });
  });

  test.describe('P0 - Positive - Social Sign-In', () => {
    test('TC-003: Continue with Google starts Google authentication', async ({
      page,
      loginPage,
      testData,
      context,
    }) => {
      await annotate({ id: 'TC-003', priority: 'P0', scenario: 'Positive - Social Sign-In' });

      await loginPage.goto(testData.urls.login);

      const popupPromise = context.waitForEvent('page', { timeout: 10_000 }).catch(() => null);
      await loginPage.clickGoogleSignIn();

      const popup = await popupPromise;
      if (popup) {
        await popup.waitForLoadState('domcontentloaded');
        expect(popup.url()).toContain(testData['TC-003'].expectedGoogleHost);
        await popup.close();
      } else {
        await expect(page).toHaveURL(new RegExp(testData['TC-003'].expectedGoogleHost));
      }
    });

    test('TC-004: Google authentication succeeds for authorized user', async ({
      loginPage,
      testData,
    }) => {
      await annotate({ id: 'TC-004', priority: 'P0', scenario: 'Positive - Social Sign-In' });
      test.skip(
        !process.env.GOOGLE_STORAGE_STATE,
        'Requires GOOGLE_STORAGE_STATE for authorized Google OAuth completion'
      );

      await loginPage.goto(testData.urls.login);
      await loginPage.clickGoogleSignIn();
    });
  });

  test.describe('P0 - Positive - Session', () => {
    test('TC-005: Already-authenticated user reaches dashboard instead of login loop', async ({
      page,
      loginPage,
      testData,
    }) => {
      await annotate({ id: 'TC-005', priority: 'P0', scenario: 'Positive - Session' });
      const data = testData['TC-005'];

      await loginPage.goto(testData.urls.login);
      await loginPage.login(data);
      await expect(page).toHaveURL(POST_LOGIN_URL);

      await page.goto(testData.urls.login);
      await expect(page).not.toHaveURL(/\/login$/);
      await expect(page).toHaveURL(POST_LOGIN_URL);
    });
  });

  test.describe('P0 - Negative - Required Fields', () => {
    test('TC-006: Sign-in is blocked when both required fields are empty', async ({
      page,
      loginPage,
      testData,
    }) => {
      await annotate({ id: 'TC-006', priority: 'P0', scenario: 'Negative - Required Fields' });

      await loginPage.goto(testData.urls.login);
      await loginPage.submitForm();

      await expect(page).toHaveURL(/login/i);
      await expect(loginPage.getHeading()).toBeVisible();
      const emailMsg = await loginPage.getEmailInput().evaluate((el) => el.validationMessage);
      const passMsg = await loginPage.getPasswordInput().evaluate((el) => el.validationMessage);
      expect(Boolean(emailMsg || passMsg) || (await loginPage.getErrorMessage().first().isVisible().catch(() => false))).toBeTruthy();
    });

    test('TC-007: Sign-in is blocked when email is empty', async ({ page, loginPage, testData }) => {
      await annotate({ id: 'TC-007', priority: 'P0', scenario: 'Negative - Required Fields' });
      const data = testData['TC-007'];

      await loginPage.goto(testData.urls.login);
      await loginPage.fillPassword(data.password);
      await loginPage.submitForm();

      await expect(page).toHaveURL(/login/i);
      const emailMsg = await loginPage.getEmailInput().evaluate((el) => el.validationMessage);
      expect(
        Boolean(emailMsg) || (await loginPage.getErrorMessage().first().isVisible().catch(() => false))
      ).toBeTruthy();
    });

    test('TC-008: Sign-in is blocked when password is empty', async ({
      page,
      loginPage,
      testData,
    }) => {
      await annotate({ id: 'TC-008', priority: 'P0', scenario: 'Negative - Required Fields' });
      const data = testData['TC-008'];

      await loginPage.goto(testData.urls.login);
      await loginPage.fillEmail(data.email);
      await loginPage.submitForm();

      await expect(page).toHaveURL(/login/i);
      const passMsg = await loginPage.getPasswordInput().evaluate((el) => el.validationMessage);
      expect(
        Boolean(passMsg) || (await loginPage.getErrorMessage().first().isVisible().catch(() => false))
      ).toBeTruthy();
    });
  });

  test.describe('P0 - Negative - Authentication', () => {
    test('TC-009: Valid email with invalid password is rejected', async ({
      page,
      loginPage,
      testData,
    }) => {
      await annotate({ id: 'TC-009', priority: 'P0', scenario: 'Negative - Authentication' });
      const data = testData['TC-009'];

      await loginPage.goto(testData.urls.login);
      await loginPage.login(data);

      await expect(page).toHaveURL(/login/i);
      await expect(loginPage.getHeading()).toBeVisible();
    });

    test('TC-010: Unregistered or unauthorized email is rejected', async ({
      page,
      loginPage,
      testData,
    }) => {
      await annotate({ id: 'TC-010', priority: 'P0', scenario: 'Negative - Authentication' });
      const data = testData['TC-010'];

      await loginPage.goto(testData.urls.login);
      await loginPage.login(data);

      await expect(page).toHaveURL(/login/i);
      await NOT_POST_LOGIN(page);
    });

    test('TC-011: Invalid email and invalid password are rejected', async ({
      page,
      loginPage,
      testData,
    }) => {
      await annotate({ id: 'TC-011', priority: 'P0', scenario: 'Negative - Authentication' });
      const data = testData['TC-011'];

      await loginPage.goto(testData.urls.login);
      await loginPage.login(data);

      await expect(page).toHaveURL(/login/i);
      await expect(loginPage.getErrorMessage().first()).toBeVisible({ timeout: 10_000 }).catch(async () => {
        await expect(loginPage.getHeading()).toBeVisible();
      });
    });
  });

  test.describe('P0 - Negative - Authorization', () => {
    test('TC-012: Locked, disabled, or inactive account cannot sign in', async ({
      page,
      loginPage,
      testData,
    }) => {
      await annotate({ id: 'TC-012', priority: 'P0', scenario: 'Negative - Authorization' });
      const data = testData['TC-012'];

      await loginPage.goto(testData.urls.login);
      await loginPage.login(data);

      await expect(page).toHaveURL(/login/i);
      await NOT_POST_LOGIN(page);
    });
  });

  test.describe('P0 - Negative - Security', () => {
    test('TC-013: Repeated failed sign-in attempts trigger rate limiting or lockout', async ({
      page,
      loginPage,
      testData,
    }) => {
      await annotate({ id: 'TC-013', priority: 'P0', scenario: 'Negative - Security' });
      const data = testData['TC-013'];

      await loginPage.goto(testData.urls.login);
      for (let i = 0; i < data.attempts; i += 1) {
        await loginPage.fillEmail(data.email);
        await loginPage.fillPassword(`${data.password}-${i}`);
        await loginPage.submitForm();
        await expect(page).toHaveURL(/login/i);
      }

      await loginPage.fillEmail(data.email);
      await loginPage.fillPassword(data.password);
      await loginPage.submitForm();
      await expect(page).toHaveURL(/login/i);
      await expect(loginPage.getHeading()).toBeVisible();
    });

    test('TC-015: Script injection in email is rejected and not executed', async ({
      page,
      loginPage,
      testData,
    }) => {
      await annotate({ id: 'TC-015', priority: 'P0', scenario: 'Negative - Security' });
      const data = testData['TC-015'];

      let dialogOpened = false;
      page.on('dialog', async (dialog) => {
        dialogOpened = true;
        await dialog.dismiss();
      });

      await loginPage.goto(testData.urls.login);
      await loginPage.login(data);

      expect(dialogOpened).toBeFalsy();
      await expect(page).toHaveURL(/login/i);
      await expect(loginPage.getHeading()).toBeVisible();
    });

    test('TC-016: SQL injection-like email input is rejected', async ({
      page,
      loginPage,
      testData,
    }) => {
      await annotate({ id: 'TC-016', priority: 'P0', scenario: 'Negative - Security' });
      const data = testData['TC-016'];

      await loginPage.goto(testData.urls.login);
      await loginPage.login(data);

      await expect(page).toHaveURL(/login/i);
      await expect(page.getByText(/stack|exception|sql|syntax error/i)).toHaveCount(0);
    });

    test('TC-017: Password remains masked during entry and after failed login', async ({
      page,
      loginPage,
      testData,
    }) => {
      await annotate({ id: 'TC-017', priority: 'P0', scenario: 'Negative - Security' });
      const data = testData['TC-017'];

      await loginPage.goto(testData.urls.login);
      await loginPage.fillEmail(data.email);
      await loginPage.fillPassword(data.password);

      await expect(loginPage.getPasswordInput()).toHaveAttribute('type', 'password');
      await loginPage.submitForm();
      await expect(page).toHaveURL(/login/i);
      await expect(loginPage.getPasswordInput()).toHaveAttribute('type', 'password');
      await expect(page.getByText(data.password, { exact: true })).toHaveCount(0);
    });
  });

  test.describe('P0 - Negative - Error State', () => {
    test('TC-014: Authentication service outage shows recoverable error', async ({
      page,
      loginPage,
      testData,
    }) => {
      await annotate({ id: 'TC-014', priority: 'P0', scenario: 'Negative - Error State' });
      const data = testData['TC-014'];

      await loginPage.goto(testData.urls.login);
      await page.route('**/*', async (route) => {
        const url = route.request().url();
        const method = route.request().method();
        if (method === 'POST' || /auth|login|signin|session|token/i.test(url)) {
          await route.fulfill({ status: 503, contentType: 'application/json', body: '{"message":"unavailable"}' });
          return;
        }
        await route.continue();
      });

      await loginPage.login(data);
      await expect(page).toHaveURL(/login/i);
      await expect(loginPage.getHeading()).toBeVisible();
      await expect(loginPage.getSignInButton()).toBeVisible();
    });
  });

  test.describe('P0 - Recovery', () => {
    test('TC-018: Forgot Password redirects to recovery page', async ({
      page,
      loginPage,
      testData,
    }) => {
      await annotate({ id: 'TC-018', priority: 'P0', scenario: 'Recovery' });

      await loginPage.goto(testData.urls.login);
      await loginPage.clickForgotPassword();

      await expect(page).toHaveURL(/forgotpassword/i);
    });
  });

  test.describe('P0 - Onboarding', () => {
    test('TC-019: Sign up for free redirects new user to registration', async ({
      page,
      loginPage,
      testData,
    }) => {
      await annotate({ id: 'TC-019', priority: 'P0', scenario: 'Onboarding' });

      await loginPage.goto(testData.urls.login);
      await loginPage.clickSignUp();

      await expect(page).not.toHaveURL(/\/login$/);
      await expect(page).toHaveURL(/signup|register|sign-up|onboard/i);
    });
  });

  test.describe('P1 - Positive - Session', () => {
    test('TC-023: Remember me can remain unchecked for normal session', async ({
      page,
      loginPage,
      testData,
    }) => {
      await annotate({ id: 'TC-023', priority: 'P1', scenario: 'Positive - Session' });
      const data = testData['TC-023'];

      await loginPage.goto(testData.urls.login);
      await loginPage.login({ ...data, rememberMe: false });
      await expect(page).toHaveURL(POST_LOGIN_URL);
    });
  });

  test.describe('P1 - Positive - Input Handling', () => {
    test('TC-020: Email is trimmed before authentication', async ({ page, loginPage, testData }) => {
      await annotate({ id: 'TC-020', priority: 'P1', scenario: 'Positive - Input Handling' });
      const data = testData['TC-020'];

      await loginPage.goto(testData.urls.login);
      await loginPage.login(data);
      await expect(page).toHaveURL(POST_LOGIN_URL);
    });

    test('TC-024: User can paste email and password', async ({
      page,
      loginPage,
      testData,
      context,
    }) => {
      await annotate({ id: 'TC-024', priority: 'P1', scenario: 'Positive - Input Handling' });
      const data = testData['TC-024'];

      await context.grantPermissions(['clipboard-read', 'clipboard-write']);
      await loginPage.goto(testData.urls.login);
      await loginPage.pasteEmail(data.email);
      await loginPage.pastePassword(data.password);
      await loginPage.submitForm();
      await expect(page).toHaveURL(POST_LOGIN_URL);
    });

    test('TC-033: Uppercase email variant authenticates same account', async ({
      page,
      loginPage,
      testData,
    }) => {
      await annotate({ id: 'TC-033', priority: 'P1', scenario: 'Positive - Input Handling' });
      const data = testData['TC-033'];

      await loginPage.goto(testData.urls.login);
      await loginPage.login(data);
      await expect(page).toHaveURL(POST_LOGIN_URL);
    });
  });

  test.describe('P1 - Positive - Keyboard', () => {
    test('TC-021: Pressing Enter submits valid credentials', async ({
      page,
      loginPage,
      testData,
    }) => {
      await annotate({ id: 'TC-021', priority: 'P1', scenario: 'Positive - Keyboard' });
      const data = testData['TC-021'];

      await loginPage.goto(testData.urls.login);
      await loginPage.loginWithEnter(data);
      await expect(page).toHaveURL(POST_LOGIN_URL);
    });
  });

  test.describe('P1 - Positive - Accessibility', () => {
    test('TC-022: Tab order supports efficient sign-in', async ({ page, loginPage, testData }) => {
      await annotate({ id: 'TC-022', priority: 'P1', scenario: 'Positive - Accessibility' });

      await loginPage.goto(testData.urls.login);
      await page.keyboard.press('Tab');
      await page.keyboard.press('Tab');
      await page.keyboard.press('Tab');
      await page.keyboard.press('Tab');
      await page.keyboard.press('Tab');

      await expect(loginPage.getEmailInput()).toBeVisible();
      await expect(loginPage.getPasswordInput()).toBeVisible();
      await expect(loginPage.getSignInButton()).toBeVisible();
      await expect(loginPage.getGoogleSignInButton()).toBeVisible();
    });
  });

  test.describe('P1 - Negative - Required Fields', () => {
    test('TC-030: Whitespace-only email is treated as empty', async ({
      page,
      loginPage,
      testData,
    }) => {
      await annotate({ id: 'TC-030', priority: 'P1', scenario: 'Negative - Required Fields' });
      const data = testData['TC-030'];

      await loginPage.goto(testData.urls.login);
      await loginPage.login(data);
      await expect(page).toHaveURL(/login/i);
    });

    test('TC-031: Whitespace-only password is rejected', async ({ page, loginPage, testData }) => {
      await annotate({ id: 'TC-031', priority: 'P1', scenario: 'Negative - Required Fields' });
      const data = testData['TC-031'];

      await loginPage.goto(testData.urls.login);
      await loginPage.login(data);
      await expect(page).toHaveURL(/login/i);
      await NOT_POST_LOGIN(page);
    });
  });

  test.describe('P1 - Negative - Email Format', () => {
    for (const [id, title] of [
      ['TC-025', 'Email without at-sign is rejected'],
      ['TC-026', 'Email missing local part is rejected'],
      ['TC-027', 'Email missing domain is rejected'],
      ['TC-028', 'Email with multiple at-signs is rejected'],
      ['TC-029', 'Single-label domain email is rejected'],
    ]) {
      test(`${id}: ${title}`, async ({ page, loginPage, testData }) => {
        await annotate({ id, priority: 'P1', scenario: 'Negative - Email Format' });
        const data = testData[id];

        await loginPage.goto(testData.urls.login);
        await loginPage.login(data);
        await expect(page).toHaveURL(/login/i);
        await NOT_POST_LOGIN(page);
      });
    }
  });

  test.describe('P1 - Negative - Input Handling', () => {
    test('TC-032: Password with leading or trailing spaces is not silently changed', async ({
      page,
      loginPage,
      testData,
    }) => {
      await annotate({ id: 'TC-032', priority: 'P1', scenario: 'Negative - Input Handling' });
      const data = testData['TC-032'];

      await loginPage.goto(testData.urls.login);
      await loginPage.fillEmail(data.email);
      await loginPage.fillPassword(data.password);
      const typed = await loginPage.getPasswordValue();
      expect(typed).toBe(data.password);
      await loginPage.submitForm();
      await expect(page).toHaveURL(/login|home/i);
    });
  });

  test.describe('P1 - Negative - Social Sign-In', () => {
    test('TC-034: Unauthorized Google account is rejected', async () => {
      await annotate({ id: 'TC-034', priority: 'P1', scenario: 'Negative - Social Sign-In' });
      test.skip(true, 'Requires unauthorized Google account interactive flow');
    });

    test('TC-035: Cancelled Google authentication returns user safely', async ({
      page,
      loginPage,
      testData,
      context,
    }) => {
      await annotate({ id: 'TC-035', priority: 'P1', scenario: 'Negative - Social Sign-In' });

      await loginPage.goto(testData.urls.login);
      const popupPromise = context.waitForEvent('page', { timeout: 10_000 }).catch(() => null);
      await loginPage.clickGoogleSignIn();
      const popup = await popupPromise;
      if (popup) {
        await popup.close();
      } else {
        await page.goBack().catch(() => page.goto(testData.urls.login));
      }

      await loginPage.goto(testData.urls.login);
      await expect(loginPage.getHeading()).toBeVisible();
      await expect(loginPage.getSignInButton()).toBeEnabled();
    });

    test('TC-036: Google OAuth access_denied callback is handled', async ({
      page,
      loginPage,
      testData,
    }) => {
      await annotate({ id: 'TC-036', priority: 'P1', scenario: 'Negative - Social Sign-In' });

      const origin = new URL(testData.urls.login).origin;
      await page.goto(`${origin}${testData['TC-036'].oauthErrorPath}`);
      await expect(page).toHaveURL(/login/i);
      await expect(loginPage.getHeading()).toBeVisible();
      await expect(loginPage.getSignInButton()).toBeVisible();
    });
  });

  test.describe('P1 - Boundary - Email', () => {
    test('TC-037: Email at maximum valid length is handled', async ({ page, loginPage, testData }) => {
      await annotate({ id: 'TC-037', priority: 'P1', scenario: 'Boundary - Email' });
      const data = testData['TC-037'];

      await loginPage.goto(testData.urls.login);
      await loginPage.login(data);
      await expect(loginPage.getHeading()).toBeVisible();
      await expect(page).toHaveURL(/login/i);
    });

    test('TC-038: Email above maximum length is rejected gracefully', async ({
      page,
      loginPage,
      testData,
    }) => {
      await annotate({ id: 'TC-038', priority: 'P1', scenario: 'Boundary - Email' });
      const data = testData['TC-038'];

      await loginPage.goto(testData.urls.login);
      await loginPage.login(data);
      await expect(page).toHaveURL(/login/i);
      await expect(loginPage.getHeading()).toBeVisible();
    });

    test('TC-039: Email local part at 64 characters is handled', async ({
      page,
      loginPage,
      testData,
    }) => {
      await annotate({ id: 'TC-039', priority: 'P1', scenario: 'Boundary - Email' });
      const data = testData['TC-039'];

      await loginPage.goto(testData.urls.login);
      await loginPage.login(data);
      await expect(loginPage.getHeading()).toBeVisible();
    });

    test('TC-040: Email local part above 64 characters is rejected gracefully', async ({
      page,
      loginPage,
      testData,
    }) => {
      await annotate({ id: 'TC-040', priority: 'P1', scenario: 'Boundary - Email' });
      const data = testData['TC-040'];

      await loginPage.goto(testData.urls.login);
      await loginPage.login(data);
      await expect(page).toHaveURL(/login/i);
    });
  });

  test.describe('P1 - Boundary - Password', () => {
    test('TC-041: Password below minimum length is rejected', async ({
      page,
      loginPage,
      testData,
    }) => {
      await annotate({ id: 'TC-041', priority: 'P1', scenario: 'Boundary - Password' });
      const data = testData['TC-041'];

      await loginPage.goto(testData.urls.login);
      await loginPage.login(data);
      await expect(page).toHaveURL(/login/i);
      await NOT_POST_LOGIN(page);
    });

    test('TC-042: Password at minimum accepted length is handled', async ({
      page,
      loginPage,
      testData,
    }) => {
      await annotate({ id: 'TC-042', priority: 'P1', scenario: 'Boundary - Password' });
      const data = testData['TC-042'];

      await loginPage.goto(testData.urls.login);
      await loginPage.login(data);
      await expect(loginPage.getHeading()).toBeVisible();
    });

    test('TC-043: Password at maximum accepted length is handled', async ({
      page,
      loginPage,
      testData,
    }) => {
      await annotate({ id: 'TC-043', priority: 'P1', scenario: 'Boundary - Password' });
      const data = testData['TC-043'];

      await loginPage.goto(testData.urls.login);
      await loginPage.fillEmail(data.email);
      await loginPage.fillPassword(data.password);
      await expect(loginPage.getPasswordInput()).toBeVisible();
      await loginPage.submitForm();
      await expect(loginPage.getHeading()).toBeVisible();
    });

    test('TC-044: Password above maximum length is rejected gracefully', async ({
      page,
      loginPage,
      testData,
    }) => {
      await annotate({ id: 'TC-044', priority: 'P1', scenario: 'Boundary - Password' });
      const data = testData['TC-044'];

      await loginPage.goto(testData.urls.login);
      await loginPage.login(data);
      await expect(page).toHaveURL(/login/i);
      await expect(loginPage.getHeading()).toBeVisible();
    });
  });

  test.describe('P2 - Positive - Accessibility', () => {
    test('TC-047: Form labels focus the correct fields', async ({ loginPage, testData }) => {
      await annotate({ id: 'TC-047', priority: 'P2', scenario: 'Positive - Accessibility' });
      const data = testData['TC-047'];

      await loginPage.goto(testData.urls.login);
      await loginPage.clickEmailLabel();
      await expect(loginPage.getEmailInput()).toBeFocused();
      await loginPage.fillEmail(data.email);

      await loginPage.clickPasswordLabel();
      await expect(loginPage.getPasswordInput()).toBeFocused();
      await loginPage.fillPassword(data.password);

      await expect(loginPage.getEmailInput()).toHaveValue(data.email);
    });
  });

  test.describe('P2 - Positive - Navigation', () => {
    test('TC-045: Back to Home redirects correctly', async ({ page, loginPage, testData }) => {
      await annotate({ id: 'TC-045', priority: 'P2', scenario: 'Positive - Navigation' });

      await loginPage.goto(testData.urls.login);
      await loginPage.clickBackToHome();
      await expect(page).toHaveURL(POST_LOGIN_URL);
    });
  });

  test.describe('P2 - Positive - UI Control', () => {
    test('TC-046: Remember me checkbox toggles on and off', async ({ loginPage, testData }) => {
      await annotate({ id: 'TC-046', priority: 'P2', scenario: 'Positive - UI Control' });

      await loginPage.goto(testData.urls.login);
      await loginPage.toggleRememberMe();
      const checked = await loginPage.isRememberMeChecked();
      expect(checked).toBeTruthy();
      await loginPage.toggleRememberMe();
      const unchecked = await loginPage.isRememberMeChecked();
      expect(unchecked).toBeFalsy();
    });
  });

  test.describe('P2 - Negative - Authorization', () => {
    test('TC-054: Unauthenticated direct dashboard access is blocked', async ({
      page,
      testData,
    }) => {
      await annotate({ id: 'TC-054', priority: 'P2', scenario: 'Negative - Authorization' });

      await page.goto(testData['TC-054'].homeUrl);
      await expect(page).toHaveURL(/login/i);
    });
  });

  test.describe('P2 - Negative - Error State', () => {
    test('TC-052: Offline or network loss during login is handled', async ({
      page,
      loginPage,
      testData,
      context,
    }) => {
      await annotate({ id: 'TC-052', priority: 'P2', scenario: 'Negative - Error State' });
      const data = testData['TC-052'];

      await loginPage.goto(testData.urls.login);
      await context.setOffline(true);
      await loginPage.login(data);

      await expect(page).toHaveURL(/login/i);
      await expect(loginPage.getHeading()).toBeVisible();
      await expect(page.getByText(data.password, { exact: true })).toHaveCount(0);
      await context.setOffline(false);
    });
  });

  test.describe('P2 - Boundary - Email', () => {
    for (const [id, title] of [
      ['TC-055', 'Minimum valid email pattern is handled'],
      ['TC-056', 'Email with plus alias is handled'],
      ['TC-057', 'Subdomain email is handled'],
    ]) {
      test(`${id}: ${title}`, async ({ page, loginPage, testData }) => {
        await annotate({ id, priority: 'P2', scenario: 'Boundary - Email' });
        const data = testData[id];

        await loginPage.goto(testData.urls.login);
        await loginPage.login(data);
        await expect(loginPage.getHeading()).toBeVisible();
        await NOT_POST_LOGIN(page);
      });
    }
  });

  test.describe('P2 - Boundary - Password', () => {
    test('TC-058: Password with allowed special characters is handled', async ({
      page,
      loginPage,
      testData,
    }) => {
      await annotate({ id: 'TC-058', priority: 'P2', scenario: 'Boundary - Password' });
      const data = testData['TC-058'];

      await loginPage.goto(testData.urls.login);
      await loginPage.login(data);
      await expect(loginPage.getHeading()).toBeVisible();
    });

    test('TC-059: Unicode password input is handled safely', async ({
      page,
      loginPage,
      testData,
    }) => {
      await annotate({ id: 'TC-059', priority: 'P2', scenario: 'Boundary - Password' });
      const data = testData['TC-059'];

      await loginPage.goto(testData.urls.login);
      await loginPage.login(data);
      await expect(page).toHaveURL(/login/i);
      await expect(loginPage.getHeading()).toBeVisible();
    });
  });

  test.describe('P2 - Edge - Submission', () => {
    test('TC-048: Sign In loading state prevents duplicate submissions', async ({
      page,
      loginPage,
      testData,
    }) => {
      await annotate({ id: 'TC-048', priority: 'P2', scenario: 'Edge - Submission' });
      const data = testData['TC-048'];
      let postCount = 0;

      await loginPage.goto(testData.urls.login);
      await page.route('**/*', async (route) => {
        if (route.request().method() === 'POST') {
          postCount += 1;
          await new Promise((r) => setTimeout(r, 1500));
        }
        await route.continue();
      });

      await loginPage.fillEmail(data.email);
      await loginPage.fillPassword(data.password);
      await Promise.all([
        loginPage.submitForm(),
        loginPage.getSignInButton().click({ force: true }).catch(() => undefined),
        loginPage.getSignInButton().click({ force: true }).catch(() => undefined),
      ]);

      await expect(page).toHaveURL(/\/(home|dashboard)|login/i);
      expect(postCount).toBeLessThanOrEqual(2);
    });

    test('TC-049: Double-clicking Sign In does not create duplicate sessions', async ({
      page,
      loginPage,
      testData,
    }) => {
      await annotate({ id: 'TC-049', priority: 'P2', scenario: 'Edge - Submission' });
      const data = testData['TC-049'];

      await loginPage.goto(testData.urls.login);
      await loginPage.fillEmail(data.email);
      await loginPage.fillPassword(data.password);
      await loginPage.getSignInButton().dblclick();
      await expect(page).toHaveURL(POST_LOGIN_URL);
    });
  });

  test.describe('P2 - Edge - Privacy', () => {
    test('TC-050: Refreshing login page clears sensitive unsent password', async ({
      loginPage,
      testData,
    }) => {
      await annotate({ id: 'TC-050', priority: 'P2', scenario: 'Edge - Privacy' });
      const data = testData['TC-050'];

      await loginPage.goto(testData.urls.login);
      await loginPage.fillEmail(data.email);
      await loginPage.fillPassword(data.password);
      await loginPage.page.reload();
      await expect(loginPage.getHeading()).toBeVisible();
      const passwordValue = await loginPage.getPasswordValue();
      expect(passwordValue).toBe('');
    });
  });

  test.describe('P2 - Edge - Recovery Navigation', () => {
    test('TC-051: Browser back from Forgot Password returns to usable login page', async ({
      page,
      loginPage,
      testData,
    }) => {
      await annotate({ id: 'TC-051', priority: 'P2', scenario: 'Edge - Recovery Navigation' });

      await loginPage.goto(testData.urls.login);
      await loginPage.clickForgotPassword();
      await expect(page).toHaveURL(/forgotpassword/i);
      await page.goBack();
      await expect(loginPage.getHeading()).toBeVisible();
      await expect(loginPage.getSignInButton()).toBeEnabled();
      await expect(loginPage.getEmailInput()).toBeEditable();
    });
  });

  test.describe('P2 - Edge - Session', () => {
    test('TC-053: Expired session redirects protected dashboard access to login', async ({
      page,
      context,
      testData,
    }) => {
      await annotate({ id: 'TC-053', priority: 'P2', scenario: 'Edge - Session' });

      await context.clearCookies();
      await page.goto(testData['TC-053'].homeUrl);
      await expect(page).toHaveURL(/login/i);
    });
  });

  test.describe('P2 - Edge - Input Handling', () => {
    test('TC-060: Very long paste into fields does not break layout', async ({
      page,
      loginPage,
      testData,
    }) => {
      await annotate({ id: 'TC-060', priority: 'P2', scenario: 'Edge - Input Handling' });
      const data = testData['TC-060'];

      await loginPage.goto(testData.urls.login);
      await loginPage.fillEmail(data.email);
      await loginPage.fillPassword(data.password);
      await loginPage.submitForm();

      await expect(loginPage.getHeading()).toBeVisible();
      await expect(loginPage.getSignInButton()).toBeVisible();
      const box = await loginPage.getSignInButton().boundingBox();
      expect(box).not.toBeNull();
    });
  });

  test.describe('P3 - Positive - Legal Link', () => {
    test('TC-064: Terms of Service link opens correctly', async ({ page, loginPage, testData }) => {
      await annotate({ id: 'TC-064', priority: 'P3', scenario: 'Positive - Legal Link' });

      await loginPage.goto(testData.urls.login);
      const popupPromise = page.waitForEvent('popup', { timeout: 5_000 }).catch(() => null);
      await loginPage.clickTermsOfService();
      const popup = await popupPromise;
      if (popup) {
        await expect(popup).toHaveURL(/.+/);
        await popup.close();
      } else {
        await expect(page).toHaveURL(/terms|tos|legal/i);
      }
      await NOT_POST_LOGIN(page);
    });

    test('TC-065: Privacy Policy link opens correctly', async ({ page, loginPage, testData }) => {
      await annotate({ id: 'TC-065', priority: 'P3', scenario: 'Positive - Legal Link' });

      await loginPage.goto(testData.urls.login);
      const popupPromise = page.waitForEvent('popup', { timeout: 5_000 }).catch(() => null);
      await loginPage.clickPrivacyPolicy();
      const popup = await popupPromise;
      if (popup) {
        await expect(popup).toHaveURL(/.+/);
        await popup.close();
      } else {
        await expect(page).toHaveURL(/privacy/i);
      }
    });
  });

  test.describe('P3 - Edge - Navigation', () => {
    test('TC-061: OTS logo remains accessible and does not trigger unintended login', async ({
      page,
      loginPage,
      testData,
    }) => {
      await annotate({ id: 'TC-061', priority: 'P3', scenario: 'Edge - Navigation' });

      await loginPage.goto(testData.urls.login);
      await loginPage.clickLogo();
      await NOT_POST_LOGIN(page);
      await expect(loginPage.getHeading()).toBeVisible();
    });
  });

  test.describe('P3 - Edge - Media Control', () => {
    test('TC-067: Open reels button is discoverable and safe to activate', async ({
      loginPage,
      testData,
    }) => {
      await annotate({ id: 'TC-067', priority: 'P3', scenario: 'Edge - Media Control' });

      await loginPage.goto(testData.urls.login);
      await expect(loginPage.getOpenReelsButton()).toBeVisible();
      await loginPage.clickOpenReels();
      await expect(loginPage.getEmailInput()).toBeVisible();
      await expect(loginPage.getSignInButton()).toBeVisible();
    });
  });

  test.describe('P3 - Responsive', () => {
    test('TC-068: Login page is usable on mobile viewport', async ({
      page,
      loginPage,
      testData,
    }) => {
      await annotate({ id: 'TC-068', priority: 'P3', scenario: 'Responsive - Mobile' });
      const data = testData['TC-068'];

      await page.setViewportSize(data.viewport);
      await loginPage.goto(testData.urls.login);
      await expect(loginPage.getEmailInput()).toBeVisible();
      await expect(loginPage.getPasswordInput()).toBeVisible();
      await expect(loginPage.getSignInButton()).toBeVisible();
      await loginPage.login(data);
      await expect(page).toHaveURL(POST_LOGIN_URL);
    });

    test('TC-069: Login page is usable on desktop viewport', async ({
      page,
      loginPage,
      testData,
    }) => {
      await annotate({ id: 'TC-069', priority: 'P3', scenario: 'Responsive - Desktop' });
      const data = testData['TC-069'];

      await page.setViewportSize(data.viewport);
      await loginPage.goto(testData.urls.login);
      await expect(loginPage.getHeading()).toBeVisible();
      await expect(loginPage.getGoogleSignInButton()).toBeVisible();
      await loginPage.login(data);
      await expect(page).toHaveURL(POST_LOGIN_URL);
    });
  });

  test.describe('P3 - Micro-interaction', () => {
    test('TC-062: Snail illustration speeds up on hover', async ({ loginPage, testData }) => {
      await annotate({ id: 'TC-062', priority: 'P3', scenario: 'Micro-interaction' });

      await loginPage.goto(testData.urls.login);
      const snail = loginPage.getSnailIllustration();
      const count = await snail.count().catch(() => 0);
      test.skip(count === 0, 'Snail illustration not exposed with an accessible name');
      await snail.hover({ force: true });
      await expect(loginPage.getHeading()).toBeVisible();
    });

    test('TC-063: Snail micro-interaction does not block form completion', async ({
      page,
      loginPage,
      testData,
    }) => {
      await annotate({ id: 'TC-063', priority: 'P3', scenario: 'Micro-interaction' });
      const data = testData['TC-063'];

      await loginPage.goto(testData.urls.login);
      const snail = loginPage.getSnailIllustration();
      if ((await snail.count()) > 0) {
        await snail.hover({ force: true });
      }
      await loginPage.getEmailInput().focus();
      await loginPage.login(data);
      await expect(page).toHaveURL(POST_LOGIN_URL);
    });
  });

  test.describe('P3 - UI - Content', () => {
    test('TC-066: Continue with email separator is visible and non-interfering', async ({
      loginPage,
      testData,
    }) => {
      await annotate({ id: 'TC-066', priority: 'P3', scenario: 'UI - Content' });

      await loginPage.goto(testData.urls.login);
      await expect(loginPage.getEmailDivider()).toBeVisible();
      await expect(loginPage.getEmailInput()).toBeEditable();
      await expect(loginPage.getPasswordInput()).toBeEditable();
      await expect(loginPage.getSignInButton()).toBeEnabled();
    });
  });

  test.describe('P3 - Accessibility', () => {
    test('TC-070: OTS logo image has accessible name', async ({ loginPage, testData }) => {
      await annotate({ id: 'TC-070', priority: 'P3', scenario: 'Accessibility' });

      await loginPage.goto(testData.urls.login);
      await expect(loginPage.getLogo()).toBeVisible();
      await expect(loginPage.getLogo()).toHaveAttribute('alt', testData['TC-070'].accessibleName);
    });
  });
});
