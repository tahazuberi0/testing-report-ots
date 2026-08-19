# Quiz Tracking Page — Selectors

## Newly Discovered Selectors (Gap Resolution)

The following selectors were confirmed via live probing and resolve gaps previously listed in `quizTracking_test-cases.md`.

### Summary Stat Cards

| Element | Locator | Match |
|---------|---------|-------|
| Total Attempts | `page.getByText('Total Attempts')` | OK (1 match) |
| Quizzes Taken | `page.getByText('Quizzes Taken')` | OK (1 match) |
| Average Score | `page.getByText('Average Score')` | OK (1 match) |
| Best Score | `page.getByText('Best Score')` | OK (1 match) |

### Section Headings

| Element | Locator | Match |
|---------|---------|-------|
| Quiz Attempts by Chapter | `page.getByText('Quiz Attempts by Chapter')` | OK (1 match) |

### Navigation

| Element | Locator | Match |
|---------|---------|-------|
| Back button (standalone) | `page.getByRole('button', { name: 'Back' })` | OK (1 match) |

### Sort By Dropdown Options

Visible after clicking the Sort By paragraph trigger.

| Element | Locator | Match |
|---------|---------|-------|
| Newest First | `page.getByRole('option', { name: 'Newest First' })` | OK |
| Oldest First | `page.getByRole('option', { name: 'Oldest First' })` | OK |
| Highest Score | `page.getByRole('option', { name: 'Highest Score' })` | OK |
| Lowest Score | `page.getByRole('option', { name: 'Lowest Score' })` | OK |

### Show Results Dropdown Options

| Element | Locator | Match |
|---------|---------|-------|
| All Results | `page.getByRole('option', { name: 'All Results' })` | OK |
| Latest 5 | `page.getByRole('option', { name: 'Latest 5' }).first()` | MULTI(2) — use `.first()` |
| Latest 10 | `page.getByRole('option', { name: 'Latest 10' })` | OK |
| Latest 20 | `page.getByRole('option', { name: 'Latest 20' })` | OK |
| Latest 50 | `page.getByRole('option', { name: 'Latest 50' })` | OK |

### Filter by Quiz Dropdown Options

| Element | Locator | Match |
|---------|---------|-------|
| All Quizzes | `page.getByRole('option', { name: 'All Quizzes' })` | OK |
| (quiz-specific options) | 11 option role items total | Varies by user data |

### Still Unresolvable

| Element | Issue |
|---------|-------|
| Individual quiz card / accordion row | MULTI(10) with class*="accordion" — no unique locator |
| Accordion expand caret / toggle | No selector |
| Expanded accordion content | No selector |
