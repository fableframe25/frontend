import React from "react";
import { CoverDemo } from "./hero";
import { NavbarDemo } from "./navbar";

export function LandingPage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden w-full">
      <NavbarDemo />
      <div className="flex items-center justify-center w-full">
        <CoverDemo />
      </div>
    </div>
  );
}
