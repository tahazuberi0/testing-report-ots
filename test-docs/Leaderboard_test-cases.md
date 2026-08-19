# Test Cases

## Leaderboard Page

**URL under test:** `https://edu.offtheschool.io/dashboard/leaderboard`

**Sources:** `Leaderboard_userflow.md`, `Leaderboard_selectors.md`

### Coverage notes

- Scope is the **Leaderboard** page only — Primary Flow steps 1–3 (entry/context, Global/Weekly scope, Filter by) plus refresh and session edge cases.
- Global / Weekly tab interactions use the documented tab locators only; no invented content assertions after tab switch (e.g. specific point values or rank changes).
- Filter interaction uses **Filter by:** label and subject filter container only; no invented dropdown-option locators (All Subjects, By Subject, By Chapter).
- Top podium cards, student list rows, and personal standings tracking are described in the userflow but have **no selector** — they are listed under [Missing Selectors](#missing-selectors-userflow-vs-selectorsmd).
- Steps name UI elements as they appear in `Leaderboard_selectors.md`; prefer role/label/text over brittle CSS/div filters (`.nth(1)`, `.nth(2)`, concatenated header/filter strings).
- Test data lists **field names only** (no concrete values).
- Userflow has **no form validation** on this page (view/filter/click flows only). Negatives/edges cover session and interaction stability, not field validation.
- Userflow items with **no selector** are not given invented steps; they are listed under [Missing Selectors](#missing-selectors-userflow-vs-selectorsmd).
- Gamification loop (Dashboard, Quiz Tracking) and account settings (profile icon, Logout) are **out of scope** (not in this selectors file).
- **Brittle-selector note:** Current class indicator (`Showing leaderboard for: Class 2`) and filter container text are environment-specific. Steps prefer **Showing leaderboard for:** and **Filter by:** text locators. Do not assert fixed class names, student names, or point totals.

### Test Cases

#### TC_LEADERBOARD_001: Authenticated student lands on Leaderboard with key chrome visible

- **Test Case ID:** TC_LEADERBOARD_001
- **Title:** Authenticated student lands on Leaderboard with key chrome visible
- **Preconditions:** Student has a valid authenticated session; browser can reach the Leaderboard page.
- **Steps:**
  1. Navigate while authenticated (`validStudentSession`) to `leaderboardUrl`.
  2. Locate heading **Leaderboard**.
  3. Locate text **Compete with the best and** (page subtitle/description).
  4. Locate text **Showing leaderboard for:** (active class text).
- **Test data needed:** `leaderboardUrl`, `loginUrl`, `validStudentSession`
- **Expected result:** Leaderboard page loads with main heading, subtitle, and class context text visible; page does not show a blank or error state.
- **Priority:** High

#### TC_LEADERBOARD_002: Page heading and subtitle description are visible

- **Test Case ID:** TC_LEADERBOARD_002
- **Title:** Page heading and subtitle description are visible
- **Preconditions:** Authenticated student is on the Leaderboard page.
- **Steps:**
  1. Locate heading **Leaderboard**.
  2. Locate text **Compete with the best and**.
- **Test data needed:** `leaderboardUrl`, `loginUrl`, `validStudentSession`
- **Expected result:** Heading and subtitle are visible and readable.
- **Priority:** High

#### TC_LEADERBOARD_003: Class context indicator shows active leaderboard scope

- **Test Case ID:** TC_LEADERBOARD_003
- **Title:** Class context indicator shows active leaderboard scope
- **Preconditions:** Authenticated student is on the Leaderboard page.
- **Steps:**
  1. Locate text **Showing leaderboard for:**.
  2. Optionally confirm current class indicator container is visible (per selectors.md — environment-specific class name; do not assert a fixed class value).
- **Test data needed:** `leaderboardUrl`, `loginUrl`, `validStudentSession`
- **Expected result:** Class context copy is visible, indicating which class leaderboard is being displayed. Do not assert a specific class number (e.g. Class 2 vs Class 6).
- **Priority:** High

#### TC_LEADERBOARD_004: Global and Weekly tabs are visible

- **Test Case ID:** TC_LEADERBOARD_004
- **Title:** Global and Weekly tabs are visible
- **Preconditions:** Authenticated student is on the Leaderboard page.
- **Steps:**
  1. Locate tab **Global**.
  2. Locate tab **Weekly**.
- **Test data needed:** `leaderboardUrl`, `loginUrl`, `validStudentSession`
- **Expected result:** Both Global and Weekly scope tabs are visible and accessible.
- **Priority:** High

#### TC_LEADERBOARD_005: Global tab is clickable and page stays stable

- **Test Case ID:** TC_LEADERBOARD_005
- **Title:** Global tab is clickable and page stays stable
- **Preconditions:** Authenticated student is on the Leaderboard page.
- **Steps:**
  1. Locate tab **Global**.
  2. Click **Global**.
  3. Confirm heading **Leaderboard** is still visible after the click.
- **Test data needed:** `leaderboardUrl`, `loginUrl`, `validStudentSession`
- **Expected result:** Clicking Global activates or re-selects the all-time view without crash; page heading remains accessible. Do not assert specific point values or rank changes (no podium/list locators in selectors.md).
- **Priority:** Medium

#### TC_LEADERBOARD_006: Weekly tab is clickable and page stays stable

- **Test Case ID:** TC_LEADERBOARD_006
- **Title:** Weekly tab is clickable and page stays stable
- **Preconditions:** Authenticated student is on the Leaderboard page.
- **Steps:**
  1. Locate tab **Weekly**.
  2. Click **Weekly**.
  3. Confirm heading **Leaderboard** is still visible after the click.
- **Test data needed:** `leaderboardUrl`, `loginUrl`, `validStudentSession`
- **Expected result:** Clicking Weekly switches to weekly standings view without crash; page heading remains accessible. Do not assert specific weekly point totals (no list locators in selectors.md).
- **Priority:** Medium

#### TC_LEADERBOARD_007: Filter by label and filter container are visible

- **Test Case ID:** TC_LEADERBOARD_007
- **Title:** Filter by label and filter container are visible
- **Preconditions:** Authenticated student is on the Leaderboard page.
- **Steps:**
  1. Locate text **Filter by:**.
  2. Locate subject filter container (per selectors.md — concatenated filter text wrapper).
- **Test data needed:** `leaderboardUrl`, `loginUrl`, `validStudentSession`
- **Expected result:** Filter by label and filter container are visible, confirming the subject/chapter filtering UI is present.
- **Priority:** High

#### TC_LEADERBOARD_008: Filter container is clickable and page stays stable

- **Test Case ID:** TC_LEADERBOARD_008
- **Title:** Filter container is clickable and page stays stable
- **Preconditions:** Authenticated student is on the Leaderboard page.
- **Steps:**
  1. Locate subject filter container.
  2. Click subject filter container (or **Filter by:** label area).
  3. Confirm heading **Leaderboard** is still visible after the click.
- **Test data needed:** `leaderboardUrl`, `loginUrl`, `validStudentSession`
- **Expected result:** Clicking the filter area opens a dropdown or updates the view without crash; page heading remains accessible. Do not assert a specific filter option (no option-level locator in selectors.md).
- **Priority:** Medium

#### TC_LEADERBOARD_009: Toggle between Global and Weekly keeps Leaderboard usable

- **Test Case ID:** TC_LEADERBOARD_009
- **Title:** Toggle between Global and Weekly keeps Leaderboard usable
- **Preconditions:** Authenticated student is on the Leaderboard page with tabs **Global** and **Weekly** visible.
- **Steps:**
  1. Click tab **Weekly**.
  2. Confirm heading **Leaderboard** is visible.
  3. Click tab **Global**.
  4. Confirm heading **Leaderboard** and text **Showing leaderboard for:** are still visible.
- **Test data needed:** `leaderboardUrl`, `loginUrl`, `validStudentSession`
- **Expected result:** Rapid tab switching between Global and Weekly does not crash or blank the page; core Leaderboard chrome remains usable.
- **Priority:** Medium

#### TC_LEADERBOARD_010: Soft refresh keeps Leaderboard chrome visible

- **Test Case ID:** TC_LEADERBOARD_010
- **Title:** Soft refresh keeps Leaderboard chrome visible
- **Preconditions:** Authenticated student is on the Leaderboard page with heading **Leaderboard** and tabs **Global** / **Weekly** visible.
- **Steps:**
  1. Confirm heading **Leaderboard**, tab **Global**, and tab **Weekly** are visible.
  2. Refresh the browser page.
  3. Re-check heading **Leaderboard**, tab **Global**, and tab **Weekly**.
- **Test data needed:** `leaderboardUrl`, `loginUrl`, `validStudentSession`
- **Expected result:** After refresh, session remains (or rehydrates) such that Leaderboard chrome stays visible; page does not stay blank or error.
- **Priority:** Medium

#### TC_LEADERBOARD_011: Unauthenticated access does not show leaderboard data

- **Test Case ID:** TC_LEADERBOARD_011
- **Title:** Unauthenticated access does not show leaderboard data
- **Preconditions:** Browser has no valid student session (`unauthenticatedSession`).
- **Steps:**
  1. Navigate directly to `leaderboardUrl` without logging in.
  2. Observe whether heading **Leaderboard** or tab **Global** appear.
- **Test data needed:** `leaderboardUrl`, `unauthenticatedSession`, `expectedLoginUrlPattern`
- **Expected result:** Unauthenticated user is redirected to login/sign-in (or equivalent gate) and does **not** see authenticated Leaderboard content; no privileged ranking data leak.
- **Priority:** High

---

### Missing Selectors (userflow vs selectors.md)

The following are referenced in `Leaderboard_userflow.md` (or needed for Leaderboard automation) but **are not present** in `Leaderboard_selectors.md`. No executable test steps were invented for them.

| # | Userflow / need | Gap |
|---|-----------------|-----|
| 1 | Top 3 podium cards (1st / 2nd / 3rd place) | No locator |
| 2 | Podium student names (e.g. Ahmad Ameen, Sk Sahab, Anonymous) | No locator |
| 3 | Podium point values (e.g. 326 pts, 325 pts, 251 pts) | No locator |
| 4 | Extended student list rows | No locator |
| 5 | Rank number per row (e.g. #) | No locator |
| 6 | Student name per list row | No locator |
| 7 | Total quiz attempts per row (e.g. 37 attempts) | No locator |
| 8 | Total points per row (pts) | No locator |
| 9 | Current user's row / personal standings locator | No locator |
| 10 | Filter option-level locators (All Subjects, By Subject, By Chapter) | No locator; only filter container text |
| 11 | Profile icon in header (T) | No locator |
| 12 | Sidebar **Logout** | Out of scope for this selectors file |
| 13 | Sidebar alternative nav (Dashboard, Quiz Tracking) | Out of scope for this selectors file |

#### TC_LEADERBOARD_012: Filter options All Subjects, By Subject, and By Chapter are visible

- **Test Case ID:** TC_LEADERBOARD_012
- **Title:** Filter options All Subjects, By Subject, and By Chapter are visible
- **Preconditions:** Authenticated student is on the Leaderboard page.
- **Steps:**
  1. Locate text **All Subjects** (exact).
  2. Locate text **By Subject** (exact).
  3. Locate text **By Chapter** (exact).
- **Test data needed:** `leaderboardUrl`, `loginUrl`, `validStudentSession`
- **Expected result:** All three filter options are visible.
- **Priority:** High

---

**Additional note:** Header container text (`LeaderboardCompete with the best and climb the ranks!`), current class indicator (`Showing leaderboard for: Class 2`), and filter container text (`Filter by:All SubjectsBy SubjectBy Chapter`) are environment-specific and brittle. Steps prefer role/text locators documented in selectors.md.
