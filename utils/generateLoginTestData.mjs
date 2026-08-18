import { writeFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const local64 = 'a'.repeat(64);
const local65 = 'a'.repeat(65);
const email254 = `${'a'.repeat(64)}@${'b'.repeat(185)}.com`;
const email255 = `${email254}x`;
const pwdMax = `A1${'!'.repeat(1)}${'x'.repeat(125)}`;
const pwdOver = `${pwdMax}y`;
const long1k = 'x'.repeat(1000);

const data = {
  urls: {
    login: 'https://edu.offtheschool.io/login',
    home: 'https://edu.offtheschool.io/home',
    dashboard: 'https://edu.offtheschool.io/dashboard',
    postLogin: '/home|/dashboard',
    forgotPassword: 'https://edu.offtheschool.io/forgotpassword',
    google: 'https://accounts.google.com/',
    registrationHint: '/signup|/register|/sign-up',
  },
  validLogin: {
    email: 'taha.zuberi@offtheschool.io',
    password: '1234This.',
  },
  invalidEmail: {
    email: 'user@gmail.com',
    password: '1234This.',
  },
  'TC-001': { email: 'taha.zuberi@offtheschool.io', password: '1234This.' },
  'TC-002': { email: 'taha.zuberi@offtheschool.io', password: '1234This.', rememberMe: true },
  'TC-003': { expectedGoogleHost: 'accounts.google.com' },
  'TC-004': { note: 'Requires authorized Google account interaction' },
  'TC-005': { email: 'taha.zuberi@offtheschool.io', password: '1234This.' },
  'TC-006': { email: '', password: '' },
  'TC-007': { email: '', password: '1234This.' },
  'TC-008': { email: 'taha.zuberi@offtheschool.io', password: '' },
  'TC-009': { email: 'taha.zuberi@offtheschool.io', password: 'WrongPass123.' },
  'TC-010': { email: 'user@gmail.com', password: '1234This.' },
  'TC-011': { email: 'invalid.user@example.com', password: 'WrongPass123.' },
  'TC-012': { email: 'locked.user@offtheschool.io', password: '1234This.' },
  'TC-013': { email: 'taha.zuberi@offtheschool.io', password: 'WrongPass123.', attempts: 6 },
  'TC-014': { email: 'taha.zuberi@offtheschool.io', password: '1234This.' },
  'TC-015': { email: '<script>alert(1)</script>@test.com', password: '1234This.' },
  'TC-016': { email: "' OR '1'='1@test.com", password: 'anything' },
  'TC-017': { email: 'user@gmail.com', password: '1234This.' },
  'TC-018': {},
  'TC-019': {},
  'TC-020': { email: ' taha.zuberi@offtheschool.io ', password: '1234This.' },
  'TC-021': { email: 'taha.zuberi@offtheschool.io', password: '1234This.' },
  'TC-022': {},
  'TC-023': { email: 'taha.zuberi@offtheschool.io', password: '1234This.', rememberMe: false },
  'TC-024': { email: 'taha.zuberi@offtheschool.io', password: '1234This.' },
  'TC-025': { email: 'taha.zuberiofftheschool.io', password: '1234This.' },
  'TC-026': { email: '@offtheschool.io', password: '1234This.' },
  'TC-027': { email: 'taha.zuberi@', password: '1234This.' },
  'TC-028': { email: 'taha@@offtheschool.io', password: '1234This.' },
  'TC-029': { email: 'taha@localhost', password: '1234This.' },
  'TC-030': { email: '   ', password: '1234This.' },
  'TC-031': { email: 'taha.zuberi@offtheschool.io', password: '   ' },
  'TC-032': { email: 'taha.zuberi@offtheschool.io', password: ' 1234This. ' },
  'TC-033': { email: 'TAHA.ZUBERI@OFFTHESCHOOL.IO', password: '1234This.' },
  'TC-034': { note: 'Unauthorized Google account' },
  'TC-035': { note: 'Cancelled Google authentication' },
  'TC-036': { oauthErrorPath: '/login?error=access_denied' },
  'TC-037': { email: email254, password: '1234This.' },
  'TC-038': { email: email255, password: '1234This.' },
  'TC-039': { email: `${local64}@offtheschool.io`, password: '1234This.' },
  'TC-040': { email: `${local65}@offtheschool.io`, password: '1234This.' },
  'TC-041': { email: 'taha.zuberi@offtheschool.io', password: '123' },
  'TC-042': { email: 'taha.zuberi@offtheschool.io', password: 'Ab1!xxxx' },
  'TC-043': { email: 'taha.zuberi@offtheschool.io', password: pwdMax },
  'TC-044': { email: 'taha.zuberi@offtheschool.io', password: pwdOver },
  'TC-045': {},
  'TC-046': {},
  'TC-047': { email: 'taha.zuberi@offtheschool.io', password: '1234This.' },
  'TC-048': { email: 'taha.zuberi@offtheschool.io', password: '1234This.' },
  'TC-049': { email: 'taha.zuberi@offtheschool.io', password: '1234This.' },
  'TC-050': { email: 'taha.zuberi@offtheschool.io', password: '1234This.' },
  'TC-051': {},
  'TC-052': { email: 'taha.zuberi@offtheschool.io', password: '1234This.' },
  'TC-053': { homeUrl: 'https://edu.offtheschool.io/dashboard' },
  'TC-054': { homeUrl: 'https://edu.offtheschool.io/dashboard' },
  'TC-055': { email: 'a@b.co', password: '1234This.' },
  'TC-056': { email: 'taha.zuberi+test@offtheschool.io', password: '1234This.' },
  'TC-057': { email: 'user@mail.offtheschool.io', password: '1234This.' },
  'TC-058': { email: 'taha.zuberi@offtheschool.io', password: 'P@ssw0rd!#$%' },
  'TC-059': { email: 'taha.zuberi@offtheschool.io', password: 'Pass123!café日本語' },
  'TC-060': { email: long1k, password: long1k },
  'TC-061': {},
  'TC-062': {},
  'TC-063': { email: 'taha.zuberi@offtheschool.io', password: '1234This.' },
  'TC-064': {},
  'TC-065': {},
  'TC-066': {},
  'TC-067': {},
  'TC-068': {
    email: 'taha.zuberi@offtheschool.io',
    password: '1234This.',
    viewport: { width: 390, height: 844 },
  },
  'TC-069': {
    email: 'taha.zuberi@offtheschool.io',
    password: '1234This.',
    viewport: { width: 1440, height: 900 },
  },
  'TC-070': { accessibleName: 'OTS Logo' },
};

const outPath = path.join(__dirname, '../test-data/loginPage.JSON');
writeFileSync(outPath, JSON.stringify(data, null, 2));
console.log(`Wrote ${outPath}`);
