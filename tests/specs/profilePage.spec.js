import { createRequire } from 'module';
import * as allure from 'allure-js-commons';
import { test, expect } from '../fixtures/allure-hooks.js';
import { ProfilePage } from '../pages/profilePage_Page.page.js';

const require = createRequire(import.meta.url);
const testData = require('../data/profilePage.data.json');

const severityMap = { High: 'critical', Medium: 'normal', Low: 'minor' };

async function annotate({ id, title, priority, description }) {
  await allure.epic('OTS EdTech Dashboard');
  await allure.feature('My Profile Page');
  await allure.story(id);
  await allure.allureId(id);
  await allure.description(description);
  await allure.severity(severityMap[priority]);
  await allure.tag(priority);
  await allure.displayName(`${id}: ${title}`);
}

test.describe('OTS EdTech My Profile Page', () => {
  test.setTimeout(90_000);

  /** @type {ProfilePage} */
  let profilePage;

  test.beforeEach(async ({ page }) => {
    profilePage = new ProfilePage(page);
  });

  // --- TC_PROFILE_001 ---
  test('TC_PROFILE_001: Authenticated student lands on Profile with My Profile heading visible', async () => {
    const data = testData.TC_PROFILE_001;
    await annotate({ id: 'TC_PROFILE_001', title: 'Authenticated student lands on Profile with My Profile heading visible', priority: 'High', description: 'Logged-in student reaches Profile with My Profile heading visible.' });

    await allure.step('Sign in and open Profile', async () => {
      await profilePage.ensureAuthenticatedProfile(data.validStudentSession, data.loginUrl, data.profileUrl);
    });
    await allure.step('Verify heading', async () => {
      await expect(profilePage.myProfileHeading).toBeVisible();
    });
  });

  // --- TC_PROFILE_002 ---
  test('TC_PROFILE_002: User Avatar and Change profile picture button are visible', async () => {
    const data = testData.TC_PROFILE_002;
    await annotate({ id: 'TC_PROFILE_002', title: 'User Avatar and Change profile picture button are visible', priority: 'High', description: 'User Avatar image and Change profile picture button visible on Profile.' });

    await allure.step('Sign in and open Profile', async () => {
      await profilePage.ensureAuthenticatedProfile(data.validStudentSession, data.loginUrl, data.profileUrl);
    });
    await allure.step('Verify avatar and picture button', async () => {
      await expect(profilePage.userAvatar).toBeVisible();
      await expect(profilePage.changeProfilePictureButton).toBeVisible();
    });
  });

  // --- TC_PROFILE_003 ---
  test('TC_PROFILE_003: Personal Info tab is active by default with form fields visible', async () => {
    const data = testData.TC_PROFILE_003;
    await annotate({ id: 'TC_PROFILE_003', title: 'Personal Info tab is active by default with form fields visible', priority: 'High', description: 'Personal Info tab present, First Name and Last Name visible by default.' });

    await allure.step('Sign in and open Profile', async () => {
      await profilePage.ensureAuthenticatedProfile(data.validStudentSession, data.loginUrl, data.profileUrl);
    });
    await allure.step('Verify Personal Info defaults', async () => {
      await expect(profilePage.personalInfoTab).toBeVisible();
      await expect(profilePage.firstName).toBeVisible();
      await expect(profilePage.lastName).toBeVisible();
    });
  });

  // --- TC_PROFILE_004 ---
  test('TC_PROFILE_004: First Name and Last Name fields are editable', async () => {
    const data = testData.TC_PROFILE_004;
    await annotate({ id: 'TC_PROFILE_004', title: 'First Name and Last Name fields are editable', priority: 'High', description: 'First Name and Last Name accept typed input.' });

    await allure.step('Sign in and open Profile', async () => {
      await profilePage.ensureAuthenticatedProfile(data.validStudentSession, data.loginUrl, data.profileUrl);
    });
    await allure.step('Edit First Name and Last Name', async () => {
      await profilePage.firstName.clear();
      await profilePage.firstName.fill(data.testFirstName);
      await expect(profilePage.firstName).toHaveValue(data.testFirstName);
      await profilePage.lastName.clear();
      await profilePage.lastName.fill(data.testLastName);
      await expect(profilePage.lastName).toHaveValue(data.testLastName);
    });
  });

  // --- TC_PROFILE_005 ---
  test('TC_PROFILE_005: Gender radio labels (Male, Female, Other) are visible', async () => {
    const data = testData.TC_PROFILE_005;
    await annotate({ id: 'TC_PROFILE_005', title: 'Gender radio labels (Male, Female, Other) are visible', priority: 'Medium', description: 'All three gender option labels visible.' });

    await allure.step('Sign in and open Profile', async () => {
      await profilePage.ensureAuthenticatedProfile(data.validStudentSession, data.loginUrl, data.profileUrl);
    });
    await allure.step('Verify gender labels', async () => {
      await expect(profilePage.genderMale).toBeVisible();
      await expect(profilePage.genderFemale).toBeVisible();
      await expect(profilePage.genderOther).toBeVisible();
    });
  });

  // --- TC_PROFILE_006 ---
  test('TC_PROFILE_006: Role labels (Parent, Teacher, Student, Professional) are visible', async () => {
    const data = testData.TC_PROFILE_006;
    await annotate({ id: 'TC_PROFILE_006', title: 'Role labels (Parent, Teacher, Student, Professional) are visible', priority: 'Medium', description: 'All four You Are role labels visible.' });

    await allure.step('Sign in and open Profile', async () => {
      await profilePage.ensureAuthenticatedProfile(data.validStudentSession, data.loginUrl, data.profileUrl);
    });
    await allure.step('Verify role labels', async () => {
      await expect(profilePage.roleParent).toBeVisible();
      await expect(profilePage.roleTeacher).toBeVisible();
      await expect(profilePage.roleStudent).toBeVisible();
      await expect(profilePage.roleProfessional).toBeVisible();
    });
  });

  // --- TC_PROFILE_007 ---
  test('TC_PROFILE_007: City, Country, and Phone Number fields are editable', async () => {
    const data = testData.TC_PROFILE_007;
    await annotate({ id: 'TC_PROFILE_007', title: 'City, Country, and Phone Number fields are editable', priority: 'High', description: 'City, Country, Phone Number accept typed input.' });

    await allure.step('Sign in and open Profile', async () => {
      await profilePage.ensureAuthenticatedProfile(data.validStudentSession, data.loginUrl, data.profileUrl);
    });
    await allure.step('Edit City, Country, Phone', async () => {
      await profilePage.city.clear();
      await profilePage.city.fill(data.testCity);
      await expect(profilePage.city).toHaveValue(data.testCity);
      await profilePage.country.clear();
      await profilePage.country.fill(data.testCountry);
      await expect(profilePage.country).toHaveValue(data.testCountry);
      await profilePage.phoneNumber.clear();
      await profilePage.phoneNumber.fill(data.testPhone);
      await expect(profilePage.phoneNumber).toHaveValue(data.testPhone);
    });
  });

  // --- TC_PROFILE_008 ---
  test('TC_PROFILE_008: Update my Profile button is visible and clickable', async () => {
    const data = testData.TC_PROFILE_008;
    await annotate({ id: 'TC_PROFILE_008', title: 'Update my Profile button is visible and clickable', priority: 'High', description: 'Update my Profile button visible and clickable without crash.' });

    await allure.step('Sign in and open Profile', async () => {
      await profilePage.ensureAuthenticatedProfile(data.validStudentSession, data.loginUrl, data.profileUrl);
    });
    await allure.step('Click Update my Profile', async () => {
      await expect(profilePage.updateProfileButton).toBeVisible();
      await profilePage.updateProfileButton.click();
      await profilePage.page.waitForTimeout(2000);
    });
    await allure.step('Verify page stable', async () => {
      await expect(profilePage.myProfileHeading).toBeVisible();
    });
  });

  // --- TC_PROFILE_009 ---
  test('TC_PROFILE_009: Educational Info tab loads Institution Name and Passing Year fields', async () => {
    const data = testData.TC_PROFILE_009;
    await annotate({ id: 'TC_PROFILE_009', title: 'Educational Info tab loads Institution Name and Passing Year fields', priority: 'High', description: 'Educational Info tab shows Institution Name and Passing Year.' });

    await allure.step('Sign in and open Profile', async () => {
      await profilePage.ensureAuthenticatedProfile(data.validStudentSession, data.loginUrl, data.profileUrl);
    });
    await allure.step('Switch to Educational Info', async () => {
      await profilePage.switchToEducationalInfo();
    });
    await allure.step('Verify fields', async () => {
      await expect(profilePage.institutionName).toBeVisible();
      await expect(profilePage.passingYear).toBeVisible();
    });
  });

  // --- TC_PROFILE_010 ---
  test('TC_PROFILE_010: Current Education checkbox is present on Educational Info tab', async () => {
    const data = testData.TC_PROFILE_010;
    await annotate({ id: 'TC_PROFILE_010', title: 'Current Education checkbox is present on Educational Info tab', priority: 'Medium', description: 'CSS fallback .chakra-checkbox__control checkbox is present.' });

    await allure.step('Sign in and open Profile', async () => {
      await profilePage.ensureAuthenticatedProfile(data.validStudentSession, data.loginUrl, data.profileUrl);
    });
    await allure.step('Switch to Educational Info', async () => {
      await profilePage.switchToEducationalInfo();
    });
    await allure.step('Verify checkbox', async () => {
      await expect(profilePage.currentEducationCheckbox.first()).toBeVisible();
    });
  });

  // --- TC_PROFILE_011 ---
  test('TC_PROFILE_011: Settings tab loads Account Settings heading and Change Password button', async () => {
    const data = testData.TC_PROFILE_011;
    await annotate({ id: 'TC_PROFILE_011', title: 'Settings tab loads Account Settings heading and Change Password button', priority: 'High', description: 'Settings tab shows Account Settings heading and Change Password.' });

    await allure.step('Sign in and open Profile', async () => {
      await profilePage.ensureAuthenticatedProfile(data.validStudentSession, data.loginUrl, data.profileUrl);
    });
    await allure.step('Switch to Settings', async () => {
      await profilePage.switchToSettings();
    });
    await allure.step('Verify Settings chrome', async () => {
      await expect(profilePage.accountSettingsHeading).toBeVisible();
      await expect(profilePage.changePasswordButton).toBeVisible();
    });
  });

  // --- TC_PROFILE_012 ---
  test('TC_PROFILE_012: Tab switching between Personal Info, Educational Info, Settings stays stable', async () => {
    const data = testData.TC_PROFILE_012;
    await annotate({ id: 'TC_PROFILE_012', title: 'Tab switching between Personal Info, Educational Info, Settings stays stable', priority: 'Medium', description: 'Switching all tabs keeps My Profile heading stable.' });

    await allure.step('Sign in and open Profile', async () => {
      await profilePage.ensureAuthenticatedProfile(data.validStudentSession, data.loginUrl, data.profileUrl);
    });
    await allure.step('Switch through tabs', async () => {
      await profilePage.switchToEducationalInfo();
      await expect(profilePage.myProfileHeading).toBeVisible();
      await profilePage.switchToSettings();
      await expect(profilePage.myProfileHeading).toBeVisible();
      await profilePage.switchToPersonalInfo();
      await expect(profilePage.firstName).toBeVisible();
    });
  });

  // --- TC_PROFILE_013 ---
  test('TC_PROFILE_013: Soft refresh keeps Profile chrome visible', async () => {
    const data = testData.TC_PROFILE_013;
    await annotate({ id: 'TC_PROFILE_013', title: 'Soft refresh keeps Profile chrome visible', priority: 'Medium', description: 'Refreshing Profile keeps heading visible.' });

    await allure.step('Sign in and open Profile', async () => {
      await profilePage.ensureAuthenticatedProfile(data.validStudentSession, data.loginUrl, data.profileUrl);
      await expect(profilePage.myProfileHeading).toBeVisible();
    });
    await allure.step('Refresh page', async () => {
      await profilePage.page.reload({ waitUntil: 'domcontentloaded' });
    });
    await allure.step('Re-verify heading', async () => {
      await expect(profilePage.myProfileHeading).toBeVisible();
    });
  });

  // --- TC_PROFILE_014 ---
  test('TC_PROFILE_014: Unauthenticated access does not show profile data', async ({ page }) => {
    const data = testData.TC_PROFILE_014;
    await annotate({ id: 'TC_PROFILE_014', title: 'Unauthenticated access does not show profile data', priority: 'High', description: 'Direct profile access without session redirects to login.' });

    await allure.step('Open Profile without authentication', async () => {
      await page.goto(data.profileUrl, { waitUntil: 'domcontentloaded' });
    });
    await allure.step('Verify login gate', async () => {
      await expect(page).toHaveURL(new RegExp(data.expectedLoginUrlPattern, 'i'));
      await expect(profilePage.myProfileHeading).toHaveCount(0);
    });
  });

  // --- TC_PROFILE_015 ---
  test('TC_PROFILE_015: Clearing First Name and clicking Update my Profile (edge)', async () => {
    const data = testData.TC_PROFILE_015;
    await annotate({ id: 'TC_PROFILE_015', title: 'Clearing First Name and clicking Update my Profile', priority: 'Medium', description: 'Empty First Name + Update does not crash; validation behavior observed.' });

    await allure.step('Sign in and open Profile', async () => {
      await profilePage.ensureAuthenticatedProfile(data.validStudentSession, data.loginUrl, data.profileUrl);
    });
    await allure.step('Clear First Name and submit', async () => {
      await profilePage.firstName.clear();
      await profilePage.updateProfileButton.click();
      await profilePage.page.waitForTimeout(2000);
    });
    await allure.step('Verify no crash', async () => {
      await expect(profilePage.myProfileHeading).toBeVisible();
    });
  });

  // --- TC_PROFILE_016 ---
  test('TC_PROFILE_016: User Options button is clickable without crash', async () => {
    const data = testData.TC_PROFILE_016;
    await annotate({ id: 'TC_PROFILE_016', title: 'User Options button is clickable without crash', priority: 'Low', description: 'User Options button clickable without crash.' });

    await allure.step('Sign in and open Profile', async () => {
      await profilePage.ensureAuthenticatedProfile(data.validStudentSession, data.loginUrl, data.profileUrl);
    });
    await allure.step('Click User Options', async () => {
      await profilePage.userOptionsButton.click();
      await profilePage.page.waitForTimeout(1000);
    });
    await allure.step('Verify no crash', async () => {
      await expect(profilePage.page.locator('body')).toBeVisible();
    });
  });

  // --- TC_PROFILE_017 ---
  test('TC_PROFILE_017: Date of Birth field is visible on Personal Info tab', async () => {
    const data = testData.TC_PROFILE_017;
    await annotate({ id: 'TC_PROFILE_017', title: 'Date of Birth field is visible on Personal Info tab', priority: 'Medium', description: 'Date of Birth label and input are visible on Personal Info tab.' });

    await allure.step('Sign in and open Profile', async () => {
      await profilePage.ensureAuthenticatedProfile(data.validStudentSession, data.loginUrl, data.profileUrl);
    });
    await allure.step('Verify Date of Birth', async () => {
      await expect(profilePage.dateOfBirthLabel).toBeVisible();
      await expect(profilePage.dateOfBirthInput).toBeVisible();
    });
  });

  // --- TC_PROFILE_018 ---
  test('TC_PROFILE_018: Profile completion percentage is displayed', async () => {
    const data = testData.TC_PROFILE_018;
    await annotate({ id: 'TC_PROFILE_018', title: 'Profile completion percentage is displayed', priority: 'Medium', description: 'Profile completion percentage text is visible.' });

    await allure.step('Sign in and open Profile', async () => {
      await profilePage.ensureAuthenticatedProfile(data.validStudentSession, data.loginUrl, data.profileUrl);
    });
    await allure.step('Verify completion percentage', async () => {
      await expect(profilePage.profileCompletionPercent).toBeVisible();
    });
  });

  // --- TC_PROFILE_019 ---
  test('TC_PROFILE_019: Back button is visible', async () => {
    const data = testData.TC_PROFILE_019;
    await annotate({ id: 'TC_PROFILE_019', title: 'Back button is visible', priority: 'Medium', description: 'Back button is visible on Profile page.' });

    await allure.step('Sign in and open Profile', async () => {
      await profilePage.ensureAuthenticatedProfile(data.validStudentSession, data.loginUrl, data.profileUrl);
    });
    await allure.step('Verify Back button', async () => {
      await expect(profilePage.backButton).toBeVisible();
    });
  });

  // --- TC_PROFILE_020 ---
  test('TC_PROFILE_020: File upload input exists for profile picture', async () => {
    const data = testData.TC_PROFILE_020;
    await annotate({ id: 'TC_PROFILE_020', title: 'File upload input exists for profile picture', priority: 'Low', description: 'File upload input[type="file"] is present in DOM.' });

    await allure.step('Sign in and open Profile', async () => {
      await profilePage.ensureAuthenticatedProfile(data.validStudentSession, data.loginUrl, data.profileUrl);
    });
    await allure.step('Verify file upload input', async () => {
      await expect(profilePage.fileUploadInput).toHaveCount(1);
    });
  });

  // --- TC_PROFILE_021 ---
  test('TC_PROFILE_021: Educational Information heading appears after switching to Educational Info tab', async () => {
    const data = testData.TC_PROFILE_021;
    await annotate({ id: 'TC_PROFILE_021', title: 'Educational Information heading appears after switching to Educational Info tab', priority: 'High', description: 'Educational Information heading visible after clicking Educational Info tab.' });

    await allure.step('Sign in and open Profile', async () => {
      await profilePage.ensureAuthenticatedProfile(data.validStudentSession, data.loginUrl, data.profileUrl);
    });
    await allure.step('Switch to Educational Info tab', async () => {
      await profilePage.educationalInfoTab.click();
    });
    await allure.step('Verify Educational Information heading', async () => {
      await expect(profilePage.educationalInfoHeading).toBeVisible();
    });
  });
});
