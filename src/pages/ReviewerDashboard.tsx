import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { supabase } from '@/integrations/supabase/client';
import { toast } from "sonner";

interface Registration {
  id: string;
  nama_lengkap: string;
  email: string;
  nomor_telepon: string;
  ijazah_s1_d4: string;
  ipk: number;
  pengalaman_kerja?: string;
  cv_resume_link: string;
  surat_rekomendasi_link: string;
  proposal_studi_link: string;
  portofolio_link?: string; // New field for portofolio
  created_at: string;
}

const ReviewerDashboard = () => {
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRegistrations = async () => {
      setLoading(true);
      setError(null);
      const { data, error } = await supabase
        .from('registrations')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error("Error fetching registrations:", error);
        setError("Gagal memuat data pendaftaran: " + error.message);
        toast.error("Gagal memuat data pendaftaran.");
      } else {
        setRegistrations(data as Registration[]);
      }
      setLoading(false);
    };

    fetchRegistrations();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <Link to="/">
            <Button variant="outline" className="text-blue-600 dark:text-blue-400 border-blue-600 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700">
              <ArrowLeft className="mr-2 h-4 w-4" /> Kembali ke Beranda
            </Button>
          </Link>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight text-center mb-8">
          Dashboard Reviewer
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 text-center">
          Lihat dan tinjau formulir pendaftaran yang masuk.
        </p>

        <Card className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6">
          <CardHeader className="p-0 mb-4">
            <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">Daftar Pendaftar</CardTitle>
          </CardHeader>
          <CardContent className="p-0 text-gray-700 dark:text-gray-300">
            {loading ? (
              <p className="text-center py-8">Memuat data pendaftaran...</p>
            ) : error ? (
              <p className="text-center py-8 text-red-500">{error}</p>
            ) : registrations.length === 0 ? (
              <p className="text-center py-8">Belum ada pendaftaran yang masuk.</p>
            ) : (
              <div className="overflow-x-auto">
                <Table className="min-w-full">
                  <TableHeader>
                    <TableRow className="bg-gray-100 dark:bg-gray-700">
                      <TableHead className="text-gray-900 dark:text-white font-semibold">Nama Lengkap</TableHead>
                      <TableHead className="text-gray-900 dark:text-white font-semibold">Email</TableHead>
                      <TableHead className="text-gray-900 dark:text-white font-semibold">IPK</TableHead>
                      <TableHead className="text-gray-900 dark:text-white font-semibold">CV/Resume</TableHead>
                      <TableHead className="text-gray-900 dark:text-white font-semibold">Surat Rekomendasi</TableHead>
                      <TableHead className="text-gray-900 dark:text-white font-semibold">Proposal Studi</TableHead>
                      <TableHead className="text-gray-900 dark:text-white font-semibold">Portofolio</TableHead> {/* New Table Head */}
                      <TableHead className="text-gray-900 dark:text-white font-semibold">Tanggal Daftar</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {registrations.map((reg) => (
                      <TableRow key={reg.id}>
                        <TableCell className="font-medium">{reg.nama_lengkap}</TableCell>
                        <TableCell>{reg.email}</TableCell>
                        <TableCell>{reg.ipk.toFixed(2)}</TableCell>
                        <TableCell>
                          {reg.cv_resume_link ? (
                            <a href={reg.cv_resume_link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline dark:text-blue-400 flex items-center">
                              Lihat <ExternalLink className="ml-1 h-4 w-4" />
                            </a>
                          ) : "N/A"}
                        </TableCell>
                        <TableCell>
                          {reg.surat_rekomendasi_link ? (
                            <a href={reg.surat_rekomendasi_link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline dark:text-blue-400 flex items-center">
                              Lihat <ExternalLink className="ml-1 h-4 w-4" />
                            </a>
                          ) : "N/A"}
                        </TableCell>
                        <TableCell>
                          {reg.proposal_studi_link ? (
                            <a href={reg.proposal_studi_link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline dark:text-blue-400 flex items-center">
                              Lihat <ExternalLink className="ml-1 h-4 w-4" />
                            </a>
                          ) : "N/A"}
                        </TableCell>
                        <TableCell>
                          {reg.portofolio_link ? ( {/* New Table Cell */}
                            <a href={reg.portofolio_link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline dark:text-blue-400 flex items-center">
                              Lihat <ExternalLink className="ml-1 h-4 w-4" />
                            </a>
                          ) : "N/A"}
                        </TableCell>
                        <TableCell>{new Date(reg.created_at).toLocaleDateString()}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ReviewerDashboard;