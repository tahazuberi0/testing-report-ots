

Newly Discovered Selectors (resolved live)

Create Account Button: page.getByRole('button', { name: /create account/i })

Continue with Google Button: page.getByRole('button', { name: /continue with google/i })

Back to Home Link: page.getByText(/^back to home$/i)

Terms Checkbox Input: page.locator('input[type="checkbox"]')

Terms Checkbox (role): page.getByRole('checkbox')
