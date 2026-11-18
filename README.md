# UndaNova website

The website for UndaNova, a Kenyan software studio. It's built with Next.js 16 (App Router), TypeScript and Tailwind CSS v4. There's no database: page content lives in TypeScript files, and the contact form sends email through [Resend](https://resend.com).

The full brief (brand, design system, page copy and quality bar) is in [CLAUDE.md](CLAUDE.md).

## Run it locally

You need Node.js 20.9 or newer.

```bash
npm install
cp .env.example .env.local   # optional: only needed to send real emails
npm run dev
```

Open http://localhost:3000.

| Command | What it does |
|---|---|
| `npm run dev` | Development server with hot reload |
| `npm run build` | Production build (run this before deploying to catch errors) |
| `npm start` | Serve the production build locally |
| `npm run lint` | Check the code with ESLint |

## Environment variables

Set these in `.env.local` locally, and in Vercel for production. All of them are optional.

| Variable | What it's for | If it's not set |
|---|---|---|
| `RESEND_API_KEY` | Sends contact form messages by email | Messages are printed to the server log and the visitor still sees "Thank you" |
| `CONTACT_TO_EMAIL` | The inbox that receives messages | Uses `email` from `src/lib/site.ts` |
| `CONTACT_FROM_EMAIL` | The sender, e.g. `UndaNova website <website@undanova.com>` | Uses Resend's test sender, which only delivers to your own Resend account email |

To send from your own domain, add and verify the domain in Resend (**Domains → Add domain**, then add the DNS records it shows you). Then set `CONTACT_FROM_EMAIL` to an address on that domain.

Never commit `.env.local`. It's already in `.gitignore`.

## Changing content

Most changes don't need any new code:

| To change… | Edit |
|---|---|
| Email, WhatsApp number, city, social links, domain | `src/lib/site.ts` |
| Services and what's included | `src/content/services.ts` |
| Projects and case studies | `src/content/work.ts`. A new entry gets its own `/work/{slug}` page, card and sitemap entry automatically. |
| Case study screenshots | Put images in `public/work/{slug}/` and list them in that project's `images` (the first one is the main image) |
| Page wording | The page files in `src/app/` (e.g. `src/app/about/page.tsx`) |
| Brand colours and fonts | `src/app/globals.css` and `src/app/layout.tsx` |

Logos: the master files are in `brand/` (originals in `brand/source/`). The site uses the copies in `public/brand/`.

## Project structure

```
src/
  app/            Pages (one folder per route), 404, sitemap, robots, icons, share image
    contact/      Contact page and the server action that sends the form
  components/     Reusable pieces: Button, Section, Card, CTABand, header, footer, form…
  content/        Services and work data
  lib/            Site details (site.ts) and contact form validation (contact.ts)
  proxy.ts        Sends a real 404 for unknown /work/{slug} links
brand/            Master logo files
public/brand/     Logo files used by the site
```

## Deploy on Vercel

1. Push this repository to GitHub, GitLab or Bitbucket.
2. In [Vercel](https://vercel.com/new), choose **Add New → Project** and import the repository. Vercel detects Next.js, so leave the build settings as they are.
3. Under **Environment Variables**, add `RESEND_API_KEY`, plus `CONTACT_TO_EMAIL` and `CONTACT_FROM_EMAIL` if you use them.
4. Click **Deploy**. Every push to `main` deploys again automatically, and other branches get preview links.
5. To use your domain, go to **Project → Settings → Domains**, add `undanova.com` (or `undanova.co.ke`) and follow the DNS instructions.
6. Make sure `url` in `src/lib/site.ts` matches the live domain. The sitemap, robots.txt and share links use it.

After the first deploy, check that the contact form delivers to your inbox. Then run Lighthouse in Chrome DevTools (mobile) on the live site.

## Photo credits

Photos are from [Unsplash](https://unsplash.com) under the [Unsplash License](https://unsplash.com/license) (free for commercial use; credit appreciated, not required). They live in `src/assets/photos/` and are tinted navy by `PhotoBackground`.

| File | Photo | Used on |
|---|---|---|
| `nairobi-night.jpg` | [Nairobi at night](https://unsplash.com/photos/Zkao_QBEjk8) by Mustafa Omar | Home hero, 404 |
| `satin.jpg` | [Silky, flowing fabric](https://unsplash.com/photos/1dhcuHUFXFw) by Am | Services, Work, About, Contact, CTA |
| `team-laptop.jpg` | [A smiling woman works on a laptop](https://unsplash.com/photos/s3hlZ-gdfdQ) by Vitaly Gariev | Home, how we work |

To swap a photo, replace the file (keep the name) and rebuild.

## Before launch: what's still needed

These are marked `TODO:` in the code (`grep -rn "TODO" src` lists them):

- **`src/lib/site.ts`**: business email, WhatsApp number, city, LinkedIn and Instagram links, and the final domain.
- **`src/content/work.ts`**: for each project, a summary, the problem, what was built, the result, tech stack and screenshots. Also the NGO's name, and whether ANIKA is live.
- **About page**: confirm or rewrite the draft story, and add your photo.
- **Services page**: decide whether to add "Starting from" prices.
- **Resend**: create the API key and verify the sending domain.
