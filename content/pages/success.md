---
title: Success
slug: /success
type: PageLayout
__metadata:
  modelName: PageLayout

seo:
  metaTitle: Message Sent | Aurrus Consulting
  metaDescription: Your form has been submitted. Our team will get back to you soon.
  type: Seo

sections:
  - type: AutoRedirect
    __metadata:
      modelName: AutoRedirect

  - type: GenericSection
    __metadata:
      modelName: GenericSection
    motion: fade-up
    colors: bg-light-fg-dark
    styles:
      self:
        alignItems: center
        justifyContent: center
        padding: [pt-32, pb-32, pl-8, pr-8]
        textAlign: center
    badge:
      label: Submission Successful
      color: text-primary
      type: Badge
    title:
      text: Thank You!
      type: TitleBlock
      className: text-4xl sm:text-5xl font-extrabold tracking-tight text-dark transition duration-300 ease-in-out hover:text-[#f97316]
    subtitle: We've received your message.
    text: >
      Our team will get back to you within 24 hours.
      <br /><br />
      Redirecting to <a href="/" class="text-[#1E88E5] hover:text-[#f97316] underline">homepage</a> shortly...
    actions:
      - label: Back to Home
        url: /
        icon: arrowLeft
        iconPosition: left
        style: primary
        type: Button
    media:
      type: ImageBlock
      url: /images/thank-you.png
      altText: Thank you illustration
      styles:
        self:
          width: w-[240px]
          height: h-auto
          margin: [mt-10]
