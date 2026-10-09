# AGENTS.md — maa-banjari-dham

Vite 5 + React 18 + React Router 6 + Firestore. No tests, lint, typecheck, or `.env` — don't add them unprompted.

## Commands
- `npm run dev` — dev server on port **5179** (`vite.config.js` pins it)
- `npm run build` / `npm run preview` — build to `dist/` / preview it
- Deploy: Firebase Hosting serves `dist/` with SPA rewrite (`firebase.json`); project `maabanjaridham` (`.firebaserc`). No deploy script in `package.json` — use `firebase deploy` / `firebase deploy --only hosting,firestore:rules` manually.

## Architecture
- Entry: `src/main.jsx` → `src/App.jsx` (`BrowserRouter` + `AuthProvider` + `Shell`). Routes: `/`, `/itihas`, `/photos`, `/suvidha`, `/trust`, `/daan`, `/sampark`, `/login`, `/admin` (guarded by `Guard`, redirects to `/login`).
- Data layer: `src/lib/store.js` `makeStore(coll, localKey, seed)` → `useNews` (`news`), `useTrustees` (`trustees`), `usePhotos` (`photos`). Firestore-first via `onSnapshot` + `getDocs`; falls back to `localStorage` when `db` null/offline. Keys: `banjari_news`, `banjari_trustees_v2`, `banjari_photos`. Seeds live in `src/lib/mandir.js` (`SEED_NEWS`, `SEED_TRUSTEES`) and are auto-written to Firestore on first empty snapshot.
- Static content: `src/lib/mandir.js` (`MANDIR`, `PHOTOS`, `HERO`, `FACILITIES`). Images in `public/` (`banjari.logo*.jpeg`, `trust-me.jpg`).
- Photos are base64 data-URLs, not Storage: compress client-side with `fileToCompressedDataUrl` (`src/lib/image.js`, default max 1280px / q0.72; trustee thumbs 512px / q0.7) before `photos.add()`.

## Gotchas
- Auth is **not Firebase Auth**: `src/lib/auth.jsx` hardcodes `admin` / `banjari123`, persisted in `localStorage` key `banjari_admin_auth`. Don't "fix" by adding a backend without asking.
- `firestore.rules` allows open create/update/delete; only validates `news.title`, `trustees.name` non-empty and `photos.src` string < 1.1MB. Keep photo payloads under that — compression in `image.js` is load-bearing.
- `store.js` `add()` injects `date: YYYY-MM-DD`; `update(id, data)` preserves the existing `date` (caller passes it) and falls back to local state for seed/local ids (`a1`/`t0`, `x...`) or Firestore errors. `remove()` has a seed-id quirk (`id.length < 10` skips `deleteDoc`).
- Sorting is by string `date` desc in the snapshot handler; keep the `date` field on edits.

## Admin edit flow
- `Admin` (`src/pages/Admin.jsx`) supports Edit for Suchna (news) and Trust (trustees) via `editNewsId` / `editTrustId` state: Edit prefills the form, `+ Add` becomes `💾 Save` + `Cancel`. Validation unchanged (news `title`, trustees `name` required). Photos panel is add/delete only — no edit.
