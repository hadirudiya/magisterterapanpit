import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from 'lucide-react';

const RegistrationPage = () => {
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
          Informasi Pendaftaran Program
        </h1>
        <Card className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6">
          <CardHeader className="p-0 mb-4">
            <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">Proses Seleksi</CardTitle>
          </CardHeader>
          <CardContent className="p-0 text-gray-700 dark:text-gray-300 space-y-4">
            <div>
              <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400">Tes Tertulis (jika ada):</h4>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>Tes potensi akademik (logika, numerik, verbal).</li>
                <li>Esai tentang isu pemasaran teknologi/trend inovasi.</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-green-600 dark:text-green-400">Wawancara:</h4>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>Fokus pada motivasi, pengalaman, dan rencana kontribusi setelah lulus.</li>
                <li>Untuk program terapan, pertanyaan sering terkait studi kasus industri.</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-purple-600 dark:text-purple-400">Portofolio (opsional):</h4>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>Diutamakan bagi yang punya pengalaman proyek pemasaran digital, start-up, atau inovasi produk.</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Jalur Khusus</h3>
            <ul className="list-disc list-inside space-y-1">
              <li><strong className="font-semibold">Jalur Mitra Industri:</strong> Mahasiswa direkomendasikan perusahaan mitra (biasanya dapat pembiayaan).</li>
              <li><strong className="font-semibold">Jalur Beasiswa:</strong> Contoh: LPDP, BAPPENAS, atau beasiswa korporasi (e.g., Djarum, BRI).</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Biaya Pendaftaran</h3>
            <p>
              Berkisar Rp 300.000 – Rp 1.000.000 tergantung kampus.
            </p>
          </CardContent>
        </Card>
        <div className="mt-8 text-center">
          <Link to="/register/form">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-3 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
              Isi Formulir Sekarang
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;