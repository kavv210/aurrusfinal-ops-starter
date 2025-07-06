import Head from 'next/head';

export default function SuccessPage() {
  return (
    <>
      <Head>
        <title>Message Sent | Aurrus Consulting</title>
      </Head>
      <main className="min-h-screen flex items-center justify-center bg-white px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#1E88E5]">Thank You!</h1>
          <p className="mt-4 text-lg text-gray-700">
            Your message has been successfully submitted. We'll get back to you within 24 hours.
          </p>
          <a href="/" className="mt-6 inline-block text-[#1E88E5] underline text-md">
            Back to Home
          </a>
        </div>
      </main>
    </>
  );
}
