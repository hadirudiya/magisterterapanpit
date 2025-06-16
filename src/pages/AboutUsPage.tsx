import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from 'lucide-react';

const AboutUsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <Link to="/">
            <Button variant="outline" className="text-blue-600 dark:text-blue-400 border-blue-600 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700">
              <ArrowLeft className="mr-2 h-4 w-4" /> Kembali ke Beranda
            </Button>
          </Link>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight mb-6">
          Tentang Kami
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
          Halaman ini akan berisi informasi lebih lanjut tentang Politeknik Negeri Media Kreatif dan program Magister Terapan Pemasaran, Inovasi, dan Teknologi.
        </p>
        <p className="text-md text-gray-600 dark:text-gray-400">
          Nantikan pembaruan konten di sini!
        </p>
      </div>
    </div>
  );
};

export default AboutUsPage;