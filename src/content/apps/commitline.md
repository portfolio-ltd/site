---
name: "Commitline"
tagline: "A small doodle that sends your distractions away."
platforms: [mac, web]
order: 3
icon: /apps/commitline/icon.png
accent: "#6B38FF"
screenshots:
  - src: /apps/commitline/mac-1.png
    alt: "The doodle appears over a distracting app with a countdown: Not now. Hiding TV in 3"
    kind: desktop
  - src: /apps/commitline/mac-2.png
    alt: "The menu-bar popover: a running session, the list of apps to hide and the warning time"
    kind: desktop
  - src: /apps/commitline/mac-3.png
    alt: "The browser extension covering a distracting site before closing the tab"
    kind: desktop
  - src: /apps/commitline/mac-4.png
    alt: "No account, no tracking, no Accessibility or screen recording access"
    kind: desktop
techStack: [Swift, SwiftUI, AppKit, WebExtensions (Manifest V3), Safari Web Extension]
supportEmail: hello@sagarchandagarwal.com
faq:
  - q: "What does the doodle actually do?"
    a: "While a session is running, it watches for the apps and sites on your list. Open one and the doodle pops up, counts down a few seconds, then hides the app on your Mac or closes the tab in your browser. Leave on your own before the countdown ends and it lets you off."
  - q: "Why does it hide Mac apps instead of quitting them?"
    a: "Apps from the Mac App Store are not allowed to quit other apps, so the doodle hides them instead. Nothing you were doing in that app is lost. If you open it again during the session, the doodle comes back."
  - q: "Which browsers does it work in?"
    a: "Safari (the extension comes inside the Mac app), plus Chrome, Edge, Brave and Firefox. In the browser the doodle closes the tab, not just hides it."
  - q: "Do the Mac app and the browser extension share one switch?"
    a: "Not yet. Each has its own list and its own start and stop, so you start a session in the one you want. You can use either on its own."
  - q: "What permissions does it need?"
    a: "On the Mac, none: no Accessibility, no screen recording, no Automation. It only learns which app has come to the front. The browser extension checks the address of the page you open against your list and never reads what is on the page."
  - q: "Can I get around it?"
    a: "Yes. You can stop the session from the menu bar or the extension at any time. Commitline is a nudge that makes drifting take effort, not a lock."
  - q: "What happened to checkpoints, detour passes and the iPhone app?"
    a: "They're gone. Commitline was rebuilt from scratch to do one thing with almost no setup. There is no iPhone version, because iOS does not let one app hide or close another."
  - q: "Is Commitline free?"
    a: "The beta is completely free: no payment info, no trial countdown. Pricing after beta isn't final; beta testers will be looked after."
changelog:
  - version: "1.0.0 (new Commitline)"
    date: "2026-11-15"
    notes:
      - "Rebuilt from scratch around one idea: a doodle that sends distractions away"
      - "Mac: pick the apps to hide, start a 25 or 50 minute session, or run until you stop"
      - "Browser extension for Safari, Chrome, Edge, Brave and Firefox that closes distracting tabs"
      - "No permissions to grant on the Mac, and nothing stored outside your device"
      - "Removed: checkpoints, detour passes, the parking lot, insights and the iPhone app"
  - version: "1.0.0 (build 37)"
    date: "2026-10-25"
    notes:
      - "Anchor is now Commitline, rebuilt around finish-to-unlock"
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

Commitline is a small doodle that lives in your Mac's menu bar and in your browser. Tell it which apps and sites pull you away, start a session, and get on with your work. The moment you open one of them, the doodle shows up, counts down, and sends it away.

There is nothing to plan, log or review. No account, no server, no third-party SDKs.

## How it works

1. **Make your list.** On the Mac, add the apps that distract you from the menu bar. In the browser, the extension starts with a short list of the usual suspects and you can add any site in one click.
2. **Start a session.** 25 minutes, 50 minutes, or until you stop it.
3. **Drift, and the doodle steps in.** Open something on your list and the doodle appears with a short countdown: 3, 5 or 10 seconds, your choice.
4. **Poof.** On the Mac the app is hidden. In the browser the tab is closed. Switch away yourself before the countdown ends and the doodle says "Good call" and leaves.

The Mac app and the browser extension work independently, so you can use one or both.
