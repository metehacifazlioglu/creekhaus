# Change Log — CreekHaus MVP Prototype v2

Every change applied to the v1 prototype package, organized by screen. Source of each change: the **Finalization Guide** and the **June 12 Bahadour 1:1**. Nothing here is a redesign — the visual identity (colors, type, cards, photography, branding, navigation style) is unchanged from v1. See `05_Unchanged_Items.md` for what was deliberately preserved.

---

## Global (applies to every screen)

| # | Change | Why |
|---|--------|-----|
| G1 | "Report" renamed to **Incident Report** everywhere | 1:1 + Finalization Guide |
| G2 | "Quick Emergency Guides" renamed to **Quick Guide** | Finalization Guide |
| G3 | Bottom navigation **standardized**. Employee: `Home · My Shift · ⊕ · Guides · Profile`. Manager: `Home · Shifts · ⊕ · Reports · Profile`. The ⊕ center button is a quick-add for Daily Update / Incident Report. | v1 nav was inconsistent screen-to-screen (Home showed Chat+Guides; Daily showed Alerts+Profile) |
| G4 | **Alerts removed** from the MVP (employee tab, manager stat + Broadcast action, web sidebar item) | 1:1: "we can likely delete Alert." Deferred, not deleted — see Implementation Notes |
| G5 | **Chat removed** from the MVP | 1:1: pending Ladan's chat-group PDF + backend feasibility |
| G6 | Heavier, more deliberate **bold typography**; clearer visual hierarchy | 1:1: "we lack bold fonts overall" |
| G7 | Removed from scope entirely: Clock-in, Timecards, Payroll, Scheduling system, large SOP library, Toast/Sling integration, complex AI | Finalization Guide "Remove From MVP" |

---

## Employee App

**01 — Home**
- Cards relabeled to match new vocabulary (Incident Report, Quick Guide, Daily Update).
- Nav standardized (G3).

**02 — My Shift**
- The biggest employee change: static **"To-Do" text indicators replaced with interactive checklist items.** Tapping a row marks it complete — strikethrough, filled check, and a `DONE` pill. Status pills are now `To-Do / In Progress / Done`.
- "Add Daily Update" button retained at the bottom (links to Daily Update).

**03 — Daily Update** (was "Submit Daily")
- **Collapsed three screens into one.** v1 had a Daily chooser → separate "Voice Report" screen → separate "Text Report" screen. These are now a single screen.
- Voice and text live in **one combined input** (WhatsApp-style): a text field with an inline mic button. Type, record, or both — no separate workflows.
- Guiding questions retained. Optional photo retained. Single **Submit Daily Update** button.
- Accent color: **green**.

**04 — Incident Report** (was "Report")
- Rebuilt to be **layout-identical to Daily Update** — same guiding-questions block, same combined voice/text input, same photo row, same submit. The only differences are the **title** and the **orange accent** (signals urgency; orange chosen over red to fit the palette).
- **One intentional addition beyond color/title:** the category chips (Guest / Kitchen / Safety / Maintenance / Other) are kept on Incident Report only, because incident triage and the web Reports filter depend on a category. Flagged for review — easy to strip if you'd rather the two screens be byte-for-byte identical.

**05 — Quick Guide** (was "Quick Emergency Guides")
- Renamed. Kept concise. Search bar + categorized quick-reference list (Front of House / Kitchen / Safety / …). No full SOP library exposed.

**06 — Profile**
- **Simplified to the essentials:** Name, Phone, Face ID (sign-in), Log out, plus optional Help & Support. Removed editable account settings — employees don't self-manage accounts; changes route through management.

---

## Manager App

**01 — Dashboard**
- **Shift count replaced with the actual shifts.** v1 showed a "3 Shifts Today" stat tile; it now lists today's shifts directly (role, time, assigned people) under "Today's Shifts."
- Removed the Alerts stat and the Broadcast Message quick action (G4).

**02 — Shift Assignments**
- Already strong in v1; preserved. Tightened type hierarchy and ensured nav consistency. Role cards (Opening/Patio, Dining/Service, Bar, Kitchen/BOH, Special Projects) each show description, assigned people, and an Edit affordance.

**03 — Reports**
- Consolidated manager review into one screen: tabs for **Daily Updates, Incident Reports, Outstanding Issues**, each item showing submitter, status, and a **Reviewed / acknowledge** action (the "manager saw it" signal raised in the meeting).

---

## Web / Admin Portal

**01 — Dashboard**
- Donut chart now shows **labels directly on the chart AND keeps the legend** (the "both" option from the 1:1).
- Removed "Alerts & Broadcasts" from the active MVP sidebar (kept as a documented future item).

**02 — Team Members**
- Header treatment standardized (page title left, user chip right). Table unchanged in structure: Name / Role / Permission Level / Status.

**03 — Shifts**
- **Kept the current clickable day-table view; did not add a tab layer.** This answers the open question from the 1:1 ("should we add tabs?"). Rationale in Implementation Notes — the table already does the job; a tab layer adds navigation cost without new information.

**04 — Reports**
- **Issue column header and items bolded** so the problem is the first thing the eye lands on (1:1 request). Filter tabs retained (All / Open / In Review / Resolved / Closed).

**Sidebar (all web screens)**
- Standardized: identical CreekHaus wordmark + leaf, identical item order, correct active state per page.

---

## Refinement pass (post-review alignment)

After a side-by-side check against the original mockups and a re-read of the 1:1, three adjustments:

- **Home realigned to the original 2×2 card grid.** v2's first build used a 2-square-plus-2-wide layout; it's now four equal cards in the original order (My Shift · Daily Update · Incident Report · Quick Guide) with the original card copy. Daily keeps the green accent, Incident the orange.
- **Hero warmed toward the original photo.** The dusk gradient on Home and the Manager Dashboard was retuned to the golden-sky-to-forest-green tone of the original beer-garden image. (Final still drops in the real photo — no layout change.)
- **Flow diagrams added** as `User Flow Diagrams/CreekHaus_Flow_Diagrams.html` — a single all-in-one page (employee, manager, web + the cross-surface data flow), matching the design language and the refined structure. This replaces the v1 PNG flow diagrams, which were stale (they still showed Alerts, Chat, and the separate Voice/Text Report screens).

---

## v3 — interactivity + simplification pass

This round turns the prototype from a click-through into something that can actually be *used* to test the flows, plus the simplifications from the latest brainstorm.

**Branding**
- Real CreekHaus logo wired in: the emblem (circular leaf mark) and the wordmark replace the earlier SVG stand-ins — on the employee Home hero, the Manager Dashboard hero, and the web sidebar. A cream wordmark is used on the dark green surfaces.

**Employee app**
- **Home** — hero cut to roughly half height; weather removed; greeting simplified to "Hello, Bahadour" + date; the four cards are now compact (icon + label only, no descriptions) so the whole screen scans in a couple of seconds.
- **My Shift** — completing a task now slides it to the bottom of the list (Apple Notes style), most-recently-completed last. Tapping it again brings it back up.
- **Daily Update** — guiding questions removed, down to a single prompt line. The mic records a voice note; the text field accepts typing or iPhone keyboard dictation — both options are now spelled out under the field.
- **Incident Report** — same simplification as Daily; category chips retained.
- **Quick Guide** — new "Working Samples" section at the top with two real PDFs (Bar / Beverage Closing Checklist, Inspector Arrival). Tapping opens the actual PDF.

**Manager app**
- **Shift Assignments** — Edit and Assign Team Member now work: they open an in-page sheet where you add/remove people (changes write back to the card on save).
- **Reports** — sample reports you can actually work. Tap a report to open the detail; "Mark Reviewed" only appears there (not on the list). Reviewed reports slide to the bottom; "Flag" tags one for follow-up.

**Web / admin**
- Sidebar reordered so Daily Updates and Reports sit directly under Shifts.
- **Shifts** — rows are clickable (opens a shift sheet to view/change assignments); Create Shift opens a form; clicking the date opens a month calendar.
- **Reports** — added a check-to-clear column; checked rows mark reviewed and slide to the bottom. Issue column already bold.
- **Daily Updates** — new screen: Submitter · Submitted · Update text, with the same check-to-clear behavior.

**Under the hood**
- All sheets/modals open in-page (no navigation away), matching the request to keep things on one screen.
- Done-to-bottom uses a FLIP slide animation; ordering follows completion sequence.
