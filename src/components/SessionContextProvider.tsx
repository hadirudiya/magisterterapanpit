import React, { useState, useEffect, createContext, useContext } from 'react';
import { Session } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';
import { useNavigate, useLocation } from 'react-router-dom';

interface SessionContextType {
  session: Session | null;
  loading: boolean;
  isAdmin: boolean;
  isReviewer: boolean; // Menambahkan properti isReviewer
}

const SessionContext = createContext<SessionContextType | undefined>(undefined);

export const SessionContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isReviewer, setIsReviewer] = useState(false); // State baru untuk isReviewer
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, currentSession) => {
      setSession(currentSession);
      setLoading(false);
      // Memeriksa peran admin dan reviewer dari user_metadata
      setIsAdmin(currentSession?.user?.user_metadata?.role === 'admin');
      setIsReviewer(currentSession?.user?.user_metadata?.role === 'reviewer');

      if (event === 'SIGNED_IN' || event === 'USER_UPDATED') {
        if (location.pathname === '/login') {
          navigate('/'); // Redirect ke home jika user login dari halaman login
        }
      } else if (event === 'SIGNED_OUT') {
        if (location.pathname !== '/login') {
          navigate('/login');
        }
      }
    });

    // Pemeriksaan sesi awal
    supabase.auth.getSession().then(({ data: { session: initialSession } }) => {
      setSession(initialSession);
      setLoading(false);
      // Memeriksa peran admin dan reviewer saat pemuatan awal
      setIsAdmin(initialSession?.user?.user_metadata?.role === 'admin');
      setIsReviewer(initialSession?.user?.user_metadata?.role === 'reviewer');
    });

    return () => subscription.unsubscribe();
  }, [navigate, location.pathname]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600 dark:text-gray-400">Memuat sesi...</p>
      </div>
    );
  }

  return (
    <SessionContext.Provider value={{ session, loading, isAdmin, isReviewer }}>
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = () => {
  const context = useContext(SessionContext);
  if (context === undefined) {
    throw new Error('useSession must be used within a SessionContextProvider');
  }
  return context;
};