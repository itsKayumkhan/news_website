"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Sparkles, Menu, X } from "lucide-react"; // Menu aur X icons add kiye
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

  const router = useRouter();
  const pathname = usePathname();

  const handleCategoryClick = (cat: NewsCategory) => {
    if (onCategoryChange && pathname === "/") {
      onCategoryChange(cat);
    } else {
      router.push(`/?category=${encodeURIComponent(cat)}`);
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 w-full z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/60 py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-gradient-to-tr from-amber-500 to-orange-600 p-2 rounded-xl group-hover:shadow-[0_0_15px_rgba(245,158,11,0.4)] transition-all">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                News<span className="text-amber-500">AI</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {categories.slice(0, 6).map((cat) => (
                <button
                  key={cat.name}
                  onClick={() => handleCategoryClick(cat.name)}
                  className={`px-4 py-2 rounded-full text-[13px] font-medium transition-all duration-200
                    ${activeCategory === cat.name ? 'text-amber-500 bg-amber-500/10' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          {/* --- MOBILE MENU BUTTON ADDED HERE --- */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-xl text-slate-400 hover:text-amber-500 hover:bg-amber-500/10 transition-all focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Existing logic is fine) */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-slate-950 border-b border-slate-800 animate-in slide-in-from-top duration-300 shadow-2xl">
          <div className="px-4 py-6 space-y-1">
            {categories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => handleCategoryClick(cat.name)}
                className={`flex items-center justify-between w-full px-4 py-3 rounded-xl text-left font-medium ${
                  activeCategory === cat.name ? "bg-amber-600/10 text-amber-400" : "text-slate-300 hover:bg-slate-900"
                }`}
              >
                {cat.name}
                {activeCategory === cat.name && <div className="w-1.5 h-1.5 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.8)]" />}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
