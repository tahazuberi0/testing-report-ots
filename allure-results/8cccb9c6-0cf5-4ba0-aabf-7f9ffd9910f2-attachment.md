# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: specs\quizTracking_Page.spec.js >> OTS EdTech Quiz Performance Tracking >> TC_QUIZTRACKING_008: Back navigation exits Quiz Tracking page
- Location: tests\specs\quizTracking_Page.spec.js:202:3

# Error details

```
Error: expect(page).not.toHaveURL(expected) failed

Expected pattern: not /\/dashboard\/quiz-tracking$/i
Received string: "https://edu.offtheschool.io/dashboard/quiz-tracking"
Timeout: 15000ms

Call log:
  - Expect "not toHaveURL" with timeout 15000ms
    31 × unexpected value "https://edu.offtheschool.io/dashboard/quiz-tracking"

```

```yaml
- main:
  - img "menu icon"
  - img "OTS logo"
  - img "Taha"
  - paragraph: Taha
  - paragraph: Student
  - button "User Options"
  - group:
    - paragraph: Dashboard
  - group:
    - paragraph: Switch Class
  - group:
    - img
    - paragraph: Reels
  - group:
    - paragraph: Enrollments
  - group:
    - paragraph: Quiz Tracking
  - group:
    - paragraph: Leaderboard
  - group:
    - paragraph: Favorite Chapters
  - group:
    - paragraph: Visit Website
  - group:
    - paragraph: Feedback
  - group:
    - paragraph: Logout
  - button "Back"
  - heading "Quiz Performance Tracking" [level=2]
  - paragraph: Track your progress and improve your scores across all quizzes
  - heading "Filters" [level=2]
  - paragraph: Filter by Quiz
  - combobox:
    - option "All Quizzes" [selected]
    - option "Class 2 Mathematics Forward Counting"
  - paragraph: Sort By
  - combobox:
    - option "Newest First" [selected]
    - option "Oldest First"
    - option "Highest Score"
    - option "Lowest Score"
  - paragraph: Show Results
  - combobox:
    - option "All Results" [selected]
    - option "Latest 5"
    - option "Latest 10"
    - option "Latest 20"
    - option "Latest 50"
  - paragraph: Total Attempts
  - paragraph: "1"
  - paragraph: Quizzes Taken
  - paragraph: "1"
  - paragraph: Average Score
  - paragraph: "0.0"
  - paragraph: Best Score
  - paragraph: "0"
  - text: 
  - heading "Quiz Attempts by Chapter" [level=2]
  - 'button "1 Class 2 Mathematics Forward Counting 1 attempts Best: 0.00 pts"':
    - text: "1"
    - paragraph: Class 2 Mathematics Forward Counting
    - paragraph: 1 attempts
    - paragraph: "Best: 0.00 pts"
- region "Notifications-top"
- region "Notifications-top-left"
- region "Notifications-top-right"
- region "Notifications-bottom-left"
- region "Notifications-bottom"
- region "Notifications-bottom-right"
```

# Test source

```ts
  122 |     await allure.step('Click Filter by Quiz', async () => {
  123 |       await quizPage.filterByQuiz.click();
  124 |       await quizPage.page.waitForTimeout(1000);
  125 |     });
  126 |     await allure.step('Verify page stability', async () => {
  127 |       await expect(quizPage.pageHeading).toBeVisible();
  128 |     });
  129 |   });
  130 | 
  131 |   test('TC_QUIZTRACKING_005: Sort By dropdown is clickable and page stays stable', async () => {
  132 |     const data = testData.TC_QUIZTRACKING_005;
  133 |     await annotate({
  134 |       id: 'TC_QUIZTRACKING_005',
  135 |       title: 'Sort By dropdown is clickable and page stays stable',
  136 |       priority: 'Medium',
  137 |       description: 'Clicking Sort By keeps page heading visible.',
  138 |     });
  139 | 
  140 |     await allure.step('Sign in and open Quiz Tracking', async () => {
  141 |       await quizPage.ensureAuthenticatedQuizTracking(
  142 |         data.validStudentSession,
  143 |         data.loginUrl,
  144 |         data.quizTrackingUrl
  145 |       );
  146 |     });
  147 |     await allure.step('Click Sort By', async () => {
  148 |       await quizPage.sortBy.click();
  149 |       await quizPage.page.waitForTimeout(1000);
  150 |     });
  151 |     await allure.step('Verify page stability', async () => {
  152 |       await expect(quizPage.pageHeading).toBeVisible();
  153 |     });
  154 |   });
  155 | 
  156 |   test('TC_QUIZTRACKING_006: Show Results trigger is clickable and page stays stable', async () => {
  157 |     const data = testData.TC_QUIZTRACKING_006;
  158 |     await annotate({
  159 |       id: 'TC_QUIZTRACKING_006',
  160 |       title: 'Show Results trigger is clickable and page stays stable',
  161 |       priority: 'Medium',
  162 |       description: 'Clicking Show Results keeps page heading visible.',
  163 |     });
  164 | 
  165 |     await allure.step('Sign in and open Quiz Tracking', async () => {
  166 |       await quizPage.ensureAuthenticatedQuizTracking(
  167 |         data.validStudentSession,
  168 |         data.loginUrl,
  169 |         data.quizTrackingUrl
  170 |       );
  171 |     });
  172 |     await allure.step('Click Show Results', async () => {
  173 |       await quizPage.showResults.click();
  174 |       await quizPage.page.waitForTimeout(1000);
  175 |     });
  176 |     await allure.step('Verify page stability', async () => {
  177 |       await expect(quizPage.pageHeading).toBeVisible();
  178 |     });
  179 |   });
  180 | 
  181 |   test('TC_QUIZTRACKING_007: Content card container is present on page', async () => {
  182 |     const data = testData.TC_QUIZTRACKING_007;
  183 |     await annotate({
  184 |       id: 'TC_QUIZTRACKING_007',
  185 |       title: 'Content card container is present on page',
  186 |       priority: 'Medium',
  187 |       description: 'CSS fallback .css-1iob08 content card container is present.',
  188 |     });
  189 | 
  190 |     await allure.step('Sign in and open Quiz Tracking', async () => {
  191 |       await quizPage.ensureAuthenticatedQuizTracking(
  192 |         data.validStudentSession,
  193 |         data.loginUrl,
  194 |         data.quizTrackingUrl
  195 |       );
  196 |     });
  197 |     await allure.step('Verify content card container', async () => {
  198 |       await expect(quizPage.contentCard.first()).toBeVisible();
  199 |     });
  200 |   });
  201 | 
  202 |   test('TC_QUIZTRACKING_008: Back navigation exits Quiz Tracking page', async ({ page }) => {
  203 |     const data = testData.TC_QUIZTRACKING_008;
  204 |     await annotate({
  205 |       id: 'TC_QUIZTRACKING_008',
  206 |       title: 'Back navigation exits Quiz Tracking page',
  207 |       priority: 'High',
  208 |       description: 'Clicking BackQuiz Performance bar navigates away from Quiz Tracking.',
  209 |     });
  210 | 
  211 |     await allure.step('Sign in and open Quiz Tracking', async () => {
  212 |       await quizPage.ensureAuthenticatedQuizTracking(
  213 |         data.validStudentSession,
  214 |         data.loginUrl,
  215 |         data.quizTrackingUrl
  216 |       );
  217 |     });
  218 |     await allure.step('Click Back bar', async () => {
  219 |       await quizPage.clickBackBar();
  220 |     });
  221 |     await allure.step('Verify left Quiz Tracking page', async () => {
> 222 |       await expect(page).not.toHaveURL(/\/dashboard\/quiz-tracking$/i);
      |                              ^ Error: expect(page).not.toHaveURL(expected) failed
  223 |       await expect(page.locator('body')).toBeVisible();
  224 |     });
  225 |   });
  226 | 
  227 |   test('TC_QUIZTRACKING_009: Soft refresh keeps Quiz Tracking chrome visible', async () => {
  228 |     const data = testData.TC_QUIZTRACKING_009;
  229 |     await annotate({
  230 |       id: 'TC_QUIZTRACKING_009',
  231 |       title: 'Soft refresh keeps Quiz Tracking chrome visible',
  232 |       priority: 'Medium',
  233 |       description: 'Refreshing Quiz Tracking keeps headings visible.',
  234 |     });
  235 | 
  236 |     await allure.step('Sign in and open Quiz Tracking', async () => {
  237 |       await quizPage.ensureAuthenticatedQuizTracking(
  238 |         data.validStudentSession,
  239 |         data.loginUrl,
  240 |         data.quizTrackingUrl
  241 |       );
  242 |       await expect(quizPage.pageHeading).toBeVisible();
  243 |       await expect(quizPage.filtersHeading).toBeVisible();
  244 |     });
  245 |     await allure.step('Refresh page', async () => {
  246 |       await quizPage.page.reload({ waitUntil: 'domcontentloaded' });
  247 |     });
  248 |     await allure.step('Re-verify chrome', async () => {
  249 |       await expect(quizPage.pageHeading).toBeVisible();
  250 |       await expect(quizPage.filtersHeading).toBeVisible();
  251 |     });
  252 |   });
  253 | 
  254 |   test('TC_QUIZTRACKING_010: Unauthenticated access does not show quiz data', async ({
  255 |     page,
  256 |   }) => {
  257 |     const data = testData.TC_QUIZTRACKING_010;
  258 |     await annotate({
  259 |       id: 'TC_QUIZTRACKING_010',
  260 |       title: 'Unauthenticated access does not show quiz data',
  261 |       priority: 'High',
  262 |       description: 'Direct quiz-tracking access without session redirects to login.',
  263 |     });
  264 | 
  265 |     await allure.step('Open Quiz Tracking without authentication', async () => {
  266 |       await page.goto(data.quizTrackingUrl, { waitUntil: 'domcontentloaded' });
  267 |     });
  268 |     await allure.step('Verify login gate and no quiz chrome', async () => {
  269 |       await expect(page).toHaveURL(new RegExp(data.expectedLoginUrlPattern, 'i'));
  270 |       await expect(quizPage.pageHeading).toHaveCount(0);
  271 |       await expect(quizPage.filtersHeading).toHaveCount(0);
  272 |     });
  273 |   });
  274 | 
  275 |   test('TC_QUIZTRACKING_011: Summary stat cards are visible', async () => {
  276 |     const data = testData.TC_QUIZTRACKING_011;
  277 |     await annotate({
  278 |       id: 'TC_QUIZTRACKING_011',
  279 |       title: 'Summary stat cards are visible',
  280 |       priority: 'High',
  281 |       description:
  282 |         'Total Attempts, Quizzes Taken, Average Score, and Best Score stat cards are visible.',
  283 |     });
  284 | 
  285 |     await allure.step('Sign in and open Quiz Tracking', async () => {
  286 |       await quizPage.ensureAuthenticatedQuizTracking(
  287 |         data.validStudentSession,
  288 |         data.loginUrl,
  289 |         data.quizTrackingUrl
  290 |       );
  291 |     });
  292 |     await allure.step('Verify summary stat cards', async () => {
  293 |       await expect(quizPage.totalAttemptsText).toBeVisible();
  294 |       await expect(quizPage.quizzesTakenText).toBeVisible();
  295 |       await expect(quizPage.averageScoreText).toBeVisible();
  296 |       await expect(quizPage.bestScoreText).toBeVisible();
  297 |     });
  298 |   });
  299 | 
  300 |   test('TC_QUIZTRACKING_012: Quiz Attempts by Chapter section heading is visible', async () => {
  301 |     const data = testData.TC_QUIZTRACKING_012;
  302 |     await annotate({
  303 |       id: 'TC_QUIZTRACKING_012',
  304 |       title: 'Quiz Attempts by Chapter section heading is visible',
  305 |       priority: 'High',
  306 |       description: 'Quiz Attempts by Chapter heading is visible on the page.',
  307 |     });
  308 | 
  309 |     await allure.step('Sign in and open Quiz Tracking', async () => {
  310 |       await quizPage.ensureAuthenticatedQuizTracking(
  311 |         data.validStudentSession,
  312 |         data.loginUrl,
  313 |         data.quizTrackingUrl
  314 |       );
  315 |     });
  316 |     await allure.step('Verify section heading', async () => {
  317 |       await expect(quizPage.quizAttemptsByChapterHeading).toBeVisible();
  318 |     });
  319 |   });
  320 | 
  321 |   test('TC_QUIZTRACKING_013: Back button navigates away from Quiz Tracking', async ({ page }) => {
  322 |     const data = testData.TC_QUIZTRACKING_013;
```