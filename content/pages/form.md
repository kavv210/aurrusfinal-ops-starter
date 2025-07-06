---
title: Contact Form
slug: /form
type: PageLayout
__metadata:
  modelName: PageLayout

sections:
  - type: RawHtmlBlock
    __metadata:
      modelName: RawHtmlBlock
    html: |
      <form action="https://formsubmit.co/contact.aurrus@gmail.com" method="POST" class="space-y-4 max-w-xl mx-auto mt-8">
        <input type="hidden" name="_captcha" value="false">
        <input type="hidden" name="_subject" value="New Contact Submission from Aurrus Website">
        <input name="name" placeholder="Your name" required class="w-full p-3 rounded-xl border border-gray-300">
        <input type="email" name="email" placeholder="Your email" required class="w-full p-3 rounded-xl border border-gray-300">
        <textarea name="message" placeholder="Your message" required rows="5" class="w-full p-3 rounded-xl border border-gray-300"></textarea>
        <button type="submit" class="bg-[#1E88E5] text-white px-6 py-3 rounded-xl hover:bg-[#1565C0] transition duration-300">
          Submit
        </button>
      </form>
---
