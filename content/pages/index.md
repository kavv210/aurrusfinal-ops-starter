---
title: Home
slug: /
type: PageLayout
__metadata:
  modelName: PageLayout

seo:
  metaTitle: Home - Aurrus
  metaDescription: Aurrus Consulting Main Site.
  socialImage: /images/main-hero.jpg
  type: Seo

# ───────────────── Sections Array ─────────────────
sections:

  # ───────── 1) HERO ─────────
  - type: GenericSection
    __metadata:
      modelName: GenericSection
    motion: fade-down
    title:
      text: Accelerate Growth With Aurrus.
      type: TitleBlock
    subtitle: Where strategy meets speed.
    text: >
      At Aurrus Consulting, we connect bold ambition with precise execution.
      Our digital‑first strategies scale faster, perform smarter, and deliver
      measurable outcomes. With deep BPO, KPO, and ITeS expertise, we help
      organizations streamline operations, align teams, and lead with
      confidence.
    actions:
      - label: Get started
        url: /
        icon: arrowRight
        iconPosition: right
        style: secondary
        type: Button
    media:
      url: /images/main-hero-new.svg
      altText: Aurrus Consulting Hero
      type: ImageBlock
    badge:
      label: Smarter workflows. Stronger results.
      color: text-primary
      type: Badge
    colors: bg-light-fg-dark
    styles:
      self:
        alignItems: center
        flexDirection: row
        padding: [pt-16, pl-16, pb-16, pr-16]
      title:
        className: >
          text-4xl sm:text-5xl font-extrabold tracking-tight
          text-dark transition-transform duration-300 hover:scale-105

  # ───────── 2) WHY AURRUS (3‑card) ─────────
  - type: FeaturedItemsSection
    __metadata:
      modelName: FeaturedItemsSection
    motion: fade-up
    title:
      text: Why Aurrus?
      type: TitleBlock
    items:
      - type: FeaturedItem
        __metadata: { modelName: FeaturedItem }
        title: Business Strategy Consulting
        subtitle: Transform with Clarity
        text: >
          We provide strategic guidance to help organizations navigate change and
          optimise performance. From business model innovation to operational
          restructuring and market strategy, our consultants deliver clear,
          data‑driven solutions.
        image: { url: /images/icon1.svg, altText: Strategy icon, type: ImageBlock }
        colors: bg-neutralAlt-fg-dark
        styles:
          self:
            padding: [p-8]
            borderRadius: x-large
            flexDirection: row
            textAlign: left
          subtitle:
            className: text-xl font-bold text-dark

      - type: FeaturedItem
        __metadata: { modelName: FeaturedItem }
        title: Vision & Values Aligned
        subtitle: Refine Core Structure
        text: >
          We help organisations build resilience and drive sustainable growth by
          reshaping structures, refining governance, and fostering high‑impact
          leadership. Our tailored approaches ensure alignment between culture,
          capabilities, and strategic priorities.
        image: { url: /images/icon2.svg, altText: OD icon, type: ImageBlock }
        colors: bg-neutralAlt-fg-dark
        styles:
          self:
            padding: [p-8]
            borderRadius: x-large
            flexDirection: row
            textAlign: left
          subtitle:
            className: text-xl font-bold text-dark

      - type: FeaturedItem
        __metadata: { modelName: FeaturedItem }
        title: Program & Project Advisory
        subtitle: Deliver with Precision
        text: >
          We guide initiatives from concept to completion by aligning stakeholder expectations,
          refining delivery frameworks, and managing timelines, risks, and resources.
          Our hands‑on approach ensures project clarity, accountability, and measurable outcomes.
          We enable execution excellence while aligning with your strategic goals and business priorities.
        image: { url: /images/icon3.svg, altText: Advisory icon, type: ImageBlock }
        colors: bg-neutralAlt-fg-dark
        styles:
          self:
            padding: [p-8]
            borderRadius: x-large
            flexDirection: row
          subtitle:
            className: text-xl font-bold text-dark

    badge: { label: Client‑Centred Outcomes, color: text-primary, type: Badge }
    actions:
      - { label: Get started, url: /, icon: arrowRight, iconPosition: right, style: primary, type: Button }
    variant: three-col-grid
    colors: bg-neutral-fg-dark
    styles:
      self: { padding: [pt-16, pb-16, pl-16, pr-16] }
      title:
        className: >
          text-3xl sm:text-4xl font-extrabold tracking-tight
          text-dark transition-transform duration-300 hover:sca
