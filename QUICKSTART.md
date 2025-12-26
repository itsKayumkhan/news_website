# Quick Start Guide

## Overview

NewsPortal is a modern, production-ready news website featuring:
- 10 pre-loaded news articles across 6 categories
- Dark theme with blue accents
- Fully responsive design
- Search and filter functionality
- Comment system
- Related news recommendations

## Getting Started

### 1. Install Dependencies
Already done! The project uses:
- Next.js 13 (App Router)
- TypeScript
- Tailwind CSS
- Lucide React icons
- date-fns for date formatting

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
npm start
```

## Project Structure

```
project/
├── app/                    # Next.js pages
│   ├── page.tsx           # Home page
│   ├── layout.tsx         # Root layout
│   ├── globals.css        # Global styles
│   └── news/[id]/         # News detail pages
│       ├── page.tsx
│       └── not-found.tsx
├── components/            # Reusable components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── NewsCard.tsx
│   ├── FeaturedNews.tsx
│   ├── TrendingNews.tsx
│   ├── CategoryTabs.tsx
│   ├── SearchBar.tsx
│   ├── CommentBox.tsx
│   ├── CommentList.tsx
│   └── NewsDetailClient.tsx
├── lib/                   # Data and utilities
│   ├── mockData.ts       # Mock news articles
│   └── newsService.ts    # API service layer
└── types/                 # TypeScript types
    └── news.ts
```

## Key Features

### Home Page (`/`)
- **Featured News**: Large hero section with main article
- **Trending Panel**: Top 5 trending stories
- **Search Bar**: Search by title or category
- **Category Tabs**: Filter news by category
- **News Grid**: All articles in card format

### News Detail Page (`/news/[id]`)
- Full article content
- Author information
- Comment section
- Related news
- Share button (UI only)

### Navigation
- Sticky header with categories
- Search functionality
- Mobile responsive menu
- Admin login button (UI only)

## Features to Explore

1. **Search**: Type in the search bar to find articles
2. **Categories**: Click category tabs to filter news
3. **Comments**: Add comments on news detail pages
4. **Related News**: See similar articles at the bottom
5. **Responsive**: Try on mobile, tablet, and desktop

## Mock Data

The project includes:
- **10 news articles** covering:
  - Technology (3 articles)
  - Business (2 articles)
  - Politics (2 articles)
  - Sports (1 article)
  - Health (1 article)
  - Entertainment (1 article)
- **Sample comments** on some articles
- **High-quality images** from Pexels

## Customization

### Adding New Articles
Edit `lib/mockData.ts` and add to the `mockNews` array:
```typescript
{
  id: '11',
  title: 'Your News Title',
  description: 'Brief description',
  content: 'Full article content',
  category: 'Technology',
  image: 'https://images.pexels.com/...',
  author: { name: 'Author Name', avatar: 'AN' },
  date: '2024-12-26',
  readTime: 5,
  tags: ['tag1', 'tag2'],
  featured: false,
  trending: false
}
```

### Changing Colors
Edit `app/globals.css` to modify the color scheme:
```css
--primary: 217.2 91.2% 59.8%;  /* Blue accent */
--background: 222.2 84% 4.9%;   /* Dark background */
```

### Adding Categories
1. Update `types/news.ts` to add new category
2. Update `categoryColors` in components
3. Add category to navigation in `Navbar.tsx`

## Performance

The build generates:
- **Static pages** for all news articles
- **Optimized images** with Next.js Image
- **Code splitting** for better performance
- **Total bundle size**: ~111 KB first load

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Tips

1. All data is stored in memory (refreshing resets comments)
2. Images load from Pexels CDN
3. Search is case-insensitive
4. Categories are color-coded for easy identification
5. Mobile menu accessible via hamburger icon

## Next Steps

To connect to a real backend:
1. Replace `newsService.ts` with actual API calls
2. Add authentication for comments
3. Implement real-time updates
4. Add database for persistence
5. Set up CMS for content management

---

Enjoy exploring the NewsPortal!
