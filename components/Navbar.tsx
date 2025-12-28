"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Sparkles, Menu, X, Globe, Moon, User } from "lucide-react";
import { NewsCategory } from "@/types/news";
import { format } from "date-fns";

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
  const [currentDate, setCurrentDate] = useState("");
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    setCurrentDate(format(new Date(), "EEEE, dd MMMM yyyy"));
  }, []);

  const handleCategoryClick = (cat: NewsCategory) => {
    if (onCategoryChange && pathname === "/") {
      onCategoryChange(cat);
    } else {
      router.push(`/?category=${encodeURIComponent(cat)}`);
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 w-full z-50">
      {/* 1. Top Utility Bar (Based on Reference Image Layout) */}
      <div className="bg-slate-900 border-b border-slate-800 py-1.5 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <span className="text-[11px] font-medium text-slate-400">
            {currentDate}
          </span>
          <div className="flex items-center gap-4 text-[11px] font-bold uppercase tracking-wider text-slate-400">
            <Link href="#" className="hover:text-amber-500 transition-colors">Trending</Link>
            <Link href="#" className="hover:text-amber-500 transition-colors">Newsletter</Link>
          </div>
        </div>
      </div>

      {/* 2. Main Navbar */}
      <nav className="w-full bg-slate-950/95 backdrop-blur-md border-b border-slate-800/60 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">

            {/* Logo Section */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center gap-3 group">
                <div className="bg-gradient-to-tr from-amber-500 to-orange-600 p-2.5 rounded-xl group-hover:rotate-12 transition-all">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="text-2xl font-black tracking-tighter text-white">
                    NEWS<span className="text-amber-500">AI</span>
                  </span>
                  <span className="text-[9px] font-bold text-slate-500 tracking-[0.2em] uppercase">
                    Current News India
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop Center Navigation */}
            <div className="hidden lg:flex items-center gap-1   p-1 rounded-full ">
              {categories.slice(0, 5).map((cat) => (
                <button
                  key={cat.name}
                  onClick={() => handleCategoryClick(cat.name)}
                  className={`px-5 py-2 rounded-full text-[12px] font-bold uppercase tracking-wide transition-all
                    ${activeCategory === cat.name
                      ? 'text-slate-950 bg-amber-500'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800'}`}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-3">
              <div className="hidden md:flex items-center gap-4 border-r border-slate-800 pr-4 mr-1">
                <button className="text-slate-400 hover:text-amber-500 transition-colors">
                  <Moon className="w-4 h-4" />
                </button>
                <div className="flex items-center gap-1.5 text-slate-400 hover:text-white cursor-pointer transition-colors font-bold text-xs uppercase">
                  <Globe className="w-4 h-4" />
                  <span>HI</span>
                </div>
              </div>

              {/* Action Button */}
              <button className="hidden sm:flex items-center gap-2 px-5 py-2.5 border border-amber-500/50 text-amber-500 rounded-lg text-xs font-bold hover:bg-amber-500 hover:text-slate-950 transition-all active:scale-95">
                <User className="w-4 h-4" />
                <span>Admin Login</span>
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-xl text-slate-400 hover:text-amber-500 hover:bg-amber-500/10 transition-all"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-slate-950 border-b border-slate-800 animate-in slide-in-from-top duration-300 shadow-2xl">
            <div className="px-4 py-6 space-y-2">
              {categories.map((cat) => (
                <button
                  key={cat.name}
                  onClick={() => handleCategoryClick(cat.name)}
                  className={`flex items-center justify-between w-full px-5 py-4 rounded-xl text-left font-bold text-sm uppercase tracking-wider ${
                    activeCategory === cat.name ? "bg-amber-500 text-slate-950" : "text-slate-300 hover:bg-slate-900"
                  }`}
                >
                  {cat.name}
                  {activeCategory === cat.name && <div className="w-2 h-2 rounded-full bg-slate-950 shadow-lg" />}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
