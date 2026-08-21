# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: specs\loginPage.spec.js >> Login Page >> P2 - Positive - UI Control >> TC-046: Remember me checkbox toggles on and off
- Location: tests\specs\loginPage.spec.js:700:5

# Error details

```
TimeoutError: locator.click: Timeout 15000ms exceeded.
Call log:
  - waiting for getByText('Remember me')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e3]:
    - button "Open reels" [ref=e4] [cursor=pointer]:
      - img [ref=e5]
    - main [ref=e9]:
      - generic [ref=e10]:
        - generic [ref=e11]:
          - generic:
            - generic:
              - img
          - generic [ref=e12]:
            - img "OTS Logo" [ref=e13] [cursor=pointer]
            - button "Back to Home" [ref=e14] [cursor=pointer]:
              - img [ref=e16]
              - text: Back to Home
          - generic [ref=e18]:
            - generic [ref=e19]:
              - heading "Sign in to your account" [level=2] [ref=e20]
              - paragraph [ref=e21]: Continue your learning journey with OTS EdTech
            - button "Continue with Google" [ref=e23] [cursor=pointer]:
              - img [ref=e25]
              - text: Continue with Google
            - generic [ref=e31]:
              - separator [ref=e32]
              - paragraph [ref=e33]: or continue with email
              - separator [ref=e34]
            - generic [ref=e35]:
              - group [ref=e37]:
                - generic [ref=e38]: Email Address*
                - generic [ref=e39]:
                  - img [ref=e41]
                  - textbox "Email Address" [ref=e43]:
                    - /placeholder: you@example.com
              - group [ref=e45]:
                - generic [ref=e46]: Password*
                - generic [ref=e47]:
                  - img [ref=e49]
                  - textbox "Password" [ref=e51]:
                    - /placeholder: Enter your password
                  - img [ref=e53] [cursor=pointer]
              - paragraph [ref=e57] [cursor=pointer]: Forgot Password?
              - button "Sign In" [ref=e59] [cursor=pointer]:
                - text: Sign In
                - img [ref=e61]
              - paragraph [ref=e64]: Don't have an account? Sign up for free
            - paragraph [ref=e66]: By signing in, you agree to our Terms of Service and Privacy Policy
        - generic [ref=e69] [cursor=pointer]:
          - img [ref=e72]
          - generic [ref=e124]:
            - paragraph [ref=e125]: 🐌 Slow and steady wins the race
            - paragraph [ref=e126]: Hover to speed up!
          - generic:
            - generic:
              - paragraph: ✨
            - generic:
              - heading "Great Things Take Time" [level=2]:
                - text: Great Things
                - generic: Take Time
              - paragraph: Just like our little snail friend, learning is a journey—not a race. Every small step brings you closer to greatness.
              - paragraph: Welcome back to
              - generic:
                - img "OTS"
              - paragraph: Where learning happens at your own pace 🎓
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
  1   | /**
  2   |  * Page Object Model for the Login Page.
  3   |  * Locators use resilient role/label queries only — no raw selectors in tests.
  4   |  */
  5   | export class LoginPage {
  6   |   /**
  7   |    * @param {import('@playwright/test').Page} page
  8   |    */
  9   |   constructor(page) {
  10  |     this.page = page;
  11  | 
  12  |     this.logo = page.getByRole('img', { name: 'OTS Logo' });
  13  |     this.backToHomeButton = page.getByRole('button', { name: 'Back to Home' });
  14  |     this.heading = page.getByRole('heading', { name: 'Sign in to your account' });
  15  |     this.subheading = page.getByText('Continue your learning');
  16  |     this.googleSignInButton = page.getByRole('button', { name: 'Continue with Google' });
  17  |     this.emailDivider = page.getByText('or continue with email');
  18  |     this.emailLabel = page.getByText('Email Address*');
  19  |     this.emailInput = page.getByRole('textbox', { name: 'Email Address' });
  20  |     this.passwordLabel = page.getByText('Password*');
  21  |     this.passwordInput = page.getByLabel(/^Password/).or(page.getByRole('textbox', { name: 'Password' }));
  22  |     this.rememberMeCheckbox = page.getByRole('checkbox', { name: /Remember me/i });
  23  |     this.rememberMeLabel = page.getByText('Remember me');
  24  |     this.forgotPasswordLink = page.getByRole('link', { name: /Forgot Password/i }).or(
  25  |       page.getByText('Forgot Password?')
  26  |     );
  27  |     this.signInButton = page.getByRole('button', { name: 'Sign In' });
  28  |     this.signUpLink = page.getByText('Sign up for free');
  29  |     this.termsOfServiceLink = page.getByText('Terms of Service');
  30  |     this.privacyPolicyLink = page.getByText('Privacy Policy');
  31  |     this.openReelsButton = page.getByRole('button', { name: 'Open reels' });
  32  |     this.legalDisclaimer = page.getByText('By signing in, you agree to');
  33  |     this.signUpPrompt = page.getByText(/Don't have an account\?/i);
  34  |     this.errorMessage = page.getByRole('alert').or(page.getByText(/invalid|incorrect|required|error|unable|failed|try again|network/i));
  35  |     this.snailIllustration = page.getByRole('img', { name: /snail|illustration/i });
  36  |   }
  37  | 
  38  |   async goto(loginUrl) {
  39  |     await this.page.goto(loginUrl);
  40  |     await this.heading.waitFor({ state: 'visible' });
  41  |   }
  42  | 
  43  |   async fillEmail(email) {
  44  |     await this.emailInput.fill(email);
  45  |   }
  46  | 
  47  |   async fillPassword(password) {
  48  |     await this.passwordInput.fill(password);
  49  |   }
  50  | 
  51  |   async pasteEmail(email) {
  52  |     await this.emailInput.click();
  53  |     await this.page.evaluate(async (value) => {
  54  |       await navigator.clipboard.writeText(value);
  55  |     }, email);
  56  |     await this.page.keyboard.press('ControlOrMeta+V');
  57  |   }
  58  | 
  59  |   async pastePassword(password) {
  60  |     await this.passwordInput.click();
  61  |     await this.page.evaluate(async (value) => {
  62  |       await navigator.clipboard.writeText(value);
  63  |     }, password);
  64  |     await this.page.keyboard.press('ControlOrMeta+V');
  65  |   }
  66  | 
  67  |   async checkRememberMe() {
  68  |     if (!(await this.isRememberMeChecked())) {
  69  |       await this.rememberMeLabel.click();
  70  |     }
  71  |   }
  72  | 
  73  |   async uncheckRememberMe() {
  74  |     if (await this.isRememberMeChecked()) {
  75  |       await this.rememberMeLabel.click();
  76  |     }
  77  |   }
  78  | 
  79  |   async toggleRememberMe() {
> 80  |     await this.rememberMeLabel.click();
      |                                ^ TimeoutError: locator.click: Timeout 15000ms exceeded.
  81  |   }
  82  | 
  83  |   async isRememberMeChecked() {
  84  |     if (await this.rememberMeCheckbox.count()) {
  85  |       return this.rememberMeCheckbox.isChecked();
  86  |     }
  87  |     return this.rememberMeLabel.getAttribute('aria-checked').then((v) => v === 'true').catch(() => false);
  88  |   }
  89  | 
  90  |   async submitForm() {
  91  |     await this.signInButton.click();
  92  |   }
  93  | 
  94  |   /**
  95  |    * Fills credentials and submits. Optionally checks Remember me.
  96  |    * @param {{ email: string, password: string, rememberMe?: boolean }} credentials
  97  |    */
  98  |   async login({ email, password, rememberMe = false }) {
  99  |     await this.fillEmail(email);
  100 |     await this.fillPassword(password);
  101 |     if (rememberMe) {
  102 |       await this.checkRememberMe();
  103 |     } else {
  104 |       await this.uncheckRememberMe();
  105 |     }
  106 |     await this.submitForm();
  107 |   }
  108 | 
  109 |   async loginWithEnter({ email, password }) {
  110 |     await this.fillEmail(email);
  111 |     await this.fillPassword(password);
  112 |     await this.passwordInput.press('Enter');
  113 |   }
  114 | 
  115 |   async clickForgotPassword() {
  116 |     await this.forgotPasswordLink.click();
  117 |   }
  118 | 
  119 |   async clickSignUp() {
  120 |     await this.signUpLink.click();
  121 |   }
  122 | 
  123 |   async clickBackToHome() {
  124 |     await this.backToHomeButton.click();
  125 |   }
  126 | 
  127 |   async clickGoogleSignIn() {
  128 |     await this.googleSignInButton.click();
  129 |   }
  130 | 
  131 |   async clickLogo() {
  132 |     await this.logo.click();
  133 |   }
  134 | 
  135 |   async clickTermsOfService() {
  136 |     await this.termsOfServiceLink.click();
  137 |   }
  138 | 
  139 |   async clickPrivacyPolicy() {
  140 |     await this.privacyPolicyLink.click();
  141 |   }
  142 | 
  143 |   async clickOpenReels() {
  144 |     await this.openReelsButton.click();
  145 |   }
  146 | 
  147 |   async clickEmailLabel() {
  148 |     await this.emailLabel.click();
  149 |   }
  150 | 
  151 |   async clickPasswordLabel() {
  152 |     await this.passwordLabel.click();
  153 |   }
  154 | 
  155 |   async hoverSnail() {
  156 |     await this.snailIllustration.first().hover({ force: true });
  157 |   }
  158 | 
  159 |   getEmailValue() {
  160 |     return this.emailInput.inputValue();
  161 |   }
  162 | 
  163 |   getPasswordValue() {
  164 |     return this.passwordInput.inputValue();
  165 |   }
  166 | 
  167 |   getPasswordInputType() {
  168 |     return this.passwordInput.getAttribute('type');
  169 |   }
  170 | 
  171 |   getSignInButton() {
  172 |     return this.signInButton;
  173 |   }
  174 | 
  175 |   getEmailInput() {
  176 |     return this.emailInput;
  177 |   }
  178 | 
  179 |   getPasswordInput() {
  180 |     return this.passwordInput;
```