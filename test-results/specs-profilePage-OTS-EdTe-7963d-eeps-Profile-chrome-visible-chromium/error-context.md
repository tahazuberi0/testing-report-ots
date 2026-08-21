# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: specs\profilePage.spec.js >> OTS EdTech My Profile Page >> TC_PROFILE_013: Soft refresh keeps Profile chrome visible
- Location: tests\specs\profilePage.spec.js:231:3

# Error details

```
TimeoutError: page.goto: Timeout 45000ms exceeded.
Call log:
  - navigating to "https://edu.offtheschool.io/login", waiting until "domcontentloaded"

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e19]:
    - generic [ref=e20]:
      - img [ref=e22]
      - img "OTS Logo" [ref=e26]
    - generic [ref=e27]:
      - paragraph [ref=e29]: Loading
      - paragraph [ref=e34]: Preparing your experience
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
  2   |  * Page Object for My Profile (`/dashboard/profile`).
  3   |  * Locator priority: role/label/text > data-testid > stable CSS > nth-child (commented if used).
  4   |  *
  5   |  * LIVE notes:
  6   |  * - Gender/Role options use label.filter locators from selectors.md.
  7   |  * - Current Education checkbox uses CSS fallback `.chakra-checkbox__control`.
  8   |  * - Educational Info heading in selectors.md uses { name: 'Personal Information' } — likely a copy-paste error.
  9   |  */
  10  | export class ProfilePage {
  11  |   /** @param {import('@playwright/test').Page} page */
  12  |   constructor(page) {
  13  |     this.page = page;
  14  | 
  15  |     // --- Header & Navigation ---
  16  |     this.myProfileHeading = page.getByRole('heading', { name: 'My Profile' });
  17  |     this.userOptionsButton = page.getByRole('button', { name: 'User Options' });
  18  |     this.userAvatar = page.getByRole('img', { name: 'User Avatar' });
  19  |     this.changeProfilePictureButton = page.getByRole('button', { name: 'Change profile picture' });
  20  | 
  21  |     // --- Tabs ---
  22  |     this.personalInfoTab = page.getByRole('button', { name: 'Personal Info' });
  23  |     this.educationalInfoTab = page.getByRole('button', { name: 'Educational Info' });
  24  |     this.settingsTab = page.getByRole('button', { name: 'Settings' });
  25  | 
  26  |     // --- Personal Info Form ---
  27  |     this.firstName = page.getByRole('textbox', { name: 'First Name' });
  28  |     this.lastName = page.getByRole('textbox', { name: 'Last Name' });
  29  |     this.city = page.getByRole('textbox', { name: 'City' });
  30  |     this.country = page.getByRole('textbox', { name: 'Country' });
  31  |     this.phoneNumber = page.getByRole('textbox', { name: 'Phone Number' });
  32  | 
  33  |     // Gender labels
  34  |     this.genderMale = page.locator('label').filter({ hasText: /^Male$/ });
  35  |     this.genderFemale = page.locator('label').filter({ hasText: 'Female' });
  36  |     this.genderOther = page.locator('label').filter({ hasText: 'Other' });
  37  | 
  38  |     // "You Are" role labels
  39  |     this.roleParent = page.locator('label').filter({ hasText: 'Parent' });
  40  |     this.roleTeacher = page.locator('label').filter({ hasText: 'Teacher' });
  41  |     this.roleStudent = page.locator('label').filter({ hasText: 'Student' });
  42  |     this.roleProfessional = page.locator('label').filter({ hasText: 'Professional' });
  43  | 
  44  |     // --- Newly resolved gap selectors ---
  45  |     this.dateOfBirthLabel = page.getByText('Date of Birth');
  46  |     this.dateOfBirthInput = page.getByRole('textbox', { name: /date of birth/i });
  47  |     this.profileCompletionPercent = page.getByText(/\d+%/).first();
  48  |     this.backButton = page.getByRole('button', { name: 'Back' });
  49  |     this.fileUploadInput = page.locator('input[type="file"]');
  50  |     this.educationalInfoHeading = page.getByRole('heading', { name: 'Educational Information' });
  51  | 
  52  |     // --- Educational Info Form ---
  53  |     this.institutionName = page.getByRole('textbox', { name: 'Institution Name' });
  54  |     this.passingYear = page.getByRole('spinbutton', { name: 'Passing Year' });
  55  |     // FALLBACK CSS: no role/label locator available
  56  |     this.currentEducationCheckbox = page.locator('.chakra-checkbox__control');
  57  | 
  58  |     // --- Shared ---
  59  |     this.updateProfileButton = page.getByRole('button', { name: 'Update my Profile' });
  60  | 
  61  |     // --- Settings ---
  62  |     this.accountSettingsHeading = page.getByRole('heading', { name: 'Account Settings' });
  63  |     this.changePasswordButton = page.getByRole('button', { name: 'Change Password' });
  64  |   }
  65  | 
  66  |   /** @param {{ email: string, password: string }} credentials */
  67  |   async loginAsStudent(credentials, loginUrl = 'https://edu.offtheschool.io/login') {
> 68  |     await this.page.goto(loginUrl, { waitUntil: 'domcontentloaded' });
      |                     ^ TimeoutError: page.goto: Timeout 45000ms exceeded.
  69  |     const emailInput = this.page.getByRole('textbox', { name: 'Email Address' });
  70  |     await emailInput.waitFor({ state: 'visible', timeout: 20000 });
  71  |     await this.page.keyboard.press('Escape').catch(() => {});
  72  |     await emailInput.fill(credentials.email);
  73  |     await this.page
  74  |       .getByLabel(/^Password/)
  75  |       .or(this.page.getByRole('textbox', { name: 'Password' }))
  76  |       .fill(credentials.password);
  77  |     await this.page.getByRole('button', { name: 'Sign In' }).click();
  78  |     await this.page.waitForURL(/\/(home|dashboard)/i, { timeout: 45000 });
  79  |   }
  80  | 
  81  |   async gotoProfile(profileUrl = 'https://edu.offtheschool.io/dashboard/profile') {
  82  |     await this.page.goto(profileUrl, { waitUntil: 'domcontentloaded' });
  83  |     await this.myProfileHeading.waitFor({ state: 'visible', timeout: 20000 });
  84  |   }
  85  | 
  86  |   async ensureAuthenticatedProfile(credentials, loginUrl, profileUrl) {
  87  |     await this.loginAsStudent(credentials, loginUrl);
  88  |     await this.gotoProfile(profileUrl);
  89  |   }
  90  | 
  91  |   async switchToEducationalInfo() {
  92  |     await this.educationalInfoTab.click();
  93  |     await this.institutionName.waitFor({ state: 'visible', timeout: 10000 });
  94  |   }
  95  | 
  96  |   async switchToSettings() {
  97  |     await this.settingsTab.click();
  98  |     await this.accountSettingsHeading.waitFor({ state: 'visible', timeout: 10000 });
  99  |   }
  100 | 
  101 |   async switchToPersonalInfo() {
  102 |     await this.personalInfoTab.click();
  103 |     await this.firstName.waitFor({ state: 'visible', timeout: 10000 });
  104 |   }
  105 | }
  106 | 
```