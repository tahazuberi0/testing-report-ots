# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: specs\quizTracking_Page.spec.js >> OTS EdTech Quiz Performance Tracking >> TC_QUIZTRACKING_014: Sort By dropdown shows sorting options
- Location: tests\specs\quizTracking_Page.spec.js:346:3

# Error details

```
TimeoutError: locator.waitFor: Timeout 20000ms exceeded.
Call log:
  - waiting for getByRole('textbox', { name: 'Email Address' }) to be visible

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e19]:
    - generic [ref=e20]:
      - img [ref=e22]
      - generic:
        - img "OTS Logo"
    - generic [ref=e25]:
      - paragraph [ref=e27]: Loading
      - paragraph [ref=e32]: Preparing your experience
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
  2  |  * Page Object for Quiz Performance Tracking (`/dashboard/quiz-tracking`).
  3  |  * Locator priority: role/label/text > data-testid > stable CSS > nth-child (commented if used).
  4  |  *
  5  |  * LIVE notes:
  6  |  * - Back navigation uses concatenated text `BackQuiz Performance` — no standalone Back button locator.
  7  |  * - Filter/Sort/Show Results use paragraph-filter locators; no option-level locators available.
  8  |  */
  9  | export class QuizTrackingPage {
  10 |   /**
  11 |    * @param {import('@playwright/test').Page} page
  12 |    */
  13 |   constructor(page) {
  14 |     this.page = page;
  15 | 
  16 |     // --- Navigation & Header ---
  17 |     this.sidebarQuizTracking = page.getByRole('group').filter({ hasText: 'Quiz Tracking' });
  18 |     this.backBarText = page.getByText('BackQuiz Performance');
  19 | 
  20 |     // --- Page Chrome ---
  21 |     this.pageHeading = page.getByRole('heading', { name: 'Quiz Performance Tracking' });
  22 |     this.descriptionText = page.getByText('Track your progress and');
  23 | 
  24 |     // --- Filters ---
  25 |     this.filtersHeading = page.getByRole('heading', { name: 'Filters' });
  26 |     this.filterByQuiz = page.getByRole('paragraph').filter({ hasText: 'Filter by Quiz' });
  27 |     this.sortBy = page.getByRole('paragraph').filter({ hasText: 'Sort By' });
  28 |     this.showResults = page.getByRole('paragraph').filter({ hasText: 'Show Results' });
  29 | 
  30 |     // FALLBACK CSS: no role/text locator available
  31 |     this.contentCard = page.locator('.css-1iob08');
  32 |     // FALLBACK CSS: no role/text locator available
  33 |     this.filterWrapper = page.locator('.css-1qmf9hg');
  34 | 
  35 |     // Not in quizTracking_selectors.md — needed to expand collapsed sidebar
  36 |     this.menuIcon = page.getByRole('img', { name: 'menu icon' });
  37 | 
  38 |     // --- Newly resolved gap selectors ---
  39 |     this.totalAttemptsText = page.getByText('Total Attempts');
  40 |     this.quizzesTakenText = page.getByText('Quizzes Taken');
  41 |     this.averageScoreText = page.getByText('Average Score');
  42 |     this.bestScoreText = page.getByText('Best Score');
  43 |     this.quizAttemptsByChapterHeading = page.getByText('Quiz Attempts by Chapter');
  44 |     this.backButton = page.getByRole('button', { name: 'Back' });
  45 |   }
  46 | 
  47 |   /**
  48 |    * @param {{ email: string, password: string }} credentials
  49 |    * @param {string} loginUrl
  50 |    */
  51 |   async loginAsStudent(credentials, loginUrl = 'https://edu.offtheschool.io/login') {
  52 |     await this.page.goto(loginUrl, { waitUntil: 'domcontentloaded' });
  53 |     const emailInput = this.page.getByRole('textbox', { name: 'Email Address' });
> 54 |     await emailInput.waitFor({ state: 'visible', timeout: 20000 });
     |                      ^ TimeoutError: locator.waitFor: Timeout 20000ms exceeded.
  55 |     await this.page.keyboard.press('Escape').catch(() => {});
  56 |     await emailInput.fill(credentials.email);
  57 |     await this.page
  58 |       .getByLabel(/^Password/)
  59 |       .or(this.page.getByRole('textbox', { name: 'Password' }))
  60 |       .fill(credentials.password);
  61 |     await this.page.getByRole('button', { name: 'Sign In' }).click();
  62 |     await this.page.waitForURL(/\/(home|dashboard)/i, { timeout: 45000 });
  63 |   }
  64 | 
  65 |   async gotoQuizTracking(
  66 |     quizTrackingUrl = 'https://edu.offtheschool.io/dashboard/quiz-tracking'
  67 |   ) {
  68 |     await this.page.goto(quizTrackingUrl, { waitUntil: 'domcontentloaded' });
  69 |     await this.pageHeading.waitFor({ state: 'visible', timeout: 20000 });
  70 |   }
  71 | 
  72 |   async ensureAuthenticatedQuizTracking(credentials, loginUrl, quizTrackingUrl) {
  73 |     await this.loginAsStudent(credentials, loginUrl);
  74 |     await this.gotoQuizTracking(quizTrackingUrl);
  75 |   }
  76 | 
  77 |   async clickBackBar() {
  78 |     await this.backBarText.click();
  79 |   }
  80 | 
  81 |   async openSortByDropdown() {
  82 |     await this.sortBy.first().click({ force: true });
  83 |   }
  84 | 
  85 |   async openShowResultsDropdown() {
  86 |     await this.showResults.first().click({ force: true });
  87 |   }
  88 | 
  89 |   async openFilterByQuizDropdown() {
  90 |     await this.filterByQuiz.first().click({ force: true });
  91 |   }
  92 | }
  93 | 
```