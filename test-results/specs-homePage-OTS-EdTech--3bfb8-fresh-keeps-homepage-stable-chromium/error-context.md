# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: specs\homePage.spec.js >> OTS EdTech Homepage >> TC_HOME_024: Soft refresh keeps homepage stable
- Location: tests\specs\homePage.spec.js:606:3

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('link', { name: 'Home' }).first()
Expected: visible
Timeout: 15000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 15000ms
  - waiting for getByRole('link', { name: 'Home' }).first()

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
  517 |     });
  518 |   });
  519 | 
  520 |   test('TC_HOME_021: Section Start Learning link navigates correctly', async ({ page }) => {
  521 |     const data = testData.TC_HOME_021;
  522 |     await meta({
  523 |       id: 'TC_HOME_021',
  524 |       title: 'Section Start Learning link navigates correctly',
  525 |       priority: 'Medium',
  526 |       description: 'Exact Start Learning link (not hero CTA) navigates to learning/start destination.',
  527 |     });
  528 | 
  529 |     await allure.step('Open homepage', async () => {
  530 |       await homePage.goto(data.url);
  531 |     });
  532 |     await allure.step('Click exact Start Learning link', async () => {
  533 |       await homePage.clickStartLearningExact();
  534 |     });
  535 |     await allure.step('Verify navigation', async () => {
  536 |       await expect(page).toHaveURL(new RegExp(data.expectedUrlPattern, 'i'));
  537 |     });
  538 |   });
  539 | 
  540 |   test('TC_HOME_022: Educational Network channel links are reachable', async ({
  541 |     page,
  542 |     context,
  543 |   }) => {
  544 |     const data = testData.TC_HOME_022;
  545 |     await meta({
  546 |       id: 'TC_HOME_022',
  547 |       title: 'Educational Network channel links are reachable',
  548 |       priority: 'Medium',
  549 |       description: 'Educational Network channel links and Subscribe Our Channels are reachable.',
  550 |     });
  551 | 
  552 |     await allure.step('Open homepage and verify network section', async () => {
  553 |       await homePage.goto(data.url);
  554 |       await expect(homePage.ourYoutubeChannelsText.first()).toBeVisible();
  555 |       await expect(homePage.exploreOurText.first()).toBeVisible();
  556 |       await expect(homePage.educationalNetworkText.first()).toBeVisible();
  557 |     });
  558 | 
  559 |     for (const channel of data.channels) {
  560 |       await allure.step(`Open channel link: ${channel}`, async () => {
  561 |         await homePage.goto(data.url);
  562 |         const popupPromise = context.waitForEvent('page', { timeout: 8000 }).catch(() => null);
  563 |         await homePage.clickChannelLink(channel);
  564 |         const popup = await popupPromise;
  565 |         if (popup) {
  566 |           await popup.waitForLoadState('domcontentloaded');
  567 |           expect(popup.url().length).toBeGreaterThan(0);
  568 |           await popup.close();
  569 |         } else {
  570 |           await expect(page.locator('body')).toBeVisible();
  571 |         }
  572 |       });
  573 |     }
  574 | 
  575 |     await allure.step('Click Subscribe Our Channels', async () => {
  576 |       await homePage.goto(data.url);
  577 |       const popupPromise = context.waitForEvent('page', { timeout: 8000 }).catch(() => null);
  578 |       await homePage.clickSubscribeOurChannels();
  579 |       const popup = await popupPromise;
  580 |       if (popup) {
  581 |         await popup.close();
  582 |       }
  583 |       await expect(page.locator('body')).toBeVisible();
  584 |     });
  585 |   });
  586 | 
  587 |   test('TC_HOME_023: Footer Stay Updated and platform tagline are visible', async () => {
  588 |     const data = testData.TC_HOME_023;
  589 |     await meta({
  590 |       id: 'TC_HOME_023',
  591 |       title: 'Footer Stay Updated and platform tagline are visible',
  592 |       priority: 'Medium',
  593 |       description: 'Footer Stay Updated copy and platform tagline are visible.',
  594 |     });
  595 | 
  596 |     await allure.step('Open homepage and scroll to footer', async () => {
  597 |       await homePage.goto(data.url);
  598 |       await homePage.stayUpdatedText.first().scrollIntoViewIfNeeded();
  599 |     });
  600 |     await allure.step('Verify footer texts', async () => {
  601 |       await expect(homePage.stayUpdatedText.first()).toBeVisible();
  602 |       await expect(homePage.footerTagline).toBeVisible();
  603 |     });
  604 |   });
  605 | 
  606 |   test('TC_HOME_024: Soft refresh keeps homepage stable', async () => {
  607 |     const data = testData.TC_HOME_024;
  608 |     await meta({
  609 |       id: 'TC_HOME_024',
  610 |       title: 'Soft refresh keeps homepage stable',
  611 |       priority: 'Medium',
  612 |       description: 'Refreshing the homepage keeps hero and nav visible.',
  613 |     });
  614 | 
  615 |     await allure.step('Open homepage and confirm hero/nav', async () => {
  616 |       await homePage.goto(data.url);
> 617 |       await expect(homePage.homeNav.first()).toBeVisible();
      |                                              ^ Error: expect(locator).toBeVisible() failed
  618 |       await expect(homePage.heroJourneyText.first()).toBeVisible();
  619 |       await expect(homePage.heroGrowthText.first()).toBeVisible();
  620 |     });
  621 |     await allure.step('Refresh page', async () => {
  622 |       await homePage.page.reload();
  623 |     });
  624 |     await allure.step('Re-verify hero and CTA', async () => {
  625 |       await expect(homePage.homeNav.first()).toBeVisible();
  626 |       await expect(homePage.heroJourneyText.first()).toBeVisible();
  627 |       await expect(homePage.startLearningFreeLink).toBeVisible();
  628 |     });
  629 |   });
  630 | 
  631 |   test('TC_HOME_025: Mobile viewport keeps hero CTA and search reachable', async ({ page }) => {
  632 |     const data = testData.TC_HOME_025;
  633 |     await meta({
  634 |       id: 'TC_HOME_025',
  635 |       title: 'Mobile viewport keeps hero CTA and search reachable',
  636 |       priority: 'Low',
  637 |       description: 'On mobile viewport, search and primary hero CTA remain reachable.',
  638 |     });
  639 | 
  640 |     await allure.step('Set mobile viewport and open homepage', async () => {
  641 |       await page.setViewportSize({
  642 |         width: data.viewportWidth,
  643 |         height: data.viewportHeight,
  644 |       });
  645 |       await homePage.goto(data.url);
  646 |     });
  647 |     await allure.step('Verify search and hero CTA reachable', async () => {
  648 |       await expect(homePage.searchInput).toBeVisible();
  649 |       await expect(homePage.startLearningFreeLink).toBeVisible();
  650 |     });
  651 |     await allure.step('Verify primary nav texts exist', async () => {
  652 |       await expect(homePage.homeNav.first()).toBeVisible();
  653 |       await expect(homePage.exploreNav).toBeVisible();
  654 |       await expect(homePage.reelsNav.first()).toBeVisible();
  655 |     });
  656 |   });
  657 | 
  658 |   test('TC_HOME_026: "New: OTS Reels" hero CTA is visible', async () => {
  659 |     const data = testData.TC_HOME_026;
  660 |     await meta({
  661 |       id: 'TC_HOME_026',
  662 |       title: '"New: OTS Reels" hero CTA is visible',
  663 |       priority: 'Medium',
  664 |       description: 'Hero CTA text "New: OTS Reels" is visible on the homepage.',
  665 |     });
  666 | 
  667 |     await allure.step('Open homepage', async () => {
  668 |       await homePage.goto(data.url);
  669 |     });
  670 |     await allure.step('Verify New: OTS Reels text', async () => {
  671 |       await expect(homePage.newOtsReelsText).toBeVisible();
  672 |     });
  673 |   });
  674 | 
  675 |   test('TC_HOME_027: "Watch How It Works" text is visible', async () => {
  676 |     const data = testData.TC_HOME_027;
  677 |     await meta({
  678 |       id: 'TC_HOME_027',
  679 |       title: '"Watch How It Works" text is visible',
  680 |       priority: 'Medium',
  681 |       description: 'CTA text "Watch How It Works" is visible on the homepage.',
  682 |     });
  683 | 
  684 |     await allure.step('Open homepage', async () => {
  685 |       await homePage.goto(data.url);
  686 |     });
  687 |     await allure.step('Verify Watch How It Works text', async () => {
  688 |       await expect(homePage.watchHowItWorksText).toBeVisible();
  689 |     });
  690 |   });
  691 | 
  692 |   test('TC_HOME_028: Contact email info@offtheschool.io is visible in footer', async () => {
  693 |     const data = testData.TC_HOME_028;
  694 |     await meta({
  695 |       id: 'TC_HOME_028',
  696 |       title: 'Contact email info@offtheschool.io is visible in footer',
  697 |       priority: 'Low',
  698 |       description: 'Footer contact email info@offtheschool.io is visible.',
  699 |     });
  700 | 
  701 |     await allure.step('Open homepage', async () => {
  702 |       await homePage.goto(data.url);
  703 |     });
  704 |     await allure.step('Verify contact email', async () => {
  705 |       await homePage.contactEmailText.scrollIntoViewIfNeeded();
  706 |       await expect(homePage.contactEmailText).toBeVisible();
  707 |     });
  708 |   });
  709 | 
  710 |   test('TC_HOME_029: Course count badge "100+ Courses" is visible', async () => {
  711 |     const data = testData.TC_HOME_029;
  712 |     await meta({
  713 |       id: 'TC_HOME_029',
  714 |       title: 'Course count badge "100+ Courses" is visible',
  715 |       priority: 'Low',
  716 |       description: 'Course count badge "100+ Courses" is visible on the homepage.',
  717 |     });
```