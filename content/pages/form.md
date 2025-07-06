---
title: Contact Form
type: RawHtmlSection
__metadata:
  modelName: RawHtmlSection
---

<form action="https://formsubmit.co/contact.aurrus@gmail.com" method="POST" style="max-width:600px; margin:2rem auto;">
  <input type="hidden" name="_captcha" value="false">
  <input type="hidden" name="_subject" value="New Contact Submission from Aurrus Website">

  <input name="name" placeholder="Your name" required
    style="width:100%; padding:1rem; margin-bottom:1rem; border-radius:0.75rem; border:1px solid #ccc;" />

  <input type="email" name="email" placeholder="Your email" required
    style="width:100%; padding:1rem; margin-bottom:1rem; border-radius:0.75rem; border:1px solid #ccc;" />

  <textarea name="message" placeholder="Your message" required rows="5"
    style="width:100%; padding:1rem; margin-bottom:1rem; border-radius:0.75rem; border:1px solid #ccc;"></textarea>

  <button type="submit"
    style="background-color:#1E88E5; color:white; padding:0.75rem 2rem; border:none; border-radius:0.75rem; cursor:pointer;">
    Submit
  </button>
</form>
