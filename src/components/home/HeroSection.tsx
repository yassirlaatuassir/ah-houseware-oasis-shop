
import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  return (
    <section id="beranda" className="py-20 bg-gradient-to-r from-blue-600 to-sky-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-5xl font-bold mb-6">Peralatan Rumah Tangga Berkualitas Premium</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
          Temukan koleksi lengkap peralatan dapur dan rumah tangga terbaik dengan harga terjangkau. 
          Kualitas terjamin, awet, dan stylish untuk rumah impian Anda.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            onClick={() => scrollToSection('katalog')}
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg"
          >
            <ShoppingCart className="w-5 h-5 mr-2" />
            Lihat Katalog
          </Button>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
