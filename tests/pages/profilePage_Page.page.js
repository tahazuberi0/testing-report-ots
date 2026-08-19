/**
 * Page Object for My Profile (`/dashboard/profile`).
 * Locator priority: role/label/text > data-testid > stable CSS > nth-child (commented if used).
 *
 * LIVE notes:
 * - Gender/Role options use label.filter locators from selectors.md.
 * - Current Education checkbox uses CSS fallback `.chakra-checkbox__control`.
 * - Educational Info heading in selectors.md uses { name: 'Personal Information' } — likely a copy-paste error.
 */
export class ProfilePage {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    this.page = page;

    // --- Header & Navigation ---
    this.myProfileHeading = page.getByRole('heading', { name: 'My Profile' });
    this.userOptionsButton = page.getByRole('button', { name: 'User Options' });
    this.userAvatar = page.getByRole('img', { name: 'User Avatar' });
    this.changeProfilePictureButton = page.getByRole('button', { name: 'Change profile picture' });

    // --- Tabs ---
    this.personalInfoTab = page.getByRole('button', { name: 'Personal Info' });
    this.educationalInfoTab = page.getByRole('button', { name: 'Educational Info' });
    this.settingsTab = page.getByRole('button', { name: 'Settings' });

    // --- Personal Info Form ---
    this.firstName = page.getByRole('textbox', { name: 'First Name' });
    this.lastName = page.getByRole('textbox', { name: 'Last Name' });
    this.city = page.getByRole('textbox', { name: 'City' });
    this.country = page.getByRole('textbox', { name: 'Country' });
    this.phoneNumber = page.getByRole('textbox', { name: 'Phone Number' });

    // Gender labels
    this.genderMale = page.locator('label').filter({ hasText: /^Male$/ });
    this.genderFemale = page.locator('label').filter({ hasText: 'Female' });
    this.genderOther = page.locator('label').filter({ hasText: 'Other' });

    // "You Are" role labels
    this.roleParent = page.locator('label').filter({ hasText: 'Parent' });
    this.roleTeacher = page.locator('label').filter({ hasText: 'Teacher' });
    this.roleStudent = page.locator('label').filter({ hasText: 'Student' });
    this.roleProfessional = page.locator('label').filter({ hasText: 'Professional' });

    // --- Newly resolved gap selectors ---
    this.dateOfBirthLabel = page.getByText('Date of Birth');
    this.dateOfBirthInput = page.getByRole('textbox', { name: /date of birth/i });
    this.profileCompletionPercent = page.getByText(/\d+%/).first();
    this.backButton = page.getByRole('button', { name: 'Back' });
    this.fileUploadInput = page.locator('input[type="file"]');
    this.educationalInfoHeading = page.getByRole('heading', { name: 'Educational Information' });

    // --- Educational Info Form ---
    this.institutionName = page.getByRole('textbox', { name: 'Institution Name' });
    this.passingYear = page.getByRole('spinbutton', { name: 'Passing Year' });
    // FALLBACK CSS: no role/label locator available
    this.currentEducationCheckbox = page.locator('.chakra-checkbox__control');

    // --- Shared ---
    this.updateProfileButton = page.getByRole('button', { name: 'Update my Profile' });

    // --- Settings ---
    this.accountSettingsHeading = page.getByRole('heading', { name: 'Account Settings' });
    this.changePasswordButton = page.getByRole('button', { name: 'Change Password' });
  }

  /** @param {{ email: string, password: string }} credentials */
  async loginAsStudent(credentials, loginUrl = 'https://edu.offtheschool.io/login') {
    await this.page.goto(loginUrl, { waitUntil: 'domcontentloaded' });
    const emailInput = this.page.getByRole('textbox', { name: 'Email Address' });
    await emailInput.waitFor({ state: 'visible', timeout: 20000 });
    await this.page.keyboard.press('Escape').catch(() => {});
    await emailInput.fill(credentials.email);
    await this.page
      .getByLabel(/^Password/)
      .or(this.page.getByRole('textbox', { name: 'Password' }))
      .fill(credentials.password);
    await this.page.getByRole('button', { name: 'Sign In' }).click();
    await this.page.waitForURL(/\/(home|dashboard)/i, { timeout: 45000 });
  }

  async gotoProfile(profileUrl = 'https://edu.offtheschool.io/dashboard/profile') {
    await this.page.goto(profileUrl, { waitUntil: 'domcontentloaded' });
    await this.myProfileHeading.waitFor({ state: 'visible', timeout: 20000 });
  }

  async ensureAuthenticatedProfile(credentials, loginUrl, profileUrl) {
    await this.loginAsStudent(credentials, loginUrl);
    await this.gotoProfile(profileUrl);
  }

  async switchToEducationalInfo() {
    await this.educationalInfoTab.click();
    await this.institutionName.waitFor({ state: 'visible', timeout: 10000 });
  }

  async switchToSettings() {
    await this.settingsTab.click();
    await this.accountSettingsHeading.waitFor({ state: 'visible', timeout: 10000 });
  }

  async switchToPersonalInfo() {
    await this.personalInfoTab.click();
    await this.firstName.waitFor({ state: 'visible', timeout: 10000 });
  }
}
