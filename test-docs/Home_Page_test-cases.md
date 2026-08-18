# Home Page Test Cases

## OTS EdTech Homepage

**URL under test:** `https://edu.offtheschool.io/`

**Sources:** `Home_Page_userflow.md`, `Home_Page_selectors.md`

### Coverage notes

- Scope is the **marketing homepage** only (Landing & Discovery through Retention & Support UI on `/`).
- Steps name UI elements as they appear in `Home_Page_selectors.md`.
- Test data lists **field names only** (no concrete values).
- Userflow items with **no selector** are not given invented steps; they are listed under [Missing Selectors](#missing-selectors-userflow-vs-selectorsmd).
- Userflow §5 (Assessment & Progress Dashboard / quizzes) is deferred — no homepage selectors.

### Test Cases

#### TC_HOME_001: Homepage loads with hero value proposition visible

- **Test Case ID:** TC_HOME_001
- **Title:** Homepage loads with hero value proposition visible
- **Preconditions:** User is unauthenticated; browser can reach `https://edu.offtheschool.io/`.
- **Steps:**
  1. Navigate to the OTS EdTech homepage.
  2. Locate hero text **Your Journey to**.
  3. Locate hero text **Growth**.
  4. Locate hero text **Free,world-class education** (value proposition).
  5. Locate badge/heading text **Pakistan's First Free EdTech Platform**.
- **Test data needed:** None
- **Expected result:** Hero content is visible and readable; page does not show a blank or error state.
- **Priority:** High

#### TC_HOME_002: Start Learning — It's Free navigates to registration or catalog

- **Test Case ID:** TC_HOME_002
- **Title:** Start Learning — It's Free navigates to registration or catalog
- **Preconditions:** User is on the homepage; unauthenticated.
- **Steps:**
  1. Locate the **Start Learning — It's Free** link in the Hero Section.
  2. Click **Start Learning — It's Free**.
- **Test data needed:** None
- **Expected result:** User is directed to account registration and/or course catalog (leaves homepage or opens the intended destination without error).
- **Priority:** High

#### TC_HOME_003: Search with a valid chapter keyword returns relevant results

- **Test Case ID:** TC_HOME_003
- **Title:** Search with a valid chapter keyword returns relevant results
- **Preconditions:** User is on the homepage.
- **Steps:**
  1. Locate the Search chapters textbox (**Search chapters by title (e.g**).
  2. Enter a valid chapter/subject search term.
  3. Submit or confirm the search (Enter or UI search action if present).
- **Test data needed:** `searchQuery` (valid chapter/subject keyword)
- **Expected result:** Relevant chapter/subject results appear, or user is navigated to a matching catalog/results view; no application crash.
- **Priority:** High

#### TC_HOME_004: Empty search query does not crash the homepage

- **Test Case ID:** TC_HOME_004
- **Title:** Empty search query does not crash the homepage
- **Preconditions:** User is on the homepage.
- **Steps:**
  1. Locate the Search chapters textbox (**Search chapters by title (e.g**).
  2. Leave the field empty (or clear any existing text).
  3. Attempt to submit/confirm search.
- **Test data needed:** `searchQuery` (empty)
- **Expected result:** Page remains stable; empty search is blocked by validation, shows a no-results/empty state, or simply stays on the homepage without error.
- **Priority:** Medium

#### TC_HOME_005: Search with a nonexistent term shows no-match handling

- **Test Case ID:** TC_HOME_005
- **Title:** Search with a nonexistent term shows no-match handling
- **Preconditions:** User is on the homepage.
- **Steps:**
  1. Locate the Search chapters textbox (**Search chapters by title (e.g**).
  2. Enter a nonsense / nonexistent search term.
  3. Submit or confirm the search.
- **Test data needed:** `searchQuery` (nonexistent / invalid keyword)
- **Expected result:** Empty or no-match state is shown, or results exclude false positives; homepage does not crash or expose a technical error.
- **Priority:** Medium

> **Not covered here (missing selectors):** Userflow hero actions **New: OTS Reels** and **Watch How It Works** — see Missing Selectors.

---

#### TC_HOME_006: Home nav keeps user on the homepage

- **Test Case ID:** TC_HOME_006
- **Title:** Home nav keeps user on the homepage
- **Preconditions:** User is on the homepage.
- **Steps:**
  1. Locate header text/link **Home**.
  2. Click **Home**.
- **Test data needed:** None
- **Expected result:** User remains on (or returns to) the homepage; hero section remains available.
- **Priority:** High

#### TC_HOME_007: Explore nav reaches explore destination

- **Test Case ID:** TC_HOME_007
- **Title:** Explore nav reaches explore destination
- **Preconditions:** User is on the homepage.
- **Steps:**
  1. Locate header text/link **Explore** (exact).
  2. Click **Explore**.
- **Test data needed:** None
- **Expected result:** User navigates to the Explore destination (or Explore content is shown) without error.
- **Priority:** High

#### TC_HOME_008: Reels nav opens micro-learning / reels

- **Test Case ID:** TC_HOME_008
- **Title:** Reels nav opens micro-learning / reels
- **Preconditions:** User is on the homepage.
- **Steps:**
  1. Locate header text/link **Reels**.
  2. Click **Reels**.
- **Test data needed:** None
- **Expected result:** User reaches Reels / micro-learning content (page, tab, or section) without error.
- **Priority:** High

#### TC_HOME_009: Header logo is visible and click is safe

- **Test Case ID:** TC_HOME_009
- **Title:** Header logo is visible and click is safe
- **Preconditions:** User is on the homepage.
- **Steps:**
  1. Locate image **Logo** (exact name).
  2. Optionally locate image **OTS Logo** in the header/menu area.
  3. Click **Logo**.
- **Test data needed:** None
- **Expected result:** Logo(s) are visible; click follows product design (e.g. stay/reload home) and does not break the page or submit unintended actions.
- **Priority:** Medium

#### TC_HOME_010: Register menuitem opens registration path

- **Test Case ID:** TC_HOME_010
- **Title:** Register menuitem opens registration path
- **Preconditions:** User is on the homepage; unauthenticated.
- **Steps:**
  1. Open the header menu control.  
     *(Selector gap: `selectors.md` lists brittle `menu-button-:rvd:` — use a resilient menu trigger once available; see Missing Selectors.)*
  2. Locate menuitem **Register**.
  3. Click **Register**.
- **Test data needed:** None
- **Expected result:** User is taken to the registration / sign-up path.
- **Priority:** High

#### TC_HOME_011: Dashboard menuitem routes by auth state

- **Test Case ID:** TC_HOME_011
- **Title:** Dashboard menuitem routes by auth state
- **Preconditions:** User is on the homepage (unauthenticated unless a separate auth setup is provided).
- **Steps:**
  1. Open the header menu control (same caveat as TC_HOME_010 regarding dynamic menu id).
  2. Locate menuitem **Dashboard**.
  3. Click **Dashboard**.
- **Test data needed:** `authState` (unauthenticated | authenticated)
- **Expected result:** Unauthenticated users are sent to login or blocked from protected dashboard content; authenticated users reach the dashboard. No blank/error page.
- **Priority:** Medium

---

#### TC_HOME_012: Digital School category links open grade catalogs

- **Test Case ID:** TC_HOME_012
- **Title:** Digital School category links open grade catalogs
- **Preconditions:** User is on the homepage.
- **Steps:**
  1. Scroll to / locate section text **Digital School**.
  2. Click link **Kindergarten Early learning**.
  3. Return to homepage (back or navigate home).
  4. Click link **Primary Classes 1-5 with core**.
  5. Return to homepage.
  6. Click link **Secondary Classes 6-8 with**.
  7. Return to homepage.
  8. Click link **Higher Secondary Classes 9-12**.
- **Test data needed:** `digitalSchoolCategory` (Kindergarten | Primary | Secondary | Higher Secondary)
- **Expected result:** Each category link redirects to the corresponding grade subjects/chapters catalog without error.
- **Priority:** High

> **Not covered here (missing selectors):** Course-count badges (e.g. “100+ Courses”) and skill **Office Suite** — see Missing Selectors.

#### TC_HOME_013: Skilled course links open practical modules

- **Test Case ID:** TC_HOME_013
- **Title:** Skilled course links open practical modules
- **Preconditions:** User is on the homepage.
- **Steps:**
  1. Locate section texts **Applied Learning** and **Skilled Courses**.
  2. Click link **Basic Computer Fundamentals**.
  3. Return to homepage.
  4. Click link **Canva Design Graphic design**.
  5. Return to homepage.
  6. Click link **Web Design Canva, Photoshop**.
- **Test data needed:** `skillCourse` (Basic Computer | Canva Design | Web Design)
- **Expected result:** Each skill link redirects to the relevant practical modules without error.
- **Priority:** Medium

#### TC_HOME_014: View All Skills opens full skills catalog

- **Test Case ID:** TC_HOME_014
- **Title:** View All Skills opens full skills catalog
- **Preconditions:** User is on the homepage in the Skilled Courses area.
- **Steps:**
  1. Locate link **View All Skills**.
  2. Click **View All Skills**.
- **Test data needed:** None
- **Expected result:** User is taken to the full skills catalog / listing.
- **Priority:** Medium

---

#### TC_HOME_015: Our Impact statistics are visible

- **Test Case ID:** TC_HOME_015
- **Title:** Our Impact statistics are visible
- **Preconditions:** User is on the homepage.
- **Steps:**
  1. Locate section text **Our Impact**.
  2. Locate heading/text **Numbers That Speak**.
  3. Locate supporting text **Transforming education across**.
  4. Locate impact cards: **5,000+Active Students**, **500+EdTech videos**, **1,000+lessons covered**, **200+Educators**.
- **Test data needed:** None
- **Expected result:** Impact section and all four statistic cards are visible and readable.
- **Priority:** Low

#### TC_HOME_016: How It Works learning-flow steps are visible

- **Test Case ID:** TC_HOME_016
- **Title:** How It Works learning-flow steps are visible
- **Preconditions:** User is on the homepage.
- **Steps:**
  1. Locate text **The learning Flow** / **How It Works** (exact).
  2. Locate **Start your learning journey**.
  3. Locate step **Create Account** and text **Sign up for free in seconds.**
  4. Locate step **Choose Your Class** and text **Select your grade level and**.
  5. Locate **Start Learning** paragraph and text **Watch engaging video lessons**.
  6. Locate **Track Progress** and text **Monitor your improvement and**.
- **Test data needed:** None
- **Expected result:** All How It Works steps and supporting copy are visible (content validation of the onboarding narrative on the homepage).
- **Priority:** High

#### TC_HOME_017: Get Start link initiates onboarding / registration

- **Test Case ID:** TC_HOME_017
- **Title:** Get Start link initiates onboarding / registration
- **Preconditions:** User is on the homepage; unauthenticated.
- **Steps:**
  1. Locate link **Get Start** in the Impact / Learning Flow section.  
     *(Naming note: userflow says “Get Started”; selectors.md exposes **Get Start** — use the selector name.)*
  2. Click **Get Start**.
- **Test data needed:** None
- **Expected result:** User is taken toward account registration / onboarding initiation. Full form completion and preferences (grade, board, subjects) are **out of scope** for this homepage case.
- **Priority:** High

---

#### TC_HOME_018: YouTube Learning Hub content is visible

- **Test Case ID:** TC_HOME_018
- **Title:** YouTube Learning Hub content is visible
- **Preconditions:** User is on the homepage.
- **Steps:**
  1. Locate **Video Lessons** section marker.
  2. Locate heading **Our YouTube Learning Hub**.
  3. Locate supporting copy about educational content.
  4. Locate image **Channel Logo**.
  5. Locate heading **OTS EdTech**.
  6. Locate metrics **2.0K Subs**, **496 Videos**, **146.2K Views**.
- **Test data needed:** None
- **Expected result:** YouTube Learning Hub section and channel summary metrics are visible.
- **Priority:** High

#### TC_HOME_019: Subscribe and View All Videos links open expected destinations

- **Test Case ID:** TC_HOME_019
- **Title:** Subscribe and View All Videos links open expected destinations
- **Preconditions:** User is on the homepage in the YouTube Learning Hub section.
- **Steps:**
  1. Locate link **Subscribe** (exact).
  2. Click **Subscribe** and note destination (same tab or new tab).
  3. Return to homepage if needed.
  4. Locate link **View All Videos**.
  5. Click **View All Videos**.
- **Test data needed:** None
- **Expected result:** Each link opens the intended YouTube/channel or videos destination without breaking the app.
- **Priority:** High

#### TC_HOME_020: Daily Micro Learning and Instagram follow are available

- **Test Case ID:** TC_HOME_020
- **Title:** Daily Micro Learning and Instagram follow are available
- **Preconditions:** User is on the homepage.
- **Steps:**
  1. Locate text **Daily Micro Learning**.
  2. Locate heading **Learn Something New In A**.
  3. Locate text **Scroll, Tap and Learn.**
  4. Locate supporting stats (**Avg reel length**, **Concepts simplified**, **Monthly views** / **500+** / **100K+** as shown).
  5. Click link **Follow us on Instagram**.
- **Test data needed:** None
- **Expected result:** Micro-learning section is visible; Instagram link opens the intended social destination.
- **Priority:** High

#### TC_HOME_021: Section Start Learning link navigates correctly

- **Test Case ID:** TC_HOME_021
- **Title:** Section Start Learning link navigates correctly
- **Preconditions:** User is on the homepage in the Daily Micro Learning / related CTA area.
- **Steps:**
  1. Locate link **Start Learning** (exact) — distinct from hero **Start Learning — It's Free**.
  2. Click **Start Learning**.
- **Test data needed:** None
- **Expected result:** Navigation succeeds to the intended learning/start destination without error.
- **Priority:** Medium

#### TC_HOME_022: Educational Network channel links are reachable

- **Test Case ID:** TC_HOME_022
- **Title:** Educational Network channel links are reachable
- **Preconditions:** User is on the homepage in the YouTube Channels / Educational Network section.
- **Steps:**
  1. Locate texts **Our YouTube Channels**, **Explore Our**, **Educational Network**.
  2. Click link **Off The School Comprehensive**.
  3. Return to homepage.
  4. Click link **EdNews Latest education**.
  5. Return to homepage.
  6. Click link **EdTech Technology-driven**.
  7. Return to homepage.
  8. Click link **EdSense Educational insights**.
  9. Return to homepage.
  10. Click link **EdFun Fun & engaging learning**.
  11. Return to homepage.
  12. Click link **Subscribe Our Channels**.
- **Test data needed:** `channelLink` (Off The School | EdNews | EdTech | EdSense | EdFun | Subscribe Our Channels)
- **Expected result:** Each channel/affiliate link opens the expected destination; page remains stable when returning.
- **Priority:** Medium

> **Not covered here (missing selectors):** Selecting a specific homepage chapter video card (e.g. “10th Class Computer, Sindh Board”) — see Missing Selectors.

---

#### TC_HOME_023: Footer Stay Updated and platform tagline are visible

- **Test Case ID:** TC_HOME_023
- **Title:** Footer Stay Updated and platform tagline are visible
- **Preconditions:** User is on the homepage.
- **Steps:**
  1. Scroll to the footer.
  2. Locate text **Stay UpdatedSubscribe to our**.
  3. Locate footer tagline containing **Pakistan's first free EdTech platform. Learn smartly at your own Pace, Anywhere**.
- **Test data needed:** None
- **Expected result:** Footer retention/support copy is visible.
- **Priority:** Medium

> **Not covered here (missing selectors):** Newsletter email field, subscribe control, `info@offtheschool.io`, and WhatsApp contact — see Missing Selectors.

---

#### TC_HOME_024: Soft refresh keeps homepage stable

- **Test Case ID:** TC_HOME_024
- **Title:** Soft refresh keeps homepage stable
- **Preconditions:** User is on the homepage with hero and header visible.
- **Steps:**
  1. Confirm **Home** nav and hero texts (**Your Journey to** / **Growth**) are visible.
  2. Refresh the browser page.
  3. Re-check **Home**, hero texts, and **Start Learning — It's Free**.
- **Test data needed:** None
- **Expected result:** After refresh, homepage still loads; header and hero primary elements remain visible.
- **Priority:** Medium

#### TC_HOME_025: Mobile viewport keeps hero CTA and search reachable

- **Test Case ID:** TC_HOME_025
- **Title:** Mobile viewport keeps hero CTA and search reachable
- **Preconditions:** Browser can set a mobile-sized viewport.
- **Steps:**
  1. Set viewport to a common mobile size.
  2. Open the homepage.
  3. Confirm Search chapters textbox (**Search chapters by title (e.g**) is visible or reachable.
  4. Confirm link **Start Learning — It's Free** is visible or reachable.
  5. Confirm header **Home** / **Explore** / **Reels** remain usable (or accessible via mobile menu if that is how the UI collapses — without inventing selectors not listed).
- **Test data needed:** `viewportWidth`, `viewportHeight`
- **Expected result:** No critical overlap/clipping that blocks search or the primary hero CTA; primary actions remain usable.
- **Priority:** Low

---

### Missing Selectors (userflow vs selectors.md)

The following are referenced in `Home_Page_userflow.md` (or needed for resilient automation) but **are not present** (or not safely usable) in `Home_Page_selectors.md`. No executable test steps were invented for them.

| # | Userflow / need | Gap |
|---|-----------------|-----|
| 1 | Hero CTA **New: OTS Reels** | No selector |
| 2 | Hero CTA **Watch How It Works** | No selector (section text **How It Works** exists; hero CTA does not) |
| 3 | Skill **Office Suite** | No selector (Basic Computer, Canva, Web Design only) |
| 4 | Digital School **course-count badges** (e.g. 100+ Courses) | No dedicated selector |
| 5 | Resilient header **menu** control | Only brittle `menu-button-:rvd:` (dynamic id) |
| 6 | Homepage **chapter video cards** (e.g. 10th Class Computer / Biology) | No video-card selectors |
| 7 | Newsletter **email field** + subscribe button | Footer has “Stay Updated…” text only |
| 8 | Footer contact **info@offtheschool.io** / **WhatsApp** | No selectors |
| 9 | Userflow §5 **Practice quizzes** / **Progress Dashboard** | Not homepage UI; no home selectors — defer to authenticated flows |

**Additional naming note:** Userflow “Get Started” vs selector link name **Get Start** — TC_HOME_017 uses the selector name.
