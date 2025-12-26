import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';
import { NewsArticle } from '@/types/news';
import { format } from 'date-fns';

interface FeaturedNewsProps {
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

export default function FeaturedNews({ article }: FeaturedNewsProps) {
  const categoryColor = categoryColors[article.category] || categoryColors.Technology;

  return (
    <Link href={`/news/${article.id}`}>
      <article className="relative h-[500px] rounded-2xl overflow-hidden group cursor-pointer">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />

        <div className="absolute inset-0 p-8 flex flex-col justify-end">
          <span className={`w-fit px-4 py-1.5 rounded-full text-sm font-medium border mb-4 ${categoryColor}`}>
            {article.category}
          </span>

          <h1 className="text-white font-bold text-3xl md:text-4xl lg:text-5xl mb-4 leading-tight group-hover:text-blue-400 transition-colors">
            {article.title}
          </h1>

          <p className="text-slate-300 text-lg mb-6 line-clamp-2 max-w-3xl">
            {article.description}
          </p>

          <div className="flex items-center gap-6 text-sm text-slate-400 mb-4">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{article.author.name}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{format(new Date(article.date), 'MMMM dd, yyyy')}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{article.readTime} min read</span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-blue-400 font-medium group-hover:gap-4 transition-all">
            <span>Read Full Story</span>
            <ArrowRight className="w-5 h-5" />
          </div>
        </div>
      </article>
    </Link>
  );
}
