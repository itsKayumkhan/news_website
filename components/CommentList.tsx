import { MessageCircle, Calendar } from 'lucide-react';
import { Comment } from '@/types/news';
import { format } from 'date-fns';

interface CommentListProps {
  comments: Comment[];
}

export default function CommentList({ comments }: CommentListProps) {
  if (comments.length === 0) {
    return (
      <div className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-12 text-center">
        <MessageCircle className="w-12 h-12 text-slate-600 mx-auto mb-4" />
        <h3 className="text-white font-semibold text-lg mb-2">No comments yet</h3>
        <p className="text-slate-400">Be the first to share your thoughts!</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h3 className="text-white font-semibold text-xl mb-4">
        Comments ({comments.length})
      </h3>
      {comments.map((comment) => (
        <article
          key={comment.id}
          className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6 hover:border-slate-600 transition-colors"
        >
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white font-semibold text-sm">
                {comment.avatar || comment.author.charAt(0).toUpperCase()}
              </span>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h4 className="text-white font-semibold">{comment.author}</h4>
                <div className="flex items-center gap-1.5 text-xs text-slate-500">
                  <Calendar className="w-3 h-3" />
                  <span>{format(new Date(comment.date), 'MMM dd, yyyy')}</span>
                </div>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">{comment.content}</p>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
