"use client";

import Link from "next/link";
import { useState } from "react";
import { Search, Menu, X, Sparkles, User, Bell } from "lucide-react";
import { NewsCategory } from "@/types/news";

const categories: { name: NewsCategory }[] = [
  { name: "All News" },
  { name: "Politics" },
  { name: "Business" },
  { name: "Technology" },
  { name: "Sports" },
  { name: "Entertainment" },
  { name: "Health" },
];

interface NavbarProps {
  onSearch?: (query: string) => void;
  onCategoryChange?: (category: NewsCategory) => void;
  activeCategory?: NewsCategory;
}

export default function Navbar({
  onSearch,
  onCategoryChange,
  activeCategory = "All News",
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch && searchQuery.trim()) {
      onSearch(searchQuery);
    }
  };

  return (
    // "fixed" aur "bg-slate-950/90" se background hamesha rahega
    <nav className="sticky top-0 w-full z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/60 py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* 1. Logo Section */}
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-gradient-to-tr from-blue-600 to-cyan-500 p-2 rounded-xl group-hover:shadow-[0_0_15px_rgba(37,99,235,0.4)] transition-all">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                News<span className="text-blue-500">AI</span>
              </span>
            </Link>

            {/* 2. Desktop Navigation Categories */}
            <div className="hidden lg:flex items-center gap-1">
              {categories.slice(0, 5).map((cat) => (
                <button
                  key={cat.name}
                  onClick={() => onCategoryChange?.(cat.name)}
                  className={`px-4 py-2 rounded-full text-[13px] font-medium transition-all duration-200
 text-slate-400 hover:text-white hover:bg-white/5
                  `}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          {/* 3. Search & User Actions */}
          <div className="flex items-center gap-4">
            {/* Expanded Search Bar */}
            <form
              onSubmit={handleSearch}
              className="hidden md:flex items-center bg-slate-900/80 border border-slate-800 rounded-full px-4 py-2 focus-within:border-blue-500/50 transition-all"
            >
              <Search className="w-4 h-4 text-slate-500" />
              <input
                type="text"
                placeholder="Search news..."
                className="bg-transparent border-none focus:outline-none text-sm ml-2 w-48 lg:w-64 text-slate-200 placeholder:text-slate-600"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </form>

           

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-300 hover:bg-slate-800 rounded-lg"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* 4. Mobile Menu Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-slate-950 border-b border-slate-800 animate-in slide-in-from-top duration-300 shadow-2xl">
          <div className="px-4 py-6 space-y-1">
            {categories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => {
                  onCategoryChange?.(cat.name);
                  setMobileMenuOpen(false);
                }}
                className={`flex items-center justify-between w-full px-4 py-3 rounded-xl text-left font-medium ${
                  activeCategory === cat.name
                    ? "bg-blue-600/10 text-blue-400"
                    : "text-slate-300 hover:bg-slate-900"
                }`}
              >
                {cat.name}
                {activeCategory === cat.name && (
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_#3b82f6]" />
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
