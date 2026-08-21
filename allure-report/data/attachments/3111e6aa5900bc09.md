# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: specs\Leaderboard.spec.js >> OTS EdTech Leaderboard Page >> TC_LEADERBOARD_001: Authenticated student lands on Leaderboard with key chrome visible
- Location: tests\specs\Leaderboard.spec.js:37:3

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('Showing leaderboard for:')
Expected: visible
Timeout: 15000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 15000ms
  - waiting for getByText('Showing leaderboard for:')

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
  - heading "Leaderboard" [level=2]
  - paragraph: Compete with the best and climb the ranks!
  - paragraph: "Filter by:"
  - group:
    - combobox:
      - option "All Subjects" [selected]
      - option "By Subject"
      - option "By Chapter"
  - tablist:
    - tab "Global" [selected]:
      - paragraph: Global
    - tab "Weekly":
      - img
      - paragraph: Weekly
  - tabpanel "Global":
    - text: Loading...
    - paragraph: Loading leaderboard...
- region "Notifications-top"
- region "Notifications-top-left"
- region "Notifications-top-right"
- region "Notifications-bottom-left"
- region "Notifications-bottom"
- region "Notifications-bottom-right"
```

# Test source

```ts
  1   | import { createRequire } from 'module';
  2   | import * as allure from 'allure-js-commons';
  3   | import { test, expect } from '../fixtures/allure-hooks.js';
  4   | import { LeaderboardPage } from '../pages/Leaderboard.page.js';
  5   | 
  6   | const require = createRequire(import.meta.url);
  7   | const testData = require('../data/Leaderboard_.data.json');
  8   | 
  9   | const severityMap = {
  10  |   High: 'critical',
  11  |   Medium: 'normal',
  12  |   Low: 'minor',
  13  | };
  14  | 
  15  | async function annotate({ id, title, priority, description }) {
  16  |   await allure.epic('OTS EdTech Dashboard');
  17  |   await allure.feature('Leaderboard Page');
  18  |   await allure.story(id);
  19  |   await allure.allureId(id);
  20  |   await allure.description(description);
  21  |   await allure.severity(severityMap[priority]);
  22  |   await allure.tag(priority);
  23  |   await allure.displayName(`${id}: ${title}`);
  24  | }
  25  | 
  26  | test.describe('OTS EdTech Leaderboard Page', () => {
  27  |   test.describe.configure({ mode: 'serial' });
  28  |   test.setTimeout(90_000);
  29  | 
  30  |   /** @type {LeaderboardPage} */
  31  |   let leaderboardPage;
  32  | 
  33  |   test.beforeEach(async ({ page }) => {
  34  |     leaderboardPage = new LeaderboardPage(page);
  35  |   });
  36  | 
  37  |   test('TC_LEADERBOARD_001: Authenticated student lands on Leaderboard with key chrome visible', async () => {
  38  |     const data = testData.TC_LEADERBOARD_001;
  39  |     await annotate({
  40  |       id: 'TC_LEADERBOARD_001',
  41  |       title: 'Authenticated student lands on Leaderboard with key chrome visible',
  42  |       priority: 'High',
  43  |       description:
  44  |         'Logged-in student reaches Leaderboard with heading, subtitle, and class context visible.',
  45  |     });
  46  | 
  47  |     await allure.step('Sign in and open Leaderboard', async () => {
  48  |       await leaderboardPage.ensureAuthenticatedLeaderboard(
  49  |         data.validStudentSession,
  50  |         data.loginUrl,
  51  |         data.leaderboardUrl
  52  |       );
  53  |     });
  54  |     await allure.step('Verify page chrome', async () => {
  55  |       await expect(leaderboardPage.pageHeading).toBeVisible();
  56  |       await expect(leaderboardPage.subtitleText).toBeVisible();
> 57  |       await expect(leaderboardPage.showingLeaderboardForText).toBeVisible();
      |                                                               ^ Error: expect(locator).toBeVisible() failed
  58  |     });
  59  |   });
  60  | 
  61  |   test('TC_LEADERBOARD_002: Page heading and subtitle description are visible', async () => {
  62  |     const data = testData.TC_LEADERBOARD_002;
  63  |     await annotate({
  64  |       id: 'TC_LEADERBOARD_002',
  65  |       title: 'Page heading and subtitle description are visible',
  66  |       priority: 'High',
  67  |       description: 'Leaderboard heading and Compete with the best subtitle are visible.',
  68  |     });
  69  | 
  70  |     await allure.step('Sign in and open Leaderboard', async () => {
  71  |       await leaderboardPage.ensureAuthenticatedLeaderboard(
  72  |         data.validStudentSession,
  73  |         data.loginUrl,
  74  |         data.leaderboardUrl
  75  |       );
  76  |     });
  77  |     await allure.step('Verify heading and subtitle', async () => {
  78  |       await expect(leaderboardPage.pageHeading).toBeVisible();
  79  |       await expect(leaderboardPage.subtitleText).toBeVisible();
  80  |     });
  81  |   });
  82  | 
  83  |   test('TC_LEADERBOARD_003: Class context indicator shows active leaderboard scope', async () => {
  84  |     const data = testData.TC_LEADERBOARD_003;
  85  |     await annotate({
  86  |       id: 'TC_LEADERBOARD_003',
  87  |       title: 'Class context indicator shows active leaderboard scope',
  88  |       priority: 'High',
  89  |       description: 'Showing leaderboard for text and class indicator container are visible.',
  90  |     });
  91  | 
  92  |     await allure.step('Sign in and open Leaderboard', async () => {
  93  |       await leaderboardPage.ensureAuthenticatedLeaderboard(
  94  |         data.validStudentSession,
  95  |         data.loginUrl,
  96  |         data.leaderboardUrl
  97  |       );
  98  |     });
  99  |     await allure.step('Verify class context', async () => {
  100 |       await expect(leaderboardPage.showingLeaderboardForText).toBeVisible();
  101 |       await expect(leaderboardPage.currentClassIndicator).toBeVisible();
  102 |     });
  103 |   });
  104 | 
  105 |   test('TC_LEADERBOARD_004: Global and Weekly tabs are visible', async () => {
  106 |     const data = testData.TC_LEADERBOARD_004;
  107 |     await annotate({
  108 |       id: 'TC_LEADERBOARD_004',
  109 |       title: 'Global and Weekly tabs are visible',
  110 |       priority: 'High',
  111 |       description: 'Global and Weekly scope tabs are visible on Leaderboard.',
  112 |     });
  113 | 
  114 |     await allure.step('Sign in and open Leaderboard', async () => {
  115 |       await leaderboardPage.ensureAuthenticatedLeaderboard(
  116 |         data.validStudentSession,
  117 |         data.loginUrl,
  118 |         data.leaderboardUrl
  119 |       );
  120 |     });
  121 |     await allure.step('Verify tabs', async () => {
  122 |       await expect(leaderboardPage.globalTab).toBeVisible();
  123 |       await expect(leaderboardPage.weeklyTab).toBeVisible();
  124 |     });
  125 |   });
  126 | 
  127 |   test('TC_LEADERBOARD_005: Global tab is clickable and page stays stable', async () => {
  128 |     const data = testData.TC_LEADERBOARD_005;
  129 |     await annotate({
  130 |       id: 'TC_LEADERBOARD_005',
  131 |       title: 'Global tab is clickable and page stays stable',
  132 |       priority: 'Medium',
  133 |       description: 'Clicking Global tab keeps Leaderboard heading visible.',
  134 |     });
  135 | 
  136 |     await allure.step('Sign in and open Leaderboard', async () => {
  137 |       await leaderboardPage.ensureAuthenticatedLeaderboard(
  138 |         data.validStudentSession,
  139 |         data.loginUrl,
  140 |         data.leaderboardUrl
  141 |       );
  142 |     });
  143 |     await allure.step('Click Global tab', async () => {
  144 |       await leaderboardPage.globalTab.click();
  145 |       await leaderboardPage.page.waitForTimeout(1000);
  146 |     });
  147 |     await allure.step('Verify page stability', async () => {
  148 |       await expect(leaderboardPage.pageHeading).toBeVisible();
  149 |     });
  150 |   });
  151 | 
  152 |   test('TC_LEADERBOARD_006: Weekly tab is clickable and page stays stable', async () => {
  153 |     const data = testData.TC_LEADERBOARD_006;
  154 |     await annotate({
  155 |       id: 'TC_LEADERBOARD_006',
  156 |       title: 'Weekly tab is clickable and page stays stable',
  157 |       priority: 'Medium',
```