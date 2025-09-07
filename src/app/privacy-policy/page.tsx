import React from "react";
import { NavbarDemo } from "@/sections/LandingPage/navbar";
import { Footer } from "@/sections/LandingPage/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Fable Frame",
  description: "Learn how Fable Frame protects your privacy and handles your personal information. Our comprehensive privacy policy covers data collection, usage, security, and your rights as a user.",
  keywords: [
    "privacy policy",
    "data protection",
    "personal information",
    "privacy rights",
    "data security",
    "GDPR compliance",
    "web development privacy",
    "Fable Frame privacy"
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Privacy Policy - Fable Frame",
    description: "Learn how Fable Frame protects your privacy and handles your personal information. Our comprehensive privacy policy covers data collection, usage, security, and your rights.",
    type: "article",
    url: "https://fableframe.com/privacy-policy",
  },
  twitter: {
    title: "Privacy Policy - Fable Frame",
    description: "Learn how Fable Frame protects your privacy and handles your personal information.",
  },
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <NavbarDemo />
      
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-18 py-12 sm:py-16 lg:py-20">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 leading-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            Last updated: {new Date().toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <div className="space-y-8">
            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Welcome to Fable Frame (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with us.
              </p>
              <p className="text-gray-700 leading-relaxed">
                By using our website or services, you consent to the data practices described in this Privacy Policy. If you do not agree with the terms of this Privacy Policy, please do not use our website or services.
              </p>
            </section>

            {/* Information We Collect */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>
              
              <h3 className="text-xl font-medium text-gray-900 mb-3">2.1 Personal Information</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may collect the following types of personal information:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                <li>Name and contact information (email address, phone number, mailing address)</li>
                <li>Business information (company name, job title, industry)</li>
                <li>Project requirements and specifications</li>
                <li>Payment information (processed securely through third-party payment processors)</li>
                <li>Communication preferences and correspondence</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-3">2.2 Technical Information</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We automatically collect certain technical information when you visit our website:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                <li>IP address and location data</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Pages visited and time spent on our website</li>
                <li>Referring website information</li>
                <li>Device information and screen resolution</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-3">2.3 Cookies and Tracking Technologies</h3>
              <p className="text-gray-700 leading-relaxed">
                We use cookies, web beacons, and similar tracking technologies to enhance your experience, analyze website traffic, and personalize content. You can control cookie settings through your browser preferences.
              </p>
            </section>

            {/* How We Use Information */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use the collected information for the following purposes:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                <li>Provide and improve our web development services</li>
                <li>Communicate with you about projects, services, and updates</li>
                <li>Process payments and manage billing</li>
                <li>Respond to inquiries and provide customer support</li>
                <li>Send marketing communications (with your consent)</li>
                <li>Analyze website usage and improve user experience</li>
                <li>Comply with legal obligations and protect our rights</li>
                <li>Prevent fraud and ensure security</li>
              </ul>
            </section>

            {/* Information Sharing */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Information Sharing and Disclosure</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
              </p>
              
              <h3 className="text-xl font-medium text-gray-900 mb-3">4.1 Service Providers</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may share information with trusted third-party service providers who assist us in operating our website, conducting business, or servicing you. These parties are bound by confidentiality agreements and are prohibited from using your information for any other purpose.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">4.2 Legal Requirements</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may disclose your information if required by law, regulation, legal process, or governmental request, or to protect our rights, property, or safety, or that of our users or the public.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">4.3 Business Transfers</h3>
              <p className="text-gray-700 leading-relaxed">
                In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the transaction, subject to the same privacy protections.
              </p>
            </section>

            {/* Data Security */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Data Security</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                <li>SSL encryption for data transmission</li>
                <li>Secure servers and databases</li>
                <li>Regular security assessments and updates</li>
                <li>Access controls and authentication procedures</li>
                <li>Employee training on data protection</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your personal information, we cannot guarantee absolute security.
              </p>
            </section>

            {/* Your Rights */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Your Rights and Choices</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Depending on your location, you may have the following rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                <li><strong>Access:</strong> Request access to your personal information</li>
                <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Portability:</strong> Request transfer of your data to another service</li>
                <li><strong>Restriction:</strong> Request restriction of processing</li>
                <li><strong>Objection:</strong> Object to certain types of processing</li>
                <li><strong>Withdraw Consent:</strong> Withdraw consent for marketing communications</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                To exercise these rights, please contact us at <a href="mailto:contact@fableframe.in" className="text-blue-600 hover:text-blue-800">contact@fableframe.in</a>.
              </p>
            </section>

            {/* Data Retention */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Data Retention</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. We will delete or anonymize your information when it is no longer needed.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Project-related information may be retained for longer periods to provide ongoing support and maintain business records.
              </p>
            </section>

            {/* International Transfers */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. International Data Transfers</h2>
              <p className="text-gray-700 leading-relaxed">
                Your information may be transferred to and processed in countries other than your own. We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards to protect your information.
              </p>
            </section>

            {/* Children's Privacy */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Children&apos;s Privacy</h2>
              <p className="text-gray-700 leading-relaxed">
                Our services are not directed to children under 13 years of age. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.
              </p>
            </section>

            {/* Third-Party Links */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Third-Party Links</h2>
              <p className="text-gray-700 leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
              </p>
            </section>

            {/* Changes to Privacy Policy */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Changes to This Privacy Policy</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                <li>Posting the updated policy on our website</li>
                <li>Sending an email notification (if applicable)</li>
                <li>Updating the &quot;Last updated&quot; date</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Your continued use of our services after any changes constitutes acceptance of the updated Privacy Policy.
              </p>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Contact Us</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 text-gray-600">
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-700 font-medium">Email</p>
                      <a href="mailto:contact@fableframe.in" className="text-blue-600 hover:text-blue-800">
                        contact@fableframe.in
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 text-gray-600">
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-700 font-medium">Location</p>
                      <p className="text-gray-600">Available Worldwide</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
