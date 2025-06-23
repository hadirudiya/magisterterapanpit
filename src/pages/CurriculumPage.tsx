import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const CurriculumPage = () => {
  const semesters = [
    {
      value: "semester-1",
      title: "Semester 1 (Dasar Bisnis & Analitik)",
      colorClass: "text-blue-600 dark:text-blue-400",
      content: (
        <>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Statistik Bisnis</li>
            <li>Analisis dan Sistem Keputusan</li>
            <li>Manajemen Keuangan</li>
            <li>Ekonomi Kreatif</li>
            <li>Strategi Komunikasi Pemasaran Terpadu</li>
          </ul>
          <p className="text-sm italic text-gray-600 dark:text-gray-400 mt-1">
            👉 Tujuan: Membekali kemampuan analitis dan manajerial umum sebelum masuk ke spesialisasi.
          </p>
        </>
      ),
    },
    {
      value: "semester-2",
      title: "Semester 2 (Inti Pemasaran Teknologi)",
      colorClass: "text-green-600 dark:text-green-400",
      content: (
        <>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Technology Marketing: Strategi pemasaran produk tech (SaaS, IoT, dll.).</li>
            <li>Customer Behavior & Branding: Psikologi konsumen di era digital.</li>
            <li>Manajemen Teknologi & Inovasi: Proses inovasi dari ide ke komersialisasi.</li>
            <li>Rantai Pasok: Efisiensi distribusi produk teknologi.</li>
          </ul>
          <p className="text-sm italic text-gray-600 dark:text-gray-400 mt-1">
            👉 Fokus pada integrasi teknologi, perilaku konsumen, dan logistik.
          </p>
        </>
      ),
    },
    {
      value: "semester-3",
      title: "Semester 3 (Strategi & Kreativitas)",
      colorClass: "text-purple-600 dark:text-purple-400",
      content: (
        <>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Strategic Digital Marketing: SEO, ads, growth hacking.</li>
            <li>Creative Marketing: Storytelling, konten viral, experiential marketing.</li>
            <li>Manajemen Merk Strategis: Brand positioning di pasar kompetitif.</li>
            <li>Manajemen Proyek & SDM: Kepemimpinan dalam tim inovasi.</li>
          </ul>
          <p className="text-sm italic text-gray-600 dark:text-gray-400 mt-1">
            👉 Kombinasi hard skills (strategi) + soft skills (kreativitas, leadership).
          </p>
        </>
      ),
    },
    {
      value: "semester-4",
      title: "Semester 4 (Tesis)",
      colorClass: "text-orange-600 dark:text-orange-400",
      content: (
        <>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Metodologi & Tesis: Aplikasi langsung ke kasus riil (e.g., strategi pemasaran untuk startup tech).</li>
            <li>Seminar proposal</li>
          </ul>
          <p className="text-sm italic text-gray-600 dark:text-gray-400 mt-1">
            👉 Biasanya berbasis proyek atau kolaborasi dengan industri.
          </p>
        </>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <Link to="/">
            <Button variant="outline" className="text-blue-600 dark:text-blue-400 border-blue-600 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700">
              <ArrowLeft className="mr-2 h-4 w-4" /> Kembali ke Beranda
            </Button>
          </Link>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight text-center mb-8">
          Informasi Kurikulum Program
        </h1>
        <Card className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6">
          <CardHeader className="p-0 mb-4">
            <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">Pola Kurikulum</CardTitle>
          </CardHeader>
          <CardContent className="p-0 text-gray-700 dark:text-gray-300 space-y-4">
            <p>
              Program ini menggabungkan konsep bisnis klasik (keuangan, SDM, rantai pasok) dengan pemasaran berbasis teknologi & inovasi, serta pendekatan kreatif/digital. Terlihat fokus pada practical skills untuk industri tech-driven.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Breakdown Per Semester:</h3>

            <Accordion type="single" collapsible className="w-full">
              {semesters.map((semester) => (
                <AccordionItem key={semester.value} value={semester.value} className="border-b border-gray-200 dark:border-gray-700">
                  <AccordionTrigger className={`text-lg font-semibold ${semester.colorClass} hover:no-underline`}>
                    {semester.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 dark:text-gray-300 pb-4">
                    {semester.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Keunikan Program Ini:</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Hybrid Approach: Gabungan bisnis tradisional + digital disruption + inovasi.</li>
              <li>Relevansi Industri: Mata kuliah seperti Technology Marketing dan Strategic Digital Marketing sangat dibutuhkan di pasar kerja.</li>
              <li>Kurikulum Compact: Tidak terlalu teoritis, langsung aplikatif (sesuai magister terapan).</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Prospek Karir Lulusan:</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Tech Product Marketer (B2B/B2C)</li>
              <li>Digital Transformation Consultant</li>
              <li>Innovation Manager di perusahaan korporat</li>
              <li>Entrepreneur di bidang tech-based business</li>
              <li>Brand Strategist untuk produk digital</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CurriculumPage;