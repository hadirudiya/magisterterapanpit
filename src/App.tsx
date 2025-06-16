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
import Header from "./components/Header";
import Footer from "./components/Footer"; // Import the new Footer component

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen"> {/* Add flex column to push footer to bottom */}
          <Header />
          <main className="flex-grow"> {/* Make main content grow */}
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/curriculum" element={<CurriculumPage />} />
              <Route path="/register" element={<RegistrationPage />} />
              <Route path="/register/form" element={<RegistrationFormPage />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer /> {/* Render the Footer component here */}
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;