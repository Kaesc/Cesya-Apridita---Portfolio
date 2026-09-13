# Next.js Portfolio - Cesya Apridita

A modern single-page portfolio showcasing software development projects and photography work.

## Features

- **Single-page scrollable design** with smooth anchor navigation
- **Hero section** with profile photo and bio
- **Software projects** with detailed modal views
- **Photography portfolio** with image gallery
- **Skills section** organized by technical and creative categories
- **Contact form** with EmailJS integration
- **Fully responsive** design (mobile, tablet, desktop)
- **Dark theme** with white borders and gradient accents

## Tech Stack

- Next.js 15.4.1 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- EmailJS for contact form

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Contact Form Setup (Optional)

The contact form works without configuration (shows success message in demo mode). To enable actual email sending:

1. Create a free account at [EmailJS](https://www.emailjs.com/)
2. Add an email service (Gmail, Outlook, etc.)
3. Create an email template
4. Copy your credentials to `.env.local`:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

See `.env.example` for reference.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with navbar
│   └── page.tsx            # Main single-page layout
├── components/
│   ├── Navbar.tsx          # Navigation with anchor links
│   ├── ProjectCard.tsx     # Project card component
│   ├── ProjectModal.tsx    # Modal for project details
│   └── sections/
│       ├── HeroSection.tsx     # Hero with bio and CTAs
│       ├── ProjectsSection.tsx # Software + photography projects
│       ├── SkillsSection.tsx   # Skills display
│       └── ContactSection.tsx  # Contact form + info
├── data/
│   ├── profile.ts          # Personal information
│   ├── projects.ts         # Project data (software + photography)
│   └── skills.ts           # Technical and creative skills
└── styles/
    └── globals.css         # Global styles + smooth scroll
```

## Build for Production

```bash
npm run build
npm run start
```

## Deploy on Vercel

The easiest way to deploy is using the [Vercel Platform](https://vercel.com/new).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
