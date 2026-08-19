# Test Cases

## My Profile Page

**URL under test:** `https://edu.offtheschool.io/dashboard/profile`

**Sources:** `profilePage_userflow.md`, `profilePage_selectors.md`

### Coverage notes

- Scope is the **My Profile** page only — three tabs (Personal Info, Educational Info, Settings), profile avatar/picture, form fields, and session edge cases.
- Personal Info form covers First Name, Last Name, City, Country, Phone Number, Gender labels, Role labels, and **Update my Profile** button.
- Educational Info form covers Institution Name, Passing Year, Current Education checkbox, and **Update my Profile** button.
- Settings tab covers **Account Settings** heading and **Change Password** button.
- Date of Birth field, profile completion widget, checklist items, Back button, success notification, and file upload input are described in the userflow but have **no selector** — listed under [Missing Selectors](#missing-selectors-userflow-vs-selectorsmd).
- Steps name UI elements as they appear in `profilePage_selectors.md`; prefer role/label/text over brittle CSS (`.chakra-checkbox__control`).
- Test data lists **field names only** (no concrete values).
- The Educational Info heading selector uses `{ name: 'Personal Information' }` which appears to be a copy-paste error in selectors.md — flagged in Missing Selectors.
- Alternative sidebar navigation (Dashboard, Switch Class, etc.) is **out of scope** (not in this selectors file).
- **Brittle-selector note:** Current Education checkbox uses `.chakra-checkbox__control` — CSS fallback with no role/label locator.

### Test Cases

#### TC_PROFILE_001: Authenticated student lands on Profile with My Profile heading visible

- **Test Case ID:** TC_PROFILE_001
- **Title:** Authenticated student lands on Profile with My Profile heading visible
- **Preconditions:** Student has a valid authenticated session; browser can reach the Profile page.
- **Steps:**
  1. Navigate while authenticated (`validStudentSession`) to `profileUrl`.
  2. Locate heading **My Profile**.
- **Test data needed:** `profileUrl`, `loginUrl`, `validStudentSession`
- **Expected result:** My Profile page loads with main heading visible; page does not show a blank or error state.
- **Priority:** High

#### TC_PROFILE_002: User Avatar and Change profile picture button are visible

- **Test Case ID:** TC_PROFILE_002
- **Title:** User Avatar and Change profile picture button are visible
- **Preconditions:** Authenticated student is on the Profile page.
- **Steps:**
  1. Locate image **User Avatar**.
  2. Locate button **Change profile picture**.
- **Test data needed:** `profileUrl`, `loginUrl`, `validStudentSession`
- **Expected result:** User Avatar image and Change profile picture button are visible.
- **Priority:** High

#### TC_PROFILE_003: Personal Info tab is active by default with form fields visible

- **Test Case ID:** TC_PROFILE_003
- **Title:** Personal Info tab is active by default with form fields visible
- **Preconditions:** Authenticated student is on the Profile page.
- **Steps:**
  1. Locate button **Personal Info** (tab).
  2. Locate textbox **First Name**.
  3. Locate textbox **Last Name**.
- **Test data needed:** `profileUrl`, `loginUrl`, `validStudentSession`
- **Expected result:** Personal Info tab is present/active, and First Name and Last Name fields are visible by default on page load.
- **Priority:** High

#### TC_PROFILE_004: First Name and Last Name fields are editable

- **Test Case ID:** TC_PROFILE_004
- **Title:** First Name and Last Name fields are editable
- **Preconditions:** Authenticated student is on the Profile page with Personal Info tab active.
- **Steps:**
  1. Locate textbox **First Name**.
  2. Clear and type a test value into **First Name**.
  3. Locate textbox **Last Name**.
  4. Clear and type a test value into **Last Name**.
- **Test data needed:** `profileUrl`, `loginUrl`, `validStudentSession`, `testFirstName`, `testLastName`
- **Expected result:** Both fields accept typed input without error; values appear in the input fields.
- **Priority:** High

#### TC_PROFILE_005: Gender radio labels (Male, Female, Other) are visible

- **Test Case ID:** TC_PROFILE_005
- **Title:** Gender radio labels (Male, Female, Other) are visible
- **Preconditions:** Authenticated student is on the Profile page with Personal Info tab active.
- **Steps:**
  1. Locate label **Male**.
  2. Locate label **Female**.
  3. Locate label **Other**.
- **Test data needed:** `profileUrl`, `loginUrl`, `validStudentSession`
- **Expected result:** All three gender option labels are visible and selectable.
- **Priority:** Medium

#### TC_PROFILE_006: Role labels (Parent, Teacher, Student, Professional) are visible

- **Test Case ID:** TC_PROFILE_006
- **Title:** Role labels (Parent, Teacher, Student, Professional) are visible
- **Preconditions:** Authenticated student is on the Profile page with Personal Info tab active.
- **Steps:**
  1. Locate label **Parent**.
  2. Locate label **Teacher**.
  3. Locate label **Student**.
  4. Locate label **Professional**.
- **Test data needed:** `profileUrl`, `loginUrl`, `validStudentSession`
- **Expected result:** All four "You Are" role labels are visible and selectable.
- **Priority:** Medium

#### TC_PROFILE_007: City, Country, and Phone Number fields are editable

- **Test Case ID:** TC_PROFILE_007
- **Title:** City, Country, and Phone Number fields are editable
- **Preconditions:** Authenticated student is on the Profile page with Personal Info tab active.
- **Steps:**
  1. Locate textbox **City**.
  2. Clear and type a test value into **City**.
  3. Locate textbox **Country**.
  4. Clear and type a test value into **Country**.
  5. Locate textbox **Phone Number**.
  6. Clear and type a test value into **Phone Number**.
- **Test data needed:** `profileUrl`, `loginUrl`, `validStudentSession`, `testCity`, `testCountry`, `testPhone`
- **Expected result:** All three fields accept typed input without error.
- **Priority:** High

#### TC_PROFILE_008: Update my Profile button is visible and clickable

- **Test Case ID:** TC_PROFILE_008
- **Title:** Update my Profile button is visible and clickable
- **Preconditions:** Authenticated student is on the Profile page with Personal Info tab active.
- **Steps:**
  1. Locate button **Update my Profile**.
  2. Click **Update my Profile**.
- **Test data needed:** `profileUrl`, `loginUrl`, `validStudentSession`
- **Expected result:** Button is visible, clickable, and does not crash the page. **Note:** Success notification cannot be asserted — no selector available.
- **Priority:** High

#### TC_PROFILE_009: Educational Info tab loads Institution Name and Passing Year fields

- **Test Case ID:** TC_PROFILE_009
- **Title:** Educational Info tab loads Institution Name and Passing Year fields
- **Preconditions:** Authenticated student is on the Profile page.
- **Steps:**
  1. Click button **Educational Info** (tab).
  2. Locate textbox **Institution Name**.
  3. Locate spinbutton **Passing Year**.
- **Test data needed:** `profileUrl`, `loginUrl`, `validStudentSession`
- **Expected result:** Educational Info tab activates, and Institution Name and Passing Year fields are visible.
- **Priority:** High

#### TC_PROFILE_010: Current Education checkbox is present on Educational Info tab

- **Test Case ID:** TC_PROFILE_010
- **Title:** Current Education checkbox is present on Educational Info tab
- **Preconditions:** Authenticated student is on the Profile page with Educational Info tab active.
- **Steps:**
  1. Click button **Educational Info** (tab) if not already active.
  2. Locate Current Education checkbox (`.chakra-checkbox__control` — CSS fallback per selectors.md).
- **Test data needed:** `profileUrl`, `loginUrl`, `validStudentSession`
- **Expected result:** Checkbox element is present and clickable.
- **Priority:** Medium

#### TC_PROFILE_011: Settings tab loads Account Settings heading and Change Password button

- **Test Case ID:** TC_PROFILE_011
- **Title:** Settings tab loads Account Settings heading and Change Password button
- **Preconditions:** Authenticated student is on the Profile page.
- **Steps:**
  1. Click button **Settings** (tab).
  2. Locate heading **Account Settings**.
  3. Locate button **Change Password**.
- **Test data needed:** `profileUrl`, `loginUrl`, `validStudentSession`
- **Expected result:** Settings tab activates with Account Settings heading and Change Password button visible.
- **Priority:** High

#### TC_PROFILE_012: Tab switching between Personal Info, Educational Info, Settings stays stable

- **Test Case ID:** TC_PROFILE_012
- **Title:** Tab switching between Personal Info, Educational Info, Settings stays stable
- **Preconditions:** Authenticated student is on the Profile page.
- **Steps:**
  1. Click button **Educational Info** (tab).
  2. Confirm heading **My Profile** is still visible.
  3. Click button **Settings** (tab).
  4. Confirm heading **My Profile** is still visible.
  5. Click button **Personal Info** (tab).
  6. Confirm textbox **First Name** is visible.
- **Test data needed:** `profileUrl`, `loginUrl`, `validStudentSession`
- **Expected result:** Switching between all three tabs does not crash or blank the page; My Profile heading remains stable throughout.
- **Priority:** Medium

#### TC_PROFILE_013: Soft refresh keeps Profile chrome visible

- **Test Case ID:** TC_PROFILE_013
- **Title:** Soft refresh keeps Profile chrome visible
- **Preconditions:** Authenticated student is on the Profile page with heading **My Profile** visible.
- **Steps:**
  1. Confirm heading **My Profile** is visible.
  2. Refresh the browser page.
  3. Re-check heading **My Profile**.
- **Test data needed:** `profileUrl`, `loginUrl`, `validStudentSession`
- **Expected result:** After refresh, session remains such that Profile chrome stays visible; page does not stay blank or error.
- **Priority:** Medium

#### TC_PROFILE_014: Unauthenticated access does not show profile data

- **Test Case ID:** TC_PROFILE_014
- **Title:** Unauthenticated access does not show profile data
- **Preconditions:** Browser has no valid student session (`unauthenticatedSession`).
- **Steps:**
  1. Navigate directly to `profileUrl` without logging in.
  2. Observe whether heading **My Profile** or textbox **First Name** appear.
- **Test data needed:** `profileUrl`, `unauthenticatedSession`, `expectedLoginUrlPattern`
- **Expected result:** Unauthenticated user is redirected to login/sign-in and does **not** see authenticated Profile content; no personal data leak.
- **Priority:** High

#### TC_PROFILE_015: Clearing First Name and clicking Update my Profile (edge — validation behavior)

- **Test Case ID:** TC_PROFILE_015
- **Title:** Clearing First Name and clicking Update my Profile (edge — validation behavior)
- **Preconditions:** Authenticated student is on the Profile page with Personal Info tab active.
- **Steps:**
  1. Locate textbox **First Name**.
  2. Clear **First Name** (leave empty).
  3. Click button **Update my Profile**.
  4. Observe page behavior.
- **Test data needed:** `profileUrl`, `loginUrl`, `validStudentSession`
- **Expected result:** Page either shows a validation error preventing save or saves and remains stable. No crash or blank page. **Note:** Validation error selector is not in selectors.md — observe behavior only.
- **Priority:** Medium

#### TC_PROFILE_016: User Options button is clickable without crash

- **Test Case ID:** TC_PROFILE_016
- **Title:** User Options button is clickable without crash
- **Preconditions:** Authenticated student is on the Profile page.
- **Steps:**
  1. Locate button **User Options**.
  2. Click **User Options**.
  3. Confirm heading **My Profile** is still visible (or a menu appeared without crash).
- **Test data needed:** `profileUrl`, `loginUrl`, `validStudentSession`
- **Expected result:** Button is clickable without crash; page stays stable or a dropdown menu appears.
- **Priority:** Low

---

### Missing Selectors (userflow vs selectors.md)

The following are referenced in `profilePage_userflow.md` (or needed for Profile page automation) but **are not present** in `profilePage_selectors.md`. No executable test steps were invented for them.

| # | Userflow / need | Gap |
|---|-----------------|-----|
| 1 | Date of Birth field | No locator |
| 2 | Profile completion widget / percentage indicator (e.g. 57%) | No locator |
| 3 | Personal / Education checklist items (checkmarks) | No locator |
| 4 | Back ("← Back") button | No locator |
| 5 | Success notification after saving profile | No locator |
| 6 | File upload input for profile picture | No locator (only **Change profile picture** button exists) |
| 7 | Educational Info section heading | Selector uses `{ name: 'Personal Information' }` — appears to be a copy-paste error |
| 8 | Validation error messages (e.g. empty required fields, DOB age check, phone digit count) | No locator |
| 9 | Sidebar navigation (Dashboard, Switch Class, Quiz Tracking, Leaderboard) | Out of scope for this selectors file |

#### TC_PROFILE_017: Date of Birth field is visible on Personal Info tab

- **Test Case ID:** TC_PROFILE_017
- **Title:** Date of Birth field is visible on Personal Info tab
- **Preconditions:** Authenticated student is on the Profile page with Personal Info tab active.
- **Steps:**
  1. Locate text **Date of Birth**.
  2. Locate textbox **Date of Birth**.
- **Test data needed:** `profileUrl`, `loginUrl`, `validStudentSession`
- **Expected result:** Both label and input are visible.
- **Priority:** Medium

#### TC_PROFILE_018: Profile completion percentage is displayed

- **Test Case ID:** TC_PROFILE_018
- **Title:** Profile completion percentage is displayed
- **Preconditions:** Authenticated student is on the Profile page.
- **Steps:**
  1. Locate text matching `/\d+%/`.
- **Test data needed:** `profileUrl`, `loginUrl`, `validStudentSession`
- **Expected result:** Percentage text is visible.
- **Priority:** Medium

#### TC_PROFILE_019: Back button is visible

- **Test Case ID:** TC_PROFILE_019
- **Title:** Back button is visible
- **Preconditions:** Authenticated student is on the Profile page.
- **Steps:**
  1. Locate button **Back**.
- **Test data needed:** `profileUrl`, `loginUrl`, `validStudentSession`
- **Expected result:** Back button is visible.
- **Priority:** Medium

#### TC_PROFILE_020: File upload input exists for profile picture

- **Test Case ID:** TC_PROFILE_020
- **Title:** File upload input exists for profile picture
- **Preconditions:** Authenticated student is on the Profile page.
- **Steps:**
  1. Locate `input[type="file"]`.
- **Test data needed:** `profileUrl`, `loginUrl`, `validStudentSession`
- **Expected result:** File input is present in DOM.
- **Priority:** Low

#### TC_PROFILE_021: Educational Information heading appears after switching to Educational Info tab

- **Test Case ID:** TC_PROFILE_021
- **Title:** Educational Information heading appears after switching to Educational Info tab
- **Preconditions:** Authenticated student is on the Profile page.
- **Steps:**
  1. Click button **Educational Info**.
  2. Locate heading **Educational Information**.
- **Test data needed:** `profileUrl`, `loginUrl`, `validStudentSession`
- **Expected result:** Heading is visible.
- **Priority:** High

---

**Additional note:** The Educational Info heading selector in selectors.md is `page.getByRole('heading', { name: 'Personal Information' })` which likely matches the Personal Info tab heading, not the Educational Info section. This may need correction in the selectors document.
