'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Send, Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800/60 mt-20 relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/5 blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-gradient-to-tr from-amber-500 to-orange-600 p-2 rounded-xl group-hover:shadow-[0_0_15px_rgba(245,158,11,0.3)] transition-all">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-black tracking-tighter text-white uppercase">
                News<span className="text-amber-500">AI</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Your trusted source for AI-powered breaking news, in-depth analysis, and stories that matter.
              Stay ahead of the curve with our comprehensive 24/7 coverage.
            </p>
            <div className="flex items-center gap-3">
              {[
                { Icon: Facebook, color: 'hover:bg-[#1877F2]' },
                { Icon: Twitter, color: 'hover:bg-[#1DA1F2]' },
                { Icon: Instagram, color: 'hover:bg-[#E4405F]' },
                { Icon: Linkedin, color: 'hover:bg-[#0A66C2]' }
              ].map((social, i) => (
                <a
                  key={i}
                  href="#"
                  className={`w-10 h-10 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:text-white text-slate-400 ${social.color}`}
                >
                  <social.Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
              Quick Links
            </h3>
            <ul className="space-y-4">
              {['About Us', 'Contact', 'Privacy Policy', 'Terms of Service', 'Advertise'].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-slate-400 hover:text-amber-500 transition-colors text-sm font-medium flex items-center gap-2 group">
                    <div className="w-0 h-[1px] bg-amber-500 group-hover:w-3 transition-all" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
              Contact Info
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-4 text-slate-400 text-sm group">
                <div className="p-2 bg-slate-900 border border-slate-800 rounded-lg group-hover:border-amber-500/50 transition-colors">
                  <MapPin className="w-4 h-4 text-amber-500" />
                </div>
                <span className="leading-relaxed">123 News Street, Media City,<br />NY 10001, USA</span>
              </li>
              <li className="flex items-center gap-4 text-slate-400 text-sm group">
                <div className="p-2 bg-slate-900 border border-slate-800 rounded-lg group-hover:border-amber-500/50 transition-colors">
                  <Phone className="w-4 h-4 text-amber-500" />
                </div>
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-4 text-slate-400 text-sm group">
                <div className="p-2 bg-slate-900 border border-slate-800 rounded-lg group-hover:border-amber-500/50 transition-colors">
                  <Mail className="w-4 h-4 text-amber-500" />
                </div>
                <span>contact@newsai.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="relative">
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
              Newsletter
            </h3>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              Get the latest updates delivered straight to your inbox every morning.
            </p>
            <form className="space-y-3">
              <div className="relative group">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full bg-slate-900 border border-slate-800 text-white placeholder-slate-600 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500/50 focus:ring-4 focus:ring-amber-500/5 transition-all"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-xl transition-all text-sm font-bold flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 active:scale-95"
              >
                <Send className="w-4 h-4" />
                Subscribe Now
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800/60 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm font-medium">
            &copy; {new Date().getFullYear()} <span className="text-slate-300">NewsAI</span>. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-slate-500 text-xs font-bold uppercase tracking-widest">
            <Link href="#" className="hover:text-amber-500 transition-colors">Status</Link>
            <Link href="#" className="hover:text-amber-500 transition-colors">Sitemap</Link>
            <Link href="#" className="hover:text-amber-500 transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
