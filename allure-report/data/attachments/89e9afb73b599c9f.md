# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: specs\homePage.spec.js >> OTS EdTech Homepage >> TC_HOME_016: How It Works learning-flow steps are visible
- Location: tests\specs\homePage.spec.js:367:3

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('paragraph').filter({ hasText: 'Start Learning' }).first()
Expected: visible
Timeout: 15000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 15000ms
  - waiting for getByRole('paragraph').filter({ hasText: 'Start Learning' }).first()

```

```yaml
- region "Notifications-top"
- region "Notifications-top-left"
- region "Notifications-top-right"
- region "Notifications-bottom-left"
- region "Notifications-bottom"
- region "Notifications-bottom-right"
- dialog:
  - button "Close"
  - img "Off The School App"
  - paragraph: Off The School App
  - heading "Start Learning Smarter Anytime, Anywhere" [level=2]
  - paragraph: Download our app and unlock courses, quizzes, and a personalized learning experience.
  - img
  - paragraph: 100+ Courses
  - img
  - paragraph: Free Download
  - img
  - img
  - img
  - img
  - img
  - paragraph: 4.8 Rating
  - link "Google Play Get it on Google Play":
    - /url: https://play.google.com/store/apps/details?id=com.otsapp
    - img "Google Play"
    - paragraph: Get it on
    - paragraph: Google Play
```

# Test source

```ts
  291 |         await expect(page).not.toHaveURL(/edu\.offtheschool\.io\/?$/);
  292 |         await expect(page.locator('body')).toBeVisible();
  293 |       });
  294 |     }
  295 |   });
  296 | 
  297 |   test('TC_HOME_013: Skilled course links open practical modules', async ({ page }) => {
  298 |     const data = testData.TC_HOME_013;
  299 |     await meta({
  300 |       id: 'TC_HOME_013',
  301 |       title: 'Skilled course links open practical modules',
  302 |       priority: 'Medium',
  303 |       description: 'Skilled Courses links navigate to practical modules.',
  304 |     });
  305 | 
  306 |     await allure.step('Open homepage and locate Skilled Courses', async () => {
  307 |       await homePage.goto(data.url);
  308 |       await expect(homePage.appliedLearningText.first()).toBeVisible();
  309 |       await expect(homePage.skilledCoursesText.first()).toBeVisible();
  310 |     });
  311 | 
  312 |     for (const skill of data.skills) {
  313 |       await allure.step(`Open skill: ${skill}`, async () => {
  314 |         await homePage.goto(data.url);
  315 |         await homePage.clickSkillCourse(skill);
  316 |         await expect(page).not.toHaveURL(/edu\.offtheschool\.io\/?$/);
  317 |         await expect(page.locator('body')).toBeVisible();
  318 |       });
  319 |     }
  320 |   });
  321 | 
  322 |   test('TC_HOME_014: View All Skills opens full skills catalog', async ({ page }) => {
  323 |     const data = testData.TC_HOME_014;
  324 |     await meta({
  325 |       id: 'TC_HOME_014',
  326 |       title: 'View All Skills opens full skills catalog',
  327 |       priority: 'Medium',
  328 |       description: 'View All Skills link opens the skills catalog.',
  329 |     });
  330 | 
  331 |     await allure.step('Open homepage', async () => {
  332 |       await homePage.goto(data.url);
  333 |     });
  334 |     await allure.step('Click View All Skills', async () => {
  335 |       await homePage.clickViewAllSkills();
  336 |     });
  337 |     await allure.step('Verify skills catalog navigation', async () => {
  338 |       await expect(page).toHaveURL(new RegExp(data.expectedUrlPattern, 'i'));
  339 |     });
  340 |   });
  341 | 
  342 |   test('TC_HOME_015: Our Impact statistics are visible', async () => {
  343 |     const data = testData.TC_HOME_015;
  344 |     await meta({
  345 |       id: 'TC_HOME_015',
  346 |       title: 'Our Impact statistics are visible',
  347 |       priority: 'Low',
  348 |       description: 'Our Impact section and statistic cards are visible.',
  349 |     });
  350 | 
  351 |     await allure.step('Open homepage', async () => {
  352 |       await homePage.goto(data.url);
  353 |     });
  354 |     await allure.step('Verify Impact headings', async () => {
  355 |       await expect(homePage.ourImpactText.first()).toBeVisible();
  356 |       await expect(homePage.numbersThatSpeakText.first()).toBeVisible();
  357 |       await expect(homePage.transformingEducationText.first()).toBeVisible();
  358 |     });
  359 |     await allure.step('Verify impact statistic cards', async () => {
  360 |       await expect(homePage.activeStudentsStat).toBeVisible();
  361 |       await expect(homePage.edTechVideosStat).toBeVisible();
  362 |       await expect(homePage.lessonsCoveredStat).toBeVisible();
  363 |       await expect(homePage.educatorsStat).toBeVisible();
  364 |     });
  365 |   });
  366 | 
  367 |   test('TC_HOME_016: How It Works learning-flow steps are visible', async () => {
  368 |     const data = testData.TC_HOME_016;
  369 |     await meta({
  370 |       id: 'TC_HOME_016',
  371 |       title: 'How It Works learning-flow steps are visible',
  372 |       priority: 'High',
  373 |       description: 'How It Works onboarding narrative steps are visible on the homepage.',
  374 |     });
  375 | 
  376 |     await allure.step('Open homepage', async () => {
  377 |       await homePage.goto(data.url);
  378 |     });
  379 |     await allure.step('Verify How It Works section headings', async () => {
  380 |       await expect(homePage.learningFlowText.first()).toBeVisible();
  381 |       await expect(homePage.howItWorksText.first()).toBeVisible();
  382 |       await expect(homePage.startYourJourneyText.first()).toBeVisible();
  383 |     });
  384 |     await allure.step('Verify Create Account and Choose Your Class steps', async () => {
  385 |       await expect(homePage.createAccountText.first()).toBeVisible();
  386 |       await expect(homePage.signUpFreeText.first()).toBeVisible();
  387 |       await expect(homePage.chooseYourClassText.first()).toBeVisible();
  388 |       await expect(homePage.selectGradeText.first()).toBeVisible();
  389 |     });
  390 |     await allure.step('Verify Start Learning and Track Progress steps', async () => {
> 391 |       await expect(homePage.startLearningParagraph.first()).toBeVisible();
      |                                                             ^ Error: expect(locator).toBeVisible() failed
  392 |       await expect(homePage.watchEngagingText.first()).toBeVisible();
  393 |       await expect(homePage.trackProgressText.first()).toBeVisible();
  394 |       await expect(homePage.monitorImprovementText.first()).toBeVisible();
  395 |     });
  396 |   });
  397 | 
  398 |   test('TC_HOME_017: Get Start link initiates onboarding / registration', async ({ page }) => {
  399 |     const data = testData.TC_HOME_017;
  400 |     await meta({
  401 |       id: 'TC_HOME_017',
  402 |       title: 'Get Start link initiates onboarding / registration',
  403 |       priority: 'High',
  404 |       description: 'Get Start link initiates registration/onboarding (selector name differs from userflow Get Started).',
  405 |     });
  406 | 
  407 |     await allure.step('Open homepage', async () => {
  408 |       await homePage.goto(data.url);
  409 |     });
  410 |     await allure.step('Click Get Start', async () => {
  411 |       await homePage.clickGetStart();
  412 |     });
  413 |     await allure.step('Verify onboarding/registration navigation', async () => {
  414 |       await expect(page).toHaveURL(new RegExp(data.expectedUrlPattern, 'i'));
  415 |     });
  416 |   });
  417 | 
  418 |   test('TC_HOME_018: YouTube Learning Hub content is visible', async () => {
  419 |     const data = testData.TC_HOME_018;
  420 |     await meta({
  421 |       id: 'TC_HOME_018',
  422 |       title: 'YouTube Learning Hub content is visible',
  423 |       priority: 'High',
  424 |       description: 'YouTube Learning Hub section, logo, and channel metrics are visible.',
  425 |     });
  426 | 
  427 |     await allure.step('Open homepage', async () => {
  428 |       await homePage.goto(data.url);
  429 |     });
  430 |     await allure.step('Verify YouTube hub heading and copy', async () => {
  431 |       await expect(homePage.youtubeHubHeading).toBeVisible();
  432 |       await expect(homePage.youtubeHubCopy.first()).toBeVisible();
  433 |     });
  434 |     await allure.step('Verify channel logo and metrics labels', async () => {
  435 |       await expect(homePage.channelLogo.first()).toBeVisible();
  436 |       await expect(homePage.otsEdTechHeading.first()).toBeVisible();
  437 |       await expect(homePage.subsText).toBeVisible({ timeout: 20_000 });
  438 |       await expect(homePage.videosCountText).toBeVisible();
  439 |       await expect(homePage.viewsText).toBeVisible();
  440 |     });
  441 |   });
  442 | 
  443 |   test('TC_HOME_019: Subscribe and View All Videos links open expected destinations', async ({
  444 |     page,
  445 |     context,
  446 |   }) => {
  447 |     const data = testData.TC_HOME_019;
  448 |     await meta({
  449 |       id: 'TC_HOME_019',
  450 |       title: 'Subscribe and View All Videos links open expected destinations',
  451 |       priority: 'High',
  452 |       description: 'Subscribe and View All Videos links open intended destinations.',
  453 |     });
  454 | 
  455 |     await allure.step('Open homepage', async () => {
  456 |       await homePage.goto(data.url);
  457 |     });
  458 |     await allure.step('Click Subscribe and verify destination', async () => {
  459 |       const popupPromise = context.waitForEvent('page', { timeout: 8000 }).catch(() => null);
  460 |       await homePage.clickSubscribe();
  461 |       const popup = await popupPromise;
  462 |       if (popup) {
  463 |         await popup.waitForLoadState('domcontentloaded');
  464 |         expect(popup.url().length).toBeGreaterThan(0);
  465 |         await popup.close();
  466 |       } else {
  467 |         await expect(page.locator('body')).toBeVisible();
  468 |       }
  469 |     });
  470 |     await allure.step('Return home and click View All Videos', async () => {
  471 |       await homePage.goto(data.url);
  472 |       const popupPromise = context.waitForEvent('page', { timeout: 8000 }).catch(() => null);
  473 |       await homePage.clickViewAllVideos();
  474 |       const popup = await popupPromise;
  475 |       if (popup) {
  476 |         await popup.waitForLoadState('domcontentloaded');
  477 |         expect(popup.url().length).toBeGreaterThan(0);
  478 |         await popup.close();
  479 |       } else {
  480 |         await expect(page.locator('body')).toBeVisible();
  481 |       }
  482 |     });
  483 |   });
  484 | 
  485 |   test('TC_HOME_020: Daily Micro Learning and Instagram follow are available', async ({
  486 |     page,
  487 |     context,
  488 |   }) => {
  489 |     const data = testData.TC_HOME_020;
  490 |     await meta({
  491 |       id: 'TC_HOME_020',
```