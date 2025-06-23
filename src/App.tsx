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
import Login from "./pages/Login";
import { SessionContextProvider } from "./components/SessionContextProvider";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminProtectedRoute from "./components/AdminProtectedRoute";
import AdminDashboard from "./pages/AdminDashboard";
import ReviewerProtectedRoute from "./components/ReviewerProtectedRoute"; // Import the new ReviewerProtectedRoute
import ReviewerDashboard from "./pages/ReviewerDashboard"; // Import the new ReviewerDashboard

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SessionContextProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/curriculum" element={<CurriculumPage />} />
                <Route path="/register" element={<RegistrationPage />} />
                <Route path="/about-us" element={<AboutUsPage />} />
                <Route path="/login" element={<Login />} />

                {/* Protected Route for Registration Form (requires any login) */}
                <Route element={<ProtectedRoute />}>
                  <Route path="/register/form" element={<RegistrationFormPage />} />
                </Route>

                {/* Protected Route for Admin Dashboard (requires admin role) */}
                <Route element={<AdminProtectedRoute />}>
                  <Route path="/admin/dashboard" element={<AdminDashboard />} />
                </Route>

                {/* Protected Route for Reviewer Dashboard (requires reviewer role) */}
                <Route element={<ReviewerProtectedRoute />}>
                  <Route path="/reviewer/dashboard" element={<ReviewerDashboard />} />
                </Route>

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