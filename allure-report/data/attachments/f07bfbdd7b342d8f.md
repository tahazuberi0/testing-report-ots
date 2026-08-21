# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: specs\Dashboard.spec.js >> OTS EdTech Dashboard Page >> TC_DASH_014: Double-click Watch video does not break navigation
- Location: tests\specs\Dashboard.spec.js:356:3

# Error details

```
TimeoutError: locator.fill: Timeout 15000ms exceeded.
Call log:
  - waiting for getByRole('textbox', { name: 'Email Address' })

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e3]:
    - button "Open reels" [ref=e4] [cursor=pointer]:
      - img [ref=e5]
    - main [ref=e9]:
      - generic [ref=e11]:
        - generic [ref=e12]:
          - img "OTS Logo" [ref=e13] [cursor=pointer]
          - button "Back to Home" [ref=e14] [cursor=pointer]:
            - img [ref=e16]
            - text: Back to Home
        - generic [ref=e18]:
          - generic [ref=e19]:
            - heading "Sign in to your account" [level=2] [ref=e20]
            - paragraph [ref=e21]: Continue your learning journey with OTS EdTech
          - button "Continue with Google" [ref=e23] [cursor=pointer]:
            - img [ref=e25]
            - text: Continue with Google
          - generic [ref=e31]:
            - separator [ref=e32]
            - paragraph [ref=e33]: or continue with email
            - separator [ref=e34]
          - generic [ref=e35]:
            - group [ref=e37]:
              - generic [ref=e38]: Email Address*
              - generic [ref=e39]:
                - img [ref=e41]
                - textbox "Email Address" [ref=e43]:
                  - /placeholder: you@example.com
            - group [ref=e45]:
              - generic [ref=e46]: Password*
              - generic [ref=e47]:
                - img [ref=e49]
                - textbox "Password" [ref=e51]:
                  - /placeholder: Enter your password
                - img [ref=e53] [cursor=pointer]
            - paragraph [ref=e57] [cursor=pointer]: Forgot Password?
            - button "Sign In" [ref=e59] [cursor=pointer]:
              - text: Sign In
              - img [ref=e61]
            - paragraph [ref=e64]: Don't have an account? Sign up for free
          - paragraph [ref=e66]: By signing in, you agree to our Terms of Service and Privacy Policy
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
  2   |  * Page Object for the OTS EdTech Student Dashboard (`/dashboard`).
  3   |  * Locator priority: role/label/text > data-testid > stable CSS > nth-child (commented if used).
  4   |  *
  5   |  * LIVE notes:
  6   |  * - Sidebar starts collapsed; expand via menu icon before clicking labeled nav groups.
  7   |  * - Watch video / Start Learning each match 5 subject cards — use .first() per selectors.md.
  8   |  * - Scroll Left/Right appear after Carousel view.
  9   |  * - Close appears after Watch video opens the lecture dialog (not on idle dashboard).
  10  |  * - Progress label uses .nth(1) per selectors.md.
  11  |  */
  12  | export class DashboardPage {
  13  |   /**
  14  |    * @param {import('@playwright/test').Page} page
  15  |    */
  16  |   constructor(page) {
  17  |     this.page = page;
  18  | 
  19  |     this.otsLogo = page.getByRole('img', { name: 'OTS logo' });
  20  |     this.menuIcon = page.getByRole('img', { name: 'menu icon' });
  21  | 
  22  |     this.dashboardNav = page.getByRole('group').filter({ hasText: 'Dashboard' });
  23  |     this.switchClassNav = page.getByRole('group').filter({ hasText: 'Switch Class' });
  24  |     this.reelsNav = page.getByRole('group').filter({ hasText: 'Reels' });
  25  |     this.enrollmentsNav = page.getByRole('group').filter({ hasText: 'Enrollments' });
  26  |     this.quizTrackingNav = page.getByRole('group').filter({ hasText: 'Quiz Tracking' });
  27  |     this.leaderboardNav = page.getByRole('group').filter({ hasText: 'Leaderboard' });
  28  |     this.favoriteChaptersNav = page.getByRole('group').filter({ hasText: 'Favorite Chapters' });
  29  | 
  30  |     this.yourProgressHeading = page.getByRole('heading', { name: 'Your Progress' });
  31  |     this.overallCompletionText = page.getByText('Overall completion for your');
  32  |     // FALLBACK nth: selectors.md Progress.nth(1)
  33  |     this.progressLabel = page.getByText('Progress').nth(1);
  34  | 
  35  |     this.mySubjectsHeading = page.getByRole('heading', { name: 'My Subjects' });
  36  |     this.mySubjectsEnrolled = page.getByText(/My Subjects\s*\d*\s*Enrolled/i);
  37  | 
  38  |     this.gridViewButton = page.getByRole('button', { name: 'Grid view' });
  39  |     this.carouselViewButton = page.getByRole('button', { name: 'Carousel view' });
  40  |     this.scrollLeftButton = page.getByRole('button', { name: 'Scroll Left' });
  41  |     this.scrollRightButton = page.getByRole('button', { name: 'Scroll Right' });
  42  | 
  43  |     // FALLBACK first: selectors.md — live matches 5 subject cards
  44  |     this.watchVideoButton = page.getByRole('button', { name: 'Watch video' }).first();
  45  |     // FALLBACK first: selectors.md — live matches 5 subject cards
  46  |     this.startLearningButton = page.getByRole('button', { name: 'Start Learning' }).first();
  47  | 
  48  |     this.closeButton = page.getByRole('button', { name: 'Close' });
  49  | 
  50  |     this.dayStreakText = page.getByText(/Day Streak/i);
  51  |     this.xpText = page.getByText(/\d[\d,]* XP/);
  52  |     this.weeklyProgressText = page.getByText('Weekly Progress');
  53  |     this.weeklyGoalText = page.getByText(/weekly goal/i);
  54  |     this.feedbackText = page.getByText('Feedback');
  55  |     this.logoutText = page.getByText('Logout', { exact: true }).first();
  56  |     this.subjectComputer = page.getByText(/^computer$/i);
  57  |     this.subjectMathematics = page.getByText(/^mathematics$/i);
  58  |     this.lectureDialog = page.getByRole('dialog');
  59  | 
  60  |     this.switchClassesHeading = page.getByRole('heading', { name: 'Switch Classes' });
  61  |     this.selectYourClassHeading = page.getByRole('heading', { name: 'Select Your Class' });
  62  |     this.manageEnrollmentsHeading = page.getByRole('heading', { name: 'Manage Enrollments' });
  63  |     this.quizPerformanceHeading = page.getByRole('heading', { name: 'Quiz Performance Tracking' });
  64  |     this.leaderboardHeading = page.getByRole('heading', { name: 'Leaderboard' });
  65  |   }
  66  | 
  67  |   /**
  68  |    * @param {{ email: string, password: string }} credentials
  69  |    * @param {string} loginUrl
  70  |    */
  71  |   async loginAsStudent(credentials, loginUrl = 'https://edu.offtheschool.io/login') {
  72  |     await this.page.goto(loginUrl, { waitUntil: 'domcontentloaded' });
> 73  |     await this.page.getByRole('textbox', { name: 'Email Address' }).fill(credentials.email);
      |                                                                     ^ TimeoutError: locator.fill: Timeout 15000ms exceeded.
  74  |     await this.page
  75  |       .getByLabel(/^Password/)
  76  |       .or(this.page.getByRole('textbox', { name: 'Password' }))
  77  |       .fill(credentials.password);
  78  |     await this.page.getByRole('button', { name: 'Sign In' }).click();
  79  |     await this.page.waitForURL(/\/(home|dashboard)/i, { timeout: 45000 });
  80  |   }
  81  | 
  82  |   async gotoDashboard(dashboardUrl = 'https://edu.offtheschool.io/dashboard') {
  83  |     await this.page.goto(dashboardUrl, { waitUntil: 'domcontentloaded' });
  84  |     await this.yourProgressHeading.or(this.mySubjectsHeading).first().waitFor({
  85  |       state: 'visible',
  86  |       timeout: 20000,
  87  |     });
  88  |   }
  89  | 
  90  |   async ensureAuthenticatedDashboard(credentials, loginUrl, dashboardUrl) {
  91  |     await this.loginAsStudent(credentials, loginUrl);
  92  |     if (!/\/dashboard/i.test(this.page.url())) {
  93  |       await this.gotoDashboard(dashboardUrl);
  94  |     } else {
  95  |       await this.yourProgressHeading.or(this.mySubjectsHeading).first().waitFor({
  96  |         state: 'visible',
  97  |         timeout: 20000,
  98  |       });
  99  |     }
  100 |   }
  101 | 
  102 |   async expandSidebarIfCollapsed() {
  103 |     const label = this.page.getByText('Switch Class', { exact: true });
  104 |     if (!(await label.isVisible().catch(() => false))) {
  105 |       await this.menuIcon.click();
  106 |       await label.waitFor({ state: 'visible', timeout: 5000 });
  107 |     }
  108 |   }
  109 | 
  110 |   async clickSidebarNav(navGroup) {
  111 |     await this.expandSidebarIfCollapsed();
  112 |     await navGroup.click();
  113 |   }
  114 | 
  115 |   async openWatchVideo() {
  116 |     await this.watchVideoButton.click();
  117 |     await this.lectureDialog.or(this.closeButton).first().waitFor({ state: 'visible', timeout: 15000 });
  118 |   }
  119 | 
  120 |   async clickStartLearning() {
  121 |     await this.startLearningButton.click();
  122 |   }
  123 | 
  124 |   async enableCarouselView() {
  125 |     await this.carouselViewButton.click();
  126 |     await this.scrollRightButton.waitFor({ state: 'visible', timeout: 10000 });
  127 |   }
  128 | }
  129 | 
```