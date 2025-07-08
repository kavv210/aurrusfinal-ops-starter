---
title: Home
slug: /
type: PageLayout
__metadata:
  modelName: PageLayout
seo:
  metaTitle: Aurrus Consulting | BPO, KPO, IT Staffing & Hiring
  metaDescription: Aurrus Consulting Main Site.
  socialImage: public/images/main-hero.jpg
  type: Seo
sections:
  - type: GenericSection
    __metadata:
      modelName: GenericSection
    motion: fade-down
    title:
      text: Accelerate Growth With Aurrus.
      type: TitleBlock
    subtitle: Where strategy meets speed.
    text: >
      At Aurrus Consulting, we connect bold ambition with precise execution. Our
      digital‑first strategies scale faster, perform smarter, and deliver
      measurable outcomes...
    actions:
      - label: Get started
        url: /
        icon: arrowRight
        iconPosition: right
        style: secondary
        type: Button
    media:
      url: /images/main-hero-new.png
      altText: Aurrus Consulting Hero
      type: ImageBlock
      styles:
        self:
          width: w-[280px] sm:w-[340px] md:w-[400px] lg:w-[440px]
          height: h-auto
          objectFit: object-contain
    badge:
      label: Smarter workflows. Stronger results.
      color: text-primary
      type: Badge
    colors: bg-light-fg-dark
    styles:
      self:
        alignItems: center
        flexDirection: row
        padding:
          - pt-16
          - pl-16
          - pb-16
          - pr-16
      title:
        className: text-4xl sm:text-5xl font-extrabold tracking-tight text-dark transition-transform duration-300 hover:scale-105
  - type: FeaturedItemsSection
    __metadata:
      modelName: FeaturedItemsSection
    motion: fade-up
    title:
      text: Why Aurrus?
      type: TitleBlock
    items:
      - title: Business Strategy Consulting
        subtitle: Transform with Clarity
        text: >
          We provide strategic guidance to help organizations navigate change...
        image:
          url: /images/icon1.png
          altText: Strategy icon
          type: ImageBlock
          styles: { self: { className: w-8 h-8 } }
        colors: bg-neutralAlt-fg-dark
        styles:
          self: { padding: [p-8], borderRadius: x-large, flexDirection: row, textAlign: left }
          subtitle: { className: text-xl font-bold text-dark }

      - title: Vision & Values Aligned
        subtitle: Refine Core Structure
        text: >
          We help organisations build resilience and drive sustainable growth...
        image:
          url: /images/icon2.png
          altText: OD icon
          type: ImageBlock
          styles: { self: { className: w-8 h-8 } }
        colors: bg-neutralAlt-fg-dark
        styles:
          self: { padding: [p-6], borderRadius: x-large, flexDirection: row, textAlign: left }
          subtitle: { className: text-xl font-bold text-dark }

      - title: Program & Project Advisory
        subtitle: Deliver with Precision
        text: >
          We help BPOs optimise operations and drive growth...
        image:
          url: /images/icon3.png
          altText: Advisory icon
          type: ImageBlock
          styles: { self: { className: w-8 h-8 } }
        colors: bg-neutralAlt-fg-dark
        styles:
          self: { padding: [p-6], borderRadius: x-large, flexDirection: row }
          subtitle: { className: text-xl font-bold text-dark }

    badge:
      label: Client‑Centred Outcomes
      color: text-primary
      type: Badge
    actions:
      - label: Get started
        url: /
        icon: arrowRight
        iconPosition: right
        style: primary
        type: Button
    variant: three-col-grid
    colors: bg-neutral-fg-dark
    styles:
      self:
        padding: [pt-16, pb-16, pl-16, pr-16]
      title:
        className: text-3xl sm:text-4xl font-extrabold tracking-tight text-dark transition-transform duration-300 hover:scale-105
      subtitle:
        className: text-xl font-bold text-dark transition duration-300 ease-in-out hover:text-[#f97316]

  - type: GenericSection
    colors: bg-light-fg-dark
    title:
      text: The Brands that Trust Us
      type: TitleBlock
      color: text-dark
      styles:
        self:
          padding: [pt-0, pb-20]
          textAlign: center
          justifyContent: center
          attrs:
            'data-aos': fade-up

  - type: BrandSlider
    colors: bg-white-fg-dark
    styles:
      self:
        padding: [pb-20, pt-10, pl-4, pr-4]
        justifyContent: center
        alignItems: center
  - type: GenericSection
    __metadata:
      modelName: GenericSection
    motion: fade-right
    title:
      text: Built for Impact.
      type: TitleBlock
    text: >
      At Aurrus Consulting, we focus on what truly moves the needle: clarity in
      strategy, efficiency in execution, and confidence in every decision...
    media:
      url: /images/built-impact.png
      altText: Built for Impact image
      type: ImageBlock
    badge:
      label: Key Benefits
      color: text-primary
      type: Badge
    colors: bg-light-fg-dark
    styles:
      self:
        flexDirection: row
        alignItems: center
        padding: [pt-2, pb-2, pl-8, pr-8]
      title:
        className: text-3xl sm:text-4xl font-extrabold tracking-tight text-dark transition-transform duration-300 hover:scale-105

  - type: GenericSection
    __metadata:
      modelName: GenericSection
    motion: fade-left
    title:
      text: Collaborative with Design
      type: TitleBlock
    subtitle: Collaboration that delivers.
    text: >
      Progress happens when people work together. Aurrus aligns teams through
      clear communication, shared accountability, and unified execution...
    media:
      url: /images/collab-design.png
      altText: Collaboration image
      type: ImageBlock
    colors: bg-light-fg-dark
    styles:
      self:
        flexDirection: row
        alignItems: center
        padding: [pt-2, pb-2, pl-8, pr-8]
      title:
        className: text-3xl sm:text-4xl font-extrabold tracking-tight text-dark transition-transform duration-300 hover:scale-105
      subtitle:
        className: text-xl font-bold text-dark transition duration-300 ease-in-out hover:text-[#f97316]

  - type: GenericSection
    __metadata:
      modelName: GenericSection
    motion: fade-right
    title:
      text: Talent Acquisition & Training
      type: TitleBlock
    subtitle: Build high‑performance teams.
    text: >
      From sourcing top‑tier talent to hands‑on onboarding and leadership
      training, Aurrus builds teams equipped to excel from day one.
    media:
      url: /images/hero2.png
      altText: Talent illustration
      type: ImageBlock
    badge:
      label: People‑Centric Solutions
      color: text-primary
      type: Badge
    colors: bg-light-fg-dark
    styles:
      self:
        alignItems: center
        flexDirection: row
        padding: [pt-8, pb-8, pl-8, pr-8]
      title:
        className: text-3xl sm:text-4xl font-extrabold tracking-tight text-dark transition-transform duration-300 hover:scale-105
      subtitle:
        className: text-xl font-bold text-dark

  - type: GenericSection
    __metadata:
      modelName: GenericSection
    motion: fade-left
    title:
      text: Outsourcing & Transformation
      type: TitleBlock
    subtitle: Optimise and scale.
    text: >
      We guide end‑to‑end process transformation across BPO, KPO, and ITeS
      verticals, reducing friction and unlocking new performance levels.
    media:
      url: /images/hero3.png
      altText: Transformation illustration
      type: ImageBlock
    badge:
      label: BPO/KPO Expertise
      color: text-primary
      type: Badge
    colors: bg-light-fg-dark
    styles:
      self:
        flexDirection: row-reverse
        alignItems: center
        padding: [pt-8, pb-8, pl-8, pr-8]
      title:
        className: text-3xl sm:text-4xl font-extrabold tracking-tight text-dark transition-transform duration-300 hover:scale-105
      subtitle:
        className: text-xl font-bold text-dark
  - type: DividerSection
    __metadata:
      modelName: DividerSection
    colors: bg-light-fg-dark
    styles:
      self:
        padding: [p-7]

  - type: FeaturedItemsSection
    __metadata:
      modelName: FeaturedItemsSection
    motion: fade-up
    title:
      text: Our Expertise
      type: TitleBlock
    subtitle: Why should businesses choose Aurrus?
    items:
      - title: Voice Capabilities
        subtitle: Aligned Execution. Lasting Partnerships.
        text: >
          In-bound Customer Services · Outbound Sales & Support · Technical Support Services...
        image:
          url: /images/voice.png
          altText: voice icon
          type: ImageBlock
        colors: bg-light-fg-dark
        styles:
          self:
            padding: [p-8]
            borderRadius: x-large
            flexDirection: col md:row
          subtitle: { className: text-xl font-bold text-dark }

      - title: Non-Voice/Backing Capabilities
        subtitle: Data-driven support, delivered with precision.
        text: >
          Chat Support · Email Support · Data Mining · Market Research
        image:
          url: /images/execution.png
          altText: Execution icon
          type: ImageBlock
        colors: bg-light-fg-dark
        styles:
          self:
            padding: [p-8]
            borderRadius: x-large
            flexDirection: col md:row
          subtitle: { className: text-xl font-bold text-dark }

      - title: HR/Training & Development
        subtitle: Empowering people. Elevating performance.
        text: >
          Recruitment · Training · Content Development
        image:
          url: /images/experience.png
          altText: Experience icon
          type: ImageBlock
        colors: bg-light-fg-dark
        styles:
          self:
            padding: [p-8]
            borderRadius: x-large
            flexDirection: col md:row
          subtitle: { className: text-xl font-bold text-dark }

    variant: three-col-grid
    colors: bg-neutral-fg-dark
    styles:
      self:
        padding: [pt-16, pb-16, pl-8, pr-8]
      title:
        className: text-3xl sm:text-4xl font-extrabold tracking-tight text-primary transition-transform duration-300 hover:scale-105
      subtitle:
        className: text-xl font-bold text-dark transition duration-300 ease-in-out hover:text-[#f97316]

  - type: RawHtmlBlock
    __metadata:
      modelName: RawHtmlBlock
    motion: fade-down
    colors: bg-light-fg-dark
    styles:
      self:
        padding: [pt-20, pb-20, pl-8, pr-8]
        textAlign: center
    html: >
      <div id="contact-form" class="max-w-2xl mx-auto text-center">
        <h2 class="text-4xl sm:text-5xl font-bold tracking-tight text-[#1E88E5]">
          Let's Build Something Better Together.
        </h2>
        <p class="mt-4 text-xl text-[#333]">Start your consultation today!</p>
        <p class="mt-2 text-md text-[#555]">
          Ready to streamline operations or rethink strategy? Fill out the form and we’ll respond within 24 hours.
        </p>
        <form action="https://formsubmit.co/contact.aurrus@gmail.com" method="POST" class="mt-10 space-y-5 text-left">
          <input type="hidden" name="_captcha" value="false">
          <input type="hidden" name="_subject" value="New Contact Submission from Aurrus Website">
          <input type="hidden" name="_next" value="https://aurrusconsulting.com/success">
          <input type="hidden" name="_template" value="box">
          <input type="text" name="_honey" style="display:none">
          <div><label for="name" class="block mb-2 font-medium text-dark">Name</label><input name="name" id="name" type="text" required class="w-full p-3 rounded-xl border border-gray-300"></div>
          <div><label for="email" class="block mb-2 font-medium text-dark">Email</label><input name="email" id="email" type="email" required class="w-full p-3 rounded-xl border border-gray-300"></div>
          <div><label for="purpose" class="block mb-2 font-medium text-dark">Purpose</label><select name="purpose" id="purpose" required class="w-full p-3 rounded-xl border border-gray-300"><option value="" disabled selected>Select a purpose</option><option value="Consultation">Consultation</option><option value="Hiring Inquiry">Hiring Inquiry</option><option value="Partnership">Partnership</option><option value="General Query">General Query</option></select></div>
          <div><label for="message" class="block mb-2 font-medium text-dark">Message</label><textarea name="message" id="message" rows="5" required class="w-full p-3 rounded-xl border border-gray-300"></textarea></div>
          <div><label for="captcha" class="block mb-2 font-medium text-dark">What is 4 + 3?</label><input id="captcha" name="captcha" type="text" pattern="7" required class="w-full p-3 rounded-xl border border-gray-300"></div>
          <button type="submit" class="bg-[#1E88E5] hover:bg-[#f97316] text-white px-6 py-3 rounded-xl">Submit</button>
        </form>
        <p class="mt-8 text-sm text-gray-500 italic">We respect your privacy. Your information is safe with us.</p>
      </div>
---
