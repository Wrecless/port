# Bruno Mata — portfolio

Live: https://brunomata.vercel.app (the GitHub repository homepage alias is stale).

## Verified local workflow

This repo uses **npm** and `package-lock.json`.

```bash
npm ci
npm run lint
npm run build
npm run typecheck
npm run start -- --hostname 127.0.0.1 --port 3017
# In another terminal:
npm test
```

Browser tests use installed Google Chrome. Set `BROWSER_CHANNEL=chromium` after `npx playwright install chromium` if needed. `BASE_URL` can select another local port. Tests cover current project order, mobile CV visibility, WCAG checks, both page layouts, crawl metadata and malformed contact requests. They do not send emails.

- Project copy: `app/components/Projects.tsx`; public screenshot assets: `public/`.
- Downloads: `/Bruno-Mata-Software-CV.pdf` and `/Bruno-Mata-Teaching-CV.pdf`.
- `/Profile.pdf` is the software-CV compatibility path.
- Editable CVs/regeneration sources: `docs/cv/`.
- Chilwell's exact start date/title were not provided. Do not invent them.
- Couples Mediation is a prototype, not a clinical service or an end-to-end encrypted product. Private source repositories are not linked publicly.

## Operational boundaries

SMTP uses private `EMAIL_USER`, `EMAIL_PASS`, and optional `CONTACT_EMAIL`. Missing SMTP configuration triggers the client email-draft fallback. Actual email delivery remains untested. Form POST avoids personal data in GET query strings before hydration. Do not commit secrets.

Next.js and Nodemailer were updated locally. Remaining npm advisories require separate triage: production flags Next.js via bundled PostCSS; the full tree also flags development tooling. No user-supplied CSS is processed by this project, but this does not establish that every advisory is inapplicable. Do not force Next.js/Tailwind major upgrades with `npm audit fix --force`. Contact spam protection/rate limiting remains follow-up work.

Publication requires explicit approval. Before any push/merge, verify the target GitHub branch and Vercel deployment; after deployment, read back the exact production commit and public CV downloads. Repository homepage/account changes and production mail tests require their own scope.

---

## Original scaffold reference

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
