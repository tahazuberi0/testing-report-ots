# Test Cases

## Sign Up Page

**URL under test:** Sign Up page (e.g. `https://edu.offtheschool.io/signup`)

**Sources:** `signUp_Page_userflow.md`, `signUp_selectors.md`

### Coverage notes

- Scope is the **Sign Up** page only — form chrome, email/password fields, terms/privacy links, Sign in redirect, and interaction edge cases.
- The **Create Account** button (primary submit CTA) is described in the userflow but has **no selector** — full form submission cannot be automated. Listed under [Missing Selectors](#missing-selectors-userflow-vs-selectorsmd).
- The **Continue with Google** button (SSO flow) has **no selector** — Google OAuth flow is out of scope.
- Password strength indicator/checklist (8+ chars, uppercase, lowercase, number, special char) has **no selector** — cannot be asserted.
- Steps name UI elements as they appear in `signUp_selectors.md`; prefer role/label/text over brittle CSS (`.chakra-icon.css-2pij1h`, `.chakra-input__right-element`, `.css-11aznge`) and `.nth()` fallbacks.
- Test data lists **field names only** (no concrete values).
- Edge cases for password mismatch and empty submission observe behavior only — no validation error selectors exist.
- Alternative flows (Back to Home, Terms/Privacy page destinations) are partially covered; Back to Home has no standalone selector.
- **Brittle-selector notes:** Password toggle icons use deep CSS path selectors. Checkbox uses `.nth(5)` span with no semantic locator. Container wrapper uses `.css-11aznge`.

### Test Cases

#### TC_SIGNUP_001: Sign Up page loads with heading and form fields visible

- **Test Case ID:** TC_SIGNUP_001
- **Title:** Sign Up page loads with heading and form fields visible
- **Preconditions:** Browser can reach the Sign Up page; no authentication required.
- **Steps:**
  1. Navigate to `signUpUrl`.
  2. Locate heading **Create your free account**.
  3. Locate textbox **Email Address**.
  4. Locate textbox **Create Password**.
  5. Locate textbox **Confirm Password**.
- **Test data needed:** `signUpUrl`
- **Expected result:** Sign Up page loads with heading and all three form fields visible; page does not show a blank or error state.
- **Priority:** High

#### TC_SIGNUP_002: OTS Logo and subheading are visible

- **Test Case ID:** TC_SIGNUP_002
- **Title:** OTS Logo and subheading are visible
- **Preconditions:** User is on the Sign Up page.
- **Steps:**
  1. Locate image **OTS Logo**.
  2. Locate text **Start learning with Pakistan's** (subheading).
- **Test data needed:** `signUpUrl`
- **Expected result:** OTS Logo and subheading text are visible.
- **Priority:** High

#### TC_SIGNUP_003: Email Address label and textbox are present

- **Test Case ID:** TC_SIGNUP_003
- **Title:** Email Address label and textbox are present
- **Preconditions:** User is on the Sign Up page.
- **Steps:**
  1. Locate text **Email Address***.
  2. Locate textbox **Email Address**.
- **Test data needed:** `signUpUrl`
- **Expected result:** Email Address label (with asterisk) and textbox are both visible.
- **Priority:** High

#### TC_SIGNUP_004: Create Password and Confirm Password fields are present

- **Test Case ID:** TC_SIGNUP_004
- **Title:** Create Password and Confirm Password fields are present
- **Preconditions:** User is on the Sign Up page.
- **Steps:**
  1. Locate text **Create Password***.
  2. Locate textbox **Create Password**.
  3. Locate text **Confirm Password***.
  4. Locate textbox **Confirm Password**.
- **Test data needed:** `signUpUrl`
- **Expected result:** Both password labels (with asterisks) and textboxes are visible.
- **Priority:** High

#### TC_SIGNUP_005: Email and password fields accept typed input

- **Test Case ID:** TC_SIGNUP_005
- **Title:** Email and password fields accept typed input
- **Preconditions:** User is on the Sign Up page.
- **Steps:**
  1. Fill textbox **Email Address** with `testEmail`.
  2. Fill textbox **Create Password** with `testPassword`.
  3. Fill textbox **Confirm Password** with `testPassword`.
- **Test data needed:** `signUpUrl`, `testEmail`, `testPassword`
- **Expected result:** All three fields accept typed input without error; values appear in the inputs.
- **Priority:** High

#### TC_SIGNUP_006: Terms checkbox text and links are visible

- **Test Case ID:** TC_SIGNUP_006
- **Title:** Terms checkbox text and links are visible
- **Preconditions:** User is on the Sign Up page.
- **Steps:**
  1. Locate text **I agree to the Terms and**.
  2. Locate text **Terms**.
  3. Locate text **Privacy Policy**.
- **Test data needed:** `signUpUrl`
- **Expected result:** Terms checkbox label text, Terms link, and Privacy Policy link are all visible.
- **Priority:** High

#### TC_SIGNUP_007: Terms and Privacy Policy links are clickable

- **Test Case ID:** TC_SIGNUP_007
- **Title:** Terms and Privacy Policy links are clickable
- **Preconditions:** User is on the Sign Up page.
- **Steps:**
  1. Locate text **Terms**.
  2. Click **Terms**.
  3. Observe navigation (or new tab).
  4. Return to Sign Up page.
  5. Locate text **Privacy Policy**.
  6. Click **Privacy Policy**.
  7. Observe navigation (or new tab).
- **Test data needed:** `signUpUrl`
- **Expected result:** Both links are clickable and navigate to their respective pages without crash. Page may open in a new tab.
- **Priority:** Medium

#### TC_SIGNUP_008: Sign in link navigates to login page

- **Test Case ID:** TC_SIGNUP_008
- **Title:** Sign in link navigates to login page
- **Preconditions:** User is on the Sign Up page.
- **Steps:**
  1. Locate text **Already have an account? Sign**.
  2. Locate text **Sign in**.
  3. Click **Sign in**.
- **Test data needed:** `signUpUrl`, `expectedLoginUrlPattern`
- **Expected result:** User is redirected to the login page (`/login`) without error.
- **Priority:** High

#### TC_SIGNUP_009: "or with email" divider is visible

- **Test Case ID:** TC_SIGNUP_009
- **Title:** "or with email" divider is visible
- **Preconditions:** User is on the Sign Up page.
- **Steps:**
  1. Locate text **or with email**.
- **Test data needed:** `signUpUrl`
- **Expected result:** The "or with email" section divider is visible, separating the social login area from the email form.
- **Priority:** Low

#### TC_SIGNUP_010: Soft refresh keeps Sign Up chrome visible

- **Test Case ID:** TC_SIGNUP_010
- **Title:** Soft refresh keeps Sign Up chrome visible
- **Preconditions:** User is on the Sign Up page with heading **Create your free account** visible.
- **Steps:**
  1. Confirm heading **Create your free account** is visible.
  2. Refresh the browser page.
  3. Re-check heading **Create your free account**.
- **Test data needed:** `signUpUrl`
- **Expected result:** After refresh, Sign Up chrome remains visible; page does not stay blank or error.
- **Priority:** Medium

#### TC_SIGNUP_011: Password mismatch edge case (different Create/Confirm values)

- **Test Case ID:** TC_SIGNUP_011
- **Title:** Password mismatch edge case (different Create/Confirm values)
- **Preconditions:** User is on the Sign Up page.
- **Steps:**
  1. Fill textbox **Email Address** with `testEmail`.
  2. Fill textbox **Create Password** with `testPassword`.
  3. Fill textbox **Confirm Password** with `mismatchPassword` (different value).
  4. Observe page behavior (attempt submission if Create Account selector were available).
- **Test data needed:** `signUpUrl`, `testEmail`, `testPassword`, `mismatchPassword`
- **Expected result:** Page remains stable; ideally a validation error prevents submission. **Note:** No **Create Account** button selector and no validation error selector exist — observe behavior only; cannot complete full submission flow.
- **Priority:** Medium

#### TC_SIGNUP_012: Empty form submission edge case

- **Test Case ID:** TC_SIGNUP_012
- **Title:** Empty form submission edge case
- **Preconditions:** User is on the Sign Up page.
- **Steps:**
  1. Ensure textbox **Email Address**, textbox **Create Password**, and textbox **Confirm Password** are all empty.
  2. Observe page behavior (attempt submission if Create Account selector were available).
- **Test data needed:** `signUpUrl`
- **Expected result:** Page remains stable; ideally validation prevents submission. **Note:** No **Create Account** button selector exists — cannot trigger actual submission; observe field-level validation only.
- **Priority:** Medium

---

### Missing Selectors (userflow vs selectors.md)

The following are referenced in `signUp_Page_userflow.md` (or needed for Sign Up page automation) but **are not present** in `signUp_selectors.md`. No executable test steps were invented for them.

| # | Userflow / need | Gap |
|---|-----------------|-----|
| 1 | **Create Account** button (primary submit CTA) | No locator — cannot automate form submission |
| 2 | **Continue with Google** button (SSO) | No locator — cannot automate Google OAuth flow |
| 3 | Password strength indicator/checklist (8+ chars, uppercase, lowercase, number, special char) | No locator |
| 4 | "Back to Home" link (standalone) | No locator; only in concatenated container text `getByText('Back to HomeCreate your free')` |
| 5 | Actual checkbox input element for Terms agreement | No locator; only label text and brittle `span.nth(5)` |
| 6 | Email format validation error message | No locator |
| 7 | Password mismatch validation error message | No locator |
| 8 | Account creation success message / redirect confirmation | No locator |
| 9 | Google OAuth popup / window controls | Out of scope — external Google UI |

**Additional note:** The missing **Create Account** button is the most critical gap — without it, the primary happy-path signup flow cannot be completed. The password toggle selectors (`.chakra-icon.css-2pij1h > path` and deep `.chakra-input__right-element` chain) are very brittle and may break with UI updates.

---

### Newly Added Test Cases (gap resolution)

#### TC_SIGNUP_013: Create Account button is visible on page load

- **Test Case ID:** TC_SIGNUP_013
- **Title:** Create Account button is visible on page load
- **Preconditions:** User is on the Sign Up page.
- **Steps:**
  1. Navigate to `signUpUrl`.
  2. Locate button **Create Account**.
- **Test data needed:** `signUpUrl`
- **Expected result:** Create Account button is visible and enabled.
- **Priority:** High

#### TC_SIGNUP_014: Continue with Google button is visible

- **Test Case ID:** TC_SIGNUP_014
- **Title:** Continue with Google button is visible
- **Preconditions:** User is on the Sign Up page.
- **Steps:**
  1. Navigate to `signUpUrl`.
  2. Locate button **Continue with Google**.
- **Test data needed:** `signUpUrl`
- **Expected result:** Continue with Google button is visible.
- **Priority:** High

#### TC_SIGNUP_015: Back to Home link is visible and clickable

- **Test Case ID:** TC_SIGNUP_015
- **Title:** Back to Home link is visible and clickable
- **Preconditions:** User is on the Sign Up page.
- **Steps:**
  1. Navigate to `signUpUrl`.
  2. Locate text **Back to Home**.
  3. Click **Back to Home**.
- **Test data needed:** `signUpUrl`, `expectedHomeUrlPattern`
- **Expected result:** Back to Home link is visible; clicking navigates to the home page.
- **Priority:** Medium

#### TC_SIGNUP_016: Terms agreement checkbox can be toggled

- **Test Case ID:** TC_SIGNUP_016
- **Title:** Terms agreement checkbox can be toggled
- **Preconditions:** User is on the Sign Up page.
- **Steps:**
  1. Navigate to `signUpUrl`.
  2. Locate checkbox (role: checkbox).
  3. Verify checkbox is initially unchecked.
  4. Click checkbox.
  5. Verify checkbox is now checked.
- **Test data needed:** `signUpUrl`
- **Expected result:** Checkbox toggles between checked and unchecked states.
- **Priority:** Medium
