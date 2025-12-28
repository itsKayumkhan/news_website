"use client";

import { NewsCategory } from "@/types/news";

interface CategoryTabsProps {
  activeCategory: NewsCategory;
  onCategoryChange: (category: NewsCategory) => void;
}

const categories: NewsCategory[] = [
  "All News",
  "Politics",
  "Business",
  "Technology",
  "Sports",
  "Entertainment",
  "Health",
];

export default function CategoryTabs({
  activeCategory,
  onCategoryChange,
}: CategoryTabsProps) {
  return (
    <div className="w-full border-b border-slate-800/40">
      <div className="flex items-center gap-1 overflow-x-auto flex-nowrap pb-0.5 no-scrollbar scroll-smooth">
        {categories.map((category) => {
          const isActive = activeCategory === category;

          return (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`relative px-4 py-3 text-[12px] md:text-[13px] font-bold uppercase tracking-wider transition-all duration-300 whitespace-nowrap group shrink-0
                ${
                  isActive
                    ? "text-amber-500"
                    : "text-slate-400 hover:text-white hover:bg-white/5 rounded-t-lg"
                }`}
            >
              {category}

              {/* Underline indicator */}
              <span
                className={`absolute bottom-0 left-0 w-full h-[2px] transition-all duration-300 transform origin-left
                  ${
                    isActive
                      ? "bg-amber-500 scale-x-100"
                      : "bg-amber-500 scale-x-0 group-hover:scale-x-50 opacity-50"
                  }`}
              />

              {/* Subtle glow for active tab */}
              {isActive && (
                <span className="absolute inset-0 bg-amber-500/5 blur-sm rounded-t-lg -z-10" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
