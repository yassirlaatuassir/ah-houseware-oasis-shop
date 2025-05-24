
import { Star } from 'lucide-react';
import { MessageCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    price: string;
    originalPrice: string;
    image: string;
    rating: number;
    sold: number;
  };
  handleWhatsAppClick: () => void;
}

const ProductCard = ({ product, handleWhatsAppClick }: ProductCardProps) => {
  return (
    <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative overflow-hidden rounded-t-lg h-[240px]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded text-sm font-bold">
          PROMO
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
        <div className="flex items-center space-x-2 mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                }`}
              />
            ))}
            <span className="text-sm text-gray-600 ml-1">({product.rating})</span>
          </div>
          <span className="text-sm text-gray-500">• {product.sold} terjual</span>
        </div>
        <div className="flex items-center space-x-3 mb-4">
          <span className="text-2xl font-bold text-blue-600">{product.price}</span>
          <span className="text-lg text-gray-400 line-through">{product.originalPrice}</span>
        </div>
        <Button
          onClick={handleWhatsAppClick}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white"
        >
          <MessageCircle className="w-4 h-4 mr-2" />
          Pesan Sekarang
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
