"use client";

import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Background Image */}
      <div className="relative h-96 md:h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30 z-10" />
        <div className="relative h-full w-full">
          {/* You can replace the src with your own hero image in public folder if preferred */}
          <img
            src="https://media.istockphoto.com/id/942116542/photo/birds-eyes-view-from-flying-drone-of-the-big-farm-with-cows-in-the-middle-of-fields.jpg?s=612x612&w=0&k=20&c=UHwaq6zNE1DLogH6NsovGLJI0-KNJHx_cHCZiYd6dzE="
            alt="Aerial view of modern dairy farm"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl md:text-2xl">We are here to assist you</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-20 relative z-30">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information Cards */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <img
                    src="https://static.vecteezy.com/system/resources/thumbnails/003/520/480/small/location-icon-pin-point-map-outline-isolated-on-white-background-illustration-vector.jpg"
                    alt="Location icon"
                    className="w-8 h-8"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Address</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Address of the raichur and ballari milk co operation<br />
                    Bangalore - 560029, Karnataka, India
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <img
                    src="https://img.freepik.com/premium-vector/phone-icon-telephone-call-sign-vector-illustration_1017145-621.jpg"
                    alt="Phone icon"
                    className="w-8 h-8"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Phone</h3>
                  <p className="text-gray-600">
                    <a href="tel:+918025586300" className="hover:text-blue-600 transition-colors">
                      +91 80 2558 6300
                    </a>
                  </p>
                  <p className="text-gray-600 mt-1">
                    <a href="tel:+918025586301" className="hover:text-blue-600 transition-colors">
                      +91 80 2558 6301
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <img
                    src="https://t4.ftcdn.net/jpg/10/93/32/23/360_F_1093322319_LdHhHcHSEbCh78m2oNyYoNUSQuaovzHc.jpg"
                    alt="Email icon"
                    className="w-8 h-8"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
                  <p className="text-gray-600">
                    <a href="mailto:info@RBKVMUL.com" className="hover:text-blue-600 transition-colors">
                      info@RBKVMUL.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Send us a Message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  placeholder="Inquiry about..."
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
                  placeholder="Write your message here..."
                  required
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white font-semibold py-4 px-8 rounded-lg hover:bg-blue-700 transition duration-300 shadow-md hover:shadow-lg"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}