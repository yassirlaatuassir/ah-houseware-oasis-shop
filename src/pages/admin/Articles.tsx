import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface Article {
  id: number;
  title: string;
  content: string;
  createdAt: string;
}

export default function Articles() {
  const [articles, setArticles] = useState<Article[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const isAdmin = localStorage.getItem('isAdmin');
    if (!isAdmin) {
      navigate('/admin/login');
    }
    // In a real app, fetch articles from backend
    setArticles([
      { id: 1, title: 'Sample Article', content: 'Content here...', createdAt: new Date().toISOString() }
    ]);
  }, [navigate]);

  const handleNewArticle = () => {
    navigate('/admin/articles/new');
  };

  const handleEdit = (id: number) => {
    navigate(`/admin/articles/edit/${id}`);
  };

  const handleDelete = (id: number) => {
    if (window.confirm('Are you sure you want to delete this article?')) {
      // In a real app, delete from backend
      setArticles(articles.filter(article => article.id !== id));
    }
  };

  return (
    <div className="container mx-auto py-8">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Article Management</CardTitle>
          <Button onClick={handleNewArticle}>New Article</Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Created At</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {articles.map((article) => (
                <TableRow key={article.id}>
                  <TableCell>{article.title}</TableCell>
                  <TableCell>{new Date(article.createdAt).toLocaleDateString()}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" onClick={() => handleEdit(article.id)}>
                        Edit
                      </Button>
                      <Button variant="destructive" size="sm" onClick={() => handleDelete(article.id)}>
                        Delete
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
