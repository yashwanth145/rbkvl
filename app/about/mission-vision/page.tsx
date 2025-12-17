'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

export default function RBKVMULProfile() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
        {/* Hero Section */}
        <section className="relative h-96 md:h-96 bg-green-700 flex items-end">
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="relative p-8 md:p-16 text-white z-10">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">RBKVMUL</h1>
            <h2 className="text-3xl md:text-5xl font-semibold mb-4">
              Raichur Ballari Koppal Vijayanagara Milk Union Limited
            </h2>
            <Badge className="text-lg px-6 py-2 bg-green-600">
              Proud Member of Karnataka Milk Federation (Nandini)
            </Badge>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-16 px-6 md:px-12 max-w-5xl mx-auto">
          <Card className="shadow-xl border-green-200">
            <CardHeader>
              <CardTitle className="text-4xl text-green-800">Mission & Vision</CardTitle>
            </CardHeader>
            <CardContent className="space-y-12 text-lg text-gray-700 leading-relaxed">
              <div>
                <h3 className="text-2xl font-semibold text-green-800 mb-4">Our Mission</h3>
                <p>
                  RBKVMUL is committed to the socio-economic development of its member milk producers. We aim to achieve this by adopting advanced technology to make dairying a profitable business, through dedicated workmanship to provide the best services to our members and consumers. Our ultimate goal is to achieve the best position in the country.
                </p>
              </div>

              <Separator />

              <div>
                <h3 className="text-2xl font-semibold text-green-800 mb-6">Our Values</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xl">
                  <li className="flex items-center"><span className="font-bold mr-3">•</span> Honesty</li>
                  <li className="flex items-center"><span className="font-bold mr-3">•</span> Discipline / Timeliness</li>
                  <li className="flex items-center"><span className="font-bold mr-3">•</span> Quality</li>
                  <li className="flex items-center"><span className="font-bold mr-3">•</span> Trust</li>
                  <li className="flex items-center"><span className="font-bold mr-3">•</span> Impartiality</li>
                  <li className="flex items-center"><span className="font-bold mr-3">•</span> Savings</li>
                  <li className="flex items-center"><span className="font-bold mr-3">•</span> Transparency</li>
                </ul>
                <p className="mt-8">
                  These core values guide our operations and interactions with all stakeholders, ensuring that we maintain the highest standards of integrity and service in all our endeavors.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Footer */}
        <footer className="bg-green-900 text-white py-8 text-center">
          <p className="text-lg">© 2025 RBKVMUL - Empowering Farmers, Delivering Quality</p>
        </footer>
      </div>
    </>
  );
}