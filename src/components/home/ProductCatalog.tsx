import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import ProductDetailDialog from './ProductDetailDialog';
import defaultProducts, { Product } from '@/data/products';

// Using Product interface from products.ts

// No props needed
interface ProductCatalogProps {}

const ProductCatalog = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  useEffect(() => {
    // Load products from localStorage or initialize with defaults
    const savedProducts = localStorage.getItem('ah_products');
    if (savedProducts) {
      setProducts(JSON.parse(savedProducts));
    } else {
      // Use default products from products.ts file
      // Save default products to localStorage
      localStorage.setItem('ah_products', JSON.stringify(defaultProducts));
      setProducts(defaultProducts);
    }
  }, []);
  return (
    <section id="katalog" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Katalog Produk Unggulan</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Koleksi lengkap peralatan rumah tangga pilihan dengan kualitas terbaik dan harga bersaing
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product}
              onCardClick={() => {
                setSelectedProduct(product);
                setIsDetailOpen(true);
              }}
            />
          ))}
        </div>
      </div>
      <ProductDetailDialog 
        isOpen={isDetailOpen} 
        product={selectedProduct} 
        onClose={() => setIsDetailOpen(false)}

      />
    </section>
  );
};

export default ProductCatalog;
