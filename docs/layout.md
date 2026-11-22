# Layout Specification — HSC Desktop (1728 × 1117)

**Source frame:** `HSC Desktop (1728 x 1117)` · node `112:6937` · page `HSC`
**Figma file:** https://www.figma.com/design/n9UhKIQ9lMyYH2O8P5BLja/HSC-Hype-Site?node-id=112-6937
**Scope:** this frame only. Nothing outside it is documented.

## How to read this document

| Tag | Meaning |
|---|---|
| **Explicit** | Value read directly from the Figma file. |
| **Inferred** | A reasonable reading of the design, not stated in Figma. Confirm before relying on it. |
| **Flag** | Ambiguous, missing, or inconsistent. Needs a designer answer. |

Unless stated otherwise, every number below is **Explicit** and in **px**. Figma has no `rem`; where `rem` is shown it assumes a 16px root (**Inferred**). Figma letter-spacing percentages are shown as `em` (4% = `0.04em`). Figma line-height `AUTO` means the font's default (`line-height: normal`).

Each section has a Figma link that opens that section on the canvas. Screenshots could not be saved into these files, so the node links are the visual reference.

---

## 1. Frame overview

| Property | Value | Notes |
|---|---|---|
| Frame size | 1728 × **2460** px | **Flag:** the frame is *named* "1728 x 1117" but is 2460px tall. Width (1728) is what matters; 1117 appears to be a leftover name. |
| Frame fill | `#f1eeec` | Explicit |
| Clips content | Yes | |
| Root layout | None (absolute) | Root has two children: `Body` and `Nav`. `Nav` is positioned over `Body` at (0, 0). |
| Prototype interactions | None defined | See §9. |
| Variables | None bound | The file has no variable collections. |

### Hierarchy

```
HSC Desktop (1728 x 1117)           112:6937   1728 × 2460
├── Body                            112:6938   vertical stack, 1728 × 2460
│   ├── Hero                        112:6939   1728 × 721
│   ├── Banner (instance)           136:12903  1728 × 77
│   ├── Info Div                    112:6991   1728 × 616
│   ├── Verse Div                   168:5202   1728 × 493
│   ├── Footer (main)               168:3309   1728 × 472
│   └── Footer (bottom bar)         168:3341   1728 × 81
└── Nav                             112:7106   1728 × 71   (overlays top of Hero)
```

Body sections stack top to bottom with **0 gap**: y = 0 · 721 · 798 · 1414 · 1907 · 2379.

### Section summary

| Section | Node | Size (px) | Width behaviour | Height behaviour | Padding T / R / B / L |
|---|---|---|---|---|---|
| Nav | `112:7106` | 1728 × 71 | Fixed 1728 | Hug | 24 / 160 / 12 / 160 |
| Hero | `112:6939` | 1728 × 721 | Fill | Fixed 721 | 0 / 0 / 64 / 0 |
| Banner | `136:12903` | 1728 × 77 | Fixed 1728 | Hug | 8 / 0 / 8 / 0 |
| Info Div | `112:6991` | 1728 × 616 | Fill | Hug | 144 / 320 / 144 / 320 |
| Verse Div | `168:5202` | 1728 × 493 | Fill | Hug | 144 / 320 / 224 / 320 |
| Footer (main) | `168:3309` | 1728 × 472 | Fixed 1728 | Hug | 124 / 160 / 56 / 160 |
| Footer (bar) | `168:3341` | 1728 × 81 | Fixed 1728 | Hug | 20 / 160 / 20 / 160 |

Content widths that result from the padding: Nav/Hero/Footer content = **1408px** (1728 − 2×160). Info Div/Verse Div content = **1088px** (1728 − 2×320).

---

## 2. Nav — `112:7106`

[Open in Figma](https://www.figma.com/design/n9UhKIQ9lMyYH2O8P5BLja/HSC-Hype-Site?node-id=112-7106)

| Property | Value |
|---|---|
| Position | x 0, y 0, over the top of Hero (**Explicit** geometry) |
| Layout | Horizontal, padding 24 / 160 / 12 / 160, clips content |
| `Nav Content` (`112:7107`) | Fill width (1408), hug height (35), `space-between`, vertically centred |
| Left | `Logo` text |
| Right | `Links` group (`112:7109`): horizontal, gap **64px**, items centred |
| `Nav Links` (`112:7110`) | Horizontal, gap **56px**, 5 × `Nav Button` instances |
| `Button` (`124:7931`) | "REGISTER", fixed width 154, hug height 35 |

**Flag:** sticky/fixed behaviour on scroll is not defined. Only the overlay position at the top of the page is explicit.

**Logo** — text `HSC/27`, Comba Bold Ultra Wide 28px. "HSC" `#ffffff`, "/27" `#ff307c`. **Blend mode: Difference** (CSS `mix-blend-mode: difference`). The on-screen colour therefore depends on what is behind it.

**Nav links** — order and labels as designed:

| # | Label | Node |
|---|---|---|
| 1 | ‘27 Schedule | `159:13881` |
| 2 | Music Lists | `159:13884` |
| 3 | Past Years | `159:13887` |
| 4 | Fun Things | `159:13890` |
| 5 | Contact Us | `159:13893` |

Each is a `Nav Button` component instance (see §8). Blend mode **Difference** is also set on each button.

**Flags**
- Link destinations are not specified (no hyperlinks set).
- "‘27" uses a left single quote (U+2018). An apostrophe (’) may have been intended.
- The footer lists the same links in a different order (§7).

---

## 3. Hero — `112:6939`

[Open in Figma](https://www.figma.com/design/n9UhKIQ9lMyYH2O8P5BLja/HSC-Hype-Site?node-id=112-6939)

| Property | Value |
|---|---|
| Size | 1728 × 721, fill width, fixed height |
| Layout | Vertical; children aligned to the **bottom** (`justify-end`); padding-bottom **64px** |
| Background (layer 1) | Image fill, crop mode (see `assets.md`) |
| Background (layer 2) | Linear gradient overlay, colour `#0f161b`, running **top to bottom**: 0% opacity at 50% of the height, 20% at 75%, 80% at 100% |
| Clips content | Yes |

`Hero Content` (`112:6940`): vertical, fill width, hug height (288), horizontal padding **160px**, gap 16px.

**Heading** (`112:6941`) — fill width (1408), hug height:

| Property | Value |
|---|---|
| Text | `HIGH  SCHOOL  CAMP 2027` (note the **double spaces** between "HIGH", "SCHOOL" and "CAMP" in the source text) |
| Font | Bacalar Ultra Expanded, **96px**, line-height **100%**, letter-spacing 0 |
| Colour | `#ffffff`; "2027" is `#ff307c` |
| Rendered height | 288px = three lines of 96px (the text wraps to 3 lines at 1408px width) |

**Flags**
- The double spaces are in the source text. Confirm whether they are intentional.
- One space character between "CAMP" and "2027" is coloured `#ff4f27` (orange). It is invisible, so it has no visual effect.

---

## 4. Banner — `136:12903`

[Open in Figma](https://www.figma.com/design/n9UhKIQ9lMyYH2O8P5BLja/HSC-Hype-Site?node-id=136-12903)

Instance of component set `Banner`, variant **`Mode=Dark`** (§8).

| Property | Value |
|---|---|
| Size | 1728 × 77, fixed width, hug height |
| Fill | `#3449e4` |
| Layout | Vertical, gap **4px**, padding 8 / 0 / 8 / 0, children centred, **clips content** |

It holds two horizontal strips. Both are **wider than the banner** and are cut off at the edges:

| Strip | Node | Width | Content |
|---|---|---|---|
| `HSC Strip` | `I136:12903;136:12162` | 2607 | 5 × text "HIGH SCHOOL CAMP " (515 × 32 each), gap 8px. Bacalar Ultra Expanded **32px**, line-height 100%, `#162adf` |
| `Banner Strip` | `I136:12903;136:12119` | 2690 | 8 × `Banner Segment` instances, gap **16px**, height 25 |

Both strips sit at negative x offsets (about −440 and −481), so the visible 1728px is a **centred window** into the overflow (**Inferred** from the offsets).

**Banner segments**, in order (the same four appear twice):

| # | Tag | Text | Segment variant |
|---|---|---|---|
| 1, 5 | HSC/24 | ALL THINGS NEW | `Date=Past, Mode=Dark` |
| 2, 6 | HSC/25 | MORE PRECIOUS THAN GOLD | `Date=Past, Mode=Dark` |
| 3, 7 | HSC/26 | EYEWITNESSES OF HIS MAJESTY | `Date=Past, Mode=Dark` |
| 4, 8 | HSC/27 | TO BE ANNOUNCED | `Date=Current, Mode=Dark` |

Segment internals: horizontal, gap 16px, height 25. A tag chip (radius 4px, padding 4px, Comba Bold Ultra Wide 14px, line-height 120%, white text) + "•" + label (Ubuntu Sans Mono Regular 14px, letter-spacing `0.12em`) + a closing glyph ("➤" for Past, "//" for Current). Colours are in §8.

**Flags**
- **No animation is specified.** The oversized, repeated strips suggest a looping ticker, but speed, direction and pause behaviour are not defined. Treat any movement as **Inferred** and confirm.
- "➤" (U+27A4) may not exist in Ubuntu Sans Mono. The fallback glyph is not specified.

---

## 5. Info Div — `112:6991`

[Open in Figma](https://www.figma.com/design/n9UhKIQ9lMyYH2O8P5BLja/HSC-Hype-Site?node-id=112-6991)

| Property | Value |
|---|---|
| Size | 1728 × 616, fill width, hug height |
| Background | Linear gradient `#1b2dca` (0%) → `#000d83` (100%). Runs from the top-right toward the bottom-left, roughly **251deg** in CSS terms (**Inferred**: calculated from Figma's gradient transform; verify visually). |
| Layout | Vertical, gap **40px**, padding 144 / 320 / 144 / 320, children centred horizontally |
| Clips content | Yes |

Children, top to bottom: `Event Info` (`112:6992`, 711 × 253, hug) then `Button` (`124:7934`).

### Event Info — vertical, gap 56px, centred

**Top row** (`112:6993`, 501 × 46): horizontal, gap **72px**, two columns. Each column is vertical, gap 8px.

| Column | Label | Value |
|---|---|---|
| When (`112:6994`, 241 wide) | WHEN | June 30th – July 4th, 2027 |
| Where (`112:6998`, 188 wide) | WHERE | TO BE ANNOUNCED |

- Label: Ubuntu Sans Mono Medium **12px**, letter-spacing `0.16em`, `#ffffff`, centred within its column.
- Value: Ubuntu Sans SemiBold **20px**, line-height auto, `#ffffff`.

**Bottom block** (`114:7608`, 711 × 151): vertical, gap **24px**, centred.

- Label: "COUNTDOWN TO HSC/27", same style as WHEN/WHERE labels.
- `Timer` (`114:7610`, 711 × 113): horizontal, gap **36px**, padding 24 / 44 / 16 / 44, **4px white border**, radius **12px**, contents centred.
- Contents: four countdown units separated by ":" characters.

| Unit | Number (design value) | Label |
|---|---|---|
| Days | 221 | DAYS |
| Hours | 18 | HRS |
| Minutes | 25 | MINS |
| Seconds | 45 | SECS |

- Number: Bacalar Ultra Expanded **36px**, `#ffffff`. Separator ":" uses the same style.
- Unit label: Ubuntu Sans Mono Medium **16px**, letter-spacing `0.08em`, `#ffffff`.
- Each unit: vertical stack, gap 4px, 65px tall. Widths are 120 (Days), 80 (Hrs/Mins/Secs). Those widths come from the content; no fixed width is set.

### Register button (`124:7934`)

Instance of `Button` (`State=Default`). Fixed width **266px**, hug height 35, centred. Text "REGISTER FOR HSC/27". See §8.

**Flags**
- The numbers (221 / 18 / 25 / 45) are placeholders in the design. The target date/time of the countdown is **not specified** (the "WHEN" text says June 30th, 2027, but no time or time zone is given).
- Whether the countdown ticks live is not specified (**Inferred** from its label only).
- The button's link destination is not specified.

---

## 6. Verse Div — `168:5202`

[Open in Figma](https://www.figma.com/design/n9UhKIQ9lMyYH2O8P5BLja/HSC-Hype-Site?node-id=168-5202)

| Property | Value |
|---|---|
| Size | 1728 × 493, fill width, hug height |
| Background | `#f1eeec` |
| Layout | Vertical, gap 40px, padding 144 / 320 / **224** / 320 |
| Content | `Verse` (`168:5203`): fill width (1088), vertical, gap 24px, children centred |

`Progress Block` (`168:5207`): fixed width **354.7px**, hug height (125), radius 12px, vertical stack with **gap −4px** (the two boxes overlap by 4px so their 4px borders merge into one line).

| Part | Node | Details |
|---|---|---|
| `Text Div` | `168:5208` | 4px border `#2d47fd`, radius 12 12 0 0, padding 20 / 20 / 16 / 20. Label "ARE YOU READY?" in Bacalar Expanded **20px**, line-height 120%, `#162adf` |
| `Progress Div` | `168:5210` | 4px border `#2d47fd`, radius 0 0 12 12, padding 16 / 20 / 20 / 20. Text "“YEAH! I’M READY!”" in Ubuntu Sans Mono SemiBold **14px**, letter-spacing `0.08em`, `#2d47fd` |

**Flags**
- Despite its name, the section contains **no verse text**, only the Progress Block.
- It looks like a call-to-action, but no click behaviour or destination is defined.
- The 354.7px width is a fractional value and is fixed (not derived from content).

---

## 7. Footers

### 7a. Footer (main) — `168:3309`

[Open in Figma](https://www.figma.com/design/n9UhKIQ9lMyYH2O8P5BLja/HSC-Hype-Site?node-id=168-3309)

Background `#000d83`. Vertical, gap **36px**, padding 124 / 160 / 56 / 160. Two children, both 1408px wide.

**Top row** — `Frame 69` (`168:3310`): horizontal, `space-between`, top-aligned.

| Part | Details |
|---|---|
| Logo (`168:3311`) | "HSC/27", Comba Bold Ultra Wide 28px. "HSC" `#ffffff`, "/27" `#2d47fd`. No blend mode. |
| Reminder column (`168:3312`) | Fixed width **467px**, vertical, gap 20px |
| Reminder text | "Send yourself a future reminder to sign up for the next High School Camp." Ubuntu Sans Medium 14px, line-height 150%, `#ffffff`. Fixed width 272px. |
| Email form row (`168:3314`) | Horizontal, 467 × 57 |
| Email field (`168:3315`) | 302 × 57, 4px border `#1f30c8`, radius 12px, padding 16 / 164 / 16 / 24. Placeholder "your@email.com", Ubuntu Sans Regular 14px, line-height 120%, `#606eea` |
| Connector (`168:3317`) | Rectangle 8 × 33, `#1f30c8`, between field and button |
| Submit button (`168:3318`) | 157 × 57, fill `#1f30c8`, radius 12px, padding 20 / 28. "Get a Reminder", Ubuntu Sans SemiBold 14px, line-height 120%, `#ffffff` |

**Bottom block** — `Frame 73` (`168:3320`): vertical, no gap.

| Part | Details |
|---|---|
| Large title (`168:3321`) | "HIGH SCHOOL CAMP", Bacalar Ultra Expanded **86.3px**, line-height 120%, `#1f30c8`. Fill width; 104px tall. |
| Link row (`168:3322`) | Horizontal, `space-between`, 1408 × 33 |
| Left links (`168:3323`) | Gap **32px**: ‘27 Schedule · Past Years · Music Lists · Fun Things |
| Right group (`168:3332`) | Gap **124px**: [Home · About · Contact Us] (gap 32px) then "© HSC 2027" |
| Link style | Ubuntu Sans Mono Medium 14px, `#bac2ff`, padding 8px each |
| Copyright | Ubuntu Sans Medium 14px, letter-spacing `0.16em`, `#7384ff`, right-aligned |

**Flags**
- The footer links are plain frames, **not** `Nav Button` component instances. No hover state is designed for them.
- The 86.3px title size is fractional. It may have been scaled to fit the 1408px width. Confirm the intended size.
- Form behaviour (submission, validation, success/error messages) is not specified.
- The visual order of links differs from the Nav (Past Years before Music Lists here).

### 7b. Footer (bottom bar) — `168:3341`

[Open in Figma](https://www.figma.com/design/n9UhKIQ9lMyYH2O8P5BLja/HSC-Hype-Site?node-id=168-3341)

Background `#000a66`. Horizontal, `space-between`, centred vertically, padding 20 / 160 / 20 / 160, gap 36px.

| Part | Details |
|---|---|
| Decorative strip (`168:3342`) | 613 × 22, horizontal, gap 12px, 21 vector/polygon shapes. See `assets.md`. |
| Mini countdown (`168:3365`) | Same four units as §5, smaller: numbers Bacalar Ultra Expanded **20px**, labels Ubuntu Sans Mono Medium **12px** (`0.08em`), gap 24px, 367 × 41 |
| Register button (`168:3381`) | `Button` instance, hug width (231) × 33. Text "REGISTER FOR HSC/27" at **14px**. Fill **`#1f30c8`** (overridden from the component's pink) |

**Flag:** the fill and text size on this button are overrides of the `Button` component. The hover colour for this override is not designed.

---

## 9. Interactive elements and behaviour

**No prototype interactions, links, or hyperlinks exist anywhere in this frame.** Everything below is either a designed visual state (**Explicit**) or a guess from the element's appearance (**Inferred**).

| Element | Designed state(s) | Trigger / behaviour | Status |
|---|---|---|---|
| `Button` (Nav, Info Div, Footer bar) | `Default`, `Hover` | Hover trigger is **Inferred** from the variant name. No transition (duration, easing) is defined. | Flag |
| `Nav Button` (Nav only) | `Default`, `Hover` | As above | Flag |
| Banner ticker | None | Movement not specified | Flag |
| Countdown (Info Div, Footer bar) | None | Live updating and target date/time not specified | Flag |
| Email field + "Get a Reminder" (Footer) | Default only | Submission, validation, and error/success states not specified | Flag |
| Progress Block ("YEAH! I'M READY!") | Default only | Looks like a CTA. Action not specified | Flag |
| Footer links | Default only | No hover state, no destinations | Flag |
| Nav logo | Default only | Whether it links home is not specified | Flag |

---

## 10. Typography inventory

All text appears as typed, with **no text-case transform set** (uppercase text is uppercase in the content). No underline/strikethrough anywhere. Rem values assume a 16px root.

| Role | Family / style | Size | Line-height | Letter-spacing | Where |
|---|---|---|---|---|---|
| Hero heading | Bacalar Ultra Expanded | 96px (6rem) | 100% | 0 | Hero |
| Footer title | Bacalar Ultra Expanded | 86.3px | 120% | 0 | Footer (main) |
| Banner marquee text | Bacalar Ultra Expanded | 32px (2rem) | 100% | 0 | Banner strip 1 |
| Countdown number (large) | Bacalar Ultra Expanded | 36px | auto | 0 | Info Div |
| Countdown number (small) | Bacalar Ultra Expanded | 20px | auto | 0 | Footer bar |
| Logo | Comba Bold Ultra Wide | 28px | auto | 0 | Nav, Footer |
| Banner tag | Comba Bold Ultra Wide | 14px | 120% | 0 | Banner segments |
| Verse label | Bacalar Expanded | 20px | 120% | 0 | Verse Div |
| Event value | Ubuntu Sans SemiBold | 20px | auto | 0 | Info Div |
| Footer body text | Ubuntu Sans Medium | 14px | 150% | 0 | Footer (main) |
| Footer button / placeholder | Ubuntu Sans SemiBold / Regular | 14px | 120% | 0 | Footer (main) |
| Copyright | Ubuntu Sans Medium | 14px | auto | 0.16em | Footer (main) |
| Button label | Ubuntu Sans Mono SemiBold | 16px (14px in Footer bar) | auto | 0.04em | Buttons |
| Nav link / footer link | Ubuntu Sans Mono Medium | 14px | auto | 0 | Nav, Footer |
| Eyebrow label | Ubuntu Sans Mono Medium | 12px | auto | 0.16em | Info Div |
| Countdown unit label | Ubuntu Sans Mono Medium | 16px (12px in Footer bar) | auto | 0.08em | Info Div, Footer bar |
| Verse description | Ubuntu Sans Mono SemiBold | 14px | auto | 0.08em | Verse Div |
| Banner text | Ubuntu Sans Mono Regular | 14px | auto | 0.12em | Banner segments |

**Flag:** the file has 6 text styles and 11 paint styles. I did not check which nodes in this frame use them, so none are named here. Values above are the resolved values.

---

## 11. Colour inventory

| Hex | Where used |
|---|---|
| `#f1eeec` | Frame background, Verse Div background, Nav Button hover tint (at 10%) |
| `#ffffff` | Most text on dark backgrounds, countdown borders |
| `#0f161b` | Hero overlay gradient (0% → 20% → 80% opacity) |
| `#ff307c` | Nav logo "/27", Hero "2027", Current banner tag |
| `#fe307c` | `Button` default fill |
| `#c0225c` | `Button` hover fill |
| `#ff4f27` | One invisible space character in the Hero heading |
| `#3449e4` | Banner background (Dark) |
| `#162adf` | Banner marquee text, Verse label |
| `#5167ea` | Banner tag fill (Past, Dark) |
| `#c8e2ff` | Banner text (Past, Dark) |
| `#1b2dca` → `#000d83` | Info Div gradient |
| `#2d47fd` | Verse Div borders and description, Footer logo "/27" |
| `#000d83` | Footer (main) background |
| `#000a66` | Footer (bar) background |
| `#1f30c8` | Footer accents: title, field border, button fill, shapes |
| `#bac2ff` | Footer links |
| `#7384ff` | Copyright |
| `#606eea` | Email placeholder |
| `#89fff9` | Footer strip shapes (cyan) |

**Flag:** pink appears as both `#ff307c` and `#fe307c`. Confirm whether these are meant to be the same colour.

---

## 12. Reusable components used in this frame

| Component set | Node | Variant property | Options | Used here |
|---|---|---|---|---|
| `Button` | `124:7918` | `State` | `Default`, `Hover` | 3 instances, all `Default` |
| `Nav Button` | `159:13878` | `State` | `Default`, `Hover` | 5 instances (Nav), all `Default` |
| `Banner` | `136:12283` | `Mode` | `Dark`, `Light` | 1 instance, `Dark` |
| `Banner Segment` | `124:7782` | `Date`, `Mode` | `Current`/`Past` × `Dark`/`Light` | 8 instances: 6 × `Past, Dark` and 2 × `Current, Dark` (see §4) |

Variant differences (read from the component definitions):

| Component | Variant | Differences |
|---|---|---|
| `Button` | Default | Fill `#fe307c`, radius 56px, padding 8 / 36, text Ubuntu Sans Mono SemiBold 16px white, letter-spacing `0.04em` |
| `Button` | Hover | Fill `#c0225c`, everything else the same |
| `Nav Button` | Default | No fill, padding 8px, text Ubuntu Sans Mono Medium 14px `#ffffff` |
| `Nav Button` | Hover | Adds fill `#f1eeec` at **10%** opacity |
| `Banner` | Dark | Fill `#3449e4`, strip text `#162adf` |
| `Banner` | Light | Fill `#e3ddd8`, strip text `#d6cdc5` |
| `Banner Segment` | Past, Dark | Tag text `#ffffff`, label `#c8e2ff` |
| `Banner Segment` | Current, Dark | Tag `#ff307c` fill, label `#ffffff` |
| `Banner Segment` | Past, Light | Tag text `#f1eeec`, label `#3449e4` |
| `Banner Segment` | Current, Light | Tag text `#ffffff`, label `#fe307c` |

Instance overrides in this frame: `Button` width is fixed to 154px (Nav) and 266px (Info Div) instead of the component's 131px; the Footer-bar `Button` overrides fill and text size (§7b). The `Light` variants of `Banner` and `Banner Segment` are part of the component sets but **are not used in this frame**. Where they are meant to appear is not specified.

## 13. Open questions for the designer

1. Frame name says 1117px tall but the frame is 2460px. Which is correct?
2. Should the Nav stay fixed/sticky on scroll?
3. Should the Banner ticker animate? If so, direction, speed and pause behaviour?
4. What are the countdown's target date, time and time zone? Should it tick live?
5. Where do the nav/footer links, Register buttons, "YEAH! I'M READY!" block and logo lead?
6. How should the email field behave (validation, success and error states)?
7. Is the pink `#ff307c` vs `#fe307c` difference intentional?
8. Are the double spaces in the Hero heading intentional?
9. Should footer links get the same hover treatment as the Nav links?
10. Is the 86.3px footer title size intentional?
