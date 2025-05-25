import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useToast } from "@/components/ui/use-toast";
import { Eye, Pencil, Trash, Save } from 'lucide-react';
import AdminNav from '@/components/admin/AdminNav';
import { Article } from '@/data/articles';

// Using Article interface from articles.ts

export default function Articles() {
  const [articles, setArticles] = useState<Article[]>([]);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const isAdmin = localStorage.getItem('isAdmin');
    if (!isAdmin) {
      navigate('/admin/login');
      return;
    }

    // Load articles from localStorage or initialize with defaults
    const savedArticles = localStorage.getItem('ah_articles');
    if (savedArticles) {
      setArticles(JSON.parse(savedArticles));
    } else {
      // Import default articles
      import('@/data/articles').then(({ articles: defaultArticles }) => {
        localStorage.setItem('ah_articles', JSON.stringify(defaultArticles));
        setArticles(defaultArticles);
      });
    }
  }, [navigate]);

  const handleNewArticle = () => {
    navigate('/admin/articles/new');
  };

  const handleEdit = (id: number) => {
    navigate(`/admin/articles/edit/${id}`);
  };

  const handleDelete = (id: number) => {
    if (window.confirm('Are you sure you want to delete this article?')) {
      const updatedArticles = articles.filter(article => article.id !== id);
      setArticles(updatedArticles);
      localStorage.setItem('ah_articles', JSON.stringify(updatedArticles));
      
      toast({
        title: "Article Deleted",
        description: "The article has been successfully deleted.",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminNav />
      <div className="container mx-auto py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Manage Articles</h1>
          <div className="flex gap-2">
            <Button onClick={handleNewArticle}>Add New Article</Button>
            <Button variant="outline" onClick={() => navigate('/admin/export')}>
              <Save className="w-4 h-4 mr-2" />
              Export Data
            </Button>
          </div>
        </div>
        <div className="mb-6 p-4 bg-amber-50 border border-amber-200 rounded-md">
          <h2 className="font-semibold text-amber-800 mb-2">Important Note</h2>
          <p className="text-amber-700">
            Changes made here are only saved to your browser's localStorage. To make these changes
            appear in the deployed version or for other users, use the "Export Data" button to save
            your changes to the source code and then commit them to GitHub.
          </p>
        </div>
        <Card className="w-full">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Article Management</CardTitle>
              <p className="text-sm text-muted-foreground mt-1">
                Manage your articles here. Only admin can create, edit, and delete articles.
              </p>
            </div>
            <Button onClick={handleNewArticle} className="bg-blue-600 hover:bg-blue-700">
              Create New Article
            </Button>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Author</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {articles.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={4} className="text-center py-8 text-muted-foreground">
                    No articles yet. Click 'Create New Article' to add one.
                  </TableCell>
                </TableRow>
              ) : (
                articles.map((article) => (
                  <TableRow key={article.id}>
                    <TableCell className="font-medium">{article.title}</TableCell>
                    <TableCell>{article.author}</TableCell>
                    <TableCell>{article.date}</TableCell>
                    <TableCell>
                      <div className="flex justify-end gap-2">
                        <Link to={`/artikel/${article.id}`} target="_blank">
                          <Button variant="ghost" size="icon" title="View Article">
                            <Eye className="h-4 w-4" />
                          </Button>
                        </Link>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleEdit(article.id)}
                          title="Edit Article"
                        >
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleDelete(article.id)}
                          className="text-red-500 hover:text-red-700"
                          title="Delete Article"
                        >
                          <Trash className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      </div>
    </div>
  );
}
