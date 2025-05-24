import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

interface Article {
  id: number;
  title: string;
  content: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  slug?: string;
}

export default function ArticleEditor() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const isEditMode = id !== undefined && id !== 'new';

  const [article, setArticle] = useState<Article>({
    id: isEditMode ? 0 : Date.now(),
    title: '',
    content: '',
    excerpt: '',
    image: '',
    date: new Date().toISOString().split('T')[0],
    author: 'Admin'
  });

  useEffect(() => {
    const isAdmin = localStorage.getItem('isAdmin');
    if (!isAdmin) {
      navigate('/admin/login');
      return;
    }

    if (isEditMode) {
      // Load existing article from localStorage
      const savedArticles = localStorage.getItem('ah_articles');
      if (savedArticles) {
        const articles = JSON.parse(savedArticles);
        const existingArticle = articles.find((a: Article) => a.id.toString() === id);
        if (existingArticle) {
          setArticle(existingArticle);
        } else {
          navigate('/admin/articles');
        }
      }
    }
  }, [id, isEditMode, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Get existing articles
      const savedArticles = localStorage.getItem('ah_articles');
      let articles = savedArticles ? JSON.parse(savedArticles) : [];

    if (isEditMode) {
      // Update existing article
      articles = articles.map((a: Article) => 
        a.id.toString() === id ? { ...article } : a
      );
      toast({
        title: "Article Updated",
        description: "The article has been successfully updated.",
      });
    } else {
      // Add new article
      const newArticle = {
        ...article,
        id: Date.now(),
        date: new Date().toISOString().split('T')[0],
        slug: article.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')
      };
      articles.push(newArticle);
      toast({
        title: "Article Created",
        description: "The new article has been successfully created.",
      });
    }

      // Save back to localStorage
      localStorage.setItem('ah_articles', JSON.stringify(articles));
      
      toast({
        title: isEditMode ? "Article Updated" : "Article Created",
        description: isEditMode ? "The article has been successfully updated." : "The new article has been successfully created.",
      });

      navigate('/admin/articles');
    } catch (error) {
      console.error('Error saving article:', error);
      toast({
        title: "Error",
        description: "There was a problem saving the article. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="container mx-auto py-8">
      <Card>
        <CardHeader>
          <CardTitle>{isEditMode ? 'Edit Article' : 'Create New Article'}</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                value={article.title}
                onChange={(e) => setArticle({ ...article, title: e.target.value })}
                placeholder="Enter article title"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="excerpt">Excerpt</Label>
              <Textarea
                id="excerpt"
                value={article.excerpt}
                onChange={(e) => setArticle({ ...article, excerpt: e.target.value })}
                placeholder="Enter a brief excerpt"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="content">Content</Label>
              <Textarea
                id="content"
                value={article.content}
                onChange={(e) => setArticle({ ...article, content: e.target.value })}
                placeholder="Enter article content"
                className="min-h-[200px]"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="image">Image URL</Label>
              <Input
                id="image"
                value={article.image}
                onChange={(e) => setArticle({ ...article, image: e.target.value })}
                placeholder="Enter image URL"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="author">Author</Label>
              <Input
                id="author"
                value={article.author}
                onChange={(e) => setArticle({ ...article, author: e.target.value })}
                placeholder="Enter author name"
                required
              />
            </div>

            <div className="flex justify-end gap-4">
              <Button type="button" variant="outline" onClick={() => navigate('/admin/articles')}>
                Cancel
              </Button>
              <Button type="submit">
                {isEditMode ? 'Update Article' : 'Create Article'}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
