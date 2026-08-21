# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: specs\favoriteChapters.spec.js >> OTS EdTech Favorite Chapters Page >> TC_FAVCHAP_005: Chapter card element is visible for a favorited chapter
- Location: tests\specs\favoriteChapters.spec.js:125:3

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('div').filter({ hasText: /^Forward Counting$/ }).first()
Expected: visible
Timeout: 15000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 15000ms
  - waiting for locator('div').filter({ hasText: /^Forward Counting$/ }).first()

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
  - heading "Favorite Chapters" [level=2]
  - heading "No Favorite Chapters Yet" [level=2]
  - paragraph: Start adding chapters to your favorites by clicking the favorite button on any lesson page.
  - button "Browse Chapters"
- region "Notifications-top"
- region "Notifications-top-left"
- region "Notifications-top-right"
- region "Notifications-bottom-left"
- region "Notifications-bottom"
- region "Notifications-bottom-right"
```

# Test source

```ts
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
  117 |       await favPage.openChapterButton.first().click();
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
> 142 |       await expect(favPage.chapterCard).toBeVisible();
      |                                         ^ Error: expect(locator).toBeVisible() failed
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
  218 |     await annotate({
  219 |       id: 'TC_FAVCHAP_009',
  220 |       title: 'Secondary action button is present and clickable without crash',
  221 |       priority: 'Low',
  222 |       description: 'Brittle nth(1) button is clickable without crash (unclear purpose).',
  223 |     });
  224 | 
  225 |     await allure.step('Sign in and open Favorite Chapters', async () => {
  226 |       await favPage.ensureAuthenticatedFavoriteChapters(
  227 |         data.validStudentSession,
  228 |         data.loginUrl,
  229 |         data.favoriteChaptersUrl
  230 |       );
  231 |     });
  232 |     await allure.step('Click secondary action button', async () => {
  233 |       await favPage.secondaryActionButton.click();
  234 |       await favPage.page.waitForTimeout(1000);
  235 |     });
  236 |     await allure.step('Verify no crash', async () => {
  237 |       await expect(favPage.page.locator('body')).toBeVisible();
  238 |     });
  239 |   });
  240 | 
  241 |   test('TC_FAVCHAP_010: Empty state displays "No Favorite Chapters Yet" heading', async () => {
  242 |     const data = testData.TC_FAVCHAP_010;
```