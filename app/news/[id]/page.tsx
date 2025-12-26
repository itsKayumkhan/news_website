import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, User, Tag, Share2, ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NewsDetailClient from '@/components/NewsDetailClient';
import NewsCard from '@/components/NewsCard';
import { newsService } from '@/lib/newsService';
import { format } from 'date-fns';

const categoryColors: Record<string, string> = {
  Politics: 'bg-red-500/10 text-red-400 border-red-500/20',
  Business: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  Technology: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  Sports: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
  Entertainment: 'bg-pink-500/10 text-pink-400 border-pink-500/20',
  Health: 'bg-green-500/10 text-green-400 border-green-500/20'
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
    <div className="min-h-screen bg-slate-950">
      <Navbar />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-6 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home</span>
        </Link>

        <article>
          <div className="mb-6">
            <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-medium border ${categoryColor}`}>
              {article.category}
            </span>
          </div>

          <h1 className="text-white font-bold text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-slate-400 mb-8">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-semibold text-sm">
                  {article.author.avatar || article.author.name.charAt(0)}
                </span>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span className="text-white font-medium">{article.author.name}</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{format(new Date(article.date), 'MMMM dd, yyyy')}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{article.readTime} min read</span>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors ml-auto">
              <Share2 className="w-4 h-4" />
              <span>Share</span>
            </button>
          </div>

          <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden mb-8">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="prose prose-invert prose-lg max-w-none mb-8">
            {article.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-slate-300 leading-relaxed mb-6">
                {paragraph}
              </p>
            ))}
          </div>

          {article.tags.length > 0 && (
            <div className="flex items-center gap-3 flex-wrap mb-12 pb-12 border-b border-slate-800">
              <Tag className="w-5 h-5 text-slate-400" />
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 bg-slate-800/50 text-slate-300 rounded-lg text-sm hover:bg-slate-700/50 transition-colors cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </article>

        <NewsDetailClient newsId={params.id} initialComments={comments} />

        {relatedNews.length > 0 && (
          <section>
            <h2 className="text-white font-bold text-2xl mb-6">Related News</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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

export async function generateStaticParams() {
  const news = await newsService.getAllNews();
  return news.map((article) => ({
    id: article.id
  }));
}
