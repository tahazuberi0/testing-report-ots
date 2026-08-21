# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: specs\Explore-Page.spec.js >> OTS EdTech Explore Page >> TC_EXPLORE_005: Skills Academy Let's Start! redirects to Skills Academy catalog
- Location: tests\specs\Explore-Page.spec.js:123:3

# Error details

```
TimeoutError: locator.waitFor: Timeout 15000ms exceeded.
Call log:
  - waiting for getByRole('heading', { name: 'Digital School' }) to be visible

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e3]:
    - generic [ref=e5]:
      - img "Logo" [ref=e7] [cursor=pointer]
      - generic [ref=e8]:
        - paragraph [ref=e9] [cursor=pointer]: Home
        - paragraph [ref=e10] [cursor=pointer]: Explore
        - paragraph [ref=e11] [cursor=pointer]: Reels
        - paragraph [ref=e12] [cursor=pointer]: Meet Our Team
        - paragraph [ref=e13] [cursor=pointer]: Contact Us
      - button [ref=e15] [cursor=pointer]:
        - generic:
          - img
        - img [ref=e17]
    - button "Open reels" [ref=e19] [cursor=pointer]:
      - img [ref=e20]
    - main [ref=e24]:
      - generic [ref=e25]:
        - generic [ref=e28]:
          - navigation "breadcrumb" [ref=e30]:
            - list [ref=e31]:
              - listitem [ref=e32]:
                - link "Home" [ref=e33] [cursor=pointer]:
                  - /url: /
                  - img [ref=e34]
                  - text: Home
                - img [ref=e37]
              - listitem [ref=e39]:
                - generic [ref=e40] [cursor=pointer]: Explore
                - img [ref=e41]
              - listitem [ref=e43]:
                - generic [ref=e44]: Categories
          - heading "Explore Categories" [level=2] [ref=e48]
        - generic [ref=e51]:
          - generic [ref=e55] [cursor=pointer]:
            - generic [ref=e57]:
              - generic [ref=e59]: Loading...
              - paragraph [ref=e60]: Loading...
            - img "Digital School" [ref=e65]
            - generic [ref=e67]:
              - heading "Digital School" [level=2] [ref=e68]
              - button "Explore Courses" [ref=e69]:
                - text: Explore Courses
                - img [ref=e72]
            - generic [ref=e75]: 
          - generic [ref=e77]:
            - generic:
              - generic:
                - img
            - generic [ref=e79] [cursor=pointer]:
              - generic [ref=e81]:
                - generic [ref=e83]: Loading...
                - paragraph [ref=e84]: Loading...
              - img "Skills Academy" [ref=e89]
              - generic [ref=e91]:
                - heading "Skills Academy" [level=2] [ref=e92]
                - button "Explore Courses" [ref=e93]:
                  - text: Explore Courses
                  - img [ref=e96]
              - generic [ref=e99]: 
        - generic [ref=e101]:
          - generic [ref=e102]:
            - generic [ref=e104]:
              - img "Off The School" [ref=e106]
              - paragraph [ref=e107]: Pakistan's first free EdTech platform. Learn smartly at your own Pace, Anywhere, Anytime.
              - generic [ref=e108]:
                - paragraph [ref=e109]: Stay Updated
                - generic [ref=e110]:
                  - textbox "Enter your email" [ref=e111]
                  - button [ref=e112] [cursor=pointer]:
                    - img [ref=e113]
              - generic [ref=e117]:
                - link "Facebook" [ref=e118] [cursor=pointer]:
                  - /url: https://www.facebook.com/OTS.Edtech/
                  - img [ref=e119]
                - link "Twitter" [ref=e121] [cursor=pointer]:
                  - /url: https://x.com/offtheschool
                  - img [ref=e122]
                - link "Instagram" [ref=e124] [cursor=pointer]:
                  - /url: https://www.instagram.com/otsedtech/
                  - img [ref=e125]
                - link "LinkedIn" [ref=e127] [cursor=pointer]:
                  - /url: https://linkedin.com/company/off-the-school/
                  - img [ref=e128]
                - link "YouTube" [ref=e130] [cursor=pointer]:
                  - /url: https://www.youtube.com/@otsedtech
                  - img [ref=e131]
            - generic [ref=e134]:
              - heading "Quick Links" [level=4] [ref=e135]
              - generic [ref=e136]:
                - link "About Us" [ref=e137] [cursor=pointer]:
                  - /url: /aboutus
                  - img [ref=e138]
                  - text: About Us
                - link "Contact" [ref=e141] [cursor=pointer]:
                  - /url: /contactus
                  - img [ref=e142]
                  - text: Contact
                - link "FAQ" [ref=e145] [cursor=pointer]:
                  - /url: /faq
                  - img [ref=e146]
                  - text: FAQ
                - link "Privacy Policy" [ref=e149] [cursor=pointer]:
                  - /url: /privacy-policy
                  - img [ref=e150]
                  - text: Privacy Policy
                - link "Terms of Use" [ref=e153] [cursor=pointer]:
                  - /url: /terms-of-use
                  - img [ref=e154]
                  - text: Terms of Use
            - generic [ref=e158]:
              - heading "Contact Us" [level=4] [ref=e159]
              - generic [ref=e160]:
                - generic [ref=e161]:
                  - img [ref=e163]
                  - paragraph [ref=e166]: Off The School, opposite Baghdadi Masjid, Martin Quarters, near Jail Road, Karachi
                - generic [ref=e167]:
                  - img [ref=e169]
                  - link "info@offtheschool.io" [ref=e172] [cursor=pointer]:
                    - /url: mailto:info@offtheschool.io
                - generic [ref=e173]:
                  - img [ref=e175]
                  - link "+92 301 0687687" [ref=e177] [cursor=pointer]:
                    - /url: tel:+923010687687
            - generic [ref=e179]:
              - heading "Download App" [level=4] [ref=e180]
              - generic [ref=e181]:
                - paragraph [ref=e182]: Get our app for a better learning experience
                - generic [ref=e184]:
                  - img "QR Code" [ref=e185]
                  - generic [ref=e186]:
                    - paragraph [ref=e187]: Scan to Download
                    - link "Google Play" [ref=e188] [cursor=pointer]:
                      - /url: https://play.google.com/store
                      - img "Google Play" [ref=e189]
          - generic [ref=e191]:
            - paragraph [ref=e192]: © 2026 Off The School. All rights reserved.
            - generic [ref=e193]:
              - link "Privacy" [ref=e194] [cursor=pointer]:
                - /url: /privacy-policy
              - link "Terms" [ref=e195] [cursor=pointer]:
                - /url: /terms-of-use
              - link "FAQ" [ref=e196] [cursor=pointer]:
                - /url: /faq
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