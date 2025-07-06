---
title: Careers
slug: careers
sections:
  - type: GenericSection
    text: |
      <div data-aos="fade-up">
        <h2 class="text-4xl font-bold text-center mb-4">A team that works closely together</h2>
        <p class="text-center mb-6">
          At <strong>Aurrus</strong>, collaboration fuels everything we do. Our culture is rooted in trust, creativity, and bold ambition — and we believe in empowering each individual to shape not only their role, but the future of the company.
        </p>
        <a href="/" class="btn btn-primary mx-auto flex justify-center gap-2 items-center">See open positions <span class="icon-arrowRight"></span></a>
      </div>
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
        padding: [pt-40, pl-6, pb-40, pr-6]
        alignItems: center
        flexDirection: row-reverse
        justifyContent: center

  - type: GenericSection
    text: '<div data-aos="fade-up" class="w-full border-t border-[#e5e5e5] my-6"></div>'
    styles:
      self: { padding: [pt-0, pb-0, pl-0, pr-0] }
    colors: bg-transparent-fg-dark

  - type: FeaturedPeopleSection
    title:
      text: Meet the team
      color: text-dark
      styles: { self: { textAlign: center } }
    people:
      - content/data/person1.json
      - content/data/person2.json
      - content/data/person3.json
    variant: three-col-grid
    styles:
      self:
        padding: [pt-16, pl-16, pb-16, pr-16]
        justifyContent: center
    colors: bg-light-fg-dark

  - type: GenericSection
    text: '<div data-aos="fade-up" class="w-full border-t border-[#e5e5e5] my-6"></div>'
    styles:
      self: { padding: [pt-0, pb-0, pl-0, pr-0] }
    colors: bg-transparent-fg-dark

  - type: GenericSection
    title:
      text: Our Office Location
      color: text-dark
      styles: { self: { textAlign: center } }
    text: |
      <div data-aos="fade-up" style="max-width: 1200px; margin: 0 auto; display: flex; flex-wrap: wrap; justify-content: center; align-items: flex-start; gap: 40px; padding: 24px;">
        <div style="flex: 1 1 300px; max-width: 400px; text-align: left;">
          <strong>Aurrus HQ</strong><br/>
          J‑42, Lajpat Nagar‑II, Central Market<br/>
          New Delhi, Delhi – 110024<br/><br/>
          📞 +91‑9711150917<br/>
          ✉️ support@aurrusconsulting.com<br/><br/>
          <em>Open Mon–Sat, 10 AM – 6 PM</em>
        </div>
        <div style="flex: 1 1 400px; max-width: 600px; box-shadow: 0 10px 40px rgba(0,0,0,0.15); border-radius: 12px; overflow: hidden;">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.0501091289057!2d77.24076807432647!3d28.568257975699936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3b2808ffe1b%3A0xec1f022224013392!2sJ-42%2C%20near%20Home%20Saaz%2C%20Block%20J%2C%20Lajpat%20Nagar%20II%2C%20Lajpat%20Nagar%2C%20New%20Delhi%2C%20Delhi%20110024!5e0!3m2!1sen!2sin!4v1751796978098!5m2!1sen!2sin"
            width="100%" height="400" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
    styles:
      self:
        padding: [pt-20, pb-20, pl-6, pr-6]
        alignItems: center
        justifyContent: center
        borderRadius: x-large
        boxShadow: xl
        backgroundColor: '#fff8f0'
    colors: bg-neutral-fg-dark

  - type: GenericSection
    text: '<div data-aos="fade-up" class="w-full border-t border-[#e5e5e5] my-6"></div>'
    styles:
      self: { padding: [pt-0, pb-0, pl-0, pr-0] }
    colors: bg-transparent-fg-dark

  - type: FeaturedItemsSection
    title:
      text: Open positions
      color: text-dark
      styles: { self: { textAlign: center } }
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
        url: /
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

seo:
  metaTitle: Careers – Aurrus Consulting
  metaDescription: Explore careers at Aurrus. We believe in teamwork, bold ideas, and growing together.
  socialImage: /images/main-hero.jpg
  type: Seo
type: PageLayout
---
