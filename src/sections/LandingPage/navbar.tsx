"use client";
import {
  Navbar as NavbarContainer,
  NavBody,
  MobileNav,
  NavbarLogo,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  const navItems = [
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Industries",
      link: "#industries",
    },
    {
      name: "Services",
      link: "#services",
    },
    {
      name: "Projects",
      link: "#projects",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Helper function to handle navigation
  const handleNavigation = (link: string) => {
    if (link.startsWith("#")) {
      // It's a hash link (section)
      if (pathname === "/") {
        // We're on the landing page, just scroll to section
        document.querySelector(link)?.scrollIntoView({ behavior: "smooth" });
      } else {
        // We're on another page, navigate to landing page with hash
        router.push(`/${link}`);
      }
    } else {
      // It's a regular page link
      router.push(link);
    }
  };

  return (
    <div className="relative w-full">
      <NavbarContainer>
        {/* Desktop Navigation */}
        <NavBody className="!bg-black h-16 min-h-0 py-0 lg:flex lg:items-center lg:justify-between">
          <div className="text-white pl-2">
            <NavbarLogo />
          </div>

          {/* Navigation Items */}
          <div className="absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-1 text-sm font-medium text-white transition duration-200 lg:flex lg:space-x-1 z-10 pointer-events-none">
            {navItems.map((item, idx) => (
              <button
                key={`nav-link-${idx}`}
                onClick={() => handleNavigation(item.link)}
                className="relative px-2 py-1 hover:text-gray-300 transition-colors pointer-events-auto bg-transparent border-none cursor-pointer text-white text-sm font-medium"
              >
                {item.name}
              </button>
            ))}
          </div>

          <div className="hidden lg:flex items-center pr-4 z-20 relative">
            <a
              href="https://cal.com/fable-frame-zrqzun"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-4 py-2.5 rounded-full font-medium flex items-center gap-2 shadow-lg hover:bg-green-700 transition-colors text-sm cursor-pointer"
            >
              Schedule a Call
              <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
                <svg
                  className="w-2.5 h-2.5 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </a>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <div className="block lg:hidden">
          <MobileNav className="!bg-black py-0 rounded-xl shadow-lg">
            <MobileNavHeader className="px-4 w-full rounded-t-none">
              <div className="text-white">
                <NavbarLogo />
              </div>
              <div className="pr-2">
                <MobileNavToggle
                  isOpen={isMobileMenuOpen}
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                />
              </div>
            </MobileNavHeader>

            <MobileNavMenu
              isOpen={isMobileMenuOpen}
              className="!bg-black z-20 rounded-xl shadow-lg mt-16"
            >
              <div className="px-2">
                {navItems.map((item, idx) => (
                  <button
                    key={`mobile-link-${idx}`}
                    onClick={() => {
                      handleNavigation(item.link);
                      setIsMobileMenuOpen(false);
                    }}
                    className="block text-white hover:text-green-500 text-lg py-2 transition-colors text-center w-full bg-transparent border-none cursor-pointer"
                  >
                    {item.name}
                  </button>
                ))}
                {/* Schedule a Call Button - Mobile */}
                <a
                  href="https://cal.com/fable-frame-zrqzun"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 w-full bg-green-500 text-white px-4 py-3 rounded-full font-medium flex items-center justify-center gap-2 shadow-lg hover:bg-green-700 transition-colors text-base cursor-pointer"
                >
                  Schedule a Call
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                </a>
              </div>
            </MobileNavMenu>
          </MobileNav>
        </div>
      </NavbarContainer>
    </div>
  );
}
