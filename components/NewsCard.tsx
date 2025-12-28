'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';
import { NewsArticle } from '@/types/news';
import { format } from 'date-fns';

interface NewsCardProps {
  article: NewsArticle;
}

const categoryColors: Record<string, string> = {
    Politics: 'bg-red-600 text-white shadow-lg shadow-red-900/20',
    Business: 'bg-emerald-600 text-white shadow-lg shadow-emerald-900/20',
    Technology: 'bg-blue-600 text-white shadow-lg shadow-blue-900/20',
    Sports: 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-900/20', // Amber background par dark text zyada chamakta hai
    Entertainment: 'bg-pink-600 text-white shadow-lg shadow-pink-900/20',
    Health: 'bg-green-600 text-white shadow-lg shadow-green-900/20'
  };

export default function NewsCard({ article }: NewsCardProps) {
  const categoryColor = categoryColors[article.category] || categoryColors.Technology;

  return (
    <article className="bg-slate-900/40 rounded-2xl overflow-hidden border border-slate-800 hover:border-amber-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/5 group">
      <Link href={`/news/${article.id}`} className="block">
        <div className="relative h-52 overflow-hidden">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
          />
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />

          {/* Category Badge */}
          <span className={`absolute top-4 left-4 px-3 py-1.5 rounded-md text-[11px] font-black uppercase tracking-wider z-10 shadow-md ${categoryColor}`}>
            {article.category}
          </span>
        </div>

        <div className="p-5">
          {/* Title - Hovers to Amber */}
          <h3 className="text-white font-bold text-lg mb-3 line-clamp-2 group-hover:text-amber-500 transition-colors duration-300 leading-snug">
            {article.title}
          </h3>

          <p className="text-slate-400 text-sm mb-5 line-clamp-2 leading-relaxed">
            {article.description}
          </p>

          <div className="flex items-center justify-between pt-4 border-t border-slate-800/60">
            <div className="flex items-center gap-3 text-[11px] text-slate-500">
              <div className="flex items-center gap-1.5 group-hover:text-slate-300 transition-colors">
                <User className="w-3.5 h-3.5 text-amber-500/70" />
                <span>{article.author.name}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-slate-600" />
                <span>{format(new Date(article.date), 'MMM dd')}</span>
              </div>
            </div>

            {/* Hidden arrow that appears on hover */}
            <ArrowRight className="w-4 h-4 text-amber-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
          </div>
        </div>
      </Link>
    </article>
  );
}
