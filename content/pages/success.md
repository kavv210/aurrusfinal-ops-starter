---
title: Message Sent
slug: /success
type: PageLayout
__metadata:
  modelName: PageLayout

seo:
  metaTitle: Thank You | Aurrus Consulting
  metaDescription: Your message has been submitted successfully. We'll get back to you within 24 hours.
  socialImage: public/images/main-hero.jpg
  type: Seo

sections:
  - type: RawHtmlBlock
    __metadata:
      modelName: RawHtmlBlock
    motion: fade-up
    colors: bg-light-fg-dark
    styles:
      self:
        padding: [pt-32, pb-32, pl-8, pr-8]
        textAlign: center
    html: |
      <script>
        // Redirect after 5 seconds
        setTimeout(() => {
          window.location.href = '/';
        }, 5000);

        // Load confetti
        window.addEventListener('DOMContentLoaded', () => {
          const script = document.createElement('script');
          script.src = 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js';
          script.onload = () => {
            confetti({
              particleCount: 150,
              spread: 70,
              origin: { y: 0.6 }
            });
          };
          document.body.appendChild(script);
        });
      </script>

      <div class="max-w-2xl mx-auto text-center">
        <h2 class="text-4xl sm:text-5xl font-extrabold tracking-tight text-dark transition duration-300 ease-in-out hover:text-[#f97316]">
          Thank You!
        </h2>
        <p class="mt-4 text-xl text-[#333]">
          Your message has been sent successfully.
        </p>
        <p class="mt-2 text-md text-[#555]">
          We’ll get back to you within 24 hours.<br />
          Redirecting you to the <a href="/" class="text-[#1E88E5] hover:text-[#f97316] underline">homepage</a> shortly...
        </p>
        <a href="/" class="inline-block mt-6 bg-[#1E88E5] hover:bg-[#f97316] text-white px-6 py-3 rounded-xl transition duration-300">
          ← Back to Home
        </a>
        <div class="mt-10">
          <img src="/images/thank-you.png" alt="Success Illustration" class="mx-auto w-[240px] h-auto" />
        </div>
      </div>
