"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/profile.php?id=61580545733600",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.477 2 2 6.477 2 12c0 5.148 3.753 9.47 8.682 10.218v-7.29H8.092V12h2.592V9.61c0-2.585 1.579-3.996 3.885-3.996 1.107 0 2.053.081 2.332.117v2.607h-1.55c-1.218 0-1.455.578-1.455 1.428V12h2.89l-.472 2.928h-2.418v7.29C18.247 21.47 22 17.148 22 12c0-5.523-4.477-10-10-10z"/>
        </svg>
      )
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/fableframe_?igsh=MXBnOWJxM24xOTE2Zg==",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C8.685 2 8.243 2.012 6.96 2.073A5.992 5.992 0 0 0 2.074 6.96C2.012 8.243 2 8.685 2 12s.012 3.757.073 5.04a5.992 5.992 0 0 0 4.887 4.887C8.243 21.988 8.685 22 12 22s3.757-.012 5.04-.073a5.992 5.992 0 0 0 4.887-4.887C21.988 15.757 22 15.315 22 12s-.012-3.757-.073-5.04a5.992 5.992 0 0 0-4.887-4.887C15.757 2.012 15.315 2 12 2zM12 4.072c2.903 0 3.268.01 4.41.066a3.928 3.928 0 0 1 3.256 3.256c.056 1.142.066 1.507.066 4.41s-.01 3.268-.066 4.41a3.928 3.928 0 0 1-3.256 3.256c-1.142.056-1.507.066-4.41.066s-3.268-.01-4.41-.066a3.928 3.928 0 0 1-3.256-3.256c-.056-1.142-.066-1.507-.066-4.41s.01-3.268.066-4.41a3.928 3.928 0 0 1 3.256-3.256c1.142-.056 1.507-.066 4.41-.066zm0 2.218a5.71 5.71 0 1 0 0 11.42 5.71 5.71 0 0 0 0-11.42zm0 2.22c2.038 0 3.69 1.652 3.69 3.69s-1.652 3.69-3.69 3.69-3.69-1.652-3.69-3.69 1.652-3.69 3.69-3.69zm5.558-.707a1.31 1.31 0 1 0 0 2.62 1.31 1.31 0 0 0 0-2.62z"/>
        </svg>
      )
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/fable-frame/",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.763s.784-1.763 1.75-1.763 1.75.79 1.75 1.763-.784 1.763-1.75 1.763zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      )
    },
    {
      name: "X (Twitter)",
      href: "https://x.com/fable_frame?t=EKzUnezY4VWL9_51KJDYdw&s=08",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.244 2.25h3.308l-7.227 8.261 8.502 11.24H16.07l-6.16-8.683L7.5 22.75H4.292l7.182-8.349L6.15 2.25H9.468l5.06 7.463L18.244 2.25zM17.22 20.947H14.15l-4.868-6.936L2.812 2.25H6.126l5.064 6.966L17.22 20.947z"/>
        </svg>
      )
    }
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Industries", href: "#industries" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "/contact" }
  ];

  const services = [
    { name: "Web Development", href: "#web-development" },
    { name: "UI/UX Design", href: "#ui-ux-design" },
    { name: "Digital Marketing", href: "#digital-marketing" },
    { name: "SEO Optimization", href: "#seo" },
    { name: "Maintenance", href: "#maintenance" }
  ];

  return (
    <footer id="contact" className="bg-white text-gray-900">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-18">
        {/* Main Footer Content */}
        <div className="py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="sm:col-span-2 lg:col-span-1">
              <Link href="/" className="flex items-center mb-3 sm:mb-4 hover:opacity-80 transition-opacity duration-200">
                <Image
                  src="/logo-dark.png"
                  alt="Fable Frame Logo"
                  width={120}
                  height={40}
                  className="rounded"
                />
              </Link>
              <p className="text-xs sm:text-sm text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                We build launchpads for your business. Professional web development services 
                that grab attention, build trust, and drive growth.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-6 h-6 text-gray-500 hover:text-gray-900 transition-colors"
                    aria-label={`Follow us on ${social.name}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-1">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4 sm:mb-6">Quick Links</h3>
              <ul className="space-y-2 sm:space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-xs sm:text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="lg:col-span-1">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4 sm:mb-6">Services</h3>
              <ul className="space-y-2 sm:space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a
                      href={service.href}
                      className="text-xs sm:text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
                    >
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="sm:col-span-2 lg:col-span-1">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4 sm:mb-6">Get In Touch</h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start space-x-2 sm:space-x-3">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 text-gray-400">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <a
                      href="mailto:contact@fableframe.in"
                      className="text-xs sm:text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
                    >
                      contact@fableframe.in
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-2 sm:space-x-3">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 text-gray-400">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-gray-600">
                      Available Worldwide
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-2 sm:space-x-3">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 text-gray-400">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-gray-600">
                      24x7 Available
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 py-4 sm:py-6 md:py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-3 sm:space-y-0">
            <div className="text-xs sm:text-sm text-gray-600">
              © {currentYear} Fable Frame. All rights reserved.
            </div>
            <div className="flex items-center space-x-4 sm:space-x-6 text-xs sm:text-sm text-gray-600">
              <a href="/privacy-policy" className="hover:text-gray-900 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="/terms-of-service" className="hover:text-gray-900 transition-colors duration-200">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
