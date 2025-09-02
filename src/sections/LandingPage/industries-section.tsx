"use client";
import React from "react";

export function IndustriesSection() {
  const industries = [
    {
      title: "Automotive",
      description: "Car dealerships and service centers struggle with outdated websites that don't showcase inventory effectively or provide easy appointment booking systems.",
             image: (
         <div className="w-full h-32 bg-gradient-to-br from-blue-100 to-blue-200 rounded-t-lg flex items-center justify-center">
          <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "E-commerce",
      description: "Online stores need modern, fast-loading websites with seamless checkout experiences and mobile optimization to compete with major retailers.",
             image: (
         <div className="w-full h-32 bg-gradient-to-br from-purple-100 to-purple-200 rounded-t-lg flex items-center justify-center">
          <div className="w-16 h-16 bg-purple-500 rounded-lg flex items-center justify-center">
            <div className="w-8 h-8 bg-white rounded"></div>
          </div>
        </div>
      )
    },
    {
      title: "Education",
      description: "Schools and training centers require websites that can handle course registrations, student portals, and showcase educational programs effectively.",
             image: (
         <div className="w-full h-32 bg-gradient-to-br from-green-100 to-green-200 rounded-t-lg flex items-center justify-center">
          <div className="w-16 h-16 bg-green-500 rounded-lg flex items-center justify-center">
            <div className="w-8 h-8 bg-white rounded"></div>
          </div>
        </div>
      )
    },
    {
      title: "Home Services",
      description: "Plumbers, electricians, and contractors need professional websites with easy booking systems and service area information to attract local customers.",
             image: (
         <div className="w-full h-32 bg-gradient-to-br from-orange-100 to-orange-200 rounded-t-lg flex items-center justify-center">
          <div className="w-16 h-16 bg-orange-500 rounded-lg flex items-center justify-center">
            <div className="w-8 h-8 bg-white rounded"></div>
          </div>
        </div>
      )
    },
    {
      title: "Finance",
      description: "Financial advisors and small banks need secure, professional websites that build trust and provide easy access to services and contact information.",
             image: (
         <div className="w-full h-32 bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-t-lg flex items-center justify-center">
          <div className="w-16 h-16 bg-indigo-500 rounded-lg flex items-center justify-center">
            <div className="w-8 h-8 bg-white rounded"></div>
          </div>
        </div>
      )
    },
    {
      title: "Healthcare",
      description: "Medical practices and clinics need HIPAA-compliant websites with appointment booking, patient portals, and professional medical information.",
             image: (
         <div className="w-full h-32 bg-gradient-to-br from-pink-100 to-pink-200 rounded-t-lg flex items-center justify-center">
          <div className="w-16 h-16 bg-pink-500 rounded-lg flex items-center justify-center">
            <div className="w-8 h-8 bg-white rounded"></div>
          </div>
        </div>
      )
    },
    {
      title: "Restaurants",
      description: "Restaurants need attractive websites with online ordering, menu displays, and reservation systems to compete in the digital dining space.",
             image: (
         <div className="w-full h-32 bg-gradient-to-br from-red-100 to-red-200 rounded-t-lg flex items-center justify-center">
          <div className="w-16 h-16 bg-red-500 rounded-lg flex items-center justify-center">
            <div className="w-8 h-8 bg-white rounded"></div>
          </div>
        </div>
      )
    },
    {
      title: "Real Estate",
      description: "Real estate agents need property listing websites with search functionality, virtual tours, and lead capture forms to showcase properties effectively.",
             image: (
         <div className="w-full h-32 bg-gradient-to-br from-gray-100 to-gray-200 rounded-t-lg flex items-center justify-center">
          <div className="w-16 h-16 bg-gray-500 rounded-lg flex items-center justify-center">
            <div className="w-8 h-8 bg-white rounded"></div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-white">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-18">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-8 sm:mb-12">
          <div className="flex-1">
            <div className="flex items-center mb-4">
              <div className="w-6 h-6 bg-green-500 rounded mr-2"></div>
              <span className="text-sm font-medium text-gray-600">Industries We Serve</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 leading-tight mb-3">
              Tailored Web Solutions for Every Industry - Solving Real Business Challenges
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-3xl">
              We understand the unique digital needs of different industries and create custom solutions that address specific business challenges.
            </p>
          </div>
          <div className="mt-6 lg:mt-0 lg:ml-8">
            <button className="inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
              View all Industries
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Industry Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden group"
            >
              {/* Image */}
              {industry.image}
              
              {/* Content */}
              <div className="p-4">
                <p className="text-xs sm:text-sm text-gray-600 mb-3 leading-relaxed">
                  {industry.description}
                </p>
                <div className="flex items-center justify-between">
                  <h3 className="text-sm sm:text-base font-semibold text-gray-900">
                    {industry.title}
                  </h3>
                  <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                    <svg className="w-3 h-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
