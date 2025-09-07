"use client";
import React from "react";

export default function ServicesSection() {
  return (
    <section id="services" className="py-8 sm:py-12 lg:py-16 bg-white overflow-hidden font-sans">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="w-6 h-6 bg-green-500 rounded mr-2"></div>
            <span className="text-sm font-medium text-gray-600">Our Services</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold text-gray-900 leading-tight max-w-5xl mx-auto">
            Affordable Web Solutions for Small Businesses - From Concept to Launch
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Card - Custom Website Development */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8 flex flex-col items-center justify-between">
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
                Custom Website Development
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed">
                Transform your business idea into a stunning, professional website. We build responsive, fast-loading websites that convert visitors into customers - perfect for startups and small businesses.
              </p>
            </div>
            
            {/* Phone Mockup - Enhanced for realism */}
            <div className="relative mt-8 lg:mt-0 flex-shrink-0">
              {/* This is the outer phone body with a subtle bezel effect */}
              <div className="w-56 h-96 bg-gray-900 rounded-[3rem] p-2 relative shadow-2xl">
                {/* Camera cutout */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-12 h-4 bg-gray-800 rounded-b-lg z-10"></div>
                
                {/* Screen content container with subtle background and scroll effect */}
                <div className="w-full h-full bg-gray-50 rounded-[2.5rem] overflow-hidden">
                  <div className="h-full overflow-y-auto px-4 pt-8 pb-4">
                    {/* Phone Screen Content */}
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 bg-green-500 rounded-full mr-3"></div>
                      <div>
                        <div className="text-xs font-medium text-gray-900">Fable Frame</div>
                        <div className="text-xs text-gray-500">Web Development</div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="bg-gray-100 rounded-lg p-3 shadow-sm">
                        <div className="text-xs font-medium text-gray-900">Portfolio Website</div>
                        <div className="text-xs text-gray-500">$1,250.00</div>
                      </div>
                      <div className="bg-gray-100 rounded-lg p-3 shadow-sm">
                        <div className="text-xs font-medium text-gray-900">E-commerce Store</div>
                        <div className="text-xs text-gray-500">Project completed</div>
                      </div>
                      <div className="bg-gray-100 rounded-lg p-3 shadow-sm">
                        <div className="text-xs font-medium text-gray-900">Mobile App</div>
                        <div className="text-xs text-gray-500">Development started</div>
                      </div>
                      <div className="bg-gray-100 rounded-lg p-3 shadow-sm">
                        <div className="text-xs font-medium text-gray-900">Business Website</div>
                        <div className="text-xs text-gray-500">Drafting proposal</div>
                      </div>
                      <div className="bg-gray-100 rounded-lg p-3 shadow-sm">
                        <div className="text-xs font-medium text-gray-900">SEO & Marketing</div>
                        <div className="text-xs text-gray-500">Ongoing service</div>
                      </div>
                      <div className="bg-gray-100 rounded-lg p-3 shadow-sm">
                        <div className="text-xs font-medium text-gray-900">Content Creation</div>
                        <div className="text-xs text-gray-500">Meeting scheduled</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8 lg:space-y-12">
            {/* Top Right Card - Complete Digital Solutions */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
                Complete Digital Solutions - Everything You Need
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed">
                From website design to SEO optimization, mobile apps to e-commerce solutions - we provide end-to-end digital services that help small businesses compete with larger companies.
              </p>
              <p className="text-sm sm:text-base font-medium text-gray-900 mb-6">
                One agency. Complete digital transformation. Affordable pricing.
              </p>
            </div>

            {/* Bottom Right Card - Ongoing Support */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">
                Ongoing Support & Maintenance
              </h3>
              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">
                We&apos;re Here for the Long Haul
              </h4>
              <p className="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed">
                Your success is our priority. We provide ongoing website maintenance, updates, SEO optimization, and technical support to ensure your digital presence stays competitive and up-to-date.
              </p>
              
              <div className="flex items-center justify-between flex-wrap gap-4">
                <a
                  href="https://cal.com/fable-frame-zrqzun"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Talk with our team
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
                  </svg>
                </a>
                
                {/* Social Media Icons with accurate SVG paths */}
                <div className="flex gap-4">
                  <a href="https://www.facebook.com/profile.php?id=61580545733600" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <svg className="w-6 h-6 text-gray-500 hover:text-blue-600 transition-colors" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 5.148 3.753 9.47 8.682 10.218v-7.29H8.092V12h2.592V9.61c0-2.585 1.579-3.996 3.885-3.996 1.107 0 2.053.081 2.332.117v2.607h-1.55c-1.218 0-1.455.578-1.455 1.428V12h2.89l-.472 2.928h-2.418v7.29C18.247 21.47 22 17.148 22 12c0-5.523-4.477-10-10-10z"/>
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/fableframe_?igsh=MXBnOWJxM24xOTE2Zg==" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <svg className="w-6 h-6 text-gray-500 hover:text-pink-600 transition-colors" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C8.685 2 8.243 2.012 6.96 2.073A5.992 5.992 0 0 0 2.074 6.96C2.012 8.243 2 8.685 2 12s.012 3.757.073 5.04a5.992 5.992 0 0 0 4.887 4.887C8.243 21.988 8.685 22 12 22s3.757-.012 5.04-.073a5.992 5.992 0 0 0 4.887-4.887C21.988 15.757 22 15.315 22 12s-.012-3.757-.073-5.04a5.992 5.992 0 0 0-4.887-4.887C15.757 2.012 15.315 2 12 2zM12 4.072c2.903 0 3.268.01 4.41.066a3.928 3.928 0 0 1 3.256 3.256c.056 1.142.066 1.507.066 4.41s-.01 3.268-.066 4.41a3.928 3.928 0 0 1-3.256 3.256c-1.142.056-1.507.066-4.41.066s-3.268-.01-4.41-.066a3.928 3.928 0 0 1-3.256-3.256c-.056-1.142-.066-1.507-.066-4.41s.01-3.268.066-4.41a3.928 3.928 0 0 1 3.256-3.256c1.142-.056 1.507-.066 4.41-.066zm0 2.218a5.71 5.71 0 1 0 0 11.42 5.71 5.71 0 0 0 0-11.42zm0 2.22c2.038 0 3.69 1.652 3.69 3.69s-1.652 3.69-3.69 3.69-3.69-1.652-3.69-3.69 1.652-3.69 3.69-3.69zm5.558-.707a1.31 1.31 0 1 0 0 2.62 1.31 1.31 0 0 0 0-2.62z"/>
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/company/fable-frame/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <svg className="w-6 h-6 text-gray-500 hover:text-blue-800 transition-colors" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.763s.784-1.763 1.75-1.763 1.75.79 1.75 1.763-.784 1.763-1.75 1.763zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a href="https://x.com/fable_frame?t=EKzUnezY4VWL9_51KJDYdw&s=08" target="_blank" rel="noopener noreferrer" aria-label="X (formerly Twitter)">
                    <svg className="w-6 h-6 text-gray-500 hover:text-black transition-colors" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18.244 2.25h3.308l-7.227 8.261 8.502 11.24H16.07l-6.16-8.683L7.5 22.75H4.292l7.182-8.349L6.15 2.25H9.468l5.06 7.463L18.244 2.25zM17.22 20.947H14.15l-4.868-6.936L2.812 2.25H6.126l5.064 6.966L17.22 20.947z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* New Section */}
        <div className="mt-8 sm:mt-12 lg:mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Left Card - Ready-to-Use Website Templates */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
                Ready-to-Use Website Templates That Work
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Add intelligent, ready-to-use website templates to your business that engage visitors instantly. From portfolio sites to e-commerce stores, these templates work 24/7 - so you never miss a customer, even when you&apos;re focused on your core business.
              </p>
            </div>

            {/* Middle Card - Development Interface */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8">
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-sm font-bold text-gray-900">fableframe</div>
                  <div className="text-xs text-gray-500">Web Development</div>
                </div>
                
                <div className="space-y-3">
                  <div className="bg-green-500 text-white text-sm px-3 py-2 rounded-lg">
                    Hello! How can we help you build your website? 👋
                  </div>
                  
                  <div className="bg-white border border-gray-200 rounded-lg p-3">
                    <div className="text-xs font-medium text-gray-900 mb-2">Choose Your Project Type:</div>
                    <div className="space-y-2">
                      <button className="w-full text-left bg-green-100 text-green-800 text-xs px-3 py-2 rounded-lg flex items-center justify-between">
                        Portfolio Website
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                      <button className="w-full text-left bg-green-100 text-green-800 text-xs px-3 py-2 rounded-lg flex items-center justify-between">
                        E-commerce Store
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                      <button className="w-full text-left bg-green-100 text-green-800 text-xs px-3 py-2 rounded-lg flex items-center justify-between">
                        Business Website
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex items-center bg-white border border-gray-200 rounded-lg px-3 py-2">
                    <input type="text" placeholder="Describe your project..." className="flex-1 text-xs bg-transparent outline-none" />
                    <div className="flex gap-2">
                      <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                      <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="text-xs text-gray-500 text-center">
                    powered by fableframe
                  </div>
                </div>
              </div>
            </div>

            {/* Right Card - Most Powerful Platform */}
            <div className="bg-gray-900 rounded-2xl p-6 sm:p-8 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="w-full h-full" style={{
                  backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
                  backgroundSize: '20px 20px'
                }}></div>
              </div>
              
              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 leading-tight">
                  Most Powerful <span className="text-green-400">Web Development</span> Platform, Built with passion,
                </h3>
                <p className="text-sm sm:text-base text-gray-300 mb-6">
                  Made to be loved ❤️
                </p>
                
                <button className="inline-flex items-center px-4 py-2 bg-white text-gray-900 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">
                  Start Project
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
