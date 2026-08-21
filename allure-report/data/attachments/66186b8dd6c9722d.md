# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: specs\Dashboard.spec.js >> OTS EdTech Dashboard Page >> TC_DASH_014: Double-click Watch video does not break navigation
- Location: tests\specs\Dashboard.spec.js:356:3

# Error details

```
TimeoutError: locator.waitFor: Timeout 15000ms exceeded.
Call log:
  - waiting for getByRole('dialog').or(getByRole('button', { name: 'Close' })).first() to be visible

```

# Page snapshot

```yaml
- generic [ref=e1]:
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
            - generic [ref=e75]:
              - generic [ref=e76]:
                - generic [ref=e78] [cursor=pointer]:
                  - generic [ref=e79]: 
                  - paragraph [ref=e80]: 0 Day Streak!
                - generic [ref=e82] [cursor=pointer]:
                  - generic [ref=e83]: 
                  - paragraph [ref=e84]: 0 XP
              - generic [ref=e86]:
                - generic [ref=e87]: 
                - text: GOOD MORNING
              - generic [ref=e88]:
                - heading "Taha" [level=2] [ref=e90]
                - button "Edit profile" [ref=e91] [cursor=pointer]:
                  - generic [ref=e92]: 
              - paragraph [ref=e94]:
                - text: You've completed
                - generic [ref=e95]: 0%
                - text: of your weekly goal! Keep the momentum going!
              - generic [ref=e98]:
                - paragraph [ref=e99]: Weekly Progress
                - paragraph [ref=e100]: 0%
              - generic [ref=e102]:
                - generic [ref=e104]:
                  - generic [ref=e106]: 
                  - paragraph [ref=e107]: "4"
                  - paragraph [ref=e108]: Courses
                - generic [ref=e110]:
                  - generic [ref=e112]: 
                  - paragraph [ref=e113]: "0"
                  - paragraph [ref=e114]: Lessons
                - generic [ref=e116]:
                  - generic [ref=e118]: 
                  - paragraph [ref=e119]: "1"
                  - paragraph [ref=e120]: Quizzes
            - generic [ref=e121]:
              - img [ref=e125]
              - generic [ref=e197]:
                - generic [ref=e198]: 
                - text: ON TRACK!
              - generic [ref=e200]:
                - generic [ref=e201]: 
                - text: KEEP GOING!
          - generic [ref=e202]:
            - generic [ref=e204]:
              - generic [ref=e207]:
                - generic [ref=e208]:
                  - generic [ref=e209]:
                    - generic [ref=e210]: 
                    - heading "Your Progress" [level=2] [ref=e211]
                  - paragraph [ref=e212]: Overall completion for your enrolled class
                - generic [ref=e213]:
                  - paragraph [ref=e214]: 0.0%
                  - progressbar [ref=e215]:
                    - img [ref=e216]
                    - generic [ref=e220]: 
              - generic [ref=e222]:
                - paragraph [ref=e223]: Progress
                - paragraph [ref=e224]: 0.0%
            - generic [ref=e227]:
              - generic [ref=e228]:
                - generic [ref=e229]: 
                - heading "My Subjects" [level=2] [ref=e230]
                - generic [ref=e231]: 5 Enrolled
              - group [ref=e232]:
                - button "Grid view" [ref=e233] [cursor=pointer]:
                  - generic [ref=e234]: 
                - button "Carousel view" [ref=e235] [cursor=pointer]:
                  - generic [ref=e236]: 
            - generic [ref=e238]:
              - group [ref=e239]:
                - generic [ref=e240]:
                  - progressbar [ref=e241]:
                    - img [ref=e242]
                    - generic [ref=e245]: 0.0%
                  - paragraph [ref=e246]: Progress
                - generic [ref=e247]:
                  - generic [ref=e248]:
                    - generic [ref=e250]: 
                    - generic [ref=e252]: 
                    - generic [ref=e254]: 
                    - generic [ref=e256]: 
                    - generic [ref=e258]: 
                  - paragraph [ref=e259]: Total Chapters 8
                  - heading "COMPUTER" [level=2] [ref=e261]
                  - paragraph [ref=e262]: Computer for Class 6
                - button "Watch video" [active] [ref=e263] [cursor=pointer]:
                  - generic [ref=e265]: 
                  - text: Watch video
                - button "Start Learning" [ref=e266] [cursor=pointer]
              - group [ref=e267]:
                - generic [ref=e268]:
                  - progressbar [ref=e269]:
                    - img [ref=e270]
                    - generic [ref=e273]: 0.0%
                  - paragraph [ref=e274]: Progress
                - generic [ref=e275]:
                  - generic [ref=e276]:
                    - generic [ref=e278]: 
                    - generic [ref=e280]: 
                    - generic [ref=e282]: 
                    - generic [ref=e284]: 
                    - generic [ref=e286]: 
                  - paragraph [ref=e287]: Total Chapters 13
                  - heading "MATHEMATICS" [level=2] [ref=e289]
                  - paragraph [ref=e290]: Mathematics for Class 6
                - button "Watch video" [ref=e291] [cursor=pointer]:
                  - generic [ref=e293]: 
                  - text: Watch video
                - button "Start Learning" [ref=e294] [cursor=pointer]
              - group [ref=e295]:
                - generic [ref=e296]:
                  - progressbar [ref=e297]:
                    - img [ref=e298]
                    - generic [ref=e301]: 0.0%
                  - paragraph [ref=e302]: Progress
                - generic [ref=e303]:
                  - generic [ref=e304]:
                    - generic [ref=e306]: 
                    - generic [ref=e308]: 
                    - generic [ref=e310]: 
                    - generic [ref=e312]: 
                    - generic [ref=e314]: 
                  - paragraph [ref=e315]: Total Chapters 18
                  - heading "URDU" [level=2] [ref=e317]
                  - paragraph [ref=e318]: Urdu for Class 6
                - button "Watch video" [ref=e319] [cursor=pointer]:
                  - generic [ref=e321]: 
                  - text: Watch video
                - button "Start Learning" [ref=e322] [cursor=pointer]
              - group [ref=e323]:
                - generic [ref=e324]:
                  - progressbar [ref=e325]:
                    - img [ref=e326]
                    - generic [ref=e329]: 0.0%
                  - paragraph [ref=e330]: Progress
                - generic [ref=e331]:
                  - generic [ref=e332]:
                    - generic [ref=e334]: 
                    - generic [ref=e336]: 
                    - generic [ref=e338]: 
                    - generic [ref=e340]: 
                    - generic [ref=e342]: 
                  - paragraph [ref=e343]: Total Chapters 15
                  - heading "ENGLISH" [level=2] [ref=e345]
                  - paragraph [ref=e346]: English for Class 6
                - button "Watch video" [ref=e347] [cursor=pointer]:
                  - generic [ref=e349]: 
                  - text: Watch video
                - button "Start Learning" [ref=e350] [cursor=pointer]
              - group [ref=e351]:
                - generic [ref=e352]:
                  - progressbar [ref=e353]:
                    - img [ref=e354]
                    - generic [ref=e357]: 0.0%
                  - paragraph [ref=e358]: Progress
                - generic [ref=e359]:
                  - generic [ref=e360]:
                    - generic [ref=e362]: 
                    - generic [ref=e364]: 
                    - generic [ref=e366]: 
                    - generic [ref=e368]: 
                    - generic [ref=e370]: 
                  - paragraph [ref=e371]: Total Chapters 10
                  - heading "SCIENCE" [level=2] [ref=e373]
                  - paragraph [ref=e374]: Science for Class 6
                - button "Watch video" [ref=e375] [cursor=pointer]:
                  - generic [ref=e377]: 
                  - text: Watch video
                - button "Start Learning" [ref=e378] [cursor=pointer]
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
  277 |     await allure.step('Verify Quiz Tracking destination', async () => {
  278 |       await expect(page).toHaveURL(/\/dashboard\/quiz-tracking/i);
  279 |       await expect(dashboardPage.quizPerformanceHeading).toBeVisible();
  280 |     });
  281 |   });
  282 | 
  283 |   test('TC_DASH_011: Sidebar Leaderboard opens Leaderboard', async ({ page }) => {
  284 |     const data = testData.TC_DASH_011;
  285 |     await annotate({
  286 |       id: 'TC_DASH_011',
  287 |       title: 'Sidebar Leaderboard opens Leaderboard',
  288 |       priority: 'High',
  289 |       description: 'Sidebar Leaderboard opens Leaderboard heading / URL.',
  290 |     });
  291 | 
  292 |     await allure.step('Sign in and open Dashboard', async () => {
  293 |       await dashboardPage.ensureAuthenticatedDashboard(
  294 |         data.validStudentSession,
  295 |         data.loginUrl,
  296 |         data.dashboardUrl
  297 |       );
  298 |     });
  299 |     await allure.step('Click Leaderboard nav', async () => {
  300 |       await dashboardPage.clickSidebarNav(dashboardPage.leaderboardNav);
  301 |     });
  302 |     await allure.step('Verify Leaderboard destination', async () => {
  303 |       await expect(page).toHaveURL(/\/dashboard\/leaderboard/i);
  304 |       await expect(dashboardPage.leaderboardHeading).toBeVisible();
  305 |     });
  306 |   });
  307 | 
  308 |   test('TC_DASH_012: Soft refresh keeps Dashboard progress and My Subjects visible', async () => {
  309 |     const data = testData.TC_DASH_012;
  310 |     await annotate({
  311 |       id: 'TC_DASH_012',
  312 |       title: 'Soft refresh keeps Dashboard progress and My Subjects visible',
  313 |       priority: 'Medium',
  314 |       description: 'Refreshing Dashboard keeps Your Progress and My Subjects visible.',
  315 |     });
  316 | 
  317 |     await allure.step('Sign in and open Dashboard', async () => {
  318 |       await dashboardPage.ensureAuthenticatedDashboard(
  319 |         data.validStudentSession,
  320 |         data.loginUrl,
  321 |         data.dashboardUrl
  322 |       );
  323 |       await expect(dashboardPage.yourProgressHeading).toBeVisible();
  324 |       await expect(dashboardPage.mySubjectsHeading).toBeVisible();
  325 |     });
  326 |     await allure.step('Refresh page', async () => {
  327 |       await dashboardPage.page.reload({ waitUntil: 'domcontentloaded' });
  328 |     });
  329 |     await allure.step('Re-verify progress and subjects', async () => {
  330 |       await expect(dashboardPage.yourProgressHeading).toBeVisible();
  331 |       await expect(dashboardPage.mySubjectsHeading).toBeVisible();
  332 |     });
  333 |   });
  334 | 
  335 |   test('TC_DASH_013: Unauthenticated access to Dashboard does not show student My Subjects', async ({
  336 |     page,
  337 |   }) => {
  338 |     const data = testData.TC_DASH_013;
  339 |     await annotate({
  340 |       id: 'TC_DASH_013',
  341 |       title: 'Unauthenticated access to Dashboard does not show student My Subjects',
  342 |       priority: 'High',
  343 |       description: 'Direct Dashboard access without session redirects to login and hides student content.',
  344 |     });
  345 | 
  346 |     await allure.step('Open Dashboard without authentication', async () => {
  347 |       await page.goto(data.dashboardUrl, { waitUntil: 'domcontentloaded' });
  348 |     });
  349 |     await allure.step('Verify login gate and no My Subjects', async () => {
  350 |       await expect(page).toHaveURL(new RegExp(data.expectedLoginUrlPattern, 'i'));
  351 |       await expect(dashboardPage.mySubjectsHeading).toHaveCount(0);
  352 |       await expect(dashboardPage.yourProgressHeading).toHaveCount(0);
  353 |     });
  354 |   });
  355 | 
  356 |   test('TC_DASH_014: Double-click Watch video does not break navigation', async () => {
  357 |     const data = testData.TC_DASH_014;
  358 |     await annotate({
  359 |       id: 'TC_DASH_014',
  360 |       title: 'Double-click Watch video does not break navigation',
  361 |       priority: 'Medium',
  362 |       description: 'Double-clicking Watch video reaches a stable lecture dialog without crash.',
  363 |     });
  364 | 
  365 |     await allure.step('Sign in and open Dashboard', async () => {
  366 |       await dashboardPage.ensureAuthenticatedDashboard(
  367 |         data.validStudentSession,
  368 |         data.loginUrl,
  369 |         data.dashboardUrl
  370 |       );
  371 |     });
  372 |     await allure.step('Double-click Watch video', async () => {
  373 |       await dashboardPage.watchVideoButton.dblclick();
  374 |       await dashboardPage.lectureDialog
  375 |         .or(dashboardPage.closeButton)
  376 |         .first()
> 377 |         .waitFor({ state: 'visible', timeout: 15000 });
      |          ^ TimeoutError: locator.waitFor: Timeout 15000ms exceeded.
  378 |     });
  379 |     await allure.step('Verify stable learning dialog', async () => {
  380 |       await expect(dashboardPage.lectureDialog.or(dashboardPage.closeButton).first()).toBeVisible();
  381 |       await expect(dashboardPage.page.getByText(/stack|exception|syntax error/i)).toHaveCount(0);
  382 |     });
  383 |   });
  384 | 
  385 |   test('TC_DASH_015: Close button is available without crashing the dashboard', async () => {
  386 |     const data = testData.TC_DASH_015;
  387 |     await annotate({
  388 |       id: 'TC_DASH_015',
  389 |       title: 'Close button is available without crashing the dashboard',
  390 |       priority: 'Low',
  391 |       description:
  392 |         'Close control appears after Watch video opens lecture dialog; clicking it does not crash Dashboard.',
  393 |     });
  394 | 
  395 |     await allure.step('Sign in and open Dashboard', async () => {
  396 |       await dashboardPage.ensureAuthenticatedDashboard(
  397 |         data.validStudentSession,
  398 |         data.loginUrl,
  399 |         data.dashboardUrl
  400 |       );
  401 |     });
  402 |     await allure.step('Open Watch video dialog so Close is present', async () => {
  403 |       await dashboardPage.openWatchVideo();
  404 |       await expect(dashboardPage.closeButton.first()).toBeVisible();
  405 |     });
  406 |     await allure.step('Click Close and verify Dashboard remains stable', async () => {
  407 |       await dashboardPage.closeButton.first().click();
  408 |       await expect(dashboardPage.mySubjectsHeading).toBeVisible();
  409 |       await expect(dashboardPage.yourProgressHeading).toBeVisible();
  410 |     });
  411 |   });
  412 | 
  413 |   test('TC_DASH_016: Day Streak gamification text is visible', async () => {
  414 |     const data = testData.TC_DASH_016;
  415 |     await annotate({
  416 |       id: 'TC_DASH_016',
  417 |       title: 'Day Streak gamification text is visible',
  418 |       priority: 'Medium',
  419 |       description: 'Day streak gamification text is visible on Dashboard.',
  420 |     });
  421 | 
  422 |     await allure.step('Sign in and open Dashboard', async () => {
  423 |       await dashboardPage.ensureAuthenticatedDashboard(
  424 |         data.validStudentSession,
  425 |         data.loginUrl,
  426 |         data.dashboardUrl
  427 |       );
  428 |     });
  429 |     await allure.step('Verify Day Streak text is visible', async () => {
  430 |       await expect(dashboardPage.dayStreakText).toBeVisible();
  431 |     });
  432 |   });
  433 | 
  434 |   test('TC_DASH_017: Accumulated XP is visible', async () => {
  435 |     const data = testData.TC_DASH_017;
  436 |     await annotate({
  437 |       id: 'TC_DASH_017',
  438 |       title: 'Accumulated XP is visible',
  439 |       priority: 'Medium',
  440 |       description: 'Accumulated XP count is visible on Dashboard.',
  441 |     });
  442 | 
  443 |     await allure.step('Sign in and open Dashboard', async () => {
  444 |       await dashboardPage.ensureAuthenticatedDashboard(
  445 |         data.validStudentSession,
  446 |         data.loginUrl,
  447 |         data.dashboardUrl
  448 |       );
  449 |     });
  450 |     await allure.step('Verify XP text is visible', async () => {
  451 |       await expect(dashboardPage.xpText).toBeVisible();
  452 |     });
  453 |   });
  454 | 
  455 |   test('TC_DASH_018: Weekly Progress section is visible', async () => {
  456 |     const data = testData.TC_DASH_018;
  457 |     await annotate({
  458 |       id: 'TC_DASH_018',
  459 |       title: 'Weekly Progress section is visible',
  460 |       priority: 'Medium',
  461 |       description: 'Weekly Progress and weekly goal text are visible on Dashboard.',
  462 |     });
  463 | 
  464 |     await allure.step('Sign in and open Dashboard', async () => {
  465 |       await dashboardPage.ensureAuthenticatedDashboard(
  466 |         data.validStudentSession,
  467 |         data.loginUrl,
  468 |         data.dashboardUrl
  469 |       );
  470 |     });
  471 |     await allure.step('Verify Weekly Progress and goal text', async () => {
  472 |       await expect(dashboardPage.weeklyProgressText).toBeVisible();
  473 |       await expect(dashboardPage.weeklyGoalText).toBeVisible();
  474 |     });
  475 |   });
  476 | 
  477 |   test('TC_DASH_019: Feedback sidebar link is visible', async () => {
```