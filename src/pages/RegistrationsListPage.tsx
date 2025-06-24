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
import { toast } from 'sonner';

interface Registration {
  id: string;
  user_id: string;
  nama_lengkap: string;
  email: string;
  nomor_telepon: string;
  ijazah_s1_d4: string;
  ipk: number;
  pengalaman_kerja: string | null;
  cv_resume_link: string;
  surat_rekomendasi_link: string;
  proposal_studi_link: string;
  portofolio_link: string;
  created_at: string;
}

const RegistrationsListPage = () => {
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
        setRegistrations(data || []);
      }
      setLoading(false);
    };

    fetchRegistrations();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <Link to="/admin/dashboard">
            <Button variant="outline" className="text-blue-600 dark:text-blue-400 border-blue-600 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700">
              <ArrowLeft className="mr-2 h-4 w-4" /> Kembali ke Dashboard Admin
            </Button>
          </Link>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight text-center mb-8">
          Daftar Pendaftaran Mahasiswa
        </h1>

        <Card className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6">
          <CardHeader className="p-0 mb-4">
            <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">Data Pendaftar</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            {loading ? (
              <p className="text-center text-gray-600 dark:text-gray-400">Memuat data...</p>
            ) : error ? (
              <p className="text-center text-red-600 dark:text-red-400">{error}</p>
            ) : registrations.length === 0 ? (
              <p className="text-center text-gray-600 dark:text-gray-400">Belum ada pendaftaran.</p>
            ) : (
              <div className="overflow-x-auto">
                <Table className="min-w-full">
                  <TableHeader>
                    <TableRow className="bg-gray-100 dark:bg-gray-700">
                      <TableHead className="text-gray-900 dark:text-white font-semibold">Nama Lengkap</TableHead>
                      <TableHead className="text-gray-900 dark:text-white font-semibold">Email</TableHead>
                      <TableHead className="text-gray-900 dark:text-white font-semibold">No. Telepon</TableHead>
                      <TableHead className="text-gray-900 dark:text-white font-semibold">Ijazah S1/D4</TableHead>
                      <TableHead className="text-gray-900 dark:text-white font-semibold">IPK</TableHead>
                      <TableHead className="text-gray-900 dark:text-white font-semibold">Pengalaman Kerja</TableHead>
                      <TableHead className="text-gray-900 dark:text-white font-semibold">Berkas</TableHead>
                      <TableHead className="text-gray-900 dark:text-white font-semibold">Tanggal Daftar</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {registrations.map((reg) => (
                      <TableRow key={reg.id}>
                        <TableCell className="font-medium">{reg.nama_lengkap}</TableCell>
                        <TableCell>{reg.email}</TableCell>
                        <TableCell>{reg.nomor_telepon}</TableCell>
                        <TableCell>{reg.ijazah_s1_d4}</TableCell>
                        <TableCell>{reg.ipk}</TableCell>
                        <TableCell>{reg.pengalaman_kerja || '-'}</TableCell>
                        <TableCell>
                          <div className="flex flex-col space-y-1">
                            <a href={reg.cv_resume_link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center">
                              CV/Resume <ExternalLink className="ml-1 h-3 w-3" />
                            </a>
                            <a href={reg.surat_rekomendasi_link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center">
                              Surat Rekomendasi <ExternalLink className="ml-1 h-3 w-3" />
                            </a>
                            <a href={reg.proposal_studi_link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center">
                              Proposal Studi <ExternalLink className="ml-1 h-3 w-3" />
                            </a>
                            <a href={reg.portofolio_link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center">
                              Portofolio <ExternalLink className="ml-1 h-3 w-3" />
                            </a>
                          </div>
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

export default RegistrationsListPage;