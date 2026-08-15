---
app: "LocalSpend"
lastUpdated: "2026-08-15"
---

## Overview

LocalSpend handles some of your most sensitive information — your financial transactions — so it is built to keep that data on your device. This policy explains exactly what the app does, including the few places where it talks to the internet.

## Data we collect

**We do not collect your personal data.** LocalSpend has no server, no user accounts, no analytics, no crash reporting, and no advertising. Your transactions are never uploaded anywhere.

## Data stored on your device

Your transactions, categories, budgets, merchant rules, and settings live in a local database on your phone. Optionally, the original SMS or email text of a transaction can be kept locally so you can review the source. You can protect the app with Face ID / fingerprint lock.

## SMS reading (Android only)

With your permission, LocalSpend reads SMS messages to find bank, card, and UPI transaction alerts. All parsing happens on your device; messages are never transmitted anywhere. Non-transaction messages are ignored.

## Gmail import (optional)

If you connect a Gmail account, LocalSpend uses Google Sign-In with **read-only** Gmail access to fetch bank alert emails to your device, where they are parsed locally. Nothing is uploaded, and LocalSpend cannot send, modify, or delete your email. Google's handling of the sign-in itself is governed by [Google's Privacy Policy](https://policies.google.com/privacy). You can disconnect an account at any time.

## On-device AI assistant (optional)

The "Ask" feature uses a language model that runs entirely on your phone. Enabling it triggers a **one-time download of the model file** (~1.5 GB) from Hugging Face's servers; that download contains no information about you, and no request about your data is ever sent to any AI service. All questions and answers are processed offline, on-device.

## Other network activity

The app may fetch its display font from Google Fonts on first launch (cached afterwards). No personal data is included in that request.

## Exports and backups

CSV exports and encrypted backup files (AES-256, protected by your passphrase) are created on your device and shared only where you choose to send them. Automatic backups are stored locally on your phone.

## Permissions

Android: SMS (transaction import), notifications (recurring-payment reminders), biometrics (app lock), boot/alarm (background rescan scheduling). A coarse-location permission may appear in the system listing because of the SMS library the app uses — LocalSpend itself never accesses your location. iOS: Face ID (app lock) only.

## Data deletion

Deleting the app permanently removes all of your data. There is no server-side copy, because none exists.

## Children's privacy

LocalSpend does not knowingly collect any data from anyone, including children under 13.

## Changes to this policy

If this policy changes, the updated version will be posted on this page with a new "last updated" date.

## Contact

Questions about privacy? Email [hello@sagarchandagarwal.com](mailto:hello@sagarchandagarwal.com).
