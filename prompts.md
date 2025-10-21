# AI Prompts Log

## 2025-10-20 - Scaffold

**Prompt:** “Create a Nuxt 4 + Tailwind app”

**Tool:** ChatGPT

**Output:** Initial repository scaffold, config files.

## 2025-10-20 - PostCSS Fix

**Prompt:** “Nuxt shows WARN: Using postcss.config.\* is not supported. Move PostCSS plugins to `postcss` option in `nuxt.config.ts` and delete external config file.”

**Tool:** ChatGPT (GPT-5 Thinking)

**Output:** Added `postcss` block to `nuxt.config.ts` and removed `postcss.config.cjs`.

## 2025-10-20 - Implement Server API with Faker + Zod

**Prompt:** “Write erver routes for `GET /api/profiles?count&seed` and `GET /api/profile/:id`. Need to use faker to synthesize fields (≥10 attributes) and zod to validate responses. Provide deterministic generation using a seed string and a simple hash. Avatars: TestingBot with `?u=` seed and size variants.”

**Tool:** ChatGPT (GPT-5 Thinking)

**Output:** Added server apis and profile types.

## 2025-10-21 - Typed API Client Module

**Prompt:** “Create a single composable `useApiClient` that is the only place to call the API. Use `$fetch` with TypeScript types and parse responses through Zod schemas to guarantee correctness.”

**Tool:** ChatGPT (GPT-5 Thinking)

**Output:** Generated useApiClient composable in the app directory.

## 2025-10-21 - UI Components (A11Y + Loading/Error/Skeleton)

**Prompt:** “Build Vue components with Tailwind CSS: `ProfileCard`, `LoadingSpinner` (with ARIA live region), `ErrorState`, and `SkeletonCard`. Use focus rings, alt text, smooth transitions, and responsive cards.”

**Tool:** ChatGPT (GPT-5 Thinking)

**Output:** Generated ProfileCard, LoadingSpinner, ErrorState, SkeletonCard in the components directory.
