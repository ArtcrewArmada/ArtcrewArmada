# ArtCrew ARMADA — System Instructions for Antigravity & AI Agents

This repository contains the full-stack web application for **ArtCrew ARMADA**, a luxury atelier celebrating ancient craftsmanship, high-concept upcycling (maritime, aviation, horological artifacts), bespoke jewelry, primitive art, educational masterclasses, and environmental awareness.

---

## 1. Project Overview & Architecture

- **Application Type**: React 19 + TypeScript + Vite + Tailwind CSS (v4)
- **Primary Design Palette**:
  - Deep Atelier Charcoal: `#131313` / `#111111`
  - Artisan Warm Paper/Parchment: `#F5F2EA`
  - Muted Bronze/Gold Accent: `#B08A3E`
  - Subtle Neutral Muted: `#AFAFA9`
- **Typography Philosophy**:
  - Display/Headings: Playfair Display / Cinzel / Serif Display with generous letter tracking (`tracking-wide` / `tracking-widest`).
  - Body & Micro-labels: Plus Jakarta Sans / Inter / Clean Sans-serif with comfortable line height (`1.5` to `1.7`).
- **Internationalization (i18n)**:
  - Supports 3 core languages: Thai (`TH`), English (`EN`), French (`FR`).
  - Content dictionary located in `/src/data/content.ts`.

---

## 2. Directory Structure

```
├── index.html                   # Main HTML entry point with synchronized title/meta
├── metadata.json                # Project metadata and major capabilities
├── package.json                 # Dependencies and execution scripts
├── vite.config.ts               # Vite configuration with Tailwind plugin
├── src/
│   ├── main.tsx                 # React DOM root render
│   ├── App.tsx                  # Master state, scroll spy, navigation & modal coordinators
│   ├── types.ts                 # Shared TypeScript interfaces & types
│   ├── index.css                # Global CSS with Tailwind v4 setup & custom utilities
│   ├── data/
│   │   └── content.ts           # Multilingual translation dictionary, products, and articles
│   └── components/
│       ├── TopAppBar.tsx        # Sticky translucent header with brand logo & bag trigger
│       ├── NavigationDrawer.tsx # Side navigation drawer with full section links & language switch
│       ├── HeroSection.tsx      # Atelier atmosphere hero with call-to-actions
│       ├── ShopSection.tsx      # 7 category grid, item filter, and quick purchase
│       ├── AboutSection.tsx     # Atelier manifesto, pillars & master craftsman ethos
│       ├── CreationCraftSection.tsx # Ancient wax casting, chainmaille & mokume-gane deep dive
│       ├── UpcyclingSection.tsx # Maritime & aeronautical metal recycling journey
│       ├── PrimitiveArtSection.tsx  # Megalithic & tribal aesthetic artifacts
│       ├── WorkshopsSection.tsx # Masterclasses, schedule & booking system
│       ├── JournalSection.tsx   # Curated essays and research archives
│       ├── AwarenessSection.tsx # Environmental metrics & circular economy mission
│       ├── ContactSection.tsx   # Bespoke salon consultation & inquiry form
│       ├── ProductDetailModal.tsx # Full artifact modal with story, specs, price & add-to-bag
│       ├── CartDrawer.tsx       # Interactive shopping drawer with quantity controls & checkout
│       └── Footer.tsx           # Atelier legal, multilingual selectors & attribution
```

---

## 3. Key Development Commands

- **Start Dev Server**: `npm run dev` (Runs on `http://0.0.0.0:3000`)
- **Build Production**: `npm run build` (Compiles TypeScript & bundles into `dist/`)
- **Type Check & Lint**: `npm run lint` (`tsc --noEmit`)

---

## 4. Antigravity Agent Guidelines

When modifying or expanding features in this application:

1. **Maintain Aesthetic Cohesion**:
   - Strictly follow the brutalist luxury / wabi-sabi atelier visual tone.
   - Avoid generic AI patterns (no neon gradients, no arbitrary rounded cards, no generic SaaS copy).
   - Use high contrast, generous whitespace, and sharp optical hierarchy.

2. **Multilingual Consistency**:
   - Whenever new UI copy or text is introduced, add corresponding translations in `TH`, `EN`, and `FR` within `/src/data/content.ts` and `/src/types.ts`.

3. **Modularity & Scalability**:
   - Avoid dumping logic directly into `App.tsx`. Extract distinct views or interactions into `/src/components/`.
   - Maintain strict TypeScript type definitions in `/src/types.ts`.

4. **Integration with Gemini & Full-Stack**:
   - If server-side AI features are introduced (such as bespoke artifact consultation, custom jewelry generator, or smart appraisal), use `@google/genai` on an Express backend proxying `/api/*`. Keep secret API keys exclusively server-side.
