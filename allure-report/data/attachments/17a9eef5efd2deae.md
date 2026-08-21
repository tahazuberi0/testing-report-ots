# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: specs\Explore-Page.spec.js >> OTS EdTech Explore Page >> TC_EXPLORE_006: Digital School and Skills Academy cards are both visible together
- Location: tests\specs\Explore-Page.spec.js:147:3

# Error details

```
TimeoutError: page.goto: Timeout 45000ms exceeded.
Call log:
  - navigating to "https://edu.offtheschool.io/explore", waiting until "load"

```

```
Tearing down "context" exceeded the test timeout of 60000ms.
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e19]:
    - generic [ref=e20]:
      - img [ref=e22]
      - img "OTS Logo" [ref=e26]
    - generic [ref=e27]:
      - paragraph [ref=e29]: Loading
      - paragraph [ref=e34]: Preparing your experience
  - generic:
    - region "Notifications-top"
    - region "Notifications-top-left"
    - region "Notifications-top-right"
    - region "Notifications-bottom-left"
    - region "Notifications-bottom"
    - region "Notifications-bottom-right"
```