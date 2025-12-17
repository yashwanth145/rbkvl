"use client";

import React from "react";
import { Bell, Calendar } from "lucide-react";

export default function NotificationsPage() {
  const notifications = [
    {
      title: "Inauguration of Mega Dairy Facility",
      description:
        "The Honorable Chief Minister inaugurated our state-of-the-art Mega Dairy facility in Alanhally, Mysore, marking a significant milestone in our commitment to dairy excellence.",
      date: "October 30, 2024",
    },
    {
      title: "Inauguration of Chilling Center",
      description:
        "The Honorable Chief Minister of Karnataka inaugurated our state-of-the-art Chilling Center in Hunsur, marking a significant milestone in our dairy infrastructure.",
      date: "October 30, 2024",
    },
    {
      title: "Foundation Stone for New Mega Dairy",
      description:
        "The Honorable Chief Minister laid the foundation stone for our new Mega Dairy project, marking a significant milestone in our expansion plans.",
      date: "October 30, 2024",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
            <Bell className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Notifications</h1>
          <p className="text-lg text-gray-600">Stay updated with our latest announcements and milestones</p>
        </div>

        {/* Notifications Timeline */}
        <div className="space-y-8">
          {notifications.map((notification, index) => (
            <div
              key={index}
              className="relative pl-10 pb-8 last:pb-0"
            >
              {/* Timeline Line */}
              {index !== notifications.length - 1 && (
                <span
                  className="absolute left-4 top-10 w-0.5 h-full bg-blue-200"
                  aria-hidden="true"
                />
              )}

              {/* Timeline Dot */}
              <div className="absolute left-0 top-2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full" />
              </div>

              {/* Notification Card */}
              <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-8 border border-gray-100">
                <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                  {notification.title}
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {notification.description}
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="w-4 h-4 mr-2" />
                  <time dateTime={notification.date}>{notification.date}</time>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Optional: Empty State or Footer Note */}
        {/* <div className="text-center mt-12 text-gray-500">
          More notifications will be posted here as they become available.
        </div> */}
      </div>
    </div>
  );
}