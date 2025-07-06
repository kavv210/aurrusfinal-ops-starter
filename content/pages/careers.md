---
title: Careers
slug: careers
sections:
  - title:
      text: A team that moves together, grows together
      color: text-dark
      styles:
        self:
          textAlign: center
      type: TitleBlock
    subtitle: People are the soul of our company
    text: >
      At Aurrus, collaboration fuels everything we do. Our culture is rooted in trust, creativity, and bold ambition — and we believe in empowering each individual to shape not only their role, but the future of the company.
    actions:
      - label: See open positions
        url: /
        icon: arrowRight
        iconPosition: right
        style: primary
        type: Button
    colors: bg-light-fg-dark
    styles:
      self:
        padding:
          - pt-40
          - pb-40
          - pl-4
          - pr-4
        alignItems: center
        flexDirection: column
        justifyContent: center
        textAlign: center
      text:
        textAlign: center
      subtitle:
        textAlign: center
    type: GenericSection
    backgroundImage:
      type: BackgroundImage
      altText: abstract team image
      backgroundSize: cover
      backgroundPosition: center
      backgroundRepeat: no-repeat
      opacity: 100
      url: /images/team-bg-lightorange.svg

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
        padding:
          - pt-16
          - pb-8
          - pl-16
          - pr-16
        justifyContent: center
        textAlign: center
      subtitle:
        textAlign: center
    type: FeaturedPeopleSection

  - title:
      text: Our Office Location
      color: text-dark
      type: TitleBlock
    type: GenericSection
    styles:
      self:
        padding:
          - pt-20
          - pb-20
          - pl-6
          - pr-6
        flexDirection: row
        alignItems: center
        justifyContent: center
        gap: 12
        flexWrap: wrap
        borderRadius: x-large
        boxShadow: xl
        backgroundColor: "#fff8f0"
      text:
        textAlign: left
    text: |
      **Aurrus HQ**  
      J-42 Lajpat Nagar-2, Central Market  
      New Delhi, Delhi, India - 110024  
      📞 +91-9711150917  
      ✉️ support@aurrusconsulting.com  

      *Open Mon–Sat, 10 AM – 6 PM*

    media:
      type: RawHtml
      html: >
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.0501091289057!2d77.24076807432647!3d28.568257975699936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3b2808ffe1b%3A0xec1f022224013392!2sJ-42%2C%20near%20Home%20Saaz%2C%20Block%20J%2C%20Lajpat%20Nagar%20II%2C%20Lajpat%20Nagar%2C%20New%20Delhi%2C%20Delhi%20110024!5e0!3m2!1sen!2sin!4v1751796978098!5m2!1sen!2sin"
        width="100%" height="400"
        style="border:0; border-radius: 1rem; box-shadow: 0 8px 24px rgba(0,0,0,0.1); max-width: 600px;"
        allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    colors: bg-neutral-fg-dark

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
        text: >-
          Work directly with clients and help us drive value and impact through tailored solutions and communication.
        colors: bg-neutral-fg-dark
        styles:
          self:
            padding:
              - pt-8
              - pb-8
              - pl-8
              - pr-8
            textAlign: left
            borderRadius: x-large
            flexDirection: row
            justifyContent: center
        type: FeaturedItem

      - title: Open Source Engineer
        subtitle: Marketing
        text: >-
          Help us shape our open-source ecosystem with creative contributions and build our developer community.
        colors: bg-neutral-fg-dark
        styles:
          self:
            padding:
              - pt-8
              - pb-8
              - pl-8
              - pr-8
            textAlign: left
            borderRadius: x-large
            flexDirection: row
            justifyContent: center
        type: FeaturedItem

      - title: Senior Software Engineer
        subtitle: Engineering
        text: >-
          Join our engineering core to design scalable backend systems and next-gen frontend tools at global scale.
        colors: bg-neutral-fg-dark
        styles:
          self:
            padding:
              - pt-8
              - pb-8
              - pl-8
              - pr-8
            borderRadius: x-large
            flexDirection: row
        type: FeaturedItem

    actions:
      - label: Apply now
        url: /
        icon: arrowRight
        iconPosition: right
        style: primary
        type: Button
    variant: toggle-list
    colors: bg-light-fg-dark
    styles:
      self:
        padding:
          - pb-40
          - pt-16
          - pl-3
          - pr-3
        justifyContent: center
      subtitle:
        textAlign: center
    type: FeaturedItemsSection

seo:
  metaTitle: Careers - Aurrus Consulting
  metaDescription: Explore careers at Aurrus. We believe in teamwork, bold ideas, and growing together.
  socialImage: /images/main-hero.jpg
  type: Seo
type: PageLayout
---
