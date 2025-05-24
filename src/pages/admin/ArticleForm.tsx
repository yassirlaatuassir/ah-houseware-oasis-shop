import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ArticleForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [metaDescription, setMetaDescription] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const isAdmin = localStorage.getItem('isAdmin');
    if (!isAdmin) {
      navigate('/admin/login');
      return;
    }

    if (id) {
      // In a real app, fetch article from backend
      setTitle('Sample Article');
      setContent('Content here...');
      setMetaDescription('Sample meta description');
    }
  }, [id, navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, save to backend
    console.log({ title, content, metaDescription });
    navigate('/admin/articles');
  };

  return (
    <div className="container mx-auto py-8">
      <Card>
        <CardHeader>
          <CardTitle>{id ? 'Edit Article' : 'New Article'}</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="title" className="text-sm font-medium">Title</label>
              <Input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="content" className="text-sm font-medium">Content</label>
              <Textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
                className="min-h-[200px]"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="metaDescription" className="text-sm font-medium">Meta Description (for SEO)</label>
              <Input
                id="metaDescription"
                value={metaDescription}
                onChange={(e) => setMetaDescription(e.target.value)}
                maxLength={160}
                placeholder="Brief description for search engines (max 160 characters)"
              />
            </div>
            <div className="flex gap-2">
              <Button type="submit">Save</Button>
              <Button type="button" variant="outline" onClick={() => navigate('/admin/articles')}>
                Cancel
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
