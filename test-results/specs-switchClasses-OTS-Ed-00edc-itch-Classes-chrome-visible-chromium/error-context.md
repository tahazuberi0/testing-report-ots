# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: specs\switchClasses.spec.js >> OTS EdTech Switch Classes Page >> TC_SWITCH_011: Soft refresh keeps Switch Classes chrome visible
- Location: tests\specs\switchClasses.spec.js:280:3

# Error details

```
TimeoutError: locator.waitFor: Timeout 20000ms exceeded.
Call log:
  - waiting for getByRole('heading', { name: 'Switch Classes' }) to be visible

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - main [ref=e5]:
    - generic [ref=e6]:
      - generic [ref=e9]:
        - img "menu icon" [ref=e11] [cursor=pointer]
        - img "OTS logo" [ref=e13] [cursor=pointer]
        - generic [ref=e14]:
          - img "Taha" [ref=e17] [cursor=pointer]
          - generic [ref=e18] [cursor=pointer]:
            - paragraph [ref=e19]: Taha
            - paragraph [ref=e20]: Student
          - button "User Options" [ref=e21] [cursor=pointer]:
            - img [ref=e22]
      - generic [ref=e24]:
        - generic [ref=e25]:
          - group [ref=e26] [cursor=pointer]:
            - img [ref=e28]
            - paragraph: Dashboard
          - group [ref=e30] [cursor=pointer]:
            - img [ref=e32]
            - paragraph: Switch Class
          - group [ref=e34] [cursor=pointer]:
            - img [ref=e36]
            - paragraph: Reels
          - group [ref=e39] [cursor=pointer]:
            - img [ref=e41]
            - paragraph: Enrollments
          - group [ref=e44] [cursor=pointer]:
            - img [ref=e46]
            - paragraph: Quiz Tracking
          - group [ref=e48] [cursor=pointer]:
            - img [ref=e50]
            - paragraph: Leaderboard
          - group [ref=e52] [cursor=pointer]:
            - img [ref=e54]
            - paragraph: Favorite Chapters
          - group [ref=e56] [cursor=pointer]:
            - img [ref=e58]
            - paragraph: Visit Website
          - group [ref=e60] [cursor=pointer]:
            - img [ref=e62]
            - paragraph: Feedback
          - group [ref=e64] [cursor=pointer]:
            - img [ref=e66]
            - paragraph: Logout
        - generic [ref=e69]:
          - generic [ref=e74]:
            - button "Back" [ref=e76] [cursor=pointer]:
              - img [ref=e78]
              - text: Back
            - generic [ref=e82]:
              - img [ref=e84]
              - generic [ref=e86]:
                - heading "No Enrollments" [level=2] [ref=e88]
                - paragraph [ref=e89]: You need to enroll in a course to access the dashboard
          - generic [ref=e92]:
            - img [ref=e94]
            - heading "No Courses Enrolled" [level=2] [ref=e96]
            - paragraph [ref=e97]: You haven't enrolled in any courses yet. Enroll in a course to start your learning journey and access all the features.
            - button "Enroll in a Course" [ref=e98] [cursor=pointer]:
              - img [ref=e100]
              - text: Enroll in a Course
            - button "Explore OTS Reels" [ref=e102] [cursor=pointer]
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
  1   | /**
  2   |  * Page Object for the Switch Classes page (`/dashboard/change-course`).
  3   |  * Locator priority: role/label/text > data-testid > stable CSS > nth-child (commented if used).
  4   |  *
  5   |  * LIVE notes:
  6   |  * - Watch video / Start Learning each match multiple subject cards — use .first().
  7   |  * - Scroll Left / Right appear only after Carousel view is active.
  8   |  * - Close appears after Watch video opens the lecture dialog.
  9   |  * - Progress label uses .nth(1) per selectors.md.
  10  |  */
  11  | export class SwitchClassesPage {
  12  |   /**
  13  |    * @param {import('@playwright/test').Page} page
  14  |    */
  15  |   constructor(page) {
  16  |     this.page = page;
  17  | 
  18  |     // --- Navigation & Page Header ---
  19  |     this.backButton = page.getByRole('button', { name: 'Back' });
  20  |     this.switchClassesHeading = page.getByRole('heading', { name: 'Switch Classes' });
  21  |     this.headerSubtext = page.getByText('Switch ClassesChange your');
  22  | 
  23  |     // --- Class Selection ---
  24  |     this.selectYourClassHeading = page.getByRole('heading', { name: 'Select Your Class' });
  25  |     this.availableClassesText = page.getByText('Available Classes');
  26  |     this.chooseFromEnrolledText = page.getByText('Choose from your enrolled');
  27  |     this.classSelectorButton = page.getByRole('button', { name: 'Class' });
  28  | 
  29  |     // --- Your Progress ---
  30  |     this.yourProgressHeading = page.getByRole('heading', { name: 'Your Progress' });
  31  |     this.overallCompletionText = page.getByText('Overall completion for your');
  32  |     // FALLBACK nth: selectors.md Progress.nth(1)
  33  |     this.progressLabel = page.getByText('Progress').nth(1);
  34  | 
  35  |     // --- My Subjects ---
  36  |     this.mySubjectsHeading = page.getByRole('heading', { name: 'My Subjects' });
  37  |     this.mySubjectsEnrolled = page.getByText(/My Subjects\s*\d*\s*Enrolled/i);
  38  | 
  39  |     this.gridViewButton = page.getByRole('button', { name: 'Grid view' });
  40  |     this.carouselViewButton = page.getByRole('button', { name: 'Carousel view' });
  41  |     this.scrollLeftButton = page.getByRole('button', { name: 'Scroll Left' });
  42  |     this.scrollRightButton = page.getByRole('button', { name: 'Scroll Right' });
  43  | 
  44  |     // FALLBACK first: selectors.md — multiple subject cards
  45  |     this.watchVideoButton = page.getByRole('button', { name: 'Watch video' }).first();
  46  |     // FALLBACK first: selectors.md — multiple subject cards
  47  |     this.startLearningButton = page.getByRole('button', { name: 'Start Learning' }).first();
  48  | 
  49  |     this.closeButton = page.getByRole('button', { name: 'Close' });
  50  |     this.lectureDialog = page.getByRole('dialog');
  51  | 
  52  |     // Not in switchClasses_selectors.md — needed to expand collapsed sidebar
  53  |     this.menuIcon = page.getByRole('img', { name: 'menu icon' });
  54  |   }
  55  | 
  56  |   /**
  57  |    * @param {{ email: string, password: string }} credentials
  58  |    * @param {string} loginUrl
  59  |    */
  60  |   async loginAsStudent(credentials, loginUrl = 'https://edu.offtheschool.io/login') {
  61  |     await this.page.goto(loginUrl, { waitUntil: 'domcontentloaded' });
  62  |     const emailInput = this.page.getByRole('textbox', { name: 'Email Address' });
  63  |     await emailInput.waitFor({ state: 'visible', timeout: 20000 });
  64  |     await this.page.keyboard.press('Escape').catch(() => {});
  65  |     await emailInput.fill(credentials.email);
  66  |     await this.page
  67  |       .getByLabel(/^Password/)
  68  |       .or(this.page.getByRole('textbox', { name: 'Password' }))
  69  |       .fill(credentials.password);
  70  |     await this.page.getByRole('button', { name: 'Sign In' }).click();
  71  |     await this.page.waitForURL(/\/(home|dashboard)/i, { timeout: 45000 });
  72  |   }
  73  | 
  74  |   async gotoSwitchClasses(
  75  |     changeCourseUrl = 'https://edu.offtheschool.io/dashboard/change-course'
  76  |   ) {
  77  |     await this.page.goto(changeCourseUrl, { waitUntil: 'domcontentloaded' });
> 78  |     await this.switchClassesHeading.waitFor({ state: 'visible', timeout: 20000 });
      |                                     ^ TimeoutError: locator.waitFor: Timeout 20000ms exceeded.
  79  |   }
  80  | 
  81  |   async ensureAuthenticatedSwitchClasses(credentials, loginUrl, changeCourseUrl) {
  82  |     await this.loginAsStudent(credentials, loginUrl);
  83  |     await this.gotoSwitchClasses(changeCourseUrl);
  84  |   }
  85  | 
  86  |   async openWatchVideo() {
  87  |     await this.watchVideoButton.click();
  88  |     await this.lectureDialog.or(this.closeButton).first().waitFor({
  89  |       state: 'visible',
  90  |       timeout: 15000,
  91  |     });
  92  |   }
  93  | 
  94  |   async clickStartLearning() {
  95  |     await this.startLearningButton.click();
  96  |   }
  97  | 
  98  |   async enableCarouselView() {
  99  |     await this.carouselViewButton.click();
  100 |     await this.scrollRightButton.waitFor({ state: 'visible', timeout: 10000 });
  101 |   }
  102 | }
  103 | 
```