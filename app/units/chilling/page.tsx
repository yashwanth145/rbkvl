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

        {/* Chilling Centers Section */}
        <section className="py-16 px-6 md:px-12 max-w-5xl mx-auto">
          <Card className="shadow-xl border-green-200">
            <CardHeader>
              <CardTitle className="text-4xl text-green-800">Chilling Centers</CardTitle>
            </CardHeader>
            <CardContent className="space-y-12 text-lg text-gray-700 leading-relaxed">

              {/* Example Chilling Center 1 */}
              <div>
                <h3 className="text-2xl font-semibold text-green-800 mb-4">Sindhanur Chilling Centre</h3>
                <p>
                  Sindhanur Chilling Centre is located in Raichur district, serving as a key facility for milk collection and chilling. It was established to support procurement from surrounding taluks with an initial chilling capacity, later expanded to meet growing demand. Milk from societies in Sindhanur, Manvi, and nearby areas is supplied through dedicated milk procurement routes.
                </p>
              </div>

              <Separator />

              {/* Example Chilling Center 2 */}
              <div>
                <h3 className="text-2xl font-semibold text-green-800 mb-4">Koppal Chilling Center</h3>
                <p>
                  Koppal Chilling Center is strategically situated to handle milk from Koppal district societies. Commenced with a specific chilling capacity, it has been upgraded over the years to accommodate increased procurement. It receives milk from taluks such as Koppal, Gangavathi, and Yelburga via organized routes.
                </p>
              </div>

              <Separator />

              {/* General Note */}
              <div>
                <p>
                  RBKVMUL operates several chilling centers across Raichur, Ballari, Koppal, and Vijayanagara districts to ensure rapid chilling of procured milk, maintaining quality before transportation to the main dairy plant in Ballari. These centers play a vital role in the union&apos;s procurement network, supporting farmer members by providing efficient collection points.
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