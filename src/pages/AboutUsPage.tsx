import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Mail, MapPin, Phone } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
        
        <img 
          src="/logoPolimediaJPEG.jpeg" 
          alt="Polimedia Logo" 
          className="mx-auto mb-8 max-h-32 sm:max-h-40 lg:max-h-48 object-contain" 
        />

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight mb-6">
          Tentang Kami
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
          Politeknik Negeri Media Kreatif (Polimedia) adalah institusi pendidikan tinggi vokasi yang berfokus pada pengembangan sumber daya manusia di bidang industri kreatif. Program Magister Terapan Pemasaran, Inovasi, dan Teknologi dirancang untuk menghasilkan pemimpin dan inovator yang siap menghadapi tantangan di era digital.
        </p>
        <p className="text-md text-gray-600 dark:text-gray-400 mb-12">
          Kami berkomitmen untuk menyediakan pendidikan berkualitas tinggi yang relevan dengan kebutuhan industri, didukung oleh fasilitas modern dan pengajar berpengalaman.
        </p>

        <Card className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 text-left mb-8">
          <CardHeader className="p-0 mb-4">
            <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">Hubungi Kami</CardTitle>
          </CardHeader>
          <CardContent className="p-0 text-gray-700 dark:text-gray-300 space-y-4">
            <div className="flex items-start">
              <Phone className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold">WhatsApp</p>
                <a href="https://wa.me/628111669695" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline dark:text-blue-400">
                  +62 811-1669-695
                </a>
              </div>
            </div>
            <div className="flex items-start">
              <Mail className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold">eMail</p>
                <a href="mailto:humas@polimedia.ac.id" className="text-blue-600 hover:underline dark:text-blue-400">
                  humas@polimedia.ac.id
                </a>
              </div>
            </div>
            <div className="flex items-start">
              <MapPin className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold">Kampus Jakarta</p>
                <p>Jl. Srengseng Sawah Raya No.17, RT.8/RW.3, Srengseng Sawah, Kec. Jagakarsa, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12630</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* New Map Section */}
        <Card className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 text-left">
          <CardHeader className="p-0 mb-4">
            <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">Lokasi Kami</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}> {/* 16:9 Aspect Ratio */}
              <iframe
                src="https://maps.app.goo.gl/4PnCFGeYzydFNqQm8"
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
      </div>
    </div>
  );
};

export default AboutUsPage;