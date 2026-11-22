# Responsive Specification — HSC Desktop (1728 × 1117)

**Source frame:** `HSC Desktop (1728 x 1117)` · node `112:6937` · page `HSC`
**Figma file:** https://www.figma.com/design/n9UhKIQ9lMyYH2O8P5BLja/HSC-Hype-Site?node-id=112-6937
**Scope:** this frame only.

Tags used throughout: **Explicit** (read from Figma), **Inferred** (reasonable reading, confirm first), **Flag** (missing or ambiguous, needs a designer answer).

---

## 1. What Figma does define: how each section resizes

Figma's auto-layout sizing modes are the only responsive information in the file. They describe how each element would stretch if its parent's width changed.

| Section | Node | Width | Height | Horizontal padding | Notes |
|---|---|---|---|---|---|
| Nav | `112:7106` | Fixed (1728) | Hug (71) | 160 + 160 | Content row is Fill width |
| Hero | `112:6939` | **Fill** | Fixed (721) | 0 | Content row has 160px side padding |
| Banner | `136:12903` | Fixed (1728) | Hug (77) | 0 | Clips overflowing strips |
| Info Div | `112:6991` | **Fill** | Hug (616) | 320 + 320 | Content is centered |
| Verse Div | `168:5202` | **Fill** | Hug (493) | 320 + 320 | `Verse` row is Fill width |
| Footer (main) | `168:3309` | Fixed (1728) | Hug (472) | 160 + 160 | Rows inside are Fill width |
| Footer (bar) | `168:3341` | Fixed (1728) | Hug (81) | 160 + 160 | Content `space-between` |

**Reading this:**
- "Fill" (Hero, Info Div, Verse Div) means the section is designed to span its parent's full width. **Explicit.**
- "Fixed 1728" (Nav, Banner, both Footers) is ambiguous. It may be a deliberate fixed width, or just the width of this one frame. **Flag.** The most natural reading is that these also span the full width (**Inferred**), but the file does not say so.
- Every section has fixed horizontal padding in px (160 or 320). Whether that padding should shrink at narrower widths is **not specified**.
- Section heights are Hug (content-driven) except Hero, which is a fixed 721px at this width.

---

## 2. Inside the sections: stretch and alignment rules

These are the **Explicit** behaviors that would apply at any width, before any breakpoint decisions.

| Element | Node | Behavior in Figma |
|---|---|---|
| Nav Content | `112:7107` | Fill width; logo left, links right, `space-between`, vertically centered |
| Hero heading | `112:6941` | Fill width, hug height, left-aligned, wraps to 3 lines at 1408px. Font size is fixed at 96px |
| Hero content | `112:6940` | Bottom-aligned inside Hero (64px from the bottom edge) |
| Banner strips | `…136:12162`, `…136:12119` | Wider than the Banner (2607 / 2690 vs 1728). Centered on overflow and clipped (**Inferred** from negative x offsets) |
| Event Info | `112:6992` | Hug width (711), centered in Info Div |
| Timer | `114:7610` | Hug width (711), 4px border; padding 24 / 44 / 16 / 44 |
| Register button (Info Div) | `124:7934` | **Fixed width 266**, hug height, centered |
| Verse | `168:5203` | Fill width (1088), children centered |
| Progress Block | `168:5207` | **Fixed width 354.7**, centered |
| Footer top row | `168:3310` | Fill width, `space-between` |
| Reminder column | `168:3312` | **Fixed width 467**; its text is fixed at 272px and wraps to 2 lines |
| Footer title | `168:3321` | Fill width, 86.3px, 1 line at 1408px |
| Footer link row | `168:3322` | Fill width, `space-between`; left group and right group are Hug |
| Footer bar content | `168:3341` | `space-between`: decorative strip (Hug, 613) left; countdown + button (Hug, 634) right |

---

## 3. Elements that depend on a fixed size

These have a size in px that is not derived from a parent. The design does not say what should happen if the available width is smaller than the element.

| Element | Fixed size in design | Why it matters |
|---|---|---|
| Hero heading font | 96px | At a narrower width, the 3-line wrap would change. No smaller size is designed. |
| Nav (logo + 5 links + button) | Links group is 941px wide, 1408px available | No collapsed menu is designed. |
| Timer (Info Div) | 711 × 113 | Four units in a row plus 44px side padding. No stacked layout is designed. |
| Top row (Info Div) | 501px wide (two columns, 72px gap) | No stacked layout is designed. |
| Register button (Info Div) | 266px | Fixed, not content-driven. |
| Progress Block | 354.7px | Fixed, fractional. |
| Footer reminder column + form | 467px, field 302px | Fixed. |
| Footer title | 86.3px | Sized to fit 1408px; no smaller size is designed. |
| Footer link rows | Two groups with gaps of 32px and 124px | No wrapped or stacked layout is designed. |
| Footer bar | 613px strip + 634px countdown/button group | No narrower layout is designed. |
| Banner strips | 2607px / 2690px | Intended to overflow. Behaviour on other widths is not specified. |

---
