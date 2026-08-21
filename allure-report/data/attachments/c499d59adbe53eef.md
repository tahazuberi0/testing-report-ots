# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: specs\favoriteChapters.spec.js >> OTS EdTech Favorite Chapters Page >> TC_FAVCHAP_009: Secondary action button is present and clickable without crash
- Location: tests\specs\favoriteChapters.spec.js:216:3

# Error details

```
TimeoutError: locator.waitFor: Timeout 20000ms exceeded.
Call log:
  - waiting for getByRole('textbox', { name: 'Email Address' }) to be visible

```

```
Tearing down "context" exceeded the test timeout of 90000ms.
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e3]:
    - button "Open reels" [ref=e4] [cursor=pointer]:
      - img [ref=e5]
    - main [ref=e9]:
      - generic [ref=e10]:
        - generic [ref=e11]:
          - generic [ref=e12]:
            - img "OTS Logo" [ref=e13] [cursor=pointer]
            - button "Back to Home" [ref=e14] [cursor=pointer]:
              - img [ref=e16]
              - text: Back to Home
          - generic [ref=e18]:
            - generic [ref=e19]:
              - heading "Sign in to your account" [level=2] [ref=e20]
              - paragraph [ref=e21]: Continue your learning journey with OTS EdTech
            - button "Continue with Google" [ref=e23] [cursor=pointer]:
              - img [ref=e25]
              - text: Continue with Google
            - generic [ref=e31]:
              - separator [ref=e32]
              - paragraph [ref=e33]: or continue with email
              - separator [ref=e34]
            - generic [ref=e35]:
              - group [ref=e37]:
                - generic [ref=e38]: Email Address*
                - generic [ref=e39]:
                  - img [ref=e41]
                  - textbox "Email Address" [ref=e43]:
                    - /placeholder: you@example.com
              - group [ref=e45]:
                - generic [ref=e46]: Password*
                - generic [ref=e47]:
                  - img [ref=e49]
                  - textbox "Password" [ref=e51]:
                    - /placeholder: Enter your password
                  - img [ref=e53] [cursor=pointer]
              - paragraph [ref=e57] [cursor=pointer]: Forgot Password?
              - button "Sign In" [ref=e59] [cursor=pointer]:
                - text: Sign In
                - img [ref=e61]
              - paragraph [ref=e64]: Don't have an account? Sign up for free
            - paragraph [ref=e66]: By signing in, you agree to our Terms of Service and Privacy Policy
        - generic [ref=e69] [cursor=pointer]:
          - img [ref=e72]
          - generic [ref=e124]:
            - paragraph [ref=e125]: 🐌 Slow and steady wins the race
            - paragraph [ref=e126]: Hover to speed up!
          - generic:
            - generic:
              - paragraph: ✨
            - generic:
              - heading "Great Things Take Time" [level=2]:
                - text: Great Things
                - generic: Take Time
              - paragraph: Just like our little snail friend, learning is a journey—not a race. Every small step brings you closer to greatness.
              - paragraph: Welcome back to
              - generic:
                - img "OTS"
              - paragraph: Where learning happens at your own pace 🎓
  - generic:
    - region "Notifications-top"
    - region "Notifications-top-left"
    - region "Notifications-top-right"
    - region "Notifications-bottom-left"
    - region "Notifications-bottom"
    - region "Notifications-bottom-right"
```