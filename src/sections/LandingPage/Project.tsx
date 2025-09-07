"use client";
import React from "react";
import { EvervaultCard } from "@/components/ui/evervault-card";

interface Project {
  title: string;
  description: string;
  link: string;
  category: string;
}

export function ProjectSection() {
  const projects: Project[] = [
    {
      title: "Content Catalyst",
      description: "AI-powered content creation platform with 30+ templates for blogs, social media, and more. Features comprehensive history & billing management.",
      link: "https://content-catalyst.vercel.app/",
      category: "AI Content"
    },
    {
      title: "Edu Empower",
      description: "Educational empowerment platform designed to enhance learning experiences and student engagement through innovative digital solutions.",
      link: "https://edu-empower-rho.vercel.app/",
      category: "Education"
    },
    {
      title: "Miranda Portfolio",
      description: "Elegant paper-style portfolio showcasing creative design and professional presentation with modern aesthetics and smooth interactions.",
      link: "https://akash202004.github.io/miranda-paper-portfolio/",
      category: "Portfolio"
    }
  ];

  return (
    <section id="project-section" className="py-8 sm:py-12 lg:py-16 bg-white">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-18">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-block bg-green-500 text-white text-xs sm:text-sm font-medium px-3 py-1 rounded-full mb-4">
            OUR LIVE PROJECTS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 leading-tight max-w-6xl mx-auto">
            Websites Built by OG Fable Frame Team
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Evervault Card Section */}
              <div className="h-48 sm:h-52 bg-green-100 flex items-center justify-center p-4">
                <div className="w-full h-full">
                  <EvervaultCard
                    text={project.category}
                    className="w-full h-full"
                  />
                </div>
              </div>
              
              {/* Content Section */}
              <div className="p-4 sm:p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-tight flex-1 pr-2">
                    {project.title}
                  </h3>
                  <div className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium whitespace-nowrap">
                    {project.category}
                  </div>
                </div>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
                  {project.description}
                </p>
                
                {/* Visit Button */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors group/btn"
                >
                  Visit Live Site
                  <svg 
                    className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
