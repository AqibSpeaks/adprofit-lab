# Stage 4 — Automated organic acquisition

## What is live after deployment
- Four static, indexable educational landing pages with canonical URLs and internal links.
- `robots.txt` and `sitemap.xml` for `https://aqibspeaks.github.io/adprofit-lab/`.
- Existing five tools and Formspree form retained.
- Weekly GitHub Actions workflow creates a **review brief artifact**, not automatic traffic, content publication or email.

## Deploy without breaking the current site
1. Extract this ZIP. In your GitHub `aqibspeaks/adprofit-lab` repo, upload the *contents* of this folder to the repository root. Keep the `.github/workflows` and `scripts` folders; on Mac press Cmd+Shift+. to show hidden files. Replace existing `index.html` and keep the other existing site files.
2. Commit to `main`. Keep Pages source `Deploy from a branch`, `main`, `/(root)`.
3. Visit the home page, each guide URL, and `/#early-access`; test a signup.
4. Open `https://search.google.com/search-console/`, verify the URL-prefix property using the verification method offered, and submit `https://aqibspeaks.github.io/adprofit-lab/sitemap.xml`. Google indexing is not guaranteed.
5. Under repository **Actions**, select **Weekly acquisition brief** and click **Run workflow** to test. Download the `acquisition-brief` artifact from the completed run. The schedule runs Mondays at 08:00 UTC (13:00 PKT), subject to GitHub scheduling delays and inactivity restrictions.
6. Review content briefs and publish quality articles manually; update `content-queue.csv` statuses. Check Formspree notification settings.

## Limitations
- No analytics or Search Console API integration. Briefs do not include actual visitors or revenue.
- No automatic outreach, social posting, recurring payment collection, or protected Pro features.
- No guarantee of traffic, SEO rankings, signups or revenue.
- Public repository: never upload API keys or customer data.
- GitHub Pages uses static files; premium authorization and webhooks require a secure backend.
