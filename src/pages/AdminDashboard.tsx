import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AdminDashboard = () => {
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
          Dashboard Admin
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
          Selamat datang di Dashboard Admin! Di sini Anda dapat mengelola aplikasi.
        </p>

        <Card className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 text-left">
          <CardHeader className="p-0 mb-4">
            <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">Fitur Admin</CardTitle>
          </CardHeader>
          <CardContent className="p-0 text-gray-700 dark:text-gray-300 space-y-4">
            <ul className="list-disc list-inside">
              <li>
                <Link to="/admin/registrations" className="text-blue-600 hover:underline dark:text-blue-400">
                  Melihat Daftar Pendaftaran
                </Link>
              </li>
              <li>Mengelola pengguna</li>
              <li>Mengatur jadwal</li>
              <li>Dan banyak lagi... (fitur akan ditambahkan di sini)</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;