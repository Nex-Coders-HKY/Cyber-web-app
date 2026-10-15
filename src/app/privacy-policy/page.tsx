import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Cyber Nova Academy",
  description: "Read our privacy policy to understand how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-8">Last updated: October 15, 2026</p>
      
      <section className="space-y-4 text-base leading-relaxed">
        <h2 className="text-xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
        <p>
          We collect personal information that you voluntarily provide to us when registering at the academy, expressing interest in obtaining information about us or our courses, and when participating in activities on the website.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">2. How We Use Your Information</h2>
        <p>
          We use information collected via our website for various business purposes described below, including to manage student accounts, provide course materials, and send administrative information.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">3. Data Security</h2>
        <p>
          We implement appropriate technical and organizational security measures designed to protect the security of any personal information we process.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">4. Contact Us</h2>
        <p>
          If you have questions or comments about this policy, you may contact us at our Karachi campus or via email.
        </p>
      </section>
    </main>
  );
}