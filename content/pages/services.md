---
title: Services
slug: services
type: PageLayout
styles:
  title:
    textAlign: center
seo:
  metaTitle: Services - Aurrus
  metaDescription: >
    Explore our core service offerings: Business Consulting, IT Staffing, and Talent Acquisition.
  socialImage: /images/img-placeholder.svg

topSections:
  # ─────────────── HEADER SECTION ───────────────
  - type: HeroSection
    elementId: services-hero
    title:
      text: OUR SERVICES
      type: TitleBlock
      className: >
        [data-aos="fade-down"] [data-aos-duration="700"]
        text-4xl sm:text-5xl font-extrabold tracking-widest uppercase
        text-white transition-transform duration-300 ease-in-out
        hover:scale-105
    subtitle: Your partner in scalable business and technology solutions.
    styles:
      self:
        className: >
          [data-aos="fade-down"] [data-aos-duration="700"]
          bg-gradient-to-br from-[#FF6F00] via-[#FFA726] to-[#FFE0B2]
          pt-20 pb-16 px-4 text-center shadow-xl rounded-xl
          flex flex-col items-center justify-center
      subtitle:
        className: mt-4 text-xl text-orange-100 max-w-2xl

sections:
  # ──────── BUSINESS CONSULTING ────────
  - type: FeaturesSection
    elementId: business-consulting
    title: Business Consulting
    subtitle: Strategic guidance to optimize and grow your operations.
    text: >
      We provide expert advisory across finance, HR, and transformation initiatives.
      Our approach combines industry best practices with actionable strategy that aligns with your goals.
    image: /images/consult-vector.svg
    imagePosition: right
    colors: bg-neutralAlt-fg-dark
    styles:
      self:
        padding: [pt-24, pb-24]
        animation: [fade-up]
      title: { textAlign: center }
      subtitle: { textAlign: center }

  # ─────────────────── SLIM DIVIDER ───────────────
  - type: DividerSection
    colors: bg-[#FFB74D]
    styles:
      self:
        height: xs
        padding: [pt-2, pb-2]

  # ──────── IT STAFFING ────────
  - type: FeaturesSection
    elementId: it-staffing
    title: IT Staffing & Solutions
    subtitle: Scalable tech teams, on‑demand.
    text: >
      Whether you need frontend, backend, full‑stack developers, or cloud experts — we deliver trusted talent fast.
      Flexible, vetted, and ready to build.
    image: /images/it-vector.svg
    imagePosition: left
    colors: bg-light-fg-dark
    styles:
      self:
        padding: [pt-24, pb-24]
        animation: [fade-right]
      title: { textAlign: center }
      subtitle: { textAlign: center }

  # ─────────────────── SLIM DIVIDER ───────────────
  - type: DividerSection
    colors: bg-[#FF7043]
    styles:
      self:
        height: xs
        padding: [pt-2, pb-2]

  # ──────── TALENT ACQUISITION ────────
  - type: FeaturesSection
    elementId: talent-acquisition
    title: Talent Acquisition
    subtitle: Hiring with precision and insight.
    text: >
      From executive searches to bulk hiring — our recruitment experts tailor solutions to your scale.
      End‑to‑end hiring support that drives real business impact.
    image: /images/talent-vector.svg
    imagePosition: right
    colors: bg-neutral-fg-dark
    styles:
      self:
        padding: [pt-24, pb-24]
        animation: [fade-left]
      title: { textAlign: center }
      subtitle: { textAlign: center }

bottomSections: []
---
### What changed?
* **Gradient + padding + rounded block** are in `styles.self.className`.
* **AOS attributes** (`data-aos="fade-down" data-aos-duration="700"`) now attach to the section via the same `className` trick.
* We kept `pt-20 pb-16` so the header is shorter.
* All other sections untouched—just moved under the expected `sections:` key.  

Commit → push → Netlify redeploy ➜ your header will finally fade‑down on load. Ping me once it’s live!
