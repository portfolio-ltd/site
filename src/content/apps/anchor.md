---
name: "Anchor"
tagline: "Focus without the wall."
platforms: [ios, mac]
order: 3
icon: /apps/anchor/icon.png
accent: "#2C6B4A"
screenshots:
  - src: /apps/anchor/screenshot-1.png
    alt: "Today dashboard with focus ring"
  - src: /apps/anchor/screenshot-2.png
    alt: "Tasks list for your focus session"
  - src: /apps/anchor/screenshot-3.png
    alt: "Weekly focus statistics"
  - src: /apps/anchor/screenshot-4.png
    alt: "Settings with iCloud backup and classification rules"
techStack: [Swift, SwiftUI, SwiftData, Screen Time API, DeviceActivity, AppKit, WidgetKit]
supportEmail: hello@sagarchandagarwal.com
faq:
  - q: "Does Anchor block apps on my Mac?"
    a: "Deliberately not. On the Mac, Anchor observes what you're working on and shows a gentle nudge after 30 seconds of drifting — with a one-click 'This is work' override that it remembers. Hard walls invite workarounds; nudges build awareness."
  - q: "What about on iPhone?"
    a: "iOS is where Anchor uses real blocking: Apple's Screen Time shields cover the apps and sites you pick, with a 'Back to Focus' screen and an optional 5-minute pass when you genuinely need through."
  - q: "Can Anchor see what I'm reading or typing?"
    a: "No. On Mac it reads only the frontmost app name, window title, and active browser tab URL — never page content, messages, or documents. Nothing is sent to any server; there is no server."
  - q: "Does it count time when I step away?"
    a: "No. Anchor detects when you're away from the keyboard (2+ minutes idle) and stops counting, so your stats reflect real work."
  - q: "Is Anchor free?"
    a: "The beta is completely free — no payment info, no trial countdown. Pricing after beta isn't final; beta testers will be looked after."
  - q: "Is it a Pomodoro timer?"
    a: "No cycles or forced breaks. You start a session manually or on a weekly schedule, and Anchor keeps you honest until it ends."
changelog:
  - version: "1.0.0 beta (build 28)"
    date: "2026-08-13"
    notes:
      - "Widget fixes on Mac and general bug fixes"
  - version: "1.0.0 beta"
    date: "2026-07-29"
    notes:
      - "First TestFlight beta: Mac menu bar app with activity awareness and nudges"
      - "iOS app with Screen Time shields and drift tracking"
      - "Scheduled focus sessions, adaptive work/distraction rules, weekly stats"
---

## What it is

Anchor is a focus companion for Mac and iPhone built on a simple belief: a hard wall invites workarounds, but a well-timed nudge builds awareness. On the Mac it lives in your menu bar, understands what you're working on, and taps you on the shoulder when you drift. On iPhone — where willpower meets the infinite scroll — it uses Apple's Screen Time shields for real blocking.

No account, no server, zero third-party SDKs. Your activity never leaves your devices.

## How it works

1. **Tell it who you are.** A two-minute onboarding — pick a persona (founder, student, freelancer…), your goals, and your distraction categories — seeds ~50 smart classification rules.
2. **Start a session.** Manually from the menu bar, or on a weekly schedule (deep work every weekday 9–11, say).
3. **Get nudged, not punished.** Drift to YouTube for 30 seconds on the Mac and a small panel offers: Back to focus, 5-min break, or "This is work — allow." Anchor learns from every override.
4. **Stay shielded on iPhone.** Blocked apps show a full-screen "Looks like you drifted" shield; a deliberate 5-minute pass is there when you truly need it.
5. **See the truth.** Focus ring against your daily goal, focus score, drift minutes, streaks, and a 7-day chart — with away-from-keyboard time automatically excluded.
