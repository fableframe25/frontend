"use client";
import React from "react";

export function WhyChooseFableFrame() {
  const features = [
    {
      title: "Affordable Excellence",
      description: "We deliver premium web development services at startup-friendly prices. Get enterprise-quality websites without the enterprise price tag - perfect for small businesses and individuals.",
      icon: (
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Robot with headphones */}
          <div className="absolute left-4 top-4">
            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-black rounded-full"></div>
              </div>
            </div>
            {/* Headphones */}
            <div className="absolute -top-2 -left-1 w-14 h-6 border-2 border-black rounded-full"></div>
            {/* Wave hand */}
            <div className="absolute -right-2 top-2 w-3 h-8 bg-black rounded-full transform rotate-12"></div>
          </div>
          
          {/* Speech bubble */}
          <div className="absolute top-2 left-16 bg-green-500 text-white text-xs px-2 py-1 rounded-lg">
            GREAT VALUE!
          </div>
          
          {/* Smartphone with chat */}
          <div className="absolute right-4 top-4">
            <div className="w-8 h-12 bg-green-500 rounded-lg p-1">
              <div className="w-full h-2 bg-white rounded mb-1"></div>
              <div className="w-3/4 h-2 bg-white rounded mb-1"></div>
              <div className="w-full h-2 bg-white rounded"></div>
            </div>
          </div>
          
          {/* Document icon */}
          <div className="absolute bottom-4 left-4">
            <div className="w-6 h-8 bg-white rounded border border-gray-300 flex items-center justify-center">
              <div className="w-4 h-5 bg-gray-400 rounded"></div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Fast Turnaround Times",
      description: "We understand that time is money for small businesses. Our streamlined process ensures quick delivery without compromising quality - get your website up and running in record time.",
      icon: (
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Person */}
          <div className="absolute left-4 top-4">
            <div className="w-10 h-10 bg-black rounded-full"></div>
            <div className="w-8 h-12 bg-green-500 rounded-t-full mt-2"></div>
          </div>
          
          {/* Smartphone */}
          <div className="absolute left-16 top-6">
            <div className="w-10 h-14 bg-green-500 rounded-lg p-1">
              <div className="w-full h-1 bg-white rounded mb-1"></div>
              <div className="w-full h-1 bg-white rounded mb-1"></div>
              <div className="w-full h-1 bg-white rounded mb-1"></div>
              <div className="w-full h-1 bg-white rounded"></div>
            </div>
          </div>
          
          {/* Thought bubble */}
          <div className="absolute top-2 right-4">
            <div className="w-16 h-12 bg-black rounded-full"></div>
          </div>
          
          {/* Plant */}
          <div className="absolute right-4 bottom-4">
            <div className="w-4 h-6 bg-green-500 rounded-t-full"></div>
            <div className="w-6 h-2 bg-green-500 rounded-full mt-1"></div>
          </div>
        </div>
      )
    },
    {
      title: "Ongoing Support & Growth",
      description: "We don't just build your website and leave. Our team provides continuous support, maintenance, and optimization to help your business grow and adapt to changing market needs.",
      icon: (
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Smartphone */}
          <div className="absolute left-4 top-4">
            <div className="w-12 h-16 bg-gray-700 rounded-lg transform rotate-12">
              <div className="w-full h-2 bg-white rounded mt-2"></div>
            </div>
          </div>
          
          {/* Snake/ribbon with eye */}
          <div className="absolute left-16 top-6">
            <div className="w-8 h-1 bg-black rounded-full"></div>
            <div className="w-6 h-1 bg-black rounded-full mt-1"></div>
            <div className="w-4 h-1 bg-black rounded-full mt-1"></div>
            <div className="w-2 h-2 bg-white rounded-full border border-black mt-1 ml-1"></div>
          </div>
          
          {/* Person sitting */}
          <div className="absolute right-4 top-6">
            <div className="w-8 h-8 bg-black rounded-full"></div>
            <div className="w-6 h-8 bg-green-500 rounded-t-full mt-1"></div>
            <div className="w-8 h-4 bg-green-500 rounded mt-2"></div>
          </div>
          
          {/* Speech bubble */}
          <div className="absolute top-2 right-12 bg-green-500 text-white text-xs px-2 py-1 rounded-lg">
            We&apos;re here for you!
          </div>
          
          {/* Cogwheels */}
          <div className="absolute bottom-4 right-4 flex space-x-2">
            <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="about" className="py-8 sm:py-12 lg:py-16 bg-white">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-18">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-block bg-green-500 text-white text-xs sm:text-sm font-medium px-3 py-1 rounded-full mb-4">
            WHY FABLE FRAME
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 leading-tight max-w-6xl mx-auto">
            Every business has a story, we frame it for the digital world.
          </h2>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Icon Section */}
              <div className="h-32 sm:h-40 bg-green-100 flex items-center justify-center p-4">
                <div className="w-full h-full">
                  {feature.icon}
                </div>
              </div>
              
              {/* Content Section */}
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
