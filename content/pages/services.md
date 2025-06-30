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
  # ─────────────── CUSTOM HEADER BLOCK ───────────────
  - type: GenericSection
    colors: bg-gradient-to-r-from-[#FFA726]-via-[#FB8C00]-to-[#F57C00]
    styles:
      self:
        padding:
          - pt-20
          - pb-16
    elements:
      - type: TitleBlock
        text: SERVICES
        color: text-white
        styles:
          self:
            textAlign: center
            fontWeight: 900
            fontSize: 4xl
            textTransform: uppercase
            letterSpacing: widest

      - type: TextBlock
        text: Trusted business and technology solutions designed to scale your success.
        styles:
          self:
            textAlign: center
            fontSize: lg
            fontWeight: 500
            color: text-white

  # ──────────────── BUSINESS CONSULTING ───────────
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
          - pt-24
          - pb-24
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

  # ───────────────── IT STAFFING ───────────────────
  - type: FeaturesSection
    elementId: it-staffing
    title: IT Staffing & Solutions
    subtitle: Scalable tech teams, on-demand.
    text: >
      Whether you need frontend, backend, full-stack developers, or cloud experts — we deliver trusted talent fast.
      Flexible, vetted, and ready to build.
    image:
      url: /images/it-vector.svg
      altText: IT staffing illustration
    imagePosition: left
    colors: bg-[#FFF3E0]-fg-dark
    styles:
      self:
        padding:
          - pt-24
          - pb-24
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

  # ─────────────── TALENT ACQUISITION ─────────────
  - type: FeaturesSection
    elementId: talent-acquisition
    title: Talent Acquisition
    subtitle: Hiring with precision and insight.
    text: >
      From executive searches to bulk hiring — our recruitment experts tailor solutions to your scale.
      End-to-end hiring support that drives real business impact.
    image:
      url: /images/talent-vector.svg
      altText: Talent acquisition vector
    imagePosition: right
    colors: bg-[#FFCCBC]-fg-dark
    styles:
      self:
        padding:
          - pt-24
          - pb-24
        animation:
          - fade-left
      title:
        textAlign: center
      subtitle:
        textAlign: center

bottomSections: []
---
