import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";

// Define the form schema using Zod
const formSchema = z.object({
  namaLengkap: z.string().min(1, "Nama lengkap wajib diisi."),
  email: z.string().email("Format email tidak valid.").min(1, "Email wajib diisi."),
  nomorTelepon: z.string().min(10, "Nomor telepon minimal 10 digit.").max(15, "Nomor telepon maksimal 15 digit."),
  ijazahS1D4: z.string().min(1, "Bidang ijazah S1/D4 wajib diisi."),
  ipk: z.string().regex(/^\d+(\.\d{1,2})?$/, "IPK harus berupa angka (contoh: 3.50).").min(1, "IPK wajib diisi."),
  pengalamanKerja: z.string().optional(),
  cvResume: z.string().min(1, "Link CV/Resume wajib diisi."),
  suratRekomendasi: z.string().min(1, "Link Surat Rekomendasi wajib diisi."),
  proposalStudi: z.string().min(1, "Link Proposal Rencana Studi wajib diisi."),
});

const RegistrationFormPage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      namaLengkap: "",
      email: "",
      nomorTelepon: "",
      ijazahS1D4: "",
      ipk: "",
      pengalamanKerja: "",
      cvResume: "",
      suratRekomendasi: "",
      proposalStudi: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log("Form submitted with values:", values);
    toast.success("Formulir pendaftaran berhasil dikirim!");
    // Here you would typically send this data to a backend API
    // For now, we'll just log it and show a toast.
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link to="/register">
            <Button variant="outline" className="text-blue-600 dark:text-blue-400 border-blue-600 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700">
              <ArrowLeft className="mr-2 h-4 w-4" /> Kembali ke Informasi Pendaftaran
            </Button>
          </Link>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight text-center mb-8">
          Formulir Pendaftaran
        </h1>

        {/* Biaya Pendidikan Section */}
        <Card className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 mb-8">
          <CardHeader className="p-0 mb-4">
            <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">Biaya Pendidikan Mahasiswa Reguler</CardTitle>
            <p className="text-sm text-gray-600 dark:text-gray-400">Perkuliahan dilaksanakan senin - jumat, jam 07.00 - 16.00 WIB.</p>
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
                    <TableCell className="font-medium">Prodi Keuangan dan Perbankan Syariah</TableCell>
                    <TableCell>Rp 6.250.000,-</TableCell>
                    <TableCell rowSpan={3} className="align-top">Setiap semester</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Prodi Pemasaran, Inovasi dan Teknologi</TableCell>
                    <TableCell>Rp 6.250.000,-</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Prodi Rekayasa Infrastruktur</TableCell>
                    <TableCell>Rp 9.000.000,-</TableCell>
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

        <Card className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6">
          <CardHeader className="p-0 mb-4">
            <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">Persyaratan Administratif</CardTitle>
          </CardHeader>
          <CardContent className="p-0 text-gray-700 dark:text-gray-300 space-y-6">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="namaLengkap"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nama Lengkap</FormLabel>
                      <FormControl>
                        <Input placeholder="Masukkan nama lengkap Anda" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="Masukkan email Anda" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="nomorTelepon"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nomor Telepon</FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder="Masukkan nomor telepon Anda" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="ijazahS1D4"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Bidang Ijazah S1/D4</FormLabel>
                      <FormControl>
                        <Input placeholder="Contoh: Manajemen, TI, Komunikasi" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="ipk"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>IPK Minimum (Skala 4.00)</FormLabel>
                      <FormControl>
                        <Input placeholder="Contoh: 3.50" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="pengalamanKerja"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Pengalaman Kerja (Opsional)</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Jelaskan pengalaman kerja Anda (min. 1-2 tahun di bidang pemasaran/teknologi)" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="cvResume"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Link CV/Resume</FormLabel>
                      <FormControl>
                        <Input placeholder="Link ke Google Drive/Dropbox/dll." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="suratRekomendasi"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Link Surat Rekomendasi</FormLabel>
                      <FormControl>
                        <Input placeholder="Link ke Google Drive/Dropbox/dll." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="proposalStudi"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Link Proposal Rencana Studi/Tujuan Kuliah</FormLabel>
                      <FormControl>
                        <Input placeholder="Link ke Google Drive/Dropbox/dll." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-3 rounded-md shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
                  Kirim Formulir Pendaftaran
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RegistrationFormPage;