# Bruno Mata — Portfolio

Personal portfolio for my software development, computing education and applied local-AI work.

**Live website:** [brunomata.vercel.app](https://brunomata.vercel.app)

**Repository:** [Wrecless/port](https://github.com/Wrecless/port)

## Featured projects

| Project | Focus | Live site |
| --- | --- | --- |
| **Python Quest** | Browser-based Python learning with Pyodide, CodeMirror, guided quests and automated checks | [Open Python Quest](https://python-quest-ruby.vercel.app) |
| **Couples Mediation** | Structured two-person conversations with local Ollama integration and resumable upload reading; a non-clinical prototype under development | [Open prototype](https://couples-therapy-eight.vercel.app) |
| **Mr. Mata Learning Hub** | Computer science games covering algorithms, binary, logic, maths and networking | [Open Learning Hub](https://mr-mata-learning-hub.vercel.app) |
| **Hugzy Designs** | Custom 3D-printing showcase, product pages, enquiry flow and linked SumUp storefront | [Open Hugzy Designs](https://hugzydesigns.vercel.app) |
| **SoulSupport** | Non-clinical wellbeing resources and support signposting | [Open SoulSupport](https://soulsupport.vercel.app) |

Screenshots are stored in `public/`. Private project repositories are not exposed as public source links. Couples Mediation is not a clinical service or an end-to-end encrypted product; local AI inference does not mean its application storage is fully local.

## CV downloads

- [Software / full-stack CV](https://brunomata.vercel.app/Bruno-Mata-Software-CV.pdf)
- [Computing teaching / curriculum leadership CV](https://brunomata.vercel.app/Bruno-Mata-Teaching-CV.pdf)

Both PDFs are two pages, exported from the editable Word documents in [`docs/cv/`](docs/cv/). `/Profile.pdf` remains a byte-identical compatibility copy of the software CV.

See the [CV documentation](docs/cv/README.md) for editable files and regeneration instructions. The current Chilwell role's exact start date and job title remain unconfirmed and are intentionally not invented.

## Technology

- Next.js 15 App Router, React 18 and TypeScript
- Tailwind CSS 3, Framer Motion and Lucide icons
- Nodemailer for the contact endpoint
- Playwright and axe-core for browser regression and automated accessibility checks
- Vercel deployment through GitHub

Use **npm** with the committed **`package-lock.json`**. Do not introduce a second package-manager lockfile.

## Local development

Prerequisites: a compatible Node.js installation and npm. Local release verification used Node.js 26; check dependency requirements when choosing another runtime.

```bash
git clone https://github.com/Wrecless/port.git
cd port
npm ci
npm run dev -- --hostname 127.0.0.1 --port 3017
```

Open [http://127.0.0.1:3017](http://127.0.0.1:3017). Loopback binding keeps the development server off the local network.

### Production-build verification

```bash
npm run lint
npm run build
npm run typecheck
npm run start -- --hostname 127.0.0.1 --port 3017
```

Run the first build before standalone type checking so Next.js can generate its route types. In a second terminal:

```bash
npm test
```

The browser smoke test expects `http://127.0.0.1:3017` and uses installed Google Chrome by default. If Chrome is unavailable:

```bash
npx playwright install chromium
BROWSER_CHANNEL=chromium npm test
```

Set `BASE_URL` to test another local port. These environment-variable examples use Bash syntax; adapt them for your shell.

**Test coverage:** featured project order/status, private source-link exclusion, mobile CV visibility, both page layouts, automated WCAG checks, horizontal overflow, canonical/crawl metadata, malformed contact requests, skills and social-preview wording. Tests do not send an email. PDF response types, byte equality and image rendering were verified separately during the release; they are not yet fully covered by the smoke suite. Automated checks are not a complete accessibility certification.

## Repository guide

| Path | Purpose |
| --- | --- |
| `app/page.tsx` | Portfolio page and section navigation |
| `app/components/` | Hero, about, projects, skills, impact and contact sections |
| `app/more-projects/` | Classroom-tools page |
| `app/layout.tsx` | Site metadata, fonts and shared layout |
| `app/opengraph-image.tsx` | Generated social-sharing image |
| `app/robots.ts`, `app/sitemap.ts` | Crawl configuration |
| `app/api/contact/route.ts` | Contact-email endpoint |
| `app/api/send-email/route.ts` | Compatibility alias for the contact endpoint |
| `public/` | Project screenshots, profile image and public CV PDFs |
| `tests/portfolio-smoke.mjs` | Browser regression checks |
| `docs/cv/` | Editable CVs, structured content and Word/PDF generator |

## Contact email configuration

Set these in a private `.env.local` file or the deployment environment:

| Variable | Purpose |
| --- | --- |
| `EMAIL_USER` | Gmail SMTP account |
| `EMAIL_PASS` | SMTP authentication secret, such as an app password |
| `CONTACT_EMAIL` | Optional recipient override |

Do not commit credentials. The hydrated form sends JSON to `/api/contact`; if the request fails or SMTP is not configured, the client opens an email draft. Visitors must send that draft themselves—it is not proof of delivery. The form requires JavaScript for this flow and declares POST to avoid personal data in GET query strings before hydration.

**Actual production SMTP delivery remains unverified.** Spam protection and rate limiting remain follow-up work.

## Deployment and release status

Production: [brunomata.vercel.app](https://brunomata.vercel.app). GitHub production branch: **`master`**. The old `port-ten-black.vercel.app` repository homepage setting is stale and is not the live portfolio address.

The portfolio/CV refresh was published through [PR #2](https://github.com/Wrecless/port/pull/2), application commit [`bb4f8db`](https://github.com/Wrecless/port/commit/bb4f8db77ca1b44bed62e73cfaea741acee554c4), on **7 October 2026**:

- Vercel preview and production builds succeeded for their exact commits.
- Local build, lint, type checks and browser regressions passed.
- Browser regressions also passed against the public production alias.
- Both named CV downloads and `/Profile.pdf` returned matching PDF bytes.
- Python Quest's image was verified in live desktop and mobile screenshots.

Vercel preview pages are sign-in protected. Build success does not replace public-site verification. Before publishing, compare GitHub with the live application, let the branch preview build succeed, then merge and verify production. Publishing, account changes and production mail tests require explicit approval.

## Known follow-up work

- Confirm the current Chilwell role's exact title and start date.
- Verify SMTP delivery and add contact abuse controls.
- Triage remaining dependency advisories, including Next.js's bundled PostCSS and development tooling. No user-supplied CSS is processed here, but that does not establish that every advisory is inapplicable.
- Extend download/image regression coverage and make CV regeneration fully atomic.

Run fresh audits rather than relying on historical counts:

```bash
npm audit --omit=dev
npm audit
```

Do not use `npm audit fix --force` to introduce an unreviewed Next.js or Tailwind major upgrade.
