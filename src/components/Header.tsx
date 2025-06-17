import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from 'lucide-react';

const Header = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const closeSheet = () => setIsSheetOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Left side: Home Link with Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img 
            src="public/logoPolimediaJPEGheader.jpeg" // Mengganti jalur gambar ke logo baru
            alt="" 
            className="h-12 w-auto object-contain" 
          />
        </Link>

        {/* Mobile Navigation (Hamburger Menu) */}
        <div className="md:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[250px] sm:w-[300px] flex flex-col">
              <nav className="flex flex-col gap-4 pt-8">
                <Link to="/about-us" onClick={closeSheet}>
                  <Button variant="ghost" className="w-full justify-start text-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                    Tentang Kami
                  </Button>
                </Link>
                <Link to="/curriculum" onClick={closeSheet}>
                  <Button variant="ghost" className="w-full justify-start text-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                    Kurikulum
                  </Button>
                </Link>
                <Link to="/register" onClick={closeSheet}>
                  <Button variant="ghost" className="w-full justify-start text-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                    Pendaftaran
                  </Button>
                </Link>
                <Link to="/register/form" onClick={closeSheet}>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white text-lg">
                    Daftar Sekarang
                  </Button>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-4">
          <Link to="/about-us">
            <Button variant="ghost" className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
              Tentang Kami
            </Button>
          </Link>
          <Link to="/curriculum">
            <Button variant="ghost" className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
              Kurikulum
            </Button>
          </Link>
          <Link to="/register">
            <Button variant="ghost" className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
              Pendaftaran
            </Button>
          </Link>
          <Link to="/register/form">
            <Button className="bg-primary hover:bg-primary/90 text-white">
              Daftar Sekarang
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;