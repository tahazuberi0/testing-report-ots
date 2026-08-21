# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: specs\quizTracking_Page.spec.js >> OTS EdTech Quiz Performance Tracking >> TC_QUIZTRACKING_016: Filter by Quiz dropdown shows All Quizzes option
- Location: tests\specs\quizTracking_Page.spec.js:404:3

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator:  getByRole('option', { name: 'All Quizzes' })
Expected: visible
Received: hidden
Timeout:  15000ms

Call log:
  - Expect "toBeVisible" with timeout 15000ms
  - waiting for getByRole('option', { name: 'All Quizzes' })
    32 × locator resolved to <option value="all">All Quizzes</option>
       - unexpected value "hidden"

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
  324 |       id: 'TC_QUIZTRACKING_013',
  325 |       title: 'Back button navigates away from Quiz Tracking',
  326 |       priority: 'High',
  327 |       description: 'Clicking the standalone Back button navigates away from Quiz Tracking.',
  328 |     });
  329 | 
  330 |     await allure.step('Sign in and open Quiz Tracking', async () => {
  331 |       await quizPage.ensureAuthenticatedQuizTracking(
  332 |         data.validStudentSession,
  333 |         data.loginUrl,
  334 |         data.quizTrackingUrl
  335 |       );
  336 |     });
  337 |     await allure.step('Click Back button', async () => {
  338 |       await quizPage.backButton.click();
  339 |     });
  340 |     await allure.step('Verify left Quiz Tracking page', async () => {
  341 |       await expect(page).not.toHaveURL(/\/dashboard\/quiz-tracking$/i);
  342 |       await expect(page.locator('body')).toBeVisible();
  343 |     });
  344 |   });
  345 | 
  346 |   test('TC_QUIZTRACKING_014: Sort By dropdown shows sorting options', async () => {
  347 |     const data = testData.TC_QUIZTRACKING_014;
  348 |     await annotate({
  349 |       id: 'TC_QUIZTRACKING_014',
  350 |       title: 'Sort By dropdown shows sorting options',
  351 |       priority: 'Medium',
  352 |       description:
  353 |         'Sort By dropdown reveals Newest First, Oldest First, Highest Score, Lowest Score.',
  354 |     });
  355 | 
  356 |     await allure.step('Sign in and open Quiz Tracking', async () => {
  357 |       await quizPage.ensureAuthenticatedQuizTracking(
  358 |         data.validStudentSession,
  359 |         data.loginUrl,
  360 |         data.quizTrackingUrl
  361 |       );
  362 |     });
  363 |     await allure.step('Open Sort By dropdown', async () => {
  364 |       await quizPage.openSortByDropdown();
  365 |     });
  366 |     await allure.step('Verify sorting options', async () => {
  367 |       await expect(quizPage.page.getByRole('option', { name: 'Newest First' })).toBeVisible();
  368 |       await expect(quizPage.page.getByRole('option', { name: 'Oldest First' })).toBeVisible();
  369 |       await expect(quizPage.page.getByRole('option', { name: 'Highest Score' })).toBeVisible();
  370 |       await expect(quizPage.page.getByRole('option', { name: 'Lowest Score' })).toBeVisible();
  371 |     });
  372 |   });
  373 | 
  374 |   test('TC_QUIZTRACKING_015: Show Results dropdown shows result limit options', async () => {
  375 |     const data = testData.TC_QUIZTRACKING_015;
  376 |     await annotate({
  377 |       id: 'TC_QUIZTRACKING_015',
  378 |       title: 'Show Results dropdown shows result limit options',
  379 |       priority: 'Medium',
  380 |       description: 'Show Results dropdown reveals All Results, Latest 5/10/20/50.',
  381 |     });
  382 | 
  383 |     await allure.step('Sign in and open Quiz Tracking', async () => {
  384 |       await quizPage.ensureAuthenticatedQuizTracking(
  385 |         data.validStudentSession,
  386 |         data.loginUrl,
  387 |         data.quizTrackingUrl
  388 |       );
  389 |     });
  390 |     await allure.step('Open Show Results dropdown', async () => {
  391 |       await quizPage.openShowResultsDropdown();
  392 |     });
  393 |     await allure.step('Verify result limit options', async () => {
  394 |       await expect(quizPage.page.getByRole('option', { name: 'All Results' })).toBeVisible();
  395 |       await expect(
  396 |         quizPage.page.getByRole('option', { name: 'Latest 5' }).first()
  397 |       ).toBeVisible();
  398 |       await expect(quizPage.page.getByRole('option', { name: 'Latest 10' })).toBeVisible();
  399 |       await expect(quizPage.page.getByRole('option', { name: 'Latest 20' })).toBeVisible();
  400 |       await expect(quizPage.page.getByRole('option', { name: 'Latest 50' })).toBeVisible();
  401 |     });
  402 |   });
  403 | 
  404 |   test('TC_QUIZTRACKING_016: Filter by Quiz dropdown shows All Quizzes option', async () => {
  405 |     const data = testData.TC_QUIZTRACKING_016;
  406 |     await annotate({
  407 |       id: 'TC_QUIZTRACKING_016',
  408 |       title: 'Filter by Quiz dropdown shows All Quizzes option',
  409 |       priority: 'Medium',
  410 |       description: 'Filter by Quiz dropdown reveals the All Quizzes option.',
  411 |     });
  412 | 
  413 |     await allure.step('Sign in and open Quiz Tracking', async () => {
  414 |       await quizPage.ensureAuthenticatedQuizTracking(
  415 |         data.validStudentSession,
  416 |         data.loginUrl,
  417 |         data.quizTrackingUrl
  418 |       );
  419 |     });
  420 |     await allure.step('Open Filter by Quiz dropdown', async () => {
  421 |       await quizPage.openFilterByQuizDropdown();
  422 |     });
  423 |     await allure.step('Verify All Quizzes option', async () => {
> 424 |       await expect(quizPage.page.getByRole('option', { name: 'All Quizzes' })).toBeVisible();
      |                                                                                ^ Error: expect(locator).toBeVisible() failed
  425 |     });
  426 |   });
  427 | });
  428 | 
```