# BioThrive Modern Website

A polished multi-page BioThrive website concept built with **Next.js + Tailwind CSS**.

## Pages

- `/` Home
- `/our-story`
- `/our-work`
- `/team`
- `/learn`
- `/news`
- `/publications`
- `/events`
- `/contact`

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Edit content

Most text, navigation, stats, projects, team members, articles, and events live in:

```txt
lib/content.ts
```

## Notes

- The contact and signup forms are frontend-only placeholders.
- Connect forms later to Formspree, Resend, Supabase, or a Next.js API route.
- Replace the remote Unsplash images in `app/globals.css` with your own BioThrive photos when ready.
