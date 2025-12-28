'use client';

import { useState, useEffect, useRef, Suspense } from 'react';
import { useSearchParams } from 'next/navigation'; // URL params read karne ke liye
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FeaturedNews from '@/components/FeaturedNews';
import TrendingNews from '@/components/TrendingNews';
import CategoryTabs from '@/components/CategoryTabs';
import SearchBar from '@/components/SearchBar';
import NewsCard from '@/components/NewsCard';
import { NewsArticle, NewsCategory } from '@/types/news';
import { newsService } from '@/lib/newsService';
import { Loader2, Zap, Newspaper } from 'lucide-react';

function HomeContent() {
  const [featuredNews, setFeaturedNews] = useState<NewsArticle[]>([]);
  const [trendingNews, setTrendingNews] = useState<NewsArticle[]>([]);
  const [displayNews, setDisplayNews] = useState<NewsArticle[]>([]);
  const [activeCategory, setActiveCategory] = useState<NewsCategory>('All News');
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  const newsSectionRef = useRef<HTMLDivElement>(null);
  const searchParams = useSearchParams();

  // Scroll function jo offset maintain karega
  const scrollToNews = () => {
    if (newsSectionRef.current) {
      const offset = 100;
      const elementPosition = newsSectionRef.current.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const queryCategory = searchParams.get('category');
    const querySearch = searchParams.get('search');

    const initializeNews = async () => {
      setLoading(true);
      try {
        // Initial data fetch
        const [featured, trending] = await Promise.all([
          newsService.getFeaturedNews(),
          newsService.getTrendingNews(),
        ]);
        setFeaturedNews(featured);
        setTrendingNews(trending);

        // Agar URL mein category ya search hai toh filter apply karo
        if (queryCategory) {
          const cat = queryCategory as NewsCategory;
          setActiveCategory(cat);
          const news = await newsService.getNewsByCategory(cat);
          setDisplayNews(news);
          setTimeout(scrollToNews, 500);
        } else if (querySearch) {
          setSearchQuery(querySearch);
          const news = await newsService.searchNews(querySearch);
          setDisplayNews(news);
          setTimeout(scrollToNews, 500);
        } else {
          const all = await newsService.getAllNews();
          setDisplayNews(all);
        }
      } catch (error) {
        console.error('Error loading news:', error);
      } finally {
        setLoading(false);
      }
    };

    initializeNews();
  }, [searchParams]);

  const handleCategoryChange = async (category: NewsCategory) => {
    setActiveCategory(category);
    setSearchQuery('');
    scrollToNews();

    setLoading(true);
    try {
      const news = await newsService.getNewsByCategory(category);
      setDisplayNews(news);
    } catch (error) {
      console.error('Error loading category news:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (query: string) => {
    setSearchQuery(query);
    setActiveCategory('All News');
    scrollToNews();

    setLoading(true);
    try {
      const news = await newsService.searchNews(query);
      setDisplayNews(news);
    } catch (error) {
      console.error('Error searching news:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleClearSearch = async () => {
    setSearchQuery('');
    setActiveCategory('All News');
    setLoading(true);
    try {
      const news = await newsService.getAllNews();
      setDisplayNews(news);
    } catch (error) {
      console.error('Error loading news:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar
        onSearch={handleSearch}
        onCategoryChange={handleCategoryChange}
        activeCategory={activeCategory}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {loading && featuredNews.length === 0 ? (
          <div className="flex items-center justify-center h-96">
            <Loader2 className="w-8 h-8 text-amber-500 animate-spin" />
          </div>
        ) : (
          <>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-500/10 rounded-lg border border-blue-500/20">
                <Newspaper className="w-5 h-5 text-blue-400" />
              </div>
              <h2 className="text-xl font-extrabold text-white tracking-tight uppercase">Top Stories</h2>
              <div className="h-[1px] flex-1 bg-gradient-to-r from-blue-500/40 via-blue-500/10 to-transparent" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              <div className="lg:col-span-2">
                {featuredNews[0] && <FeaturedNews article={featuredNews[0]} />}
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                  <Zap className="w-5 h-5 text-amber-500 fill-amber-500" />
                  <span className="text-lg font-bold text-amber-500 uppercase tracking-tight">Trending</span>
                </div>
                <div className="bg-slate-900/30 rounded-3xl border border-slate-800 p-1">
                  <TrendingNews articles={trendingNews} />
                </div>
              </div>
            </div>

            <div ref={newsSectionRef} className="scroll-mt-24">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
                <div className="w-full md:1/2">
                  <SearchBar onSearch={handleSearch} onClear={handleClearSearch} />
                </div>

                <CategoryTabs
                  activeCategory={activeCategory}
                  onCategoryChange={handleCategoryChange}
                />
              </div>

              {searchQuery && (
                <div className="mb-6 px-4 py-2 bg-amber-500/10 border-l-4 border-amber-500 rounded-r-lg inline-block">
                  <p className="text-slate-300">
                    Results for: <span className="text-white font-bold">&quot;{searchQuery}&quot;</span>
                  </p>
                </div>
              )}

              {loading ? (
                <div className="flex items-center justify-center h-64">
                  <Loader2 className="w-8 h-8 text-amber-500 animate-spin" />
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {displayNews.map((article) => (
                    <NewsCard key={article.id} article={article} />
                  ))}
                </div>
              )}
            </div>
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}

// 4. Wrap with Suspense to prevent build errors with searchParams
export default function Home() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <Loader2 className="w-10 h-10 text-amber-500 animate-spin" />
      </div>
    }>
      <HomeContent />
    </Suspense>
  );
}
