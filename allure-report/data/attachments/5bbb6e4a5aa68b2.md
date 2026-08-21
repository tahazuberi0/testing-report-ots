# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: specs\favoriteChapters.spec.js >> OTS EdTech Favorite Chapters Page >> TC_FAVCHAP_007: Unauthenticated access does not show favorites data
- Location: tests\specs\favoriteChapters.spec.js:171:3

# Error details

```
TimeoutError: page.goto: Timeout 45000ms exceeded.
Call log:
  - navigating to "https://edu.offtheschool.io/dashboard/favorite-chapters", waiting until "domcontentloaded"

```

```
Tearing down "context" exceeded the test timeout of 90000ms.
```