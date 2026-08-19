# Test Cases

## Favorite Chapters Page

**URL under test:** `https://edu.offtheschool.io/dashboard/favorite-chapters`

**Sources:** `favoriteChapters_userflow.md`, `favoriteChapters_selectors.md`

### Coverage notes

- Scope is the **Favorite Chapters** page only — populated-state chrome, Open Chapter navigation, and session edge cases.
- Empty state flow (heart icon, "No Favorite Chapters Yet" message, instructional text, **Browse Chapters** button) is described in the userflow but has **no selectors** — listed under [Missing Selectors](#missing-selectors-userflow-vs-selectorsmd).
- Populated favorites management (unfavoriting via heart toggle) has **no selector** — listed under Missing Selectors.
- Steps name UI elements as they appear in `favoriteChapters_selectors.md`; prefer role/label/text over brittle CSS/div filters and `.nth()` fallbacks.
- Test data lists **field names only** (no concrete values).
- Userflow has **no form validation** on this page (view/click flows only). Negatives/edges cover session gating and interaction stability, not field validation.
- Userflow items with **no selector** are not given invented steps; they are listed under [Missing Selectors](#missing-selectors-userflow-vs-selectorsmd).
- Alternative sidebar destinations (Feedback, Visit Website, Dashboard, Switch Class) are **out of scope** (not in this selectors file).
- **Brittle-selector notes:** Header container uses `.nth(3)`, chapter card uses `.first()` with environment-specific text ("Forward Counting"), Open Chapter wrapper uses `.first()`, and secondary action button uses `.nth(1)` with no clear semantic purpose. Steps prefer `getByRole('heading', { name: 'Favorite Chapters' })` and `getByRole('button', { name: 'Open Chapter' })` where possible.

### Test Cases

#### TC_FAVCHAP_001: Authenticated student lands on Favorite Chapters with heading visible

- **Test Case ID:** TC_FAVCHAP_001
- **Title:** Authenticated student lands on Favorite Chapters with heading visible
- **Preconditions:** Student has a valid authenticated session; browser can reach the Favorite Chapters page.
- **Steps:**
  1. Navigate while authenticated (`validStudentSession`) to `favoriteChaptersUrl`.
  2. Locate heading **Favorite Chapters**.
- **Test data needed:** `favoriteChaptersUrl`, `loginUrl`, `validStudentSession`
- **Expected result:** Favorite Chapters page loads with main heading visible; page does not show a blank or error state.
- **Priority:** High

#### TC_FAVCHAP_002: Page heading and header container are present

- **Test Case ID:** TC_FAVCHAP_002
- **Title:** Page heading and header container are present
- **Preconditions:** Authenticated student is on the Favorite Chapters page.
- **Steps:**
  1. Locate heading **Favorite Chapters**.
  2. Locate header container (`.nth(3)` — brittle fallback per selectors.md).
- **Test data needed:** `favoriteChaptersUrl`, `loginUrl`, `validStudentSession`
- **Expected result:** Heading and header container are visible and rendered correctly.
- **Priority:** High

#### TC_FAVCHAP_003: Open Chapter button is visible when chapters exist

- **Test Case ID:** TC_FAVCHAP_003
- **Title:** Open Chapter button is visible when chapters exist
- **Preconditions:** Authenticated student is on the Favorite Chapters page and has at least one favorited chapter.
- **Steps:**
  1. Locate button **Open Chapter**.
- **Test data needed:** `favoriteChaptersUrl`, `loginUrl`, `validStudentSession`
- **Expected result:** At least one **Open Chapter** button is visible, confirming favorited chapter cards are rendered. **Note:** If the account has no favorites, this test will fail — it requires populated favorites data.
- **Priority:** High

#### TC_FAVCHAP_004: Open Chapter button navigates to lesson page

- **Test Case ID:** TC_FAVCHAP_004
- **Title:** Open Chapter button navigates to lesson page
- **Preconditions:** Authenticated student is on the Favorite Chapters page with at least one **Open Chapter** button visible.
- **Steps:**
  1. Locate button **Open Chapter** (first instance if multiple).
  2. Click **Open Chapter**.
- **Test data needed:** `favoriteChaptersUrl`, `loginUrl`, `validStudentSession`
- **Expected result:** Student is navigated away from the Favorite Chapters page to a lesson/chapter page without crash or error.
- **Priority:** High

#### TC_FAVCHAP_005: Chapter card element is visible for a favorited chapter

- **Test Case ID:** TC_FAVCHAP_005
- **Title:** Chapter card element is visible for a favorited chapter
- **Preconditions:** Authenticated student is on the Favorite Chapters page with at least one favorited chapter.
- **Steps:**
  1. Locate chapter card container (per selectors.md — `div` filter with environment-specific text e.g. "Forward Counting", `.first()` — brittle, content-specific).
- **Test data needed:** `favoriteChaptersUrl`, `loginUrl`, `validStudentSession`
- **Expected result:** At least one chapter card element is present. **Note:** The locator text ("Forward Counting") is environment-specific; this assertion may need updating per test environment.
- **Priority:** Medium

#### TC_FAVCHAP_006: Soft refresh keeps Favorite Chapters chrome visible

- **Test Case ID:** TC_FAVCHAP_006
- **Title:** Soft refresh keeps Favorite Chapters chrome visible
- **Preconditions:** Authenticated student is on the Favorite Chapters page with heading **Favorite Chapters** visible.
- **Steps:**
  1. Confirm heading **Favorite Chapters** is visible.
  2. Refresh the browser page.
  3. Re-check heading **Favorite Chapters**.
- **Test data needed:** `favoriteChaptersUrl`, `loginUrl`, `validStudentSession`
- **Expected result:** After refresh, session remains (or rehydrates) such that Favorite Chapters chrome stays visible; page does not stay blank or error.
- **Priority:** Medium

#### TC_FAVCHAP_007: Unauthenticated access does not show favorites data

- **Test Case ID:** TC_FAVCHAP_007
- **Title:** Unauthenticated access does not show favorites data
- **Preconditions:** Browser has no valid student session (`unauthenticatedSession`).
- **Steps:**
  1. Navigate directly to `favoriteChaptersUrl` without logging in.
  2. Observe whether heading **Favorite Chapters** appears.
- **Test data needed:** `favoriteChaptersUrl`, `unauthenticatedSession`, `expectedLoginUrlPattern`
- **Expected result:** Unauthenticated user is redirected to login/sign-in (or equivalent gate) and does **not** see authenticated Favorite Chapters content; no privileged data leak.
- **Priority:** High

#### TC_FAVCHAP_008: Double-click Open Chapter does not break navigation

- **Test Case ID:** TC_FAVCHAP_008
- **Title:** Double-click Open Chapter does not break navigation
- **Preconditions:** Authenticated student is on the Favorite Chapters page with at least one **Open Chapter** button visible.
- **Steps:**
  1. Locate button **Open Chapter** (first instance).
  2. Rapidly double-click **Open Chapter**.
  3. Observe resulting navigation state.
- **Test data needed:** `favoriteChaptersUrl`, `loginUrl`, `validStudentSession`
- **Expected result:** App reaches a single stable lesson page; no crash, blank page, or duplicate error state.
- **Priority:** Medium

#### TC_FAVCHAP_009: Secondary action button is present and clickable without crash

- **Test Case ID:** TC_FAVCHAP_009
- **Title:** Secondary action button is present and clickable without crash
- **Preconditions:** Authenticated student is on the Favorite Chapters page.
- **Steps:**
  1. Locate secondary action button (`getByRole('button').nth(1)` — brittle nth fallback per selectors.md; unclear semantic purpose).
  2. Click secondary action button.
  3. Confirm heading **Favorite Chapters** is still visible (or page navigated without error).
- **Test data needed:** `favoriteChaptersUrl`, `loginUrl`, `validStudentSession`
- **Expected result:** Button is clickable without crash; page either stays stable or navigates cleanly. **Note:** This locator is brittle and its purpose is undocumented — may need manual inspection to clarify intent.
- **Priority:** Low

---

### Missing Selectors (userflow vs selectors.md)

The following are referenced in `favoriteChapters_userflow.md` (or needed for Favorite Chapters automation) but **are not present** in `favoriteChapters_selectors.md`. No executable test steps were invented for them.

| # | Userflow / need | Gap |
|---|-----------------|-----|
| 1 | "No Favorite Chapters Yet" empty state heading/message | No locator |
| 2 | Heart icon graphic (empty state) | No locator |
| 3 | Instructional text ("Start adding chapters to your favorites by clicking the favorite button on any lesson page") | No locator |
| 4 | **Browse Chapters** button (empty state CTA) | No locator |
| 5 | Favorite/heart toggle icon on individual chapter cards (unfavoriting) | No locator |
| 6 | Subject tag on chapter cards | No locator |
| 7 | Chapter title text on cards (only brittle div filter with specific text like "Forward Counting") | No stable/generic locator |
| 8 | Completion status on chapter cards | No locator |
| 9 | Play button on chapter cards (direct lesson access alternative) | No locator |
| 10 | Sidebar **Feedback** modal trigger | Out of scope for this selectors file |
| 11 | **Visit Website** external link | Out of scope for this selectors file |
| 12 | Sidebar **Dashboard** / **Switch Class** nav | Out of scope for this selectors file |

#### TC_FAVCHAP_010: Empty state displays "No Favorite Chapters Yet" heading

- **Test Case ID:** TC_FAVCHAP_010
- **Title:** Empty state displays "No Favorite Chapters Yet" heading
- **Preconditions:** Authenticated student is on the Favorite Chapters page with no favorited chapters.
- **Steps:**
  1. Locate heading **No Favorite Chapters Yet**.
- **Test data needed:** `favoriteChaptersUrl`, `loginUrl`, `validStudentSession`
- **Expected result:** Heading is visible.
- **Priority:** High

#### TC_FAVCHAP_011: Empty state shows instructional text

- **Test Case ID:** TC_FAVCHAP_011
- **Title:** Empty state shows instructional text
- **Preconditions:** Authenticated student is on the Favorite Chapters page with no favorited chapters.
- **Steps:**
  1. Locate text **Start adding chapters**.
- **Test data needed:** `favoriteChaptersUrl`, `loginUrl`, `validStudentSession`
- **Expected result:** Instructional text is visible.
- **Priority:** Medium

#### TC_FAVCHAP_012: Browse Chapters button is visible in empty state

- **Test Case ID:** TC_FAVCHAP_012
- **Title:** Browse Chapters button is visible in empty state
- **Preconditions:** Authenticated student is on the Favorite Chapters page with no favorited chapters.
- **Steps:**
  1. Locate button **Browse Chapters**.
- **Test data needed:** `favoriteChaptersUrl`, `loginUrl`, `validStudentSession`
- **Expected result:** CTA is visible and clickable.
- **Priority:** High

---

**Additional note:** The entire Empty State flow (Primary User Flow 1 in the userflow) cannot be automated with the current selectors. The secondary action button (`getByRole('button').nth(1)`) has no documented semantic purpose — it may correspond to the menu toggle or an undocumented control.
