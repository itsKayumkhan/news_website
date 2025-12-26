'use client';

import { useState } from 'react';
import CommentBox from '@/components/CommentBox';
import CommentList from '@/components/CommentList';
import { Comment } from '@/types/news';
import { newsService } from '@/lib/newsService';

interface NewsDetailClientProps {
  newsId: string;
  initialComments: Comment[];
}

export default function NewsDetailClient({ newsId, initialComments }: NewsDetailClientProps) {
  const [comments, setComments] = useState<Comment[]>(initialComments);

  const handleAddComment = async (author: string, content: string) => {
    const newComment = await newsService.addComment(newsId, { author, content });
    setComments([newComment, ...comments]);
  };

  return (
    <section className="mb-12">
      <h2 className="text-white font-bold text-2xl mb-6">Discussion</h2>
      <div className="space-y-6">
        <CommentBox onSubmit={handleAddComment} />
        <CommentList comments={comments} />
      </div>
    </section>
  );
}
