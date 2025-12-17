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

        {/* Objectives Section */}
        <section className="py-16 px-6 md:px-12 max-w-5xl mx-auto">
          <Card className="shadow-xl border-green-200">
            <CardHeader>
              <CardTitle className="text-4xl text-green-800">Objectives</CardTitle>
            </CardHeader>
            <CardContent className="space-y-12 text-lg text-gray-700 leading-relaxed">
              <div>
                <h3 className="text-2xl font-semibold text-green-800 mb-6">Our Key Objectives</h3>
                <ul className="space-y-4 text-xl list-disc pl-6">
                  <li>Providing assured and remunerative market for all the milk produced by the farmer members.</li>
                  <li>Providing hygienic milk to urban consumers.</li>
                  <li>To facilitate rural development by providing opportunities for self-employment along with providing opportunity for steady income at village level.</li>
                  <li>First Aid facility at the Society level.</li>
                  <li>Emergency visits to treat the animals on a nominal fee to be collected from the producers.</li>
                  <li>Cross breeding facility through Artificial Insemination services at the farmers&apos; doorstep.</li>
                  <li>Technical guidance and supply of root slips/seeds for Fodder cultivation by the members of the Co-operative Societies.</li>
                  <li>Effective supervision/extension services through field executives of the Union.</li>
                  <li>Organizing exclusive women dairy co-operatives.</li>
                  <li>Implementing STEP program through Government of India Project.</li>
                </ul>
                <p className="mt-8">
                  These objectives guide our operations and ensure that we continue to serve both our farmer members and urban consumers while promoting rural development and sustainable dairy practices.
                </p>
              </div>

              <Separator />

              <div>
                <h3 className="text-2xl font-semibold text-green-800 mb-6">The Main Functions of RBKVMUL</h3>
                <ul className="space-y-4 text-xl list-disc pl-6">
                  <li>To provide remunerative market for the milk produced by the rural farmers throughout the year irrespective of the quantity supplied by them.</li>
                  <li>First Aid facility at the Society level.</li>
                  <li>Emergency visits to treat the animals on a nominal fee to be collected from the producers.</li>
                  <li>Cross breeding facility through Artificial Insemination services.</li>
                  <li>Supply of balanced Cattle Feed to the farmers of the Coop Societies at subsidized rates.</li>
                  <li>Technical guidance and supply of root slips/seeds for Fodder cultivation by the members of the Coop Societies.</li>
                  <li>Effective supervision/extension services through field executives of the Union.</li>
                  <li>Intensive Coop Education Programs to the Women members of the Dairy Coop Societies through Coop Development programed.</li>
                </ul>
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