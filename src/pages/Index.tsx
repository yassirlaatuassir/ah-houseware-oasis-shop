
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


const Index = () => {
  const [activeSection, setActiveSection] = useState('beranda');
  const [articles, setArticles] = useState(defaultArticles);

  useEffect(() => {
    // Load articles from localStorage if available
    const savedArticles = localStorage.getItem('ah_articles');
    if (savedArticles) {
      setArticles(JSON.parse(savedArticles));
    }
  }, []);

  

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
        />
        
        <HeroSection 
          scrollToSection={scrollToSection} 
        />
        
        <AboutSection />
        
        <ProductCatalog handleWhatsAppClick={handleWhatsAppClick} />
        
        <ArticlesSection articles={articles} />
        
        <TestimonialsSection testimonials={testimonials} />
        
        <ResellerForm />
        
        <Footer />
        

      </div>
    </>
  );
};

export default Index;
