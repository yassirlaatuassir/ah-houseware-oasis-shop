import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Phone, Mail, MapPin, Facebook, Instagram, Twitter, Pencil, Trash } from 'lucide-react';
import { Button } from '@/components/ui/button';
import NotFound from './NotFound';
import { articles as defaultArticles } from '@/data/articles';
import { Helmet } from 'react-helmet-async';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';

const ArticleDetail = () => {
  const { articleId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [articles, setArticles] = useState(defaultArticles);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  
  const article = articles.find(a => a.id.toString() === articleId);
  
  // Load articles from localStorage if available
  useEffect(() => {
    const savedArticles = localStorage.getItem('ah_articles');
    if (savedArticles) {
      setArticles(JSON.parse(savedArticles));
    }
  }, []);
  
  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, []);
  
  const handleEdit = () => {
    navigate(`/artikel/edit/${articleId}`);
  };

  const handleDelete = () => {
    setDeleteDialogOpen(true);
  };

  const confirmDelete = () => {
    const updatedArticles = articles.filter(a => a.id.toString() !== articleId);
    localStorage.setItem('ah_articles', JSON.stringify(updatedArticles));
    setDeleteDialogOpen(false);
    toast({
      title: "Artikel dihapus",
      description: "Artikel telah berhasil dihapus.",
    });
    navigate('/');
  };
  
  if (!article) {
    return <NotFound />;
  }

  return (
    <>
      <Helmet>
        <title>{article.title} - AH Houseware</title>
        <meta name="description" content={article.excerpt} />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.excerpt} />
        <meta property="og:image" content={article.image} />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={article.date} />
        <meta property="article:author" content={article.author} />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
        {/* Header retained from Index page */}
        <header className="bg-white shadow-lg sticky top-0 z-40">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Link to="/" className="flex items-center space-x-2">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xl">AH</span>
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold text-gray-800">AH Houseware</h1>
                    <p className="text-sm text-green-600">Peralatan Rumah Tangga Berkualitas</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <Button 
                variant="outline" 
                onClick={() => window.history.back()} 
                className="flex items-center"
              >
                <ArrowLeft className="mr-2 h-4 w-4" /> Kembali
              </Button>
              
              <div className="flex gap-2">
                <Button 
                  onClick={handleEdit}
                  className="bg-blue-600 hover:bg-blue-700 flex items-center gap-2"
                >
                  <Pencil className="h-4 w-4" /> Edit
                </Button>
                <Button 
                  onClick={handleDelete}
                  variant="destructive"
                  className="flex items-center gap-2"
                >
                  <Trash className="h-4 w-4" /> Hapus
                </Button>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <img 
                src={article.image} 
                alt={article.title}
                className="w-full h-[400px] object-cover"
              />
              
              <div className="p-8">
                <div className="text-sm text-green-600 mb-3">
                  {article.date} • {article.author}
                </div>
                <h1 className="text-3xl font-bold text-gray-800 mb-6">
                  {article.title}
                </h1>
                
                <div className="prose max-w-none text-gray-600">
                  {article.content ? (
                    <div dangerouslySetInnerHTML={{ __html: article.content.replace(/\n/g, '<br />') }} />
                  ) : (
                    <>
                      <p className="mb-4">
                        {article.excerpt}
                      </p>
                      <p className="mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, 
                        nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl. Sed euismod, nisl vel ultricies lacinia, 
                        nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl.
                      </p>
                      <h2 className="text-2xl font-semibold my-4">Bagaimana Memilih Produk Berkualitas</h2>
                      <p className="mb-4">
                        Memilih peralatan rumah tangga berkualitas bisa jadi tantangan tersendiri. Beberapa hal yang perlu diperhatikan adalah:
                      </p>
                      <ul className="list-disc pl-6 mb-4">
                        <li>Kualitas bahan yang digunakan</li>
                        <li>Reputasi merek di pasaran</li>
                        <li>Fitur dan spesifikasi produk</li>
                        <li>Garansi yang diberikan</li>
                        <li>Ulasan dari pengguna lain</li>
                      </ul>
                      <p>
                        Dengan memperhatikan poin-poin di atas, Anda dapat memastikan bahwa investasi Anda pada peralatan rumah tangga akan sepadan dan memberikan kepuasan jangka panjang.
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer would be included here, keeping it same with the main page */}
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
      </div>
      
      {/* Delete confirmation dialog */}
      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Hapus Artikel</DialogTitle>
            <DialogDescription>
              Apakah Anda yakin ingin menghapus artikel ini? Tindakan ini tidak bisa dibatalkan.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDeleteDialogOpen(false)}>
              Batal
            </Button>
            <Button variant="destructive" onClick={confirmDelete}>
              Hapus
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ArticleDetail;
