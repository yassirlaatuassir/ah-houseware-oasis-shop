
import { useState, useEffect } from 'react';
import { MessageCircle, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface HeaderProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
  handleWhatsAppClick: () => void;
}

const Header = ({ activeSection, scrollToSection, handleWhatsAppClick }: HeaderProps) => {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const adminStatus = localStorage.getItem('isAdmin');
    setIsAdmin(!!adminStatus);
  }, []);
  return (
    <header className="bg-white shadow-lg sticky top-0 z-40">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-sky-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">AH</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">AH Houseware</h1>
              <p className="text-sm text-blue-600">Peralatan Rumah Tangga Berkualitas</p>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {[
              { id: 'beranda', label: 'Beranda' },
              { id: 'tentang', label: 'Tentang Kami' },
              { id: 'katalog', label: 'Katalog Produk' },
              { id: 'artikel', label: 'Artikel' },
              { id: 'testimoni', label: 'Testimoni' },
              { id: 'reseller', label: 'Daftar Reseller' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-medium transition-colors hover:text-blue-600 ${
                  activeSection === item.id ? 'text-blue-600' : 'text-gray-700'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={handleWhatsAppClick}
              className="hidden sm:flex items-center space-x-2 border-blue-600 text-blue-600 hover:bg-blue-50"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </Button>
            {isAdmin ? (
              <Link to="/admin/articles">
                <Button variant="ghost" size="sm" className="flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span>Admin</span>
                </Button>
              </Link>
            ) : (
              <Link to="/admin/login">
                <Button variant="ghost" size="sm" className="flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span>Login</span>
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
