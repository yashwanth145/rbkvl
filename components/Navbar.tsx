"use client";

import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Correct import for Next.js App Router

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Desktop dropdown states
  const [aboutUsOpen, setAboutUsOpen] = useState(false);
  const [ourUnitsOpen, setOurUnitsOpen] = useState(false);

  // Mobile accordion states (separate to avoid hover conflicts)
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileUnitsOpen, setMobileUnitsOpen] = useState(false);

  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Scroll effect for background/color change
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target as Node)) {
        setMobileMenuOpen(false);
      }
    };
    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileMenuOpen]);

  const textColor = scrolled ? "text-gray-900 hover:text-black" : "text-white hover:text-gray-200";
  const brandColor = scrolled ? "text-gray-900" : "text-white";
  const iconColor = scrolled ? "text-gray-900" : "text-white";
  const navBg = scrolled ? "bg-white/90 backdrop-blur-md shadow-lg" : "bg-transparent";

  // Helper for slug generation
  const generateSlug = (str: string) =>
    str.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-").replace(/[^a-z0-9-]/g, "");

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`} aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <div className="flex-shrink-0">
            <Link href="/" className={`text-2xl font-bold ${brandColor}`}>
              RBKVMUL
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className={`${textColor} px-3 py-2 text-sm font-medium transition-colors`}>
              Home
            </Link>

            {/* About Us Dropdown */}
            <div className="relative" onMouseLeave={() => setAboutUsOpen(false)}>
              <button
                onMouseEnter={() => setAboutUsOpen(true)}
                className={`flex items-center ${textColor} px-3 py-2 text-sm font-medium transition-colors focus:outline-none rounded-md`}
              >
                About Us
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${aboutUsOpen ? "rotate-180" : ""}`} />
              </button>

              {aboutUsOpen && (
                <div className="absolute left-0 mt-2 w-64 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="py-2">
                    {[
                      "Company Profile",
                      "Mission & Vision",
                      "Board of Directors",
                      "Section Heads",
                      "Human Resources",
                      "Objectives",
                      "Quality Policies",
                      "Milestones",
                      "Activities",
                    ].map((item) => (
                      <Link
                        key={item}
                        href={`/about/${generateSlug(item)}`}
                        className="block px-6 py-3 text-sm text-gray-800 hover:bg-gray-100 hover:text-black transition-colors"
                        onClick={() => setAboutUsOpen(false)}
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Products - Simple direct link (no dropdown) */}
            <Link
              href="/products"
              className={`${textColor} px-3 py-2 text-sm font-medium transition-colors`}
            >
              Products
            </Link>

            {/* Our Units Dropdown */}
            <div className="relative" onMouseLeave={() => setOurUnitsOpen(false)}>
              <button
                onMouseEnter={() => setOurUnitsOpen(true)}
                className={`flex items-center ${textColor} px-3 py-2 text-sm font-medium transition-colors focus:outline-none rounded-md`}
              >
                Our Units
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${ourUnitsOpen ? "rotate-180" : ""}`} />
              </button>

              {ourUnitsOpen && (
                <div className="absolute left-0 mt-2 w-56 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="py-2">
                    <Link href="/units/chilling" className="block px-6 py-3 text-sm text-gray-800 hover:bg-gray-100 hover:text-black">
                      Chilling Centers
                    </Link>
                    <Link href="/units/sub-office" className="block px-6 py-3 text-sm text-gray-800 hover:bg-gray-100 hover:text-black">
                      Sub Offices
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="/news-events" className={`${textColor} px-3 py-2 text-sm font-medium transition-colors`}>
              News & Events
            </Link>
            <Link href="/notifications" className={`${textColor} px-3 py-2 text-sm font-medium transition-colors`}>
              Notifications
            </Link>
            <Link href="/contact" className={`${textColor} px-3 py-2 text-sm font-medium transition-colors`}>
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-md ${iconColor}`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div ref={mobileMenuRef} className="md:hidden bg-white shadow-lg">
          <div className="px-4 pt-2 pb-4 space-y-1">
            <Link href="/" className="block py-2 text-gray-900" onClick={() => setMobileMenuOpen(false)}>
              Home
            </Link>

            {/* About Us Accordion */}
            <button
              onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
              className="w-full flex justify-between items-center py-2 text-gray-900 font-medium"
            >
              About Us
              <ChevronDown className={`h-5 w-5 transition-transform ${mobileAboutOpen ? "rotate-180" : ""}`} />
            </button>
            {mobileAboutOpen && (
              <div className="pl-4 space-y-1">
                {[
                  "Company Profile",
                  "Mission & Vision",
                  "Board of Directors",
                  "Section Heads",
                  "Human Resources",
                  "Objectives",
                  "Quality Policies",
                  "Milestones",
                  "Activities",
                ].map((item) => (
                  <Link
                    key={item}
                    href={`/about/${generateSlug(item)}`}
                    className="block py-2 text-sm text-gray-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                  </Link>
                ))}
              </div>
            )}

            {/* Products - Direct link in mobile */}
            <Link href="/products" className="block py-2 text-gray-900" onClick={() => setMobileMenuOpen(false)}>
              Products
            </Link>

            {/* Our Units Accordion */}
            <button
              onClick={() => setMobileUnitsOpen(!mobileUnitsOpen)}
              className="w-full flex justify-between items-center py-2 text-gray-900 font-medium"
            >
              Our Units
              <ChevronDown className={`h-5 w-5 transition-transform ${mobileUnitsOpen ? "rotate-180" : ""}`} />
            </button>
            {mobileUnitsOpen && (
              <div className="pl-4 space-y-1">
                <Link href="/units/chilling" className="block py-2 text-sm text-gray-700" onClick={() => setMobileMenuOpen(false)}>
                  Chilling Centers
                </Link>
                <Link href="/units/sub-office" className="block py-2 text-sm text-gray-700" onClick={() => setMobileMenuOpen(false)}>
                  Sub Offices
                </Link>
              </div>
            )}

            <Link href="/news-events" className="block py-2 text-gray-900" onClick={() => setMobileMenuOpen(false)}>
              News & Events
            </Link>
            <Link href="/notifications" className="block py-2 text-gray-900" onClick={() => setMobileMenuOpen(false)}>
              Notifications
            </Link>
            <Link href="/contact" className="block py-2 text-gray-900" onClick={() => setMobileMenuOpen(false)}>
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}