import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Phone } from 'lucide-react'; // Import Phone icon
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils"; // Import cn utility for combining tailwind classes
import RegistrationTimeline from '@/components/RegistrationTimeline'; // Import the new timeline component

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
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bar-chart-3 mr-2 h-4 w-4"><path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></svg>
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
                    <TableCell>1 September 2025 - 6 September 2025</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Pelantikan Mahasiswa Baru</TableCell>
                    <TableCell colSpan={2} className="text-center">8 September 2025</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Matrikulasi</TableCell>
                    <TableCell colSpan={2} className="text-center">15 September 2025 - 20 September 2025</TableCell>
                  </TableRow>
                  <TableRow className="bg-gray-100 dark:bg-gray-700">
                    <TableCell className="font-semibold text-gray-900 dark:text-white">Awal perkuliahan semester Ganjil 2026/2027</TableCell>
                    <TableCell colSpan={2} className="text-center font-semibold text-gray-900 dark:text-white">22 September 2025</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            <p className="text-sm italic text-gray-600 dark:text-gray-400 mt-4">
              *Gelombang 2 akan dilaksanakan apabila kuota belum terpenuhi
            </p>
          </CardContent>
        </Card>

        {/* New Registration Timeline Section */}
        <section className="mt-12">
          <RegistrationTimeline />
        </section>

        {/* Biaya Pendidikan Section - Moved and Modified */}
        <Card className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 mt-8">
          <CardHeader className="p-0 mb-4">
            <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">Biaya Pendidikan Mahasiswa Reguler</CardTitle>
            <p className="text-sm text-gray-600 dark:text-gray-400">Perkuliahan dilaksanakan senin - jumat, jam 17.00 - 20.00 WIB. dan sabtu 08:00 - 16:00</p>
          </CardHeader>
          <CardContent className="p-0 text-gray-700 dark:text-gray-300">
            <div className="overflow-x-auto">
              <Table className="min-w-full">
                <TableHeader>
                  <TableRow className="bg-gray-100 dark:bg-gray-700">
                    <TableHead className="w-[40%] text-gray-900 dark:text-white font-semibold">Program Studi Magister Terapan</TableHead>
                    <TableHead className="w-[30%] text-gray-900 dark:text-white font-semibold">Jumlah</TableHead>
                    <TableHead className="w-[30%] text-gray-900 dark:text-white font-semibold">Keterangan</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Pendaftaran</TableCell>
                    <TableCell>Rp 500.000,-</TableCell>
                    <TableCell>Dibayarkan satu kali</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Perkuliahan</TableCell>
                    <TableCell>Rp 7.500.000,-</TableCell>
                    <TableCell>Setiap semester</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Matrikulasi*</TableCell>
                    <TableCell>Rp 200.000,-</TableCell>
                    <TableCell>Per Sks (Maksimum 6 SKS)</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            <p className="text-sm italic text-gray-600 dark:text-gray-400 mt-4">
              Keterangan: *Mahasiswa yang mengikuti matrikulasi ditetapkan berdasarkan hasil tes tertulis dan wawancara yang dilaksanakan oleh program studi.
            </p>
          </CardContent>
        </Card>

        {/* New Contact Person Section */}
        <Card className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 mt-8">
          <CardHeader className="p-0 mb-4">
            <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">Narahubung Program Studi Magister Terapan</CardTitle>
          </CardHeader>
          <CardContent className="p-0 text-gray-700 dark:text-gray-300 space-y-4">
            <div className="flex items-start">
              <Phone className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold">Manajemen Pemasaran, Inovasi dan Teknologi</p>
                <p>Dr. Arrahmah Aprilia, ST.,MT</p>
                <a href="https://wa.me/6281219533966" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline dark:text-blue-400">
                  WhatsApp: 081219533966
                </a>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* New Map Section */}
        <Card className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 text-left mt-8">
          <CardHeader className="p-0 mb-4">
            <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">Lokasi Polimedia</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}> {/* 16:9 Aspect Ratio */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.3604679321093!2d106.82455607370183!3d-6.347348362096998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ec2e63dcf7b7%3A0x39a93c506b0174b8!2sPoliteknik%20Negeri%20Media%20Kreatif%20Jakarta!5e0!3m2!1sid!2sid!4v1750109345056!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0, position: 'absolute', top: 0, left: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              ></iframe>
            </div>
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