
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Article } from '@/data/articles';

interface ArticleCardProps {
  article: Article;
}

const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <Card key={article.id} className="group hover:shadow-lg transition-all duration-300">
      <div className="relative overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardContent className="p-6">
        <div className="text-sm text-blue-600 mb-2">{article.date} • {article.author}</div>
        <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
          {article.title}
        </h3>
        <p className="text-gray-600 mb-4">{article.excerpt}</p>
        <Link to={`/artikel/${article.id}`}>
          <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50">
            Baca Selengkapnya
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default ArticleCard;
