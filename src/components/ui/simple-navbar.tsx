"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Navbar as NavbarContainer,
  NavBody,
  NavbarLogo,
} from "@/components/ui/resizable-navbar";

export default function SimpleNavbar() {
  return (
    <div className="relative w-full">
      <NavbarContainer>
        <NavBody className="!bg-black">
          <div className="flex justify-center w-full">
            <NavbarLogo />
          </div>
        </NavBody>
      </NavbarContainer>
    </div>
  );
}
