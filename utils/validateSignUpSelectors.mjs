import { chromium } from 'playwright';

const SIGNUP_URL = 'https://edu.offtheschool.io/signup';

const selectors = [
  { name: 'OTS Logo', fn: p => p.getByRole('img', { name: 'OTS Logo' }) },
  { name: 'Create your free account heading', fn: p => p.getByRole('heading', { name: 'Create your free account' }) },
  { name: 'Subheading text', fn: p => p.getByText("Start learning with Pakistan'") },
  { name: 'or with email divider', fn: p => p.getByText('or with email') },
  { name: 'Email Address* label', fn: p => p.getByText('Email Address*') },
  { name: 'Email Address textbox', fn: p => p.getByRole('textbox', { name: 'Email Address' }) },
  { name: 'Create Password* label', fn: p => p.getByText('Create Password*') },
  { name: 'Create Password textbox', fn: p => p.getByRole('textbox', { name: 'Create Password' }) },
  { name: 'Confirm Password* label', fn: p => p.getByText('Confirm Password*') },
  { name: 'Confirm Password textbox', fn: p => p.getByRole('textbox', { name: 'Confirm Password' }) },
  { name: 'Terms checkbox text', fn: p => p.getByText('I agree to the Terms and') },
  { name: 'Terms link', fn: p => p.getByText('Terms') },
  { name: 'Privacy Policy link', fn: p => p.getByText('Privacy Policy') },
  { name: 'Account prompt text', fn: p => p.getByText('Already have an account? Sign') },
  { name: 'Sign in link', fn: p => p.getByText('Sign in') },
  { name: 'Form container header', fn: p => p.getByText('Back to HomeCreate your free') },
];

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto(SIGNUP_URL, { waitUntil: 'domcontentloaded', timeout: 45000 });
  await page.getByRole('heading', { name: 'Create your free account' }).waitFor({ state: 'visible', timeout: 20000 });

  console.log('Current URL:', page.url());
  console.log('\n=== Sign Up Selector Validation ===\n');

  const results = [];
  for (const sel of selectors) {
    const loc = sel.fn(page);
    const count = await loc.count();
    const status = count === 1 ? 'OK' : (count === 0 ? 'FAIL (0)' : `WARN (${count})`);
    console.log(`${status.padEnd(12)} | ${sel.name} → count=${count}`);
    results.push({ name: sel.name, count, status });
  }

  console.log('\n=== Done ===');
  const fails = results.filter(r => r.status.startsWith('FAIL'));
  const warns = results.filter(r => r.status.startsWith('WARN'));
  if (fails.length) { console.log('\nFailing:'); fails.forEach(f => console.log(`  ✗ ${f.name} (${f.count})`)); }
  if (warns.length) { console.log('\nMulti-match:'); warns.forEach(w => console.log(`  ! ${w.name} (${w.count})`)); }
  if (!fails.length && !warns.length) console.log('\nAll selectors matched exactly one element.');

  await browser.close();
})();
