---
name: "Commitline"
tagline: "Earn your apps back by finishing."
platforms: [ios, mac]
order: 3
icon: /apps/commitline/icon.png
accent: "#4D67FF"
screenshots:
  - src: /apps/commitline/screenshot-1.png
    alt: "Onboarding: draw a finish line, finish to unlock, decide your passes, park the pull"
  - src: /apps/commitline/screenshot-2.png
    alt: "A finish line in progress with checkpoints, an if-then plan and detour passes"
  - src: /apps/commitline/screenshot-3.png
    alt: "Today's line, ready-to-go finish lines and the parking lot"
  - src: /apps/commitline/screenshot-4.png
    alt: "Your line: a 7-day record of kept and partial commitments with coaching"
techStack: [Swift, SwiftUI, SwiftData, Screen Time API, DeviceActivity, App Intents, WidgetKit, AppKit]
supportEmail: hello@sagarchandagarwal.com
faq:
  - q: "How is this different from an app blocker?"
    a: "Most blockers make you wait out a timer. In Commitline your chosen apps stay paused until you tick the last checkpoint of what you're finishing. Finish early, get them back early. The time ceiling only stops a session running forever."
  - q: "What are detour passes?"
    a: "Before you start, you decide how many times (0–3) you're allowed to open a paused app. The pause screen shows your outcome, your next checkpoint, your own if-then plan and the passes left. At zero, the only way out is the finish line."
  - q: "What happens to thoughts that pop up mid-session?"
    a: "Park them in one tap instead of chasing them. At the end-of-session review you can turn the useful ones into your next finish line; the rest wait in your parking lot."
  - q: "Does Commitline block apps on my Mac?"
    a: "No. On the Mac it lives in the menu bar, keeps your next checkpoint in view and shows a small prompt when you drift, offering the way back or one of your passes. Real blocking happens on iPhone through Apple's Screen Time."
  - q: "Can Commitline see what I'm reading or typing?"
    a: "No. On iPhone, Apple's Screen Time hides even the names of the apps you pick. On Mac it reads only the frontmost app, window title and active browser tab URL, never page content, messages or documents. There is no server and nothing leaves your device."
  - q: "Does it need Screen Time permission?"
    a: "Only for pausing apps. Checkpoints, passes, the parking lot, reviews and insights all work if you skip it."
  - q: "Is Commitline free?"
    a: "The beta is completely free: no payment info, no trial countdown. Pricing after beta isn't final; beta testers will be looked after."
changelog:
  - version: "1.0.0 (build 37)"
    date: "2026-10-25"
    notes:
      - "Anchor is now Commitline, rebuilt around finish-to-unlock"
      - "Checkpoints: paused apps return the moment you tick the last one"
      - "Detour passes chosen up front, shown on the pause screen"
      - "If-then plans, a parking lot for stray thoughts, and an end-of-session review"
      - "Your line: 7-day record, streak and stall-point coaching"
      - "Interactive Home Screen widget to tick checkpoints"
  - version: "1.0.0 beta (build 28)"
    date: "2026-08-13"
    notes:
      - "Widget fixes on Mac and general bug fixes (as Anchor)"
  - version: "1.0.0 beta"
    date: "2026-07-29"
    notes:
      - "First TestFlight beta, released as Anchor"
---

## What it is

Commitline is a commitment app for iPhone and Mac built on one idea: you should earn your apps back by finishing, not by waiting out a timer. Name what you're finishing, break it into a few checkpoints, and the apps you chose stay paused until you tick the last one.

No account, no server, zero third-party SDKs. Everything you write and every choice you make stays on your device.

## How it works

1. **Draw a finish line.** Name the outcome and split it into 1–5 checkpoints. Scaffolds for writing, deciding, replying, studying and making get you started in seconds. The last checkpoint is the finish line.
2. **Decide your passes up front.** Pick 0–3 detour passes and an if-then plan ("If I get pulled away, I'll park the reply and send it after the finish line") while you're thinking clearly.
3. **Finish to unlock.** The apps and sites you chose stay paused. Open one and the pause screen shows your outcome, your next checkpoint, your plan and your passes left. Tick the last checkpoint and they're back immediately.
4. **Park the pull.** When a stray thought hits, park it in one tap. Tick checkpoints from the Home Screen widget without opening the app.
5. **Close the loop.** A short review pre-fills how far you got from the checkpoints you ticked, turns parked thoughts into future finish lines, and carries unfinished checkpoints forward.
6. **See your line.** Each finish line becomes a point on the day's line: kept, partial or stopped. Insights show where you usually stall, how much time you have to spare and how many passes you held, calculated on your device from choices you actually made.
