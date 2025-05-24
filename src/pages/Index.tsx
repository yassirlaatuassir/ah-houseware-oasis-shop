
import { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { Helmet } from 'react-helmet-async';
import { articles as defaultArticles } from '@/data/articles';

// Import components
import Header from '@/components/layout/Header';
import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import ProductCatalog from '@/components/home/ProductCatalog';
import ArticlesSection from '@/components/home/ArticlesSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import ResellerForm from '@/components/home/ResellerForm';
import Footer from '@/components/layout/Footer';
import FloatingWhatsApp from '@/components/home/FloatingWhatsApp';

const Index = () => {
  const [activeSection, setActiveSection] = useState('beranda');
  const [whatsappVisible, setWhatsappVisible] = useState(true);
  const [articles, setArticles] = useState(defaultArticles);

  useEffect(() => {
    // Load articles from localStorage if available
    const savedArticles = localStorage.getItem('ah_articles');
    if (savedArticles) {
      setArticles(JSON.parse(savedArticles));
    }
  }, []);

  const products = [
    {
      id: 1,
      name: 'Set Panci Stainless Steel 5 Pcs',
      price: 'Rp 459.000',
      originalPrice: 'Rp 650.000',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop',
      rating: 4.8,
      sold: 150
    },
    {
      id: 2,
      name: 'Blender Multifungsi 2L',
      price: 'Rp 325.000',
      originalPrice: 'Rp 450.000',
      image: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=400&h=400&fit=crop',
      rating: 4.7,
      sold: 89
    },
    {
      id: 3,
      name: 'Rice Cooker Digital 1.8L',
      price: 'Rp 285.000',
      originalPrice: 'Rp 380.000',
      image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=400&fit=crop',
      rating: 4.9,
      sold: 203
    },
    {
      id: 4,
      name: 'Set Pisau Dapur Premium 6 Pcs',
      price: 'Rp 189.000',
      originalPrice: 'Rp 250.000',
      image: 'https://images.unsplash.com/photo-1593618998160-e34014e67546?w=400&h=400&fit=crop',
      rating: 4.6,
      sold: 76
    },
    {
      id: 5,
      name: 'Wajan Anti Lengket 28cm',
      price: 'Rp 145.000',
      originalPrice: 'Rp 200.000',
      image: 'https://images.unsplash.com/photo-1506784365847-bbad939e9335?w=400&h=400&fit=crop',
      rating: 4.5,
      sold: 112
    },
    {
      id: 6,
      name: 'Mixer Stand 5L Professional',
      price: 'Rp 1.250.000',
      originalPrice: 'Rp 1.500.000',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop',
      rating: 4.9,
      sold: 34
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Sari Wijaya',
      location: 'Jakarta',
      rating: 5,
      comment: 'Kualitas produk sangat bagus! Panci set yang saya beli sudah 2 tahun masih seperti baru. Pelayanan juga ramah dan cepat.',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b372?w=100&h=100&fit=crop&face'
    },
    {
      id: 2,
      name: 'Budi Santoso',
      location: 'Surabaya',
      rating: 5,
      comment: 'Sebagai chef, saya sangat puas dengan pisau set dari AH Houseware. Tajam dan tahan lama, worth it banget!',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&face'
    },
    {
      id: 3,
      name: 'Maya Putri',
      location: 'Bandung',
      rating: 5,
      comment: 'Rice cooker digitalnya canggih dan mudah digunakan. Nasi selalu matang sempurna. Recommended!',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&face'
    }
  ];

  const handleWhatsAppClick = () => {
    const message = "Halo AH Houseware! Saya tertarik dengan produk peralatan rumah tangga Anda. Bisakah Anda memberikan informasi lebih lanjut?";
    window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(message)}`, '_blank');
  };

  

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Helmet>
        <title>AH Houseware - Peralatan Rumah Tangga Berkualitas Premium</title>
        <meta name="description" content="AH Houseware menyediakan peralatan rumah tangga berkualitas premium dengan harga terjangkau. Katalog lengkap panci, blender, rice cooker, pisau dapur dan peralatan masak lainnya." />
        <link rel="canonical" href="https://ahhouseware.com" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-sky-50">
        <Header 
          activeSection={activeSection} 
          scrollToSection={scrollToSection} 
          handleWhatsAppClick={handleWhatsAppClick}
        />
        
        <HeroSection 
          scrollToSection={scrollToSection} 
          handleWhatsAppClick={handleWhatsAppClick}
        />
        
        <AboutSection />
        
        <ProductCatalog 
          products={products} 
          handleWhatsAppClick={handleWhatsAppClick} 
        />
        
        <ArticlesSection articles={articles} />
        
        <TestimonialsSection testimonials={testimonials} />
        
        <ResellerForm />
        
        <Footer />
        
        <FloatingWhatsApp 
          whatsappVisible={whatsappVisible} 
          setWhatsappVisible={setWhatsappVisible}
          handleWhatsAppClick={handleWhatsAppClick}
        />
      </div>
    </>
  );
};

export default Index;
