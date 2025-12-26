import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'NewsPortal - Your Trusted Source for Breaking News',
  description: 'Stay informed with comprehensive coverage of politics, business, technology, sports, entertainment, and health news from around the world.',
  openGraph: {
    title: 'NewsPortal - Your Trusted Source for Breaking News',
    description: 'Stay informed with comprehensive coverage of politics, business, technology, sports, entertainment, and health news from around the world.',
    type: 'website',
    images: [
      {
        url: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NewsPortal - Your Trusted Source for Breaking News',
    description: 'Stay informed with comprehensive coverage of politics, business, technology, sports, entertainment, and health news from around the world.',
    images: [
      {
        url: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
