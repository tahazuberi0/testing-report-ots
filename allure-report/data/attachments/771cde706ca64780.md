# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: specs\Explore-Page.spec.js >> OTS EdTech Explore Page >> TC_EXPLORE_006: Digital School and Skills Academy cards are both visible together
- Location: tests\specs\Explore-Page.spec.js:147:3

# Error details

```
TimeoutError: locator.waitFor: Timeout 15000ms exceeded.
Call log:
  - waiting for getByRole('heading', { name: 'Digital School' }) to be visible

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e19]:
    - generic [ref=e20]:
      - img [ref=e22]
      - img "OTS Logo" [ref=e26]
    - generic [ref=e27]:
      - paragraph [ref=e29]: Loading
      - paragraph [ref=e34]: Preparing your experience
  - generic:
    - region "Notifications-top"
    - region "Notifications-top-left"
    - region "Notifications-top-right"
    - region "Notifications-bottom-left"
    - region "Notifications-bottom"
    - region "Notifications-bottom-right"
```

# Test source

```ts
  1  | /**
  2  |  * Page Object for the OTS EdTech Explore hub (`/explore`).
  3  |  * Locator priority: role/label/text > data-testid > stable CSS > nth-child (commented if used).
  4  |  *
  5  |  * LIVE vs selectors.md: selectors.md documents button "Let's Start!" (0 matches on live page).
  6  |  * Live + userflow use "Explore Courses" (2 buttons — scoped to each card below).
  7  |  */
  8  | export class ExplorePage {
  9  |   /**
  10 |    * @param {import('@playwright/test').Page} page
  11 |    */
  12 |   constructor(page) {
  13 |     this.page = page;
  14 | 
  15 |     this.digitalSchoolHeading = page.getByRole('heading', { name: 'Digital School' });
  16 |     this.skillsAcademyHeading = page.getByRole('heading', { name: 'Skills Academy' });
  17 | 
  18 |     // Unscoped getByRole('button', { name: 'Explore Courses' }) matches 2 elements.
  19 |     // Exclude the sibling card heading so we do not match the shared outer wrapper.
  20 |     this.digitalSchoolCard = page
  21 |       .locator('div')
  22 |       .filter({ has: this.digitalSchoolHeading })
  23 |       .filter({ hasNot: this.skillsAcademyHeading })
  24 |       .filter({ has: page.getByRole('button', { name: 'Explore Courses' }) })
  25 |       .last();
  26 |     this.digitalSchoolStartBtn = this.digitalSchoolCard.getByRole('button', {
  27 |       name: 'Explore Courses',
  28 |     });
  29 | 
  30 |     this.skillsAcademyCard = page
  31 |       .locator('div')
  32 |       .filter({ has: this.skillsAcademyHeading })
  33 |       .filter({ hasNot: this.digitalSchoolHeading })
  34 |       .filter({ has: page.getByRole('button', { name: 'Explore Courses' }) })
  35 |       .last();
  36 |     this.skillsAcademyStartBtn = this.skillsAcademyCard.getByRole('button', {
  37 |       name: 'Explore Courses',
  38 |     });
  39 | 
  40 |     // STALE selectors.md locators (live count = 0) — kept for documentation only
  41 |     this.digitalSchoolLetsStartBtn = page.getByRole('button', { name: "Let's Start!" });
  42 |     this.skillsAcademyLetsStartBtn = page.getByRole('button', { name: "Let's Start!" });
  43 | 
  44 |     // --- Newly resolved gap selectors ---
  45 |     this.homeLink = page.getByRole('link', { name: 'Home' }).first();
  46 |     this.reelsText = page.getByText('Reels', { exact: true });
  47 |     this.meetOurTeamText = page.getByText('Meet Our Team');
  48 |     this.downloadAppText = page.getByText('Download App');
  49 |     this.googlePlayLink = page.getByRole('link', { name: /google play/i });
  50 |     this.stayUpdatedEmail = page.getByRole('textbox', { name: /email/i });
  51 |     this.faqLink = page.getByRole('link', { name: 'FAQ' }).first();
  52 |     this.privacyPolicyLink = page.getByRole('link', { name: 'Privacy Policy' });
  53 |     this.termsOfUseLink = page.getByRole('link', { name: 'Terms of Use' });
  54 | 
  55 |     // FALLBACK nth: selectors.md visual locators — not used as primary assertions
  56 |     this.digitalSchoolCardImg = page.getByRole('img').nth(5);
  57 |     this.digitalSchoolIcon = page.locator('i').first();
  58 |     this.digitalSchoolCardCss = page.locator('.css-1uxsqe').first();
  59 |   }
  60 | 
  61 |   async goto(url = 'https://edu.offtheschool.io/explore') {
  62 |     await this.page.goto(url);
> 63 |     await this.digitalSchoolHeading.waitFor({ state: 'visible' });
     |                                     ^ TimeoutError: locator.waitFor: Timeout 15000ms exceeded.
  64 |   }
  65 | 
  66 |   async clickDigitalSchoolStart() {
  67 |     await this.digitalSchoolStartBtn.click();
  68 |   }
  69 | 
  70 |   async clickSkillsAcademyStart() {
  71 |     await this.skillsAcademyStartBtn.click();
  72 |   }
  73 | 
  74 |   async doubleClickDigitalSchoolStart() {
  75 |     await this.digitalSchoolStartBtn.dblclick();
  76 |   }
  77 | }
  78 | 
```