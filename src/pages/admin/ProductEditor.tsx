import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

interface Product {
  id: number;
  name: string;
  price: string;
  originalPrice: string;
  description: string;
  image: string;
  rating: number;
  sold: number;
}

export default function ProductEditor() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const isEditMode = id !== 'new';

  const [product, setProduct] = useState<Product>({
    id: 0,
    name: '',
    price: '',
    originalPrice: '',
    description: '',
    image: '',
    rating: 0,
    sold: 0
  });

  useEffect(() => {
    const isAdmin = localStorage.getItem('isAdmin');
    if (!isAdmin) {
      navigate('/admin/login');
      return;
    }

    if (isEditMode) {
      // Load existing product from localStorage
      const savedProducts = localStorage.getItem('ah_products');
      if (savedProducts) {
        const products = JSON.parse(savedProducts);
        const existingProduct = products.find((p: Product) => p.id.toString() === id);
        if (existingProduct) {
          setProduct(existingProduct);
        } else {
          navigate('/admin/products');
        }
      }
    }
  }, [id, isEditMode, navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Format prices to include 'Rp' if not present
    const formattedProduct = {
      ...product,
      price: product.price.startsWith('Rp') ? product.price : `Rp ${product.price}`,
      originalPrice: product.originalPrice.startsWith('Rp') ? product.originalPrice : `Rp ${product.originalPrice}`
    };

    // Get existing products
    const savedProducts = localStorage.getItem('ah_products');
    let products = savedProducts ? JSON.parse(savedProducts) : [];

    if (isEditMode) {
      // Update existing product
      products = products.map((p: Product) => 
        p.id.toString() === id ? formattedProduct : p
      );
      toast({
        title: "Product Updated",
        description: "The product has been successfully updated.",
      });
    } else {
      // Add new product
      const newProduct = {
        ...formattedProduct,
        id: Date.now(),
        rating: 0,
        sold: 0
      };
      products.push(newProduct);
      toast({
        title: "Product Created",
        description: "The new product has been successfully created.",
      });
    }

    // Save back to localStorage
    localStorage.setItem('ah_products', JSON.stringify(products));
    navigate('/admin/products');
  };

  return (
    <div className="container mx-auto py-8">
      <Card>
        <CardHeader>
          <CardTitle>{isEditMode ? 'Edit Product' : 'Add New Product'}</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Product Name</Label>
              <Input
                id="name"
                value={product.name}
                onChange={(e) => setProduct({ ...product, name: e.target.value })}
                placeholder="Enter product name"
                required
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="price">Price</Label>
                <Input
                  id="price"
                  value={product.price}
                  onChange={(e) => setProduct({ ...product, price: e.target.value })}
                  placeholder="Enter price (e.g., 459000 or Rp 459.000)"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="originalPrice">Original Price</Label>
                <Input
                  id="originalPrice"
                  value={product.originalPrice}
                  onChange={(e) => setProduct({ ...product, originalPrice: e.target.value })}
                  placeholder="Enter original price"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={product.description}
                onChange={(e) => setProduct({ ...product, description: e.target.value })}
                placeholder="Enter product description"
                className="min-h-[100px]"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="image">Image URL</Label>
              <Input
                id="image"
                value={product.image}
                onChange={(e) => setProduct({ ...product, image: e.target.value })}
                placeholder="Enter image URL"
                required
              />
              {product.image && (
                <div className="mt-2">
                  <p className="text-sm text-muted-foreground mb-2">Preview:</p>
                  <img
                    src={product.image}
                    alt="Preview"
                    className="w-32 h-32 object-cover rounded border"
                  />
                </div>
              )}
            </div>

            <div className="flex justify-end gap-4">
              <Button type="button" variant="outline" onClick={() => navigate('/admin/products')}>
                Cancel
              </Button>
              <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                {isEditMode ? 'Update Product' : 'Create Product'}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
