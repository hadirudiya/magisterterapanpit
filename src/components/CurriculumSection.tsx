import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CurriculumSection = () => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-8">
        Informasi Kurikulum
      </h2>
      <Tabs defaultValue="kurikulum" className="w-full">
        <TabsList className="grid w-full grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
          <TabsTrigger value="kurikulum">Kurikulum Program</TabsTrigger>
        </TabsList>
        <TabsContent value="kurikulum">
          <Card className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6">
            <CardHeader className="p-0 mb-4">
              <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">Pola Kurikulum</CardTitle>
            </CardHeader>
            <CardContent className="p-0 text-gray-700 dark:text-gray-300 space-y-4">
              <p>
                Program ini menggabungkan konsep bisnis klasik (keuangan, SDM, rantai pasok) dengan pemasaran berbasis teknologi & inovasi, serta pendekatan kreatif/digital. Terlihat fokus pada practical skills untuk industri tech-driven.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Breakdown Per Semester:</h3>

              <div>
                <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400">Semester 1 (Dasar Bisnis & Analitik)</h4>
                <ul className="list-disc list-inside space-y-1 mt-2">
                  <li>Statistika Bisnis & Analisis Keputusan: Fondasi data-driven marketing.</li>
                  <li>Sistem & TI: Pemahaman infrastruktur teknologi pendukung pemasaran (e.g., CRM, AI tools).</li>
                  <li>Manajemen Keuangan: Penting untuk menghitung ROI kampanye digital atau proyek inovasi.</li>
                  <li>Ekonomi Kreatif: Konteks industri kreatif (startup, content, digital produk).</li>
                </ul>
                <p className="text-sm italic text-gray-600 dark:text-gray-400 mt-1">
                  👉 Tujuan: Membekali kemampuan analitis dan manajerial umum sebelum masuk ke spesialisasi.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-green-600 dark:text-green-400">Semester 2 (Inti Pemasaran Teknologi)</h4>
                <ul className="list-disc list-inside space-y-1 mt-2">
                  <li>Technology Marketing: Strategi pemasaran produk tech (SaaS, IoT, dll.).</li>
                  <li>Customer Behavior & Branding: Psikologi konsumen di era digital.</li>
                  <li>Manajemen Teknologi & Inovasi: Proses inovasi dari ide ke komersialisasi.</li>
                  <li>Rantai Pasok: Efisiensi distribusi produk teknologi.</li>
                </ul>
                <p className="text-sm italic text-gray-600 dark:text-gray-400 mt-1">
                  👉 Fokus pada integrasi teknologi, perilaku konsumen, dan logistik.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-purple-600 dark:text-purple-400">Semester 3 (Strategi & Kreativitas)</h4>
                <ul className="list-disc list-inside space-y-1 mt-2">
                  <li>Strategic Digital Marketing: SEO, ads, growth hacking.</li>
                  <li>Creative Marketing: Storytelling, konten viral, experiential marketing.</li>
                  <li>Manajemen Merk Strategis: Brand positioning di pasar kompetitif.</li>
                  <li>Manajemen Proyek & SDM: Kepemimpinan dalam tim inovasi.</li>
                </ul>
                <p className="text-sm italic text-gray-600 dark:text-gray-400 mt-1">
                  👉 Kombinasi hard skills (strategi) + soft skills (kreativitas, leadership).
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-orange-600 dark:text-orange-400">Semester 4 (Tesis)</h4>
                <ul className="list-disc list-inside space-y-1 mt-2">
                  <li>Metodologi & Tesis: Aplikasi langsung ke kasus riil (e.g., strategi pemasaran untuk startup tech).</li>
                </ul>
                <p className="text-sm italic text-gray-600 dark:text-gray-400 mt-1">
                  👉 Biasanya berbasis proyek atau kolaborasi dengan industri.
                </p>
              </div>

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
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default CurriculumSection;