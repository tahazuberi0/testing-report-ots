# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: specs\loginPage.spec.js >> Login Page >> P0 - Positive - Session >> TC-005: Already-authenticated user reaches dashboard instead of login loop
- Location: tests\specs\loginPage.spec.js:87:5

# Error details

```
Error: expect(page).not.toHaveURL(expected) failed

Expected pattern: not /\/login$/
Received string: "https://edu.offtheschool.io/login"
Timeout: 15000ms

Call log:
  - Expect "not toHaveURL" with timeout 15000ms
    27 × unexpected value "https://edu.offtheschool.io/login"

```

```yaml
- button "Open reels"
- main:
  - img
  - img "OTS Logo"
  - button "Back to Home"
  - heading "Sign in to your account" [level=2]
  - paragraph: Continue your learning journey with OTS EdTech
  - button "Continue with Google"
  - separator
  - paragraph: or continue with email
  - separator
  - group:
    - text: Email Address
    - img
    - textbox "Email Address":
      - /placeholder: you@example.com
  - group:
    - text: Password
    - img
    - textbox "Password":
      - /placeholder: Enter your password
    - img
  - paragraph: Forgot Password?
  - button "Sign In"
  - paragraph: Don't have an account? Sign up for free
  - paragraph: By signing in, you agree to our Terms of Service and Privacy Policy
  - img
  - paragraph: 🐌 Slow and steady wins the race
  - paragraph: Hover to speed up!
  - paragraph: ✨
  - heading "Great Things Take Time" [level=2]
  - paragraph: Just like our little snail friend, learning is a journey—not a race. Every small step brings you closer to greatness.
  - paragraph: Welcome back to
  - img "OTS"
  - paragraph: Where learning happens at your own pace 🎓
- region "Notifications-top"
- region "Notifications-top-left"
- region "Notifications-top-right"
- region "Notifications-bottom-left"
- region "Notifications-bottom"
- region "Notifications-bottom-right"
```

# Test source

```ts
  1   | import { test, expect, annotate } from '../fixtures/loginFixtures.js';
  2   | 
  3   | /** App redirects authenticated users to /dashboard (docs also mention /home). */
  4   | const POST_LOGIN_URL = /\/(home|dashboard)/i;
  5   | const NOT_POST_LOGIN = async (page) => {
  6   |   await expect(page).not.toHaveURL(POST_LOGIN_URL);
  7   | };
  8   | 
  9   | test.describe('Login Page', () => {
  10  |   test.describe('P0 - Positive - Primary Path', () => {
  11  |     test('TC-001: Direct sign-in succeeds with valid email and password', async ({
  12  |       page,
  13  |       loginPage,
  14  |       testData,
  15  |     }) => {
  16  |       await annotate({ id: 'TC-001', priority: 'P0', scenario: 'Positive - Primary Path' });
  17  |       const data = testData['TC-001'];
  18  | 
  19  |       await loginPage.goto(testData.urls.login);
  20  |       await loginPage.login(data);
  21  | 
  22  |       await expect(page).toHaveURL(POST_LOGIN_URL);
  23  |       await expect(loginPage.getHeading()).toBeHidden();
  24  |     });
  25  | 
  26  |     test('TC-002: Direct sign-in succeeds when Remember me is selected', async ({
  27  |       page,
  28  |       loginPage,
  29  |       testData,
  30  |       context,
  31  |     }) => {
  32  |       await annotate({ id: 'TC-002', priority: 'P0', scenario: 'Positive - Primary Path' });
  33  |       const data = testData['TC-002'];
  34  | 
  35  |       await loginPage.goto(testData.urls.login);
  36  |       await loginPage.login({ ...data, rememberMe: true });
  37  |       await expect(page).toHaveURL(POST_LOGIN_URL);
  38  | 
  39  |       const cookies = await context.cookies();
  40  |       expect(cookies.length).toBeGreaterThan(0);
  41  | 
  42  |       await page.goto(testData.urls.login);
  43  |       await expect(page).not.toHaveURL(/\/login$/);
  44  |     });
  45  |   });
  46  | 
  47  |   test.describe('P0 - Positive - Social Sign-In', () => {
  48  |     test('TC-003: Continue with Google starts Google authentication', async ({
  49  |       page,
  50  |       loginPage,
  51  |       testData,
  52  |       context,
  53  |     }) => {
  54  |       await annotate({ id: 'TC-003', priority: 'P0', scenario: 'Positive - Social Sign-In' });
  55  | 
  56  |       await loginPage.goto(testData.urls.login);
  57  | 
  58  |       const popupPromise = context.waitForEvent('page', { timeout: 10_000 }).catch(() => null);
  59  |       await loginPage.clickGoogleSignIn();
  60  | 
  61  |       const popup = await popupPromise;
  62  |       if (popup) {
  63  |         await popup.waitForLoadState('domcontentloaded');
  64  |         expect(popup.url()).toContain(testData['TC-003'].expectedGoogleHost);
  65  |         await popup.close();
  66  |       } else {
  67  |         await expect(page).toHaveURL(new RegExp(testData['TC-003'].expectedGoogleHost));
  68  |       }
  69  |     });
  70  | 
  71  |     test('TC-004: Google authentication succeeds for authorized user', async ({
  72  |       loginPage,
  73  |       testData,
  74  |     }) => {
  75  |       await annotate({ id: 'TC-004', priority: 'P0', scenario: 'Positive - Social Sign-In' });
  76  |       test.skip(
  77  |         !process.env.GOOGLE_STORAGE_STATE,
  78  |         'Requires GOOGLE_STORAGE_STATE for authorized Google OAuth completion'
  79  |       );
  80  | 
  81  |       await loginPage.goto(testData.urls.login);
  82  |       await loginPage.clickGoogleSignIn();
  83  |     });
  84  |   });
  85  | 
  86  |   test.describe('P0 - Positive - Session', () => {
  87  |     test('TC-005: Already-authenticated user reaches dashboard instead of login loop', async ({
  88  |       page,
  89  |       loginPage,
  90  |       testData,
  91  |     }) => {
  92  |       await annotate({ id: 'TC-005', priority: 'P0', scenario: 'Positive - Session' });
  93  |       const data = testData['TC-005'];
  94  | 
  95  |       await loginPage.goto(testData.urls.login);
  96  |       await loginPage.login(data);
  97  |       await expect(page).toHaveURL(POST_LOGIN_URL);
  98  | 
  99  |       await page.goto(testData.urls.login);
> 100 |       await expect(page).not.toHaveURL(/\/login$/);
      |                              ^ Error: expect(page).not.toHaveURL(expected) failed
  101 |       await expect(page).toHaveURL(POST_LOGIN_URL);
  102 |     });
  103 |   });
  104 | 
  105 |   test.describe('P0 - Negative - Required Fields', () => {
  106 |     test('TC-006: Sign-in is blocked when both required fields are empty', async ({
  107 |       page,
  108 |       loginPage,
  109 |       testData,
  110 |     }) => {
  111 |       await annotate({ id: 'TC-006', priority: 'P0', scenario: 'Negative - Required Fields' });
  112 | 
  113 |       await loginPage.goto(testData.urls.login);
  114 |       await loginPage.submitForm();
  115 | 
  116 |       await expect(page).toHaveURL(/login/i);
  117 |       await expect(loginPage.getHeading()).toBeVisible();
  118 |       const emailMsg = await loginPage.getEmailInput().evaluate((el) => el.validationMessage);
  119 |       const passMsg = await loginPage.getPasswordInput().evaluate((el) => el.validationMessage);
  120 |       expect(Boolean(emailMsg || passMsg) || (await loginPage.getErrorMessage().first().isVisible().catch(() => false))).toBeTruthy();
  121 |     });
  122 | 
  123 |     test('TC-007: Sign-in is blocked when email is empty', async ({ page, loginPage, testData }) => {
  124 |       await annotate({ id: 'TC-007', priority: 'P0', scenario: 'Negative - Required Fields' });
  125 |       const data = testData['TC-007'];
  126 | 
  127 |       await loginPage.goto(testData.urls.login);
  128 |       await loginPage.fillPassword(data.password);
  129 |       await loginPage.submitForm();
  130 | 
  131 |       await expect(page).toHaveURL(/login/i);
  132 |       const emailMsg = await loginPage.getEmailInput().evaluate((el) => el.validationMessage);
  133 |       expect(
  134 |         Boolean(emailMsg) || (await loginPage.getErrorMessage().first().isVisible().catch(() => false))
  135 |       ).toBeTruthy();
  136 |     });
  137 | 
  138 |     test('TC-008: Sign-in is blocked when password is empty', async ({
  139 |       page,
  140 |       loginPage,
  141 |       testData,
  142 |     }) => {
  143 |       await annotate({ id: 'TC-008', priority: 'P0', scenario: 'Negative - Required Fields' });
  144 |       const data = testData['TC-008'];
  145 | 
  146 |       await loginPage.goto(testData.urls.login);
  147 |       await loginPage.fillEmail(data.email);
  148 |       await loginPage.submitForm();
  149 | 
  150 |       await expect(page).toHaveURL(/login/i);
  151 |       const passMsg = await loginPage.getPasswordInput().evaluate((el) => el.validationMessage);
  152 |       expect(
  153 |         Boolean(passMsg) || (await loginPage.getErrorMessage().first().isVisible().catch(() => false))
  154 |       ).toBeTruthy();
  155 |     });
  156 |   });
  157 | 
  158 |   test.describe('P0 - Negative - Authentication', () => {
  159 |     test('TC-009: Valid email with invalid password is rejected', async ({
  160 |       page,
  161 |       loginPage,
  162 |       testData,
  163 |     }) => {
  164 |       await annotate({ id: 'TC-009', priority: 'P0', scenario: 'Negative - Authentication' });
  165 |       const data = testData['TC-009'];
  166 | 
  167 |       await loginPage.goto(testData.urls.login);
  168 |       await loginPage.login(data);
  169 | 
  170 |       await expect(page).toHaveURL(/login/i);
  171 |       await expect(loginPage.getHeading()).toBeVisible();
  172 |     });
  173 | 
  174 |     test('TC-010: Unregistered or unauthorized email is rejected', async ({
  175 |       page,
  176 |       loginPage,
  177 |       testData,
  178 |     }) => {
  179 |       await annotate({ id: 'TC-010', priority: 'P0', scenario: 'Negative - Authentication' });
  180 |       const data = testData['TC-010'];
  181 | 
  182 |       await loginPage.goto(testData.urls.login);
  183 |       await loginPage.login(data);
  184 | 
  185 |       await expect(page).toHaveURL(/login/i);
  186 |       await NOT_POST_LOGIN(page);
  187 |     });
  188 | 
  189 |     test('TC-011: Invalid email and invalid password are rejected', async ({
  190 |       page,
  191 |       loginPage,
  192 |       testData,
  193 |     }) => {
  194 |       await annotate({ id: 'TC-011', priority: 'P0', scenario: 'Negative - Authentication' });
  195 |       const data = testData['TC-011'];
  196 | 
  197 |       await loginPage.goto(testData.urls.login);
  198 |       await loginPage.login(data);
  199 | 
  200 |       await expect(page).toHaveURL(/login/i);
```