# YouthX Components

This directory contains all components for the **YouthX Summit** landing page at `/youthx`.

## Architecture

The page is built as a **cinematic, panel-based scroll experience** using Three.js for 3D background effects and GSAP ScrollTrigger for immersive scene transitions.

```
app/youthx/page.tsx
│
├── Background3D/           # Fixed 3D canvas (Three.js via R3F)
│   └── Background3D.tsx    # Star field, 6 floating wireframe meshes, mouse parallax
│
├── YouthXHero/             # Scenes 1 & 2: Boot → Gate Breach
│   └── YouthXHero.tsx      # X gate entrance + scroll-triggered split reveal
│
└── YouthXScene/            # Scenes 3–9 + Footer
    └── YouthXScene.tsx     # All cinematic scroll scenes (GSAP ScrollTrigger)
```

## Scroll Journey

| Scene | Content |
|-------|---------|
| **Boot** | X logo floats in on dark background (boot animation on wrapper) |
| **Gate Breach** | Left/right halves of X slide apart on scroll, YouthX full logo revealed |
| **Broadcast** | "CREATING / LASTING / IMPACT" slams in word by word |
| **Data HUD** | Stats grid — 400+ youth, 6 keynote tracks, 20+ projects |
| **Keynotes** | 6 domain tracks burn in on an editorial grid |
| **Exhibitions** | Project, Startup, and Food stall cards clip-wipe in |
| **Goals** | 6 mission goals stamp in with numbered labels |
| **Sponsor** | "Why Sponsor YouthX?" — 3 pillars (Regional, Brand, Long-Term) |
| **Aftermovie** | YouTube embed + scrolling media publication marquee |
| **Partner CTA** | Full-screen "PARTNER WITH US TODAY" call-to-action |
| **Footer** | CodeKraft contact info + link to main site |

## Tech Stack

- **Three.js** (via `@react-three/fiber` + `@react-three/drei`) — floating wireframe meshes, star field
- **GSAP + ScrollTrigger** — all scroll-triggered reveals and pin animations
- **Next.js Image** — optimised logo rendering in hero
- **CSS Modules** — all styling (no Tailwind)

## Assets (in `/public`)

| File | Used in |
|------|---------|
| `youthx-x-left.png` | `YouthXHero` — left gate half |
| `youthx-x-right.png` | `YouthXHero` — right gate half |
| `youthx-logo-full.png` | `YouthXHero` — revealed after gate breach |

> **Note:** `youthx-x-logo.png` is the original combined X logo (kept as source reference, not used in production).

## Animation Design

**Gate Breach (Hero):** The X is split into two pre-cut PNG halves. GSAP `fromTo` with ScrollTrigger scrub slides the left half to `-130%` and the right half to `+130%` as the user scrolls, revealing the full YouthX logo underneath. The gate wrapper has a separate boot animation (`gsap.from`) to avoid transform conflicts with the scroll-controlled halves.

**Scene Reveals:** Each scene uses `ScrollTrigger.create` with `onEnter` callbacks (not scrub) for clean one-shot reveals — words clip upward, cards wipe in, HUD numbers count up.

## Adding Content

- **New scenes** → Add a `<section>` to `YouthXScene.tsx` and register a `ScrollTrigger` in the `useEffect`.
- **Media publications** → Edit the `marqueeItem` array in the Aftermovie scene inside `YouthXScene.tsx`.
- **Contact info** → Edit the `<footer>` block at the bottom of `YouthXScene.tsx`.
