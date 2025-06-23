import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSession } from '@/components/SessionContextProvider';

const ReviewerProtectedRoute: React.FC = () => {
  const { session, loading, isReviewer } = useSession();

  if (loading) {
    // Tampilkan indikator loading saat sesi sedang diperiksa
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600 dark:text-gray-400">Memeriksa otentikasi reviewer...</p>
      </div>
    );
  }

  if (!session || !isReviewer) {
    // Jika tidak ada sesi atau pengguna bukan reviewer, redirect ke halaman login
    return <Navigate to="/login" replace />;
  }

  // Jika sesi ada dan pengguna adalah reviewer, render rute anak
  return <Outlet />;
};

export default ReviewerProtectedRoute;