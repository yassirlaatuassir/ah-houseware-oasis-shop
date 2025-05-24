
import { useState } from 'react';
import { ShoppingCart, Star, Users, Award, Phone, Mail, MapPin, Facebook, Instagram, Twitter, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const Index = () => {
  const [activeSection, setActiveSection] = useState('beranda');
  const [whatsappVisible, setWhatsappVisible] = useState(true);

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

  const articles = [
    {
      id: 1,
      title: 'Tips Memilih Panci yang Tepat untuk Dapur Anda',
      excerpt: 'Panduan lengkap memilih panci berkualitas untuk berbagai jenis masakan...',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=300&fit=crop',
      date: '15 Januari 2024',
      author: 'Tim AH Houseware'
    },
    {
      id: 2,
      title: 'Cara Merawat Peralatan Dapur Stainless Steel',
      excerpt: 'Kiat-kiat praktis menjaga peralatan dapur tetap awet dan berkilau...',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600&h=300&fit=crop',
      date: '12 Januari 2024',
      author: 'Tim AH Houseware'
    },
    {
      id: 3,
      title: '10 Peralatan Wajib untuk Dapur Minimalis',
      excerpt: 'Daftar peralatan essential yang harus ada di dapur rumah modern...',
      image: 'https://images.unsplash.com/photo-1556909925-f509c5e51637?w=600&h=300&fit=crop',
      date: '8 Januari 2024',
      author: 'Tim AH Houseware'
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

  const handleResellerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Pendaftaran reseller berhasil dikirim! Tim kami akan menghubungi Anda segera.');
  };

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">AH</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">AH Houseware</h1>
                <p className="text-sm text-green-600">Peralatan Rumah Tangga Berkualitas</p>
              </div>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              {[
                { id: 'beranda', label: 'Beranda' },
                { id: 'tentang', label: 'Tentang Kami' },
                { id: 'katalog', label: 'Katalog Produk' },
                { id: 'artikel', label: 'Artikel' },
                { id: 'testimoni', label: 'Testimoni' },
                { id: 'reseller', label: 'Daftar Reseller' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`font-medium transition-colors hover:text-green-600 ${
                    activeSection === item.id ? 'text-green-600' : 'text-gray-700'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                size="sm"
                onClick={handleWhatsAppClick}
                className="hidden sm:flex items-center space-x-2 border-green-600 text-green-600 hover:bg-green-50"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="beranda" className="py-20 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
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
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 text-lg"
            >
              <ShoppingCart className="w-5 h-5 mr-2" />
              Lihat Katalog
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={handleWhatsAppClick}
              className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 text-lg"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Hubungi Kami
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="tentang" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">Tentang AH Houseware</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <h3 className="text-2xl font-semibold text-green-600 mb-4">Komitmen Kami</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  AH Houseware hadir sejak 2015 dengan misi menyediakan peralatan rumah tangga berkualitas tinggi 
                  dengan harga yang terjangkau. Kami memahami pentingnya peralatan dapur yang baik untuk menciptakan 
                  masakan lezat dan momen berharga bersama keluarga.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Dengan pengalaman lebih dari 8 tahun, kami telah melayani ribuan pelanggan di seluruh Indonesia 
                  dan membangun jaringan reseller yang kuat di berbagai kota.
                </p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold text-green-600">8+</div>
                    <div className="text-sm text-gray-600">Tahun Pengalaman</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-600">5000+</div>
                    <div className="text-sm text-gray-600">Pelanggan Puas</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-600">50+</div>
                    <div className="text-sm text-gray-600">Kota Jangkauan</div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <img
                  src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop"
                  alt="Peralatan Dapur Berkualitas"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Katalog Produk */}
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
              <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
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
                    <span className="text-2xl font-bold text-green-600">{product.price}</span>
                    <span className="text-lg text-gray-400 line-through">{product.originalPrice}</span>
                  </div>
                  <Button
                    onClick={handleWhatsAppClick}
                    className="w-full bg-green-600 hover:bg-green-700 text-white"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Pesan Sekarang
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Artikel */}
      <section id="artikel" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Artikel & Tips</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Temukan tips, trik, dan panduan berguna seputar peralatan dapur dan rumah tangga
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Card key={article.id} className="group hover:shadow-lg transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="text-sm text-green-600 mb-2">{article.date} • {article.author}</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-green-600 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <Button variant="outline" className="w-full border-green-600 text-green-600 hover:bg-green-50">
                    Baca Selengkapnya
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimoni */}
      <section id="testimoni" className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Testimoni Pelanggan</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kepuasan pelanggan adalah prioritas utama kami
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="bg-white shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic">"{testimonial.comment}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Form Reseller */}
      <section id="reseller" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Daftar Reseller</h2>
              <p className="text-xl text-gray-600">
                Bergabunglah dengan jaringan reseller kami dan dapatkan keuntungan menarik!
              </p>
            </div>

            <Card className="shadow-lg">
              <CardHeader className="bg-green-600 text-white text-center">
                <CardTitle className="text-2xl">Form Pendaftaran Reseller</CardTitle>
                <p className="text-green-100">Keuntungan hingga 30% untuk setiap penjualan</p>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleResellerSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nama Lengkap *
                      </label>
                      <Input
                        type="text"
                        required
                        className="w-full"
                        placeholder="Masukkan nama lengkap"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nomor WhatsApp *
                      </label>
                      <Input
                        type="tel"
                        required
                        className="w-full"
                        placeholder="08xxxxxxxxxx"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <Input
                      type="email"
                      required
                      className="w-full"
                      placeholder="email@example.com"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Kota/Kabupaten *
                      </label>
                      <Input
                        type="text"
                        required
                        className="w-full"
                        placeholder="Masukkan kota"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Provinsi *
                      </label>
                      <Input
                        type="text"
                        required
                        className="w-full"
                        placeholder="Masukkan provinsi"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Pengalaman Bisnis
                    </label>
                    <Textarea
                      className="w-full"
                      rows={4}
                      placeholder="Ceritakan pengalaman bisnis atau penjualan Anda (opsional)"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Motivasi Bergabung *
                    </label>
                    <Textarea
                      required
                      className="w-full"
                      rows={4}
                      placeholder="Mengapa Anda ingin menjadi reseller AH Houseware?"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg"
                  >
                    Daftar Sekarang
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">AH</span>
                </div>
                <span className="text-xl font-bold">AH Houseware</span>
              </div>
              <p className="text-gray-300 mb-4">
                Peralatan rumah tangga berkualitas premium dengan harga terjangkau untuk rumah impian Anda.
              </p>
              <div className="flex space-x-4">
                <Facebook className="w-6 h-6 text-blue-400 hover:text-blue-300 cursor-pointer" />
                <Instagram className="w-6 h-6 text-pink-400 hover:text-pink-300 cursor-pointer" />
                <Twitter className="w-6 h-6 text-blue-400 hover:text-blue-300 cursor-pointer" />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Kategori Produk</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-green-400">Peralatan Masak</a></li>
                <li><a href="#" className="hover:text-green-400">Elektronik Dapur</a></li>
                <li><a href="#" className="hover:text-green-400">Peralatan Makan</a></li>
                <li><a href="#" className="hover:text-green-400">Storage & Organizer</a></li>
                <li><a href="#" className="hover:text-green-400">Cleaning Tools</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Informasi</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#tentang" className="hover:text-green-400">Tentang Kami</a></li>
                <li><a href="#" className="hover:text-green-400">Kebijakan Privasi</a></li>
                <li><a href="#" className="hover:text-green-400">Syarat & Ketentuan</a></li>
                <li><a href="#" className="hover:text-green-400">Panduan Belanja</a></li>
                <li><a href="#reseller" className="hover:text-green-400">Program Reseller</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Hubungi Kami</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-green-400" />
                  <span>+62 812-3456-7890</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-green-400" />
                  <span>info@ahhouseware.com</span>
                </li>
                <li className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-green-400" />
                  <span>Jl. Raya Dapur No. 123, Jakarta Selatan</span>
                </li>
              </ul>
              
              <div className="mt-6">
                <h4 className="font-semibold mb-2">Jam Operasional</h4>
                <p className="text-sm text-gray-300">Senin - Sabtu: 08:00 - 17:00</p>
                <p className="text-sm text-gray-300">Minggu: 09:00 - 15:00</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 AH Houseware. All rights reserved. | Designed with ❤️ for Indonesian Families
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      {whatsappVisible && (
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
              className="bg-green-500 hover:bg-green-600 text-white rounded-full w-16 h-16 shadow-lg animate-pulse"
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
      )}
    </div>
  );
};

export default Index;
