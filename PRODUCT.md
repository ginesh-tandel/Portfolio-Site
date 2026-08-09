# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: CTOs, founders, engineering managers, product leaders, technical recruiters, startup teams, and international consulting clients evaluating Ginesh Tandel for senior engineering, architecture, or SaaS product-building engagements. They are scanning a personal portfolio to judge seniority, systems thinking, and business fluency, not just code output.

## Product Purpose

A premium personal portfolio for Ginesh Tandel, a senior .NET full-stack engineer, software architect, and SaaS/product builder (LogiqCube Consulting). It exists to communicate, through an immersive scroll-driven narrative, that he does not just write code but understands business problems, designs systems, builds products, modernizes legacy software, and ships production-ready solutions. Success is a visitor (CTO, founder, recruiter) coming away with a clear read on his seniority and business fluency, and a subset converting into a real conversation via the closing CTA.

## Positioning

The narrative spine is **CODE → ARCHITECTURE → SYSTEM → PRODUCT → IMPACT → HUMAN**: every section visually evolves from the previous one so the whole site reads as one continuous story of a product being built, rather than a static list of skills and projects. This distinguishes it from a generic developer portfolio, resume site, SaaS landing page, or animation showcase (all explicitly rejected in the original brief, `Prompt.md`).

## Operating Context

Single-page React 19 + Vite app (`App.jsx`), GSAP + ScrollTrigger for scene choreography, Lenis for smooth scroll, no backend/CMS - all content is structured JS data inside components (`Timeline.jsx`, `Products.jsx`). Full design brief lives at `Prompt.md` (the original creative direction: 10 numbered "scenes" from cold-open through CTA, plus explicit anti-goals and a hard content-integrity rule). Deployed at `ginesh.dev`.

## Capabilities and Constraints

- Real shipped products referenced: **LogiqLead** (SaaS lead management platform - lead enrichment, email sequences, automation, SMTP/IMAP, analytics) and **LogiqAIAssist** (AI knowledge/workflow engine). Additional selected work: CRM Platform (legacy modernization), Legacy Modernization, API Platform.
- Career timeline (2015-2026, confirmed real, see Evidence below) is the authoritative source for role history; do not alter years/roles without the user's explicit confirmation.
- Hard content rule from the brief (`Prompt.md` line ~837): never invent fake achievements, clients, metrics, or revenue numbers. Where measurable data isn't available, communicate scope/complexity instead of fabricating precision.
- Reduced-motion must degrade gracefully: disable cinematic scroll choreography, keep content fully accessible, preserve narrative structure via simple fades (brief requirement; partially implemented, GSAP entrance tweens are `timeScale`-collapsed under `prefers-reduced-motion`, scrub-tied parallax is not yet reduced).
- Never allow horizontal overflow, mobile is intentionally redesigned per-section (not a scaled-down desktop), and the "SCENE 0X" eyebrow labels + `SCROLL TO BUILD →` cue are explicit, deliberate elements named in the original brief, not incidental copy.

## Brand Commitments

- Name: Ginesh Tandel. Business: LogiqCube Consulting. Product family prefix: "Logiq" (LogiqLead, LogiqAIAssist).
- Voice: concise, evidence-based, no generic passion statements ("I love solving problems" is explicitly banned in the brief).
- Visual system: dark editorial/cinematic aesthetic, JetBrains Mono + Space Grotesk + Inter, teal accent (`#5EEAD4`), restrained premium color system - explicitly rejects glassmorphism, gradient blobs, neon/cyberpunk, floating skill pills, generic rounded cards, stock illustrations, and excessive terminal/particle effects (`Prompt.md`, "DESIGN DIRECTION" and "Avoid" sections).
- Contact: hello@ginesh.dev, github.com/gineshtandel, linkedin.com/in/gineshtandel.

## Evidence on Hand

- Timeline (`components/Timeline.jsx`): 2015 Software Developer -> 2018 Full-Stack .NET Developer -> 2021 Senior .NET Engineer -> 2024 Software Architect & Consultant -> 2026 Senior Full-Stack Engineer & SaaS Builder. Confirmed real career history (user-confirmed during init).
- Products (`components/Products.jsx`): LogiqLead, LogiqAIAssist as featured case studies; CRM Platform, Legacy Modernization, API Platform as additional work. Confirmed real (user-confirmed during init).
- No testimonials, client logos, press mentions, or quantitative outcome metrics currently on the site. The brief explicitly says not to invent these - absence is intentional, not a gap to fill with fabricated numbers.

## Product Principles

1. One continuous story, not a section grid: each scene visually evolves from the last (code to architecture to system to product to business to human).
2. Evidence over claims: real products and a real timeline stand in for testimonials/metrics that don't exist yet.
3. Restraint over spectacle: motion must explain a transformation, never exist "because it looks impressive" (explicit brief principle).
4. Business fluency alongside technical depth: every technical scene is paired with a business-facing payoff (architecture -> "isn't about adding complexity, it's about making complexity manageable"; products -> business impact).
5. Progressive credibility: the intended emotional arc is curiosity -> understanding -> credibility -> technical confidence -> business confidence -> trust -> conversation, not a five-second wow-then-plateau.

## Accessibility & Inclusion

Brief requires: semantic HTML, accessible navigation, keyboard navigation, proper focus states, `prefers-reduced-motion` support (see Capabilities and Constraints for current gap), no horizontal overflow on any viewport, WCAG-accessible contrast within the defined color system.
