import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

interface Product {
  id: number;
  name: string;
  price: string;
  originalPrice: string;
  image: string;
  description: string;
  rating: number;
  sold: number;
}

interface ProductCatalogProps {
  handleWhatsAppClick: () => void;
}

const ProductCatalog = ({ handleWhatsAppClick }: ProductCatalogProps) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Load products from localStorage
    const savedProducts = localStorage.getItem('ah_products');
    if (savedProducts) {
      setProducts(JSON.parse(savedProducts));
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              handleWhatsAppClick={handleWhatsAppClick} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCatalog;
