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

        {/* Activities Section */}
        <section className="py-16 px-6 md:px-12 max-w-5xl mx-auto">
          <Card className="shadow-xl border-green-200">
            <CardHeader>
              <CardTitle className="text-4xl text-green-800">Activities</CardTitle>
            </CardHeader>
            <CardContent className="space-y-12 text-lg text-gray-700 leading-relaxed">

              {/* Procurement */}
              <div>
                <h3 className="text-2xl font-semibold text-green-800 mb-4">Procurement</h3>
                <p className="mb-4">
                  To procure the surplus milk available in the primary milk producers&apos; Co-operative societies of the union jurisdiction area.
                </p>
                <ul className="space-y-3 list-disc pl-8 text-xl">
                  <li>Organising dairy co-operative societies at village level.</li>
                  <li>Organising milk procurement routes to procure milk.</li>
                </ul>
                <p className="mt-6">
                  All the dairy co-operative societies in the union jurisdiction will be shareholders of the affiliated federal body where the dairy co-operative societies will be assisted in procuring milk in both shifts and providing technical input support to the producer members, ensuring remunerative payments to the dairy co-operative societies based on quality parameters.
                </p>
              </div>

              <Separator />

              {/* Technical Input Activities */}
              <div>
                <h3 className="text-2xl font-semibold text-green-800 mb-4">Technical Input Activities</h3>
                <p>
                  It is one of the fundamental objectives of RBKVMUL to carry out activities for enhancing milk production in its milk shed area. To achieve this, various technical input services like veterinary health care, artificial insemination services, vaccination, supply of balanced cattle feed, and quality fodder seeds are provided to boost milk production and the economic development of the farming community.
                </p>
              </div>

              <Separator />

              {/* Animal Health and Emergency Services */}
              <div>
                <h3 className="text-2xl font-semibold text-green-800 mb-4">Animal Health and Emergency Services</h3>
                <p>
                  The union is dedicated to promoting the health of cattle belonging to member milk producers. Veterinary health care facilities have been extended to all DCS. Emergency veterinary routes, health camps, and vaccinations against foot and mouth disease are provided to all functional societies. A mass deworming program is conducted twice a year at all DCS. Additionally, there is a backup of Veterinary First Aid Services for needy milch animals through trained DCS staff. The introduction of Trio-NB-Sac and &apos;Godhara Shakthi&apos; has further improved milk quality.
                </p>
              </div>

              <Separator />

              {/* Artificial Insemination Activities */}
              <div>
                <h3 className="text-2xl font-semibold text-green-800 mb-4">Artificial Insemination Activities</h3>
                <p>
                  Artificial insemination (AI) has been the main functional tool in driving the development of dairying in RBKVMUL. To improve the genetic potential and milk production of cattle, the union adopted the cluster AI concept in 1994, successfully reaching the majority of producers at their doorsteps. The progress under this activity for five years is detailed below.
                </p>
              </div>

              <Separator />

              {/* Fodder Activity */}
              <div>
                <h3 className="text-2xl font-semibold text-green-800 mb-4">Fodder Activity</h3>
                <p className="mb-4">
                  The Union has developed farms where various fodder seeds and root slips are produced to meet the needs of producers. These fodder seeds are distributed to producers at subsidized rates. To enhance animal productivity, balanced cattle feed and mineral mixtures are supplied through the DCS upon request.
                </p>
                <p className="mb-4">
                  The farmers are educated on enriching dry fodder with urea for better utilization. To reduce milk production costs, farmers are trained to establish silage demonstrations.
                </p>
                <p className="mb-4">
                  Farmers are also taught to cultivate azolla, which is rich in protein. To prevent fodder wastage, chaff cutters are provided to interested farmers at subsidized rates.
                </p>
                <p>
                  Training programs to enhance fodder development have been initiated at the union level for elite producers.
                </p>
              </div>

              <Separator />

              {/* Clean Milk Production */}
              <div>
                <h3 className="text-2xl font-semibold text-green-800 mb-4">Clean Milk Production</h3>
                <p>
                  To improve the quality of raw milk, a programme called &quot;CMP&quot; has been launched, under which Bulk Milk Coolers have been installed in 101 DCS, with many more in the pipeline. Additionally, 485 Automatic Milk Collection units have been provided to societies to enhance efficiency and ensure total transparency in the system. The traditional manual method of milk testing at the society level is being replaced with Automatic Electronic Milk Testers (Fat o matic).
                </p>
              </div>

              <Separator />

              {/* Other Activities */}
              <div>
                <h3 className="text-2xl font-semibold text-green-800 mb-4">Other Activities</h3>
                <p className="mb-4">
                  Various training programs such as CMP Training, MCM Training, President Training, AI Single &amp; Cluster, AMCU, First Aid, Secretary, Tester Training, and P.D Training are arranged periodically to enhance work efficiency. The union officers are also trained in different disciplines.
                </p>
                <p className="mb-4">
                  Government schemes like the Yashaswini Health Insurance Scheme, which covers all medical operation costs, and the Amrutha Yojana, which provides milch animals to widows and the poorest among poor women at subsidized rates, are effectively implemented by RBKVMUL.
                </p>
                <p className="mb-4">
                  Rs. 5/- incentive schemes for every litre of milk declared by the Govt of Karnataka are effectively implemented through RBKVMUL.
                </p>
              </div>

              <Separator />

              {/* STEP */}
              <div>
                <h3 className="text-2xl font-semibold text-green-800 mb-4">STEP (Support to Women Training &amp; Education Program)</h3>
                <p>The STEP program aims:</p>
                <ul className="space-y-3 list-disc pl-8 text-xl mt-4">
                  <li>To organize exclusive Women Dairy Cooperatives and undertake employment and income generation activities.</li>
                  <li>To provide need-based and extensive training for skill upgradation.</li>
                  <li>To mobilize women in the formation of Self Help Groups as a tool for income-generating activities and for easy access to credit.</li>
                </ul>
              </div>

              <Separator />

              {/* Ksheera Bhagya Yojane */}
              <div>
                <h3 className="text-2xl font-semibold text-green-800 mb-4">Ksheera Bhagya Yojane</h3>
                <p>
                  Launched in 2013, the KBY scheme represents one of the state&apos;s flagship programs and is a key initiative for childhood development. The Govt. of Karnataka&apos;s response addresses the challenge of providing primary and secondary education while breaking the cycle of malnutrition. The objectives are to improve the nutritional and health status of children and to lay the foundation for their proper psychological, physical, and social development.
                </p>
              </div>

              <Separator />

              {/* Ksheera Dhare */}
              <div>
                <h3 className="text-2xl font-semibold text-green-800 mb-4">Ksheera Dhare</h3>
                <p>
                  The Ksheera Dhare scheme has significantly boosted the animal husbandry sector in Karnataka. Aimed at improving the economic conditions of farmers involved in dairy farming, the Government of Karnataka increased the incentive for procuring milk from Rs. 2 per litre in 2008 to Rs. 4 per litre in 2013, and further to Rs. 5 in 2016 and Rs. 6 in 2019.
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