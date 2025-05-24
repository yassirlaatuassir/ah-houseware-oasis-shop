
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { PenLine } from 'lucide-react';
import ArticleCard from './ArticleCard';
import { Article } from '@/data/articles';

interface ArticlesSectionProps {
  articles: Article[];
}

const ArticlesSection = ({ articles }: ArticlesSectionProps) => {
  return (
    <section id="artikel" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Artikel & Tips</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Temukan tips, trik, dan panduan berguna seputar peralatan dapur dan rumah tangga
          </p>
          <div className="mt-6">
            <Link to="/artikel/new">
              <Button className="bg-green-600 hover:bg-green-700 inline-flex items-center gap-2">
                <PenLine className="h-4 w-4" /> Tulis Artikel Baru
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;
