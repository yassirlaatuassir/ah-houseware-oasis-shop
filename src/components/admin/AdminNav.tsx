import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { FileText, Package, Save } from 'lucide-react';

export default function AdminNav() {
  const location = useLocation();

  return (
    <nav className="bg-white border-b mb-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-4 py-4">
          <Link to="/admin/articles">
            <Button 
              variant={location.pathname.includes('/admin/articles') ? 'default' : 'ghost'}
              className="flex items-center gap-2"
            >
              <FileText className="w-4 h-4" />
              Articles
            </Button>
          </Link>
          <Link to="/admin/products">
            <Button 
              variant={location.pathname.includes('/admin/products') ? 'default' : 'ghost'}
              className="flex items-center gap-2"
            >
              <Package className="w-4 h-4" />
              Products
            </Button>
          </Link>
          <Link to="/admin/export">
            <Button 
              variant={location.pathname.includes('/admin/export') ? 'default' : 'ghost'}
              className="flex items-center gap-2"
            >
              <Save className="w-4 h-4" />
              Export Data
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
