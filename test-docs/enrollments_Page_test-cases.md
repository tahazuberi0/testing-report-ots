# Test Cases

## Enrollments Page

**URL under test:** `https://edu.offtheschool.io/dashboard/manage-enrollment`

**Sources:** `enrollments_Page_userflow.md`, `enrollments_Page_selectors.md`

### Coverage notes

- Scope is the **Manage Enrollments** page only — Primary Flow 1 (entry + documented chrome) and Primary Flow 2 (**Enroll in New Course** redirect). Alternative global-nav destinations are out of scope except using **Enrollments** as the entry control.
- Deep catalog/payment after enroll, and full unenroll/remove flows, are **out of scope** (no selectors for trash, confirm dialog, or per-class cards).
- Steps name UI elements as they appear in `enrollments_Page_selectors.md`; prefer role/label/text over brittle CSS (`.css-1iob08`) and concatenated Header Bar Text.
- Test data lists **field names only** (no concrete values).
- Userflow has **no form validation** on this page (view/click flows only). Negatives/edges cover session and interaction stability, not field validation.
- Userflow items with **no selector** are not given invented steps; they are listed under [Missing Selectors](#missing-selectors-userflow-vs-selectorsmd).
- **Brittle-selector note:** Content container uses `.css-1iob08`; Header Bar Text is the concatenated string **BackManage EnrollmentsEnroll**. Do not assert Class 6/1/2/9 names, ACTIVE badges, or hard-coded percentages (e.g. 5.7%).

### Test Cases

#### TC_ENROLL_001: Authenticated student opens Manage Enrollments via sidebar Enrollments

- **Test Case ID:** TC_ENROLL_001
- **Title:** Authenticated student opens Manage Enrollments via sidebar Enrollments
- **Preconditions:** Student has a valid authenticated session; browser can reach the student dashboard or Manage Enrollments.
- **Steps:**
  1. Navigate while authenticated (`validStudentSession`) to a page that exposes sidebar **Enrollments** (e.g. `dashboardUrl` or `manageEnrollmentUrl`).
  2. Locate sidebar nav group **Enrollments**.
  3. Click **Enrollments**.
  4. Locate heading **Manage Enrollments**.
- **Test data needed:** `dashboardUrl`, `manageEnrollmentUrl`, `validStudentSession`
- **Expected result:** Manage Enrollments page loads; heading **Manage Enrollments** is visible; URL is `/dashboard/manage-enrollment` (or equivalent); page does not show a blank or error state.
- **Priority:** High

#### TC_ENROLL_002: Heading and subtitle are visible

- **Test Case ID:** TC_ENROLL_002
- **Title:** Heading and subtitle are visible
- **Preconditions:** Authenticated student is on Manage Enrollments (`manageEnrollmentUrl`).
- **Steps:**
  1. Locate heading **Manage Enrollments**.
  2. Locate subtitle text **View and manage your course**.
- **Test data needed:** `manageEnrollmentUrl`, `validStudentSession`
- **Expected result:** Main heading and page description are visible and readable; layout remains intact.
- **Priority:** High

#### TC_ENROLL_003: Enroll in New Course button is visible

- **Test Case ID:** TC_ENROLL_003
- **Title:** Enroll in New Course button is visible
- **Preconditions:** Authenticated student is on Manage Enrollments.
- **Steps:**
  1. Locate heading **Manage Enrollments**.
  2. Locate button **Enroll in New Course**.
- **Test data needed:** `manageEnrollmentUrl`, `validStudentSession`
- **Expected result:** **Enroll in New Course** is visible under the heading and is interactable.
- **Priority:** High

#### TC_ENROLL_004: Enroll in New Course redirects to course catalog

- **Test Case ID:** TC_ENROLL_004
- **Title:** Enroll in New Course redirects to course catalog
- **Preconditions:** Authenticated student is on Manage Enrollments.
- **Steps:**
  1. Locate heading **Manage Enrollments**.
  2. Locate button **Enroll in New Course**.
  3. Click **Enroll in New Course**.
- **Test data needed:** `manageEnrollmentUrl`, `validStudentSession`, `exploreUrl`
- **Expected result:** User is redirected to `/dashboard/explore` (or equivalent course catalog) without crash or error page. Completing a new enrollment and seeing a new card populate is out of scope (no post-enroll selectors).
- **Priority:** High

#### TC_ENROLL_005: Content container / card element is present

- **Test Case ID:** TC_ENROLL_005
- **Title:** Content container / card element is present
- **Preconditions:** Authenticated student is on Manage Enrollments and has at least one enrollment (per product data).
- **Steps:**
  1. Locate heading **Manage Enrollments**.
  2. Confirm the documented content container / card element `.css-1iob08` is present.
- **Test data needed:** `manageEnrollmentUrl`, `validStudentSession`
- **Expected result:** At least one content container / card element is present so the enrollments list area is not blank. Do **not** assert specific class names (Class 6, Class 1, Class 2, Class 9), ACTIVE status, or completion percentages — those have no selectors.
- **Priority:** Medium

#### TC_ENROLL_006: Header bar concatenated text is present if exposed

- **Test Case ID:** TC_ENROLL_006
- **Title:** Header bar concatenated text is present if exposed
- **Preconditions:** Authenticated student is on Manage Enrollments.
- **Steps:**
  1. Locate heading **Manage Enrollments** (preferred chrome check).
  2. Optionally locate Header Bar Text **BackManage EnrollmentsEnroll** (brittle concatenated string from selectors.md).
- **Test data needed:** `manageEnrollmentUrl`, `validStudentSession`
- **Expected result:** Page chrome remains visible. If the concatenated header-bar string is in the DOM, it may be observed; do not fail the suite solely on this brittle text if the heading and **Enroll in New Course** are present.
- **Priority:** Low

#### TC_ENROLL_007: Soft refresh keeps Manage Enrollments chrome visible

- **Test Case ID:** TC_ENROLL_007
- **Title:** Soft refresh keeps Manage Enrollments chrome visible
- **Preconditions:** Authenticated student is on Manage Enrollments with heading, subtitle, and **Enroll in New Course** visible.
- **Steps:**
  1. Confirm heading **Manage Enrollments**, subtitle **View and manage your course**, and button **Enroll in New Course** are visible.
  2. Refresh the browser page.
  3. Re-check heading **Manage Enrollments**, subtitle **View and manage your course**, and button **Enroll in New Course**.
- **Test data needed:** `manageEnrollmentUrl`, `validStudentSession`
- **Expected result:** After refresh, session remains (or rehydrates) such that heading, subtitle, and CTA remain visible; page does not stay blank or error.
- **Priority:** Medium

#### TC_ENROLL_008: Unauthenticated access to Manage Enrollments does not show student content

- **Test Case ID:** TC_ENROLL_008
- **Title:** Unauthenticated access to Manage Enrollments does not show student content
- **Preconditions:** Browser has no valid student session (`unauthenticatedSession`).
- **Steps:**
  1. Navigate directly to `manageEnrollmentUrl` without logging in.
  2. Observe whether student Manage Enrollments chrome appears (heading **Manage Enrollments**, button **Enroll in New Course**).
- **Test data needed:** `manageEnrollmentUrl`, `unauthenticatedSession`
- **Expected result:** Unauthenticated user is redirected to login/sign-in (or equivalent gate) and does **not** see authenticated Manage Enrollments content; no privileged enrollment data leak.
- **Priority:** High

#### TC_ENROLL_009: Double-click Enroll in New Course does not break navigation

- **Test Case ID:** TC_ENROLL_009
- **Title:** Double-click Enroll in New Course does not break navigation
- **Preconditions:** Authenticated student is on Manage Enrollments; **Enroll in New Course** is available.
- **Steps:**
  1. Locate button **Enroll in New Course**.
  2. Rapidly double-click **Enroll in New Course**.
  3. Observe resulting navigation/catalog state.
- **Test data needed:** `manageEnrollmentUrl`, `validStudentSession`, `exploreUrl`
- **Expected result:** App reaches a single stable catalog destination (`/dashboard/explore` or equivalent); no crash, blank page, or broken duplicate error state.
- **Priority:** Medium

---

### Missing Selectors (userflow vs selectors.md)

The following are referenced in `enrollments_Page_userflow.md` (or needed for Manage Enrollments automation) but **are not present** in `enrollments_Page_selectors.md`. No executable test steps were invented for them.

| # | Userflow / need | Gap |
|---|-----------------|-----|
| 1 | Current Enrollments count (e.g. 4 active enrollments) | No selector |
| 2 | Course cards by class name (Class 6, Class 1, Class 2, Class 9) | No class-specific locator; only CSS container `.css-1iob08` |
| 3 | ACTIVE status badge | No selector |
| 4 | Circular progress / completion percentage (e.g. 5.7%, 0.0%) | No selector |
| 5 | Red trash can icon (unenroll / remove) | No selector |
| 6 | Unenroll confirmation pop-up | No selector |
| 7 | Profile icon (T) in the top right | No selector |
| 8 | Menu icon / other sidebar items (Dashboard, Switch Class, Favorite Chapters, Reels, Leaderboard, Quiz Tracking) | Not in this selectors file (only **Enrollments** group) |
| 9 | Logout | No selector |

**Additional note:** Primary Flow 3 (unenroll) and Alternative Flows (profile menu, other sidebar destinations, logout) cannot be automated from this page’s selectors until those locators are added. Do not invent steps for them.
