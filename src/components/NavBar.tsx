import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

export default function NavBar() {
  const isAdmin = localStorage.getItem('isAdmin') === 'true';

  const handleLogout = () => {
    localStorage.removeItem('isAdmin');
    window.location.href = '/';
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-end h-16 items-center">
          <div className="flex items-center space-x-4">
            {/* Navigation links hidden - only accessible via direct URLs */}
            {isAdmin && (
              <>
                <Link to="/admin/articles" className="text-gray-700 hover:text-gray-900">
                  Manage Articles
                </Link>
                <Link to="/admin/products" className="text-gray-700 hover:text-gray-900">
                  Manage Products
                </Link>
                <Button
                  variant="outline"
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
