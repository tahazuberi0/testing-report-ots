# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: specs\Dashboard.spec.js >> OTS EdTech Dashboard Page >> TC_DASH_020: Logout sidebar link is visible
- Location: tests\specs\Dashboard.spec.js:499:3

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator:  getByText('Logout', { exact: true }).first()
Expected: visible
Received: hidden
Timeout:  15000ms

Call log:
  - Expect "toBeVisible" with timeout 15000ms
  - waiting for getByText('Logout', { exact: true }).first()
    30 × locator resolved to <button type="button" tabindex="-1" data-index="1" role="menuitem" id="menu-list-:rq:-menuitem-:rs:" class="chakra-menu__menuitem css-tiuq8v">Logout</button>
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
  - text: 
  - paragraph: 0 Day Streak!
  - text: 
  - paragraph: 0 XP
  - text:  GOOD MORNING
  - heading "Taha" [level=2]
  - button "Edit profile"
  - paragraph: You've completed 0% of your weekly goal! Keep the momentum going!
  - paragraph: Weekly Progress
  - paragraph: 0%
  - text: 
  - paragraph: "4"
  - paragraph: Courses
  - text: 
  - paragraph: "0"
  - paragraph: Lessons
  - text: 
  - paragraph: "1"
  - paragraph: Quizzes
  - img
  - text:  ON TRACK!  KEEP GOING! 
  - heading "Your Progress" [level=2]
  - paragraph: Overall completion for your enrolled class
  - paragraph: 0.0%
  - progressbar:
    - img
    - text: 
  - paragraph: Progress
  - paragraph: 0.0%
  - text: 
  - heading "My Subjects" [level=2]
  - text: 5 Enrolled
  - group:
    - button "Grid view"
    - button "Carousel view"
  - group:
    - progressbar:
      - img
      - text: 0.0%
    - paragraph: Progress
    - text:     
    - paragraph: Total Chapters 8
    - heading "COMPUTER" [level=2]
    - paragraph: Computer for Class 6
    - button "Watch video"
    - button "Start Learning"
  - group:
    - progressbar:
      - img
      - text: 0.0%
    - paragraph: Progress
    - text:     
    - paragraph: Total Chapters 13
    - heading "MATHEMATICS" [level=2]
    - paragraph: Mathematics for Class 6
    - button "Watch video"
    - button "Start Learning"
  - group:
    - progressbar:
      - img
      - text: 0.0%
    - paragraph: Progress
    - text:     
    - paragraph: Total Chapters 18
    - heading "URDU" [level=2]
    - paragraph: Urdu for Class 6
    - button "Watch video"
    - button "Start Learning"
  - group:
    - progressbar:
      - img
      - text: 0.0%
    - paragraph: Progress
    - text:     
    - paragraph: Total Chapters 15
    - heading "ENGLISH" [level=2]
    - paragraph: English for Class 6
    - button "Watch video"
    - button "Start Learning"
  - group:
    - progressbar:
      - img
      - text: 0.0%
    - paragraph: Progress
    - text:     
    - paragraph: Total Chapters 10
    - heading "SCIENCE" [level=2]
    - paragraph: Science for Class 6
    - button "Watch video"
    - button "Start Learning"
- region "Notifications-top"
- region "Notifications-top-left"
- region "Notifications-top-right"
- region "Notifications-bottom-left"
- region "Notifications-bottom"
- region "Notifications-bottom-right"
```

# Test source

```ts
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
  478 |     const data = testData.TC_DASH_019;
  479 |     await annotate({
  480 |       id: 'TC_DASH_019',
  481 |       title: 'Feedback sidebar link is visible',
  482 |       priority: 'Low',
  483 |       description: 'Feedback link is visible in the sidebar.',
  484 |     });
  485 | 
  486 |     await allure.step('Sign in and open Dashboard', async () => {
  487 |       await dashboardPage.ensureAuthenticatedDashboard(
  488 |         data.validStudentSession,
  489 |         data.loginUrl,
  490 |         data.dashboardUrl
  491 |       );
  492 |     });
  493 |     await allure.step('Expand sidebar and verify Feedback', async () => {
  494 |       await dashboardPage.expandSidebarIfCollapsed();
  495 |       await expect(dashboardPage.feedbackText).toBeVisible();
  496 |     });
  497 |   });
  498 | 
  499 |   test('TC_DASH_020: Logout sidebar link is visible', async () => {
  500 |     const data = testData.TC_DASH_020;
  501 |     await annotate({
  502 |       id: 'TC_DASH_020',
  503 |       title: 'Logout sidebar link is visible',
  504 |       priority: 'Medium',
  505 |       description: 'Logout link is visible in the sidebar.',
  506 |     });
  507 | 
  508 |     await allure.step('Sign in and open Dashboard', async () => {
  509 |       await dashboardPage.ensureAuthenticatedDashboard(
  510 |         data.validStudentSession,
  511 |         data.loginUrl,
  512 |         data.dashboardUrl
  513 |       );
  514 |     });
  515 |     await allure.step('Expand sidebar and verify Logout', async () => {
  516 |       await dashboardPage.expandSidebarIfCollapsed();
> 517 |       await expect(dashboardPage.logoutText).toBeVisible();
      |                                              ^ Error: expect(locator).toBeVisible() failed
  518 |     });
  519 |   });
  520 | 
  521 |   test('TC_DASH_021: Subject cards are individually identifiable by name', async () => {
  522 |     const data = testData.TC_DASH_021;
  523 |     await annotate({
  524 |       id: 'TC_DASH_021',
  525 |       title: 'Subject cards are individually identifiable by name',
  526 |       priority: 'Medium',
  527 |       description: 'COMPUTER and MATHEMATICS subject name texts are visible on Dashboard.',
  528 |     });
  529 | 
  530 |     await allure.step('Sign in and open Dashboard', async () => {
  531 |       await dashboardPage.ensureAuthenticatedDashboard(
  532 |         data.validStudentSession,
  533 |         data.loginUrl,
  534 |         data.dashboardUrl
  535 |       );
  536 |     });
  537 |     await allure.step('Verify subject card names are visible', async () => {
  538 |       await expect(dashboardPage.subjectComputer).toBeVisible();
  539 |       await expect(dashboardPage.subjectMathematics).toBeVisible();
  540 |     });
  541 |   });
  542 | });
  543 | 
```