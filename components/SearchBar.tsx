'use client';

import { useState } from 'react';
import { Search, X } from 'lucide-react';

interface SearchBarProps {
  onSearch: (query: string) => void;
  onClear: () => void;
}

export default function SearchBar({ onSearch, onClear }: SearchBarProps) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
    }
  };

  const handleClear = () => {
    setQuery('');
    onClear();
  };

  return (
    <form onSubmit={handleSubmit} className="relative group w-full">
      <div className="relative overflow-hidden rounded-2xl">
        {/* Search Icon - Changes color when typing */}
        <Search
          className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors duration-300 z-10
            ${query ? 'text-amber-500' : 'text-slate-500'}`}
        />

        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for breaking news..."
          className="w-full bg-slate-900/40 backdrop-blur-md text-white placeholder-slate-600 rounded-2xl pl-12 pr-12 py-4 border border-slate-800 focus:outline-none focus:border-amber-500/50 focus:ring-4 focus:ring-amber-500/5 transition-all duration-300"
        />

        {/* Action Buttons */}
        <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
          {query && (
            <>
              <button
                type="button"
                onClick={handleClear}
                className="p-1.5 text-slate-500 hover:text-amber-500 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="w-[1px] h-4 bg-slate-800" />
              <button
                type="submit"
                className="text-xs font-bold uppercase tracking-widest text-amber-500 hover:text-amber-400 px-2"
              >
                Search
              </button>
            </>
          )}
        </div>
      </div>

      {/* Decorative Gradient Line (Navbar Style) */}
      <div className="absolute -bottom-[1px] left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-transparent via-amber-500 to-transparent group-focus-within:w-3/4 transition-all duration-500 opacity-60" />
    </form>
  );
}
