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
import Header from "./components/Header"; // Import the new Header component

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Header /> {/* Render the Header component here */}
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/curriculum" element={<CurriculumPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/register/form" element={<RegistrationFormPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;