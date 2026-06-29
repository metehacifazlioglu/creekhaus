# Consistency Review — CreekHaus MVP Prototype v2

A pass for the specific thing the Finalization Guide asked for: *is the app internally consistent, so a developer is never guessing?* The answer is now yes. Below is what was inconsistent in v1 and how it's resolved, plus the shared system every screen draws from.

---

## 1. Navigation (was the biggest inconsistency)

In v1 the bottom bar changed between screens — the Home screen showed `Home · My Shift · ⊕ · Chat · Guides`, while Daily and Alerts showed `Home · My Shift · ⊕ · Alerts · Profile`. A developer couldn't tell which was canonical.

**Resolved — two fixed bars, by role:**

- **Employee:** `Home · My Shift · ⊕ · Guides · Profile`
- **Manager:** `Home · Shifts · ⊕ · Reports · Profile`

The center **⊕** is a quick-add (Daily Update / Incident Report) on both. The four flanking destinations never change within a role. Active state is the only thing that differs screen-to-screen.

---

## 2. One design system, one stylesheet

Every screen — employee, manager, web — loads a single `assets/styles.css`. Colors, type, spacing, radius, and components are defined once as tokens. Change a token, every screen updates. Developers should treat this file as the source of truth, not the individual screens.

### Color tokens
| Token | Hex | Use |
|-------|-----|-----|
| `--green` | `#1C3D29` | Primary — buttons, headers, nav, FAB, manager icon circles |
| `--green-deep` | `#15301F` | Web sidebar |
| `--cream` | `#F4EEE4` | App background |
| `--card` | `#FCFAF5` | Card surfaces |
| `--sage` | `#E3E5D5` | Icon-circle backgrounds |
| `--orange` | `#D2792F` | **Incident** accent + warnings |
| `--orange-soft` | `#F6E1CB` | Peach pill background |
| `--ink` | `#2C2C28` | Body text |

### Status pills (now uniform across app + web)
| State | Background | Text |
|-------|-----------|------|
| To-Do | `--todo-bg #E2E4D6` | `#586050` |
| In Progress / Open | `--orange-soft #F6E1CB` | `#B85F22` |
| Done / Resolved | `#D9E3E7` (app) · `#D8E6D6` (web) | slate / green |
| In Review | `#DBE7E4` | `#3C6B66` |

### Typography
- **Headings:** Playfair Display (serif) — the brand voice. Screen titles, card titles, numbers.
- **Body / UI:** Inter (sans) — labels, paragraphs, table cells, pills.
- Both load from Google Fonts in each file's `<head>`. If you self-host, swap the two `<link>` tags; nothing else changes.

### Iconography
All icons come from one inline-SVG set injected by `assets/app.js` (`<i data-i="name">`). Single stroke weight, single visual language. No icon-font dependency, no mixed sources. The full name list is in the Implementation Notes.

---

## 3. Daily Update ↔ Incident Report parity

These now share the exact same component — same guiding-questions block, same combined voice/text field, same photo row, same submit button. The deltas are intentional and total three: **title**, **accent color** (green vs orange), and **category chips** (Incident only). This is the single most important consistency win for build effort: it's *one* screen component configured two ways, not two screens to build and maintain.

---

## 4. Web header & sidebar

v1 web screens varied — one showed a "creekhaus / BEER GARDEN" logo with a user chip, others showed just the wordmark with no chip. **Resolved:** every web screen now uses the identical sidebar (same wordmark + leaf, same item order) and the same top bar (page title left, user chip right).

---

## 5. Copy / vocabulary

One name per concept, everywhere: **Incident Report** (never "Report"), **Quick Guide** (never "Quick Emergency Guides"), **Daily Update** (never "Submit Daily" / "Record Update" / "Type Your Update"). Buttons name their action and keep that name through the flow (e.g., "Submit Daily Update").

---

## Residual inconsistencies (intentional, not bugs)
- **Employee vs Manager nav differ.** Correct — different roles, different destinations.
- **Incident has chips, Daily doesn't.** Flagged in the Change Log; your call to keep or strip.
- **Hero imagery is a CSS gradient placeholder**, not the final beer-garden photo. The real brand photo drops into the `.hero` background with no structural change. Noted so it isn't mistaken for a design decision.
