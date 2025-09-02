"use client";
import React from "react";

export function ServicesSection() {
  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-white">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-18">
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
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
              Custom Website Development
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed">
              Transform your business idea into a stunning, professional website. We build responsive, fast-loading websites that convert visitors into customers - perfect for startups and small businesses.
            </p>
            
            {/* Phone Mockup */}
            <div className="relative">
              <div className="w-48 h-80 mx-auto bg-gray-900 rounded-3xl p-2 relative">
                <div className="w-full h-full bg-white rounded-2xl overflow-hidden">
                  {/* Phone Screen Content */}
                  <div className="p-4">
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 bg-green-500 rounded-full mr-3"></div>
                      <div>
                        <div className="text-xs font-medium text-gray-900">Fable Frame</div>
                        <div className="text-xs text-gray-500">Web Development</div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="bg-gray-100 rounded-lg p-2">
                        <div className="text-xs font-medium text-gray-900">Portfolio Website</div>
                        <div className="text-xs text-gray-500">$1,250.00</div>
                      </div>
                      <div className="bg-gray-100 rounded-lg p-2">
                        <div className="text-xs font-medium text-gray-900">E-commerce Store</div>
                        <div className="text-xs text-gray-500">Project completed</div>
                      </div>
                      <div className="bg-gray-100 rounded-lg p-2">
                        <div className="text-xs font-medium text-gray-900">Mobile App</div>
                        <div className="text-xs text-gray-500">Development started</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Hand overlay */}
              <div className="absolute -bottom-4 -right-4 w-16 h-20 opacity-30">
                <div className="w-full h-full bg-gray-300 rounded-full"></div>
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
              
              {/* App Logos */}
              <div className="flex flex-wrap gap-4">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                  <div className="w-6 h-6 bg-white rounded"></div>
                </div>
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                  <div className="w-6 h-6 bg-white rounded"></div>
                </div>
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                  <div className="w-6 h-6 bg-white rounded"></div>
                </div>
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                  <div className="w-6 h-6 bg-white rounded"></div>
                </div>
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <div className="w-6 h-6 bg-white rounded"></div>
                </div>
              </div>
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
              
              <div className="flex items-center justify-between">
                <button className="inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                  Get Free Quote
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
                  </svg>
                </button>
                
                {/* Platform Logos */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <div className="w-5 h-5 bg-white rounded-full"></div>
                  </div>
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                    <div className="w-5 h-5 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* New Section - Similar to Image Layout */}
        <div className="mt-4 sm:mt-6 lg:mt-8">
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
