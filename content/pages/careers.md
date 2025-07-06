---
title: About Us
slug: about
sections:
  - type: GenericSection
    title:
      text: The Aurrus way; move together, grow together.
      color: text-light
      styles:
        self:
          textAlign: center
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
    colors: bg-transparent
    styles:
      self:
        height: screen
        padding: [pt-48, pb-48, pl-8, pr-8]
        alignItems: center
        justifyContent: center
        flexDirection: column
        textAlign: center
      text:
        textAlign: center
      subtitle:
        textAlign: center
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
  - type: FeaturedPeopleSection
    people:
      - content/data/person1.json
      - content/data/person2.json
      - content/data/person3.json
    variant: three-col-grid
    colors: bg-light-fg-dark
    styles:
      self:
        padding: [pt-16, pb-8, pl-16, pr-16]
        justifyContent: center
        display: flex
        flexWrap: wrap
        gap: 20px
      subtitle:
        textAlign: center

  - type: GenericSection
    title:
      text: Our Headquarters
      color: text-dark
    colors: bg-neutral-fg-dark
    styles:
      self:
        padding: [pt-24, pb-24, pl-8, pr-8]
        display: flex
        flexDirection: row
        justifyContent: space-between
        alignItems: center
        flexWrap: wrap
        gap: 12
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
    media:
      type: RawHtml
      html: |
        <div style="width: 100%; max-width: 500px; height: 300px; margin-left: auto; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 40px rgba(0,0,0,0.15);">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.540124445257!2d77.2410074!3d28.5670131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce39d6b9ff19d%3A0x9a3ea2e81e230775!2sLajpat%20Nagar%20II%2C%20New%20Delhi%2C%20Delhi%20110024!5e0!3m2!1sen!2sin!4v1720254869430!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style="border: 0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>

  - title:
      text: Open positions
      color: text-dark
    subtitle: Come build with us
    type: TitleBlock
  - type: FeaturedItemsSection
    items:
      - title: Account Executive
        subtitle: Sales
        text: Work directly with clients and help us drive value through tailored solutions.
        colors: bg-neutral-fg-dark
        styles:
          self:
            padding: [pt-8, pb-8, pl-8, pr-8]
            borderRadius: x-large
            flexDirection: row
            textAlign: left
      - title: Open Source Engineer
        subtitle: Marketing
        text: Help us shape our open-source ecosystem and build our dev community.
        colors: bg-neutral-fg-dark
        styles:
          self:
            padding: [pt-8, pb-8, pl-8, pr-8]
            borderRadius: x-large
            flexDirection: row
            textAlign: left
      - title: Senior Software Engineer
        subtitle: Engineering
        text: Join our core to build scalable systems and next-gen frontend tools.
        colors: bg-neutral-fg-dark
        styles:
          self:
            padding: [pt-8, pb-8, pl-8, pr-8]
            borderRadius: x-large
            flexDirection: row
            textAlign: left
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
        padding: [pt-16, pb-40, pl-4, pr-4]
        justifyContent: center

seo:
  metaTitle: About Us – Aurrus Consulting
  metaDescription: Learn more about Aurrus — our people, purpose, and headquarters in New Delhi.
  socialImage: /images/main-hero.jpg
  type: Seo
type: PageLayout
---
