---
app: "LocalSpend"
lastUpdated: "2026-11-13"
---

## Overview

LocalSpend handles some of your most sensitive information, your financial transactions, so it keeps that data on your device. It has no account, no server and no analytics. This policy explains exactly what the app does, including the few times it uses the internet.

## Data we collect

**We do not collect your personal data.** LocalSpend has no server, no user accounts, no analytics, no crash reporting and no advertising. Your transactions are never uploaded anywhere, and we never receive them.

## Data stored on your device

Your transactions, budget, category rules and settings live in a private database on your phone. For each imported transaction the app also keeps the original SMS text, or a short excerpt of the email, so you can see where it came from. If you connect Gmail or another mailbox, the app stores the account's email address on your phone to show which account is connected. Receipt photos you attach are kept in the app's storage on your phone.

## SMS reading (Android only)

With your permission (`READ_SMS`, `RECEIVE_SMS`), LocalSpend reads text messages to find bank, card and UPI transaction alerts. Each message is checked on your phone. OTPs, promotions and personal messages are skipped, and messages are never sent anywhere.

## Gmail import (optional)

If you connect a Gmail account, LocalSpend uses Google Sign-In to request **read-only** Gmail access (`gmail.readonly`). It reads bank alert emails on your phone to find transactions. It cannot send, change or delete email, and email content is never sent to us or anyone else. Google's handling of the sign-in itself is governed by [Google's Privacy Policy](https://policies.google.com/privacy).

LocalSpend's use and transfer of information received from Google APIs adheres to the [Google API Services User Data Policy](https://developers.google.com/terms/api-services-user-data-policy), including the Limited Use requirements. Gmail data is used only to show you your own transactions in the app. It is not used for advertising, it is not sold or shared, and no person reads it.

You can disconnect an account in Settings at any time. You can also revoke access at [myaccount.google.com/permissions](https://myaccount.google.com/permissions).

## Other mailboxes (optional)

If you add a mailbox from another provider (iCloud, Yahoo, Zoho or any IMAP server), LocalSpend connects from your phone straight to that provider over an encrypted connection and reads bank alert emails the same way, read-only. The app-specific password you enter is kept in your phone's keychain or keystore and is sent only to that mail provider. It is never sent to us.

## Alerts you share or paste (optional)

You can share a bank alert to LocalSpend from another app, paste one, or set up an automation that passes alerts to it. The text is read on your phone to find the transaction and is not sent anywhere.

## Receipt photos (optional)

You can attach a photo of a bill to a transaction, from the camera or by picking one photo. Only the photo you choose is used. It is saved on your phone and is never uploaded.

## On-device AI assistant (optional)

The "Ask" feature uses a language model that runs entirely on your phone. Turning it on triggers a **one-time download of the model file** (about 610 MB, or 1.6 GB if you choose the larger model) from Hugging Face's servers. The download contains no information about you, and your questions and answers are processed offline, on your phone.

## Other network activity

There is none. Apart from Gmail import, mailboxes you add yourself and the optional model download, LocalSpend makes no network requests. Its fonts are built into the app.

## Exports and backups

CSV exports and backup files are created on your phone. They go only where you choose to send them through the share sheet, such as Drive, Files or email. Automatic backups are stored in the app's private storage on your phone.

## Permissions

**Android:** SMS (transaction import), notifications (a reminder when a regular payment is due, and an alert when spending reaches a budget you set), biometrics (app lock), camera (only when you take a receipt photo), internet (mail import and the model download), and starting at boot so background imports keep running. **iOS:** Face ID (app lock), notifications (payment reminders and budget alerts), camera (only when you take a receipt photo), and photo library access limited to the one photo or backup file you pick. LocalSpend never browses your photo library.

## Data deletion

**Settings → Clear all data** deletes every transaction, setting, connected account, saved mailbox password, receipt photo, the downloaded Ask model and the on-device backup. Uninstalling the app also removes all of its data. There is no server-side copy, because none exists.

## Children's privacy

LocalSpend is meant for adults managing their own money. It does not knowingly collect any data from anyone, including children under 13.

## Changes to this policy

If this policy changes, the updated version will be posted on this page with a new "last updated" date.

## Contact

Questions about privacy? Email [hello@sagarchandagarwal.com](mailto:hello@sagarchandagarwal.com).
