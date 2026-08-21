# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: specs\loginPage.spec.js >> Login Page >> P2 - Edge - Submission >> TC-048: Sign In loading state prevents duplicate submissions
- Location: tests\specs\loginPage.spec.js:794:5

# Error details

```
TimeoutError: locator.click: Timeout 15000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: 'Sign In' })
    - locator resolved to <button type="submit" class="chakra-button css-1fh0yvt">…</button>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is not enabled
    - retrying click action
    - waiting 20ms
    - waiting for element to be visible, enabled and stable
    - element is not stable
  2 × retrying click action
      - waiting 100ms
      - waiting for element to be visible, enabled and stable
      - element is not enabled
  4 × retrying click action
      - waiting 500ms
      - waiting for element to be visible, enabled and stable
      - element is not enabled
  3 × retrying click action
      - waiting 500ms
      - waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div class="css-1sxyorp"></div> intercepts pointer events
  - retrying click action
    - waiting 500ms
    - waiting for element to be visible, enabled and stable
  - element was detached from the DOM, retrying

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - main [ref=e5]:
    - generic [ref=e6]:
      - generic [ref=e9]:
        - img "menu icon" [ref=e11] [cursor=pointer]
        - img "OTS logo" [ref=e13] [cursor=pointer]
        - generic [ref=e14]:
          - img "Taha" [ref=e17] [cursor=pointer]
          - generic [ref=e18] [cursor=pointer]:
            - paragraph [ref=e19]: Taha
            - paragraph [ref=e20]: Student
          - button "User Options" [ref=e21] [cursor=pointer]:
            - img [ref=e22]
      - generic [ref=e24]:
        - generic [ref=e25]:
          - group [ref=e26] [cursor=pointer]:
            - img [ref=e28]
            - paragraph: Dashboard
          - group [ref=e30] [cursor=pointer]:
            - img [ref=e32]
            - paragraph: Switch Class
          - group [ref=e34] [cursor=pointer]:
            - img [ref=e36]
            - paragraph: Reels
          - group [ref=e39] [cursor=pointer]:
            - img [ref=e41]
            - paragraph: Enrollments
          - group [ref=e44] [cursor=pointer]:
            - img [ref=e46]
            - paragraph: Quiz Tracking
          - group [ref=e48] [cursor=pointer]:
            - img [ref=e50]
            - paragraph: Leaderboard
          - group [ref=e52] [cursor=pointer]:
            - img [ref=e54]
            - paragraph: Favorite Chapters
          - group [ref=e56] [cursor=pointer]:
            - img [ref=e58]
            - paragraph: Visit Website
          - group [ref=e60] [cursor=pointer]:
            - img [ref=e62]
            - paragraph: Feedback
          - group [ref=e64] [cursor=pointer]:
            - img [ref=e66]
            - paragraph: Logout
        - generic [ref=e69]:
          - generic [ref=e74]:
            - generic [ref=e75]:
              - generic [ref=e76]:
                - generic [ref=e78] [cursor=pointer]:
                  - generic [ref=e79]: 
                  - paragraph [ref=e80]: 0 Day Streak!
                - generic [ref=e82] [cursor=pointer]:
                  - generic [ref=e83]: 
                  - paragraph [ref=e84]: 0 XP
              - generic [ref=e86]:
                - generic [ref=e87]: 
                - text: GOOD MORNING
              - generic [ref=e88]:
                - heading "Taha" [level=2] [ref=e90]
                - button "Edit profile" [ref=e91] [cursor=pointer]:
                  - generic [ref=e92]: 
              - paragraph [ref=e94]:
                - text: You've completed
                - generic [ref=e95]: 0%
                - text: of your weekly goal! Keep the momentum going!
              - generic [ref=e98]:
                - paragraph [ref=e99]: Weekly Progress
                - paragraph [ref=e100]: 0%
              - generic [ref=e102]:
                - generic [ref=e104]:
                  - generic [ref=e106]: 
                  - paragraph [ref=e107]: "4"
                  - paragraph [ref=e108]: Courses
                - generic [ref=e110]:
                  - generic [ref=e112]: 
                  - paragraph [ref=e113]: "0"
                  - paragraph [ref=e114]: Lessons
                - generic [ref=e116]:
                  - generic [ref=e118]: 
                  - paragraph [ref=e119]: "1"
                  - paragraph [ref=e120]: Quizzes
            - generic [ref=e121]:
              - img [ref=e125]
              - generic [ref=e197]:
                - generic [ref=e198]: 
                - text: ON TRACK!
              - generic [ref=e200]:
                - generic [ref=e201]: 
                - text: KEEP GOING!
          - generic [ref=e202]:
            - generic [ref=e204]:
              - generic [ref=e207]:
                - generic [ref=e208]:
                  - generic [ref=e209]:
                    - generic [ref=e210]: 
                    - heading "Your Progress" [level=2] [ref=e211]
                  - paragraph [ref=e212]: Overall completion for your enrolled class
                - generic [ref=e213]:
                  - paragraph [ref=e214]: 0.0%
                  - progressbar [ref=e215]:
                    - img [ref=e216]
                    - generic [ref=e220]: 
              - generic [ref=e222]:
                - paragraph [ref=e223]: Progress
                - paragraph [ref=e224]: 0.0%
            - generic [ref=e227]:
              - generic [ref=e228]:
                - generic [ref=e229]: 
                - heading "My Subjects" [level=2] [ref=e230]
                - generic [ref=e231]: 5 Enrolled
              - group [ref=e232]:
                - button "Grid view" [ref=e233] [cursor=pointer]:
                  - generic [ref=e234]: 
                - button "Carousel view" [ref=e235] [cursor=pointer]:
                  - generic [ref=e236]: 
            - generic [ref=e238]:
              - group [ref=e239]:
                - generic [ref=e240]:
                  - progressbar [ref=e241]:
                    - img [ref=e242]
                    - generic [ref=e245]: 0.0%
                  - paragraph [ref=e246]: Progress
                - generic [ref=e247]:
                  - generic [ref=e248]:
                    - generic [ref=e250]: 
                    - generic [ref=e252]: 
                    - generic [ref=e254]: 
                    - generic [ref=e256]: 
                    - generic [ref=e258]: 
                  - paragraph [ref=e259]: Total Chapters 8
                  - heading "COMPUTER" [level=2] [ref=e261]
                  - paragraph [ref=e262]: Computer for Class 6
                - button "Watch video" [ref=e263] [cursor=pointer]:
                  - generic [ref=e265]: 
                  - text: Watch video
                - button "Start Learning" [ref=e266] [cursor=pointer]
              - group [ref=e267]:
                - generic [ref=e268]:
                  - progressbar [ref=e269]:
                    - img [ref=e270]
                    - generic [ref=e273]: 0.0%
                  - paragraph [ref=e274]: Progress
                - generic [ref=e275]:
                  - generic [ref=e276]:
                    - generic [ref=e278]: 
                    - generic [ref=e280]: 
                    - generic [ref=e282]: 
                    - generic [ref=e284]: 
                    - generic [ref=e286]: 
                  - paragraph [ref=e287]: Total Chapters 13
                  - heading "MATHEMATICS" [level=2] [ref=e289]
                  - paragraph [ref=e290]: Mathematics for Class 6
                - button "Watch video" [ref=e291] [cursor=pointer]:
                  - generic [ref=e293]: 
                  - text: Watch video
                - button "Start Learning" [ref=e294] [cursor=pointer]
              - group [ref=e295]:
                - generic [ref=e296]:
                  - progressbar [ref=e297]:
                    - img [ref=e298]
                    - generic [ref=e301]: 0.0%
                  - paragraph [ref=e302]: Progress
                - generic [ref=e303]:
                  - generic [ref=e304]:
                    - generic [ref=e306]: 
                    - generic [ref=e308]: 
                    - generic [ref=e310]: 
                    - generic [ref=e312]: 
                    - generic [ref=e314]: 
                  - paragraph [ref=e315]: Total Chapters 18
                  - heading "URDU" [level=2] [ref=e317]
                  - paragraph [ref=e318]: Urdu for Class 6
                - button "Watch video" [ref=e319] [cursor=pointer]:
                  - generic [ref=e321]: 
                  - text: Watch video
                - button "Start Learning" [ref=e322] [cursor=pointer]
              - group [ref=e323]:
                - generic [ref=e324]:
                  - progressbar [ref=e325]:
                    - img [ref=e326]
                    - generic [ref=e329]: 0.0%
                  - paragraph [ref=e330]: Progress
                - generic [ref=e331]:
                  - generic [ref=e332]:
                    - generic [ref=e334]: 
                    - generic [ref=e336]: 
                    - generic [ref=e338]: 
                    - generic [ref=e340]: 
                    - generic [ref=e342]: 
                  - paragraph [ref=e343]: Total Chapters 15
                  - heading "ENGLISH" [level=2] [ref=e345]
                  - paragraph [ref=e346]: English for Class 6
                - button "Watch video" [ref=e347] [cursor=pointer]:
                  - generic [ref=e349]: 
                  - text: Watch video
                - button "Start Learning" [ref=e350] [cursor=pointer]
              - group [ref=e351]:
                - generic [ref=e352]:
                  - progressbar [ref=e353]:
                    - img [ref=e354]
                    - generic [ref=e357]: 0.0%
                  - paragraph [ref=e358]: Progress
                - generic [ref=e359]:
                  - generic [ref=e360]:
                    - generic [ref=e362]: 
                    - generic [ref=e364]: 
                    - generic [ref=e366]: 
                    - generic [ref=e368]: 
                    - generic [ref=e370]: 
                  - paragraph [ref=e371]: Total Chapters 10
                  - heading "SCIENCE" [level=2] [ref=e373]
                  - paragraph [ref=e374]: Science for Class 6
                - button "Watch video" [ref=e375] [cursor=pointer]:
                  - generic [ref=e377]: 
                  - text: Watch video
                - button "Start Learning" [ref=e378] [cursor=pointer]
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
  80  |     await this.rememberMeLabel.click();
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
> 91  |     await this.signInButton.click();
      |                             ^ TimeoutError: locator.click: Timeout 15000ms exceeded.
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
  181 |   }
  182 | 
  183 |   getHeading() {
  184 |     return this.heading;
  185 |   }
  186 | 
  187 |   getLogo() {
  188 |     return this.logo;
  189 |   }
  190 | 
  191 |   getGoogleSignInButton() {
```