
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { articles as defaultArticles, Article } from '@/data/articles';
import { Form, FormField, FormItem, FormLabel, FormControl } from '@/components/ui/form';
import { useForm } from 'react-hook-form';

const ArticleEditor = () => {
  const { articleId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const isEditMode = articleId !== 'new';

  const [existingArticles, setExistingArticles] = useState(defaultArticles);

  // Get the article if in edit mode
  const currentArticle = isEditMode
    ? existingArticles.find(a => a.id.toString() === articleId) || null
    : null;

  // Initialize form with current article values or empty values
  const form = useForm({
    defaultValues: {
      title: currentArticle?.title || '',
      excerpt: currentArticle?.excerpt || '',
      image: currentArticle?.image || '',
      author: currentArticle?.author || 'Tim AH Houseware',
      content: currentArticle?.content || '',
      slug: currentArticle?.slug || ''
    }
  });

  // Handle form submission
  const onSubmit = (data: any) => {
    try {
      let updatedArticles = [...existingArticles];
      const today = new Date();
      const formattedDate = `${today.getDate()} ${today.toLocaleString('id-ID', { month: 'long' })} ${today.getFullYear()}`;

      if (isEditMode && currentArticle) {
        // Update existing article
        updatedArticles = updatedArticles.map(article => 
          article.id.toString() === articleId 
            ? { ...article, ...data, date: currentArticle.date } 
            : article
        );
        toast({
          title: "Artikel berhasil diupdate",
          description: "Artikel telah berhasil diperbarui.",
        });
      } else {
        // Create new article
        const newId = Math.max(...updatedArticles.map(a => a.id)) + 1;
        const slug = data.slug || data.title.toLowerCase().replace(/\s+/g, '-');
        
        updatedArticles.push({
          id: newId,
          title: data.title,
          excerpt: data.excerpt,
          image: data.image,
          date: formattedDate,
          author: data.author,
          content: data.content,
          slug
        });
        
        toast({
          title: "Artikel baru berhasil dibuat",
          description: "Artikel baru telah berhasil ditambahkan.",
        });
      }

      // Fungsi ini di dunia nyata akan menyimpan ke database
      // Di sini kita simulasikan saja dengan state
      localStorage.setItem('ah_articles', JSON.stringify(updatedArticles));
      setExistingArticles(updatedArticles);
      
      // Redirect to article detail
      const redirectId = isEditMode ? articleId : updatedArticles[updatedArticles.length - 1].id;
      navigate(`/artikel/${redirectId}`);
    } catch (error) {
      console.error('Error saving article:', error);
      toast({
        title: "Error",
        description: "Terjadi kesalahan saat menyimpan artikel.",
        variant: "destructive"
      });
    }
  };

  // Load articles from localStorage if available
  useEffect(() => {
    const savedArticles = localStorage.getItem('ah_articles');
    if (savedArticles) {
      setExistingArticles(JSON.parse(savedArticles));
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-sky-50">
      <Helmet>
        <title>{isEditMode ? 'Edit Artikel' : 'Buat Artikel Baru'} - AH Houseware</title>
      </Helmet>
      
      {/* Header - reuse from ArticleDetail */}
      <header className="bg-white shadow-lg sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-sky-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">AH</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">AH Houseware</h1>
                <p className="text-sm text-blue-600">Peralatan Rumah Tangga Berkualitas</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <Button 
            variant="outline" 
            onClick={() => window.history.back()} 
            className="mb-6 flex items-center"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Kembali
          </Button>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">
              {isEditMode ? 'Edit Artikel' : 'Buat Artikel Baru'}
            </h1>
            
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="title">Judul Artikel</Label>
                  <Input 
                    id="title"
                    placeholder="Masukkan judul artikel" 
                    {...form.register('title')} 
                    className="w-full mt-1"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="excerpt">Ringkasan</Label>
                  <Textarea 
                    id="excerpt"
                    placeholder="Ringkasan singkat artikel" 
                    {...form.register('excerpt')} 
                    className="w-full mt-1"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="image">URL Gambar</Label>
                  <Input 
                    id="image"
                    placeholder="https://example.com/image.jpg" 
                    {...form.register('image')} 
                    className="w-full mt-1"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="author">Penulis</Label>
                  <Input 
                    id="author"
                    placeholder="Nama penulis" 
                    {...form.register('author')} 
                    className="w-full mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="slug">Slug URL (opsional)</Label>
                  <Input 
                    id="slug"
                    placeholder="judul-artikel-anda" 
                    {...form.register('slug')} 
                    className="w-full mt-1"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Jika dikosongkan, akan dibuat otomatis dari judul
                  </p>
                </div>
                
                <div>
                  <Label htmlFor="content">Konten Artikel</Label>
                  <Textarea 
                    id="content"
                    placeholder="Tulis konten artikel lengkap di sini..." 
                    {...form.register('content')} 
                    className="w-full mt-1 min-h-[300px]"
                    required
                  />
                </div>
              </div>
              
              <div className="flex justify-end space-x-4 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => window.history.back()}
                >
                  Batal
                </Button>
                <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                  {isEditMode ? 'Update Artikel' : 'Publikasikan Artikel'}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleEditor;
