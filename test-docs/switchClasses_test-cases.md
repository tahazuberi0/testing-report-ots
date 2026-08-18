# Test Cases

## Switch Classes Page

**URL under test:** `https://edu.offtheschool.io/dashboard/change-course`

**Sources:** `switchClasses_userflow.md`, `switchClasses_selectors.md`

### Coverage notes

- Scope is the **Switch Classes** page only — Primary Flow steps 1–5 (entry chrome, Select Your Class, Your Progress, My Subjects, Watch video / Start Learning) and **Back** exit.
- Class-selector interaction uses the documented **Class** button and labels only; no invented dropdown-option locators (e.g. "Class 6" option is not in selectors.md).
- Deep video player and course-details flows beyond smoke checks are **out of scope**.
- Alternative sidebar destinations (Quiz Tracking, Leaderboard, Reels, Logout) are **out of scope** (not in this selectors file).
- Steps name UI elements as they appear in `switchClasses_selectors.md`; prefer role/label/text over brittle CSS (`.css-7t0swy`, `.css-1iob08`, `.css-v9rvhd`, `.css-1mzmhx4`, `.css-10xamzf`) and concatenated strings.
- Test data lists **field names only** (no concrete values).
- Userflow has **no form validation** on this page (view/select/click flows only). Negatives/edges cover session and interaction stability, not field validation.
- Userflow items with **no selector** are not given invented steps; they are listed under [Missing Selectors](#missing-selectors-userflow-vs-selectorsmd).
- **Brittle-selector note:** **Watch video** and **Start Learning** use `.first()` in selectors.md (multiple subject cards). Subject card container text is a long concatenated string specific to a class/environment. Do not assert star ratings or hard-coded chapter counts as fixed values.

### Test Cases

#### TC_SWITCH_001: Authenticated student lands on Switch Classes with key chrome visible

- **Test Case ID:** TC_SWITCH_001
- **Title:** Authenticated student lands on Switch Classes with key chrome visible
- **Preconditions:** Student has a valid authenticated session; browser can reach the Switch Classes page.
- **Steps:**
  1. Navigate while authenticated (`validStudentSession`) to `changeCourseUrl`.
  2. Locate button **Back**.
  3. Locate heading **Switch Classes**.
  4. Locate heading **Select Your Class**.
- **Test data needed:** `changeCourseUrl`, `loginUrl`, `validStudentSession`
- **Expected result:** Switch Classes page loads with **Back** button, **Switch Classes** heading, and **Select Your Class** heading visible; page does not show a blank or error state.
- **Priority:** High

#### TC_SWITCH_002: Select Your Class module labels are visible

- **Test Case ID:** TC_SWITCH_002
- **Title:** Select Your Class module labels are visible
- **Preconditions:** Authenticated student is on the Switch Classes page.
- **Steps:**
  1. Locate heading **Select Your Class**.
  2. Locate text **Available Classes**.
  3. Locate text **Choose from your enrolled**.
  4. Locate button **Class** (class selector dropdown trigger).
- **Test data needed:** `changeCourseUrl`, `loginUrl`, `validStudentSession`
- **Expected result:** All class-selection labels and the **Class** dropdown button are visible and readable.
- **Priority:** High

#### TC_SWITCH_003: Class selector button is clickable and page remains stable

- **Test Case ID:** TC_SWITCH_003
- **Title:** Class selector button is clickable and page remains stable
- **Preconditions:** Authenticated student is on the Switch Classes page.
- **Steps:**
  1. Locate button **Class**.
  2. Click **Class**.
  3. Confirm heading **Your Progress** and/or heading **My Subjects** are still visible after the click.
- **Test data needed:** `changeCourseUrl`, `loginUrl`, `validStudentSession`
- **Expected result:** Clicking the class selector opens a dropdown or updates the page without crash; **Your Progress** and **My Subjects** remain accessible. Do not assert a specific class option (no option-level locator in selectors.md).
- **Priority:** High

#### TC_SWITCH_004: Your Progress section shows overall completion copy

- **Test Case ID:** TC_SWITCH_004
- **Title:** Your Progress section shows overall completion copy
- **Preconditions:** Authenticated student is on the Switch Classes page (with any class selected).
- **Steps:**
  1. Locate heading **Your Progress**.
  2. Locate text **Overall completion for your** (enrolled class copy).
  3. Optionally confirm **Progress**.nth(1) label is visible (per selectors.md).
- **Test data needed:** `changeCourseUrl`, `loginUrl`, `validStudentSession`
- **Expected result:** Your Progress heading and overall completion messaging are visible. Do not assert a fixed percentage (e.g. 5.7% or 0.0%).
- **Priority:** High

#### TC_SWITCH_005: My Subjects section and enrolled count are visible

- **Test Case ID:** TC_SWITCH_005
- **Title:** My Subjects section and enrolled count are visible
- **Preconditions:** Authenticated student is on the Switch Classes page and has at least one enrollment.
- **Steps:**
  1. Locate heading **My Subjects**.
  2. Locate enrolled-count area text (e.g. **My Subjects5 Enrolled** or equivalent from selectors.md).
  3. Confirm button **Watch video** (`.first()`) and button **Start Learning** (`.first()`) are present.
- **Test data needed:** `changeCourseUrl`, `loginUrl`, `validStudentSession`
- **Expected result:** My Subjects heading, enrolled count, and subject action controls are visible.
- **Priority:** High

#### TC_SWITCH_006: Grid view and Carousel view controls are usable

- **Test Case ID:** TC_SWITCH_006
- **Title:** Grid view and Carousel view controls are usable
- **Preconditions:** Authenticated student is on the Switch Classes page with My Subjects visible.
- **Steps:**
  1. Locate heading **My Subjects**.
  2. Locate button **Grid view**.
  3. Click **Grid view**.
  4. Locate button **Carousel view**.
  5. Click **Carousel view**.
- **Test data needed:** `changeCourseUrl`, `loginUrl`, `validStudentSession`
- **Expected result:** View toggles respond without error; My Subjects remains visible and usable after each toggle.
- **Priority:** Medium

#### TC_SWITCH_007: Scroll Left / Scroll Right move the subjects carousel

- **Test Case ID:** TC_SWITCH_007
- **Title:** Scroll Left / Scroll Right move the subjects carousel
- **Preconditions:** Authenticated student is on the Switch Classes page; Carousel view is active (if required by UI for scroll controls to appear).
- **Steps:**
  1. Switch to **Carousel view** if not already active.
  2. Locate button **Scroll Right**.
  3. Click **Scroll Right**.
  4. Locate button **Scroll Left**.
  5. Click **Scroll Left**.
- **Test data needed:** `changeCourseUrl`, `loginUrl`, `validStudentSession`
- **Expected result:** Scroll controls are clickable; carousel/subjects area remains stable with no crash or blank My Subjects section.
- **Priority:** Medium

#### TC_SWITCH_008: Watch video opens learning / video experience

- **Test Case ID:** TC_SWITCH_008
- **Title:** Watch video opens learning / video experience
- **Preconditions:** Authenticated student is on the Switch Classes page; at least one **Watch video** control is present.
- **Steps:**
  1. Locate button **Watch video** (`.first()`).
  2. Click **Watch video**.
  3. If a modal appears, locate button **Close** (per selectors.md).
- **Test data needed:** `changeCourseUrl`, `loginUrl`, `validStudentSession`
- **Expected result:** Watch video opens the lecture dialog / learning experience (or navigates to a video view) without crash. If a modal opens, **Close** is available.
- **Priority:** High

#### TC_SWITCH_009: Start Learning navigates to subject module

- **Test Case ID:** TC_SWITCH_009
- **Title:** Start Learning navigates to subject module
- **Preconditions:** Authenticated student is on the Switch Classes page; at least one **Start Learning** control is present.
- **Steps:**
  1. Locate button **Start Learning** (`.first()`).
  2. Click **Start Learning**.
- **Test data needed:** `changeCourseUrl`, `loginUrl`, `validStudentSession`, `courseDetailsUrlPattern`
- **Expected result:** Student is redirected to the subject module/chapter selection (e.g. `/dashboard/course-details` or equivalent) without crash or error page.
- **Priority:** High

#### TC_SWITCH_010: Back button exits Switch Classes page

- **Test Case ID:** TC_SWITCH_010
- **Title:** Back button exits Switch Classes page
- **Preconditions:** Authenticated student is on the Switch Classes page.
- **Steps:**
  1. Locate button **Back**.
  2. Click **Back**.
- **Test data needed:** `changeCourseUrl`, `loginUrl`, `validStudentSession`
- **Expected result:** Student is navigated away from the Switch Classes page (e.g. back to Dashboard or previous page) without error.
- **Priority:** High

#### TC_SWITCH_011: Soft refresh keeps Switch Classes chrome visible

- **Test Case ID:** TC_SWITCH_011
- **Title:** Soft refresh keeps Switch Classes chrome visible
- **Preconditions:** Authenticated student is on the Switch Classes page with **Switch Classes** heading, **Select Your Class** heading, and **My Subjects** heading visible.
- **Steps:**
  1. Confirm heading **Switch Classes**, heading **Select Your Class**, and heading **My Subjects** are visible.
  2. Refresh the browser page.
  3. Re-check heading **Switch Classes**, heading **Select Your Class**, and heading **My Subjects**.
- **Test data needed:** `changeCourseUrl`, `loginUrl`, `validStudentSession`
- **Expected result:** After refresh, session remains (or rehydrates) such that Switch Classes chrome stays visible; page does not stay blank or error.
- **Priority:** Medium

#### TC_SWITCH_012: Unauthenticated access to change-course does not show student content

- **Test Case ID:** TC_SWITCH_012
- **Title:** Unauthenticated access to change-course does not show student content
- **Preconditions:** Browser has no valid student session (`unauthenticatedSession`).
- **Steps:**
  1. Navigate directly to `changeCourseUrl` without logging in.
  2. Observe whether student Switch Classes chrome appears (heading **Switch Classes**, heading **My Subjects**).
- **Test data needed:** `changeCourseUrl`, `unauthenticatedSession`, `expectedLoginUrlPattern`
- **Expected result:** Unauthenticated user is redirected to login/sign-in (or equivalent gate) and does **not** see authenticated Switch Classes / My Subjects content; no privileged data leak.
- **Priority:** High

#### TC_SWITCH_013: Double-click Watch video does not break navigation

- **Test Case ID:** TC_SWITCH_013
- **Title:** Double-click Watch video does not break navigation
- **Preconditions:** Authenticated student is on the Switch Classes page; **Watch video** is available.
- **Steps:**
  1. Locate button **Watch video** (`.first()`).
  2. Rapidly double-click **Watch video**.
  3. Observe resulting dialog/navigation state.
- **Test data needed:** `changeCourseUrl`, `loginUrl`, `validStudentSession`
- **Expected result:** App reaches a single stable learning/video destination (or one clean dialog); no crash, blank page, or broken duplicate error state.
- **Priority:** Medium

---

### Missing Selectors (userflow vs selectors.md)

The following are referenced in `switchClasses_userflow.md` (or needed for Switch Classes automation) but **are not present** in `switchClasses_selectors.md`. No executable test steps were invented for them.

| # | Userflow / need | Gap |
|---|-----------------|-----|
| 1 | Sidebar **Switch Class** nav entry from Dashboard | Not in switchClasses_selectors.md (available in Dashboard_selectors.md) |
| 2 | Specific class dropdown option (e.g. Class 6, Class 9) | No option-level locator; only button **Class** |
| 3 | Dynamic content change proof after class pick | No stable before/after locator to assert content updated |
| 4 | Star ratings on subject cards | No selector |
| 5 | Per-subject names (Computer, Mathematics, Urdu, English, Science) | No stable locator; only brittle concatenated card text |
| 6 | Total Chapters per subject (8, 13, etc.) | Only in brittle concatenated card string |
| 7 | Individual subject progress percentage | Only generic `%` selectors — no per-card breakdown |
| 8 | Quiz Tracking / Leaderboard / Reels / Logout (alternative flows) | Not in this selectors file |

**Additional note:** The concatenated header text **Switch ClassesChange your** and subject card container text (e.g. `%ProgressTotal Chapters 8COMPUTERComputer for Class 2Watch videoStart Learning`) are environment-specific and brittle. Steps prefer role/text locators documented in selectors.md.
