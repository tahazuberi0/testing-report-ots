# Test Cases

## Explore Page

**URL under test:** `https://edu.offtheschool.io/explore`

**Sources:** `Explore_Page_userflow.md`, `Explore_Page_selectors.md`

### Coverage notes

- Scope is the **Explore Main hub** (`/explore`) only — Primary Flow Scenarios A and B (Digital School and Skills Academy cards).
- Happy-path clicks assert **redirect** to `/explore/digitalschool` or `/explore/skilledbased`; deep catalog flows are out of scope for this heading.
- Steps name UI elements as they appear in `Explore_Page_selectors.md`.
- Test data lists **field names only** (no concrete values).
- Userflow items with **no Explore Main selector** are not given invented steps; they are listed under [Missing Selectors](#missing-selectors-userflow-vs-selectorsmd).
- **Naming note:** Userflow says **[Explore Courses]**; selectors expose **Let's Start!** — steps use **Let's Start!**.

### Test Cases

#### TC_EXPLORE_001: Explore page loads with Digital School heading and Let's Start! visible

- **Test Case ID:** TC_EXPLORE_001
- **Title:** Explore page loads with Digital School heading and Let's Start! visible
- **Preconditions:** User can reach `https://edu.offtheschool.io/explore`.
- **Steps:**
  1. Navigate to the Explore Categories page (`/explore`).
  2. Locate heading **Digital School**.
  3. Locate button **Let's Start!** on the Digital School card.
- **Test data needed:** None
- **Expected result:** Explore hub loads; Digital School heading and **Let's Start!** button are visible and readable; page does not show a blank or error state.
- **Priority:** High

#### TC_EXPLORE_002: Digital School Let's Start! redirects to Digital School catalog

- **Test Case ID:** TC_EXPLORE_002
- **Title:** Digital School Let's Start! redirects to Digital School catalog
- **Preconditions:** User is on the Explore Categories page (`/explore`).
- **Steps:**
  1. Locate heading **Digital School**.
  2. Locate button **Let's Start!** associated with the Digital School card.
  3. Click **Let's Start!**.
- **Test data needed:** None
- **Expected result:** User is redirected to the Digital School catalog (`/explore/digitalschool` or equivalent Digital School catalog page) without error.
- **Priority:** High

#### TC_EXPLORE_003: Digital School card container and visuals are present

- **Test Case ID:** TC_EXPLORE_003
- **Title:** Digital School card container and visuals are present
- **Preconditions:** User is on the Explore Categories page (`/explore`).
- **Steps:**
  1. Locate heading **Digital School**.
  2. Locate button **Let's Start!** on the Digital School card.
  3. Confirm the Digital School card area is present using the heading and button (preferred).  
     *(If checking documented visuals: selectors.md lists image `.nth(5)`, `i`.first(), card filter `.nth(4)`, and `.css-1uxsqe` — these are brittle; do not treat them as the primary assertion.)*
- **Test data needed:** None
- **Expected result:** Digital School card is visible as a distinct category entry with heading and CTA; page layout remains intact.
- **Priority:** Medium

#### TC_EXPLORE_004: Skills Academy heading and Let's Start! are visible on Explore hub

- **Test Case ID:** TC_EXPLORE_004
- **Title:** Skills Academy heading and Let's Start! are visible on Explore hub
- **Preconditions:** User is on the Explore Categories page (`/explore`).
- **Steps:**
  1. Locate heading **Skills Academy**.
  2. Locate button **Let's Start!** on the Skills Academy card.
- **Test data needed:** None
- **Expected result:** Skills Academy heading and **Let's Start!** button are visible on the Explore hub.
- **Priority:** High

#### TC_EXPLORE_005: Skills Academy Let's Start! redirects to Skills Academy catalog

- **Test Case ID:** TC_EXPLORE_005
- **Title:** Skills Academy Let's Start! redirects to Skills Academy catalog
- **Preconditions:** User is on the Explore Categories page (`/explore`).
- **Steps:**
  1. Locate heading **Skills Academy**.
  2. Locate button **Let's Start!** associated with the Skills Academy card.
  3. Click **Let's Start!**.
- **Test data needed:** None
- **Expected result:** User is redirected to the Skills Academy catalog (`/explore/skilledbased` or equivalent Skills Academy catalog page) without error.
- **Priority:** High

#### TC_EXPLORE_006: Digital School and Skills Academy cards are both visible together

- **Test Case ID:** TC_EXPLORE_006
- **Title:** Digital School and Skills Academy cards are both visible together
- **Preconditions:** User is on the Explore Categories page (`/explore`).
- **Steps:**
  1. Locate heading **Digital School** and its **Let's Start!** button.
  2. Locate heading **Skills Academy** and its **Let's Start!** button.
  3. Observe both cards on the same Explore hub view.
- **Test data needed:** None
- **Expected result:** Both category cards are visible together; neither card hides or fully overlaps the other so that a CTA is unreachable.
- **Priority:** Medium

#### TC_EXPLORE_007: Soft refresh keeps Explore cards and CTAs visible

- **Test Case ID:** TC_EXPLORE_007
- **Title:** Soft refresh keeps Explore cards and CTAs visible
- **Preconditions:** User is on `/explore` with Digital School and Skills Academy cards visible.
- **Steps:**
  1. Confirm heading **Digital School**, heading **Skills Academy**, and both **Let's Start!** buttons are visible.
  2. Refresh the browser page.
  3. Re-check both headings and both **Let's Start!** buttons.
- **Test data needed:** None
- **Expected result:** After refresh, Explore hub still loads; both cards and CTAs remain visible.
- **Priority:** Medium

#### TC_EXPLORE_008: Double-click on Digital School Let's Start! does not break navigation

- **Test Case ID:** TC_EXPLORE_008
- **Title:** Double-click on Digital School Let's Start! does not break navigation
- **Preconditions:** User is on the Explore Categories page (`/explore`).
- **Steps:**
  1. Locate heading **Digital School**.
  2. Locate button **Let's Start!** on the Digital School card.
  3. Rapidly double-click **Let's Start!**.
- **Test data needed:** None
- **Expected result:** Navigation completes once to the Digital School catalog (or remains a single stable destination); page does not crash, show a blank error, or leave the user in a broken intermediate state.
- **Priority:** Medium

#### TC_EXPLORE_009: Browser Back from Digital School catalog returns to usable Explore hub

- **Test Case ID:** TC_EXPLORE_009
- **Title:** Browser Back from Digital School catalog returns to usable Explore hub
- **Preconditions:** User is on `/explore`.
- **Steps:**
  1. Click Digital School **Let's Start!** and wait for the Digital School catalog (`/explore/digitalschool`).
  2. Use the browser Back button.
  3. Locate heading **Digital School** and heading **Skills Academy**.
  4. Confirm both **Let's Start!** buttons are still visible and clickable.
- **Test data needed:** None
- **Expected result:** User returns to the Explore hub; both category cards remain interactive (no stale/blank hub).
- **Priority:** Low

---

### Missing Selectors (userflow vs selectors.md)

The following are referenced in `Explore_Page_userflow.md` (or needed for Explore Main automation) but **are not present** on Explore Main (`/explore`) in `Explore_Page_selectors.md`. No executable test steps were invented for them.

| # | Userflow / need | Gap |
|---|-----------------|-----|
| 1 | Header **Home**, **Reels**, **Meet Our Team**, **Contact Us** | No Explore Main selectors |
| 2 | Footer **Download App** / QR / **Google Play** | No selectors |
| 3 | Footer **Stay Updated** email field + submit | No selectors |
| 4 | Footer Quick Links **FAQ**, **Privacy Policy**, **Terms of Use** | No Explore Main selectors (**Quick Links** heading exists on Skills Academy catalog only) |
| 5 | Button label **Explore Courses** | Userflow name; selectors expose **Let's Start!** only |

**Additional naming note:** Userflow **[Explore Courses]** vs selector button **Let's Start!** — TC_EXPLORE_001–009 use the selector name.

#### TC_EXPLORE_010: Header navigation links Home, Reels, Meet Our Team are visible

- **Test Case ID:** TC_EXPLORE_010
- **Title:** Header navigation links Home, Reels, Meet Our Team are visible
- **Preconditions:** User can reach `https://edu.offtheschool.io/explore`.
- **Steps:**
  1. Navigate to the Explore page.
  2. Locate link "Home" (first).
  3. Locate text "Reels" (exact).
  4. Locate text "Meet Our Team".
- **Test data needed:** `url`
- **Expected result:** All three navigation elements are visible.
- **Priority:** Medium

#### TC_EXPLORE_011: Footer links FAQ, Privacy Policy, Terms of Use are visible

- **Test Case ID:** TC_EXPLORE_011
- **Title:** Footer links FAQ, Privacy Policy, Terms of Use are visible
- **Preconditions:** User can reach `https://edu.offtheschool.io/explore`.
- **Steps:**
  1. Navigate to the Explore page.
  2. Locate link FAQ (first).
  3. Locate link Privacy Policy.
  4. Locate link Terms of Use.
- **Test data needed:** `url`
- **Expected result:** All footer links are visible.
- **Priority:** Low

#### TC_EXPLORE_012: Footer Download App and Google Play are visible

- **Test Case ID:** TC_EXPLORE_012
- **Title:** Footer Download App and Google Play are visible
- **Preconditions:** User can reach `https://edu.offtheschool.io/explore`.
- **Steps:**
  1. Navigate to the Explore page.
  2. Locate text "Download App".
  3. Locate link Google Play.
- **Test data needed:** `url`
- **Expected result:** Both Download App text and Google Play link are visible.
- **Priority:** Low

#### TC_EXPLORE_013: Footer Stay Updated email field is present

- **Test Case ID:** TC_EXPLORE_013
- **Title:** Footer Stay Updated email field is present
- **Preconditions:** User can reach `https://edu.offtheschool.io/explore`.
- **Steps:**
  1. Navigate to the Explore page.
  2. Locate textbox with name matching email.
- **Test data needed:** `url`
- **Expected result:** Email input field is visible.
- **Priority:** Low

---

## Reels Page

**URL under test:** `https://edu.offtheschool.io/reels` (or entry via **Reels** nav from another page)

**Sources:** `Reels_Page_userflow.md`, `Reels_Page_selectors.md` (§1 Reels Page Selectors & Actions only)

### Coverage notes

- Scope is the **immersive OTS Reels player** — Primary (feed consumption/navigation), Secondary (engagement where selectors exist), and Tertiary (exit) flows from the userflow.
- Steps name UI elements as they appear in `Reels_Page_selectors.md` §1 only; selectors from §2 (Home, Dashboard, Signup, etc.) are out of scope.
- Test data lists **field names only** (no concrete values).
- Userflow items with **no Reels §1 selector** are not given invented steps; they are listed under [Missing Selectors](#missing-selectors-userflow-vs-selectorsmd-1).
- **Brittle-selector note:** **Select Video Container** uses a hard-coded title regex (`Digital Voices: From Pen to Keyboard…`); **Video Element (CSS)** uses `.css-ohxuui` — environment-specific; TCs reference documented names only.

### Test Cases

#### TC_REELS_001: Navigate via Reels nav loads the Reels experience

- **Test Case ID:** TC_REELS_001
- **Title:** Navigate via Reels nav loads the Reels experience
- **Preconditions:** User can reach the OTS EdTech site (e.g. homepage); **Reels** nav is available.
- **Steps:**
  1. Open a page that exposes header text **Reels**.
  2. Click **Reels**.
  3. Observe the Reels immersive view loads.
  4. Confirm **Scroll Trigger** text **Scroll down to see more reels — new clips load as you go.** and/or **Video Element (CSS)** `.css-ohxuui` is present.
- **Test data needed:** `entryPageUrl`
- **Expected result:** Reels experience loads; video player area or scroll hint is visible; no blank or error state.
- **Priority:** High

#### TC_REELS_002: Video container or video element is visible and interactable

- **Test Case ID:** TC_REELS_002
- **Title:** Video container or video element is visible and interactable
- **Preconditions:** User is on the Reels player view (via **Reels** nav or direct reels URL).
- **Steps:**
  1. Locate **Select Video Container** (documented filter for a specific reel title) **or** **Video Element (CSS)** `.css-ohxuui`.
  2. Confirm the element is visible.
  3. Click the video container or **Video Element (CSS)** if interaction is required to focus playback.
- **Test data needed:** `reelsUrl`, `videoContainerTitlePattern`
- **Expected result:** Video container or `.css-ohxuui` element is visible and clickable; player area remains stable.
- **Priority:** High

#### TC_REELS_003: Scroll Trigger hint is visible on the feed

- **Test Case ID:** TC_REELS_003
- **Title:** Scroll Trigger hint is visible on the feed
- **Preconditions:** User is on the Reels player view.
- **Steps:**
  1. Locate **Scroll Trigger** text **Scroll down to see more reels — new clips load as you go.**
- **Test data needed:** `reelsUrl`
- **Expected result:** Scroll hint is visible and readable; user understands how to load more clips.
- **Priority:** High

#### TC_REELS_004: Clicking Scroll Trigger advances the feed to the next reel

- **Test Case ID:** TC_REELS_004
- **Title:** Clicking Scroll Trigger advances the feed to the next reel
- **Preconditions:** User is watching a reel on the Reels player view.
- **Steps:**
  1. Note the current reel context (title or visible metadata if available).
  2. Click **Scroll Trigger** **Scroll down to see more reels — new clips load as you go.**
  3. Observe the feed after the interaction.
- **Test data needed:** `reelsUrl`, `initialReelTitle`
- **Expected result:** Feed advances; a new clip loads seamlessly without crash or technical error page.
- **Priority:** High

#### TC_REELS_005: Navigation Icon (SVG) advances to the next reel

- **Test Case ID:** TC_REELS_005
- **Title:** Navigation Icon (SVG) advances to the next reel
- **Preconditions:** User is on the Reels player view.
- **Steps:**
  1. Note the current reel context if visible.
  2. Click **Navigation Icon (SVG)** (`.css-1fobv7y > svg`).
  3. Observe the feed after the click.
- **Test data needed:** `reelsUrl`, `initialReelTitle`
- **Expected result:** Next reel in the queue loads; transition is stable with no blank or broken player state.
- **Priority:** Medium

#### TC_REELS_006: Back to home button exits the immersive Reels player

- **Test Case ID:** TC_REELS_006
- **Title:** Back to home button exits the immersive Reels player
- **Preconditions:** User is inside the Reels player interface.
- **Steps:**
  1. Locate **Back Button** (`Back to home`, description **Back**).
  2. Click **Back to home**.
- **Test data needed:** `reelsUrl`
- **Expected result:** Immersive player closes; user is redirected to home, the main Reels directory, or the previous page they visited; no error page.
- **Priority:** High

#### TC_REELS_007: Soft refresh keeps Reels player usable

- **Test Case ID:** TC_REELS_007
- **Title:** Soft refresh keeps Reels player usable
- **Preconditions:** User is on an active Reels player view with **Scroll Trigger** or video element visible.
- **Steps:**
  1. Confirm **Scroll Trigger** and/or **Video Element (CSS)** `.css-ohxuui` is visible.
  2. Refresh the browser page.
  3. Re-check **Scroll Trigger** and/or **Video Element (CSS)** visibility.
- **Test data needed:** `reelsUrl`
- **Expected result:** After refresh, Reels view reloads; scroll hint or video element remains visible; page does not stay blank or error.
- **Priority:** Medium

#### TC_REELS_008: Double-click Navigation Icon (SVG) does not break the feed

- **Test Case ID:** TC_REELS_008
- **Title:** Double-click Navigation Icon (SVG) does not break the feed
- **Preconditions:** User is on the Reels player view.
- **Steps:**
  1. Locate **Navigation Icon (SVG)** (`.css-1fobv7y > svg`).
  2. Rapidly double-click the navigation icon.
  3. Observe the resulting feed state.
- **Test data needed:** `reelsUrl`
- **Expected result:** Feed remains in a single stable state (one transition or unchanged reel); no crash, duplicate broken navigation, or blank player.
- **Priority:** Medium

#### TC_REELS_009: Re-entering Reels via nav after Back to home works

- **Test Case ID:** TC_REELS_009
- **Title:** Re-entering Reels via nav after Back to home works
- **Preconditions:** User exited Reels via **Back to home**.
- **Steps:**
  1. From the Reels player, click **Back Button** **Back to home**.
  2. Navigate to a page that exposes **Reels** nav text.
  3. Click **Reels** again.
  4. Confirm **Scroll Trigger** or **Video Element (CSS)** is visible.
- **Test data needed:** `reelsUrl`, `entryPageUrl`
- **Expected result:** User can re-enter Reels without broken state; player or scroll hint loads normally.
- **Priority:** Low

---

### Missing Selectors (userflow vs selectors.md)

The following are referenced in `Reels_Page_userflow.md` (or needed for Reels automation) but **are not present** in `Reels_Page_selectors.md` §1. No executable test steps were invented for them.

| # | Userflow / need | Gap |
|---|-----------------|-----|
| 1 | Mute/Unmute speaker icon (top right of player) | No selector |
| 2 | Bookmark icon (bottom right of player) | No selector |
| 3 | Dedicated **Down Arrow** button (right side) | No selector (only **Scroll Trigger** + **Navigation Icon (SVG)**) |
| 4 | **Show more** (expand truncated description) | No selector |
| 5 | **Share** button | No selector |
| 6 | Auto-playing `<video>` element assertion | Only **Video Element (CSS)** `.css-ohxuui` documented |
| 7 | Direct entry URL / selector for a named reel (e.g. "Entertainment Without Embarrassment") | No stable selector (**Select Video Container** is title-specific) |
| 8 | Second **Back Arrow** (top-left vs info-card top-right) | Only **Back to home** button documented |
| 9 | Right-side info panel, hashtags, truncated description | No selector |

**Additional note:** Secondary flow outcomes (expanded text after **Show more**, share modal/clipboard after **Share**) cannot be automated until selectors are added.
