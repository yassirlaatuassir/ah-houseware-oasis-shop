
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
