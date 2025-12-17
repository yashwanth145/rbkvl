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

        {/* Quality Policies Section */}
        <section className="py-16 px-6 md:px-12 max-w-5xl mx-auto">
          <Card className="shadow-xl border-green-200">
            <CardHeader>
              <CardTitle className="text-4xl text-green-800">Quality Policies</CardTitle>
            </CardHeader>
            <CardContent className="space-y-12 text-lg text-gray-700 leading-relaxed">

              {/* Food Safety Policy */}
              <div>
                <h3 className="text-2xl font-semibold text-green-800 mb-4">Food Safety Policy</h3>
                <p className="mb-4">
                  RBKVMUL is committed to supply safe milk and Milk Products to the Satisfaction of Customers by
                </p>
                <ul className="space-y-3 list-disc pl-8 text-xl">
                  <li>Adopting accepted and appropriate methods and Technologies in procurement, processing, manufacturing, packing and prompt delivery of Milk and milk products</li>
                  <li>Maintaining by constant communication with all the parties involved in the food chain to achieve ultimate goal of supply of good quality Milk and Milk products</li>
                  <li>Complying with Statutory and Regulatory requirements</li>
                </ul>
                <p className="mt-6">
                  This Commitment is supported by Measurable Objectives and is reviewed for Continued Suitability from time to time.
                </p>
              </div>

              <Separator />

              {/* Allergens Control Policy */}
              <div>
                <h3 className="text-2xl font-semibold text-green-800 mb-4">Allergens Control Policy</h3>
                <p className="mb-4">
                  We at Raichur Ballari Koppal Vijayanagara Milk Union Limited (RBKVMUL), a KMF Union, have defined procedure for handling the listed allergen(s) in the premises with unique flow, safe &amp; secure manner, ensuring none of the allergen enter other process area throughout the organisation process.
                </p>
                <p className="mb-4">
                  RBKVMUL ensures to prevent the cross contamination of allergen(s) through the effective awareness &amp; training program, continuous monitoring, corrective action &amp; verification programs. All employees of the organisation and associates, visitors affirm to fulfil the compliances, policies and take preventive measures during the visits to the premises.
                </p>
                <p className="font-semibold">Sources of Allergen contamination are under:</p>
                <ul className="space-y-3 list-disc pl-8 text-xl">
                  <li>Milk &amp; Milk Products.</li>
                  <li>Nuts (Cashew)</li>
                  <li>Wheat Flour (Gluten)</li>
                </ul>
              </div>

              <Separator />

              {/* Environmental Policy */}
              <div>
                <h3 className="text-2xl font-semibold text-green-800 mb-4">Environmental Policy</h3>
                <p>
                  We at Raichur Ballari Koppal Vijayanagara Milk Union Limited (RBKVMUL), a KMF Union, have defined procedures to ensure that all operations will be carried out in such a way to minimize its impact on immediate and global Environment. We ensure to comply with all relevant Legal and Statutory requirements.
                </p>
                <p className="mt-4">
                  This Policy is applicable in the areas of production, packing &amp; other concern places whereas Waste Material can be originated from the sources. The handling of waste material procedure is in place &amp; it sold as per disposition schedule to permit the removal of waste materials from premises areas to prevent contamination of Environment.
                </p>
              </div>

              <Separator />

              {/* Metal and Jewellery Control Policy */}
              <div>
                <h3 className="text-2xl font-semibold text-green-800 mb-4">Metal and Jewellery Control Policy</h3>
                <p className="mb-4">
                  We at Raichur Ballari Koppal Vijayanagara Milk Union Limited (RBKVMUL), a KMF Union, have defined procedure to ensure the following:
                </p>
                <ul className="space-y-3 list-disc pl-8 text-xl">
                  <li>Continuously monitor, control and minimize the usage of Staple pins, Metal Clips, Sharp objects and Blades in the raw material, processing, packing and finished goods areas.</li>
                  <li>Usage of maintenance tools in the raw material, processing and finished goods areas will be monitored and checked for the count before and after the activity.</li>
                </ul>
                <p className="mt-4">
                  We at Raichur Ballari Koppal Vijayanagara Milk Union Limited (RBKVMUL), a KMF Union, have defined procedure to ensure wearing of any Jewellery including wrist Watches in the raw material, processing and finished goods area is controlled and monitored. If worn in specific cases, we will ensure covering of all the worn jewellery in process &amp; packing area to avoid cross contamination and ensure product safety.
                </p>
              </div>

              <Separator />

              {/* Wood & Glass Policy */}
              <div>
                <h3 className="text-2xl font-semibold text-green-800 mb-4">Wood &amp; Glass Policy</h3>
                <p className="mb-4">
                  We at Raichur Ballari Koppal Vijayanagara Milk Union Limited (RBKVMUL), a KMF Union, have defined procedure to ensure that the usage of Wood shall be completely eliminated as product in-contact material like Knife Grips, Stirrers etc.
                </p>
                <p className="mb-4">
                  Wood shall also be avoided where it is not directly coming in contact with the product as in pallets, working table etc.
                </p>
                <p className="mb-4">
                  Wood shall be used only for applications like outside Window frames, pallets in finished goods stores in safe manner.
                </p>
                <p className="mb-4">
                  No glass and hard plastic articles shall be taken out of the lab into the process hall. Samples from batch taken for analysis shall be taken only in food grade plastic containers.
                </p>
                <p className="mb-4">
                  Hardened glass / Shatter proof Safety Film shall be fixed on the entire window and door glasses in the processing area.
                </p>
                <p className="mb-4">
                  No wrist watches shall be allowed in any of the preparation or processing areas. A Glass &amp; wooden register is maintained and periodic inspection of the locations shall be carried out to ensure no contamination. Wherever tube lights are located directly above open food, they shall be fitted with protective covers.
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