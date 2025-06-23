import React, { useState, useEffect, createContext, useContext } from 'react';
import { Session } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';
import { useNavigate, useLocation } from 'react-router-dom';

interface SessionContextType {
  session: Session | null;
  loading: boolean;
  isAdmin: boolean; // Menambahkan properti isAdmin
}

const SessionContext = createContext<SessionContextType | undefined>(undefined);

export const SessionContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false); // State baru untuk isAdmin
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, currentSession) => {
      setSession(currentSession);
      setLoading(false);
      // Memeriksa peran admin dari user_metadata
      setIsAdmin(currentSession?.user?.user_metadata?.role === 'admin');

      if (event === 'SIGNED_IN' || event === 'USER_UPDATED') {
        if (location.pathname === '/login') {
          navigate('/'); // Redirect ke home jika user login dari halaman login
        }
      } else if (event === 'SIGNED_OUT') {
        // Hanya redirect ke login jika user sebelumnya login dan sekarang logout
        // dan mereka tidak sedang di halaman login.
        if (location.pathname !== '/login') {
          navigate('/login');
        }
      }
    });

    // Pemeriksaan sesi awal
    supabase.auth.getSession().then(({ data: { session: initialSession } }) => {
      setSession(initialSession);
      setLoading(false);
      // Memeriksa peran admin saat pemuatan awal
      setIsAdmin(initialSession?.user?.user_metadata?.role === 'admin');
    });

    return () => subscription.unsubscribe();
  }, [navigate, location.pathname]);

  if (loading) {
    // Anda bisa menampilkan spinner loading di sini
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600 dark:text-gray-400">Memuat sesi...</p>
      </div>
    );
  }

  return (
    <SessionContext.Provider value={{ session, loading, isAdmin }}>
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