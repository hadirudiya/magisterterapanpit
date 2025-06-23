import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Download } from 'lucide-react'; // Import Download icon
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
import { supabase } from '@/integrations/supabase/client'; // Import Supabase client
import { useSession } from '@/components/SessionContextProvider'; // Import useSession

// Define the form schema using Zod
const formSchema = z.object({
  namaLengkap: z.string().min(1, "Nama lengkap wajib diisi."),
  email: z.string().email("Format email tidak valid.").min(1, "Email wajib diisi."),
  nomorTelepon: z.string().min(10, "Nomor telepon minimal 10 digit.").max(15, "Nomor telepon maksimal 15 digit."),
  ijazahS1D4: z.string().min(1, "Bidang ijazah S1/D4 wajib diisi."),
  ipk: z.coerce.number().min(0, "IPK tidak boleh negatif.").max(4.00, "IPK maksimal 4.00."), // Changed to number
  pengalamanKerja: z.string().optional(),
  cvResume: z.string().url("Link CV/Resume harus berupa URL yang valid.").min(1, "Link CV/Resume wajib diisi."),
  suratRekomendasi: z.string().url("Link Surat Rekomendasi harus berupa URL yang valid.").min(1, "Link Surat Rekomendasi wajib diisi."),
  proposalStudi: z.string().url("Link Proposal Rencana Studi harus berupa URL yang valid.").min(1, "Link Proposal Rencana Studi wajib diisi."),
  portofolio: z.string().url("Link Portofolio harus berupa URL yang valid.").optional(), // New field for portofolio
});

const RegistrationFormPage = () => {
  const navigate = useNavigate();
  const { session } = useSession(); // Get the current session

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      namaLengkap: "",
      email: "",
      nomorTelepon: "",
      ijazahS1D4: "",
      ipk: 0, // Default to 0 for number type
      pengalamanKerja: "",
      cvResume: "",
      suratRekomendasi: "",
      proposalStudi: "",
      portofolio: "", // Default value for new field
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    if (!session?.user) {
      toast.error("Anda harus masuk untuk mengirimkan formulir pendaftaran.");
      navigate('/login');
      return;
    }

    const loadingToastId = toast.loading("Mengirimkan formulir pendaftaran...");

    try {
      const { data, error } = await supabase
        .from('registrations')
        .insert([
          {
            user_id: session.user.id,
            nama_lengkap: values.namaLengkap,
            email: values.email,
            nomor_telepon: values.nomorTelepon,
            ijazah_s1_d4: values.ijazahS1D4,
            ipk: values.ipk,
            pengalaman_kerja: values.pengalamanKerja,
            cv_resume_link: values.cvResume,
            surat_rekomendasi_link: values.suratRekomendasi,
            proposal_studi_link: values.proposalStudi,
            portofolio_link: values.portofolio, // Include new field
          },
        ]);

      if (error) {
        console.error("Error submitting form:", error);
        toast.error("Gagal mengirimkan formulir: " + error.message, { id: loadingToastId });
      } else {
        console.log("Form submitted successfully:", data);
        toast.success("Formulir pendaftaran berhasil dikirim!", { id: loadingToastId });
        form.reset(); // Reset form after successful submission
      }
    } catch (error) {
      console.error("Unexpected error:", error);
      toast.error("Terjadi kesalahan tak terduga saat mengirimkan formulir.", { id: loadingToastId });
    }
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
                        <Input placeholder="Contoh: 3.50" {...field} type="number" step="0.01" />
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
                      <div className="mt-2">
                        <a 
                          href="/Format_Proposal_Penelitian.docx" 
                          download 
                          className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm font-medium"
                        >
                          <Download className="mr-2 h-4 w-4" />
                          Unduh Format Proposal Penelitian
                        </a>
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="portofolio"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Link Portofolio (Opsional)</FormLabel>
                      <FormControl>
                        <Input placeholder="Link ke Google Drive/Behance/GitHub/dll." {...field} />
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