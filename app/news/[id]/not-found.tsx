import Link from 'next/link';
import { FileQuestion, Home } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <FileQuestion className="w-20 h-20 text-slate-600 mx-auto mb-6" />
          <h1 className="text-white font-bold text-4xl mb-4">Article Not Found</h1>
          <p className="text-slate-400 text-lg mb-8">
            Sorry, we couldn&apos;t find the news article you&apos;re looking for.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
