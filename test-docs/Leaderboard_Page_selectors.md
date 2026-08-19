# Leaderboard Page Selectors

## Newly Discovered Selectors

| # | Element | Locator | Status |
|---|---------|---------|--------|
| 1 | Filter option: All Subjects | `page.getByText('All Subjects', { exact: true })` | OK (1 match) |
| 2 | Filter option: By Subject | `page.getByText('By Subject', { exact: true })` | OK (1 match) |
| 3 | Filter option: By Chapter | `page.getByText('By Chapter', { exact: true })` | OK (1 match) |

**Still unresolvable:** Podium cards, student list rows, rank numbers, student names, attempts/points (leaderboard was showing "Loading..." for this test user — data-dependent). Profile icon also MISS.
