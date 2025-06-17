import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CurriculumPage from "./pages/CurriculumPage";
import RegistrationPage from "./pages/RegistrationPage";
import RegistrationFormPage from "./pages/RegistrationFormPage";
import AboutUsPage from "./pages/AboutUsPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./pages/Login"; // Import the new Login page
import { SessionContextProvider } from "./components/SessionContextProvider"; // Import the new SessionContextProvider

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SessionContextProvider> {/* Wrap the entire app with SessionContextProvider */}
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/curriculum" element={<CurriculumPage />} />
                <Route path="/register" element={<RegistrationPage />} />
                <Route path="/register/form" element={<RegistrationFormPage />} />
                <Route path="/about-us" element={<AboutUsPage />} />
                <Route path="/login" element={<Login />} /> {/* Add the new login route */}
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </SessionContextProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;