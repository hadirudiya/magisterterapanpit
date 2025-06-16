import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface TimelineStepProps {
  stepNumber: string;
  title: string;
  description: string;
  alignment: 'left' | 'right';
}

const TimelineStep: React.FC<TimelineStepProps> = ({ stepNumber, title, description, alignment }) => {
  return (
    <div className={cn(
      "flex items-center w-full",
      alignment === 'right' ? "justify-end" : "justify-start"
    )}>
      <div className={cn(
        "flex flex-col items-center relative w-full", // Ensure inner div takes full width for mobile alignment
        alignment === 'right' ? "md:flex-row-reverse" : "md:flex-row"
      )}>
        {/* Step Content Card */}
        <Card className={cn(
          "w-full md:w-[calc(50%-1.5rem)] shadow-lg rounded-xl p-4", // Adjusted width to bring it closer
          "bg-white dark:bg-gray-800",
          alignment === 'right' ? "md:mr-6" : "md:ml-6" // Adjusted margin for closer proximity
        )}>
          <CardHeader className="p-0 mb-2">
            <div className="flex items-center space-x-2">
              <span className="text-sm font-bold text-white bg-primary px-3 py-1 rounded-md">
                {stepNumber}
              </span>
              <CardTitle className="text-lg font-bold text-gray-900 dark:text-white">
                {title}
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="p-0 text-gray-700 dark:text-gray-300 text-sm">
            {description}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

const RegistrationTimeline: React.FC = () => {
  const steps = [
    {
      stepNumber: "01",
      title: "PRA Pendaftaran",
      description: "untuk memperoleh VA yang akan digunakan untuk Login",
      alignment: "right",
    },
    {
      stepNumber: "02",
      title: "Transaksi VA",
      description: "membayar VA melalui fasilitas Bank untuk mendapatkan PIN melalui e-mail",
      alignment: "left",
    },
    {
      stepNumber: "03",
      title: "Login",
      description: "siapkan seluruh dokumen yang dipersyaratkan, kemudian login",
      alignment: "right",
    },
    {
      stepNumber: "04",
      title: "Form Aplikasi",
      description: "isilah form termasuk mengisi perekomendasi",
      alignment: "left",
    },
    {
      stepNumber: "05",
      title: "Rekomendasi",
      description: "perekomendasi mengisi formulir sesuai link yang telah diberikan",
      alignment: "right",
    },
    {
      stepNumber: "06",
      title: "Ujian Tulis",
      description: "mengikuti ujian tulis sesuai jadwal dan tata cara yang ditetapkan",
      alignment: "left",
    },
    {
      stepNumber: "07",
      title: "Wawancara",
      description: "obeservasi dan wawancara",
      alignment: "right",
    },
    {
      stepNumber: "08",
      title: "Pengumuman",
      description: "pengumuman kelulusan",
      alignment: "left",
    },
    {
      stepNumber: "09",
      title: "Daftar ulang",
      description: "membayar sesuai dengan UKT yang ditetapkan melalui VA yang diinformasikan kemudian",
      alignment: "right",
    },
  ];

  return (
    <div className="relative py-8">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white leading-tight text-center mb-12">
        Tahapan SMB MAGISTER 2025
      </h2>
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/50 dark:bg-primary/70 rounded-full hidden md:block"></div>
      <div className="space-y-12">
        {steps.map((step, index) => (
          <div key={index} className="relative flex items-center justify-center w-full">
            {/* Dot for desktop */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full z-10 hidden md:block"></div>
            {/* Mobile line and dot */}
            <div className="absolute left-4 h-full w-1 bg-primary/50 dark:bg-primary/70 rounded-full md:hidden"></div>
            <div className="absolute left-2.5 w-4 h-4 bg-primary rounded-full z-10 md:hidden"></div>

            <TimelineStep
              stepNumber={step.stepNumber}
              title={step.title}
              description={step.description}
              alignment={step.alignment as 'left' | 'right'}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RegistrationTimeline;