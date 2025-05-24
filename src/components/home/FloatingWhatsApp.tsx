
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FloatingWhatsAppProps {
  whatsappVisible: boolean;
  setWhatsappVisible: (visible: boolean) => void;
  handleWhatsAppClick: () => void;
}

const FloatingWhatsApp = ({ 
  whatsappVisible, 
  setWhatsappVisible, 
  handleWhatsAppClick 
}: FloatingWhatsAppProps) => {
  if (!whatsappVisible) return null;
  
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative">
        {/* Notification bubble */}
        <div className="absolute -top-12 -left-32 bg-white p-3 rounded-lg shadow-lg border max-w-xs animate-bounce">
          <p className="text-sm text-gray-700">
            👋 Ada yang bisa kami bantu? Tanya kebutuhan peralatan dapur Anda!
          </p>
          <div className="absolute bottom-0 right-8 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white"></div>
        </div>
        
        <Button
          onClick={handleWhatsAppClick}
          className="bg-blue-500 hover:bg-blue-600 text-white rounded-full w-16 h-16 shadow-lg animate-pulse"
          size="lg"
        >
          <MessageCircle className="w-8 h-8" />
        </Button>
        
        <button
          onClick={() => setWhatsappVisible(false)}
          className="absolute -top-2 -right-2 bg-gray-500 hover:bg-gray-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default FloatingWhatsApp;
