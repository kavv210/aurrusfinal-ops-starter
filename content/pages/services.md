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

sections:
  # ─────────────── HEADER SECTION ───────────────
  - type: HeroSection
    elementId: services-hero
    title:
      text: OUR SERVICES
      type: TitleBlock
      className: >
        text-6xl sm:text-7xl font-semibold tracking-widest uppercase
        text-[#1E88E5] transition-all duration-300 ease-in-out
        hover:text-[#FFA500] hover:scale-105
    subtitle:
      text: Your partner in scalable business and technology solutions.
      className: >
        text-2xl sm:text-3xl font-semibold text-[#5D4037]
    styles:
      self:
        background: bg-gradient-to-br from-[#FFE0B2] via-[#FFD180] to-[#FFE0C3]
        padding:
          - pt-20
          - pb-16
          - pl-8
          - pr-8
        textAlign: center
        boxShadow: xl
        borderRadius: xl

  # ──────── BUSINESS CONSULTING ────────
  - type: FeaturesSection
    elementId: business-consulting
    title: Business Consulting
    subtitle: Strategic guidance to optimize and grow your operations.
    text: >
      We provide expert advisory across finance, HR, and transformation initiatives.
      Our approach combines industry best practices with actionable strategy that aligns with your goals.
      At Aurrus Consulting, we help businesses untangle complex challenges and navigate critical change.
      Our consultants bring deep sector knowledge to create lasting value through strategic direction.
    image:
      url: /images/consult-vector.svg
      altText: Business consulting vector
    imagePosition: right
    colors: bg-[#FFE0B2]-fg-dark
    styles:
      self:
        padding:
          - pt-20
          - pb-20
        animation:
          - fade-up
      title:
        textAlign: center
        className: font-semibold
      subtitle:
        textAlign: center
        className: font-semibold

  # ─────────────────── SLIM DIVIDER ───────────────
  - type: DividerSection
    colors: bg-[#BDBDBD]
    styles:
      self:
        height: xs
        padding:
          - pt-2
          - pb-2

  # ──────── IT STAFFING ────────
  - type: FeaturesSection
    elementId: it-staffing
    title: IT Staffing & Solutions
    subtitle: Scalable tech teams, on‑demand.
    text: >
      Whether you need frontend, backend, full‑stack developers, or cloud experts — we deliver trusted talent fast.
      Flexible, vetted, and ready to build.
      Aurrus Consulting ensures every placement is aligned with your culture and goals.
      Our agile staffing model is built to scale with your vision and timelines.
    image:
      url: /images/it-vector.svg
      altText: IT staffing illustration
    imagePosition: left
    colors: bg-[#FFF3E0]-fg-dark
    styles:
      self:
        padding:
          - pt-20
          - pb-20
        animation:
          - fade-right
      title:
        textAlign: center
        className: font-semibold
      subtitle:
        textAlign: center
        className: font-semibold

  # ─────────────────── SLIM DIVIDER ───────────────
  - type: DividerSection
    colors: bg-[#BDBDBD]
    styles:
      self:
        height: xs
        padding:
          - pt-2
          - pb-2

  # ──────── TALENT ACQUISITION ────────
  - type: FeaturesSection
    elementId: talent-acquisition
    title: Talent Acquisition
    subtitle: Hiring with precision and insight.
    text: >
      From executive searches to bulk hiring — our recruitment experts tailor solutions to your scale.
      End‑to‑end hiring support that drives real business impact.
      At Aurrus Consulting, we believe great teams are the foundation of great companies.
      We use smart data and human insight to identify top-tier candidates faster and better.
    image:
      url: /images/talent-vector.svg
      altText: Talent acquisition vector
    imagePosition: right
    colors: bg-[#FFCCBC]-fg-dark
    styles:
      self:
        padding:
          - pt-20
          - pb-20
        animation:
          - fade-left
      title:
        textAlign: center
        className: font-semibold
      subtitle:
        textAlign: center
        className: font-semibold

bottomSections: []
---
