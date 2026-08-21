# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: specs\signUp_Page.spec.js >> OTS EdTech Sign Up Page >> TC_SIGNUP_016: Terms agreement checkbox can be toggled
- Location: tests\specs\signUp_Page.spec.js:257:3

# Error details

```
TimeoutError: locator.check: Timeout 15000ms exceeded.
Call log:
  - waiting for getByRole('checkbox')
    - locator resolved to <input value="" type="checkbox" aria-checked="false" class="chakra-checkbox__input"/>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <span aria-hidden="true" class="chakra-checkbox__control css-wbzaaj"></span> intercepts pointer events
    - retrying click action
    - waiting 20ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e3]:
    - button "Open reels" [ref=e4] [cursor=pointer]:
      - img [ref=e5]
    - main [ref=e9]:
      - generic [ref=e10]:
        - generic:
          - generic:
            - img
        - generic [ref=e11]:
          - generic:
            - img "OTS Logo" [ref=e12] [cursor=pointer]
            - button "Back to Home" [ref=e13] [cursor=pointer]:
              - img [ref=e15]
              - text: Back to Home
          - generic [ref=e17]:
            - paragraph [ref=e19]: Get Started
            - generic [ref=e20]:
              - heading "Create your free account" [level=2] [ref=e21]
              - paragraph [ref=e22]: Start learning with Pakistan's leading EdTech platform
            - button "Continue with Google" [ref=e24] [cursor=pointer]:
              - img [ref=e26]
              - text: Continue with Google
            - generic [ref=e32]:
              - separator [ref=e33]
              - paragraph [ref=e34]: or with email
              - separator [ref=e35]
            - generic [ref=e36]:
              - group [ref=e38]:
                - generic [ref=e39]: Email Address*
                - generic [ref=e40]:
                  - img [ref=e42]
                  - textbox "Email Address" [ref=e44]:
                    - /placeholder: you@example.com
              - group [ref=e46]:
                - generic [ref=e47]: Create Password*
                - generic [ref=e48]:
                  - img [ref=e50]
                  - textbox "Create Password" [ref=e52]:
                    - /placeholder: Create a strong password
                  - img [ref=e54] [cursor=pointer]
                - generic [ref=e56]:
                  - generic [ref=e57]:
                    - paragraph [ref=e58]: Password strength
                    - paragraph [ref=e59]: Weak
                  - generic [ref=e60]:
                    - progressbar
                  - generic [ref=e61]:
                    - generic [ref=e62]:
                      - img [ref=e64]
                      - paragraph [ref=e66]: 8+ characters
                    - generic [ref=e67]:
                      - img [ref=e69]
                      - paragraph [ref=e71]: Uppercase
                    - generic [ref=e72]:
                      - img [ref=e74]
                      - paragraph [ref=e76]: Lowercase
                    - generic [ref=e77]:
                      - img [ref=e79]
                      - paragraph [ref=e81]: Number
                    - generic [ref=e82]:
                      - img [ref=e84]
                      - paragraph [ref=e86]: Special char
              - group [ref=e88]:
                - generic [ref=e89]: Confirm Password*
                - generic [ref=e90]:
                  - img [ref=e92]
                  - textbox "Confirm Password" [ref=e94]:
                    - /placeholder: Confirm your password
                  - img [ref=e96] [cursor=pointer]
              - generic [ref=e99] [cursor=pointer]:
                - checkbox "I agree to the Terms and Privacy Policy" [ref=e100]
                - paragraph [ref=e103]: I agree to the Terms and Privacy Policy
              - button "Create Account" [disabled] [ref=e105]:
                - text: Create Account
                - img [ref=e107]
              - paragraph [ref=e110]: Already have an account? Sign in
        - generic [ref=e117]:
          - generic [ref=e119]:
            - img "OTS Logo" [ref=e120]
            - button [ref=e121] [cursor=pointer]:
              - img [ref=e122]
          - generic [ref=e125]:
            - generic [ref=e127]:
              - paragraph [ref=e128]: ✨
              - paragraph [ref=e129]: "PAKISTAN'S #1 LEARNING PLATFORM"
            - heading "Where Curiosity Meets Excellence" [level=2] [ref=e131]:
              - text: Where Curiosity
              - generic [ref=e132]: Meets Excellence
            - paragraph [ref=e134]: Join thousands of students transforming their future with expert-led courses, interactive lessons, and a community that celebrates your success.
            - generic [ref=e137]:
              - generic [ref=e138]:
                - generic [ref=e139]:
                  - paragraph [ref=e140]: 30K
                  - paragraph [ref=e141]: +
                - paragraph [ref=e142]: Active Learners
              - generic [ref=e144]:
                - generic [ref=e145]:
                  - paragraph [ref=e146]: "500"
                  - paragraph [ref=e147]: +
                - paragraph [ref=e148]: Video Lessons
              - generic [ref=e150]:
                - generic [ref=e151]:
                  - paragraph [ref=e152]: "4.9"
                  - paragraph [ref=e153]: ★
                - paragraph [ref=e154]: Student Rating
          - img [ref=e159]
  - generic:
    - region "Notifications-top"
    - region "Notifications-top-left"
    - region "Notifications-top-right"
    - region "Notifications-bottom-left"
    - region "Notifications-bottom"
    - region "Notifications-bottom-right"
```

# Test source

```ts
  166 | 
  167 |   test('TC_SIGNUP_010: Soft refresh keeps Sign Up chrome visible', async () => {
  168 |     const data = testData.TC_SIGNUP_010;
  169 |     await annotate({ id: 'TC_SIGNUP_010', title: 'Soft refresh keeps Sign Up chrome visible', priority: 'Medium', description: 'Refreshing keeps heading visible.' });
  170 | 
  171 |     await allure.step('Open Sign Up page', async () => {
  172 |       await signUpPage.gotoSignUp(data.signUpUrl);
  173 |       await expect(signUpPage.pageHeading).toBeVisible();
  174 |     });
  175 |     await allure.step('Refresh page', async () => {
  176 |       await signUpPage.page.reload({ waitUntil: 'domcontentloaded' });
  177 |     });
  178 |     await allure.step('Re-verify heading', async () => {
  179 |       await expect(signUpPage.pageHeading).toBeVisible();
  180 |     });
  181 |   });
  182 | 
  183 |   test('TC_SIGNUP_011: Password mismatch edge case', async () => {
  184 |     const data = testData.TC_SIGNUP_011;
  185 |     await annotate({ id: 'TC_SIGNUP_011', title: 'Password mismatch edge case', priority: 'Medium', description: 'Different Create/Confirm passwords; observe behavior.' });
  186 | 
  187 |     await allure.step('Open Sign Up page', async () => {
  188 |       await signUpPage.gotoSignUp(data.signUpUrl);
  189 |     });
  190 |     await allure.step('Fill mismatched passwords', async () => {
  191 |       await signUpPage.emailAddressInput.fill(data.testEmail);
  192 |       await signUpPage.createPasswordInput.fill(data.testPassword);
  193 |       await signUpPage.confirmPasswordInput.fill(data.mismatchPassword);
  194 |     });
  195 |     await allure.step('Verify page stable', async () => {
  196 |       await expect(signUpPage.pageHeading).toBeVisible();
  197 |     });
  198 |   });
  199 | 
  200 |   test('TC_SIGNUP_012: Empty form submission edge case', async () => {
  201 |     const data = testData.TC_SIGNUP_012;
  202 |     await annotate({ id: 'TC_SIGNUP_012', title: 'Empty form submission edge case', priority: 'Medium', description: 'All fields empty; observe behavior.' });
  203 | 
  204 |     await allure.step('Open Sign Up page', async () => {
  205 |       await signUpPage.gotoSignUp(data.signUpUrl);
  206 |     });
  207 |     await allure.step('Verify fields are empty', async () => {
  208 |       await expect(signUpPage.emailAddressInput).toHaveValue('');
  209 |       await expect(signUpPage.createPasswordInput).toHaveValue('');
  210 |       await expect(signUpPage.confirmPasswordInput).toHaveValue('');
  211 |     });
  212 |     await allure.step('Verify page stable', async () => {
  213 |       await expect(signUpPage.pageHeading).toBeVisible();
  214 |     });
  215 |   });
  216 | 
  217 |   test('TC_SIGNUP_013: Create Account button is visible on page load', async () => {
  218 |     const data = testData.TC_SIGNUP_013;
  219 |     await annotate({ id: 'TC_SIGNUP_013', title: 'Create Account button is visible on page load', priority: 'High', description: 'Create Account button visible.' });
  220 | 
  221 |     await allure.step('Open Sign Up page', async () => {
  222 |       await signUpPage.gotoSignUp(data.signUpUrl);
  223 |     });
  224 |     await allure.step('Verify Create Account button', async () => {
  225 |       await expect(signUpPage.createAccountButton).toBeVisible();
  226 |     });
  227 |   });
  228 | 
  229 |   test('TC_SIGNUP_014: Continue with Google button is visible', async () => {
  230 |     const data = testData.TC_SIGNUP_014;
  231 |     await annotate({ id: 'TC_SIGNUP_014', title: 'Continue with Google button is visible', priority: 'High', description: 'Continue with Google button visible.' });
  232 | 
  233 |     await allure.step('Open Sign Up page', async () => {
  234 |       await signUpPage.gotoSignUp(data.signUpUrl);
  235 |     });
  236 |     await allure.step('Verify Continue with Google button', async () => {
  237 |       await expect(signUpPage.continueWithGoogleButton).toBeVisible();
  238 |     });
  239 |   });
  240 | 
  241 |   test('TC_SIGNUP_015: Back to Home link is visible and clickable', async ({ page }) => {
  242 |     const data = testData.TC_SIGNUP_015;
  243 |     await annotate({ id: 'TC_SIGNUP_015', title: 'Back to Home link is visible and clickable', priority: 'Medium', description: 'Back to Home link navigates to home.' });
  244 | 
  245 |     await allure.step('Open Sign Up page', async () => {
  246 |       await signUpPage.gotoSignUp(data.signUpUrl);
  247 |     });
  248 |     await allure.step('Verify and click Back to Home', async () => {
  249 |       await expect(signUpPage.backToHomeLink).toBeVisible();
  250 |       await signUpPage.backToHomeLink.click();
  251 |     });
  252 |     await allure.step('Verify navigation to home', async () => {
  253 |       await expect(page).toHaveURL(new RegExp(data.expectedHomeUrlPattern, 'i'));
  254 |     });
  255 |   });
  256 | 
  257 |   test('TC_SIGNUP_016: Terms agreement checkbox can be toggled', async () => {
  258 |     const data = testData.TC_SIGNUP_016;
  259 |     await annotate({ id: 'TC_SIGNUP_016', title: 'Terms agreement checkbox can be toggled', priority: 'Medium', description: 'Terms checkbox toggles.' });
  260 | 
  261 |     await allure.step('Open Sign Up page', async () => {
  262 |       await signUpPage.gotoSignUp(data.signUpUrl);
  263 |     });
  264 |     await allure.step('Toggle checkbox', async () => {
  265 |       await expect(signUpPage.termsCheckbox).not.toBeChecked();
> 266 |       await signUpPage.termsCheckbox.check();
      |                                      ^ TimeoutError: locator.check: Timeout 15000ms exceeded.
  267 |       await expect(signUpPage.termsCheckbox).toBeChecked();
  268 |     });
  269 |   });
  270 | });
  271 | 
```