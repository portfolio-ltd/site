---
name: "Streaks: Habit Tracker"
tagline: "Build habits. Track streaks."
platforms: [ios]
order: 1
icon: /apps/streaks/icon.png
accent: "#6C63FF"
storeLinks:
  appStore: https://apps.apple.com/us/app/streaks-track-reflect-improve/id6761472324
screenshots:
  - src: /apps/streaks/screenshot-1.png
    alt: "Today view with one-tap habit logging"
  - src: /apps/streaks/screenshot-2.png
    alt: "Habit detail with calendar heatmap"
  - src: /apps/streaks/screenshot-3.png
    alt: "Stats view with streak insights"
techStack: [Swift, SwiftUI, SwiftData, WidgetKit, StoreKit 2, AppIntents]
supportEmail: hello@sagarchandagarwal.com
faq:
  - q: "Do I need an account?"
    a: "No. There's no sign-up, no login, and no server. Your habits live on your device, with an optional iCloud backup to your own Apple ID."
  - q: "Is Streaks free?"
    a: "Yes — track up to 5 habits free, forever. A one-time $4.99 Premium unlock raises the limit to 21 habits and adds advanced insights. No subscription, ever."
  - q: "What happens on days a habit isn't scheduled?"
    a: "Nothing bad. Each daily habit has its own active days, and days you haven't scheduled neither count toward nor break your streak."
  - q: "Will I get a warning before I lose a streak?"
    a: "Yes — if a habit is still unfinished in the evening, Streaks sends a 'Streak in Danger' reminder at 8 PM, and you can mark it done right from the notification."
  - q: "Is my data backed up?"
    a: "Streaks keeps an automatic iCloud backup plus rotating local backups, and you can export or import your full history as a file anytime."
  - q: "Does it track me?"
    a: "No. Streaks contains zero third-party SDKs, zero analytics, and makes zero network requests. It can't phone home — there's no home to phone."
changelog:
  - version: "3.3.3"
    date: "2026-08-11"
    notes:
      - "Stats are now preserved for archived habits"
      - "UI polish and bug fixes"
  - version: "3.3.2"
    date: "2026-07-07"
    notes:
      - "Weekly and monthly habit frequencies"
      - "Refinements to streak calculations across schedules"
  - version: "3.3.1"
    date: "2026-06-25"
    notes:
      - "One-time Premium unlock (no subscription)"
      - "Redesigned iOS interface with warm light theme"
      - "Free tier raised to 5 habits"
  - version: "3.0"
    date: "2026-04-19"
    notes:
      - "Home screen widget with streak heatmap"
      - "Per-habit reminders with Mark Done action"
---

## What it is

Streaks is a privacy-first habit tracker for iPhone and iPad built on one idea: don't break the chain. Add the habits you care about, tap them done each day, and watch your streaks — and badge tiers from 🌱 Seedling to 💎 Diamond — grow.

There's no account, no subscription, and no tracking. The app is built entirely with Apple's frameworks, makes zero network requests, and keeps your data on your device with optional iCloud backup.

## How it works

1. **Create a habit.** Pick a name, emoji, and color, then choose a schedule — daily (with your own active days), weekly, or monthly.
2. **Tap it done.** One-tap logging with haptics from the Today view, the habit widget, or straight from a reminder notification.
3. **Watch the chain grow.** Calendar heatmaps, streak badges, and a shareable stats view show your consistency over weeks and months.
4. **Never lose a streak by accident.** Per-habit reminders plus an 8 PM "Streak in Danger" alert catch the days you almost forgot.
5. **Keep your history.** Finished with a habit? Archive it instead of deleting — its stats and history stay intact.
