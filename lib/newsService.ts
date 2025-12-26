import { NewsArticle, NewsCategory, Comment } from '@/types/news';
import { mockNews, mockComments } from './mockData';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const newsService = {
  async getAllNews(): Promise<NewsArticle[]> {
    await delay(300);
    return mockNews;
  },

  async getNewsByCategory(category: NewsCategory): Promise<NewsArticle[]> {
    await delay(300);
    if (category === 'All News') {
      return mockNews;
    }
    return mockNews.filter(news => news.category === category);
  },

  async getNewsById(id: string): Promise<NewsArticle | null> {
    await delay(300);
    return mockNews.find(news => news.id === id) || null;
  },

  async getFeaturedNews(): Promise<NewsArticle[]> {
    await delay(300);
    return mockNews.filter(news => news.featured);
  },

  async getTrendingNews(): Promise<NewsArticle[]> {
    await delay(300);
    return mockNews.filter(news => news.trending).slice(0, 5);
  },

  async searchNews(query: string): Promise<NewsArticle[]> {
    await delay(300);
    const lowercaseQuery = query.toLowerCase();
    return mockNews.filter(
      news =>
        news.title.toLowerCase().includes(lowercaseQuery) ||
        news.description.toLowerCase().includes(lowercaseQuery) ||
        news.category.toLowerCase().includes(lowercaseQuery)
    );
  },

  async getComments(newsId: string): Promise<Comment[]> {
    await delay(300);
    return mockComments[newsId] || [];
  },

  async addComment(newsId: string, comment: Omit<Comment, 'id' | 'date'>): Promise<Comment> {
    await delay(300);
    const newComment: Comment = {
      ...comment,
      id: `c${Date.now()}`,
      date: new Date().toISOString().split('T')[0]
    };

    if (!mockComments[newsId]) {
      mockComments[newsId] = [];
    }
    mockComments[newsId].unshift(newComment);

    return newComment;
  }
};
