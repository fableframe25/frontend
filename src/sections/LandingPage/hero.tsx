"use client";
import React from "react";
import { Cover } from "../../components/ui/cover";
import { ServicesCarousel } from "./services-carousel";

export function CoverDemo() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-18 pt-20 sm:pt-24 md:pt-28 lg:pt-32 xl:pt-36 overflow-x-hidden">
      <div className="text-center w-full max-w-7xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold max-w-6xl mx-auto text-center relative z-20 py-2 sm:py-3 md:py-4 text-black leading-tight">
          Your online journey starts <br className="hidden sm:block" /> with one click at <Cover>Fable Frame</Cover>
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto px-2 sm:px-4 leading-relaxed mb-6 sm:mb-8">
          We don&apos;t just make websites, we build launchpads for your business. At Fable Frame, every site is crafted to grab attention, build trust, and drive growth—so your first click turns into endless opportunities.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
          <a 
            href="https://cal.com/fable-frame-zrqzun"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-black text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-medium flex items-center justify-center gap-2 shadow-lg hover:bg-gray-800 transition-colors text-sm sm:text-base"
          >
            Book a Call
            <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gray-700 rounded-full flex items-center justify-center">
              <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </a>
          <button 
            onClick={() => {
              const projectSection = document.getElementById('projects');  // Make sure this ID matches your projects section
              if (projectSection) {
                projectSection.scrollIntoView({ 
                  behavior: 'smooth',
                  block: 'start'  // This ensures it scrolls to the top of the section
                });
              } else {
                console.log('Projects section not found');  // Debug log if section isn't found
              }
            }}
            className="w-full sm:w-auto bg-white text-gray-700 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-medium flex items-center justify-center gap-2 shadow-lg hover:bg-gray-50 transition-colors border border-gray-200 text-sm sm:text-base"
          >
            Our Work
            <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gray-200 rounded-full flex items-center justify-center">
              <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
