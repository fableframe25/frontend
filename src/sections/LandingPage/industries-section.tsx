"use client";
import React from "react";
import Image from "next/image";

export function IndustriesSection() {
  const industries = [
    {
      title: "Automotive",
      description: "Car dealerships and service centers struggle with outdated websites that don't showcase inventory effectively or provide easy appointment booking systems.",
      image: "/industries/automotive.jpg"
    },
    {
      title: "E-commerce",
      description: "Online stores need modern, fast-loading websites with seamless checkout experiences and mobile optimization to compete with major retailers.",
      image: "/industries/e-commerce.jpg"
    },
    {
      title: "Education",
      description: "Schools and training centers require websites that can handle course registrations, student portals, and showcase educational programs effectively.",
      image: "/industries/education.jpg"
    },
    {
      title: "Home Services",
      description: "Plumbers, electricians, and contractors need professional websites with easy booking systems and service area information to attract local customers.",
      image: "/industries/homeservice.jpg"
    },
    {
      title: "Finance",
      description: "Financial advisors and small banks need secure, professional websites that build trust and provide easy access to services and contact information.",
      image: "/industries/finance.jpg"
    },
    {
      title: "Healthcare",
      description: "Medical practices and clinics need HIPAA-compliant websites with appointment booking, patient portals, and professional medical information.",
      image: "/industries/healthcare.jpg"
    },
    {
      title: "Restaurants",
      description: "Restaurants need attractive websites with online ordering, menu displays, and reservation systems to compete in the digital dining space.",
      image: "/industries/resturamts.jpg"
    },
    {
      title: "Real Estate",
      description: "Real estate agents need property listing websites with search functionality, virtual tours, and lead capture forms to showcase properties effectively.",
      image: "/industries/realestate.jpg"
    }
  ];

  return (
    <section id="industries" className="py-8 sm:py-12 lg:py-16 bg-white">
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
        </div>

        {/* Industry Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden group"
            >
              {/* Image */}
              <div className="w-full h-32 relative overflow-hidden rounded-t-lg">
                <Image
                  src={industry.image}
                  alt={`${industry.title} industry`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
              
              {/* Content */}
              <div className="p-4">
                <p className="text-xs sm:text-sm text-gray-600 mb-3 leading-relaxed">
                  {industry.description}
                </p>
                <h3 className="text-sm sm:text-base font-semibold text-gray-900">
                  {industry.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
