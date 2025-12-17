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

        {/* Human Resources Section */}
        <section className="py-16 px-6 md:px-12 max-w-5xl mx-auto">
          <Card className="shadow-xl border-green-200">
            <CardHeader>
              <CardTitle className="text-4xl text-green-800">Human Resources</CardTitle>
            </CardHeader>
            <CardContent className="space-y-12 text-lg text-gray-700 leading-relaxed">
              <div>
                <h3 className="text-2xl font-semibold text-green-800 mb-4">HR Department</h3>

                <h4 className="text-xl font-semibold text-green-700 mb-3">Objectives</h4>
                <p className="mb-8">
                  The main objective of the personnel / HR Department is to achieve the goals of the organization. To achieve these goals, it must be ensured that human resources are effectively utilized. The personnel Administration creates a soothing environment for the employees to secure their integration so that they may feel a sense of involvement, commitment and loyalty to the organization.
                </p>

                <h4 className="text-xl font-semibold text-green-700 mb-4">Main functions of the HR Department</h4>
                <ul className="space-y-4 text-xl list-disc pl-6">
                  <li>To achieve and maintain good human relationships within the organization (Union).</li>
                  <li>Enable each person to make their maximum personal contribution to the effective working of the union.</li>
                  <li>Welfare aspects (Provide canteen, uniforms, health Insurance and other basic amenities).</li>
                  <li>Personnel aspects (recruitment, placement, remuneration, promotion and Incentives).</li>
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