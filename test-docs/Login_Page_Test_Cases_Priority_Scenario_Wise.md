# Login Page Test Cases

**Feature Under Test:** Login Page

**URL:** `https://edu.offtheschool.io/login`

## Scope

This suite covers direct email/password sign-in, Remember me, Google social sign-in, Forgot Password, Sign up for free, legal links, navigation, and the right-side illustration micro-interaction.

## Test Design Techniques Applied

- **Equivalence Partitioning:** Valid and invalid classes for email, password, registered users, unauthorized users, social sign-in users, and optional Remember me behavior.
- **Boundary Value Analysis:** Empty, null-like, minimum, maximum, min-1, max+1, whitespace-only, and extreme-length input values.
- **Negative Testing:** Invalid credentials, unauthorized actions, lockout/rate limiting, injection attempts, OAuth errors, backend failures, duplicate submissions, and unavailable network states.

## Global Test Data

| Data Type | Value |
|---|---|
| Valid Email | `taha.zuberi@offtheschool.io` |
| Valid Password | `1234This.` |
| Invalid Email | `user@gmail.com` |
| Invalid Password | `1234This.` when used with unauthorized or incorrect account context |
| Login URL | `https://edu.offtheschool.io/login` |
| Expected Home Redirect | `https://edu.offtheschool.io/home` |
| Expected Forgot Password Redirect | `https://edu.offtheschool.io/forgotpassword` |
| Expected Google Redirect | `https://accounts.google.com/` |

## Priority Guide

| Priority | Meaning |
|---|---|
| P0 | Critical/blocking: authentication, security, recovery, and registration paths that can block access or expose risk. |
| P1 | High: important validation, social-auth error handling, accessibility, and boundary checks. |
| P2 | Medium: session resilience, navigation quality, duplicate submission, and extended input edge behavior. |
| P3 | Low: visual polish, legal links, decorative interactions, responsive checks, and non-blocking UX details. |

## Coverage Summary

| Priority | Scenario | Test Case Count |
|---|---|---|
| P0 | Negative - Authentication | 3 |
| P0 | Negative - Authorization | 1 |
| P0 | Negative - Error State | 1 |
| P0 | Negative - Required Fields | 3 |
| P0 | Negative - Security | 4 |
| P0 | Onboarding | 1 |
| P0 | Positive - Primary Path | 2 |
| P0 | Positive - Session | 1 |
| P0 | Positive - Social Sign-In | 2 |
| P0 | Recovery | 1 |
| P1 | Boundary - Email | 4 |
| P1 | Boundary - Password | 4 |
| P1 | Negative - Email Format | 5 |
| P1 | Negative - Input Handling | 1 |
| P1 | Negative - Required Fields | 2 |
| P1 | Negative - Social Sign-In | 3 |
| P1 | Positive - Accessibility | 1 |
| P1 | Positive - Input Handling | 3 |
| P1 | Positive - Keyboard | 1 |
| P1 | Positive - Session | 1 |
| P2 | Boundary - Email | 3 |
| P2 | Boundary - Password | 2 |
| P2 | Edge - Input Handling | 1 |
| P2 | Edge - Privacy | 1 |
| P2 | Edge - Recovery Navigation | 1 |
| P2 | Edge - Session | 1 |
| P2 | Edge - Submission | 2 |
| P2 | Negative - Authorization | 1 |
| P2 | Negative - Error State | 1 |
| P2 | Positive - Accessibility | 1 |
| P2 | Positive - Navigation | 1 |
| P2 | Positive - UI Control | 1 |
| P3 | Accessibility | 1 |
| P3 | Edge - Media Control | 1 |
| P3 | Edge - Navigation | 1 |
| P3 | Micro-interaction | 2 |
| P3 | Positive - Legal Link | 2 |
| P3 | Responsive - Desktop | 1 |
| P3 | Responsive - Mobile | 1 |
| P3 | UI - Content | 1 |

## P0 Test Cases

Critical/blocking: authentication, security, recovery, and registration paths that can block access or expose risk.


### Scenario: Positive - Primary Path

#### TC-001: Direct sign-in succeeds with valid email and password

- **ID:** TC-001
- **Title:** Direct sign-in succeeds with valid email and password
- **Priority:** P0
- **Scenario Type:** Positive - Primary Path
- **Test Design Technique:** Equivalence partitioning: valid email + valid password class
- **Preconditions:** User is on https://edu.offtheschool.io/login; active account exists.
- **Test Data Needed:** Input Values: Valid Email: taha.zuberi@offtheschool.io; Valid Password: 1234This.; Invalid Email: user@gmail.com; Invalid Password: 1234This.
- **Steps:**
  - 1. Enter valid email.
  - 2. Enter valid password.
  - 3. Click Sign In.
- **Expected Result:**
  - User is authenticated and lands on the learning dashboard with no validation error.

#### TC-002: Direct sign-in succeeds when Remember me is selected

- **ID:** TC-002
- **Title:** Direct sign-in succeeds when Remember me is selected
- **Priority:** P0
- **Scenario Type:** Positive - Primary Path
- **Test Design Technique:** Equivalence partitioning: valid credentials + optional persistence selected
- **Preconditions:** User is on the login page; active account exists.
- **Test Data Needed:** Input Values: Valid Email: taha.zuberi@offtheschool.io; Valid Password: 1234This.; Invalid Email: user@gmail.com; Invalid Password: 1234This. Remember me: checked.
- **Steps:**
  - 1. Enter valid credentials.
  - 2. Check Remember me.
  - 3. Click Sign In.
  - 4. Reopen the site in the same browser.
- **Expected Result:**
  - User signs in successfully; session persists according to product rules.


### Scenario: Positive - Social Sign-In

#### TC-003: Continue with Google starts Google authentication

- **ID:** TC-003
- **Title:** Continue with Google starts Google authentication
- **Priority:** P0
- **Scenario Type:** Positive - Social Sign-In
- **Test Design Technique:** Equivalence partitioning: valid social sign-in entry point
- **Preconditions:** User is on https://edu.offtheschool.io/login.
- **Test Data Needed:** Input Values: Valid Google account; no email/password input required.
- **Steps:**
  - 1. Click Continue with Google.
- **Expected Result:**
  - Browser redirects to https://accounts.google.com/ and starts Google authentication.

#### TC-004: Google authentication succeeds for authorized user

- **ID:** TC-004
- **Title:** Google authentication succeeds for authorized user
- **Priority:** P0
- **Scenario Type:** Positive - Social Sign-In
- **Test Design Technique:** Equivalence partitioning: authorized Google account class
- **Preconditions:** Google account is valid and allowed for the platform.
- **Test Data Needed:** Input Values: Valid authorized Google account.
- **Steps:**
  - 1. Click Continue with Google.
  - 2. Complete Google authentication.
- **Expected Result:**
  - User is automatically logged in and redirected to the learning dashboard.


### Scenario: Positive - Session

#### TC-005: Already-authenticated user reaches dashboard instead of login loop

- **ID:** TC-005
- **Title:** Already-authenticated user reaches dashboard instead of login loop
- **Priority:** P0
- **Scenario Type:** Positive - Session
- **Test Design Technique:** State transition testing: authenticated session class
- **Preconditions:** User has an active valid session.
- **Test Data Needed:** Input Values: Existing authenticated session cookie/token.
- **Steps:**
  - 1. Navigate to https://edu.offtheschool.io/login.
- **Expected Result:**
  - User is not trapped on the login form; dashboard access remains available.


### Scenario: Negative - Required Fields

#### TC-006: Sign-in is blocked when both required fields are empty

- **ID:** TC-006
- **Title:** Sign-in is blocked when both required fields are empty
- **Priority:** P0
- **Scenario Type:** Negative - Required Fields
- **Test Design Technique:** Boundary value analysis: empty email + empty password
- **Preconditions:** User is on the login page.
- **Test Data Needed:** Input Values: Email: empty; Password: empty.
- **Steps:**
  - 1. Leave Email Address blank.
  - 2. Leave Password blank.
  - 3. Click Sign In.
- **Expected Result:**
  - Login is not submitted; required-field validation appears for both fields.

#### TC-007: Sign-in is blocked when email is empty

- **ID:** TC-007
- **Title:** Sign-in is blocked when email is empty
- **Priority:** P0
- **Scenario Type:** Negative - Required Fields
- **Test Design Technique:** Boundary value analysis: empty email
- **Preconditions:** User is on the login page.
- **Test Data Needed:** Input Values: Email: empty; Password: 1234This.
- **Steps:**
  - 1. Leave Email Address blank.
  - 2. Enter valid password.
  - 3. Click Sign In.
- **Expected Result:**
  - User is not authenticated; Email Address required validation is displayed.

#### TC-008: Sign-in is blocked when password is empty

- **ID:** TC-008
- **Title:** Sign-in is blocked when password is empty
- **Priority:** P0
- **Scenario Type:** Negative - Required Fields
- **Test Design Technique:** Boundary value analysis: empty password
- **Preconditions:** User is on the login page.
- **Test Data Needed:** Input Values: Email: taha.zuberi@offtheschool.io; Password: empty.
- **Steps:**
  - 1. Enter valid email.
  - 2. Leave Password blank.
  - 3. Click Sign In.
- **Expected Result:**
  - User is not authenticated; Password required validation is displayed.


### Scenario: Negative - Authentication

#### TC-009: Valid email with invalid password is rejected

- **ID:** TC-009
- **Title:** Valid email with invalid password is rejected
- **Priority:** P0
- **Scenario Type:** Negative - Authentication
- **Test Design Technique:** Equivalence partitioning: valid email + invalid password class
- **Preconditions:** User is on the login page.
- **Test Data Needed:** Input Values: Email: taha.zuberi@offtheschool.io; Password: WrongPass123.
- **Steps:**
  - 1. Enter valid email.
  - 2. Enter invalid password.
  - 3. Click Sign In.
- **Expected Result:**
  - Login fails; user remains on login page; safe generic error is shown.

#### TC-010: Unregistered or unauthorized email is rejected

- **ID:** TC-010
- **Title:** Unregistered or unauthorized email is rejected
- **Priority:** P0
- **Scenario Type:** Negative - Authentication
- **Test Design Technique:** Equivalence partitioning: unauthorized email class
- **Preconditions:** User is on the login page.
- **Test Data Needed:** Input Values: Email: user@gmail.com; Password: 1234This.
- **Steps:**
  - 1. Enter invalid/unregistered email.
  - 2. Enter password.
  - 3. Click Sign In.
- **Expected Result:**
  - Login fails with a safe authentication error; dashboard is not accessible.

#### TC-011: Invalid email and invalid password are rejected

- **ID:** TC-011
- **Title:** Invalid email and invalid password are rejected
- **Priority:** P0
- **Scenario Type:** Negative - Authentication
- **Test Design Technique:** Equivalence partitioning: invalid email + invalid password class
- **Preconditions:** User is on the login page.
- **Test Data Needed:** Input Values: Email: invalid.user@example.com; Password: WrongPass123.
- **Steps:**
  - 1. Enter invalid email.
  - 2. Enter invalid password.
  - 3. Click Sign In.
- **Expected Result:**
  - Login fails; no account-specific details are exposed.


### Scenario: Negative - Authorization

#### TC-012: Locked, disabled, or inactive account cannot sign in

- **ID:** TC-012
- **Title:** Locked, disabled, or inactive account cannot sign in
- **Priority:** P0
- **Scenario Type:** Negative - Authorization
- **Test Design Technique:** Negative testing: unauthorized account state
- **Preconditions:** Test account exists but is locked, disabled, inactive, or unverified.
- **Test Data Needed:** Input Values: Locked account email; correct password for that account.
- **Steps:**
  - 1. Enter locked account credentials.
  - 2. Click Sign In.
- **Expected Result:**
  - User is not logged in; error explains next action without exposing sensitive status details.


### Scenario: Negative - Security

#### TC-013: Repeated failed sign-in attempts trigger rate limiting or lockout

- **ID:** TC-013
- **Title:** Repeated failed sign-in attempts trigger rate limiting or lockout
- **Priority:** P0
- **Scenario Type:** Negative - Security
- **Test Design Technique:** Negative testing: brute-force protection
- **Preconditions:** User is on the login page; rate-limit rules are enabled.
- **Test Data Needed:** Input Values: Email: taha.zuberi@offtheschool.io; Password: repeated wrong values.
- **Steps:**
  - 1. Submit invalid password repeatedly beyond configured threshold.
  - 2. Attempt another login.
- **Expected Result:**
  - Further attempts are throttled, delayed, challenged, or locked per security policy.

#### TC-015: Script injection in email is rejected and not executed

- **ID:** TC-015
- **Title:** Script injection in email is rejected and not executed
- **Priority:** P0
- **Scenario Type:** Negative - Security
- **Test Design Technique:** Negative testing: XSS input
- **Preconditions:** User is on the login page.
- **Test Data Needed:** Input Values: Email: '<script>alert(1)</script>@test.com; Password: 1234This.
- **Steps:**
  - 1. Enter script-like email value.
  - 2. Enter password.
  - 3. Click Sign In.
- **Expected Result:**
  - Input is rejected or safely handled; no script executes; no technical error appears.

#### TC-016: SQL injection-like email input is rejected

- **ID:** TC-016
- **Title:** SQL injection-like email input is rejected
- **Priority:** P0
- **Scenario Type:** Negative - Security
- **Test Design Technique:** Negative testing: injection payload
- **Preconditions:** User is on the login page.
- **Test Data Needed:** Input Values: Email: ' OR '1'='1@test.com; Password: anything.
- **Steps:**
  - 1. Enter SQL-like payload in Email Address.
  - 2. Enter any password.
  - 3. Click Sign In.
- **Expected Result:**
  - Authentication is not bypassed; input is safely handled; no stack trace is shown.

#### TC-017: Password remains masked during entry and after failed login

- **ID:** TC-017
- **Title:** Password remains masked during entry and after failed login
- **Priority:** P0
- **Scenario Type:** Negative - Security
- **Test Design Technique:** Negative testing: sensitive data exposure
- **Preconditions:** User is on the login page.
- **Test Data Needed:** Input Values: Password: 1234This.
- **Steps:**
  - 1. Click Password field.
  - 2. Type password.
  - 3. Submit invalid login.
- **Expected Result:**
  - Password characters are masked; password value is not displayed in errors or logs visible to user.


### Scenario: Negative - Error State

#### TC-014: Authentication service outage shows recoverable error

- **ID:** TC-014
- **Title:** Authentication service outage shows recoverable error
- **Priority:** P0
- **Scenario Type:** Negative - Error State
- **Test Design Technique:** Negative testing: backend unavailable
- **Preconditions:** Authentication API is unavailable or returns 5xx.
- **Test Data Needed:** Input Values: Valid Email: taha.zuberi@offtheschool.io; Valid Password: 1234This.; Invalid Email: user@gmail.com; Invalid Password: 1234This.
- **Steps:**
  - 1. Enter valid credentials.
  - 2. Click Sign In while auth service is unavailable.
- **Expected Result:**
  - User is not falsely logged in; page shows a friendly retry message and remains usable.


### Scenario: Recovery

#### TC-018: Forgot Password redirects to recovery page

- **ID:** TC-018
- **Title:** Forgot Password redirects to recovery page
- **Priority:** P0
- **Scenario Type:** Recovery
- **Test Design Technique:** Alternative path testing
- **Preconditions:** User is on the login page.
- **Test Data Needed:** Input Values: No credentials required.
- **Steps:**
  - 1. Click Forgot Password?.
- **Expected Result:**
  - User is redirected to https://edu.offtheschool.io/forgotpassword.


### Scenario: Onboarding

#### TC-019: Sign up for free redirects new user to registration

- **ID:** TC-019
- **Title:** Sign up for free redirects new user to registration
- **Priority:** P0
- **Scenario Type:** Onboarding
- **Test Design Technique:** Alternative path testing
- **Preconditions:** User is on the login page.
- **Test Data Needed:** Input Values: No credentials required.
- **Steps:**
  - 1. Click Sign up for free.
- **Expected Result:**
  - User is redirected to the registration page; no login error appears.


## P1 Test Cases

High: important validation, social-auth error handling, accessibility, and boundary checks.


### Scenario: Positive - Session

#### TC-023: Remember me can remain unchecked for normal session

- **ID:** TC-023
- **Title:** Remember me can remain unchecked for normal session
- **Priority:** P1
- **Scenario Type:** Positive - Session
- **Test Design Technique:** Equivalence partitioning: optional checkbox unchecked class
- **Preconditions:** User is on the login page; active account exists.
- **Test Data Needed:** Input Values: Valid Email: taha.zuberi@offtheschool.io; Valid Password: 1234This.; Invalid Email: user@gmail.com; Invalid Password: 1234This. Remember me: unchecked.
- **Steps:**
  - 1. Enter valid credentials.
  - 2. Leave Remember me unchecked.
  - 3. Click Sign In.
  - 4. Close and reopen browser after normal session timeout rules.
- **Expected Result:**
  - User signs in successfully; session persistence follows standard non-remembered behavior.


### Scenario: Positive - Input Handling

#### TC-020: Email is trimmed before authentication

- **ID:** TC-020
- **Title:** Email is trimmed before authentication
- **Priority:** P1
- **Scenario Type:** Positive - Input Handling
- **Test Design Technique:** Equivalence partitioning: valid email with harmless whitespace
- **Preconditions:** User is on the login page; active account exists.
- **Test Data Needed:** Input Values: Email: ' taha.zuberi@offtheschool.io '; Password: 1234This.
- **Steps:**
  - 1. Enter email with leading/trailing spaces.
  - 2. Enter valid password.
  - 3. Click Sign In.
- **Expected Result:**
  - Whitespace is trimmed or handled safely; valid user can sign in.

#### TC-024: User can paste email and password

- **ID:** TC-024
- **Title:** User can paste email and password
- **Priority:** P1
- **Scenario Type:** Positive - Input Handling
- **Test Design Technique:** Equivalence partitioning: pasted valid input class
- **Preconditions:** Clipboard contains valid credentials; user is on login page.
- **Test Data Needed:** Input Values: Valid Email: taha.zuberi@offtheschool.io; Valid Password: 1234This.; Invalid Email: user@gmail.com; Invalid Password: 1234This.
- **Steps:**
  - 1. Paste valid email into Email Address.
  - 2. Paste valid password into Password.
  - 3. Click Sign In.
- **Expected Result:**
  - Pasted values are accepted; login succeeds for valid credentials.

#### TC-033: Uppercase email variant authenticates same account

- **ID:** TC-033
- **Title:** Uppercase email variant authenticates same account
- **Priority:** P1
- **Scenario Type:** Positive - Input Handling
- **Test Design Technique:** Equivalence partitioning: case-insensitive email class
- **Preconditions:** User is on the login page; active account exists.
- **Test Data Needed:** Input Values: Email: TAHA.ZUBERI@OFFTHESCHOOL.IO; Password: 1234This.
- **Steps:**
  - 1. Enter uppercase email.
  - 2. Enter valid password.
  - 3. Click Sign In.
- **Expected Result:**
  - Email is handled case-insensitively where appropriate; login succeeds.


### Scenario: Positive - Keyboard

#### TC-021: Pressing Enter submits valid credentials

- **ID:** TC-021
- **Title:** Pressing Enter submits valid credentials
- **Priority:** P1
- **Scenario Type:** Positive - Keyboard
- **Test Design Technique:** Equivalence partitioning: valid keyboard submission path
- **Preconditions:** User is on the login page.
- **Test Data Needed:** Input Values: Valid Email: taha.zuberi@offtheschool.io; Valid Password: 1234This.; Invalid Email: user@gmail.com; Invalid Password: 1234This.
- **Steps:**
  - 1. Enter valid email.
  - 2. Enter valid password.
  - 3. Press Enter while focus is in Password field.
- **Expected Result:**
  - Login submission is triggered and user reaches dashboard.


### Scenario: Positive - Accessibility

#### TC-022: Tab order supports efficient sign-in

- **ID:** TC-022
- **Title:** Tab order supports efficient sign-in
- **Priority:** P1
- **Scenario Type:** Positive - Accessibility
- **Test Design Technique:** State transition testing: keyboard focus order
- **Preconditions:** User is on the login page.
- **Test Data Needed:** Input Values: Keyboard only; no mouse required.
- **Steps:**
  - 1. Press Tab from page start through all login controls.
  - 2. Activate Sign In with keyboard.
- **Expected Result:**
  - Focus order is logical: Email, Password, Remember me, Forgot Password, Sign In, Google/sign-up links.


### Scenario: Negative - Required Fields

#### TC-030: Whitespace-only email is treated as empty

- **ID:** TC-030
- **Title:** Whitespace-only email is treated as empty
- **Priority:** P1
- **Scenario Type:** Negative - Required Fields
- **Test Design Technique:** Boundary value analysis: empty-after-trim value
- **Preconditions:** User is on the login page.
- **Test Data Needed:** Input Values: Email: spaces only; Password: 1234This.
- **Steps:**
  - 1. Enter only spaces in Email Address.
  - 2. Enter valid password.
  - 3. Click Sign In.
- **Expected Result:**
  - Login is blocked; required or invalid email validation appears.

#### TC-031: Whitespace-only password is rejected

- **ID:** TC-031
- **Title:** Whitespace-only password is rejected
- **Priority:** P1
- **Scenario Type:** Negative - Required Fields
- **Test Design Technique:** Boundary value analysis: empty/invalid password after trim policy
- **Preconditions:** User is on the login page.
- **Test Data Needed:** Input Values: Email: taha.zuberi@offtheschool.io; Password: spaces only.
- **Steps:**
  - 1. Enter valid email.
  - 2. Enter spaces only in Password.
  - 3. Click Sign In.
- **Expected Result:**
  - User is not authenticated; password validation or safe auth error appears.


### Scenario: Negative - Email Format

#### TC-025: Email without at-sign is rejected

- **ID:** TC-025
- **Title:** Email without at-sign is rejected
- **Priority:** P1
- **Scenario Type:** Negative - Email Format
- **Test Design Technique:** Equivalence partitioning: malformed email class
- **Preconditions:** User is on the login page.
- **Test Data Needed:** Input Values: Email: taha.zuberiofftheschool.io; Password: 1234This.
- **Steps:**
  - 1. Enter email without @.
  - 2. Enter password.
  - 3. Click Sign In.
- **Expected Result:**
  - Login is blocked or fails gracefully with email-format validation.

#### TC-026: Email missing local part is rejected

- **ID:** TC-026
- **Title:** Email missing local part is rejected
- **Priority:** P1
- **Scenario Type:** Negative - Email Format
- **Test Design Technique:** Equivalence partitioning: malformed email class
- **Preconditions:** User is on the login page.
- **Test Data Needed:** Input Values: Email: @offtheschool.io; Password: 1234This.
- **Steps:**
  - 1. Enter email missing local part.
  - 2. Enter password.
  - 3. Click Sign In.
- **Expected Result:**
  - Email validation is shown; user is not authenticated.

#### TC-027: Email missing domain is rejected

- **ID:** TC-027
- **Title:** Email missing domain is rejected
- **Priority:** P1
- **Scenario Type:** Negative - Email Format
- **Test Design Technique:** Equivalence partitioning: malformed email class
- **Preconditions:** User is on the login page.
- **Test Data Needed:** Input Values: Email: taha.zuberi@; Password: 1234This.
- **Steps:**
  - 1. Enter email missing domain.
  - 2. Enter password.
  - 3. Click Sign In.
- **Expected Result:**
  - Email validation is shown; user is not authenticated.

#### TC-028: Email with multiple at-signs is rejected

- **ID:** TC-028
- **Title:** Email with multiple at-signs is rejected
- **Priority:** P1
- **Scenario Type:** Negative - Email Format
- **Test Design Technique:** Equivalence partitioning: malformed email class
- **Preconditions:** User is on the login page.
- **Test Data Needed:** Input Values: Email: taha@@offtheschool.io; Password: 1234This.
- **Steps:**
  - 1. Enter email with two @ characters.
  - 2. Enter password.
  - 3. Click Sign In.
- **Expected Result:**
  - Email validation prevents sign-in or authentication fails safely.

#### TC-029: Single-label domain email is rejected

- **ID:** TC-029
- **Title:** Single-label domain email is rejected
- **Priority:** P1
- **Scenario Type:** Negative - Email Format
- **Test Design Technique:** Equivalence partitioning: malformed domain class
- **Preconditions:** User is on the login page.
- **Test Data Needed:** Input Values: Email: taha@localhost; Password: 1234This.
- **Steps:**
  - 1. Enter single-label domain email.
  - 2. Enter password.
  - 3. Click Sign In.
- **Expected Result:**
  - Email validation is shown or authentication fails gracefully.


### Scenario: Negative - Input Handling

#### TC-032: Password with leading or trailing spaces is not silently changed

- **ID:** TC-032
- **Title:** Password with leading or trailing spaces is not silently changed
- **Priority:** P1
- **Scenario Type:** Negative - Input Handling
- **Test Design Technique:** Negative testing: sensitive input normalization
- **Preconditions:** User is on the login page.
- **Test Data Needed:** Input Values: Email: taha.zuberi@offtheschool.io; Password: ' 1234This. '
- **Steps:**
  - 1. Enter valid email.
  - 2. Enter password with extra spaces.
  - 3. Click Sign In.
- **Expected Result:**
  - Password is treated according to security policy; it is not unexpectedly transformed in a way that weakens authentication.


### Scenario: Negative - Social Sign-In

#### TC-034: Unauthorized Google account is rejected

- **ID:** TC-034
- **Title:** Unauthorized Google account is rejected
- **Priority:** P1
- **Scenario Type:** Negative - Social Sign-In
- **Test Design Technique:** Equivalence partitioning: unauthorized social account class
- **Preconditions:** Google account exists but is not allowed or not registered.
- **Test Data Needed:** Input Values: Unauthorized Google account.
- **Steps:**
  - 1. Click Continue with Google.
  - 2. Complete Google authentication with unauthorized account.
- **Expected Result:**
  - User is not logged into dashboard; friendly authorization or onboarding state is shown.

#### TC-035: Cancelled Google authentication returns user safely

- **ID:** TC-035
- **Title:** Cancelled Google authentication returns user safely
- **Priority:** P1
- **Scenario Type:** Negative - Social Sign-In
- **Test Design Technique:** Negative testing: interrupted third-party auth
- **Preconditions:** User starts Google authentication.
- **Test Data Needed:** Input Values: Google auth flow cancelled.
- **Steps:**
  - 1. Click Continue with Google.
  - 2. Cancel or close Google sign-in.
  - 3. Return to login page.
- **Expected Result:**
  - User remains unauthenticated; login page is usable; clear cancellation or retry state appears.

#### TC-036: Google OAuth access_denied callback is handled

- **ID:** TC-036
- **Title:** Google OAuth access_denied callback is handled
- **Priority:** P1
- **Scenario Type:** Negative - Social Sign-In
- **Test Design Technique:** Negative testing: third-party callback error
- **Preconditions:** OAuth provider returns access_denied or equivalent error.
- **Test Data Needed:** Input Values: OAuth error callback.
- **Steps:**
  - 1. Start Google sign-in.
  - 2. Trigger or simulate access_denied callback.
- **Expected Result:**
  - User is not authenticated; safe error state appears; no broken blank page is shown.


### Scenario: Boundary - Email

#### TC-037: Email at maximum valid length is handled

- **ID:** TC-037
- **Title:** Email at maximum valid length is handled
- **Priority:** P1
- **Scenario Type:** Boundary - Email
- **Test Design Technique:** Boundary value analysis: max email length 254 characters
- **Preconditions:** User is on the login page.
- **Test Data Needed:** Input Values: Valid-format 254-character email; Password: 1234This.
- **Steps:**
  - 1. Enter 254-character valid-format email.
  - 2. Enter password.
  - 3. Click Sign In.
- **Expected Result:**
  - Page remains stable; input is accepted by UI; auth succeeds only if account exists.

#### TC-038: Email above maximum length is rejected gracefully

- **ID:** TC-038
- **Title:** Email above maximum length is rejected gracefully
- **Priority:** P1
- **Scenario Type:** Boundary - Email
- **Test Design Technique:** Boundary value analysis: max + 1 email length
- **Preconditions:** User is on the login page.
- **Test Data Needed:** Input Values: Valid-format 255-character email; Password: 1234This.
- **Steps:**
  - 1. Enter 255-character email.
  - 2. Enter password.
  - 3. Click Sign In.
- **Expected Result:**
  - Input is rejected, trimmed, or auth fails safely; no layout break or crash occurs.

#### TC-039: Email local part at 64 characters is handled

- **ID:** TC-039
- **Title:** Email local part at 64 characters is handled
- **Priority:** P1
- **Scenario Type:** Boundary - Email
- **Test Design Technique:** Boundary value analysis: local part max
- **Preconditions:** User is on the login page.
- **Test Data Needed:** Input Values: 64-character local part + @offtheschool.io; Password: 1234This.
- **Steps:**
  - 1. Enter email with 64-character local part.
  - 2. Enter password.
  - 3. Click Sign In.
- **Expected Result:**
  - Field handles value without UI error; authentication result is correct.

#### TC-040: Email local part above 64 characters is rejected gracefully

- **ID:** TC-040
- **Title:** Email local part above 64 characters is rejected gracefully
- **Priority:** P1
- **Scenario Type:** Boundary - Email
- **Test Design Technique:** Boundary value analysis: local part max + 1
- **Preconditions:** User is on the login page.
- **Test Data Needed:** Input Values: 65-character local part + @offtheschool.io; Password: 1234This.
- **Steps:**
  - 1. Enter email with 65-character local part.
  - 2. Enter password.
  - 3. Click Sign In.
- **Expected Result:**
  - Validation or safe auth failure occurs; page remains stable.


### Scenario: Boundary - Password

#### TC-041: Password below minimum length is rejected

- **ID:** TC-041
- **Title:** Password below minimum length is rejected
- **Priority:** P1
- **Scenario Type:** Boundary - Password
- **Test Design Technique:** Boundary value analysis: min - 1
- **Preconditions:** User is on the login page.
- **Test Data Needed:** Input Values: Email: taha.zuberi@offtheschool.io; Password: 123.
- **Steps:**
  - 1. Enter valid email.
  - 2. Enter password below configured minimum.
  - 3. Click Sign In.
- **Expected Result:**
  - Login is blocked by validation or fails safely with an authentication error.

#### TC-042: Password at minimum accepted length is handled

- **ID:** TC-042
- **Title:** Password at minimum accepted length is handled
- **Priority:** P1
- **Scenario Type:** Boundary - Password
- **Test Design Technique:** Boundary value analysis: minimum
- **Preconditions:** Minimum password length is known in product rules.
- **Test Data Needed:** Input Values: Email: taha.zuberi@offtheschool.io; Password: value at configured minimum.
- **Steps:**
  - 1. Enter valid email.
  - 2. Enter minimum-length password.
  - 3. Click Sign In.
- **Expected Result:**
  - Input is accepted by UI; authentication succeeds only if the password is correct.

#### TC-043: Password at maximum accepted length is handled

- **ID:** TC-043
- **Title:** Password at maximum accepted length is handled
- **Priority:** P1
- **Scenario Type:** Boundary - Password
- **Test Design Technique:** Boundary value analysis: maximum
- **Preconditions:** Maximum password length is known in product rules.
- **Test Data Needed:** Input Values: Email: taha.zuberi@offtheschool.io; Password: value at configured maximum.
- **Steps:**
  - 1. Enter valid email.
  - 2. Enter maximum-length password.
  - 3. Click Sign In.
- **Expected Result:**
  - Input remains usable; authentication result is correct; no UI clipping occurs.

#### TC-044: Password above maximum length is rejected gracefully

- **ID:** TC-044
- **Title:** Password above maximum length is rejected gracefully
- **Priority:** P1
- **Scenario Type:** Boundary - Password
- **Test Design Technique:** Boundary value analysis: max + 1
- **Preconditions:** Maximum password length is known in product rules.
- **Test Data Needed:** Input Values: Email: taha.zuberi@offtheschool.io; Password: value above configured maximum.
- **Steps:**
  - 1. Enter valid email.
  - 2. Paste password longer than maximum.
  - 3. Click Sign In.
- **Expected Result:**
  - Input is rejected, limited, or auth fails safely; no crash or exposed error occurs.


## P2 Test Cases

Medium: session resilience, navigation quality, duplicate submission, and extended input edge behavior.


### Scenario: Positive - Accessibility

#### TC-047: Form labels focus the correct fields

- **ID:** TC-047
- **Title:** Form labels focus the correct fields
- **Priority:** P2
- **Scenario Type:** Positive - Accessibility
- **Test Design Technique:** Usability/accessibility testing
- **Preconditions:** User is on the login page.
- **Test Data Needed:** Input Values: Click labels Email Address* and Password*.
- **Steps:**
  - 1. Click Email Address label.
  - 2. Type email.
  - 3. Click Password label.
  - 4. Type password.
- **Expected Result:**
  - Each label focuses the matching field; typed values appear in the correct controls.


### Scenario: Positive - Navigation

#### TC-045: Back to Home redirects correctly

- **ID:** TC-045
- **Title:** Back to Home redirects correctly
- **Priority:** P2
- **Scenario Type:** Positive - Navigation
- **Test Design Technique:** Alternative path testing
- **Preconditions:** User is on the login page.
- **Test Data Needed:** Input Values: No credentials required.
- **Steps:**
  - 1. Click Back to Home.
- **Expected Result:**
  - User is redirected to https://edu.offtheschool.io/home.


### Scenario: Positive - UI Control

#### TC-046: Remember me checkbox toggles on and off

- **ID:** TC-046
- **Title:** Remember me checkbox toggles on and off
- **Priority:** P2
- **Scenario Type:** Positive - UI Control
- **Test Design Technique:** State transition testing: checkbox selected/unselected
- **Preconditions:** User is on the login page.
- **Test Data Needed:** Input Values: Remember me unchecked then checked then unchecked.
- **Steps:**
  - 1. Click Remember me.
  - 2. Confirm it becomes selected.
  - 3. Click it again.
- **Expected Result:**
  - Checkbox toggles accurately and its label remains clickable.


### Scenario: Negative - Authorization

#### TC-054: Unauthenticated direct dashboard access is blocked

- **ID:** TC-054
- **Title:** Unauthenticated direct dashboard access is blocked
- **Priority:** P2
- **Scenario Type:** Negative - Authorization
- **Test Design Technique:** Negative testing: unauthorized direct URL access
- **Preconditions:** No active session exists.
- **Test Data Needed:** Input Values: No credentials; direct dashboard URL.
- **Steps:**
  - 1. Open protected dashboard URL in a fresh browser session.
- **Expected Result:**
  - User is redirected to login; dashboard data is not exposed.


### Scenario: Negative - Error State

#### TC-052: Offline or network loss during login is handled

- **ID:** TC-052
- **Title:** Offline or network loss during login is handled
- **Priority:** P2
- **Scenario Type:** Negative - Error State
- **Test Design Technique:** Negative testing: network unavailable
- **Preconditions:** Network is disabled after page loads.
- **Test Data Needed:** Input Values: Valid Email: taha.zuberi@offtheschool.io; Valid Password: 1234This.; Invalid Email: user@gmail.com; Invalid Password: 1234This.
- **Steps:**
  - 1. Load login page.
  - 2. Disable network.
  - 3. Enter valid credentials.
  - 4. Click Sign In.
- **Expected Result:**
  - User remains on page; recoverable network error is shown; credentials are not exposed.


### Scenario: Boundary - Email

#### TC-055: Minimum valid email pattern is handled

- **ID:** TC-055
- **Title:** Minimum valid email pattern is handled
- **Priority:** P2
- **Scenario Type:** Boundary - Email
- **Test Design Technique:** Boundary value analysis: short valid format
- **Preconditions:** User is on the login page.
- **Test Data Needed:** Input Values: Email: a@b.co; Password: 1234This.
- **Steps:**
  - 1. Enter minimum practical valid-format email.
  - 2. Enter password.
  - 3. Click Sign In.
- **Expected Result:**
  - Input format is accepted; authentication succeeds only if account exists.

#### TC-056: Email with plus alias is handled

- **ID:** TC-056
- **Title:** Email with plus alias is handled
- **Priority:** P2
- **Scenario Type:** Boundary - Email
- **Test Design Technique:** Equivalence partitioning: valid email special character class
- **Preconditions:** User is on the login page.
- **Test Data Needed:** Input Values: Email: taha.zuberi+test@offtheschool.io; Password: 1234This.
- **Steps:**
  - 1. Enter plus-alias email.
  - 2. Enter password.
  - 3. Click Sign In.
- **Expected Result:**
  - Email format is accepted; authentication result follows account existence and credentials.

#### TC-057: Subdomain email is handled

- **ID:** TC-057
- **Title:** Subdomain email is handled
- **Priority:** P2
- **Scenario Type:** Boundary - Email
- **Test Design Technique:** Equivalence partitioning: valid subdomain email class
- **Preconditions:** User is on the login page.
- **Test Data Needed:** Input Values: Email: user@mail.offtheschool.io; Password: 1234This.
- **Steps:**
  - 1. Enter subdomain email.
  - 2. Enter password.
  - 3. Click Sign In.
- **Expected Result:**
  - Email format is accepted; auth succeeds only for a valid registered account.


### Scenario: Boundary - Password

#### TC-058: Password with allowed special characters is handled

- **ID:** TC-058
- **Title:** Password with allowed special characters is handled
- **Priority:** P2
- **Scenario Type:** Boundary - Password
- **Test Design Technique:** Equivalence partitioning: valid password special-character class
- **Preconditions:** User is on the login page.
- **Test Data Needed:** Input Values: Email: taha.zuberi@offtheschool.io; Password: P@ssw0rd!#$%.
- **Steps:**
  - 1. Enter valid email.
  - 2. Enter password containing special characters.
  - 3. Click Sign In.
- **Expected Result:**
  - Field accepts special characters; authentication result is correct.

#### TC-059: Unicode password input is handled safely

- **ID:** TC-059
- **Title:** Unicode password input is handled safely
- **Priority:** P2
- **Scenario Type:** Boundary - Password
- **Test Design Technique:** Edge case testing: non-ASCII input
- **Preconditions:** User is on the login page.
- **Test Data Needed:** Input Values: Email: taha.zuberi@offtheschool.io; Password: Pass123! accented/unicode characters.
- **Steps:**
  - 1. Enter valid email.
  - 2. Enter password containing Unicode characters.
  - 3. Click Sign In.
- **Expected Result:**
  - Input is accepted or rejected according to policy; page does not corrupt, crash, or expose raw errors.


### Scenario: Edge - Submission

#### TC-048: Sign In loading state prevents duplicate submissions

- **ID:** TC-048
- **Title:** Sign In loading state prevents duplicate submissions
- **Priority:** P2
- **Scenario Type:** Edge - Submission
- **Test Design Technique:** Negative testing: duplicate action prevention
- **Preconditions:** Authentication request has noticeable response time.
- **Test Data Needed:** Input Values: Valid Email: taha.zuberi@offtheschool.io; Valid Password: 1234This.; Invalid Email: user@gmail.com; Invalid Password: 1234This.
- **Steps:**
  - 1. Enter valid credentials.
  - 2. Click Sign In repeatedly while request is pending.
- **Expected Result:**
  - Only one login attempt is processed or duplicate attempts are safely ignored.

#### TC-049: Double-clicking Sign In does not create duplicate sessions

- **ID:** TC-049
- **Title:** Double-clicking Sign In does not create duplicate sessions
- **Priority:** P2
- **Scenario Type:** Edge - Submission
- **Test Design Technique:** Negative testing: rapid repeated clicks
- **Preconditions:** User is on login page; active account exists.
- **Test Data Needed:** Input Values: Valid Email: taha.zuberi@offtheschool.io; Valid Password: 1234This.; Invalid Email: user@gmail.com; Invalid Password: 1234This.
- **Steps:**
  - 1. Enter valid credentials.
  - 2. Double-click Sign In quickly.
- **Expected Result:**
  - User is logged in once; no duplicate requests create inconsistent dashboard/session state.


### Scenario: Edge - Privacy

#### TC-050: Refreshing login page clears sensitive unsent password

- **ID:** TC-050
- **Title:** Refreshing login page clears sensitive unsent password
- **Priority:** P2
- **Scenario Type:** Edge - Privacy
- **Test Design Technique:** Negative testing: sensitive field persistence
- **Preconditions:** User is on the login page.
- **Test Data Needed:** Input Values: Email: taha.zuberi@offtheschool.io; Password: 1234This.; form not submitted.
- **Steps:**
  - 1. Enter email and password.
  - 2. Refresh the page.
- **Expected Result:**
  - Password is not retained in visible field; page reloads safely.


### Scenario: Edge - Recovery Navigation

#### TC-051: Browser back from Forgot Password returns to usable login page

- **ID:** TC-051
- **Title:** Browser back from Forgot Password returns to usable login page
- **Priority:** P2
- **Scenario Type:** Edge - Recovery Navigation
- **Test Design Technique:** State transition testing
- **Preconditions:** User has navigated to Forgot Password from login.
- **Test Data Needed:** Input Values: No credentials required.
- **Steps:**
  - 1. Click Forgot Password?.
  - 2. Use browser Back button.
- **Expected Result:**
  - Login page is restored and fields/buttons are usable.


### Scenario: Edge - Session

#### TC-053: Expired session redirects protected dashboard access to login

- **ID:** TC-053
- **Title:** Expired session redirects protected dashboard access to login
- **Priority:** P2
- **Scenario Type:** Edge - Session
- **Test Design Technique:** Negative testing: expired token
- **Preconditions:** User session token is expired.
- **Test Data Needed:** Input Values: Expired session cookie/token.
- **Steps:**
  - 1. Navigate directly to protected dashboard URL.
- **Expected Result:**
  - User is redirected to login or prompted to sign in again; protected content is not displayed.


### Scenario: Edge - Input Handling

#### TC-060: Very long paste into fields does not break layout

- **ID:** TC-060
- **Title:** Very long paste into fields does not break layout
- **Priority:** P2
- **Scenario Type:** Edge - Input Handling
- **Test Design Technique:** Boundary value analysis: extreme length input
- **Preconditions:** User is on the login page.
- **Test Data Needed:** Input Values: Email field paste: 1,000 characters; Password field paste: 1,000 characters.
- **Steps:**
  - 1. Paste long value into Email Address.
  - 2. Paste long value into Password.
  - 3. Observe fields and click Sign In.
- **Expected Result:**
  - Input is limited or rejected gracefully; page layout remains intact.


## P3 Test Cases

Low: visual polish, legal links, decorative interactions, responsive checks, and non-blocking UX details.


### Scenario: Positive - Legal Link

#### TC-064: Terms of Service link opens correctly

- **ID:** TC-064
- **Title:** Terms of Service link opens correctly
- **Priority:** P3
- **Scenario Type:** Positive - Legal Link
- **Test Design Technique:** Alternative path/navigation testing
- **Preconditions:** User is on the login page.
- **Test Data Needed:** Input Values: Click Terms of Service.
- **Steps:**
  - 1. Click Terms of Service.
- **Expected Result:**
  - Terms page or modal opens correctly without signing user in or losing app stability.

#### TC-065: Privacy Policy link opens correctly

- **ID:** TC-065
- **Title:** Privacy Policy link opens correctly
- **Priority:** P3
- **Scenario Type:** Positive - Legal Link
- **Test Design Technique:** Alternative path/navigation testing
- **Preconditions:** User is on the login page.
- **Test Data Needed:** Input Values: Click Privacy Policy.
- **Steps:**
  - 1. Click Privacy Policy.
- **Expected Result:**
  - Privacy page or modal opens correctly without signing user in or losing app stability.


### Scenario: Edge - Navigation

#### TC-061: OTS logo remains accessible and does not trigger unintended login

- **ID:** TC-061
- **Title:** OTS logo remains accessible and does not trigger unintended login
- **Priority:** P3
- **Scenario Type:** Edge - Navigation
- **Test Design Technique:** Exploratory/edge navigation testing
- **Preconditions:** User is on the login page.
- **Test Data Needed:** Input Values: Click image with accessible name OTS Logo.
- **Steps:**
  - 1. Click OTS Logo.
- **Expected Result:**
  - Logo action follows product design; it does not submit credentials or show an auth error.


### Scenario: Edge - Media Control

#### TC-067: Open reels button is discoverable and safe to activate

- **ID:** TC-067
- **Title:** Open reels button is discoverable and safe to activate
- **Priority:** P3
- **Scenario Type:** Edge - Media Control
- **Test Design Technique:** Exploratory edge case testing
- **Preconditions:** Open reels button is present on the login page.
- **Test Data Needed:** Input Values: Button Name: Open reels.
- **Steps:**
  - 1. Click Open reels.
  - 2. Observe resulting media or UI state.
  - 3. Return to login form.
- **Expected Result:**
  - Reels/media opens as designed; login form remains accessible; no accidental auth action occurs.


### Scenario: Responsive - Mobile

#### TC-068: Login page is usable on mobile viewport

- **ID:** TC-068
- **Title:** Login page is usable on mobile viewport
- **Priority:** P3
- **Scenario Type:** Responsive - Mobile
- **Test Design Technique:** Edge case testing: small viewport
- **Preconditions:** Browser viewport is set to common mobile size.
- **Test Data Needed:** Input Values: Mobile viewport, e.g. 390 x 844.
- **Steps:**
  - 1. Open login page on mobile viewport.
  - 2. Inspect all controls.
  - 3. Attempt valid sign-in.
- **Expected Result:**
  - No overlap or clipping; all fields/buttons are reachable; sign-in path works.


### Scenario: Responsive - Desktop

#### TC-069: Login page is usable on desktop viewport

- **ID:** TC-069
- **Title:** Login page is usable on desktop viewport
- **Priority:** P3
- **Scenario Type:** Responsive - Desktop
- **Test Design Technique:** Visual regression/edge viewport testing
- **Preconditions:** Browser viewport is set to common desktop size.
- **Test Data Needed:** Input Values: Desktop viewport, e.g. 1440 x 900.
- **Steps:**
  - 1. Open login page on desktop viewport.
  - 2. Inspect layout including right-side illustration.
  - 3. Attempt valid sign-in.
- **Expected Result:**
  - No overlap or broken spacing; primary and social sign-in paths remain usable.


### Scenario: Micro-interaction

#### TC-062: Snail illustration speeds up on hover

- **ID:** TC-062
- **Title:** Snail illustration speeds up on hover
- **Priority:** P3
- **Scenario Type:** Micro-interaction
- **Test Design Technique:** Micro-interaction testing
- **Preconditions:** Snail illustration is visible on the right side of the login page.
- **Test Data Needed:** Input Values: Mouse hover over snail illustration.
- **Steps:**
  - 1. Hover over snail illustration.
  - 2. Observe animation.
  - 3. Move pointer away.
- **Expected Result:**
  - Animation changes to faster state on hover and returns to normal afterward.

#### TC-063: Snail micro-interaction does not block form completion

- **ID:** TC-063
- **Title:** Snail micro-interaction does not block form completion
- **Priority:** P3
- **Scenario Type:** Micro-interaction
- **Test Design Technique:** Edge case testing: decorative interaction with form
- **Preconditions:** User is on login page; snail illustration is visible.
- **Test Data Needed:** Input Values: Valid Email: taha.zuberi@offtheschool.io; Valid Password: 1234This.; Invalid Email: user@gmail.com; Invalid Password: 1234This.
- **Steps:**
  - 1. Hover over snail.
  - 2. Move focus to Email field.
  - 3. Enter credentials.
  - 4. Click Sign In.
- **Expected Result:**
  - Form remains fully usable; animation does not steal focus or block clicks.


### Scenario: UI - Content

#### TC-066: Continue with email separator is visible and non-interfering

- **ID:** TC-066
- **Title:** Continue with email separator is visible and non-interfering
- **Priority:** P3
- **Scenario Type:** UI - Content
- **Test Design Technique:** Visual/content verification
- **Preconditions:** User is on the login page.
- **Test Data Needed:** Input Values: Text: or continue with email.
- **Steps:**
  - 1. Inspect separator text.
  - 2. Use email/password sign-in fields.
- **Expected Result:**
  - Separator is readable and does not overlap or block login controls.


### Scenario: Accessibility

#### TC-070: OTS logo image has accessible name

- **ID:** TC-070
- **Title:** OTS logo image has accessible name
- **Priority:** P3
- **Scenario Type:** Accessibility
- **Test Design Technique:** Accessibility testing: accessible name
- **Preconditions:** User is on the login page.
- **Test Data Needed:** Input Values: Role image, name OTS Logo.
- **Steps:**
  - 1. Inspect logo with accessibility tree or locator.
  - 2. Confirm accessible name.
- **Expected Result:**
  - Logo exposes accessible name OTS Logo and is not announced as unlabeled image.
