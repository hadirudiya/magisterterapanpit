import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Briefcase, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroSection from '@/components/HeroSection'; // Import the new HeroSection component

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-violet-100 dark:from-gray-900 dark:to-gray-800">
      <HeroSection /> {/* Render the new HeroSection component */}

      <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6">
            <CardHeader className="flex flex-row items-center space-x-4 p-0 mb-4">
              <CheckCircle2 className="h-8 w-8 text-primary" />
              <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">Karakteristik Program</CardTitle>
            </CardHeader>
            <CardContent className="p-0 text-gray-700 dark:text-gray-300">
              <ul className="list-none space-y-3">
                <li className="flex items-start">
                  <span className="mr-2 text-primary">&#8226;</span>
                  <div>
                    <strong className="font-semibold">Berbasis Terapan (Applied Master):</strong> Lebih menekankan pada praktik daripada teori, dengan studi kasus, proyek riil, dan kolaborasi industri.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">&#8226;</span>
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
            Politeknik Negeri Media Kreatif 2025
          </p>
        </footer>
      </div>
    </div>
  );
};

export default LandingPage;