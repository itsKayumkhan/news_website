'use client';

import { NewsCategory } from '@/types/news';

const categories: NewsCategory[] = [
  'All News',
  'Politics',
  'Business',
  'Technology',
  'Sports',
  'Entertainment',
  'Health'
];

interface CategoryTabsProps {
  activeCategory: NewsCategory;
  onCategoryChange: (category: NewsCategory) => void;
}

export default function CategoryTabs({ activeCategory, onCategoryChange }: CategoryTabsProps) {
  return (
    <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-6 py-2.5 rounded-lg font-medium text-sm whitespace-nowrap transition-all ${
            activeCategory === category
              ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
              : 'bg-slate-800/50 text-slate-400 hover:bg-slate-700/50 hover:text-white'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
