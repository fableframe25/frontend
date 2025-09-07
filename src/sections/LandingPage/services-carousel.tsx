"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export function ServicesCarousel() {
  // Temporarily commented out - will be re-enabled later
  return null;
  const services = [
    { name: "Website Development", image: "/service-crusol/shutterstock_394793860-1536x1177.jpg" },
    { name: "Mobile App Development", image: "/service-crusol/Mobile-Application-Development-Services.png" },
    { name: "E-commerce Solutions", image: "/service-crusol/E-commerce-solution.jpg" },
    { name: "UI/UX Design", image: "/service-crusol/ui-ux.jpg" },
    { name: "SEO Optimization", image: "/service-crusol/content.jpg" },
    { name: "Website Maintenance", image: "/service-crusol/Website-Maintenance.jpeg" },
    { name: "Cloud Deployment", image: "/service-crusol/cloud.jpg" },
    { name: "Performance Optimization", image: "/service-crusol/web-performance-optimization-featured.png" },
    { name: "Content Management", image: "/service-crusol/content.jpg" },
    { name: "API Development", image: "/service-crusol/api-development.jpg" },
    { name: "Database Design", image: "/service-crusol/database_design.webp" }
  ];

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition((prev) => {
        // Responsive box width calculation
        const containerWidth = window.innerWidth;
        let boxWidth;
        
        if (containerWidth < 640) { // sm
          boxWidth = containerWidth * 0.4; // 40% on mobile
        } else if (containerWidth < 768) { // md
          boxWidth = containerWidth * 0.3; // 30% on tablet
        } else if (containerWidth < 1024) { // lg
          boxWidth = containerWidth * 0.25; // 25% on small desktop
        } else if (containerWidth < 1280) { // xl
          boxWidth = containerWidth * 0.2; // 20% on desktop
        } else { // 2xl and above
          boxWidth = containerWidth * 0.15; // 15% on large screens
        }
        
        return (prev + 1) % (services.length * boxWidth);
      });
    }, 50); // Speed of movement

    return () => clearInterval(interval);
  }, [services.length]);

  return (
    <div className="relative overflow-hidden bg-white py-4 sm:py-6 lg:py-8 mt-8 sm:mt-12 lg:mt-16 overflow-x-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white z-10 pointer-events-none"></div>
      
      <div 
        className="flex whitespace-nowrap transition-transform duration-1000 ease-linear"
        style={{ transform: `translateX(-${scrollPosition}px)` }}
      >
        {/* First set of services */}
        {services.map((service, index) => (
          <div
            key={`first-${index}`}
            className="inline-flex flex-col items-center mx-2 sm:mx-3 md:mx-4 bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300 flex-shrink-0 w-[40%] sm:w-[30%] md:w-[25%] lg:w-[20%] xl:w-[15%]"
          >
            <div className="w-full aspect-square relative overflow-hidden">
              <Image
                src={service.image}
                alt={`${service.name} service`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 40vw, (max-width: 768px) 30vw, (max-width: 1024px) 25vw, (max-width: 1280px) 20vw, 15vw"
              />
            </div>
            <div className="p-2 sm:p-3 text-center">
              <h3 className="text-xs sm:text-sm md:text-base font-medium text-gray-800 leading-tight">{service.name}</h3>
            </div>
          </div>
        ))}
        
        {/* Duplicate set for seamless loop */}
        {services.map((service, index) => (
          <div
            key={`second-${index}`}
            className="inline-flex flex-col items-center mx-2 sm:mx-3 md:mx-4 bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300 flex-shrink-0 w-[40%] sm:w-[30%] md:w-[25%] lg:w-[20%] xl:w-[15%]"
          >
            <div className="w-full aspect-square relative overflow-hidden">
              <Image
                src={service.image}
                alt={`${service.name} service`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 40vw, (max-width: 768px) 30vw, (max-width: 1024px) 25vw, (max-width: 1280px) 20vw, 15vw"
              />
            </div>
            <div className="p-2 sm:p-3 text-center">
              <h3 className="text-xs sm:text-sm md:text-base font-medium text-gray-800 leading-tight">{service.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
