import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { supabase } from '@/integrations/supabase/client';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        // User is signed in, redirect to home page
        navigate('/');
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-violet-50 to-violet-100 dark:from-gray-900 dark:to-gray-800 p-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-6">Masuk atau Daftar</h2>
        <Auth
          supabaseClient={supabase}
          providers={[]} // Anda bisa menambahkan 'google', 'github', dll. di sini jika diperlukan
          appearance={{
            theme: ThemeSupa,
            variables: {
              default: {
                colors: {
                  brand: 'hsl(var(--primary))', // Menggunakan warna primary dari Tailwind
                  brandAccent: 'hsl(var(--primary-foreground))', // Menggunakan warna primary-foreground
                },
              },
            },
          }}
          theme="light" // Atau "dark" jika Anda ingin tema gelap secara default
          redirectTo={window.location.origin + '/'} // Redirect ke halaman utama setelah login
        />
      </div>
    </div>
  );
};

export default Login;