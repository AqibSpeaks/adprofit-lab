import csv
from datetime import datetime, timezone
from pathlib import Path
rows=list(csv.DictReader(Path("content-queue.csv").open()))
pending=[r for r in rows if r["status"]=="review_needed"]
lines=["# Weekly AdProfit Lab acquisition brief", "", "Generated (UTC): "+datetime.now(timezone.utc).strftime("%Y-%m-%d"), "", "## Topics for human review", ""]
for r in pending: lines.append("- **"+r["keyword"]+"** — "+r["content_angle"])
lines += ["", "## Manual checks", "", "- Review Search Console performance and indexing.", "- Check Formspree signups and consent before any outreach.", "- Draft one useful article or social post and fact-check before publishing.", "- Check site navigation, calculator outputs and the signup form.", "- Record traffic, signups, paid customers and actual costs; do not infer these from this brief.", "", "This workflow does not publish content, scrape leads, send emails, or spend money."]
Path("acquisition-brief.md").write_text("\n".join(lines)+"\n")
