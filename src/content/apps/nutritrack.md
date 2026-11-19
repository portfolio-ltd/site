---
name: "NutriTrack"
tagline: "Just tell it what you ate."
platforms: [ios]
order: 2
icon: /apps/nutritrack/icon.png
accent: "#6E4BF5"
storeLinks:
  appStore: https://apps.apple.com/us/app/nutritrack-health-hero/id6795206336
screenshots:
  - src: /apps/nutritrack/screenshot-1.jpg
    alt: "Today: typing '2 roti, dal tadka and a bowl of dahi' and seeing it read into items"
  - src: /apps/nutritrack/screenshot-2.jpg
    alt: "Importing a meal shared from ChatGPT, with each item's numbers filled in"
  - src: /apps/nutritrack/screenshot-3.jpg
    alt: "Searching 'dal' across 480+ Indian and Asian dishes"
  - src: /apps/nutritrack/screenshot-4.jpg
    alt: "Today's supplements checklist"
  - src: /apps/nutritrack/screenshot-5.jpg
    alt: "Progress: weekly calories, macro averages, streak and supplements taken"
  - src: /apps/nutritrack/screenshot-6.jpg
    alt: "Your daily plan after one setup screen"
techStack: [Swift, SwiftUI, SwiftData, HealthKit, AVFoundation, WidgetKit, Swift Charts]
supportEmail: hello@sagarchandagarwal.com
faq:
  - q: "How do I log a meal?"
    a: "Just type it. Write '2 roti, dal, curd' in the box on Today and NutriTrack reads the dishes and amounts as you type; one tap logs them. You can also search, scan a barcode, or paste a meal from ChatGPT into the same box."
  - q: "What makes NutriTrack different from other calorie counters?"
    a: "It's built for the way India and Asia actually eat, and it stays out of your way. Over 480 dishes work offline with the names you use (search 'dahi', 'chawal', 'bhindi' or 'kway teow'), there's no account to create, and the whole app is three tabs: Today, Add and Progress."
  - q: "Can I bring in a meal I worked out with ChatGPT?"
    a: "Yes. Copy the reply and open NutriTrack, which offers to import it, or select the text and choose Share → NutriTrack. It reads the items and their calories and macros, shows each one next to the original line so you can check it, and adds them to your day. This happens on your phone; NutriTrack doesn't use an AI service."
  - q: "What kind of text can it import?"
    a: "One item per line with numbers ('Dal tadka — 210 kcal, 10g protein'), a recipe with a nutrition block, or just names ('2 roti, dal, curd'), which use NutriTrack's own values and are marked as estimates. You can edit any number before saving."
  - q: "Do I need an account?"
    a: "No. From version 1.2 there is no sign-in at all. Answer one setup screen and you're tracking. Everything stays on your device, and Profile → Erase all data removes it."
  - q: "How does NutriTrack set my calorie target?"
    a: "One setup screen asks your goal, activity, age, height and weight, then works out daily calories, protein, carbs and fat using the Mifflin-St Jeor equation. It's a starting point you can adjust at any time."
  - q: "Can I track supplements?"
    a: "Yes. Add what you take from a reference library of 37 common supplements (vitamin D, B12, iron, whey, creatine, isabgol, ashwagandha and more) or create your own, tick them off each day, and set optional reminders. Protein scoops count toward your macros automatically."
  - q: "Do I have to weigh everything in grams?"
    a: "No. Foods come with household measures (a bowl of dal, a piece of roti, a glass of chaas), so one tap logs a realistic serving. Grams are there when you want precision."
  - q: "Does it respect my diet?"
    a: "Yes. Choose from ten styles, including vegetarian, eggetarian, vegan, Jain (no onion, garlic or root vegetables), halal, kosher, gluten-free and dairy-free, and conflicting foods stay out of your suggestions and searches."
  - q: "What about water, sleep and Apple Health?"
    a: "Water and sleep tracking are optional and switched off by default to keep Today simple; turn them on in Profile. With your permission NutriTrack writes meals and water to Apple Health and reads steps, weight and sleep."
  - q: "Is it private? Is it free?"
    a: "Your diary, plan and supplements live entirely on your device. There's no server, no ads and no analytics. NutriTrack is completely free: no subscription and no locked features."
changelog:
  - version: "1.2"
    date: "2026-11-19"
    notes:
      - "Just type it: write '2 roti, dal, curd' on Today and it's logged"
      - "No account needed: one setup screen, then start tracking"
      - "Import from ChatGPT: share or copy a meal or recipe and NutriTrack fills in the items and numbers"
      - "Supplements: daily checklist, reminders and a 37-item reference library"
      - "Three simple tabs: Today, Add and Progress"
      - "480+ offline Indian and Asian dishes, plus country-first product search"
      - "Now on iPad, with landscape and Split View"
      - "New design, a new icon with Bite the mascot, readable light mode, and many fixes"
  - version: "1.0"
    date: "2026-08-14"
    notes:
      - "Fiber tracking and widget fixes"
      - "USDA FoodData Central integration and light mode"
      - "Indian-first food database with regional-language aliases"
      - "Home screen widgets, barcode scanning, missions and streaks"
---

## What it is

Just tell NutriTrack what you ate. Type "2 roti, dal, curd" and it's logged, with calories and macros worked out. It's a crisp tracker for iPhone and iPad, built for the way India and Asia actually eat. Over 480 dishes, from poha and dal tadka to ramen and nasi lemak, work offline with household servings and regional names.

It also takes what you've already worked out elsewhere: share or copy a meal from ChatGPT or any assistant and NutriTrack fills in the items and numbers, without calling an AI service itself. There's no account, and everything stays on your device.

## How it works

1. **Set up in under a minute.** One screen (goal, activity, age, height, weight) gives you a daily calorie, protein, carb and fat target. No sign-up.
2. **Just type it.** Write a meal the way you'd say it in the box on Today. NutriTrack reads the dishes and amounts as you type, and one tap logs them. You can also search or scan a barcode.
3. **Import from ChatGPT.** Paste a reply into the same box, or choose Share → NutriTrack. Check each item against the original line, edit if needed, and add it. Save dishes to reuse.
4. **Keep your supplements on track.** Add vitamins, minerals, protein powders or Ayurvedic staples from the reference library and tick them off each day.
5. **See your week.** Progress shows calories, macro averages, your streak and how often you took your supplements.
