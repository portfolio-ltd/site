---
name: "Sky Voyage"
tagline: "A hot air balloon arcade adventure."
platforms: [ios, android]
shadedPlatforms: [android]
order: 5
icon: /apps/skyvoyage/icon.png
accent: "#8b5cf6"
screenshots:
  - src: /apps/skyvoyage/screenshot-ios-1.jpg
    alt: "Main menu with your balloon ready for take-off"
  - src: /apps/skyvoyage/screenshot-ios-2.jpg
    alt: "Steering through the Mountain Passes past birds and a wind turbine"
  - src: /apps/skyvoyage/screenshot-ios-3.jpg
    alt: "Dodging lightning and hail in the Storm Clouds"
  - src: /apps/skyvoyage/screenshot-ios-4.jpg
    alt: "Customising your balloon in the Hangar"
  - src: /apps/skyvoyage/screenshot-ios-5.jpg
    alt: "World Map with stars earned in each zone"
techStack: [Swift, SwiftUI, SwiftUI Canvas rendering, Kotlin (Android), Custom 2D engine]
supportEmail: hello@sagarchandagarwal.com
faq:
  - q: "Is Sky Voyage free? Are there ads?"
    a: "Completely free — no ads, no in-app purchases, no trackers. Every balloon, basket, and power-up is earned with coins and gems you collect in-game."
  - q: "Is it on iPhone?"
    a: "Yes — Sky Voyage for iPhone is coming to the App Store soon. The Android version is in closed beta and isn't publicly available right now."
  - q: "Do I need an internet connection to play?"
    a: "No. The whole game runs offline. On iPhone there's no sign-in and no network access at all. On Android, signing in with Google Play Games is optional and only powers leaderboards and cloud saves."
  - q: "How do I steer the balloon?"
    a: "Drag anywhere on the screen and the balloon glides toward your finger. Drag up to fire the burner and climb, drag down to vent and drop, or let go to drift slowly down."
  - q: "Why does my fuel run out?"
    a: "Only the burner uses fuel — climbing and holding your height. Sliding sideways or down is free. Grab Fuel Tanks to refill; one always appears when you're running low."
  - q: "What happens if I touch the ground?"
    a: "You get a moment to lift off. The screen glows red and warns you — drag up quickly to save the run."
  - q: "How big is the download?"
    a: "Tiny. The iPhone version is a couple of megabytes and the Android version about 3.5 MB — both run on a hand-written 2D engine, with no bulky game framework inside."
changelog:
  - version: "1.0.0 (iOS)"
    date: "2026-10-25"
    notes:
      - "First iPhone release, built natively in Swift and SwiftUI"
      - "Smooth, forgiving balloon physics: burner heat, fuel used only for climbing, gentle drift"
      - "Six biomes from Peaceful Meadows to the Sky Kingdom, with a fade between zones"
      - "Hangar with envelopes, baskets, crew and flags; Shop boosts you can use mid-flight"
      - "Ranks screen with 12 achievements, levels and gem rewards"
  - version: "1.0.0 Android (closed beta)"
    date: "2026-07-28"
    notes:
      - "Six procedurally generated biomes, from Peaceful Meadows to the Sky Kingdom"
      - "Hangar customisation: envelopes, baskets, crew and flags"
      - "Google Play Games leaderboards, achievements and cloud saves"
      - "Gyroscope tilt steering and graphics quality settings"
---

## What it is

Sky Voyage is a calm arcade endless flyer. Pilot a hot air balloon up through six biomes — meadows, mountain passes, storm clouds, desert dunes, arctic tundra and the Sky Kingdom — dodging birds, lightning, wind turbines and rival balloons while you watch your burner fuel.

It's built the old-school way, on hand-written 2D engines: native Swift and SwiftUI on iPhone, Kotlin on Android. Tiny downloads and zero ads, purchases or trackers. The iPhone version is coming soon to the App Store; the Android version is in closed beta and not publicly available right now.

## How it works

1. **Fly.** Drag anywhere and the balloon glides toward your finger. Drag up to fire the burner and climb, drag down to vent, or let go to drift.
2. **Mind the burner.** Only climbing burns fuel. Collect Fuel Tanks to keep going, and if the basket touches the ground you get a moment to lift off.
3. **Survive the biomes.** Each zone brings new hazards — hail, nets, spike clouds, lightning — and its own wind. Earn stars to unlock zones on the World Map.
4. **Grab power-ups.** Fuel Tanks, Shield Bubbles, Speed Boosts, Coin Magnets and 2× Score keep a good run alive, and the ⚡ button slows time when it gets tight.
5. **Make it yours.** Spend the coins and gems you earn in the Hangar on envelopes, baskets, crew and flags — some with fuel or coin bonuses — and track your levels and achievements in Ranks.
