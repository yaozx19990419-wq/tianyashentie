/**
 * Ranking Card Component
 * 
 * Design Philosophy: Digital Archaeology Aesthetic
 * - Medal badges for top 3 ranks
 * - Warm color palette with paper texture
 */

import { Post } from '@/data/types';
import { getRankBadgeColor, formatNumber } from '@/lib/ranking';
import { Link } from 'wouter';
import { Flame } from 'lucide-react';

interface RankingCardProps {
  post: Post;
  rank: number;
  sortBy: 'saved' | 'views';
}

export default function RankingCard({ post, rank, sortBy }: RankingCardProps) {
  const getMedalEmoji = (rank: number) => {
    if (rank === 1) return '🥇';
    if (rank === 2) return '🥈';
    if (rank === 3) return '🥉';
    return null;
  };

  const metric = sortBy === 'saved' ? post.savedCount : post.viewCount;
  const metricLabel = sortBy === 'saved' ? '转存' : '阅读';

  return (
    <Link href={`/post/${post.id}`} className="block group">
      <div className="bg-white/90 backdrop-blur rounded-lg border border-[#8B7355]/20 p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          {/* Header with Rank */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              {/* Rank Badge */}
              <div className={`
                w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg
                ${getRankBadgeColor(rank)}
              `}>
                {getMedalEmoji(rank) || rank}
              </div>
              
              {/* Category Tag */}
              <div className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-[#007BFF]/10 text-[#007BFF]">
                {post.category}
              </div>
            </div>

            {/* Heat Indicator */}
            <div className="flex gap-1">
              {Array.from({ length: post.heat }).map((_, i) => (
                <Flame key={i} size={16} className="text-orange-500 fill-orange-500" />
              ))}
            </div>
          </div>

          {/* Title */}
          <h3 className="text-lg font-bold text-[#2D2D2D] mb-2 line-clamp-2 group-hover:text-[#007BFF] transition-colors" style={{ fontFamily: "'Noto Serif SC', serif" }}>
            {post.title}
          </h3>

          {/* Author and Date */}
          <div className="flex items-center gap-4 text-sm text-[#2D2D2D]/60 mb-4">
            <span>作者: {post.author}</span>
            <span>•</span>
            <span>{new Date(post.publishDate).toLocaleDateString('zh-CN')}</span>
          </div>

          {/* Excerpt */}
          <p className="text-sm text-[#2D2D2D]/70 line-clamp-2 mb-4">
            {post.excerpt}
          </p>

          {/* Footer with Metrics */}
          <div className="flex items-center justify-between pt-4 border-t border-[#8B7355]/10">
            <div className="flex gap-6 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-[#2D2D2D]/60">转存:</span>
                <span className="font-semibold text-[#007BFF]">{formatNumber(post.savedCount)}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#2D2D2D]/60">阅读:</span>
                <span className="font-semibold text-[#8B7355]">{formatNumber(post.viewCount)}</span>
              </div>
            </div>

            {/* Highlight Current Metric */}
            <div className={`
              px-3 py-1 rounded-full text-xs font-bold
              ${sortBy === 'saved' 
                ? 'bg-[#007BFF]/20 text-[#007BFF]' 
                : 'bg-[#8B7355]/20 text-[#8B7355]'
              }
            `}>
              {metricLabel}: {formatNumber(metric)}
            </div>
          </div>
      </div>
    </Link>
  );
}
