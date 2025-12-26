'use client';

import { useState, useEffect, useRef } from 'react'; // 1. useRef import kiya
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FeaturedNews from '@/components/FeaturedNews';
import TrendingNews from '@/components/TrendingNews';
import CategoryTabs from '@/components/CategoryTabs';
import SearchBar from '@/components/SearchBar';
import NewsCard from '@/components/NewsCard';
import { NewsArticle, NewsCategory } from '@/types/news';
import { newsService } from '@/lib/newsService';
import { Loader2 } from 'lucide-react';

export default function Home() {
  const [featuredNews, setFeaturedNews] = useState<NewsArticle[]>([]);
  const [trendingNews, setTrendingNews] = useState<NewsArticle[]>([]);
  const [displayNews, setDisplayNews] = useState<NewsArticle[]>([]);
  const [activeCategory, setActiveCategory] = useState<NewsCategory>('All News');
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  // 2. Ref create kiya News Section ke liye
  const newsSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    loadNews();
  }, []);

  const loadNews = async () => {
    setLoading(true);
    try {
      const [featured, trending, all] = await Promise.all([
        newsService.getFeaturedNews(),
        newsService.getTrendingNews(),
        newsService.getAllNews()
      ]);

      setFeaturedNews(featured);
      setTrendingNews(trending);
      setDisplayNews(all);
    } catch (error) {
      console.error('Error loading news:', error);
    } finally {
      setLoading(false);
    }
  };

  // 3. Category change function with Scroll
  const handleCategoryChange = async (category: NewsCategory) => {
    setActiveCategory(category);
    setSearchQuery('');

    // Scroll to News Section smoothly
    if (newsSectionRef.current) {
      const offset = 100; // Navbar ki height ke hisab se adjustment
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = newsSectionRef.current.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }

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

    // Search karne par bhi scroll kar sakte hain
    newsSectionRef.current?.scrollIntoView({ behavior: 'smooth' });

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
    <div className="min-h-screen bg-slate-950  "> {/* pt-20 added for fixed navbar */}
      <Navbar
        onSearch={handleSearch}
        onCategoryChange={handleCategoryChange}
        activeCategory={activeCategory} // Active state pass kiya
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {loading && featuredNews.length === 0 ? (
          <div className="flex items-center justify-center h-96">
            <Loader2 className="w-8 h-8 text-blue-500 animate-spin" />
          </div>
        ) : (
          <>
            {/* Hero Section (Featured & Trending) */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              <div className="lg:col-span-2">
                {featuredNews[0] && <FeaturedNews article={featuredNews[0]} />}
              </div>
              <div>
                <TrendingNews articles={trendingNews} />
              </div>
            </div>

            {/* 4. Is DIV par Ref lagaya hai - Scroll yahan aayega */}
            <div ref={newsSectionRef} className="scroll-mt-24">
              <div className="mb-8">
                <SearchBar onSearch={handleSearch} onClear={handleClearSearch} />
              </div>

              <div className="mb-8">
                <CategoryTabs
                  activeCategory={activeCategory}
                  onCategoryChange={handleCategoryChange}
                />
              </div>

              {searchQuery && (
                <div className="mb-6">
                  <p className="text-slate-400">
                    Search results for:{' '}
                    <span className="text-white font-semibold">&quot;{searchQuery}&quot;</span>
                    {' '}({displayNews.length} {displayNews.length === 1 ? 'result' : 'results'})
                  </p>
                </div>
              )}

              {loading ? (
                <div className="flex items-center justify-center h-64">
                  <Loader2 className="w-8 h-8 text-blue-500 animate-spin" />
                </div>
              ) : displayNews.length === 0 ? (
                <div className="text-center py-16">
                  <p className="text-slate-400 text-lg">No news found.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
