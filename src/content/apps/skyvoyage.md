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
    alt: "Steering past kites and seagulls on the Sunset Coast"
  - src: /apps/skyvoyage/screenshot-ios-3.jpg
    alt: "Dodging falling embers over Volcano Ridge"
  - src: /apps/skyvoyage/screenshot-ios-4.jpg
    alt: "Customising your balloon in the Hangar"
  - src: /apps/skyvoyage/screenshot-ios-5.jpg
    alt: "World Map with all nine zones and the stars earned in each"
techStack: [Swift, SwiftUI, SwiftUI Canvas rendering, GameKit (Game Center), Kotlin (Android), Custom 2D engine]
supportEmail: hello@sagarchandagarwal.com
faq:
  - q: "Is Sky Voyage free? Are there ads?"
    a: "Completely free — no ads, no in-app purchases, no trackers. Every balloon, basket, and power-up is earned with coins and gems you collect in-game."
  - q: "Is it on iPhone?"
    a: "Yes — Sky Voyage for iPhone is coming to the App Store soon. The Android version is in closed beta and isn't publicly available right now."
  - q: "Do I need an internet connection to play?"
    a: "No. The whole game runs offline. Game Center and iCloud on iPhone, and Google Play Games on Android, are optional: they power leaderboards, achievements and cloud saves."
  - q: "Will my progress carry over to a new iPhone?"
    a: "Yes. If you're signed in to iCloud, your levels, coins, unlocks, stars and achievements sync through your own iCloud account and show up when you install Sky Voyage on another iPhone."
  - q: "What are daily missions?"
    a: "Every day brings three new missions, like flying a set distance or grabbing power-ups, scaled to how far you usually fly. Each one pays gems and coins, and finishing all three adds a bonus. Find them on the main menu."
  - q: "Are there leaderboards?"
    a: "Yes. On iPhone, Sky Voyage uses Game Center: global leaderboards for farthest flight and high score, and 15 achievements. Open them from Ranks in the game."
  - q: "How do I steer the balloon?"
    a: "Drag anywhere on the screen and the balloon glides toward your finger. Drag up to fire the burner and climb, drag down to vent and drop, or let go to drift slowly down."
  - q: "Why does my fuel run out?"
    a: "Only the burner uses fuel — climbing and holding your height. Sliding sideways or down is free. Grab Fuel Tanks to refill; one always appears when you're running low."
  - q: "How do I avoid lightning?"
    a: "Lightning always warns you first: a flickering yellow line and a ⚡ badge mark exactly where it will strike, about a second before it hits. Slide sideways out of the line."
  - q: "How long do power-ups last?"
    a: "Each active power-up shows a countdown ring above your fuel gauge: Shield 12 s (or until it blocks a hit), Coin Magnet 8 s, Speed Boost 5 s and 2× Score 15 s. The ring blinks in the last two seconds."
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
      - "Nine biomes, including the new Sunset Coast, Volcano Ridge and Aurora Heights"
      - "Game Center leaderboards and 15 achievements"
      - "Countdown timers for every active power-up"
      - "Daily missions with gem rewards"
      - "Original music for every sky, plus new sound effects"
      - "Lightning that warns you before it strikes, and a flag marking your personal best"
      - "iCloud sync, so your progress follows you to a new iPhone"
      - "Hangar with envelopes, baskets, crew and flags; Shop boosts you can use mid-flight"
      - "Ranks screen with 15 achievements, levels and gem rewards"
  - version: "1.0.0 Android (closed beta)"
    date: "2026-07-28"
    notes:
      - "Six procedurally generated biomes, from Peaceful Meadows to the Sky Kingdom"
      - "Hangar customisation: envelopes, baskets, crew and flags"
      - "Google Play Games leaderboards, achievements and cloud saves"
      - "Gyroscope tilt steering and graphics quality settings"
---

## What it is

Sky Voyage is a calm arcade endless flyer. Pilot a hot air balloon up through nine biomes — meadows, the sunset coast, mountain passes, storm clouds, desert dunes, volcano ridge, arctic tundra, aurora heights and the Sky Kingdom — dodging birds, kites, lightning, embers and rival balloons while you watch your burner fuel. (The Android beta has six biomes.)

It's built the old-school way, on hand-written 2D engines: native Swift and SwiftUI on iPhone, Kotlin on Android. Tiny downloads and zero ads, purchases or trackers. The iPhone version is coming soon to the App Store; the Android version is in closed beta and not publicly available right now.

## How it works

1. **Fly.** Drag anywhere and the balloon glides toward your finger. Drag up to fire the burner and climb, drag down to vent, or let go to drift.
2. **Mind the burner.** Only climbing burns fuel. Collect Fuel Tanks to keep going, and if the basket touches the ground you get a moment to lift off.
3. **Survive the biomes.** Each zone brings new hazards — kites, hail, nets, embers, ice crystals, lightning (always telegraphed) — and its own wind. Fly through a zone to unlock the next one as a starting point on the World Map.
4. **Grab power-ups.** Fuel Tanks, Shield Bubbles, Speed Boosts, Coin Magnets and 2× Score keep a good run alive — each shows a countdown — and the ⚡ button slows time when it gets tight.
5. **Make it yours.** Spend the coins and gems you earn in the Hangar on envelopes, baskets, crew and flags — some with fuel or coin bonuses.
6. **Come back daily.** Three new missions each day pay out bonus gems, and a flag in the sky shows the personal best you're chasing.
7. **Compete.** Track your levels and achievements in Ranks, and compare flights on Game Center leaderboards.
