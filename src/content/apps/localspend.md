---
name: "LocalSpend"
tagline: "Your spending, tracked automatically — and privately."
platforms: [ios, android]
order: 4
icon: /apps/localspend/icon.png
accent: "#0A1932"
screenshots:
  - src: /apps/localspend/screenshot-1.png
    alt: "Home: this month's spend against the budget and where it went by category"
  - src: /apps/localspend/screenshot-2.png
    alt: "The monthly ledger, every transaction grouped by day"
  - src: /apps/localspend/screenshot-3.png
    alt: "Insights: month vs last month, daily spending chart and category changes"
  - src: /apps/localspend/screenshot-4.png
    alt: "Six-month trend of spending and income, and detected recurring payments"
  - src: /apps/localspend/screenshot-5.png
    alt: "A transaction with its category, details and the original bank message"
  - src: /apps/localspend/screenshot-6.png
    alt: "Home in dark mode"
techStack: [Flutter, Riverpod, Drift (SQLite), On-device LLM (Qwen 2.5), fl_chart]
supportEmail: hello@sagarchandagarwal.com
faq:
  - q: "Does LocalSpend connect to my bank?"
    a: "No — and that's the point. It never asks for bank credentials or uses an account aggregator. Instead it reads the transaction alerts your bank already sends you (SMS on Android, Gmail alerts on both platforms) and parses them entirely on your device."
  - q: "How does it work on iPhone?"
    a: "iOS doesn't let apps read SMS, so on iPhone LocalSpend imports from your Gmail bank alerts (read-only access, parsed on-device) plus manual entry. On Android you get SMS auto-import too."
  - q: "Is the AI assistant private?"
    a: "Yes. The 'Ask' feature runs a small language model entirely on your phone. It's an optional one-time download (~1.5 GB); after that, questions like 'what did I spend on food this month?' are answered offline. Your transactions never leave the device."
  - q: "Which banks and currencies are supported?"
    a: "LocalSpend is built for India: it understands alerts from major banks (HDFC, SBI, ICICI, Axis, Kotak and more) and UPI apps (GPay, PhonePe, Paytm, BHIM), and tracks amounts in ₹ INR."
  - q: "Can I export or back up my data?"
    a: "Yes — export everything to CSV, or back up to a file you save anywhere (Drive, Files, email) and restore it on any phone. Automatic backups can also run daily, weekly or monthly on your device."
  - q: "Is it free?"
    a: "Completely free. No ads, no in-app purchases, no subscription."
changelog:
  - version: "2.8.0"
    date: "2026-10-25"
    notes:
      - "Fresh light design, with a full monthly ledger grouped by day"
      - "Insights follow the month you pick: daily chart, six-month trend, category changes"
      - "Search, edit, delete and re-categorise any transaction"
      - "Duplicates and card-bill payments no longer inflate totals"
      - "Backups keep income, duplicates and exclusions exactly"
      - "Better merchant detection for HDFC UPI alerts; app lock works with PIN-only phones"
  - version: "2.7.1"
    date: "2026-08-09"
    notes:
      - "Fixed AI model download issues"
  - version: "2.7.0"
    date: "2026-08-06"
    notes:
      - "Improved SMS transaction parsing"
  - version: "2.5.0"
    date: "2026-08-01"
    notes:
      - "Redesigned minimal UI"
      - "Smarter duplicate detection across SMS and Gmail"
      - "Gmail HTML bank-alert parsing"
      - "Fixed credits being counted as spend"
  - version: "2.4.1"
    date: "2026-04-17"
    notes:
      - "Recurring payment detection and subscription tracking"
      - "Encrypted backups and CSV export improvements"
---

## What it is

LocalSpend is a privacy-first expense tracker built for India. Instead of asking you to type in every chai and auto ride, it builds your ledger automatically — parsing the transaction SMS and Gmail alerts your bank already sends, entirely on your device. No bank logins, no server, no account, no analytics.

It categorises transactions against 670+ known merchants, watches your monthly budget, detects recurring payments and subscriptions, and can even answer questions about your spending with an AI that runs completely offline.

## How it works

1. **Connect your alerts.** Grant SMS access on Android and/or connect Gmail (read-only) on either platform. LocalSpend recognises alerts from major Indian banks, cards, and UPI apps.
2. **Watch the ledger build itself.** Transactions appear with merchant, amount, and category — auto-matched against a built-in merchant database. Correct one once and the rule sticks.
3. **Stay on budget.** Set a monthly limit and see exactly what's left per day. Insights compare the month with the one before, show your daily rhythm, top merchants and a six-month trend.
4. **Catch the leaks.** Recurring payments are detected and predicted; subscriptions (Netflix, Spotify, Prime…) are spotted from billing emails and listed with renewal dates.
5. **Ask anything.** Optionally download the on-device AI model once, then ask natural questions — "how much on food this month?" — answered offline, from your data only.
6. **Keep it yours.** App lock, CSV export, and backups you can save anywhere and restore. Everything lives in a local database on your phone — clear it all from Settings any time.
