import Link from 'next/link';
import Image from 'next/image';
import { TrendingUp, Calendar } from 'lucide-react';
import { NewsArticle } from '@/types/news';
import { format } from 'date-fns';

interface TrendingNewsProps {
  articles: NewsArticle[];
}

export default function TrendingNews({ articles }: TrendingNewsProps) {
  return (
    <div className="bg-slate-800/50 rounded-2xl border border-slate-700/50 p-6">
      <div className="flex items-center gap-2 mb-6">
        <TrendingUp className="w-5 h-5 text-blue-400" />
        <h2 className="text-white font-bold text-xl">Trending Now</h2>
      </div>

      <div className="space-y-4">
        {articles.map((article, index) => (
          <Link
            key={article.id}
            href={`/news/${article.id}`}
            className="block group"
          >
            <article className="flex gap-4 p-3 rounded-lg hover:bg-slate-700/30 transition-colors">
              <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-blue-400 font-bold text-lg">#{index + 1}</span>
                  <span className="text-slate-500 text-xs">{article.category}</span>
                </div>
                <h3 className="text-white text-sm font-medium mb-1 line-clamp-2 group-hover:text-blue-400 transition-colors">
                  {article.title}
                </h3>
                <div className="flex items-center gap-1.5 text-xs text-slate-500">
                  <Calendar className="w-3 h-3" />
                  <span>{format(new Date(article.date), 'MMM dd')}</span>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}
