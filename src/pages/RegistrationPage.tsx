import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils"; // Import cn utility for combining tailwind classes

const RegistrationPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-violet-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <Link to="/">
            <Button variant="outline" className="text-primary dark:text-primary border-primary dark:border-primary hover:bg-primary/10 dark:hover:bg-gray-700">
              <ArrowLeft className="mr-2 h-4 w-4" /> Kembali ke Beranda
            </Button>
          </Link>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight text-center mb-8">
          Informasi Pendaftaran Program
        </h1>
        <Card className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 mb-8">
          <CardHeader className="p-0 mb-4">
            <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">Jadwal Seleksi Mahasiswa Baru Magister Terapan</CardTitle>
          </CardHeader>
          <CardContent className="p-0 text-gray-700 dark:text-gray-300">
            <div className="overflow-x-auto">
              <Table className="min-w-full">
                <TableHeader>
                  <TableRow className="bg-gray-100 dark:bg-gray-700">
                    <TableHead className="w-[30%] text-gray-900 dark:text-white font-semibold">KEGIATAN</TableHead>
                    <TableHead className="w-[35%] text-gray-900 dark:text-white font-semibold">GELOMBANG 1</TableHead>
                    <TableHead className="w-[35%] text-gray-900 dark:text-white font-semibold">GELOMBANG 2*</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Pendaftaran dan upload berkas persyaratan</TableCell>
                    <TableCell>23 Juni 2025 - 30 Juni 2025</TableCell>
                    <TableCell>20 Juli 2025 - 27 Juli 2025</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Sosialisasi Program Magister Terapan</TableCell>
                    <TableCell>
                      2 Juli 2025 (Online jam 13.00 WIB via Zoom)<br />
                      <span className="font-semibold">Link Meet Online:</span>{" "}
                      <a href="https://meet.jit.si/sosialisasiMTMPITPolimedia2025" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                        https://meet.jit.si/sosialisasiMTMPITPolimedia2025
                      </a>
                      {/* Changed Button to a tag with button styling */}
                      <a
                        href="https://forms.gle/nNAFYKaPEYUZUwCS9"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                          "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
                          "border border-input bg-background hover:bg-accent hover:text-accent-foreground", // Default button outline styles
                          "mt-2 w-full text-primary border-primary hover:bg-primary/10" // Specific styles for this button
                        )}
                        style={{ padding: '0.5rem 1rem' }} // Manual padding to match button size
                      >
                        <svg xmlns="http://www.w3.org/2020/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bar-chart-3 mr-2 h-4 w-4"><path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></svg>
                        Konfirmasi Kehadiran Sosialisasi SMB Magister
                      </a>
                    </TableCell>
                    <TableCell>
                      28 Juli 2025 (online jam 13.00 WIB via Meet Online)
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Tes Tertulis</TableCell>
                    <TableCell>5 Juli 2025</TableCell>
                    <TableCell>2 Agustus 2025</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Pengumuman Lulus Tes Tertulis</TableCell>
                    <TableCell>19 Juli 2025</TableCell>
                    <TableCell>16 Agustus 2025</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Wawancara</TableCell>
                    <TableCell>21 Juli 2025 - 26 Juli 2025</TableCell>
                    <TableCell>18 Agustus 2025 - 23 Agustus 2025</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Pengumuman Akhir<br /><span className="text-sm italic">(Dapat dicek pada menu Hasil setelah login)</span></TableCell>
                    <TableCell>2 Agustus 2025</TableCell>
                    <TableCell>30 Agustus 2025</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Daftar Ulang</TableCell>
                    <TableCell>4 Agustus 2025 - 9 Agustus 2025</TableCell>
                    <TableCell>28 Jul 2025 - 1 Aug 2025</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Pelantikan Mahasiswa Baru</TableCell>
                    <TableCell colSpan={2} className="text-center">11 Agustus 2025</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Matrikulasi</TableCell>
                    <TableCell colSpan={2} className="text-center">6 Agustus - 15 Agustus 2025</TableCell>
                  </TableRow>
                  <TableRow className="bg-gray-100 dark:bg-gray-700">
                    <TableCell className="font-semibold text-gray-900 dark:text-white">Awal perkuliahan semester Ganjil 2025/2026</TableCell>
                    <TableCell colSpan={2} className="text-center font-semibold text-gray-900 dark:text-white">18 Agustus 2025</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            <p className="text-sm italic text-gray-600 dark:text-gray-400 mt-4">
              *Gelombang 2 akan dilaksanakan apabila kuota belum terpenuhi
            </p>
          </CardContent>
        </Card>
        <div className="mt-8 text-center">
          <Link to="/register/form">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-3 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
              Isi Formulir Sekarang
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;