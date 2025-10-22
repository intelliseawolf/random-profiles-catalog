# Random Profiles Catalog (Nuxt 4 + Tailwind)

A Nuxt 4 demo app that **serves its own REST API** and consumes it from the client to show **random person profiles**.

## Stack

- Nuxt 4, TypeScript, Tailwind CSS
- @faker-js/faker (profile data)
- Zod (shared types + API response validation)
- TestingBot Avatar Generator (avatars)

## API Endpoints

- `GET /api/profiles?count=12&seed=optional` → list of profiles
- `GET /api/profile/:id` → details for one profile

> Avatars are provided by TestingBot’s free generator. The API accepts a size and optional unique seed parameter: `https://testingbot.com/free-online-tools/random-avatar/{size}?u=<seed>` (e.g. 256 or 512). Source: TestingBot docs.

## Project Pages

- `/` → Home: gallery of random profiles (12 by default)
- `/search` → Search Results: exactly 10 profiles (optionally deterministic via seed)
- `/profile/:id` → Details: one profile by id

## AI Usage

See prompts.md (all prompts/commands logged). Any commit that includes AI-generated changes updates this log.

## Notes

- This project deliberately uses only the local API from the client; any optional composition with other external data sources would occur inside `server/api/\*` and never from the browser.
- 10+ attributes per profile: id, name, email, username, avatarUrl, jobTitle, company, phone, city, country, dob, gender, bio ✅
- Home/Search(10)/Details pages consume local API ✅
- Loading & error states visible ✅
- Responsive, consistent styling ✅
- README & prompts.md present ✅
- Majority of code generated with AI (documented) ✅
- Bonus: Zod shared types/validation ✅; A11Y & SEO ✅; subtle transitions ✅

## Optional Enhancements (Ideas)

- Add pagination to `/api/profiles` (page + seed)
- Add filters (country/job) generated locally
- Cache avatars with an image proxy route
- Unit tests for server handlers and schemas

## Run

```bash
# install
pnpm i # or npm i / yarn


# dev
pnpm dev


# build & preview
pnpm build && pnpm preview
```
