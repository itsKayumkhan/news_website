import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, User } from 'lucide-react';
import { NewsArticle } from '@/types/news';
import { format } from 'date-fns';

interface NewsCardProps {
  article: NewsArticle;
}

const categoryColors: Record<string, string> = {
  Politics: 'bg-red-500/10 text-red-400 border-red-500/20',
  Business: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  Technology: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  Sports: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
  Entertainment: 'bg-pink-500/10 text-pink-400 border-pink-500/20',
  Health: 'bg-green-500/10 text-green-400 border-green-500/20'
};

export default function NewsCard({ article }: NewsCardProps) {
  const categoryColor = categoryColors[article.category] || categoryColors.Technology;

  return (
    <article className="bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700/50 hover:border-slate-600 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 group">
      <Link href={`/news/${article.id}`} className="block">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
          <span className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-medium border ${categoryColor}`}>
            {article.category}
          </span>
        </div>

        <div className="p-5">
          <h3 className="text-white font-semibold text-lg mb-2 line-clamp-2 group-hover:text-blue-400 transition-colors">
            {article.title}
          </h3>

          <p className="text-slate-400 text-sm mb-4 line-clamp-2">
            {article.description}
          </p>

          <div className="flex items-center gap-4 text-xs text-slate-500">
            <div className="flex items-center gap-1.5">
              <User className="w-3.5 h-3.5" />
              <span>{article.author.name}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              <span>{format(new Date(article.date), 'MMM dd, yyyy')}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              <span>{article.readTime} min read</span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
