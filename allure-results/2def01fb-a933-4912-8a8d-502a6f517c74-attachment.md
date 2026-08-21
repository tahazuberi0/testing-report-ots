# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: specs\favoriteChapters.spec.js >> OTS EdTech Favorite Chapters Page >> TC_FAVCHAP_004: Open Chapter button navigates to lesson page
- Location: tests\specs\favoriteChapters.spec.js:100:3

# Error details

```
TimeoutError: locator.click: Timeout 15000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: 'Open Chapter' }).first()

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
          - heading "Favorite Chapters" [level=2] [ref=e80]
          - generic [ref=e83]:
            - img [ref=e84]
            - heading "No Favorite Chapters Yet" [level=2] [ref=e86]
            - paragraph [ref=e87]: Start adding chapters to your favorites by clicking the favorite button on any lesson page.
            - button "Browse Chapters" [ref=e88] [cursor=pointer]:
              - img [ref=e90]
              - text: Browse Chapters
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
  17  |   await allure.feature('Favorite Chapters Page');
  18  |   await allure.story(id);
  19  |   await allure.allureId(id);
  20  |   await allure.description(description);
  21  |   await allure.severity(severityMap[priority]);
  22  |   await allure.tag(priority);
  23  |   await allure.displayName(`${id}: ${title}`);
  24  | }
  25  | 
  26  | test.describe('OTS EdTech Favorite Chapters Page', () => {
  27  |   test.setTimeout(90_000);
  28  | 
  29  |   /** @type {FavoriteChaptersPage} */
  30  |   let favPage;
  31  | 
  32  |   test.beforeEach(async ({ page }) => {
  33  |     favPage = new FavoriteChaptersPage(page);
  34  |   });
  35  | 
  36  |   test('TC_FAVCHAP_001: Authenticated student lands on Favorite Chapters with heading visible', async () => {
  37  |     const data = testData.TC_FAVCHAP_001;
  38  |     await annotate({
  39  |       id: 'TC_FAVCHAP_001',
  40  |       title: 'Authenticated student lands on Favorite Chapters with heading visible',
  41  |       priority: 'High',
  42  |       description: 'Logged-in student reaches Favorite Chapters with main heading visible.',
  43  |     });
  44  | 
  45  |     await allure.step('Sign in and open Favorite Chapters', async () => {
  46  |       await favPage.ensureAuthenticatedFavoriteChapters(
  47  |         data.validStudentSession,
  48  |         data.loginUrl,
  49  |         data.favoriteChaptersUrl
  50  |       );
  51  |     });
  52  |     await allure.step('Verify page heading', async () => {
  53  |       await expect(favPage.pageHeading).toBeVisible();
  54  |     });
  55  |   });
  56  | 
  57  |   test('TC_FAVCHAP_002: Page heading and header container are present', async () => {
  58  |     const data = testData.TC_FAVCHAP_002;
  59  |     await annotate({
  60  |       id: 'TC_FAVCHAP_002',
  61  |       title: 'Page heading and header container are present',
  62  |       priority: 'High',
  63  |       description: 'Favorite Chapters heading and header container are visible.',
  64  |     });
  65  | 
  66  |     await allure.step('Sign in and open Favorite Chapters', async () => {
  67  |       await favPage.ensureAuthenticatedFavoriteChapters(
  68  |         data.validStudentSession,
  69  |         data.loginUrl,
  70  |         data.favoriteChaptersUrl
  71  |       );
  72  |     });
  73  |     await allure.step('Verify heading and header container', async () => {
  74  |       await expect(favPage.pageHeading).toBeVisible();
  75  |       await expect(favPage.headerContainer).toBeVisible();
  76  |     });
  77  |   });
  78  | 
  79  |   test('TC_FAVCHAP_003: Open Chapter button is visible when chapters exist', async () => {
  80  |     const data = testData.TC_FAVCHAP_003;
  81  |     await annotate({
  82  |       id: 'TC_FAVCHAP_003',
  83  |       title: 'Open Chapter button is visible when chapters exist',
  84  |       priority: 'High',
  85  |       description: 'Open Chapter button visible confirming favorited chapter cards are rendered.',
  86  |     });
  87  | 
  88  |     await allure.step('Sign in and open Favorite Chapters', async () => {
  89  |       await favPage.ensureAuthenticatedFavoriteChapters(
  90  |         data.validStudentSession,
  91  |         data.loginUrl,
  92  |         data.favoriteChaptersUrl
  93  |       );
  94  |     });
  95  |     await allure.step('Verify Open Chapter button', async () => {
  96  |       await expect(favPage.openChapterButton.first()).toBeVisible();
  97  |     });
  98  |   });
  99  | 
  100 |   test('TC_FAVCHAP_004: Open Chapter button navigates to lesson page', async ({ page }) => {
  101 |     const data = testData.TC_FAVCHAP_004;
  102 |     await annotate({
  103 |       id: 'TC_FAVCHAP_004',
  104 |       title: 'Open Chapter button navigates to lesson page',
  105 |       priority: 'High',
  106 |       description: 'Clicking Open Chapter navigates away from Favorite Chapters to a lesson page.',
  107 |     });
  108 | 
  109 |     await allure.step('Sign in and open Favorite Chapters', async () => {
  110 |       await favPage.ensureAuthenticatedFavoriteChapters(
  111 |         data.validStudentSession,
  112 |         data.loginUrl,
  113 |         data.favoriteChaptersUrl
  114 |       );
  115 |     });
  116 |     await allure.step('Click Open Chapter', async () => {
> 117 |       await favPage.openChapterButton.first().click();
      |                                               ^ TimeoutError: locator.click: Timeout 15000ms exceeded.
  118 |     });
  119 |     await allure.step('Verify navigation away', async () => {
  120 |       await expect(page).not.toHaveURL(/\/dashboard\/favorite-chapters$/i);
  121 |       await expect(page.locator('body')).toBeVisible();
  122 |     });
  123 |   });
  124 | 
  125 |   test('TC_FAVCHAP_005: Chapter card element is visible for a favorited chapter', async () => {
  126 |     const data = testData.TC_FAVCHAP_005;
  127 |     await annotate({
  128 |       id: 'TC_FAVCHAP_005',
  129 |       title: 'Chapter card element is visible for a favorited chapter',
  130 |       priority: 'Medium',
  131 |       description: 'Chapter card with environment-specific text is visible (brittle locator).',
  132 |     });
  133 | 
  134 |     await allure.step('Sign in and open Favorite Chapters', async () => {
  135 |       await favPage.ensureAuthenticatedFavoriteChapters(
  136 |         data.validStudentSession,
  137 |         data.loginUrl,
  138 |         data.favoriteChaptersUrl
  139 |       );
  140 |     });
  141 |     await allure.step('Verify chapter card element', async () => {
  142 |       await expect(favPage.chapterCard).toBeVisible();
  143 |     });
  144 |   });
  145 | 
  146 |   test('TC_FAVCHAP_006: Soft refresh keeps Favorite Chapters chrome visible', async () => {
  147 |     const data = testData.TC_FAVCHAP_006;
  148 |     await annotate({
  149 |       id: 'TC_FAVCHAP_006',
  150 |       title: 'Soft refresh keeps Favorite Chapters chrome visible',
  151 |       priority: 'Medium',
  152 |       description: 'Refreshing Favorite Chapters keeps heading visible.',
  153 |     });
  154 | 
  155 |     await allure.step('Sign in and open Favorite Chapters', async () => {
  156 |       await favPage.ensureAuthenticatedFavoriteChapters(
  157 |         data.validStudentSession,
  158 |         data.loginUrl,
  159 |         data.favoriteChaptersUrl
  160 |       );
  161 |       await expect(favPage.pageHeading).toBeVisible();
  162 |     });
  163 |     await allure.step('Refresh page', async () => {
  164 |       await favPage.page.reload({ waitUntil: 'domcontentloaded' });
  165 |     });
  166 |     await allure.step('Re-verify heading', async () => {
  167 |       await expect(favPage.pageHeading).toBeVisible();
  168 |     });
  169 |   });
  170 | 
  171 |   test('TC_FAVCHAP_007: Unauthenticated access does not show favorites data', async ({
  172 |     page,
  173 |   }) => {
  174 |     const data = testData.TC_FAVCHAP_007;
  175 |     await annotate({
  176 |       id: 'TC_FAVCHAP_007',
  177 |       title: 'Unauthenticated access does not show favorites data',
  178 |       priority: 'High',
  179 |       description: 'Direct favorite-chapters access without session redirects to login.',
  180 |     });
  181 | 
  182 |     await allure.step('Open Favorite Chapters without authentication', async () => {
  183 |       await page.goto(data.favoriteChaptersUrl, { waitUntil: 'domcontentloaded' });
  184 |     });
  185 |     await allure.step('Verify login gate and no favorites chrome', async () => {
  186 |       await expect(page).toHaveURL(new RegExp(data.expectedLoginUrlPattern, 'i'));
  187 |       await expect(favPage.pageHeading).toHaveCount(0);
  188 |     });
  189 |   });
  190 | 
  191 |   test('TC_FAVCHAP_008: Double-click Open Chapter does not break navigation', async ({ page }) => {
  192 |     const data = testData.TC_FAVCHAP_008;
  193 |     await annotate({
  194 |       id: 'TC_FAVCHAP_008',
  195 |       title: 'Double-click Open Chapter does not break navigation',
  196 |       priority: 'Medium',
  197 |       description: 'Double-clicking Open Chapter reaches a single stable lesson page.',
  198 |     });
  199 | 
  200 |     await allure.step('Sign in and open Favorite Chapters', async () => {
  201 |       await favPage.ensureAuthenticatedFavoriteChapters(
  202 |         data.validStudentSession,
  203 |         data.loginUrl,
  204 |         data.favoriteChaptersUrl
  205 |       );
  206 |     });
  207 |     await allure.step('Double-click Open Chapter', async () => {
  208 |       await favPage.openChapterButton.first().dblclick();
  209 |     });
  210 |     await allure.step('Verify stable state', async () => {
  211 |       await expect(page.locator('body')).toBeVisible();
  212 |       await expect(page.getByText(/stack|exception|syntax error/i)).toHaveCount(0);
  213 |     });
  214 |   });
  215 | 
  216 |   test('TC_FAVCHAP_009: Secondary action button is present and clickable without crash', async () => {
  217 |     const data = testData.TC_FAVCHAP_009;
```