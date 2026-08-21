# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: specs\favoriteChapters.spec.js >> OTS EdTech Favorite Chapters Page >> TC_FAVCHAP_008: Double-click Open Chapter does not break navigation
- Location: tests\specs\favoriteChapters.spec.js:191:3

# Error details

```
TimeoutError: locator.dblclick: Timeout 15000ms exceeded.
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
> 208 |       await favPage.openChapterButton.first().dblclick();
      |                                               ^ TimeoutError: locator.dblclick: Timeout 15000ms exceeded.
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
  243 |     await annotate({
  244 |       id: 'TC_FAVCHAP_010',
  245 |       title: 'Empty state displays "No Favorite Chapters Yet" heading',
  246 |       priority: 'High',
  247 |       description: 'Empty state heading "No Favorite Chapters Yet" is visible.',
  248 |     });
  249 | 
  250 |     await allure.step('Sign in and open Favorite Chapters', async () => {
  251 |       await favPage.ensureAuthenticatedFavoriteChapters(
  252 |         data.validStudentSession,
  253 |         data.loginUrl,
  254 |         data.favoriteChaptersUrl
  255 |       );
  256 |     });
  257 |     await allure.step('Verify empty state heading', async () => {
  258 |       await expect(favPage.noFavoriteChaptersHeading).toBeVisible();
  259 |     });
  260 |   });
  261 | 
  262 |   test('TC_FAVCHAP_011: Empty state shows instructional text', async () => {
  263 |     const data = testData.TC_FAVCHAP_011;
  264 |     await annotate({
  265 |       id: 'TC_FAVCHAP_011',
  266 |       title: 'Empty state shows instructional text',
  267 |       priority: 'Medium',
  268 |       description: 'Instructional text "Start adding chapters" is visible in empty state.',
  269 |     });
  270 | 
  271 |     await allure.step('Sign in and open Favorite Chapters', async () => {
  272 |       await favPage.ensureAuthenticatedFavoriteChapters(
  273 |         data.validStudentSession,
  274 |         data.loginUrl,
  275 |         data.favoriteChaptersUrl
  276 |       );
  277 |     });
  278 |     await allure.step('Verify instructional text', async () => {
  279 |       await expect(favPage.startAddingChaptersText).toBeVisible();
  280 |     });
  281 |   });
  282 | 
  283 |   test('TC_FAVCHAP_012: Browse Chapters button is visible in empty state', async () => {
  284 |     const data = testData.TC_FAVCHAP_012;
  285 |     await annotate({
  286 |       id: 'TC_FAVCHAP_012',
  287 |       title: 'Browse Chapters button is visible in empty state',
  288 |       priority: 'High',
  289 |       description: 'Browse Chapters CTA button is visible and clickable in empty state.',
  290 |     });
  291 | 
  292 |     await allure.step('Sign in and open Favorite Chapters', async () => {
  293 |       await favPage.ensureAuthenticatedFavoriteChapters(
  294 |         data.validStudentSession,
  295 |         data.loginUrl,
  296 |         data.favoriteChaptersUrl
  297 |       );
  298 |     });
  299 |     await allure.step('Verify Browse Chapters button', async () => {
  300 |       await expect(favPage.browseChaptersButton).toBeVisible();
  301 |     });
  302 |   });
  303 | });
  304 | 
```