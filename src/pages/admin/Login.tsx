import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { useAdmin } from "@/contexts/AdminContext";

// Simple hash function for demo purposes
const hashPassword = async (password: string) => {
  const encoder = new TextEncoder();
  const data = encoder.encode(password + 'ah-houseware-salt');
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
};

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [loginAttempts, setLoginAttempts] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  const [lockoutEndTime, setLockoutEndTime] = useState<Date | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if account is locked
    const lockedUntil = localStorage.getItem('loginLockoutUntil');
    if (lockedUntil) {
      const lockoutTime = new Date(lockedUntil);
      if (lockoutTime > new Date()) {
        setIsLocked(true);
        setLockoutEndTime(lockoutTime);
      } else {
        localStorage.removeItem('loginLockoutUntil');
        localStorage.removeItem('loginAttempts');
      }
    }

    // Get login attempts
    const attempts = localStorage.getItem('loginAttempts');
    if (attempts) {
      setLoginAttempts(parseInt(attempts));
    }
  }, []);

  const { login } = useAdmin();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isLocked) {
      const timeLeft = lockoutEndTime ? Math.ceil((lockoutEndTime.getTime() - new Date().getTime()) / 1000 / 60) : 0;
      toast.error(`Akun terkunci. Coba lagi dalam ${timeLeft} menit`);
      return;
    }

    setIsLoading(true);

    try {
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      const loginSuccess = login(username, password);

      if (loginSuccess) {
        // Initialize default articles and products if they don't exist
        const savedArticles = localStorage.getItem('ah_articles');
        const savedProducts = localStorage.getItem('ah_products');
        
        if (!savedArticles) {
          import('@/data/articles').then(({ articles: defaultArticles }) => {
            localStorage.setItem('ah_articles', JSON.stringify(defaultArticles));
          });
        }
        
        if (!savedProducts) {
          import('@/data/products').then((module) => {
            const defaultProducts = module.default;
            localStorage.setItem('ah_products', JSON.stringify(defaultProducts));
          });
        }
        
        // Reset login attempts on successful login
        localStorage.removeItem('loginAttempts');
        localStorage.removeItem('loginLockoutUntil');
        setLoginAttempts(0);
        setIsLocked(false);
        
        navigate('/admin/products');
        toast.success('Login berhasil!');
      } else {
        const newAttempts = loginAttempts + 1;
        setLoginAttempts(newAttempts);
        localStorage.setItem('loginAttempts', newAttempts.toString());

        if (newAttempts >= 5) {
          // Lock account for 30 minutes after 5 failed attempts
          const lockoutEnd = new Date(new Date().getTime() + 30 * 60000);
          setIsLocked(true);
          setLockoutEndTime(lockoutEnd);
          localStorage.setItem('loginLockoutUntil', lockoutEnd.toISOString());
          toast.error('Terlalu banyak percobaan gagal. Akun terkunci selama 30 menit.');
        } else {
          toast.error(`Login gagal. ${5 - newAttempts} percobaan tersisa.`);
        }
      }
    } catch (error) {
      toast.error('Terjadi kesalahan. Silakan coba lagi.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Admin Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button 
              type="submit" 
              className="w-full" 
              disabled={isLoading || isLocked}
            >
              {isLoading ? 'Memproses...' : isLocked ? 'Akun Terkunci' : 'Login'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
