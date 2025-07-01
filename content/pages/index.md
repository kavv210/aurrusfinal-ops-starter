---
title: Home
slug: /
type: PageLayout            # Page model = PageLayout
__metadata:
  modelName: PageLayout

# ───────────────── SEO ─────────────────
seo:
  metaTitle: Aurrus‑Home
  metaDescription: Aurrus Consulting Main Site.
  socialImage: /images/main-hero.jpg
  type: Seo

# ───────────────── Sections Array ─────────────────
sections:

  # ───────── 1) HERO ─────────
  - type: GenericSection
    __metadata:
      modelName: GenericSection
    motion: fade-up
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
      url: /images/main-hero.svg
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
      # Card 1
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
        styles: { self: { padding: [p-8], borderRadius: x-large, flexDirection: row, textAlign: left } }

      # Card 2
      - type: FeaturedItem
        __metadata: { modelName: FeaturedItem }
        title: Organisational Development
        subtitle: Strengthen Internal Structure
        text: >
          We enhance the health and adaptability of your organisation—designing
          operating models, refining governance, and aligning leadership with
          business goals.
        image: { url: /images/icon2.svg, altText: OD icon, type: ImageBlock }
        colors: bg-neutralAlt-fg-dark
        styles: { self: { padding: [p-8], borderRadius: x-large, flexDirection: row, textAlign: left } }

      # Card 3
      - type: FeaturedItem
        __metadata: { modelName: FeaturedItem }
        title: Program & Project Advisory
        subtitle: Deliver with Precision
        text: >
          From aligning stakeholder expectations to managing timelines and budgets,
          our hands‑on advisory ensures every initiative lands successfully.
        image: { url: /images/icon3.svg, altText: Advisory icon, type: ImageBlock }
        colors: bg-neutralAlt-fg-dark
        styles: { self: { padding: [p-8], borderRadius: x-large, flexDirection: row } }

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
          text-dark transition-transform duration-300 hover:scale-105

  # ───────── 3) TRUSTED LOGOS MARQUEE ─────────
  - type: ImageGallerySection
    __metadata: { modelName: ImageGallerySection }
    motion: move-to-left
    subtitle: Award‑winning enterprises trust us
    images:
      - { url: /images/empathy-logo.svg,  altText: Empathy logo,  type: ImageBlock }
      - { url: /images/wellster-logo.svg, altText: Wellster logo, type: ImageBlock }
      - { url: /images/vise-logo.svg,     altText: Vise logo,     type: ImageBlock }
      - { url: /images/telus-logo.svg,    altText: Telus logo,    type: ImageBlock }
      - { url: /images/contenful-logo.svg,altText: Contentful,    type: ImageBlock }
      - { url: /images/sanity-logo.svg,   altText: Sanity logo,   type: ImageBlock }
      - { url: /images/rangle-logo.svg,   altText: Rangle logo,   type: ImageBlock }
    colors: bg-light-fg-dark
    styles:
      self: { justifyContent: center }
      subtitle: { textAlign: center }

  # ───────── 4) DIVIDER ─────────
  - type: DividerSection
    __metadata: { modelName: DividerSection }
    title: Divider
    colors: bg-light-fg-dark
    styles: { self: { padding: [p-7] } }

  # ───────── 5) BUILT FOR IMPACT ─────────
  - type: GenericSection
    __metadata: { modelName: GenericSection }
    motion: fade-right
    title:
      text: Built for Impact.
      type: TitleBlock
    text: >-
      At Aurrus Consulting, we focus on what truly moves the needle: clarity in
      strategy, efficiency in execution, and confidence in every decision.
      Our partnership model yields not just short‑term gains, but long‑term
      operational strength and market resilience.
    media:
      url: /images/placeholder-video.mp4
      altText: Aurrus video
      type: VideoBlock
      autoplay: true
      loop: true
      muted: true
      controls: false
      aspectRatio: 16:9
      styles: { self: { borderRadius: large } }
    badge: { label: Key Benefits, color: text-primary, type: Badge }
    colors: bg-light-fg-dark
    styles:
      self: { flexDirection: row, alignItems: center, padding: [pt-16, pb-16, pl-8, pr-8] }
      title:
        className: text-3xl sm:text-4xl font-extrabold tracking-tight text-dark transition-transform duration-300 hover:scale-105

  # ───────── 6) COLLABORATION VIDEO ─────────
  - type: GenericSection
    __metadata: { modelName: GenericSection }
    motion: fade-left
    title:
      text: Collaborative with Design
      type: TitleBlock
    subtitle: Collaboration that delivers.
    text: >-
      Progress happens when people work together. Aurrus aligns teams through
      clear communication, shared accountability, and unified execution—
      driving faster results and stronger relationships.
    media:
      url: /images/placeholder-video1.mp4
      altText: Collaboration video
      type: VideoBlock
      autoplay: true
      loop: true
      muted: true
      controls: false
      aspectRatio: 16:9
      styles: { self: { borderRadius: large } }
    colors: bg-light-fg-dark
    styles:
      self: { flexDirection: row, alignItems: center, padding: [pt-16, pb-16, pl-8, pr-8] }
      title:
        className: text-3xl sm:text-4xl font-extrabold tracking-tight text-dark transition-transform duration-300 hover:scale-105

  # ───────── 7) TALENT ILLUSTRATION ─────────
  - type: GenericSection
    __metadata: { modelName: GenericSection }
    motion: fade-up
    title:
      text: Talent Acquisition & Training
      type: TitleBlock
    subtitle: Build high‑performance teams.
    text: >
      From sourcing top‑tier talent to hands‑on onboarding and leadership
      training, Aurrus builds teams equipped to excel from day one.
    media:
      url: /images/hero2.svg
      altText: Talent illustration
      type: ImageBlock
    badge: { label: People‑Centric Solutions, color: text-primary, type: Badge }
    colors: bg-light-fg-dark
    styles:
      self: { alignItems: center, flexDirection: row, padding: [pt-16, pb-16, pl-8, pr-8] }
      title:
        className: text-3xl sm:text-4xl font-extrabold tracking-tight text-dark transition-transform duration-300 hover:scale-105

  # ───────── 8) TRANSFORMATION ILLUSTRATION ─────────
  - type: GenericSection
    __metadata: { modelName: GenericSection }
    motion: fade-left
    title:
      text: Outsourcing & Transformation
      type: TitleBlock
    subtitle: Optimise and scale.
    text: >
      We guide end‑to‑end process transformation across BPO, KPO, and ITeS
      verticals, reducing friction and unlocking new performance levels.
    media:
      url: /images/hero3.svg
      altText: Transformation illustration
      type: ImageBlock
    badge: { label: BPO/KPO Expertise, color: text-primary, type: Badge }
    colors: bg-light-fg-dark
    styles:
      self: { flexDirection: row-reverse, alignItems: center, padding: [pt-16, pb-16, pl-8, pr-8] }
      title:
        className: text-3xl sm:text-4xl font-extrabold tracking-tight text-dark transition-transform duration-300 hover:scale-105

  # ───────── 9) DIVIDER ─────────
  - type: DividerSection
    __metadata: { modelName: DividerSection }
    title: Divider
    colors: bg-light-fg-dark
    styles: { self: { padding: [p-7] } }

  # ───────── 10) AURRUS DIFFERENCE (3‑card) ─────────
  - type: FeaturedItemsSection
    __metadata: { modelName: FeaturedItemsSection }
    motion: fade-up
    title:
      text: The Aurrus Difference
      type: TitleBlock
    subtitle: Why should businesses choose Aurrus?
    items:
      - type: FeaturedItem
        __metadata: { modelName: FeaturedItem }
        title: Collaborative by Nature
        subtitle: Aligned Execution. Lasting Partnerships.
        text: We integrate with your people and processes, ensuring smoother delivery and stronger synergy.
        image: { url: /images/abstract-feature1.svg, altText: Colab icon, type: ImageBlock }
        colors: bg-light-fg-dark
        styles: { self: { padding: [p-8], borderRadius: x-large, flexDirection: col md:row } }

      - type: FeaturedItem
        __metadata: { modelName: FeaturedItem }
        title: Execution without Friction
        subtitle: From Planning to Precision
        text: We manage projects end‑to‑end with clear timelines, resource alignment, and minimal disruption.
        image: { url: /images/abstract-feature2.svg, altText: Execution icon, type: ImageBlock }
        colors: bg-light-fg-dark
        styles: { self: { padding: [p-8], borderRadius: x-large, flexDirection: col md:row } }

      - type: FeaturedItem
        __metadata: { modelName: FeaturedItem }
        title: Experience that Matters
        subtitle: Decades‑deep expertise
        text: Our leadership hails from IT, ITeS, and BPO/KPO sectors—bringing hands‑on experience, not just theory.
        image: { url: /images/abstract-feature3.svg, altText: Experience icon, type: ImageBlock }
        colors: bg-light-fg-dark
        styles: { self: { padding: [p-8], borderRadius: x-large, flexDirection: col md:row } }

    variant: three-col-grid
    colors: bg-neutral-fg-dark
    styles:
      self: { padding: [pt-16, pb-16, pl-8, pr-8] }
      title:
        className: text-3xl sm:text-4xl font-extrabold tracking-tight text-primary transition-transform duration-300 hover:scale-105

  # ───────── 11) CTA – FORM ─────────
  - type: GenericSection
    __metadata: { modelName: GenericSection }
    motion: fade-down
    title:
      text: Let's Build Something Better Together.
      type: TitleBlock
    subtitle: Start your consultation today!
    text: >
      Ready to streamline your operations or rethink strategy?
      Fill out the form and our team will respond within 24 hours.
    media:
      type: FormBlock
      elementId: contact-form
      fields:
        - { name: name, placeholder: Your name, isRequired: true, width: full, type: TextFormControl }
        - { name: email, placeholder: Your email, isRequired: true, width: full, type: EmailFormControl }
        - { name: message, placeholder: Your message, width: full, type: TextareaFormControl }
      submitButton:
        type: SubmitButtonFormControl
        label: Submit
        icon: arrowRight
        iconPosition: right
        style: primary
    badge: { label: Contact Us, color: text-primary, type: Badge }
    colors: bg-light-fg-dark
    styles:
      self: { flexDirection: col, alignItems: center, padding: [pt-16, pb-16, pl-8, pr-8] }
      title:
        className: text-3xl sm:text-4xl font-extrabold tracking-tight text-dark transition-transform duration-300 hover:scale-105

---
