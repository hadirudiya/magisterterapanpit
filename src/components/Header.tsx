import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from 'lucide-react';
import { useSession } from '@/components/SessionContextProvider';
import { supabase } from '@/integrations/supabase/client';
import { toast } from "sonner"; // Import toast from sonner

const Header = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const { session } = useSession();

  const closeSheet = () => setIsSheetOpen(false);

  const handleAuthAction = async () => {
    console.log("handleAuthAction called. Current session:", session);
    if (session) {
      console.log("Session exists, attempting to sign out...");
      const { error } = await supabase.auth.signOut();
      if (error) {
        console.error("Error signing out:", error);
        toast.error("Gagal keluar: " + error.message); // Show error toast
      } else {
        console.log("Successfully signed out.");
        toast.success("Berhasil keluar!"); // Show success toast
      }
      closeSheet();
    } else {
      console.log("No session, navigating to login page.");
      closeSheet();
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Left side: Home Link with Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img 
            src="public/logoPolimediaJPEGheader.jpeg"
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
                {/* Conditional Auth Button and User Email for Mobile */}
                {session && session.user ? (
                  <>
                    <span className="text-sm text-gray-600 dark:text-gray-400 px-4 py-2 truncate">
                      {session.user.email}
                    </span>
                    <Button 
                      onClick={handleAuthAction} 
                      className="w-full bg-red-600 hover:bg-red-700 text-white text-lg"
                    >
                      Keluar
                    </Button>
                  </>
                ) : (
                  <Link to="/login" onClick={closeSheet}>
                    <Button className="w-full bg-primary hover:bg-primary/90 text-white text-lg">
                      Masuk / Daftar
                    </Button>
                  </Link>
                )}
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
          {/* Conditional Auth Button and User Email for Desktop */}
          {session && session.user ? (
            <>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {session.user.email}
              </span>
              <Button 
                onClick={handleAuthAction} 
                className="bg-red-600 hover:bg-red-700 text-white"
              >
                Keluar
              </Button>
            </>
          ) : (
            <Link to="/login">
              <Button className="bg-primary hover:bg-primary/90 text-white">
                Masuk / Daftar
              </Button>
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;