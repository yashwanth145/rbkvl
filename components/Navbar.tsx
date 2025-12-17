"use client";

import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Individual dropdown states for desktop
  const [aboutUsOpen, setAboutUsOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [ourUnitsOpen, setOurUnitsOpen] = useState(false);

  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Handle scroll for background/text color change
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on outside click
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

  // Text and icon color based on scroll state
  const textColor = scrolled ? "text-gray-900 hover:text-black" : "text-white hover:text-gray-200";
  const brandColor = scrolled ? "text-gray-900" : "text-white";
  const iconColor = scrolled ? "text-gray-900" : "text-white";
  const navBg = scrolled ? "bg-white/90 backdrop-blur-md shadow-lg" : "bg-transparent";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand - You can replace with your logo */}
          <div className="flex-shrink-0">
            <Link href="/" className={`text-2xl font-bold ${brandColor}`}>
              MyBrand
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className={`${textColor} px-3 py-2 text-sm font-medium transition-colors`}>
              Home
            </Link>

            {/* About Us Dropdown */}
            <div
              className="relative"
              onMouseLeave={() => setAboutUsOpen(false)}
            >
              <button
                onMouseEnter={() => setAboutUsOpen(true)}
                className={`flex items-center ${textColor} px-3 py-2 text-sm font-medium transition-colors focus:outline-none rounded-md`}
              >
                About Us
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform duration-200 ${aboutUsOpen ? "rotate-180" : ""}`}
                />
              </button>

              <div
                className={`absolute left-0 mt-2 w-64 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition-all duration-200 ${
                  aboutUsOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2"
                }`}
              >
                <div className="py-2">
                  {["Company Profile", "Mission & Vision", "Board of Directors", "Section Heads", "Human Resources", "Objectives", "Quality Policies", "Milestones", "Activities"].map((item) => {
  const slug = item
    .toLowerCase()
    .replace(/ & /g, "-")
    .replace(/ /g, "-")
    .replace(/[^a-z0-9-]/g, ""); // extra safety for clean URLs

  return (
    <Link
      key={item}
      href={`/about/${slug}`}
      className="block px-6 py-3 text-sm text-gray-800 hover:bg-gray-100 hover:text-black transition-colors"
      onClick={() => setAboutUsOpen(false)}
    >
      {item}
    </Link>
  );
})}
                </div>
              </div>
            </div>

            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button
                onMouseEnter={() => setProductsOpen(true)}
                className={`flex items-center ${textColor} px-3 py-2 text-sm font-medium transition-colors focus:outline-none rounded-md`}
              >
                Products
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform duration-200 ${productsOpen ? "rotate-180" : ""}`}
                />
              </button>

              <div
                className={`absolute left-0 mt-2 w-56 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition-all duration-200 ${
                  productsOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2"
                }`}
              >
                <div className="py-2">
                  <Link href="/products/all-products" className="block px-6 py-3 text-sm text-gray-800 hover:bg-gray-100 hover:text-black">
                    All products
                  </Link>
                  <Link href="/products/milk" className="block px-6 py-3 text-sm text-gray-800 hover:bg-gray-100 hover:text-black">
                    Milk
                  </Link>
                  <Link href="/products/curd" className="block px-6 py-3 text-sm text-gray-800 hover:bg-gray-100 hover:text-black">
                    Curd family
                  </Link>
                  <Link href="/products/ghee" className="block px-6 py-3 text-sm text-gray-800 hover:bg-gray-100 hover:text-black">
                    Ghee
                  </Link>
                  <Link href="/products/butter" className="block px-6 py-3 text-sm text-gray-800 hover:bg-gray-100 hover:text-black">
                    Butter
                  </Link>
                  <Link href="/products/paneer" className="block px-6 py-3 text-sm text-gray-800 hover:bg-gray-100 hover:text-black">
                    Paneer
                  </Link>
                  <Link href="/products/cheese" className="block px-6 py-3 text-sm text-gray-800 hover:bg-gray-100 hover:text-black">
                    Cheese
                  </Link>
                  <Link href="/products/flavouredmilk" className="block px-6 py-3 text-sm text-gray-800 hover:bg-gray-100 hover:text-black">
                    Flavoured Milk
                  </Link>
                  <Link href="/products/chocolates" className="block px-6 py-3 text-sm text-gray-800 hover:bg-gray-100 hover:text-black">
                    Chocolates
                  </Link>
                  <Link href="/products/namkeens" className="block px-6 py-3 text-sm text-gray-800 hover:bg-gray-100 hover:text-black">
                    Namkeens
                  </Link><Link href="/products/sweets" className="block px-6 py-3 text-sm text-gray-800 hover:bg-gray-100 hover:text-black">
                    Sweets
                  </Link>
                  <Link href="/products/instantmixes" className="block px-6 py-3 text-sm text-gray-800 hover:bg-gray-100 hover:text-black">
                    Instant Mixes
                  </Link>

                  {/* Add more products as needed */}
                </div>
              </div>
            </div>

            {/* Our Units Dropdown */}
            <div
              className="relative"
              onMouseLeave={() => setOurUnitsOpen(false)}
            >
              <button
                onMouseEnter={() => setOurUnitsOpen(true)}
                className={`flex items-center ${textColor} px-3 py-2 text-sm font-medium transition-colors focus:outline-none rounded-md`}
              >
                Our Units
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform duration-200 ${ourUnitsOpen ? "rotate-180" : ""}`}
                />
              </button>

              <div
                className={`absolute left-0 mt-2 w-56 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition-all duration-200 ${
                  ourUnitsOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2"
                }`}
              >
                <div className="py-2">
                  <Link href="/units/chilling" className="block px-6 py-3 text-sm text-gray-800 hover:bg-gray-100 hover:text-black">
                    Chilling Centers
                  </Link>
                  <Link href="/units/sub-office" className="block px-6 py-3 text-sm text-gray-800 hover:bg-gray-100 hover:text-black">
                    Sub Offcies
                  </Link>
                  {/* Add more units */}
                </div>
              </div>
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

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-md ${iconColor}`}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Accordion style) */}
      {mobileMenuOpen && (
        <div ref={mobileMenuRef} className="md:hidden bg-white shadow-lg">
          <div className="px-4 pt-2 pb-4 space-y-1">
            <Link href="/" className="block py-2 text-gray-900" onClick={() => setMobileMenuOpen(false)}>
              Home
            </Link>

            {/* About Us Mobile Accordion */}
            <button
              onClick={() => setAboutUsOpen(!aboutUsOpen)}
              className="w-full flex justify-between items-center py-2 text-gray-900"
            >
              About Us
              <ChevronDown className={`h-5 w-5 transition-transform ${aboutUsOpen ? "rotate-180" : ""}`} />
            </button>
            {aboutUsOpen && (
              <div className="pl-4 space-y-1">
                {["Company Profile", "Mission & Vision", "Board of Directors", "Section Heads", "Human Resources", "Objectives", "Quality Policies", "Milestones", "Activities"].map((item) => (
                  <Link
                    key={item}
                    href={`/${item.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`}
                    className="block py-2 text-sm text-gray-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                  </Link>
                ))}
              </div>
            )}

            {/* Add similar accordions for Products and Our Units if needed */}
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