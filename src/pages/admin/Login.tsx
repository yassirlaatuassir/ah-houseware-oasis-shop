import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would validate against a backend
    if (username === 'admin' && password === 'admin123') {
      localStorage.setItem('isAdmin', 'true');
      
      // Initialize default articles and products if they don't exist
      const savedArticles = localStorage.getItem('ah_articles');
      const savedProducts = localStorage.getItem('ah_products');
      
      if (!savedArticles) {
        import('@/data/articles').then(({ articles: defaultArticles }) => {
          localStorage.setItem('ah_articles', JSON.stringify(defaultArticles));
        });
      }
      
      if (!savedProducts) {
        const defaultProducts = [
          {
            id: 1,
            name: 'Set Panci Stainless Steel 5 Pcs',
            price: 'Rp 459.000',
            originalPrice: 'Rp 650.000',
            description: 'Set panci premium dengan bahan stainless steel berkualitas tinggi. Terdiri dari 5 ukuran berbeda untuk berbagai kebutuhan memasak.',
            image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop',
            rating: 4.8,
            sold: 150
          },
          {
            id: 2,
            name: 'Blender Multifungsi 2L',
            price: 'Rp 325.000',
            originalPrice: 'Rp 450.000',
            description: 'Blender serbaguna dengan kapasitas 2L, cocok untuk smoothie, jus, dan menghaluskan bumbu. Dilengkapi dengan 3 kecepatan.',
            image: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=400&h=400&fit=crop',
            rating: 4.7,
            sold: 89
          }
        ];
        localStorage.setItem('ah_products', JSON.stringify(defaultProducts));
      }
      
      navigate('/admin/articles');
    } else {
      alert('Invalid credentials');
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
            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
