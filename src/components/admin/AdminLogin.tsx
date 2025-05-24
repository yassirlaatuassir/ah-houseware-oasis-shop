
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAdmin } from '@/contexts/AdminContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

const AdminLogin = () => {
  const [password, setPassword] = useState('');
  const { login } = useAdmin();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (login(password)) {
      toast.success('Login berhasil!');
      navigate('/artikel/new');
    } else {
      toast.error('Password salah!');
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-sky-50">
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-md">
        <h1 className="mb-6 text-2xl font-bold text-gray-800">Admin Login</h1>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <Label htmlFor="password">Password Admin</Label>
            <Input 
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Masukkan password admin"
              className="mt-1"
              required
            />
          </div>
          
          <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
