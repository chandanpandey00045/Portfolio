# Chandan Pandey — Full-Stack & Data Engineering Portfolio

A responsive light, Meta-design-inspired portfolio covering full-stack development and data engineering, built with Next.js App Router, TypeScript, Tailwind CSS, Framer Motion and Lucide icons. Includes interactive project filters, pill-shaped CTAs, cobalt accents and rounded project cards.

## Requirements

- Node.js 18.17+ (Node 20 LTS recommended)
- npm
- Git

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

Create a production build:

```bash
npm run build
npm run start
```

## Personalize before publishing

Search for all placeholders:

```bash
grep -RInE '\\[Your|\\[Add|YOUR_EMAIL|example\\.com|ABC Company|XYZ Company' src public README.md
```

Update these files:

- `src/data/portfolio.ts`: update verified skills across frontend, backend, databases, cloud and data engineering; replace sample projects, links, work history, certifications and outcomes.
- `src/components/Contact.tsx`: replace `YOUR_EMAIL@example.com` with your real email and update LinkedIn.
- `src/components/Hero.tsx`: update social links and resume details if needed.
- `public/resume.pdf`: add your own PDF resume.
- `public/images/profile.jpg`: optional photo if you decide to add a portrait later.

Do not publish fictional employers, certifications, metrics, or project claims. Bracketed content is a placeholder.

## Professional photo

The supplied design uses an abstract terminal visual and does not require a photo to run. To add your professional photo:

1. Replace `public/images/profile-placeholder.svg` with your own portrait (or update the `src` in `src/components/Hero.tsx` to point to `public/images/profile.jpg`).
2. Add an `<Image>` from `next/image` to `src/components/Hero.tsx` (or create a `ProfileCard.tsx` component).
3. Use descriptive alt text and a fixed aspect ratio with `object-cover`.
4. Keep the terminal as a separate visual element so the hero remains responsive.

A local image is preferable to a remote image URL for reliable deployment.

## Resume

Add your PDF at `public/resume.pdf`. If you don't have a final resume yet, remove the download button or change its label until the file exists.

## Contact form

The contact form is frontend-only. It validates fields and opens the visitor's default email client once you replace the placeholder email address. It does not store or send messages by itself. For server-side delivery, connect a form provider or create a protected API route and add secrets as environment variables in Vercel.

## Deploy to Vercel with GitHub

1. Create an empty GitHub repository, for example `data-engineer-portfolio`.
2. In this project directory:

   ```bash
   git init
   git add .
   git commit -m "Build data engineering portfolio"
   git branch -M main
   git remote add origin https://github.com/ChandanPandey45/data-engineer-portfolio.git
   git push -u origin main
   ```

   If you created the repository under a different name or account, change the remote URL.

3. Sign in to Vercel and choose **Add New → Project**.
4. Import the GitHub repository.
5. Keep the detected Next.js framework and default build settings.
6. Deploy. Vercel will provide a preview URL.
7. Each push to `main` triggers a production deployment; pull requests can create previews.
8. Add a custom domain from the Vercel project settings if desired, then apply the DNS records shown by Vercel at your DNS provider.

No environment variables are required for the current demo.

## Accessibility and performance

- Responsive mobile navigation with accessible labels.
- Keyboard focus styling and skip-to-content link.
- Reduced-motion preference respected by Framer Motion and CSS.
- Contact form fields use labels and browser validation.
- No arbitrary terminal commands are executed.

## Before launch checklist

- [ ] Replace all placeholders and verify claims.
- [ ] Add a real resume PDF or remove its button.
- [ ] Add your real LinkedIn URL and email address.
- [ ] Link each project to its exact repository or case study.
- [ ] Add project screenshots/architecture diagrams if useful.
- [ ] Run `npm run build` and fix any warnings.
- [ ] Test keyboard navigation and mobile layout.
- [ ] Check the deployed site and social preview metadata.


## Design system
See [`DESIGN.md`](./DESIGN.md) for the color tokens, typography, spacing, component behavior and accessibility rules used in this portfolio. The design is inspired by the Meta design analysis added via GetDesign and adapted to a personal engineering portfolio; it is not an official Meta site or exact brand implementation.
