import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSession } from '@/components/SessionContextProvider';

const ProtectedRoute: React.FC = () => {
  const { session, loading } = useSession();

  if (loading) {
    // Render a loading indicator while session is being checked
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600 dark:text-gray-400">Memeriksa otentikasi...</p>
      </div>
    );
  }

  if (!session) {
    // If no session, redirect to the login page
    return <Navigate to="/login" replace />;
  }

  // If session exists, render the child routes
  return <Outlet />;
};

export default ProtectedRoute;