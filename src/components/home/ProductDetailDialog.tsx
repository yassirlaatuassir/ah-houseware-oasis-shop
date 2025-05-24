import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MessageCircle, Star } from "lucide-react";

interface ProductDetailDialogProps {
  product: {
    id: number;
    name: string;
    price: string;
    originalPrice: string;
    description: string;
    image: string;
    rating: number;
    sold: number;
  } | null;
  isOpen: boolean;
  onClose: () => void;
  onWhatsAppClick: () => void;
}

export default function ProductDetailDialog({
  product,
  isOpen,
  onClose,
  onWhatsAppClick,
}: ProductDetailDialogProps) {
  if (!product) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{product.name}</DialogTitle>
          <DialogDescription className="flex items-center space-x-2 text-sm">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(product.rating)
                      ? "text-yellow-400 fill-current"
                      : "text-gray-300"
                  }`}
                />
              ))}
              <span className="text-gray-600 ml-1">({product.rating})</span>
            </div>
            <span className="text-gray-500">• {product.sold} terjual</span>
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-100">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-contain p-4"
            />
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Deskripsi Produk</h3>
              <p className="text-gray-600 whitespace-pre-line">{product.description}</p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <span className="text-3xl font-bold text-blue-600">
                  {product.price}
                </span>
                <span className="text-xl text-gray-400 line-through">
                  {product.originalPrice}
                </span>
              </div>
              <div className="inline-block bg-red-100 text-red-600 px-2 py-1 rounded text-sm">
                Hemat {(() => {
                  const originalPrice = parseInt(product.originalPrice.replace(/\D/g, ""));
                  const currentPrice = parseInt(product.price.replace(/\D/g, ""));
                  const savings = originalPrice - currentPrice;
                  return `Rp ${savings.toLocaleString("id-ID")}`;
                })()}
              </div>
            </div>

            <Button
              onClick={onWhatsAppClick}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Pesan Sekarang
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
