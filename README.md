# AdProfit Lab — Lead Capture Upgrade

## What works
All original calculators remain unchanged. This upgrade adds a Formspree-powered early-access signup form, input validation, consent checkbox, simple honeypot, AJAX submit, success/error messages, and an interest field. No subscription checkout or paid AI service is included.

## Required setup (no secret keys in the website)
1. Create a free Formspree account at https://formspree.io/ and verify your email. Free-plan limits and features can change.
2. Create a new form named `AdProfit Lab Early Access`, and set its destination/notification email.
3. Copy the Formspree endpoint, e.g. `https://formspree.io/f/abcdefgh`.
4. In `index.html`, replace `REPLACE_WITH_YOUR_FORM_ID` with the actual ID after `/f/`. Do not paste your password or API secret.
5. Upload/replace `index.html`, `styles.css`, `app.js`, and `leads.js` in the ROOT of your GitHub repo. Do not upload the ZIP as a website file. Keep existing GitHub Pages settings: Deploy from branch, main, /(root).
6. Wait for the GitHub Pages deployment, open `https://YOUR-USERNAME.github.io/adprofit-lab/#early-access`, and submit one test using your own email.
7. Confirm the submission appears in Formspree's submissions dashboard and your notification settings are correct. Check spam if no email arrives.
8. Add your real privacy-policy URL and sender contact before promoting widely. Check Formspree's data handling and applicable consent/privacy requirements.

## Automation workflow
Visitor submits form -> Formspree validates and stores submission -> dashboard/notification -> you review leads -> send only consented product updates. Email sequences, payment collection, and paid accounts are NOT automated by this package. Set up approved email marketing and unsubscribe functionality before bulk follow-up.

## Troubleshooting
- 'Setup required' = placeholder form ID not replaced.
- 'Could not submit' = check Formspree account activation, form endpoint, quota, or service response.
- 404 = `index.html` missing from repo root or Pages deployment still running.
- Missing styling = upload `styles.css` to repo root.
- No form response = upload `leads.js` to repo root and inspect browser console.
