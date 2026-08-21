# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: specs\Explore-Page.spec.js >> OTS EdTech Explore Page >> TC_EXPLORE_009: Browser Back from Digital School catalog returns to usable Explore hub
- Location: tests\specs\Explore-Page.spec.js:224:3

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('div').filter({ has: getByRole('heading', { name: 'Digital School' }) }).filter({ hasNot: getByRole('heading', { name: 'Skills Academy' }) }).filter({ has: getByRole('button', { name: 'Explore Courses' }) }).last().getByRole('button', { name: 'Explore Courses' })
Expected: visible
Timeout: 15000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 15000ms
  - waiting for locator('div').filter({ has: getByRole('heading', { name: 'Digital School' }) }).filter({ hasNot: getByRole('heading', { name: 'Skills Academy' }) }).filter({ has: getByRole('button', { name: 'Explore Courses' }) }).last().getByRole('button', { name: 'Explore Courses' })

```

```yaml
- img "Logo"
- paragraph: Home
- paragraph: Explore
- paragraph: Reels
- paragraph: Meet Our Team
- paragraph: Contact Us
- button:
  - img
- button "Open reels"
- main:
  - navigation "breadcrumb":
    - list:
      - listitem:
        - link "Home":
          - /url: /
          - img
          - text: Home
        - img
      - listitem:
        - text: Explore
        - img
      - listitem: Categories
  - heading "Explore Categories" [level=2]
  - img
  - heading "Digital School" [level=2]
  - button "Let's Start!"
  - text: 
  - img
  - img
  - heading "Skills Academy" [level=2]
  - button "Explore Courses"
  - text: 
  - img "Off The School"
  - paragraph: Pakistan's first free EdTech platform. Learn smartly at your own Pace, Anywhere, Anytime.
  - paragraph: Stay Updated
  - textbox "Enter your email"
  - button:
    - img
  - link "Facebook":
    - /url: https://www.facebook.com/OTS.Edtech/
    - img
  - link "Twitter":
    - /url: https://x.com/offtheschool
    - img
  - link "Instagram":
    - /url: https://www.instagram.com/otsedtech/
    - img
  - link "LinkedIn":
    - /url: https://linkedin.com/company/off-the-school/
    - img
  - link "YouTube":
    - /url: https://www.youtube.com/@otsedtech
    - img
  - heading "Quick Links" [level=4]
  - link "About Us":
    - /url: /aboutus
    - img
    - text: About Us
  - link "Contact":
    - /url: /contactus
    - img
    - text: Contact
  - link "FAQ":
    - /url: /faq
    - img
    - text: FAQ
  - link "Privacy Policy":
    - /url: /privacy-policy
    - img
    - text: Privacy Policy
  - link "Terms of Use":
    - /url: /terms-of-use
    - img
    - text: Terms of Use
  - heading "Contact Us" [level=4]
  - img
  - paragraph: Off The School, opposite Baghdadi Masjid, Martin Quarters, near Jail Road, Karachi
  - img
  - link "info@offtheschool.io":
    - /url: mailto:info@offtheschool.io
  - img
  - link "+92 301 0687687":
    - /url: tel:+923010687687
  - heading "Download App" [level=4]
  - paragraph: Get our app for a better learning experience
  - img "QR Code"
  - paragraph: Scan to Download
  - link "Google Play":
    - /url: https://play.google.com/store
    - img "Google Play"
  - paragraph: © 2026 Off The School. All rights reserved.
  - link "Privacy":
    - /url: /privacy-policy
  - link "Terms":
    - /url: /terms-of-use
  - link "FAQ":
    - /url: /faq
- region "Notifications-top"
- region "Notifications-top-left"
- region "Notifications-top-right"
- region "Notifications-bottom-left"
- region "Notifications-bottom"
- region "Notifications-bottom-right"
```

# Test source

```ts
  147 |   test('TC_EXPLORE_006: Digital School and Skills Academy cards are both visible together', async () => {
  148 |     const data = testData.TC_EXPLORE_006;
  149 |     await meta({
  150 |       id: 'TC_EXPLORE_006',
  151 |       title: 'Digital School and Skills Academy cards are both visible together',
  152 |       priority: 'Medium',
  153 |       description:
  154 |         'Both category cards are visible together; CTAs remain reachable without overlap hiding them.',
  155 |     });
  156 | 
  157 |     await allure.step('Open Explore hub', async () => {
  158 |       await explorePage.goto(data.url);
  159 |     });
  160 |     await allure.step('Verify both cards and CTAs are visible and have layout boxes', async () => {
  161 |       await expect(explorePage.digitalSchoolHeading).toBeVisible();
  162 |       await expect(explorePage.digitalSchoolStartBtn).toBeVisible();
  163 |       await expect(explorePage.skillsAcademyHeading).toBeVisible();
  164 |       await expect(explorePage.skillsAcademyStartBtn).toBeVisible();
  165 |       const digitalBox = await explorePage.digitalSchoolStartBtn.boundingBox();
  166 |       const skillsBox = await explorePage.skillsAcademyStartBtn.boundingBox();
  167 |       expect(digitalBox).not.toBeNull();
  168 |       expect(skillsBox).not.toBeNull();
  169 |     });
  170 |   });
  171 | 
  172 |   test('TC_EXPLORE_007: Soft refresh keeps Explore cards and CTAs visible', async () => {
  173 |     const data = testData.TC_EXPLORE_007;
  174 |     await meta({
  175 |       id: 'TC_EXPLORE_007',
  176 |       title: 'Soft refresh keeps Explore cards and CTAs visible',
  177 |       priority: 'Medium',
  178 |       description: 'Refreshing /explore keeps both cards and Let\'s Start! CTAs visible.',
  179 |     });
  180 | 
  181 |     await allure.step('Open Explore hub and confirm cards', async () => {
  182 |       await explorePage.goto(data.url);
  183 |       await expect(explorePage.digitalSchoolHeading).toBeVisible();
  184 |       await expect(explorePage.skillsAcademyHeading).toBeVisible();
  185 |       await expect(explorePage.digitalSchoolStartBtn).toBeVisible();
  186 |       await expect(explorePage.skillsAcademyStartBtn).toBeVisible();
  187 |     });
  188 |     await allure.step('Refresh the page', async () => {
  189 |       await explorePage.page.reload();
  190 |     });
  191 |     await allure.step('Re-verify both cards and CTAs', async () => {
  192 |       await expect(explorePage.digitalSchoolHeading).toBeVisible();
  193 |       await expect(explorePage.skillsAcademyHeading).toBeVisible();
  194 |       await expect(explorePage.digitalSchoolStartBtn).toBeVisible();
  195 |       await expect(explorePage.skillsAcademyStartBtn).toBeVisible();
  196 |     });
  197 |   });
  198 | 
  199 |   test("TC_EXPLORE_008: Double-click on Digital School Let's Start! does not break navigation", async ({
  200 |     page,
  201 |   }) => {
  202 |     const data = testData.TC_EXPLORE_008;
  203 |     await meta({
  204 |       id: 'TC_EXPLORE_008',
  205 |       title: "Double-click on Digital School Let's Start! does not break navigation",
  206 |       priority: 'Medium',
  207 |       description:
  208 |         "Rapid double-click of Digital School Let's Start! still lands on a stable Digital School catalog.",
  209 |     });
  210 | 
  211 |     await allure.step('Open Explore hub', async () => {
  212 |       await explorePage.goto(data.url);
  213 |       await expect(explorePage.digitalSchoolHeading).toBeVisible();
  214 |     });
  215 |     await allure.step("Double-click Digital School Let's Start!", async () => {
  216 |       await explorePage.doubleClickDigitalSchoolStart();
  217 |     });
  218 |     await allure.step('Verify stable Digital School catalog destination', async () => {
  219 |       await expect(page).toHaveURL(new RegExp(data.expectedUrlPattern, 'i'));
  220 |       await expect(page.locator('body')).toBeVisible();
  221 |     });
  222 |   });
  223 | 
  224 |   test('TC_EXPLORE_009: Browser Back from Digital School catalog returns to usable Explore hub', async ({
  225 |     page,
  226 |   }) => {
  227 |     const data = testData.TC_EXPLORE_009;
  228 |     await meta({
  229 |       id: 'TC_EXPLORE_009',
  230 |       title: 'Browser Back from Digital School catalog returns to usable Explore hub',
  231 |       priority: 'Low',
  232 |       description:
  233 |         'Browser Back from Digital School catalog returns to a usable Explore hub with both CTAs.',
  234 |     });
  235 | 
  236 |     await allure.step('Open Explore and go to Digital School catalog', async () => {
  237 |       await explorePage.goto(data.url);
  238 |       await explorePage.clickDigitalSchoolStart();
  239 |       await expect(page).toHaveURL(new RegExp(data.digitalSchoolUrlPattern, 'i'));
  240 |     });
  241 |     await allure.step('Use browser Back', async () => {
  242 |       await page.goBack();
  243 |     });
  244 |     await allure.step('Verify Explore hub cards remain interactive', async () => {
  245 |       await expect(explorePage.digitalSchoolHeading).toBeVisible();
  246 |       await expect(explorePage.skillsAcademyHeading).toBeVisible();
> 247 |       await expect(explorePage.digitalSchoolStartBtn).toBeVisible();
      |                                                       ^ Error: expect(locator).toBeVisible() failed
  248 |       await expect(explorePage.skillsAcademyStartBtn).toBeEnabled();
  249 |       await expect(explorePage.digitalSchoolStartBtn).toBeEnabled();
  250 |     });
  251 |   });
  252 | 
  253 |   test('TC_EXPLORE_010: Header navigation links Home, Reels, Meet Our Team are visible', async () => {
  254 |     const data = testData.TC_EXPLORE_010;
  255 |     await meta({
  256 |       id: 'TC_EXPLORE_010',
  257 |       title: 'Header navigation links Home, Reels, Meet Our Team are visible',
  258 |       priority: 'Medium',
  259 |       description: 'Header nav elements Home link, Reels text, Meet Our Team text are visible on Explore.',
  260 |     });
  261 | 
  262 |     await allure.step('Navigate to Explore', async () => {
  263 |       await explorePage.goto(data.url);
  264 |     });
  265 |     await allure.step('Verify header navigation elements', async () => {
  266 |       await expect(explorePage.homeLink).toBeVisible();
  267 |       await expect(explorePage.reelsText).toBeVisible();
  268 |       await expect(explorePage.meetOurTeamText).toBeVisible();
  269 |     });
  270 |   });
  271 | 
  272 |   test('TC_EXPLORE_011: Footer links FAQ, Privacy Policy, Terms of Use are visible', async () => {
  273 |     const data = testData.TC_EXPLORE_011;
  274 |     await meta({
  275 |       id: 'TC_EXPLORE_011',
  276 |       title: 'Footer links FAQ, Privacy Policy, Terms of Use are visible',
  277 |       priority: 'Low',
  278 |       description: 'Footer quick links FAQ, Privacy Policy, Terms of Use are visible on Explore.',
  279 |     });
  280 | 
  281 |     await allure.step('Navigate to Explore', async () => {
  282 |       await explorePage.goto(data.url);
  283 |     });
  284 |     await allure.step('Verify footer links', async () => {
  285 |       await explorePage.faqLink.scrollIntoViewIfNeeded();
  286 |       await expect(explorePage.faqLink).toBeVisible();
  287 |       await expect(explorePage.privacyPolicyLink).toBeVisible();
  288 |       await expect(explorePage.termsOfUseLink).toBeVisible();
  289 |     });
  290 |   });
  291 | 
  292 |   test('TC_EXPLORE_012: Footer Download App and Google Play are visible', async () => {
  293 |     const data = testData.TC_EXPLORE_012;
  294 |     await meta({
  295 |       id: 'TC_EXPLORE_012',
  296 |       title: 'Footer Download App and Google Play are visible',
  297 |       priority: 'Low',
  298 |       description: 'Footer Download App text and Google Play link are visible on Explore.',
  299 |     });
  300 | 
  301 |     await allure.step('Navigate to Explore', async () => {
  302 |       await explorePage.goto(data.url);
  303 |     });
  304 |     await allure.step('Verify Download App and Google Play', async () => {
  305 |       await explorePage.downloadAppText.scrollIntoViewIfNeeded();
  306 |       await expect(explorePage.downloadAppText).toBeVisible();
  307 |       await expect(explorePage.googlePlayLink).toBeVisible();
  308 |     });
  309 |   });
  310 | 
  311 |   test('TC_EXPLORE_013: Footer Stay Updated email field is present', async () => {
  312 |     const data = testData.TC_EXPLORE_013;
  313 |     await meta({
  314 |       id: 'TC_EXPLORE_013',
  315 |       title: 'Footer Stay Updated email field is present',
  316 |       priority: 'Low',
  317 |       description: 'Footer Stay Updated email input field is visible on Explore.',
  318 |     });
  319 | 
  320 |     await allure.step('Navigate to Explore', async () => {
  321 |       await explorePage.goto(data.url);
  322 |     });
  323 |     await allure.step('Verify email input', async () => {
  324 |       await explorePage.stayUpdatedEmail.scrollIntoViewIfNeeded();
  325 |       await expect(explorePage.stayUpdatedEmail).toBeVisible();
  326 |     });
  327 |   });
  328 | });
  329 | 
```