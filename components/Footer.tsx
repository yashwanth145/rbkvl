// components/Footer.tsx
import React from "react";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-emerald-950 to-emerald-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-emerald-300">Quick Links</h3>
            <ul className="space-y-4">
              {[
                { label: "Home", href: "/" },
                { label: "Company Profile", href: "/company-profile" },
                { label: "Products", href: "/products" },
                { label: "Chilling Centers", href: "/chilling-centers" },
                { label: "Sub Offices", href: "/sub-offices" },
                { label: "News & Events", href: "/news-events" },
                { label: "Notifications", href: "/notifications" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-4 transition-all duration-300 mr-2 text-emerald-400">→</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-emerald-300 flex items-center">
              <MapPin className="h-6 w-6 mr-2" />
              Address
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Raichur Ballari Koppala Vijayanagara Milk Union Limited<br />
              Milk Producers' Societies Union Ltd.<br />
              Mega Dairy complex, Bannur Road,<br />
              Alanahalli Post,<br />
              Raichur - 570 101, Karnataka
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-emerald-300 flex items-center">
              <Phone className="h-6 w-6 mr-2" />
              Contact
            </h3>
            <div className="space-y-3 text-gray-300">
              <p className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-emerald-400" />
                Ph: 0821-2473923, 2473933
              </p>
              <p className="flex items-center">
                <Globe className="h-4 w-4 mr-2 text-emerald-400" />
                Fax: 0821-2472797, 2474476
              </p>
              <div className="space-y-2 pt-2">
                <p className="flex items-center">
                  <Mail className="h-4 w-4 mr-2 text-emerald-400" />
                  <a href="mailto:mdmymul@gmail.com" className="hover:text-white transition-colors">
                    RBKVMUL@gmail.com
                  </a>
                </p>
                <p className="flex items-center">
                  <Mail className="h-4 w-4 mr-2 text-emerald-400" />
                  <a href="mailto:RBKVMUL@gmail.com" className="hover:text-white transition-colors">
                    RBKVMUL@gmail.com
                  </a>
                </p>
                <p className="flex items-center">
                  <Mail className="h-4 w-4 mr-2 text-emerald-400" />
                  <a href="mailto:RBKVMUL@gmail.com" className="hover:text-white transition-colors">
                    RBKVMUL@gmail.com
                  </a>
                </p>
                <p className="flex items-center">
                  <Mail className="h-4 w-4 mr-2 text-emerald-400" />
                  <a href="mailto:RBKVMUL@gmail.com" className="hover:text-white transition-colors">
                    RBKVMUL@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Follow Us & Legal */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-emerald-300">Follow Us</h3>
            <div className="flex space-x-4 mb-8">
              <a href="#" className="bg-emerald-800/50 p-3 rounded-full hover:bg-emerald-700 transition-all duration-300">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="bg-emerald-800/50 p-3 rounded-full hover:bg-emerald-700 transition-all duration-300">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="bg-emerald-800/50 p-3 rounded-full hover:bg-emerald-700 transition-all duration-300">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="bg-emerald-800/50 p-3 rounded-full hover:bg-emerald-700 transition-all duration-300">
                <Youtube className="h-6 w-6" />
              </a>
            </div>

            <h3 className="text-xl font-bold mb-4 text-emerald-300">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a href="/privacy-policy" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-gray-300 hover:text-white transition-colors">
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a href="/refund" className="text-gray-300 hover:text-white transition-colors">
                  Refund Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-emerald-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Mysore District Co-Operative Milk Producers' Societies Union Ltd. All rights reserved.</p>
          <p className="mt-2 text-sm">Proudly serving fresh Nandini milk to Karnataka</p>
        </div>
      </div>
    </footer>
  );
}