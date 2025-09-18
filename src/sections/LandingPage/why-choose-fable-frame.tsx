"use client";
import React from "react";
import Image from "next/image";

export function WhyChooseFableFrame() {
  const features = [
    {
      title: "Affordable Excellence",
      description:
        "We deliver premium web development services at startup-friendly prices. Get enterprise-quality websites without the enterprise price tag - perfect for small businesses and individuals.",
      image: "/why-fableframe/1.jpg",
    },
    {
      title: "Fast Turnaround Times",
      description:
        "We understand that time is money for small businesses. Our streamlined process ensures quick delivery without compromising quality - get your website up and running in record time.",
      image: "/why-fableframe/ttt.png",
    },
    {
      title: "Ongoing Support & Growth",
      description:
        "We don't just build your website and leave. Our team provides continuous support, maintenance, and optimization to help your business grow and adapt to changing market needs.",
      image: "/why-fableframe/dd.png",
    },
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
              {/* Image Section */}
              <div className="h-72 sm:h-96 relative overflow-hidden">
                <Image
                  src={feature.image}
                  alt={`${feature.title} - Fable Frame`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
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
