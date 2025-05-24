
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
<<<<<<< HEAD
import { ArrowLeft, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import NotFound from './NotFound';
import { articles as defaultArticles } from '@/data/articles';
import { SEO } from '@/components/SEO';
=======
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Calendar, Edit } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { articles as defaultArticles, Article } from '@/data/articles';
import { useAdmin } from '@/contexts/AdminContext';
>>>>>>> b46c3ded9c946945a1d3d9d77d379a78404bcf7d

const ArticleDetail = () => {
  const { articleId } = useParams();
  const [article, setArticle] = useState<Article | null>(null);
  const [articles, setArticles] = useState(defaultArticles);
  const { isAdmin } = useAdmin();

  // Load articles from localStorage if available
  useEffect(() => {
    const savedArticles = localStorage.getItem('ah_articles');
    if (savedArticles) {
      setArticles(JSON.parse(savedArticles));
    }
  }, []);

  // Find the article by ID once articles are loaded
  useEffect(() => {
    const foundArticle = articles.find(a => a.id.toString() === articleId);
    if (foundArticle) {
      setArticle(foundArticle);
    }
  }, [articleId, articles]);

  if (!article) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Artikel tidak ditemukan</h1>
          <Link to="/">
            <Button variant="outline">Kembali ke Beranda</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
<<<<<<< HEAD
    <>
      <SEO
        title={`${article.title} - AH Houseware`}
        description={article.excerpt}
      />
=======
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      <Helmet>
        <title>{article.title} - AH Houseware</title>
        <meta name="description" content={article.excerpt} />
      </Helmet>
>>>>>>> b46c3ded9c946945a1d3d9d77d379a78404bcf7d
      
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
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Link to="/#artikel">
            <Button variant="outline" className="mb-6 flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" /> Kembali ke Daftar Artikel
            </Button>
          </Link>
          
          {/* Article content */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <img src={article.image} alt={article.title} className="w-full h-64 object-cover" />
            
            <div className="p-8">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center text-gray-500 text-sm">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{article.date}</span>
                </div>
                {isAdmin && (
                  <Link to={`/artikel/edit/${article.id}`}>
                    <Button size="sm" className="flex items-center gap-1 bg-green-600 hover:bg-green-700">
                      <Edit className="h-4 w-4" /> Edit
                    </Button>
                  </Link>
                )}
              </div>
              
              <h1 className="text-3xl font-bold text-gray-800 mb-4">{article.title}</h1>
              <p className="text-gray-600 mb-6 italic">{article.excerpt}</p>
              
              <div className="prose max-w-none">
                {article.content?.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-4">{paragraph}</p>
                ))}
              </div>
              
              <div className="mt-8 text-sm text-gray-600">
                Ditulis oleh: {article.author}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;
