# Profile Page Selectors

## Newly Discovered Selectors

| # | Element | Locator | Status |
|---|---------|---------|--------|
| 1 | Date of Birth label | `page.getByText('Date of Birth')` | OK |
| 2 | Date of Birth input | `page.getByRole('textbox', { name: /date of birth/i })` | OK |
| 3 | Profile completion % | `page.getByText(/\d+%/).first()` | OK ("57%") |
| 4 | Back button | `page.getByRole('button', { name: 'Back' })` | OK |
| 5 | File upload input | `page.locator('input[type="file"]')` | OK |
| 6 | Educational Info tab | `page.getByRole('button', { name: 'Educational Info' })` | OK (already in POM) |
| 7 | Educational Information heading | `page.getByRole('heading', { name: 'Educational Information' })` | OK (found after clicking Educational Info button) |
