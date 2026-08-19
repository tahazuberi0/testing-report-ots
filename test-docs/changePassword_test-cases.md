# Test Cases

## Change Password Page

**URL under test:** Reached via Profile Settings > **Change Password** button

**Sources:** `changePassword_userflow.md`, `changePasswrord_selectors.md`

### Coverage notes

- Scope is the **Change Password** flow only — email entry, Send OTP, Verification OTP transition, and Back to Profile exit.
- The downstream OTP entry, new password/confirm password fields, and submit/confirmation are described in the userflow but have **no selectors** — listed under [Missing Selectors](#missing-selectors-userflow-vs-selectorsmd).
- Steps name UI elements as they appear in `changePasswrord_selectors.md`; all available selectors use role/label/text locators (no CSS or nth fallbacks needed).
- Test data lists **field names only** (no concrete values).
- Email validation behavior (empty field, invalid format) is implied by the userflow ("system validates the email format") but no validation error selector exists — steps observe behavior only.
- The selectors file filename has a typo ("Passwrord") — referenced as-is.
- **TC_CHGPWD_003/004/005 warning:** Clicking Send OTP with a real email will actually send an OTP to that inbox. Test data should use a controlled test email to avoid unintended side effects.

### Test Cases

#### TC_CHGPWD_001: Change Password page loads with heading and email field visible

- **Test Case ID:** TC_CHGPWD_001
- **Title:** Change Password page loads with heading and email field visible
- **Preconditions:** Student has a valid authenticated session; has navigated to Profile > Settings and clicked **Change Password** button.
- **Steps:**
  1. From Profile Settings, click button **Change Password**.
  2. Locate heading **Change Password**.
  3. Locate textbox **Email Address**.
- **Test data needed:** `profileUrl`, `loginUrl`, `validStudentSession`
- **Expected result:** Change Password page loads with heading and email input visible; page does not show a blank or error state.
- **Priority:** High

#### TC_CHGPWD_002: Email Address label and textbox are present

- **Test Case ID:** TC_CHGPWD_002
- **Title:** Email Address label and textbox are present
- **Preconditions:** Student is on the Change Password page.
- **Steps:**
  1. Locate text **Email Address***.
  2. Locate textbox **Email Address**.
- **Test data needed:** `profileUrl`, `loginUrl`, `validStudentSession`
- **Expected result:** Email Address label (with asterisk) and textbox are both visible.
- **Priority:** High

#### TC_CHGPWD_003: Send OTP button is visible and clickable with valid email

- **Test Case ID:** TC_CHGPWD_003
- **Title:** Send OTP button is visible and clickable with valid email
- **Preconditions:** Student is on the Change Password page.
- **Steps:**
  1. Locate textbox **Email Address**.
  2. Fill **Email Address** with `validEmail`.
  3. Locate button **Send OTP**.
  4. Click **Send OTP**.
- **Test data needed:** `profileUrl`, `loginUrl`, `validStudentSession`, `validEmail`
- **Expected result:** Send OTP button is visible, accepts the click, and the page transitions (no crash). **Note:** This will send an actual OTP to the email address.
- **Priority:** High

#### TC_CHGPWD_004: Clicking Send OTP transitions to Verification OTP screen

- **Test Case ID:** TC_CHGPWD_004
- **Title:** Clicking Send OTP transitions to Verification OTP screen
- **Preconditions:** Student is on the Change Password page with a valid email entered.
- **Steps:**
  1. Fill textbox **Email Address** with `validEmail`.
  2. Click button **Send OTP**.
  3. Locate heading **Verification OTP**.
- **Test data needed:** `profileUrl`, `loginUrl`, `validStudentSession`, `validEmail`
- **Expected result:** After clicking Send OTP, the UI transitions to show the **Verification OTP** heading, confirming OTP was sent successfully.
- **Priority:** High

#### TC_CHGPWD_005: Verification OTP heading and subtext are visible after Send OTP

- **Test Case ID:** TC_CHGPWD_005
- **Title:** Verification OTP heading and subtext are visible after Send OTP
- **Preconditions:** Student has submitted a valid email via Send OTP and the UI has transitioned.
- **Steps:**
  1. Fill textbox **Email Address** with `validEmail`.
  2. Click button **Send OTP**.
  3. Locate heading **Verification OTP**.
  4. Locate text **Verification OTPWe have sent** (subtext/info container).
- **Test data needed:** `profileUrl`, `loginUrl`, `validStudentSession`, `validEmail`
- **Expected result:** Both the Verification OTP heading and the "We have sent" subtext container are visible, confirming the OTP verification screen rendered correctly.
- **Priority:** High

#### TC_CHGPWD_006: Back to Profile button navigates away from Change Password

- **Test Case ID:** TC_CHGPWD_006
- **Title:** Back to Profile button navigates away from Change Password
- **Preconditions:** Student is on the Change Password page.
- **Steps:**
  1. Locate button **Back to Profile**.
  2. Click **Back to Profile**.
- **Test data needed:** `profileUrl`, `loginUrl`, `validStudentSession`
- **Expected result:** Student is navigated back to the Profile dashboard without making any credential changes; no error or crash.
- **Priority:** High

#### TC_CHGPWD_007: Send OTP with empty email field (edge — validation)

- **Test Case ID:** TC_CHGPWD_007
- **Title:** Send OTP with empty email field (edge — validation)
- **Preconditions:** Student is on the Change Password page.
- **Steps:**
  1. Ensure textbox **Email Address** is empty (clear if needed).
  2. Click button **Send OTP**.
  3. Observe page behavior.
- **Test data needed:** `profileUrl`, `loginUrl`, `validStudentSession`
- **Expected result:** Page does not transition to Verification OTP; either a validation error is shown or the button has no effect. Page remains stable without crash. **Note:** No validation error selector exists — observe behavior only.
- **Priority:** Medium

#### TC_CHGPWD_008: Send OTP with invalid email format (edge — validation)

- **Test Case ID:** TC_CHGPWD_008
- **Title:** Send OTP with invalid email format (edge — validation)
- **Preconditions:** Student is on the Change Password page.
- **Steps:**
  1. Fill textbox **Email Address** with `invalidEmail` (e.g. "notanemail").
  2. Click button **Send OTP**.
  3. Observe page behavior.
- **Test data needed:** `profileUrl`, `loginUrl`, `validStudentSession`, `invalidEmail`
- **Expected result:** Page does not transition to Verification OTP; either a validation error is shown or the button has no effect. Page remains stable without crash. **Note:** No validation error selector exists — observe behavior only.
- **Priority:** Medium

#### TC_CHGPWD_009: Double-click Send OTP does not break the flow

- **Test Case ID:** TC_CHGPWD_009
- **Title:** Double-click Send OTP does not break the flow
- **Preconditions:** Student is on the Change Password page with a valid email entered.
- **Steps:**
  1. Fill textbox **Email Address** with `validEmail`.
  2. Rapidly double-click button **Send OTP**.
  3. Observe resulting state.
- **Test data needed:** `profileUrl`, `loginUrl`, `validStudentSession`, `validEmail`
- **Expected result:** App reaches a single stable Verification OTP screen (or stays on Change Password if rate-limited); no crash, blank page, or duplicate error state.
- **Priority:** Medium

---

### Missing Selectors (userflow vs selectors.md)

The following are referenced in `changePassword_userflow.md` (or needed for Change Password automation) but **are not present** in `changePasswrord_selectors.md`. No executable test steps were invented for them.

| # | Userflow / need | Gap |
|---|-----------------|-----|
| 1 | OTP input fields (entering the verification code) | No locator |
| 2 | New password field | No locator |
| 3 | Confirm password field | No locator |
| 4 | Submit / confirm button on OTP verification screen | No locator |
| 5 | Success / confirmation message after password change | No locator |
| 6 | Email format validation error message | No locator |
| 7 | Invalid / unregistered email error message | No locator |
| 8 | Rate limiting or "OTP already sent" feedback | No locator |

**Additional note:** The entire downstream password reset completion flow (steps 3 in the userflow: OTP entry, new password, confirm, success message) cannot be automated with the current selectors. Only the email entry, Send OTP trigger, and Verification OTP screen transition are covered.
