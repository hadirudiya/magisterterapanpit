import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Briefcase, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight mb-4">
            Magister Terapan Pemasaran Teknologi dan Inovasi
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Program studi pascasarjana (S2) yang berfokus pada pengembangan kemampuan strategis dalam pemasaran berbasis teknologi dan inovasi. Program ini ditujukan untuk profesional yang ingin memperdalam pengetahuan tentang bagaimana memasarkan produk atau layanan teknologi serta mengelola inovasi di era digital.
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-3 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
              Daftar Sekarang
            </Button>
            <Link to="/curriculum">
              <Button size="lg" variant="outline" className="text-blue-600 dark:text-blue-400 border-blue-600 dark:border-blue-400 text-lg px-8 py-3 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-50 dark:hover:bg-gray-700">
                Kurikulum
              </Button>
            </Link>
          </div>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6">
            <CardHeader className="flex flex-row items-center space-x-4 p-0 mb-4">
              <CheckCircle2 className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">Karakteristik Program</CardTitle>
            </CardHeader>
            <CardContent className="p-0 text-gray-700 dark:text-gray-300">
              <ul className="list-none space-y-3">
                <li className="flex items-start">
                  <span className="mr-2 text-blue-600 dark:text-blue-400">&#8226;</span>
                  <div>
                    <strong className="font-semibold">Berbasis Terapan (Applied Master):</strong> Lebih menekankan pada praktik daripada teori, dengan studi kasus, proyek riil, dan kolaborasi industri.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-600 dark:text-blue-400">&#8226;</span>
                  Dirancang untuk memenuhi kebutuhan pasar kerja di bidang pemasaran digital, teknologi, dan start-up.
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6">
            <CardHeader className="flex flex-row items-center space-x-4 p-0 mb-4">
              <BookOpen className="h-8 w-8 text-green-600 dark:text-green-400" />
              <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">Kurikulum Integratif</CardTitle>
            </CardHeader>
            <CardContent className="p-0 text-gray-700 dark:text-gray-300">
              <p className="mb-3">Menggabungkan pemasaran digital, manajemen inovasi, analisis data, dan strategi teknologi.</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Pemasaran Digital & E-Commerce</li>
                <li>Manajemen Inovasi & Produk Teknologi</li>
                <li>Analisis Big Data untuk Pemasaran</li>
                <li>Strategi Branding Teknologi</li>
                <li>Business Model Innovation</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-1 gap-8 mb-12">
          <Card className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6">
            <CardHeader className="flex flex-row items-center space-x-4 p-0 mb-4">
              <Briefcase className="h-8 w-8 text-orange-600 dark:text-orange-400" />
              <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">Prospek Karir</CardTitle>
            </CardHeader>
            <CardContent className="p-0 text-gray-700 dark:text-gray-300">
              <ul className="list-disc list-inside space-y-2">
                <li>Digital Marketing Strategist</li>
                <li>Product Manager (Teknologi)</li>
                <li>Innovation Consultant</li>
                <li>Business Development (Tech Industry)</li>
                <li>Brand Manager untuk Produk Digital</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <footer className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Tertarik untuk bergabung? Hubungi kami untuk informasi lebih lanjut!
          </p>
          <div className="mt-4">
            <Button variant="outline" className="text-blue-600 dark:text-blue-400 border-blue-600 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700">
              Hubungi Kami
            </Button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default LandingPage;