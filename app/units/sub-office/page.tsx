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

        {/* Sub Offices Section */}
        <section className="py-16 px-6 md:px-12 max-w-5xl mx-auto">
          <Card className="shadow-xl border-green-200">
            <CardHeader>
              <CardTitle className="text-4xl text-green-800">Sub Offices</CardTitle>
            </CardHeader>
            <CardContent className="space-y-12 text-lg text-gray-700 leading-relaxed">
              <div>
                <p className="mb-8">
                  RBKVMUL operates several sub-offices across its jurisdiction in Raichur, Ballari, Koppal, and Vijayanagara districts. These sub-offices primarily facilitate the supply of artificial insemination equipment, cattle feed, fodder seeds, and other essential materials to milk producers, supporting technical input activities and procurement.
                </p>

                <ul className="space-y-6 text-xl list-disc pl-8">
                  <li>
                    <strong className="text-green-800">Sindhanur Sub Office</strong><br />
                    Located in Sindhanur (Raichur district), serving local dairy cooperative societies with AI services, cattle feed, and procurement support.
                  </li>
                  <li>
                    <strong className="text-green-800">Kushtagi Sub Office</strong><br />
                    Situated in Kushtagi (Koppal district), providing essential supplies and extension services to farmers in the surrounding areas.
                  </li>
                  <li>
                    <strong className="text-green-800">Gangavathi Sub Office</strong><br />
                    Based in Gangavathi (Koppal district), focused on artificial insemination, fodder distribution, and milk collection coordination.
                  </li>
                  <li>
                    <strong className="text-green-800">Koppal Sub Office</strong><br />
                    Located in Koppal, acting as a central hub for technical inputs, veterinary support, and farmer assistance in the district.
                  </li>
                </ul>

                <p className="mt-8">
                  These sub-offices play a crucial role in extending RBKVMUL&apos;s reach to rural farmers, ensuring timely access to resources for enhanced milk production and animal health.
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