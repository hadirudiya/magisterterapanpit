import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Left side: Home Link/Logo */}
        <Link to="/" className="flex items-center space-x-2">
          {/* <img src="/logo.png" alt="Polimedia Logo" className="h-8 w-auto" /> */}
          <span className="text-lg font-bold text-gray-900 dark:text-white hidden sm:block">Polimedia</span>
        </Link>

        {/* Right side: Navigation Links */}
        <nav className="flex items-center space-x-4">
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