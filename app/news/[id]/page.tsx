import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, User, Tag, ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NewsDetailClient from '@/components/NewsDetailClient';
import NewsCard from '@/components/NewsCard';
import SocialShare from '@/components/SocialShare'; // Import the new component
import { newsService } from '@/lib/newsService';
import { format } from 'date-fns';

const categoryColors: Record<string, string> = {
  Politics: 'bg-red-600 text-white shadow-lg shadow-red-900/20',
  Business: 'bg-emerald-600 text-white shadow-lg shadow-emerald-900/20',
  Technology: 'bg-blue-600 text-white shadow-lg shadow-blue-900/20',
  Sports: 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-900/20',
  Entertainment: 'bg-pink-600 text-white shadow-lg shadow-pink-900/20',
  Health: 'bg-green-600 text-white shadow-lg shadow-green-900/20'
};

export default async function NewsDetailPage({ params }: { params: { id: string } }) {
  const article = await newsService.getNewsById(params.id);

  if (!article) {
    notFound();
  }

  const comments = await newsService.getComments(params.id);
  const allNews = await newsService.getAllNews();
  const relatedNews = allNews
    .filter((n) => n.id !== article.id && n.category === article.category)
    .slice(0, 3);

  const categoryColor = categoryColors[article.category] || categoryColors.Technology;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 relative">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-amber-500 transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium text-sm">Back to Home</span>
        </Link>

        <article>
          <div className="mb-6">
            <span className={`inline-block px-4 py-1.5 rounded-lg text-xs font-black uppercase tracking-widest ${categoryColor}`}>
              {article.category}
            </span>
          </div>

          <h1 className="text-white font-black text-3xl md:text-5xl lg:text-6xl mb-8 leading-[1.1] tracking-tight">
            {article.title}
          </h1>

          {/* Fixed Meta Bar */}
          <div className="flex flex-wrap items-center gap-6 text-slate-400 mb-10 pb-8 border-b border-slate-800/60">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 bg-gradient-to-tr from-amber-500 to-orange-600 rounded-full flex items-center justify-center p-[2px]">
                <div className="w-full h-full bg-slate-900 rounded-full flex items-center justify-center overflow-hidden border-2 border-slate-950">
                  <User className="w-5 h-5 text-amber-500" />
                </div>
              </div>
              <div>
                <span className="text-white font-bold block leading-none mb-1">{article.author.name}</span>
                <span className="text-[10px] uppercase tracking-tighter text-slate-500 font-bold">Verified Author</span>
              </div>
            </div>

            <div className="h-8 w-[1px] bg-slate-800 hidden md:block" />

            <div className="flex items-center gap-2 text-sm">
              <Calendar className="w-4 h-4 text-amber-500/70" />
              <span>{format(new Date(article.date), 'MMMM dd, yyyy')}</span>
            </div>

            <div className="flex items-center gap-2 text-sm">
              <Clock className="w-4 h-4 text-amber-500/70" />
              <span>{article.readTime} min read</span>
            </div>

            {/* Social Share Component (Client Side) */}
            <SocialShare title={article.title} />
          </div>

          {/* Hero Image */}
          <div className="relative h-[400px] md:h-[550px] rounded-[2rem] overflow-hidden mb-12 shadow-2xl ring-1 ring-slate-800">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none mb-12">
            {article.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-slate-300 leading-[1.8] mb-8 text-lg md:text-xl">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Tags */}
          {article.tags.length > 0 && (
            <div className="flex items-center gap-3 flex-wrap mb-16 py-8 border-y border-slate-800/60">
              <div className="flex items-center gap-2 mr-2">
                <Tag className="w-5 h-5 text-amber-500" />
                <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">Tags:</span>
              </div>
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-slate-900 border border-slate-800 text-slate-300 rounded-xl text-xs font-bold hover:border-amber-500 hover:text-amber-500 transition-all cursor-pointer shadow-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </article>

        <NewsDetailClient newsId={params.id} initialComments={comments} />

        {/* Related News */}
        {relatedNews.length > 0 && (
          <section className="mt-20">
            <div className="flex items-center gap-3 mb-8">
               <div className="h-8 w-1.5 bg-amber-500 rounded-full" />
               <h2 className="text-white font-black text-2xl uppercase tracking-tight">Related Stories</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedNews.map((news) => (
                <NewsCard key={news.id} article={news} />
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
