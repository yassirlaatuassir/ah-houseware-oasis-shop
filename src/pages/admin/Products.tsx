import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useToast } from "@/components/ui/use-toast";
import { Eye, Pencil, Trash, Save } from 'lucide-react';
import AdminNav from '@/components/admin/AdminNav';
import { Product } from '@/data/products';

// Using Product interface from products.ts

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const isAdmin = localStorage.getItem('isAdmin');
    if (!isAdmin) {
      navigate('/admin/login');
      return;
    }

    // Load products from localStorage
    const savedProducts = localStorage.getItem('ah_products');
    if (savedProducts) {
      setProducts(JSON.parse(savedProducts));
    }
  }, [navigate]);

  const handleNewProduct = () => {
    navigate('/admin/products/new');
  };

  const handleEdit = (id: number) => {
    navigate(`/admin/products/edit/${id}`);
  };

  const handleDelete = (id: number) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      const updatedProducts = products.filter(product => product.id !== id);
      setProducts(updatedProducts);
      localStorage.setItem('ah_products', JSON.stringify(updatedProducts));
      
      toast({
        title: "Product Deleted",
        description: "The product has been successfully deleted.",
      });
    }
  };

  const formatPrice = (price: string) => {
    return price.startsWith('Rp') ? price : `Rp ${price}`;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminNav />
      <div className="container mx-auto py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Manage Products</h1>
          <div className="flex gap-2">
            <Button onClick={handleNewProduct}>Add New Product</Button>
            <Button variant="outline" onClick={() => navigate('/admin/export')}>
              <Save className="w-4 h-4 mr-2" />
              Export Data
            </Button>
          </div>
        </div>
        <div className="mb-6 p-4 bg-amber-50 border border-amber-200 rounded-md">
          <h2 className="font-semibold text-amber-800 mb-2">Important Note</h2>
          <p className="text-amber-700">
            Changes made here are only saved to your browser's localStorage. To make these changes
            appear in the deployed version or for other users, use the "Export Data" button to save
            your changes to the source code and then commit them to GitHub.
          </p>
        </div>
        <Card className="w-full">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Product Management</CardTitle>
              <p className="text-sm text-muted-foreground mt-1">
                Manage your product catalog here. Only admin can create, edit, and delete products.
              </p>
            </div>
            <Button onClick={handleNewProduct} className="bg-blue-600 hover:bg-blue-700">
              Add New Product
            </Button>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
              <TableRow>
                <TableHead>Image</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Original Price</TableHead>
                <TableHead>Sold</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                    No products yet. Click 'Add New Product' to add one.
                  </TableCell>
                </TableRow>
              ) : (
                products.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell>
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-16 h-16 object-cover rounded"
                      />
                    </TableCell>
                    <TableCell className="font-medium">{product.name}</TableCell>
                    <TableCell>{formatPrice(product.price)}</TableCell>
                    <TableCell>{formatPrice(product.originalPrice)}</TableCell>
                    <TableCell>{product.sold}</TableCell>
                    <TableCell>
                      <div className="flex justify-end gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleEdit(product.id)}
                          title="Edit Product"
                        >
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleDelete(product.id)}
                          className="text-red-500 hover:text-red-700"
                          title="Delete Product"
                        >
                          <Trash className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      </div>
    </div>
  );
}
