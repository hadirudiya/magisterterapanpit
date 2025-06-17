import React, { useState, useEffect, createContext, useContext } from 'react';
import { Session } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';
import { useNavigate, useLocation } from 'react-router-dom';

interface SessionContextType {
  session: Session | null;
  loading: boolean;
}

const SessionContext = createContext<SessionContextType | undefined>(undefined);

export const SessionContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    console.log("SessionContextProvider: Mengatur listener onAuthStateChange.");
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, currentSession) => {
      console.log("SessionContextProvider: Perubahan status otentikasi terdeteksi.", { event, currentSession });
      setSession(currentSession);
      setLoading(false);

      if (event === 'SIGNED_IN' || event === 'USER_UPDATED') {
        if (location.pathname === '/login') {
          console.log("SessionContextProvider: Pengguna masuk, mengarahkan dari /login ke /.");
          navigate('/'); // Redirect to home if user logs in from login page
        }
      } else if (event === 'SIGNED_OUT') {
        console.log("SessionContextProvider: Pengguna keluar.");
        // Only redirect to login if the user was previously signed in and is now signing out
        // and they are not already on the login page.
        if (location.pathname !== '/login') {
          console.log("SessionContextProvider: Mengarahkan ke /login.");
          navigate('/login');
        }
      }
    });

    // Initial session check
    supabase.auth.getSession().then(({ data: { session: initialSession } }) => {
      console.log("SessionContextProvider: Sesi awal diperiksa.", initialSession);
      setSession(initialSession);
      setLoading(false);
      // No initial redirect if no session, allowing users to browse
    });

    return () => {
      console.log("SessionContextProvider: Membersihkan listener onAuthStateChange.");
      subscription.unsubscribe();
    };
  }, [navigate, location.pathname]);

  if (loading) {
    // You can render a loading spinner here
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600 dark:text-gray-400">Memuat sesi...</p>
      </div>
    );
  }

  return (
    <SessionContext.Provider value={{ session, loading }}>
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