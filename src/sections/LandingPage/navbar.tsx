"use client";
import {
  Navbar,
  NavBody,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";

export function NavbarDemo() {
  const navItems = [
    {
      name: "Features",
      link: "#features",
    },
    {
      name: "Pricing",
      link: "#pricing",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody className="!bg-black">
          <div className="text-white pl-4">
            <NavbarLogo />
          </div>
          
          {/* Custom Navigation Items */}
          <div className="absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium text-white transition duration-200 lg:flex lg:space-x-2">
            <a href="#features" className="relative px-4 py-2 hover:text-gray-300">
              Features
            </a>
            <div 
              className="relative px-4 py-2 hover:text-gray-300 cursor-pointer"
              onMouseEnter={() => setIsServicesHovered(true)}
              onMouseLeave={() => setIsServicesHovered(false)}
            >
              Services
              {isServicesHovered && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 z-50 mt-3">
                  <div className="bg-white rounded-2xl shadow-2xl p-4 sm:p-6 lg:p-8 min-w-[280px] sm:min-w-[400px] lg:min-w-[450px] border border-gray-100">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
                      {/* Services Section */}
                      <div>
                        <h3 className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-4 sm:mb-6">SERVICES</h3>
                        <div className="space-y-3 sm:space-y-5">
                          <div className="flex items-center gap-3 sm:gap-4 p-2 sm:p-3 rounded-xl hover:bg-gray-50 transition-colors">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-50 rounded-xl flex items-center justify-center">
                              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                              </svg>
                            </div>
                            <div>
                              <div className="font-semibold text-black text-xs sm:text-sm">Web Development</div>
                              <div className="text-xs text-gray-500">Custom websites & apps</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-3 sm:gap-4 p-2 sm:p-3 rounded-xl hover:bg-gray-50 transition-colors">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-50 rounded-xl flex items-center justify-center">
                              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                              </svg>
                            </div>
                            <div>
                              <div className="font-semibold text-black text-xs sm:text-sm">UI/UX Design</div>
                              <div className="text-xs text-gray-500">Beautiful user experiences</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-3 sm:gap-4 p-2 sm:p-3 rounded-xl hover:bg-gray-50 transition-colors">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-50 rounded-xl flex items-center justify-center">
                              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                              </svg>
                            </div>
                            <div>
                              <div className="font-semibold text-black text-xs sm:text-sm">Digital Marketing</div>
                              <div className="text-xs text-gray-500">Grow your online presence</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Resources Section */}
                      <div>
                        <h3 className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-4 sm:mb-6">RESOURCES</h3>
                        <div className="space-y-3 sm:space-y-4">
                          <a href="#" className="block p-2 sm:p-3 rounded-xl text-black hover:bg-gray-50 transition-colors text-xs sm:text-sm font-medium">Case Studies</a>
                          <a href="#" className="block p-2 sm:p-3 rounded-xl text-black hover:bg-gray-50 transition-colors text-xs sm:text-sm font-medium">Blog</a>
                          <a href="#" className="block p-2 sm:p-3 rounded-xl text-black hover:bg-gray-50 transition-colors text-xs sm:text-sm font-medium">Documentation</a>
                          <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-xl hover:bg-gray-50 transition-colors">
                            <a href="#" className="text-black hover:text-gray-600 transition-colors text-xs sm:text-sm font-medium">Support</a>
                            <span className="bg-green-100 text-green-800 text-xs px-2 sm:px-3 py-1 sm:py-1.5 rounded-full font-medium">New</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <a href="#pricing" className="relative px-4 py-2 hover:text-gray-300">
              Pricing
            </a>
            <a href="#contact" className="relative px-4 py-2 hover:text-gray-300">
              Contact
            </a>
          </div>
          
          <div className="flex items-center gap-2 sm:gap-4 pr-4">
            <NavbarButton variant="secondary" className="text-xs sm:text-sm px-3 sm:px-4 py-2">Login</NavbarButton>
            <NavbarButton variant="primary" className="text-xs sm:text-sm px-3 sm:px-4 py-2">Book a call</NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav className="!bg-black">
          <MobileNavHeader>
            <div className="text-white pl-4">
              <NavbarLogo />
            </div>
            <div className="pr-4">
              <MobileNavToggle
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </div>
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            className="!bg-black"
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-white hover:text-gray-300 text-base py-3"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-3 sm:gap-4 pt-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="secondary"
                className="w-full text-sm sm:text-base py-3"
              >
                Login
              </NavbarButton>
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full text-sm sm:text-base py-3"
              >
                Book a call
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}
