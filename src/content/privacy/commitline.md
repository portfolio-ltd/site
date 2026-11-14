---
app: "Commitline"
lastUpdated: "2026-11-15"
---

## Overview

Commitline (formerly Anchor) is a Mac menu-bar app and a browser extension. During a session you start, it hides the apps and closes the browser tabs on a list you choose. This policy explains what it stores, what it can see, and what never happens.

## Data we collect

**We do not collect any data.** Commitline has no server, no account system, no analytics, no crash reporting and no third-party SDKs. Neither the Mac app nor the browser extension makes network requests of its own. The Mac app's Apple privacy manifest declares no tracking and no collected data.

## What the Mac app stores on your Mac

- The list of apps you chose to hide (their bundle identifiers)
- Whether a session is running and when it ends
- How long the doodle warns before hiding an app
- A count of how many times it hid an app today

This is kept in the app's own preferences on your Mac. It is not synced to iCloud or sent anywhere.

## What the Mac app can see

To know when to step in, the Mac app is told by macOS **which application has come to the front**. That is all. It does not use Accessibility, screen recording or Automation access, and it never reads window titles, documents, messages, web pages or keystrokes. It keeps no history of the apps you use.

## Browser extension

The extension works in Safari, Chrome, Edge, Brave and Firefox.

- It stores your list of sites, your session state, the warning time and today's count of closed tabs in the browser's local extension storage on your device.
- On each page you open, it compares the page's **hostname** (for example `example.com`) with your list. It does not read page content, form input, cookies or browsing history, and it keeps no record of the pages you visit.
- When you open its popup, it reads the address of the current tab only so it can offer to add that site to your list.
- It does not communicate with the Mac app or with any server.

## Data deletion

Deleting the Mac app removes everything it stored. Removing the browser extension removes everything it stored.

## Children's privacy

Commitline does not collect data from anyone, including children under 13.

## Changes to this policy

If this policy changes, the updated version will be posted on this page with a new "last updated" date.

## Contact

Questions about privacy? Email [hello@sagarchandagarwal.com](mailto:hello@sagarchandagarwal.com).
