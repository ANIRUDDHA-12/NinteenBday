# Project 19: Digital Experience for Aishwarya

## Overview
A hyper-minimalist, high-fashion, interactive single-page React application serving as a digital mood board for a 19th birthday. The aesthetic fuses the editorial sleekness of Vogue with the sharp, driven energy of a finance professional.

## Tech Stack (Strict Constraints)
- **Framework:** React 18 + Vite (Single Page Application, NO routing)
- **Styling:** Tailwind CSS (Utility classes only, no custom CSS files unless unavoidable)
- **Animations & Physics:** Framer Motion (v11+)
- **Icons:** Lucide React

## Design System & Typography
- **Vibe:** "The Glass Desk" - clean, structured, populated with scattered, draggable memories.
- **Background:** 'Oxford White' (`#F8F9FA`).
- **Typography:** 'Playfair Display' or 'Bodoni Moda' (Hero Headings), 'Inter' or 'Helvetica Neue' (UI / Secondary text).
- **Text Color:** 'Charcoal Noir' (`#1A1A1A`). STRICTLY NO pure black (`#000000`).
- **Accents:** 'Champagne Pink' (`#F2D4D4`), 'Matte Blush' (`#E5B8B8`), subtle 'Birkin Gold' (`#CBA135`) for highlights.

## Core Interactive Features
1. **The Hero:** Centralized, elegant typography reading "Aishwarya." with "Nineteen." subtly placed below.
2. **The Scattered Workspace:** 10-15 "polaroid" or "glassmorphism" cards scattered randomly around the hero text with randomized subtle CSS rotations (e.g., -5deg to +5deg).
3. **Draggable Physics:** Every card must be freely draggable using Framer Motion's `drag` prop, strictly bounded by the screen edges using `dragConstraints` mapped to the parent container.
4. **Cinematic Modals:** Clicking a card triggers an `<AnimatePresence>` modal. The background transitions to a blurred overlay (`bg-white/30 backdrop-blur-md`). The clicked card smoothly layout-animates to the center and scales up. Include a minimalist close interaction.
5. **Widgets:** A minimalist floating audio player (bottom right) and a subtle finance ledger/growth graphic (bottom left).

## Responsive Behavior (Mobile-First Fallback)
- On viewports `< 768px`, free-form drag physics must be disabled to protect the mobile viewport from breaking.
- Cards must snap into a horizontal scrolling swipe-gallery (flex row with `overflow-x-auto` and `snap-x`).