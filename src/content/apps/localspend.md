---
name: "LocalSpend"
tagline: "Your spending, tracked automatically — and privately."
platforms: [ios, android]
order: 4
icon: /apps/localspend/icon.png
accent: "#8B5CF6"
screenshots:
  - src: /apps/localspend/screenshot-1.png
    alt: "Every rupee, sorted: the month's spend against the budget, with the ledger below"
  - src: /apps/localspend/screenshot-2.png
    alt: "See where it all went: Insights with budget health and a daily spending chart"
  - src: /apps/localspend/screenshot-3.png
    alt: "Private by design: bank alerts are filed, everything else is skipped, with no account and no server"
  - src: /apps/localspend/screenshot-4.png
    alt: "Every payment, your way: a transaction with its category, split bill and receipt options"
  - src: /apps/localspend/screenshot-5.png
    alt: "Cash spend? Two taps: adding an expense by hand"
  - src: /apps/localspend/screenshot-6.png
    alt: "Lovely after dark: the ledger in dark mode"
techStack: [Flutter, Riverpod, Drift (SQLite), On-device LLM (Qwen3), fl_chart]
supportEmail: hello@sagarchandagarwal.com
faq:
  - q: "Does LocalSpend connect to my bank?"
    a: "No — and that's the point. It never asks for bank credentials or uses an account aggregator. Instead it reads the transaction alerts your bank already sends you (SMS on Android, bank alert emails on both platforms) and parses them entirely on your device."
  - q: "How does it work on iPhone?"
    a: "iOS doesn't let apps read SMS, so on iPhone and iPad LocalSpend reads your bank alert emails instead: Gmail with read-only access, or iCloud, Yahoo, Zoho and other mailboxes with an app password. You can also share an alert from Messages or Mail, set up a Shortcuts automation, or add a spend by hand. On Android you get SMS auto-import too."
  - q: "Is the AI assistant private?"
    a: "Yes. The 'Ask' feature runs a small language model entirely on your phone. It's off by default and an optional one-time download (about 610 MB); after that, questions like 'what did I spend on food this month?' are answered offline. Your transactions never leave the device."
  - q: "Which banks and currencies are supported?"
    a: "LocalSpend is built for India: it understands alerts from major banks (HDFC, SBI, ICICI, Axis, Kotak and more) and UPI apps (GPay, PhonePe, Paytm, BHIM), and tracks amounts in ₹ INR."
  - q: "Can I export or back up my data?"
    a: "Yes — export everything to CSV, or back up to a file you save anywhere (Drive, Files, email) and restore it on any phone. Automatic backups run on your device: daily, weekly or monthly on Android, and once a day when you open the app on iPhone."
  - q: "Is it free?"
    a: "Completely free. No ads, no in-app purchases, no subscription."
changelog:
  - version: "2.9.0"
    date: "2026-11-13"
    notes:
      - "New violet look, and a quicker start: four screens, with your own numbers on the last one"
      - "Bill and budget alerts you can switch on in Settings"
      - "More bank alerts recognised, and fewer false ones from shops and friends"
      - "Other mailboxes (iCloud, Yahoo, Zoho), receipt photos and split bills"
      - "Exports leave out hidden duplicates; iPad sharing fixed"
      - "Clear all data now removes every trace, including the Ask model"
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

LocalSpend is a privacy-first expense tracker built for India. Instead of asking you to type in every chai and auto ride, it builds your ledger automatically — parsing the transaction SMS and email alerts your bank already sends, entirely on your device. No bank logins, no server, no account, no analytics.

It categorises transactions against 670+ known merchants, watches your monthly budget, detects recurring payments and subscriptions, and can even answer questions about your spending with an AI that runs completely offline.

## How it works

1. **Connect your alerts.** Grant SMS access on Android, or connect the inbox your bank writes to: Gmail (read-only) or another mailbox, on either platform. LocalSpend recognises alerts from major Indian banks, cards, and UPI apps.
2. **Watch the ledger build itself.** Transactions appear with merchant, amount, and category — auto-matched against a built-in merchant database. Correct one once and the rule sticks.
3. **Stay on budget.** Set a monthly limit and see exactly what's left per day. Insights compare the month with the one before, show your daily rhythm, top merchants and a six-month trend.
4. **Catch the leaks.** Recurring payments are detected and predicted; subscriptions (Netflix, Spotify, Prime…) are spotted from billing emails and listed with renewal dates.
5. **Ask anything.** Optionally download the on-device AI model once, then ask natural questions — "how much on food this month?" — answered offline, from your data only.
6. **Keep it yours.** App lock, receipt photos, CSV export, and backups you can save anywhere and restore. Everything lives in a local database on your phone — clear it all from Settings any time.
