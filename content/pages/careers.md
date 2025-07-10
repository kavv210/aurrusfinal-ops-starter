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
      color: text-[#2D65B0]
      styles:
        self:
          textAlign: center
    subtitle: Built on trust, driven by collaboration, focused on what matters to you.
    text: >
      Started in 2011, we have a combined experince of over 40+ years. At
      **Aurrus**, collaboration fuels everything we do. Our culture is rooted in
      trust, creativity, and bold ambition — and we believe in empowering each
      individual to shape not only their role, but the future of the company.
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
        padding:
          - pt-32
          - pb-32
          - pl-6
          - pr-6
        alignItems: center
        justifyContent: center
        flexDirection: row-reverse
        attrs:
          data-aos: fade-down
      text:
        textAlign: center
      subtitle:
        textAlign: center
  - type: GenericSection
    text: <hr class="w-full border border-gray-300 mb-8" />
    styles:
      self:
        padding:
          - pt-0
          - pb-0
          - pl-0
          - pr-0
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
        padding:
          - pt-20
          - pb-20
          - pl-6
          - pr-6
        justifyContent: center
        attrs:
          data-aos: fade-up
  - type: GenericSection
    text: <hr class="w-full border border-gray-300 mb-8" />
    styles:
      self:
        padding:
          - pt-0
          - pb-0
          - pl-0
          - pr-0
    colors: bg-transparent-fg-dark
  - type: GenericSection
    __metadata:
      modelName: GenericSection
    elementId: office-location
    motion: fade-down
    title:
      text: Our Office Location
      color: text-dark
      styles:
        self:
          textAlign: center
    text: >
      <div class="mx-auto max-w-6xl flex flex-col md:flex-row gap-8
      justify-center items-center px-4">
        <div class="flex-1 max-w-md text-center md:text-left space-y-4">
          <strong class="block text-lg font-semibold text-gray-800">Aurrus HQ</strong>
          <p class="text-gray-700">
            J‑42, Lajpat Nagar‑II, Central Market<br/>
            New Delhi, Delhi – 110024
          </p>
          <p class="text-gray-700">
            📞 +91‑9311066457<br/>
            ✉️ contact.aurrus@gmail.com
          </p>
          <p class="text-gray-700">
            <em>Open Mon–Sat, 10 AM – 6 PM</em>
          </p>
        </div>
        <div class="flex-1 max-w-xl w-full shadow-xl overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14016.812907460232!2d77.2380377!3d28.5726441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3c192e25b11%3A0x7c7e73ae727c2f75!2sLajpat%20Nagar%20II%2C%20New%20Delhi%2C%20Delhi%20110024!5e0!3m2!1sen!2sin!4v1690999999999"
            width="100%"
            height="320"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            class="w-full h-full"
          ></iframe>
        </div>
      </div>
    styles:
      self:
        padding:
          - pt-20
          - pb-20
          - pl-6
          - pr-6
        justifyContent: center
        alignItems: center
        textAlign: center
    colors: bg-light-fg-dark
  - type: GenericSection
    text: <hr class="w-full border border-gray-300 mb-8" />
    styles:
      self:
        padding:
          - pt-0
          - pb-0
          - pl-0
          - pr-0
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
          Work directly with clients and help us drive value and impact through
          tailored solutions and communication.
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
            justifyContent: center
            attrs:
              data-aos: fade-up
      - title: Open Source Engineer
        subtitle: Marketing
        text: >
          Help us shape our open-source ecosystem with creative contributions and
          build our developer community.
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
            justifyContent: center
            attrs:
              data-aos: fade-up
      - title: Senior Software Engineer
        subtitle: Engineering
        text: >
          Join our engineering core to design scalable backend systems and next-gen
          frontend tools at global scale.
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
            justifyContent: center
            attrs:
              data-aos: fade-up
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
        padding:
          - pt-32
          - pb-40
          - pl-6
          - pr-6
        justifyContent: center
      subtitle:
        textAlign: center
seo:
  metaTitle: Careers – Aurrus Consulting
  metaDescription: Explore careers at Aurrus. We believe in teamwork, bold ideas,
    and growing together.
  socialImage: /images/main-hero.jpg
  type: Seo

---
null
