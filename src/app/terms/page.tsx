import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Cyber Nova Academy",
  description: "Review the terms and conditions for enrolling in courses and using Cyber Nova Academy's platform.",
};

export default function TermsPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Terms & Conditions</h1>
      <p className="text-sm text-gray-500 mb-8">Last updated: October 15, 2026</p>
      
      <section className="space-y-4 text-base leading-relaxed">
        <h2 className="text-xl font-semibold mt-6 mb-2">1. Agreement to Terms</h2>
        <p>
          By accessing or using Cyber Nova Academy's website and services, you agree to be bound by these Terms and Conditions. If you disagree with any part of the terms, you may not access our services.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">2. Intellectual Property Rights</h2>
        <p>
          Other than content you own, under these Terms, Cyber Nova Academy and/or its licensors own all the intellectual property rights and materials contained in this website.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">3. Course Enrollment & Fees</h2>
        <p>
          All course enrollments require accurate user information. Fees must be cleared according to the agreed schedule for continuous access to class modules and training sessions.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">4. Limitation of Liability</h2>
        <p>
          In no event shall Cyber Nova Academy, nor any of its officers, directors, and employees, be held liable for anything arising out of or in any way connected with your use of this website.
        </p>
      </section>
    </main>
  );
}