---
title: Careers
slug: careers
type: PageLayout
__metadata:
  modelName: PageLayout

sections:
  - type: GenericSection
    elementId: hero
    title:
      text: Partners in Progress, Powered by People
      color: text-dark
      styles:
        self:
          textAlign: center
    subtitle: Built on trust, driven by collaboration, focused on what matters to you.
    text: >
      At **Aurrus**, collaboration fuels everything we do. Our culture is rooted in trust, creativity, and bold ambition — and we believe in empowering each individual to shape not only their role, but the future of the company.
    actions:
      - label: See open positions
        url: "#open-roles"
        icon: arrowRight
        iconPosition: right
        style: primary
        type: Button
    backgroundImage:
      type: BackgroundImage
      altText: abstract team image
      backgroundSize: cover
      backgroundPosition: center
      backgroundRepeat: no-repeat
      opacity: 100
      url: /images/abstract-background.svg
    colors: bg-light-fg-dark
    styles:
      self:
        padding: [pt-32, pb-32, pl-6, pr-6]
        alignItems: center
        justifyContent: center
        flexDirection: row-reverse
        attrs:
          'data-aos': fade-down
      text:
        textAlign: center
      subtitle:
        textAlign: center

  - type: GenericSection
    text: '<hr class="w-full border border-gray-300 mb-8" />'
    styles:
      self:
        padding: [pt-0, pb-0, pl-0, pr-0]
    colors: bg-transparent-fg-dark

  - type: FeaturedPeopleSection
    title:
      text: Meet the team
      color: text-dark
      styles:
        self:
          textAlign: center
    people:
      - content/data/person1.json
      - content/data/person2.json
      - content/data/person3.json
    variant: three-col-grid
    colors: bg-light-fg-dark
    styles:
      self:
        padding: [pt-20, pb-20, pl-6, pr-6]
        justifyContent: center
        attrs:
          'data-aos': fade-up

  - type: GenericSection
    text: '<hr class="w-full border border-gray-300 mb-8" />'
    styles:
      self:
        padding: [pt-0, pb-0, pl-0, pr-0]
    colors: bg-transparent-fg-dark

  - type: GenericSection
    elementId: office-location
    title:
      text: Our Office Location
      color: text-dark
      styles:
        self:
          textAlign: center
    text: |
      <div style="max-width: 1200px; margin: 0 auto; display: flex; flex-wrap: wrap; justify-content: center; align-items: flex-start; gap: 40px; padding: 24px;">
        <div style="flex: 1 1 300px; max-width: 400px; text-align: left;">
          <strong>Aurrus HQ</strong><br/>
          J‑42, Lajpat Nagar‑II, Central Market<br/>
          New Delhi, Delhi – 110024<br/><br/>
          📞 +91‑9311066457<br/>
          ✉️ contact.aurrus@gmail.com<br/><br/>
          <em>Open Mon–Sat, 10 AM – 6 PM</em>
        </div>
        <div style="flex: 1 1 400px; max-width: 600px; box-shadow: 0 10px 40px rgba(0,0,0,0.15); border-radius: 12px; overflow: hidden;">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.0501091289057!2d77.24076807432647!3d28.568257975699936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3b2808ffe1b%3A0xec1f022224013392!2sJ-42%2C%20near%20Home%20Saaz%2C%20Block%20J%2C%20Lajpat%20Nagar%20II%2C%20Lajpat%20Nagar%2C%20New%20Delhi%2C%20Delhi%20110024!5e0!3m2!1sen!2sin!4v1751796978098!5m2!1sen!2sin"
            width="100%" height="400" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
    colors: bg-neutral-fg-dark
    styles:
      self:
        padding: [pt-32, pb-32, pl-6, pr-6]
        borderRadius: x-large
        boxShadow: xl
        backgroundColor: '#fff8f0'
        attrs:
          'data-aos': fade-down

  - type: GenericSection
    text: '<hr class="w-full border border-gray-300 mb-8" />'
    styles:
      self:
        padding: [pt-0, pb-0, pl-0, pr-0]
    colors: bg-transparent-fg-dark

  - type: FeaturedItemsSection
    elementId: open-roles
    title:
      text: Open positions
      color: text-dark
      styles:
        self:
          textAlign: center
    subtitle: Come build with us
    items:
      - title: Account Executive
        subtitle: Sales
        text: >
          Work directly with clients and help us drive value and impact through tailored solutions and communication.
        colors: bg-neutral-fg-dark
        styles:
          self:
            padding: [pt-8, pb-8, pl-8, pr-8]
            borderRadius: x-large
            flexDirection: row
            justifyContent: center
            attrs:
              'data-aos': fade-up
      - title: Open Source Engineer
        subtitle: Marketing
        text: >
          Help us shape our open-source ecosystem with creative contributions and build our developer community.
        colors: bg-neutral-fg-dark
        styles:
          self:
            padding: [pt-8, pb-8, pl-8, pr-8]
            borderRadius: x-large
            flexDirection: row
            justifyContent: center
            attrs:
              'data-aos': fade-up
      - title: Senior Software Engineer
        subtitle: Engineering
        text: >
          Join our engineering core to design scalable backend systems and next-gen frontend tools at global scale.
        colors: bg-neutral-fg-dark
        styles:
          self:
            padding: [pt-8, pb-8, pl-8, pr-8]
            borderRadius: x-large
            flexDirection: row
            justifyContent: center
            attrs:
              'data-aos': fade-up
    actions:
      - label: Visit headquarters
        url: "#office-location"
        icon: mapPin
        iconPosition: right
        style: secondary
        type: Button
    variant: toggle-list
    colors: bg-light-fg-dark
    styles:
      self:
        padding: [pt-32, pb-40, pl-6, pr-6]
        justifyContent: center
      subtitle:
        textAlign: center

seo:
  metaTitle: Careers – Aurrus Consulting
  metaDescription: Explore careers at Aurrus. We believe in teamwork, bold ideas, and growing together.
  socialImage: /images/main-hero.jpg
  type: Seo
---
