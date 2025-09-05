import React from "react";
import { CoverDemo } from "./hero";
import { NavbarDemo } from "./navbar";
import { WhyChooseFableFrame } from "./why-choose-fable-frame";
import { IndustriesSection } from "./industries-section";
import { ServicesSection } from "./services";
import { FAQSection } from "./faq-section";
import { Footer } from "./footer";

export function LandingPage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden w-full">
      <NavbarDemo />
      <div className="flex items-center justify-center w-full">
        <CoverDemo />
      </div>
      <WhyChooseFableFrame />
      <IndustriesSection />
      <ServicesSection />
      <FAQSection />
      <Footer />
    </div>
  );
}
