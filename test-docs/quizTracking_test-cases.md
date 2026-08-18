# Test Cases

## Quiz Performance Tracking Page

**URL under test:** `https://edu.offtheschool.io/dashboard/quiz-tracking`

**Sources:** `quizTracking_userflow.md`, `quizTracking_selectors.md`

### Coverage notes

- Scope is the **Quiz Performance Tracking** page only — Primary Flow steps 1–4 (sidebar entry, page chrome, filters/sorting, content area) and **Back** exit.
- Filter/Sort/Show Results interactions use the documented paragraph-filter locators only; no invented dropdown-option locators (e.g. specific quiz names, sort orders).
- Summary stat cards (Total Attempts, Quizzes Taken, Average Score, Best Score) are described in the userflow but have **no selector** — they are listed under [Missing Selectors](#missing-selectors-userflow-vs-selectorsmd).
- "Quiz Attempts by Chapter" accordion section has **no selector** — out of scope for executable steps.
- Steps name UI elements as they appear in `quizTracking_selectors.md`; prefer role/label/text over brittle CSS (`.css-1iob08`, `.css-1qmf9hg`).
- Test data lists **field names only** (no concrete values).
- Userflow has **no form validation** on this page (view/filter/click flows only). Negatives/edges cover session and interaction stability, not field validation.
- Userflow items with **no selector** are not given invented steps; they are listed under [Missing Selectors](#missing-selectors-userflow-vs-selectorsmd).
- Alternative sidebar destinations (Dashboard, Switch Class, Leaderboard, Logout) are **out of scope** (not in this selectors file).

### Test Cases

#### TC_QUIZTRACKING_001: Authenticated student lands on Quiz Tracking with page chrome visible

- **Test Case ID:** TC_QUIZTRACKING_001
- **Title:** Authenticated student lands on Quiz Tracking with page chrome visible
- **Preconditions:** Student has a valid authenticated session; browser can reach the Quiz Tracking page.
- **Steps:**
  1. Navigate while authenticated (`validStudentSession`) to `quizTrackingUrl`.
  2. Locate text **BackQuiz Performance** (back navigation bar).
  3. Locate heading **Quiz Performance Tracking**.
  4. Locate text **Track your progress and** (description).
- **Test data needed:** `quizTrackingUrl`, `loginUrl`, `validStudentSession`
- **Expected result:** Quiz Performance Tracking page loads with back bar text, main heading, and description visible; page does not show a blank or error state.
- **Priority:** High

#### TC_QUIZTRACKING_002: Page heading and description text are visible

- **Test Case ID:** TC_QUIZTRACKING_002
- **Title:** Page heading and description text are visible
- **Preconditions:** Authenticated student is on the Quiz Tracking page.
- **Steps:**
  1. Locate heading **Quiz Performance Tracking**.
  2. Locate text **Track your progress and**.
- **Test data needed:** `quizTrackingUrl`, `loginUrl`, `validStudentSession`
- **Expected result:** Heading and description are visible and readable.
- **Priority:** High

#### TC_QUIZTRACKING_003: Filters section with all three dropdowns visible

- **Test Case ID:** TC_QUIZTRACKING_003
- **Title:** Filters section with all three dropdowns visible
- **Preconditions:** Authenticated student is on the Quiz Tracking page.
- **Steps:**
  1. Locate heading **Filters**.
  2. Locate paragraph filter **Filter by Quiz**.
  3. Locate paragraph filter **Sort By**.
  4. Locate paragraph filter **Show Results**.
- **Test data needed:** `quizTrackingUrl`, `loginUrl`, `validStudentSession`
- **Expected result:** Filters heading and all three dropdown triggers (Filter by Quiz, Sort By, Show Results) are visible.
- **Priority:** High

#### TC_QUIZTRACKING_004: Filter by Quiz dropdown is clickable and page stays stable

- **Test Case ID:** TC_QUIZTRACKING_004
- **Title:** Filter by Quiz dropdown is clickable and page stays stable
- **Preconditions:** Authenticated student is on the Quiz Tracking page.
- **Steps:**
  1. Locate paragraph filter **Filter by Quiz**.
  2. Click **Filter by Quiz**.
  3. Confirm heading **Quiz Performance Tracking** is still visible after the click.
- **Test data needed:** `quizTrackingUrl`, `loginUrl`, `validStudentSession`
- **Expected result:** Clicking Filter by Quiz opens a dropdown or updates the view without crash; page heading remains accessible. Do not assert a specific quiz option (no option-level locator in selectors.md).
- **Priority:** Medium

#### TC_QUIZTRACKING_005: Sort By dropdown is clickable and page stays stable

- **Test Case ID:** TC_QUIZTRACKING_005
- **Title:** Sort By dropdown is clickable and page stays stable
- **Preconditions:** Authenticated student is on the Quiz Tracking page.
- **Steps:**
  1. Locate paragraph filter **Sort By**.
  2. Click **Sort By**.
  3. Confirm heading **Quiz Performance Tracking** is still visible after the click.
- **Test data needed:** `quizTrackingUrl`, `loginUrl`, `validStudentSession`
- **Expected result:** Clicking Sort By opens a dropdown or updates the view without crash; page heading remains accessible. Do not assert a specific sort order (no option-level locator in selectors.md).
- **Priority:** Medium

#### TC_QUIZTRACKING_006: Show Results trigger is clickable and page stays stable

- **Test Case ID:** TC_QUIZTRACKING_006
- **Title:** Show Results trigger is clickable and page stays stable
- **Preconditions:** Authenticated student is on the Quiz Tracking page.
- **Steps:**
  1. Locate paragraph filter **Show Results**.
  2. Click **Show Results**.
  3. Confirm heading **Quiz Performance Tracking** is still visible after the click.
- **Test data needed:** `quizTrackingUrl`, `loginUrl`, `validStudentSession`
- **Expected result:** Clicking Show Results opens a dropdown or updates the view without crash; page heading remains accessible. Do not assert a specific result limit (no option-level locator in selectors.md).
- **Priority:** Medium

#### TC_QUIZTRACKING_007: Content card container is present on page

- **Test Case ID:** TC_QUIZTRACKING_007
- **Title:** Content card container is present on page
- **Preconditions:** Authenticated student is on the Quiz Tracking page.
- **Steps:**
  1. Locate content card container (`.css-1iob08` — CSS fallback, no role/text locator available).
- **Test data needed:** `quizTrackingUrl`, `loginUrl`, `validStudentSession`
- **Expected result:** At least one content card container element is present on the page, confirming quiz data area renders.
- **Priority:** Medium

#### TC_QUIZTRACKING_008: Back navigation exits Quiz Tracking page

- **Test Case ID:** TC_QUIZTRACKING_008
- **Title:** Back navigation exits Quiz Tracking page
- **Preconditions:** Authenticated student is on the Quiz Tracking page.
- **Steps:**
  1. Locate text **BackQuiz Performance**.
  2. Click the **BackQuiz Performance** bar (or the Back portion within it).
- **Test data needed:** `quizTrackingUrl`, `loginUrl`, `validStudentSession`
- **Expected result:** Student is navigated away from the Quiz Tracking page (e.g. back to Dashboard) without error. **Note:** No standalone Back button locator exists — only the concatenated text `BackQuiz Performance`.
- **Priority:** High

#### TC_QUIZTRACKING_009: Soft refresh keeps Quiz Tracking chrome visible

- **Test Case ID:** TC_QUIZTRACKING_009
- **Title:** Soft refresh keeps Quiz Tracking chrome visible
- **Preconditions:** Authenticated student is on the Quiz Tracking page with heading **Quiz Performance Tracking** and heading **Filters** visible.
- **Steps:**
  1. Confirm heading **Quiz Performance Tracking** and heading **Filters** are visible.
  2. Refresh the browser page.
  3. Re-check heading **Quiz Performance Tracking** and heading **Filters**.
- **Test data needed:** `quizTrackingUrl`, `loginUrl`, `validStudentSession`
- **Expected result:** After refresh, session remains (or rehydrates) such that Quiz Tracking chrome stays visible; page does not stay blank or error.
- **Priority:** Medium

#### TC_QUIZTRACKING_010: Unauthenticated access does not show quiz data

- **Test Case ID:** TC_QUIZTRACKING_010
- **Title:** Unauthenticated access does not show quiz data
- **Preconditions:** Browser has no valid student session (`unauthenticatedSession`).
- **Steps:**
  1. Navigate directly to `quizTrackingUrl` without logging in.
  2. Observe whether heading **Quiz Performance Tracking** or heading **Filters** appear.
- **Test data needed:** `quizTrackingUrl`, `unauthenticatedSession`, `expectedLoginUrlPattern`
- **Expected result:** Unauthenticated user is redirected to login/sign-in (or equivalent gate) and does **not** see authenticated Quiz Tracking content; no privileged data leak.
- **Priority:** High

---

### Missing Selectors (userflow vs selectors.md)

The following are referenced in `quizTracking_userflow.md` (or needed for Quiz Tracking automation) but **are not present** in `quizTracking_selectors.md`. No executable test steps were invented for them.

| # | Userflow / need | Gap |
|---|-----------------|-----|
| 1 | Summary stat card: **Total Attempts** | No locator |
| 2 | Summary stat card: **Quizzes Taken** | No locator |
| 3 | Summary stat card: **Average Score** | No locator |
| 4 | Summary stat card: **Best Score** | No locator |
| 5 | "Quiz Attempts by Chapter" section heading | No locator |
| 6 | Individual quiz card / accordion row (e.g. "Class 2 Mathematics Forward Counting") | No locator |
| 7 | Accordion expand caret / toggle | No locator |
| 8 | Expanded accordion content (questions, time, right/wrong breakdown) | No locator |
| 9 | Standalone **Back** button (only concatenated text `BackQuiz Performance` available) | No standalone button locator |
| 10 | Dropdown option-level locators for Filter by Quiz values | No locator |
| 11 | Dropdown option-level locators for Sort By values (Newest, Oldest, Highest, Lowest) | No locator |
| 12 | Dropdown option-level locators for Show Results values (All, Latest 5, Latest 10) | No locator |
| 13 | Sidebar alternative nav (Dashboard, Switch Class, Leaderboard, Logout) | Out of scope for this selectors file |
