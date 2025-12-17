"use client";

import React from "react";
import { Calendar, ArrowRight } from "lucide-react";
import Image from "next/image";

// Place your actual images in the public folder, e.g.:
// public/images/foundation-stone.jpg
// public/images/chilling-center.jpg
// public/images/mega-dairy.jpg

export default function NewsAndEventsPage() {
  const events = [
    {
      title: "Foundation Stone Laying Ceremony of Mega Dairy",
      excerpt:
        "The Honorable Chief Minister laid the foundation stone for our new Mega Dairy project, marking a significant milestone in our expansion plans.",
      date: "October 30, 2024",
      imagePath: "/images/foundation-stone.jpg", // Replace with your actual file name
      alt: "Foundation stone laying ceremony",
    },
    {
      title: "New Chilling Center Inauguration at Hunsur",
      excerpt:
        "The Honorable Chief Minister of Karnataka inaugurated our state-of-the-art Chilling Center in Hunsur, enhancing our dairy infrastructure.",
      date: "October 30, 2024",
      imagePath: "/images/chilling-center.jpg", // Replace with your actual file name
      alt: "Chilling center inauguration at Hunsur",
    },
    {
      title: "Inauguration of Mega Dairy at Alanhally, Mysore",
      excerpt:
        "The Honorable Chief Minister inaugurated our state-of-the-art Mega Dairy facility in Alanhally, Mysore, reinforcing our commitment to dairy excellence.",
      date: "October 30, 2024",
      imagePath: "/images/mega-dairy.jpg", // Replace with your actual file name
      alt: "Mega Dairy inauguration at Alanhally, Mysore",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">News & Events</h1>
          <p className="text-lg text-gray-600">
            Latest updates, inaugurations, and milestones from our organization
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col h-full"
            >
              {/* Image */}
              <div className="relative h-64 w-full">
                <Image
                  src={event.imagePath}
                  alt={event.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  {event.title}
                </h2>
                <p className="text-gray-700 mb-4 flex-grow">
                  {event.excerpt}...
                </p>

                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-2" />
                    <time>{event.date}</time>
                  </div>

                  <a
                    href="#" // Replace with actual article link if you have detail pages
                    className="flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}