# Assets Specification — HSC Desktop (1728 × 1117)

**Source frame:** `HSC Desktop (1728 x 1117)` · node `112:6937` · page `HSC`
**Figma file:** https://www.figma.com/design/n9UhKIQ9lMyYH2O8P5BLja/HSC-Hype-Site?node-id=112-6937
**Scope:** this frame only.

Tags: **Explicit** (read from Figma), **Inferred** (reasonable reading, confirm first), **Flag** (missing or ambiguous).

**Export settings:** no node in this frame has export settings defined. No file formats, scales or filenames are specified for any asset below. Developers will need to export from Figma, and the format choices are theirs unless the designer says otherwise.

Screenshots could not be saved into these files. Each asset links to its node so it can be viewed or exported in Figma.

---

## 1. Vector graphics and icons

### 1a. Footer decorative strip — `Frame 57` (`168:3342`)

[Open in Figma](https://www.figma.com/design/n9UhKIQ9lMyYH2O8P5BLja/HSC-Hype-Site?node-id=168-3342)

A horizontal row, 613 × 22px, gap 12px, containing 21 shapes (9 polygons and 12 vectors). It is the left item of the bottom Footer bar. Shapes are at fixed positions inside the row. None are components.

| Shape type | Count | Size (px) | Fill | Notes |
|---|---|---|---|---|
| Triangle polygons | 9 | 20 × 20 | `#1f30c8` | Each rotated **−90°** |
| Glyph-like vectors (named "✺", "✹", "✲") | 6 | 18 × 17, 22 × 22, 18 × 19 | `#1f30c8` | Layer names only; these are vector shapes, not text |
| Cyan vectors ("Vector", "Union") | 6 | 12 × 19, 14–15 × 19 | `#89fff9` | Some rotated 180° |

Node ids:
- **Polygons:** `168:3343`, `168:3347`, `168:3351`, `168:3352`, `168:3353`, `168:3357`, `168:3361`, `168:3362`, `168:3363`
- **Blue vectors:** `168:3345`, `168:3348`, `168:3349`, `168:3355`, `168:3358`, `168:3359`
- **Cyan vectors:** `168:3344`, `168:3346`, `168:3350`, `168:3354`, `168:3356`, `168:3360`

**Flags**
- The row looks like a repeating decorative pattern. That is **Inferred**: the file does not say what it represents.
- The cleanest approach is probably to export the whole `Frame 57` as one SVG, but the design does not specify this. Developer decision, with designer confirmation.
- Whether the strip is decorative (hidden from screen readers) or meaningful is not specified.

### 1b. Footer form connector — `Rectangle 138` (`168:3317`)

An 8 × 33px rectangle, fill `#1f30c8`, between the email field and the "Get a Reminder" button. It is a vector node. It is a simple shape; it may be reproducible with CSS (developer decision).

### 1c. Typed symbols (not image assets)

These are text characters in the Banner, not vector files:

| Character | Where | Font set in design |
|---|---|---|
| `•` (U+2022) | Banner segments | Ubuntu Sans Mono Regular |
| `➤` (U+27A4) | Banner segments (`Date=Past`) | Ubuntu Sans Mono Regular |
| `//` | Banner segments (`Date=Current`) | Ubuntu Sans Mono Regular |
| `‘` (U+2018) | "‘27 Schedule" (Nav, Footer) | Ubuntu Sans Mono Medium |
| `“ ”` and `’` | "“YEAH! I’M READY!”" (Verse Div) | Ubuntu Sans Mono SemiBold |
| `©` | "© HSC 2027" (Footer) | Ubuntu Sans Medium |

**Flag:** `➤` may not be included in Ubuntu Sans Mono. If it is not, the browser will substitute another font and it may look different from the design.

### 1d. Icons

**No icon assets** (such as arrows, social icons or menu icons) exist in the frame.

---

## 2. Fonts

Nine font styles from five families are used. All are in use in this frame as shown.

| Family | Style(s) used | Used for |
|---|---|---|
| **Bacalar** | Ultra Expanded; Expanded | Hero heading, banner marquee text, countdown numbers, footer title; Verse label (Expanded) |
| **Comba** | Bold Ultra Wide | Logo (Nav, Footer), banner tags |
| **Ubuntu Sans Mono** | Regular; Medium; SemiBold | Nav links, labels, buttons, banner text, verse description, footer links |
| **Ubuntu Sans** | Regular; Medium; SemiBold | Event value text, footer body text, email placeholder, footer button, copyright |

| Family | Style | Weight (from style name) | Sizes used (px) |
|---|---|---|---|
| Bacalar | Ultra Expanded | not a numeric weight | 96, 86.3, 36, 32, 20 |
| Bacalar | Expanded | not a numeric weight | 20 |
| Comba | Bold Ultra Wide | Bold | 28, 14 |
| Ubuntu Sans Mono | Regular | Regular | 14 |
| Ubuntu Sans Mono | Medium | Medium | 16, 14, 12 |
| Ubuntu Sans Mono | SemiBold | SemiBold | 16, 14 |
| Ubuntu Sans | Regular | Regular | 14 |
| Ubuntu Sans | Medium | Medium | 14 |
| Ubuntu Sans | SemiBold | SemiBold | 20, 14 |

Full text styling (line-height, letter-spacing, colour) is in `layout.md` §10.

**Flags**
- **Font files and licences:** the file does not say where the fonts come from. The Ubuntu Sans families are widely available as open-source fonts, but I could not confirm the source used for this design. **Bacalar** and **Comba** are not fonts I can confirm a source or licence for. The developers need the font files (or a licensed web-font source) and the designer needs to confirm usage rights.
- "Ultra Expanded", "Expanded" and "Ultra Wide" are **width** variants. Developers need font files that include these width variants (or width axis settings if variable). Confirm which files the designer is using.
- Fractional size **86.3px** (Footer title) is probably a scaled value. See `layout.md`.
- No fallback fonts are specified.

---

## 3. Colours and gradients (reference)

Not files, but required to reproduce the design. The full inventory with usage is in `layout.md` §11. Gradients:

| Gradient | Node | Definition |
|---|---|---|
| Hero overlay | `112:6939` | Linear, top → bottom, `#0f161b`: 0% alpha at 50%, 20% at 75%, 80% at 100% |
| Info Div background | `112:6991` | Linear, `#1b2dca` (0%) → `#000d83` (100%), about 251deg (**Inferred** from Figma's transform; verify visually) |

---