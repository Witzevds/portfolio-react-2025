export const portfolioData = {
  about: {
    name: "Witze",
    title: "Web Developer & AI Innovator",
    image: "/images/hero-profile.png",
    description:
      "Web Development & Interactive Media student at Arteveldehogeschool. Specializing in Drupal development and AI integrations. Featured at DrupalCon Vienna 2025 DriesNote for innovative Figma-to-Drupal workflow.",
    links: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/witze-van-der-straeten-705731193/",
        image: "/images/linkedin.svg",
      },
    ],
  },
  journey: {
    education: [
      {
        period: "Sep 2025 — Sep 2027",
        title: "Bachelor's · Interactive Media Design",
        place: "Arteveldehogeschool · Ghent",
        description:
          "Hands-on training in web, game and interactive experience development — design, coding, AR/VR and physical computing. Focused on real client projects, teamwork, entrepreneurship and creative digital solutions.",
      },
      {
        period: "Sep 2023 — Jul 2025",
        title: "Web / Multimedia Management & Webmaster",
        place: "Arteveldehogeschool · Ghent",
        description:
          "Full-stack web foundation — CSS, Laravel and the multimedia side of running modern web platforms.",
      },
      {
        period: "Jan 2022 — Jun 2022",
        title: "Bachelor's · Graphic Design",
        place: "Arteveldehogeschool · Ghent",
        description:
          "Editorial design grounding in Adobe InDesign and Photoshop before pivoting to web.",
      },
      {
        period: "Aug 2015 — Jul 2021",
        title: "Secondary · Accounting & Bookkeeping",
        place: "Vijverbeek",
        description:
          "Business and bookkeeping background that still shapes how I think about pricing, invoicing and running freelance work.",
      },
    ],
    experience: [
      {
        period: "Nov 2025 — Now",
        title: "Drupal Front-end Developer · AI integration",
        place: "Coworks · Contract · Remote",
        description:
          "Front-end work focused on AI-powered workflows and Drupal component architecture. Currently migrating a Vue 2 front-end to Single Directory Components (SDCs), using GitHub Copilot to streamline the build.",
      },
      {
        period: "Nov 2024 — Jul 2025",
        title: "Order picker · night shift",
        place: "Delhaize Belgium · Zellik · Contract",
        description:
          "Driving through the freezers at night to prepare and organise distribution orders. Pays the bills while school and dev work fill the day.",
      },
      {
        period: "Apr 2025 — Jun 2025",
        title: "Full-stack Developer · intern",
        place: "Calibrate · Ghent · Internship",
        description:
          "Built and maintained Drupal web apps across front- and back-end. Researched and prototyped AI-driven workflows — connecting Figma's MCP server to Drupal's Experience Builder to auto-generate components.",
      },
      {
        period: "Oct 2022 — Aug 2023",
        title: "Order Picker",
        place: "Delhaize Belgium · Flemish Region · Contract",
        description:
          "First long-term student job — order management, working in a team, and a lot of French.",
      },
    ],
  },
  skills: [
    { name: "Drupal", image: "/icons/drupal.svg" },
    { name: "React", image: "/icons/react.svg" },
    { name: "CSS", image: "/icons/css.svg" },
    { name: "JavaScript", image: "/icons/js.svg" },
    { name: "Ai", image: "/icons/ai.svg" },
    { name: "CraftCMS", image: "/icons/craft.svg" },
    { name: "Laravel", image: "/icons/laravel.svg" },
  ],
  projects: [
    {
      id: 5,
      title: "CropTalk – AI-Powered Language Learning Game for Kids",
      image: "/images/projects/croptalk/1.png",
      description:
        "A browser-based farming game where kids aged 8–12 learn a new language through a friendly farmer named Pierre — every question generated live by Claude AI, adapted to age, level, and topics they personally struggle with.",
      longDescription: `> A game where language is the key — not the punishment.

CropTalk is a browser-based language-learning game for kids aged 8–12. Children plant crops on a pixel-art farm, and a virtual teacher named Pierre asks them context-aware questions in the language they're learning. Every question is generated live by Claude AI, adapted to the child's age, level, native language, and the topics they personally struggle with — across **14 native languages × 14 target languages**.

## The problem

Belgian primary education is sliding. Three separate numbers, one common thread — language:

- PISA scores have dropped **52 points in Flanders** between 2003 and 2022
- **One in four pre-schoolers** doesn't speak Dutch at home
- Over **2,000 primary-school teachers** will be missing by 2026

Kids who don't master the language of instruction fall behind in everything: maths, reading, social interaction. Already-overloaded teachers have to compensate.

Existing apps like Duolingo are great for adults but feel transactional for kids: scripted exercises, fixed answer sets, zero contextual humour, no game loop that pulls them back. They're also English-first — useless for a Romanian-speaking child in Antwerp who needs to learn Dutch.

## The solution

A playful farming game with a learning loop baked into every interaction. Kids plant a crop, Pierre asks a question in the target language, a correct answer plants the seed and starts the timer — wrong answers are remembered and brought back later.

### Core game loop

1. Plant a crop
2. Answer Pierre's question
3. Wait for growth
4. Harvest
5. Sell, or bake into bread
6. Buy fertilizer or quality upgrades
7. Unlock new crops via a 5-question test

### Adaptive teacher

Pierre is not a fixed quiz. Every question is generated live by Claude.

- **6 topic categories** — food, colors, nature, numbers, greetings, actions
- Each topic tracked with **ELO-style scoring** — +20 for correct, −10 for wrong, capped 0–2000
- **70%** of questions target the child's current weakest topic, **30%** randomized for variety
- Skill tier (beginner → developing → confident → advanced) tunes difficulty per topic

### Negotiation dialogue

In the shop, kids can earn 25% discounts by answering shop-context questions in the target language ("Ask politely for a discount", "Thank the shopkeeper") — turning every purchase into a real-world dialogue.

## Key features

- **14 × 14 languages = 196 combinations**, including Romanian and Russian based on Belgian preschool demographics
- **Live AI question generation** via AWS Bedrock + Claude 3.5 Haiku, with multi-model fallback
- **Per-topic skill garden** in the profile — six plants that visibly grow through three stages as the child masters each topic
- **Adaptive targeting** — Pierre remembers wrongly answered words and brings them back
- **5-question unlock tests** at B1 level to gate new crops
- **Bakery, Water Pump, Shop** — sub-locations, each with their own dialogue context
- **Watering can** to speed up crop growth (drag-and-drop on desktop, tap-to-select on mobile)
- **Onboarding in 14 languages** with self-identifying labels in the user's own script
- **GDPR + COPPA compliant** — EU-hosted data, no ads, no third-party tracking, full account deletion
- **Offline harvest claim** — crops that finished growing while away show up in a welcome-back popup

## Architecture

A focused, lean stack designed for low operational cost:

- **React 18 + Vite + TypeScript** for the UI shell
- **Phaser 3** for the actual farm rendering (canvas / WebGL with pixel-perfect retina text)
- **Supabase** for auth, database, and edge functions (region: EU-West)
- **AWS Bedrock** running Claude 3.5 Haiku for live question generation
- **react-i18next** for runtime language switching, no rebuild needed
- **Netlify** for static hosting and CI

### Topic-targeted prompt engineering

Instead of one giant catch-all prompt, the edge function picks subtopic and question-type from a topic-specific pool. So when "numbers" is the focus topic, the AI never gets asked to fill numbers into a soup-related sentence — the real bug ("Il ___ carotte dans la soupe : cinq, deux, trois?") that triggered the rewrite. The prompt was trimmed from ~2500 to ~700 characters in the v20 cleanup, with stricter same-part-of-speech rules.

### Server-side topic tagging

The Claude response no longer needs to self-tag the topic. The server picks it deterministically and writes it back into the response — eliminating an entire class of mistagged questions.

### Asymmetric ELO-like skill tracking

+20 for correct, −10 for wrong (asymmetric so motivated kids slowly progress even with mistakes). Stored in a *topic_scores* JSONB column per user, visualized in the Profile page as six plants growing through real Sprout Lands sprite frames.

### Dual-write safety net for plot state

Plant and harvest are critical state — losing them feels punishing. The *useProfile* hook uses an immediate-save path that cancels any pending debounced write before firing, plus a *sanitizePlotStates* filter on load that drops corrupted historical entries. This came from a real bug where two plot-planted events raced.

### Sprite-sheet introspection

The Sprout Lands "Farming Plants.png" docs were misleading — turned out to be 14 plant types × 4 growth stages, not 5 plants × 15 stages as the original code assumed. Inspected pixel-by-pixel via a debug overlay in-browser, then rebuilt the mapping for both the in-game farm and the profile skill-garden.

### Multilingual at scale

- All UI text via *t()* keys, 14 locale JSON files
- Dynamic UI language switching that also updates *<html lang>* and *dir* (RTL for Arabic)
- Hero animation — the target language name cycles through all 14 languages every 2.2s, in the viewer's own UI language. Layout-shift-free via a CSS inline-grid trick.
- Locale-aware crop names — "graan" stays generic, but the carrot was renamed to "Sla / Lettuce / Laitue / Salat" everywhere because the actual sprite was a leafy plant, not an orange root.

### Account deletion

A dedicated *delete-account* edge function uses the service-role key to wipe both *profiles* and *auth.users* in one atomic flow. The user has to type their own email to confirm — no "request deletion via support email and wait", actual one-click compliance.

## Outcome

A language-learning game that:

- Kids return to voluntarily because the farming loop pulls them back
- Adapts to what they personally struggle with, not a fixed curriculum
- Works for kids whose home language is one of 14 supported tongues (covering the biggest non-Dutch communities in Flanders)
- Costs the operator about **$0.0003 per question** (Bedrock Haiku rate) — sustainable enough to stay free during beta
- Is operationally tiny: one edge function for questions, one for delete, no servers to manage

## What's next

- **Berbers / Tamazight** support, deferred until a native-speaker review can be sourced
- **Parental dashboard** — see your child's per-topic progress and total practice time
- **Time limits** — parents can cap daily play time
- **Speech-to-text** for pronunciation practice through the Web Speech API
- **Class mode** — a teacher can spin up a class code and monitor progress for 20+ kids

## Lessons learned

- **Sprite sheets aren't documented — verify visually.** A 5-minute browser debug overlay saved hours of guessing.
- **Server-side authority beats AI self-reporting.** Asking Claude to tag its own output's topic seemed elegant; just doing it server-side cut a whole error class.
- **Locale fallbacks matter.** With *fallbackLng: 'en'*, partial translations are safe — ship structural changes first, refine wordings later.
- **Race conditions hide in await patterns.** The plot-disappearing bug was two *saveImmediate* calls racing into Supabase. Cancel pending debounce timers before firing immediate saves, always.
- **Pixel art forces honesty.** You can't fake a watering can — either it's at the right (col, row) of the sheet or it isn't. The constraint produces consistent visuals.
- **Right tool per problem.** Phaser for the canvas, React for overlays and forms, Supabase for everything stateful, Bedrock for the only thing that genuinely needs an LLM.`,
      skills: [
        "React 18 + TypeScript",
        "Vite",
        "Phaser 3",
        "Supabase",
        "PostgreSQL JSONB",
        "Deno Edge Functions",
        "AWS Bedrock + Claude 3.5 Haiku",
        "react-i18next (14 languages)",
        "Pixel-art design system",
        "GDPR + COPPA compliance",
        "Adaptive learning algorithms",
        "Phaser canvas / WebGL",
      ],
      images: [
        "/images/projects/croptalk/2.png",
        "/images/projects/croptalk/3.png",
        "/images/projects/croptalk/4.png",
        "/images/projects/croptalk/5.png",
        "/images/projects/croptalk/6.png",
        "/images/projects/croptalk/7.png",
        "/images/projects/croptalk/8.png",
        "/images/projects/croptalk/9.png",
        "/images/projects/croptalk/10.png",
        "/images/projects/croptalk/11.png",
        "/images/projects/croptalk/12.png",
      ],
      liveUrl: "https://croptalk.netlify.app/",
      hasDetailPage: true,
    },
    {
      id: 4,
      title: "Clearline – AI-Powered Website Workflow Platform",
      image: "/images/projects/clearline/1.png",
      description:
        "A white-label SaaS platform that helps web design agencies automate their entire client onboarding and design process — from brief to live website in days, not weeks.",
      longDescription: `> From client brief to live website — in days, not weeks.

Web design agencies lose hours every week on emails, hand-built mockups, revision rounds over WhatsApp, and chasing approvals. Clients get lost in the process and margins disappear into admin. Clearline replaces the whole flow with a single white-label portal.

## The problem

- Briefings ping-ponging through email
- A different Figma mockup hand-crafted for every client
- Revision rounds spread across mail, WhatsApp, calls
- Invoices and approvals chased manually
- Long lead times, frustrated clients, eroding margins

## The solution

A platform with three roles that hand off seamlessly:

### For the client
A personal link → smart questionnaire (short, standard, or in-depth) → AI generates **three** design variations in under 60 seconds → the client picks a favourite → receives a PDF design → requests revisions per section → pays through Stripe → live website handover.

### For the agency
Full dashboard with project overview, user management, invite codes, white-label customization (logo + brand colors), payment settings, an AI revision-brief generator, and a real-time activity feed.

### For the SaaS owner
Multi-agency overview, plan management (Free / Pro / Agency), token-usage analytics, and global settings.

## Key features

- **AI design generator** — AWS Bedrock + Claude generates three unique mockups from the questionnaire
- **Smart questionnaire** — three presets with conditional logic and autosave
- **Token-based usage limits** — monthly token budget per plan tier (50k / 500k / 2M) instead of crude project caps
- **White-label client portal** — every agency gets its own logo and palette in the client view
- **Revision system** — clients leave per-section feedback, AI generates revision prompts for the designer
- **Email automation** — n8n triggers transactional mails on every status change
- **Invite-code system** — agencies onboard clients through personal codes
- **Real-time activity feed** — Supabase Realtime, no polling
- **Stripe subscriptions** — webhook-driven plan upgrades
- **Multi-tenancy with RLS** — full per-agency data isolation through PostgreSQL Row-Level Security

## Architecture

A multi-tier SaaS stack where every responsibility has its own home:

- **React** frontend for the UI
- **Supabase** for data, auth, and file storage
- **Deno Edge Functions** for security-critical server logic
- **n8n** workflows for orchestration and AI choreography
- **AWS Bedrock** for LLM inference

### Smart solutions

- **Token-tracking via Edge Functions** — one central token-usage function with check / log actions tracks every AI call in real time per agency, with RPC aggregation for monthly totals
- **Three-step profile loading** — sidesteps RLS bottlenecks by fetching profile, agency, and owner-email separately instead of through one heavy join
- **Async webhook chains** — questionnaire → AI generation → mockup selection → revision flow, all idempotent and observable
- **Single source of truth for plans** — one *plans.js* config drives the frontend UI, the Edge Functions, and the business-logic limits
- **Plan-aware UI** — components like *TokenUsageWidget* render only for admin roles, with security checks at multiple layers

## Outcome

A platform that compresses a classic 2–4-week design process to a few days:

- Agencies spend up to **80% less time** on onboarding admin
- Clients get **three professional design options instantly** instead of waiting for a first mockup
- A fully transparent process — status is always visible to every party
- Pricing tiers (Free / Pro / Agency) that scale with the agency

## What's next

Automatic website generation from approved Figma designs through **Claude Sonnet** with multi-step tool-use. An approved Figma design becomes a production-ready static site (Astro + React + Tailwind) hosted on Cloudflare Pages — no manual development step in between.

## Lessons learned

- **Database design first.** A well-thought-out RLS model saves months of refactoring later.
- **Token-based limits beat project limits.** Fairer pricing and more flexibility for clients.
- **Single source of truth.** One config feeding 5+ subsystems prevents drift.
- **Async beats sync for long AI operations.** Webhooks plus status updates outclass blocking calls.
- **Right tool per problem.** n8n for orchestration, Edge Functions for security-critical logic, React for interactive UI.`,
      skills: [
        "React",
        "Vite",
        "Tailwind CSS",
        "Supabase",
        "PostgreSQL Row-Level Security",
        "Deno Edge Functions",
        "n8n workflow automation",
        "AWS Bedrock + Claude",
        "Stripe subscriptions",
        "Multi-tenant SaaS architecture",
        "Webhook-driven design",
        "GSAP",
      ],
      images: [
        "/images/projects/clearline/2.png",
        "/images/projects/clearline/3.png",
        "/images/projects/clearline/4.png",
        "/images/projects/clearline/5.png",
      ],
      liveUrl: "https://clearline.work/",
      hasDetailPage: true,
    },
    {
      id: 1,
      title: "CraftCMS Website for Sint-Coleta",
      image: "/images/projects/sint-coleta/1.png",
      description:
        "A modern, modular website for a fictional organization, built with CraftCMS and a custom design system.",
      longDescription: `> A modular CraftCMS site for a fictional organisation — design system first, content modelling second.

A school project where I built a complete CraftCMS website end-to-end: from content modelling and Twig templating to a consistent design language. The goal was to ship something that *felt* like a real client website, not a styled-up landing page.

## The brief

Build a marketing site for a fictional non-profit (Sint-Coleta) that:

- Has multiple page types — landing, about, news, contact
- Lets non-technical editors update content without touching code
- Looks polished and consistent across every page

## What I built

A CraftCMS install with custom **content types**, **matrix fields** for flexible page layouts, and a Twig template architecture that maps cleanly onto a small **design-token system** (colors, spacing, typography scales) — so the visual language stays consistent even as new pages get composed in the CMS.

### Highlights

- **Custom content types** for landing blocks, news items and contact info
- **Matrix-based page builder** so editors can compose pages from reusable sections
- **Design tokens in CSS** so spacing and color decisions live in one place
- **Responsive layout** without a framework — CSS Grid + custom utilities
- **DDEV-based local dev** so the project starts with a single command

## Tech stack

- **CraftCMS** + **Twig** templating
- Vanilla **CSS** with custom design tokens (no Tailwind — wanted to feel the cascade)
- **DDEV** for the local environment
- **Git** with feature branches

## Lessons learned

- **Content modelling beats CSS.** A clean matrix-field structure saved more time than any styling shortcut would have.
- **Design tokens scale even on small projects.** Two dozen variables turned "I'll just hard-code this color" into "let me update the token instead."
- **Twig is genuinely pleasant.** Coming from PHP templating, the inheritance and macros click fast.
- **DDEV >> XAMPP.** First time using it; never going back.`,
      skills: [
        "CraftCMS",
        "Twig",
        "Responsive CSS",
        "Design tokens",
        "Git",
        "Database management",
        "DDEV",
      ],
      images: [
        "/images/projects/sint-coleta/2.png",
        "/images/projects/sint-coleta/3.png",
        "/images/projects/sint-coleta/4.png",
        "/images/projects/sint-coleta/5.png",
        "/images/projects/sint-coleta/6.png",
      ],
      hasDetailPage: true,
    },
    {
      id: 2,
      title: "Gentse Luht – Data Visualisatie & API",
      image: "/images/projects/gentse-luht/2.png",
      description:
        "A playful React web app that 'sells' bottled Gentse lucht to raise awareness about air pollution, using real-time API data and creative data visualizations.",
      longDescription: `> A webshop that pretends to sell bottled Ghent air — to make you actually look at the AQI numbers.

Gentse Luht is a playful React web app dressed up as a webshop selling bottles of fresh Ghent air ("luht" in the local accent). The joke is the hook — once you're on the site, you're looking at real-time air-quality data and visualisations of how polluted our air actually is.

## The brief

A school assignment to build a data-driven web app around a real-world dataset. I wanted something that wasn't a dashboard — most data-viz school projects look the same. So I leaned into satire: present pollution data as if it were product packaging.

## The concept

- The landing page is a **fake webshop** — bottles, prices, "buy now" buttons
- Click a bottle and you get the **live AQI** for that city, side-by-side with what you'd be "buying"
- Compare cities, watch how the numbers change through the day, see the graphs degrade exactly when you'd hope they wouldn't

## What I built

A React + Vite frontend that:

- Fetches **live air-quality data** (AQI) from a public API
- Renders **city comparisons** with interactive graphs
- Mixes **p5.js** sketches for some of the more playful visuals
- Includes an **A-Frame** scene experiment for an immersive "inside the bottle" view

## Tech stack

- **React 18 + Vite** for the app shell
- **External AQI API** for live data
- **p5.js** for creative data visualisations
- **A-Frame** for a small WebVR experiment
- **CSS** — custom, no framework

## Lessons learned

- **Concept first, data second.** The pollution data was always going to be honest; the framing made people stop scrolling.
- **APIs need fallbacks.** First version broke when the AQI endpoint rate-limited. Caching + a graceful "data unavailable" state turned a bug into a non-event.
- **Mixing libraries is fine if you're disciplined.** React for the shell, p5 inside a single component, A-Frame on its own route — never let them touch each other's state.
- **Humour holds attention longer than urgency.** People closed serious dashboards immediately; the bottle gag bought me 30 seconds, which is all you need to deliver the point.`,
      skills: [
        "React",
        "Vite",
        "API integratie",
        "Data visualisatie",
        "p5.js",
        "A-Frame",
        "CSS",
        "Creatief concept",
      ],
      images: [
        "/images/projects/gentse-luht/1.png",
        "/images/projects/gentse-luht/3.png",
        "/images/projects/gentse-luht/4.png",
        "/images/projects/gentse-luht/5.png",
        "/images/projects/gentse-luht/6.png",
        "/images/projects/gentse-luht/7.png",
      ],
      hasDetailPage: true,
      liveUrl: "https://gentse-luht.onrender.com/",
    },
    {
      id: 3,
      title: "Blackout News",
      image: "/images/projects/blackout-news/1.png",
      description:
        "A moody React news website inspired by the film Nightcrawler, featuring a dark aesthetic and English content. The app fetches real news articles via an API and allows users to search, filter, and bookmark stories.",
      longDescription: `> A news app that feels like the opening credits of *Nightcrawler*.

Most news websites look like they were built by committee. Blackout News is the opposite — a moody, cinematic React app inspired by the film *Nightcrawler*, where every visual choice (typography, contrast, motion) leans into the late-night journalism aesthetic.

## The brief

Build a React app that fetches real data, lets users search and filter, and persists user state — but make it feel like a *thing*, not a generic CRUD demo.

## The look

- **Dark UI** with deep blacks, harsh contrast and small accent sparks
- **Cinematic typography** for headlines, restrained for body
- Layouts that feel **paginated** and editorial, not infinite-scroll feed

## What I built

- **Live news feed** powered by an external news API
- **Search + category filter** that updates in real time
- **Bookmarks** persisted to *localStorage* so favorites survive refreshes
- **Component-based architecture** — clean separation between feed, article card, and detail view

## Tech stack

- **React 18 + Vite** for the SPA
- External **news API** for article data
- Custom **CSS** with a dark-UI design language
- **localStorage** for bookmark persistence

## Lessons learned

- **Visual identity makes or breaks a school project.** Same APIs, same React patterns — but the look was what people remembered.
- **State management doesn't need a library here.** Local component state + a thin context for bookmarks beat reaching for Redux.
- **External APIs lie sometimes.** Empty arrays, malformed dates, missing thumbnails — defensive rendering isn't optional.
- **Restraint beats flourish.** First draft had way too many animations. Pulling 80% of them out made the remaining ones feel intentional.`,
      skills: [
        "React",
        "Vite",
        "CSS",
        "Dark UI design",
        "Component-based architecture",
        "State management",
      ],
      images: [
        "/images/projects/blackout-news/2.png",
        "/images/projects/blackout-news/3.png",
        "/images/projects/blackout-news/4.png",
        "/images/projects/blackout-news/5.png",
        "/images/projects/blackout-news/6.png",
        "/images/projects/blackout-news/7.png",
      ],
      hasDetailPage: true,
    },
    {
      id: 6,
      title: "KPOG – Member Platform for the Ghent Police Officers' Circle",
      image: "/images/projects/kpog/1.png",
      description:
        "A Laravel members' platform for a 38-year-old professional association in Ghent. Replaces scattered email sign-ups with one Dutch-language hub for news, events, and photos — fully managed from a Filament admin panel.",
      longDescription: `> Built for a real client, on a real shared-hosting budget, in the audience's own language.

The Kring van de Politieofficieren van Gent is a professional association of active and retired police officers, founded in 1987. They were still running on tools from the 1990s: events announced by email, sign-ups coming back as replies, photos lost on a shared drive. KPOG replaces that with a single members' platform.

## The problem

- Event registrations were lossy — different events need different info, but email free-text doesn't capture it consistently
- Member onboarding had no audit trail
- Posting news or photos was bottlenecked on one technical volunteer

## The solution

A Laravel app with two surfaces: a polished Dutch-language member site and a Filament admin panel where the board manages everything themselves.

### Killer feature — dynamic event registration

Events aren't a single fixed form. Each event type has its own set of fields (head-count, dietary preferences, emergency contacts) defined in the admin without writing code. Registration data is stored as JSONB so adding a new field next month doesn't require a migration. Capacity counts against the actual head-count, not just row count.

### Approval-based onboarding

Public sign-ups land in a separate *UserRequest* table with IP and user-agent captured. Admins approve or reject — only on approval is an actual user account created.

## Key features

- **Per-event-type dynamic forms** — admins compose registration fields without code
- **Member vs. non-member pricing** shown side-by-side on event cards
- **Live capacity counting** that respects multi-person sign-ups
- **News & photo albums** with rich-text editor and bulk upload via Filament
- **FullCalendar widget** in the admin with a public JSON endpoint
- **Honeypot anti-spam** + throttled login + audit-trailed access requests
- **Fully Dutch UI** — copy, validation messages, and admin labels

## Tech stack

A boring-on-purpose monolith — exactly the right call for a volunteer-maintained site:

- **Laravel 12 + PHP 8.2** for the app core
- **Filament 3.2** for the entire admin surface (10 resources, no custom admin code)
- **Blade + Tailwind 4** for the public site — no SPA, no hydration cost
- **MySQL 8**, hosted on **Combell** shared hosting (Belgian, GDPR-friendly)
- **DDEV** for local development

## Lessons learned

- **Filament earns its keep on small projects.** A board of 6 volunteers wants something that looks like every CMS they've used — not a custom admin.
- **Schema-less data isn't always sloppy.** JSONB for registration payloads sidesteps the schema-explosion of 5 event types with 5 different form shapes.
- **Two tables for sign-up > one with status flags.** Keeping pending requests out of the auth table is audit- and GDPR-friendly.
- **Boring stack, happy maintainers.** No queues, no Redis, no SPA — every problem can be debugged with *tail laravel.log*.
- **Write deploy docs for the actual host.** Combell-specific instructions save the next student two hours.`,
      skills: [
        "Laravel 12",
        "PHP 8.2",
        "Filament 3.2",
        "Blade + Tailwind 4",
        "MySQL 8",
        "JSONB schemas",
        "DDEV",
        "Combell deployment",
      ],
      images: [
        "/images/projects/kpog/2.png",
        "/images/projects/kpog/3.png",
        "/images/projects/kpog/4.png",
        "/images/projects/kpog/5.png",
        "/images/projects/kpog/6.png",
      ],
      liveUrl: "https://www.kpog-test.be/",
      hasDetailPage: true,
    },
  ],
  blogs: [
    {
      id: 9,
      slug: "figma-to-drupal-sdc",
      title: "Generating Drupal Components with Figma and AI",
      description:
        "How to automatically convert Figma components into working Drupal UI Patterns using Copilot and MCP.",
      date: "June 2025",
      markdownFile: "figma-to-drupal-sdc.md",
    },
    {
      id: 5,
      slug: "nestle-skillathon-day-1-reflection",
      title: "Day 1: The Power of Marketing, Innovation & Entrepreneurship",
      description:
        "A reflection on building culture brands in an era where being heard meaningfully has never been harder.",
      date: "November 2025",
      markdownFile: "nestle-skillathon-day-1.md",
    },
    {
      id: 6,
      slug: "nestle-skillathon-day-2",
      title: "Day 2: AI Won't Steal Your Job (But Someone Using AI Might)",
      description:
        "Digital Innovation, Data Strategy, and Why Being Human Still Matters at Nestlé.",
      date: "November 2025",
      markdownFile: "nestle-skillathon-day-2.md",
    },
    {
      id: 7,
      slug: "nestle-skillathon-day-3",
      title:
        "Day 3: The Power of YOU (And Why Your Mental Health Matters More Than Your LinkedIn)",
      description:
        "Job market reality checks, LinkedIn mastery, and learning that it's okay to not be okay.",
      date: "November 2025",
      markdownFile: "nestle-skillathon-day-3.md",
    },
    {
      id: 8,
      slug: "nestle-skillathon-day-4",
      title: "Day 4: Green Skills and Why Saving the Planet Is Actually a Job",
      description:
        "Climate change, regenerative agriculture, and why the best sustainability careers don't have 'sustainability' in the title.",
      date: "November 2025",
      markdownFile: "nestle-skillathon-day-4.md",
    },
  ],
};
