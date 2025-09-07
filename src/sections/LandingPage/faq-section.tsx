"use client";
import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const faqData: FAQItem[] = [
    {
      question: "What services does Fable Frame provide?",
      answer: "Fable Frame offers comprehensive web development services including custom website development, e-commerce solutions, UI/UX design, digital marketing, SEO optimization, and ongoing maintenance. We specialize in creating professional websites for small businesses and startups."
    },
    {
      question: "How do I book a service?",
      answer: "Booking is simple! You can schedule a free consultation through our website, contact us directly via email or phone, or use our online booking system. We'll discuss your needs, provide a custom quote, and create a timeline that works for your business."
    },
    {
      question: "Are your developers verified?",
      answer: "Yes! All our developers are experienced professionals with verified portfolios and proven track records. We conduct thorough background checks and only work with certified developers who have demonstrated expertise in modern web technologies and best practices."
    },
    {
      question: "What if I need to reschedule or cancel?",
      answer: "We understand that plans can change. You can reschedule or cancel your project up to 48 hours before the scheduled start date without any penalties. For cancellations closer to the start date, we'll work with you to find the best solution."
    },
    {
      question: "Do you offer emergency services?",
      answer: "Yes! We offer emergency website fixes and urgent updates for existing clients. Our emergency services include website crashes, security issues, urgent content updates, and critical bug fixes. Contact us immediately for emergency support."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-18">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 leading-tight max-w-4xl mx-auto mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Everything you need to know about our services and process
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3 sm:space-y-4 md:space-y-6">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`rounded-2xl border-2 border-black overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'bg-[#37f713]' : 'bg-white'
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-6 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-2xl"
              >
                <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
                  <div className={`w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-xs sm:text-sm md:text-base font-bold ${
                    openIndex === index ? 'bg-black text-white' : 'bg-gray-100 text-gray-700'
                  }`}>
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <h3 className={`text-xs sm:text-sm md:text-base lg:text-lg font-semibold pr-2 sm:pr-4 ${
                    openIndex === index ? 'text-black' : 'text-gray-900'
                  }`}>
                    {faq.question}
                  </h3>
                </div>
                <div className="flex-shrink-0">
                  <div className={`w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center ${
                    openIndex === index ? 'bg-black' : 'bg-gray-100'
                  }`}>
                    {openIndex === index ? (
                      <svg
                        className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-gray-700"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                    )}
                  </div>
                </div>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-4 sm:px-6 md:px-8 pb-3 sm:pb-4 md:pb-6">
                  <p className="text-xs sm:text-sm md:text-base text-black leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-8 sm:mt-12 md:mt-16">
          <div className="bg-gray-50 rounded-xl sm:rounded-2xl border border-gray-200 p-4 sm:p-6 md:p-8">
            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
              Still have questions?
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-4 sm:mb-6 max-w-2xl mx-auto">
              Our team is here to help! Contact us directly and we&apos;ll answer all your questions 
              and discuss how we can help grow your business online.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 justify-center items-center">
              <a href="mailto:contact@fableframe.in" className="w-full sm:w-auto bg-black text-white px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-full font-semibold flex items-center justify-center gap-2 shadow-lg hover:bg-gray-800 transition-colors text-xs sm:text-sm md:text-base">
                Contact Us Now
                <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-gray-700 rounded-full flex items-center justify-center">
                  <svg className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </a>
              <a href="https://cal.com/fable-frame-zrqzun" className="w-full sm:w-auto bg-white text-gray-700 px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-full font-semibold flex items-center justify-center gap-2 border border-gray-300 hover:bg-gray-50 transition-colors text-xs sm:text-sm md:text-base">
                Schedule Consultation
                <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-gray-200 rounded-full flex items-center justify-center">
                  <svg className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}