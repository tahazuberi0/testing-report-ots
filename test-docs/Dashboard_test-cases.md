# Test Cases

## Dashboard Page

**URL under test:** `https://edu.offtheschool.io/dashboard` (or post-login student dashboard landing)

**Sources:** `Dashboard_userflow.md`, `Dashboard_selectors.md` (Global Dashboard Elements & Navigation; Main Dashboard & Progress Tracking; My Subjects & Course Controls)

### Coverage notes

- Scope is the **Main Student Dashboard** shell only — Primary (resume coursework via My Subjects), Secondary (progress widgets with documented selectors), and Tertiary **sidebar navigation exits** (assert destination URL/heading only).
- Deep suites for Switch Class modal content, Manage Enrollments, Quiz Tracking, Leaderboard, Favorite Chapters, and Profile are **out of scope** for this heading.
- Steps name UI elements as they appear in `Dashboard_selectors.md`; prefer role/label/text over brittle CSS (`.css-18o5850`, `.css-1dpjja7`, `.css-10xamzf`).
- Test data lists **field names only** (no concrete values).
- Userflow has **no form validation** on this page (view/click flows only). Negatives/edges cover session and interaction stability, not field validation.
- Userflow items with **no Main Dashboard / Global selector** are not given invented steps; they are listed under [Missing Selectors](#missing-selectors-userflow-vs-selectorsmd).
- **Brittle-selector note:** **Watch video** and **Start Learning** use `.first()` in selectors.md; subject cards by name (COMPUTER, MATHEMATICS, URDU) are not individually selectable in selectors.md.

### Test Cases

#### TC_DASH_001: Authenticated student lands on Dashboard with key chrome visible

- **Test Case ID:** TC_DASH_001
- **Title:** Authenticated student lands on Dashboard with key chrome visible
- **Preconditions:** Student has a valid authenticated session; browser can reach the student dashboard.
- **Steps:**
  1. Navigate to the Dashboard (`dashboardUrl`) while authenticated (`validStudentSession`).
  2. Locate **OTS logo** (`img` name **OTS logo**).
  3. Locate sidebar nav group **Dashboard**.
  4. Locate heading **Your Progress**.
  5. Locate heading **My Subjects**.
- **Test data needed:** `dashboardUrl`, `validStudentSession`
- **Expected result:** Dashboard loads with logo, Dashboard nav group, Your Progress, and My Subjects visible; page does not show a blank or error state.
- **Priority:** High

#### TC_DASH_002: Your Progress section shows overall completion copy

- **Test Case ID:** TC_DASH_002
- **Title:** Your Progress section shows overall completion copy
- **Preconditions:** Authenticated student is on the Dashboard.
- **Steps:**
  1. Locate heading **Your Progress**.
  2. Locate text **Overall completion for your** (overall completion copy for the enrolled class).
  3. Optionally confirm related Progress label text (**Progress**.nth(1) per selectors.md) without relying on hard-coded percentage values.
- **Test data needed:** `dashboardUrl`, `validStudentSession`
- **Expected result:** Your Progress section is visible and readable; overall completion messaging is present; layout remains intact (do not assert a fixed percentage such as 5.7%).
- **Priority:** High

#### TC_DASH_003: My Subjects section and enrolled subjects area are visible

- **Test Case ID:** TC_DASH_003
- **Title:** My Subjects section and enrolled subjects area are visible
- **Preconditions:** Authenticated student is on the Dashboard and has at least one enrollment (per product data).
- **Steps:**
  1. Scroll to or locate heading **My Subjects**.
  2. Locate enrolled-subjects area text such as **My Subjects5 Enrolled** (or equivalent enrolled count text exposed in the UI).
  3. Confirm **Watch video** and/or **Start Learning** controls are present (`.first()` per selectors.md).
- **Test data needed:** `dashboardUrl`, `validStudentSession`
- **Expected result:** My Subjects section is visible with enrollment indication and subject action controls; section is usable for resuming coursework.
- **Priority:** High

#### TC_DASH_004: Watch video navigates to learning / video experience

- **Test Case ID:** TC_DASH_004
- **Title:** Watch video navigates to learning / video experience
- **Preconditions:** Authenticated student is on the Dashboard; My Subjects shows at least one **Watch video** control.
- **Steps:**
  1. Locate heading **My Subjects**.
  2. Locate button **Watch video** (`.first()`).
  3. Click **Watch video**.
- **Test data needed:** `dashboardUrl`, `validStudentSession`, `subjectAction`
- **Expected result:** Student is redirected to the active learning environment, video player, or equivalent lecture view for that subject without crash or error page.
- **Priority:** High

#### TC_DASH_005: Start Learning navigates to subject module/chapter list

- **Test Case ID:** TC_DASH_005
- **Title:** Start Learning navigates to subject module/chapter list
- **Preconditions:** Authenticated student is on the Dashboard; My Subjects shows at least one **Start Learning** control.
- **Steps:**
  1. Locate heading **My Subjects**.
  2. Locate button **Start Learning** (`.first()`).
  3. Click **Start Learning**.
- **Test data needed:** `dashboardUrl`, `validStudentSession`, `subjectAction`
- **Expected result:** Student is redirected to the subject module/chapter selection (or equivalent learning entry) without crash or error page.
- **Priority:** High

#### TC_DASH_006: Grid view and Carousel view controls are usable

- **Test Case ID:** TC_DASH_006
- **Title:** Grid view and Carousel view controls are usable
- **Preconditions:** Authenticated student is on the Dashboard with My Subjects visible.
- **Steps:**
  1. Locate heading **My Subjects**.
  2. Locate button **Grid view**.
  3. Click **Grid view**.
  4. Locate button **Carousel view**.
  5. Click **Carousel view**.
- **Test data needed:** `dashboardUrl`, `validStudentSession`
- **Expected result:** View toggles respond without error; My Subjects remains visible and usable after each toggle.
- **Priority:** Medium

#### TC_DASH_007: Scroll Left / Scroll Right move the subjects carousel

- **Test Case ID:** TC_DASH_007
- **Title:** Scroll Left / Scroll Right move the subjects carousel
- **Preconditions:** Authenticated student is on the Dashboard; My Subjects carousel controls are available (e.g. after Carousel view if required by UI).
- **Steps:**
  1. Locate heading **My Subjects**.
  2. Locate button **Scroll Right**.
  3. Click **Scroll Right**.
  4. Locate button **Scroll Left**.
  5. Click **Scroll Left**.
- **Test data needed:** `dashboardUrl`, `validStudentSession`
- **Expected result:** Scroll controls are clickable; carousel/subjects area remains stable with no crash or blank My Subjects section.
- **Priority:** Medium

#### TC_DASH_008: Sidebar Switch Class opens Switch Classes UI

- **Test Case ID:** TC_DASH_008
- **Title:** Sidebar Switch Class opens Switch Classes UI
- **Preconditions:** Authenticated student is on the Dashboard.
- **Steps:**
  1. Locate sidebar nav group **Switch Class**.
  2. Click **Switch Class**.
  3. Confirm Switch Classes UI appears via heading **Switch Classes** and/or **Select Your Class** (destination smoke check only).
- **Test data needed:** `dashboardUrl`, `validStudentSession`
- **Expected result:** Switch Class flow opens (modal or page) showing Switch Classes / Select Your Class; no error page. Deep class-selection actions are out of scope for this heading.
- **Priority:** High

#### TC_DASH_009: Sidebar Enrollments opens Manage Enrollments

- **Test Case ID:** TC_DASH_009
- **Title:** Sidebar Enrollments opens Manage Enrollments
- **Preconditions:** Authenticated student is on the Dashboard.
- **Steps:**
  1. Locate sidebar nav group **Enrollments**.
  2. Click **Enrollments**.
  3. Confirm Manage Enrollments view via heading **Manage Enrollments** and/or URL path `/dashboard/manage-enrollment`.
- **Test data needed:** `dashboardUrl`, `validStudentSession`, `manageEnrollmentUrl`
- **Expected result:** Student reaches Manage Enrollments; heading or URL matches expected destination without error. Deep enrollment management is out of scope for this heading.
- **Priority:** High

#### TC_DASH_010: Sidebar Quiz Tracking opens Quiz Performance Tracking

- **Test Case ID:** TC_DASH_010
- **Title:** Sidebar Quiz Tracking opens Quiz Performance Tracking
- **Preconditions:** Authenticated student is on the Dashboard.
- **Steps:**
  1. Locate sidebar nav group **Quiz Tracking**.
  2. Click **Quiz Tracking**.
  3. Confirm Quiz Tracking view via heading **Quiz Performance Tracking** and/or URL path `/dashboard/quiz-tracking`.
- **Test data needed:** `dashboardUrl`, `validStudentSession`, `quizTrackingUrl`
- **Expected result:** Student reaches Quiz Performance Tracking without error. Filter/sort deep interactions are out of scope for this heading.
- **Priority:** High

#### TC_DASH_011: Sidebar Leaderboard opens Leaderboard

- **Test Case ID:** TC_DASH_011
- **Title:** Sidebar Leaderboard opens Leaderboard
- **Preconditions:** Authenticated student is on the Dashboard.
- **Steps:**
  1. Locate sidebar nav group **Leaderboard**.
  2. Click **Leaderboard**.
  3. Confirm Leaderboard view via heading **Leaderboard** and/or URL path `/dashboard/leaderboard`.
- **Test data needed:** `dashboardUrl`, `validStudentSession`, `leaderboardUrl`
- **Expected result:** Student reaches Leaderboard without error. Global/Weekly tab deep interactions are out of scope for this heading.
- **Priority:** High

#### TC_DASH_012: Soft refresh keeps Dashboard progress and My Subjects visible

- **Test Case ID:** TC_DASH_012
- **Title:** Soft refresh keeps Dashboard progress and My Subjects visible
- **Preconditions:** Authenticated student is on the Dashboard with **Your Progress** and **My Subjects** visible.
- **Steps:**
  1. Confirm heading **Your Progress** and heading **My Subjects** are visible.
  2. Refresh the browser page.
  3. Re-check heading **Your Progress** and heading **My Subjects**.
- **Test data needed:** `dashboardUrl`, `validStudentSession`
- **Expected result:** After refresh, session remains (or rehydrates) such that Dashboard progress and My Subjects remain visible; page does not stay blank or error.
- **Priority:** Medium

#### TC_DASH_013: Unauthenticated access to Dashboard does not show student My Subjects

- **Test Case ID:** TC_DASH_013
- **Title:** Unauthenticated access to Dashboard does not show student My Subjects
- **Preconditions:** Browser has no valid student session (`unauthenticatedSession`).
- **Steps:**
  1. Navigate directly to `dashboardUrl` without logging in.
  2. Observe whether student Dashboard chrome appears (e.g. heading **My Subjects**, heading **Your Progress**).
- **Test data needed:** `dashboardUrl`, `unauthenticatedSession`
- **Expected result:** Unauthenticated user is redirected to login/sign-in (or equivalent gate) and does **not** see authenticated My Subjects / Your Progress student content; no privileged data leak.
- **Priority:** High

#### TC_DASH_014: Double-click Watch video does not break navigation

- **Test Case ID:** TC_DASH_014
- **Title:** Double-click Watch video does not break navigation
- **Preconditions:** Authenticated student is on the Dashboard; **Watch video** is available.
- **Steps:**
  1. Locate button **Watch video** (`.first()`).
  2. Rapidly double-click **Watch video**.
  3. Observe resulting navigation/player state.
- **Test data needed:** `dashboardUrl`, `validStudentSession`, `subjectAction`
- **Expected result:** App reaches a single stable learning/video destination (or one clean navigation); no crash, blank page, or broken duplicate error state.
- **Priority:** Medium

#### TC_DASH_015: Close button is available without crashing the dashboard

- **Test Case ID:** TC_DASH_015
- **Title:** Close button is available without crashing the dashboard
- **Preconditions:** Authenticated student is on the Dashboard where button **Close** is present in the UI (per selectors.md).
- **Steps:**
  1. Locate button **Close**.
  2. Confirm it is visible (and click once if the control is enabled in the current view).
  3. Observe Dashboard stability after the interaction.
- **Test data needed:** `dashboardUrl`, `validStudentSession`
- **Expected result:** Close control is discoverable; interacting with it does not crash the Dashboard or leave a blank error page. Do not invent a specific modal/content flow beyond what selectors document.
- **Priority:** Low

---

### Missing Selectors (userflow vs selectors.md)

The following are referenced in `Dashboard_userflow.md` (or needed for Main Dashboard automation) but **are not present** under Global / Main Dashboard / My Subjects sections of `Dashboard_selectors.md`. No executable test steps were invented for them.

| # | Userflow / need | Gap |
|---|-----------------|-----|
| 1 | Day Streak (e.g. 2 Days) in top-left gamification banner | No selector |
| 2 | Best Streak | No selector |
| 3 | Accumulated XP (e.g. 3,364 XP) | No selector |
| 4 | Weekly Progress card / weekly goal percentage | No selector |
| 5 | Feedback (sidebar — bug report / suggestion) | No selector |
| 6 | Logout (sidebar — end session) | No selector |
| 7 | Subject cards by name (COMPUTER, MATHEMATICS, URDU, etc.) | No subject-specific locator; only **Watch video** / **Start Learning** `.first()` |
| 8 | Profile / account entry from Main Dashboard shell | Profile section lists `img` name **Taha** only — not treated as a Main Dashboard primary selector for this heading |

**Additional note:** Secondary flow outcomes that depend on Day Streak / Best Streak / XP / Weekly Progress cannot be automated until those selectors are added. Tertiary Feedback and Logout cannot be automated until selectors are added.

---

### Newly Discovered Selector Test Cases

#### TC_DASH_016: Day Streak gamification text is visible

- **Test Case ID:** TC_DASH_016
- **Title:** Day Streak gamification text is visible
- **Preconditions:** Authenticated student on Dashboard.
- **Steps:**
  1. Locate text matching /Day Streak/i.
- **Test data needed:** `dashboardUrl`, `loginUrl`, `validStudentSession`
- **Expected result:** Day streak text is visible.
- **Priority:** Medium

#### TC_DASH_017: Accumulated XP is visible

- **Test Case ID:** TC_DASH_017
- **Title:** Accumulated XP is visible
- **Preconditions:** Authenticated student on Dashboard.
- **Steps:**
  1. Locate text matching /\d[\d,]* XP/.
- **Test data needed:** `dashboardUrl`, `loginUrl`, `validStudentSession`
- **Expected result:** XP count is visible.
- **Priority:** Medium

#### TC_DASH_018: Weekly Progress section is visible

- **Test Case ID:** TC_DASH_018
- **Title:** Weekly Progress section is visible
- **Preconditions:** Authenticated student on Dashboard.
- **Steps:**
  1. Locate text "Weekly Progress".
  2. Locate text matching /weekly goal/i.
- **Test data needed:** `dashboardUrl`, `loginUrl`, `validStudentSession`
- **Expected result:** Weekly Progress and goal text are visible.
- **Priority:** Medium

#### TC_DASH_019: Feedback sidebar link is visible

- **Test Case ID:** TC_DASH_019
- **Title:** Feedback sidebar link is visible
- **Preconditions:** Authenticated student on Dashboard, sidebar expanded.
- **Steps:**
  1. Locate text "Feedback".
- **Test data needed:** `dashboardUrl`, `loginUrl`, `validStudentSession`
- **Expected result:** Feedback link is visible in sidebar.
- **Priority:** Low

#### TC_DASH_020: Logout sidebar link is visible

- **Test Case ID:** TC_DASH_020
- **Title:** Logout sidebar link is visible
- **Preconditions:** Authenticated student on Dashboard, sidebar expanded.
- **Steps:**
  1. Locate text "Logout" (first match).
- **Test data needed:** `dashboardUrl`, `loginUrl`, `validStudentSession`
- **Expected result:** Logout link is visible in sidebar.
- **Priority:** Medium

#### TC_DASH_021: Subject cards are individually identifiable by name

- **Test Case ID:** TC_DASH_021
- **Title:** Subject cards are individually identifiable by name
- **Preconditions:** Authenticated student on Dashboard with enrollments.
- **Steps:**
  1. Locate text COMPUTER.
  2. Locate text MATHEMATICS.
- **Test data needed:** `dashboardUrl`, `loginUrl`, `validStudentSession`
- **Expected result:** At least COMPUTER and MATHEMATICS subject name texts are visible.
- **Priority:** Medium
