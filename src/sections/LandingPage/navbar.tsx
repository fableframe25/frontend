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

export default function Navbar() {
  const navItems = [
    {
      name: "Services",
      link: "#services",
    },
    {
      name: "Industries",
      link: "#industries",
    },
    {
      name: "Projects",
      link: "#projects",
    },
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
      <NavbarContainer>
        {/* Desktop Navigation */}
        <NavBody className="!bg-black">
          <div className="text-white pl-4">
            <NavbarLogo />
          </div>
          
          {/* Navigation Items */}
          <div className="absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium text-white transition duration-200 lg:flex lg:space-x-2">
            {navItems.map((item, idx) => (
              <a
                key={`nav-link-${idx}`}
                href={item.link}
                className="relative px-4 py-2 hover:text-gray-300 transition-colors"
              >
                {item.name}
              </a>
            ))}
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
                className="relative text-white hover:text-gray-300 text-base py-3 transition-colors"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
          </MobileNavMenu>
        </MobileNav>
      </NavbarContainer>
    </div>
  );
}
