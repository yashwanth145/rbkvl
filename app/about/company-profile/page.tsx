'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
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

        {/* Company Profile Section */}
        <section className="py-16 px-6 md:px-12 max-w-5xl mx-auto">
          <Card className="shadow-xl border-green-200">
            <CardHeader>
              <CardTitle className="text-4xl text-green-800">Company Profile</CardTitle>
              <CardDescription className="text-lg">
                Empowering rural farmers through cooperative dairying in the Amul pattern
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8 text-lg text-gray-700 leading-relaxed">
              <p>
                Under the Karnataka Dairy Development initiatives inspired by the successful Amul model, dairy development activities commenced in the region in the late 1980s. The Raichur and Ballari Districts Co-operative Milk Producers Societies Union Ltd was registered in 1989-90, with jurisdiction extending to Raichur district (four taluks) and Ballari district (seven taluks at the time). The Union undertook the organization of Milk Co-operatives in the &apos;Amul Pattern&apos;, with the primary objective of socio-economic transformation of rural farmers through dairying as a key subsidiary occupation.
              </p>

              <p>
                Later, Koppal district was included, expanding the Union&apos;s scope. Following the creation of Vijayanagara district from parts of Ballari in 2021, the Union was renamed to Raichur Ballari Koppal Vijayanagara Milk Union Limited (RBKVMUL), now covering these four districts.
              </p>

              <Separator />

              <p>
                From modest beginnings, RBKVMUL has grown significantly, procuring milk from numerous dairy cooperative societies across the region and processing it into high-quality products under the trusted Nandini brand.
              </p>

              <div className="my-12">
                <h3 className="text-2xl font-semibold text-green-800 mb-6">Nandini Products</h3>
                <p className="text-gray-600">
                  RBKVMUL markets a wide range of high-quality dairy products under the Nandini brand, including toned milk, homogenized milk, curd, butter, ghee, paneer, and more – all produced with care to ensure freshness and nutritional value.
                </p>
              </div>

              <p className="text-xl font-medium text-green-900">
                Today, RBKVMUL is committed to further growth and modernization. Plans are underway for a new mega dairy plant in Ballari district, a state-of-the-art facility that will enhance capacity and meet the increasing demand for high-quality dairy products across the region.
              </p>
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