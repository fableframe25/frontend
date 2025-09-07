import React from 'react';
import SimpleNavbar from "@/components/ui/simple-navbar";
import { Footer } from "@/sections/LandingPage/footer";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      <SimpleNavbar />
      
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-18 pt-24 sm:pt-28 md:pt-32 lg:pt-36 xl:pt-40 pb-12 sm:pb-16 lg:pb-20">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
        
        <div className="prose prose-lg">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Agreement to Terms</h2>
            <p className="text-gray-600 mb-4">
              By accessing and using Fable Frame&apos;s services, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Services Description</h2>
            <p className="text-gray-600 mb-4">
              Fable Frame provides web development, UI/UX design, digital marketing, SEO optimization, and maintenance services. The specific details and deliverables of these services will be outlined in individual service agreements or contracts.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Intellectual Property</h2>
            <p className="text-gray-600 mb-4">
              Unless otherwise stated, Fable Frame owns the intellectual property rights for all material on our website and deliverables. All intellectual property rights are reserved.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. User Obligations</h2>
            <p className="text-gray-600 mb-4">
              Users agree to provide accurate, complete, and updated information as needed for our services. Users are responsible for maintaining the confidentiality of their account information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Payment Terms</h2>
            <p className="text-gray-600 mb-4">
              Payment terms will be specified in individual service agreements. All fees are non-refundable unless otherwise specified in writing.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Limitation of Liability</h2>
            <p className="text-gray-600 mb-4">
              Fable Frame shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Changes to Terms</h2>
            <p className="text-gray-600 mb-4">
              We reserve the right to modify these terms at any time. We will notify users of any changes by posting the new Terms of Service on this page.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Contact Information</h2>
            <p className="text-gray-600 mb-4">
              For any questions about these Terms of Service, please contact us at contact@fableframe.in
            </p>
          </section>
        </div>

        <div className="mt-12 text-sm text-gray-500">
          Last updated: September 8, 2025
        </div>
      </div>

      <Footer />
    </div>
  );
}
