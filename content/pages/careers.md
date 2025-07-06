---
title: Careers
slug: careers
sections:
  - title:
      text: The Aurrus way; move together, grow together.
      color: text-dark
      styles:
        self:
          textAlign: center
      type: TitleBlock
    subtitle: People are the soul of our company
    text: >
      At **Aurrus**, collaboration fuels everything we do. Our culture is rooted
      in trust, creativity, and bold ambition — and we believe in empowering each
      individual to shape not only their role, but the future of the company.
    actions:
      - label: See open positions
        url: /careers
        icon: arrowRight
        iconPosition: right
        style: primary
        type: Button
    colors: bg-light-fg-dark
    styles:
      self:
        padding: [pt-40, pb-40, pl-6, pr-6]
        alignItems: center
        flexDirection: column
        justifyContent: center
      text:
        textAlign: center
      subtitle:
        textAlign: center
    type: GenericSection
    backgroundImage:
      type: BackgroundImage
      url: /images/abstract-background.jpg
      altText: abstract team image
      backgroundSize: cover
      backgroundPosition: center
      backgroundRepeat: no-repeat
      opacity: 100

  - title:
      text: Meet the team
      color: text-dark
      styles:
        self:
          textAlign: center
      type: TitleBlock
    people:
      - content/data/person1.json
      - content/data/person2.json
      - content/data/person3.json
    variant: three-col-grid
    colors: bg-light-fg-dark
    styles:
      self:
        padding: [pt-16, pl-16, pb-8, pr-16]
        justifyContent: center
        display: flex
        flexWrap: wrap
        gap: 20px
      subtitle:
        textAlign: center
    type: FeaturedPeopleSection

  - title:
      text: Our Headquarters
      color: text-dark
      styles:
        self:
          textAlign: center
      type: TitleBlock
    type: GenericSection
    colors: bg-neutral-fg-dark
    styles:
      self:
        padding: [pt-20, pb-20, pl-6, pr-6]
        flexDirection: row
        alignItems: center
        justifyContent: space-between
        gap: 20px
        borderRadius: x-large
        boxShadow: xl
      text:
        textAlign: left
    text: |
      **Aurrus HQ**  
      J‑42, Lajpat Nagar‑II, Central Market  
      New Delhi, Delhi – 110024  

      📞 +91‑9711150917  
      ✉️ support@aurrusconsulting.com  

      *Open Mon–Sat, 10 AM – 6 PM*

      <div class="map-container" style="margin-top: 1.5rem; box-shadow: 0 10px 40px rgba(0,0,0,0.15); border-radius: 12px; overflow: hidden;">
        <iframe
          src="https://www.google.com/maps/embed?pb=..."></iframe>
      </div>

  - title:
      text: Open positions
      color: text-dark
      styles:
        self:
          textAlign: center
      type: TitleBlock
    subtitle: Come build with us
    items:
      - title: Account Executive
        subtitle: Sales
        text: >
          Work directly with clients and help us drive value and impact through tailored solutions and communication.
        colors: bg-neutral-fg-dark
        styles:
          self:
            padding: [pt-8, pl-8, pb-8, pr-8]
            textAlign: left
            borderRadius: x-large
            flexDirection: row
            justifyContent: center
        type: FeaturedItem
      - title: Open Source Engineer
        subtitle: Marketing
        text: >
          Help us shape our open-source ecosystem with creative contributions and build our developer community.
        colors: bg-neutral-fg-dark
        styles:
          self:
            padding: [pt-8, pl-8, pb-8, pr-8]
            textAlign: left
            borderRadius: x-large
            flexDirection: row
            justifyContent: center
        type: FeaturedItem
      - title: Senior Software Engineer
        subtitle: Engineering
        text: >
          Join our engineering core to design scalable backend systems and next-gen frontend tools at global scale.
        colors: bg-neutral-fg-dark
        styles:
          self:
            padding: [pt-8, pl-8, pb-8, pr-8]
            borderRadius: x-large
            flexDirection: row
        type: FeaturedItem
    actions:
      - label: Apply now
        url: /careers
        icon: arrowRight
        iconPosition: right
        style: primary
        type: Button
    variant: toggle-list
    colors: bg-light-fg-dark
    styles:
      self:
        padding: [pb-40, pt-16, pl-3, pr-3]
        justifyContent: center
      subtitle:
        textAlign: center
    type: FeaturedItemsSection

seo:
  metaTitle: Careers – Aurrus Consulting
  metaDescription: Explore careers at Aurrus. We believe in teamwork, bold ideas, and growing together.
  socialImage: /images/main-hero.jpg
  type: Seo
type: PageLayout
---
