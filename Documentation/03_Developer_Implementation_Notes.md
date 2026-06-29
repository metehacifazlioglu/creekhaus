# Developer Implementation Notes — CreekHaus MVP Prototype v2

For the Paymun development team. This package is **HTML/CSS, not images** — open any screen in a browser and inspect it. Exact colors, spacing, type, and the interaction behaviors are all in the markup. This document covers the things you can't see by inspecting: data model intent, what's deferred, and the two operational constraints that shape how the app should behave.

The build target is **~2 months**. Everything below is scoped to hit that.

---

## 1. How to run the prototype
- Open `index.html` for the gallery, or open any screen directly.
- Interactions that are live: My Shift checklist toggles, Daily/Incident mic record state + timer + char count, Incident category chips, Quick Guide search filter.
- `assets/styles.css` = the design system (tokens + components). `assets/app.js` = icon set + interactions. Both are commented.

---

## 2. The two constraints that matter most

These came out of the operations discussion and they should drive backend and UX decisions more than any single screen does.

### 2a. Logging must be anchored to a named role, per shift — not left to goodwill
On a construction site (the Paymun model), the person logging benefits from logging — it documents their work. In a restaurant, logging is pure overhead for the worker; there's no personal upside, and the floor can simply be walked. So **adoption will not come from enthusiasm — it has to come from ownership.**

Concretely, per the meeting: the **shift checklists are owned by exactly three leads** — one Front-of-House lead, one Back-of-House lead, and one premise/shift lead — and only at **open, close, and transition** (never mid-service with guests present). Build the data model so each logged item (checklist completion, daily update, incident) is **attributable to the responsible role for that shift**, and so the manager/web views can answer *"did the responsible person log their open/close?"* — not just *"is there data?"* This is the difference between the app being useful in month three and being abandoned.

Implication for screens:
- My Shift checklists should resolve to a **responsible lead** who can sign off (with delegation allowed). The lead's sign-off is the unit of truth, not individual taps.
- Daily Update and Incident Report should stamp **who/which role/which shift** on submission.

### 2b. The data will be thinner than Paymun's — design the dashboards to read honestly
Because of 2a, CreekHaus will produce **less** data than a construction site, and unevenly (the diligent leads log; gaps are real gaps). The dashboards must not let a sparse day *look* complete. Prefer explicit "logged / not logged by responsible role" states over silent emptiness. A green dashboard should mean "the open was logged," not "nothing was reported, therefore all good." This is a one-line caveat for the founder when interpreting the web dashboard, and it's worth honoring in how completion is displayed.

---

## 3. Daily Update & Incident Report — one component, two configs

Build **once**. The screen is: guiding-questions block → combined input → optional photo → submit.

```
DailyIncidentScreen(
  title,                // "Daily Update" | "Incident Report"
  accent,               // green (#1C3D29) | orange (#D2792F)
  guidingQuestions[],   // copy differs per type
  showCategoryChips,    // false for Daily, true for Incident
  submitLabel
)
```

### Combined voice/text input (the WhatsApp-style field)
This is the only genuinely new build vs. the v1 Paymun feature set. One field handles both:
- Default: a text box (placeholder "Type your update here, or tap the mic to record…") with a mic button and char counter (limit 2000).
- Tap mic → inline recording state appears **in place** (pulsing dot, live waveform, running timer) — **not** a separate full-screen recorder. Tap again to stop; the voice note attaches alongside any typed text.
- A submission can contain typed text, a voice note, a photo, or any combination.

**Voice → text:** capture the audio, run it through transcription server-side, and store **both** the audio and the transcript. The meeting's stated flow: the employee can review/confirm the transcript after their shift; the lead can read transcripts when reporting. The "AI summary of the day's reports" is a **later** enhancement — for MVP, capturing audio + transcript is enough.

---

## 4. Quick Guide — keep it cheap
Per the meeting, the simplest acceptable implementation is **links to the existing Google Drive PDFs** (or the PDFs embedded), grouped by category, with the search filter that's already wired in the prototype. Do **not** build a document-management system or expose the full SOP library. These are quick-reference cards only.

---

## 5. Authentication
Sign-in is **phone number or Face ID** (see Profile). No password management for staff. Account creation/deletion is an admin action on the web side, not self-service — which is why Profile is intentionally minimal.

---

## 6. Roles & permissions
Two app shells driven by role (Employee / Manager), plus an admin web portal. Permission levels seen in the data: **Admin** (owner), **Manager**, **Lead** (FOH/BOH leads), **Employee**. The web "Team Members" table is where these are assigned. Gate manager screens and web admin behind Manager/Admin.

---

## 7. Deferred — built later, not now (don't scope into the 2 months)

| Feature | Status / dependency |
|---------|--------------------|
| **Alerts / Broadcast / Chat** | Removed from MVP. The founder is keen on emergency broadcast eventually ("Zone A needs help → I'm on it"). Blocked on **Ladan's chat-group PDF** and a backend feasibility check. The Paymun app reportedly has a chat UI with no backend — that's the likely starting point. Keep nav/data model forward-compatible but build nothing yet. |
| **Clock-in / Timecards / Payroll** | Out. **Toast is the source of truth** for time. Do not add a clock-in; it invites workers to think they log time here. |
| **Scheduling system** | Out for MVP. Acceptable to run scheduling on the existing back end for now. A later option: a **one-way API dump from Toast/Sling** into our backend that only tells the front end "here's your shift" — **read-only**, never an entry point for time logging (explicit founder concern). Alex is evaluating what Toast/Sling/7shifts actually offer. |
| **AI photo-review agent** | Future. The vision: an agent reviews the day's photos overnight and flags items to reward or address. Depends on first having the photo/data pipeline from this MVP. |
| **Android** | Open. Paymun is iOS/web today. A discussed hardware path: shared, tethered house devices (a station of iPhones/iPads logging by employee number) so staff aren't on personal phones. If staff do use personal phones, a **phone stipend** applies — a policy note, not a build item, but it affects rollout. |

---

## 8. Asset notes for the build
- **Hero image:** the `.hero` blocks use a CSS dusk-gradient placeholder. Drop the real beer-garden photo into that background — no layout change needed.
- **Logo:** the leaf mark is an inline SVG approximation. Replace with the official CreekHaus asset.
- **Fonts:** Playfair Display + Inter via Google Fonts `<link>`s. Self-host if you prefer; swap the two links.
- **Avatars:** initial-circles as placeholders; wire to real member photos from Team Members.
- **Icons:** one inline-SVG set in `app.js`, keyed by name. Current keys include: home, calcheck, clip, alert, book, user, mic, keyboard, paperclip, camera, lock, cal, sun, leaf, wrench, droplet, chef, users, martini, heater, keg, napkin, restroom, guest, star, check, phone, faceid, filter, megaphone, bars, file, filecheck, shield, send, arrow, dollar, clock, dots, edit, userplus, plus, chev, search, settings, help, logout, menu, x, bell, sig, wifi, batt. Extend the `ICONS` map to add more.
