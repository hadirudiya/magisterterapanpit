import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from 'lucide-react';

const careerProspects = [
  "Head Of Marketing and Inovation",
  "Director of Marketing and Innovation",
  "Head of Brand Marketing",
  "Managing Director of Small and Mediun Enterprises",
];

const bannerImages = [
  "/polimedia-tower-aerial.jpeg",
  "/polimedia-path.jpeg",
  "/polimedia-front-gate-2.jpeg",
  "/polimedia-front-gate-3.jpeg",
];

const TYPING_SPEED = 100; // ms per character
const DELETING_SPEED = 50; // ms per character
const PAUSE_BETWEEN_PHRASES = 1500; // ms
const IMAGE_CHANGE_INTERVAL = 5000; // ms (5 seconds)

const HeroSection = () => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Typing animation effect
  useEffect(() => {
    const handleTyping = () => {
      const fullText = careerProspects[currentPhraseIndex];

      if (isDeleting) {
        if (charIndex > 0) {
          setCurrentText(fullText.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % careerProspects.length);
        }
      } else {
        if (charIndex < fullText.length) {
          setCurrentText(fullText.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), PAUSE_BETWEEN_PHRASES);
        }
      }
    };

    const typingTimer = setTimeout(
      handleTyping,
      isDeleting ? DELETING_SPEED : TYPING_SPEED
    );

    return () => clearTimeout(typingTimer);
  }, [currentText, isDeleting, charIndex, currentPhraseIndex]);

  // Image carousel effect
  useEffect(() => {
    const imageTimer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % bannerImages.length);
    }, IMAGE_CHANGE_INTERVAL);

    return () => clearInterval(imageTimer);
  }, []);

  const handlePrevImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + bannerImages.length) % bannerImages.length);
  }, []);

  const handleNextImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % bannerImages.length);
  }, []);

  return (
    <div 
      className="relative h-[600px] md:h-[700px] lg:h-[800px] bg-cover bg-center transition-all duration-1000 ease-in-out" 
      style={{ backgroundImage: `url(${bannerImages[currentImageIndex]})` }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/60 to-black/40"></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary mb-2 font-amarillo tracking-wide">
          Ayo segera daftar
        </p>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
          Wujudkan Impian Bersama Magister Terapan Pemasaran Inovasi dan Teknologi
        </h2>
        <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-6">
          Dengan berbagai fasilitas yang akan membantu mewujudkan cita-cita anda
        </p>
        <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-8 h-10 sm:h-12 lg:h-14 overflow-hidden">
          {currentText}
        </p>
        <div className="flex justify-center space-x-4">
          <Link to="/register">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-3 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
              Daftar Sekarang
            </Button>
          </Link>
          <Link to="/curriculum">
            <Button size="lg" variant="outline" className="text-primary border-primary text-lg px-8 py-3 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-primary/10">
              Kurikulum
            </Button>
          </Link>
        </div>
      </div>

      {/* Carousel Navigation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-4 z-10">
        <Button variant="ghost" size="icon" className="text-white hover:bg-white/20" onClick={handlePrevImage}>
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <div className="flex space-x-2">
          {bannerImages.map((_, index) => (
            <span
              key={index}
              className={`h-2 w-2 rounded-full ${
                index === currentImageIndex ? 'bg-white' : 'bg-gray-400'
              }`}
            ></span>
          ))}
        </div>
        <Button variant="ghost" size="icon" className="text-white hover:bg-white/20" onClick={handleNextImage}>
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;