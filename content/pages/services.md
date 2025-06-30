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
      color: text-[#BF360C] # deep orange for visibility
    subtitle: Your partner in scalable business and technology solutions.
    colors: bg-gradient-to-br-from-[#FFE0B2]-via-[#FFCC80]-to-[#FFB74D] # slightly darker gradient
    styles:
      self:
        padding:
          - pt-28
          - pb-24
          - pl-4
          - pr-4
        animation:
          - fade-down
        boxShadow: xl
        textAlign: center
        borderRadius: xl
        transition: all 0.4s ease-in-out
      title:
        fontWeight: 900
        fontSize: 7xl
        textTransform: uppercase
        letterSpacing: widest
        hover:
          transform: scale-105
          transition: transform 0.3s ease-in-out
      subtitle:
        fontSize: xl
        fontWeight: 500
        margin:
          - mt-4
        color: text-[#4E342E] # readable brown-grey tone

  # ──────── BUSINESS CONSULTING ────────
  - type: FeaturesSection
    elementId: business-consulting
    title: Business Consulting
    subtitle: Strategic guidance to optimize and grow your operations.
    text: >
      We provide expert advisory across finance, HR, and transformation initiatives.
      Our approach combines industry best practices with actionable strategy that aligns with your goals.
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
      subtitle:
        textAlign: center

  # ─────────────────── SLIM DIVIDER ───────────────
  - type: DividerSection
    colors: bg-[#FFB74D]
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
    subtitle: Scalable tech teams, on-demand.
    text: >
      Whether you need frontend, backend, full‑stack developers, or cloud experts — we deliver trusted talent fast.
      Flexible, vetted, and ready to build.
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
      subtitle:
        textAlign: center

  # ─────────────────── SLIM DIVIDER ───────────────
  - type: DividerSection
    colors: bg-[#FF7043]
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
      subtitle:
        textAlign: center

bottomSections: []
---
