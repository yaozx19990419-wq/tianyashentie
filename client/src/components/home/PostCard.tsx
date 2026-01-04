/**
 * Post Card Component
 * 
 * Design Philosophy: Digital Archaeology Aesthetic
 * - Archive card style with subtle shadows
 * - Flame icon for heat indicator
 * - Stamp-style category badge
 * - Hover animation: translateY(-4px)
 */

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Post } from "@/data/types";
import { Link } from "wouter";
import { Flame, User, Calendar } from "lucide-react";

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  // 生成火焰图标数组
  const flameIcons = Array.from({ length: post.heat }, (_, i) => i);

  // 分类颜色映射
  const categoryColors: Record<string, string> = {
    '金融/房产': 'bg-[#007BFF] text-white',
    '官场/纪实': 'bg-[#C8102E] text-white',
    '玄学/奇闻': 'bg-[#8B4513] text-white',
    '历史/考古': 'bg-[#4A7C59] text-white',
  };

  return (
    <Link href={`/post/${post.id}`} className="block h-full">
      <Card className="
          h-full bg-white border-[#8B7355]/20 
          shadow-[0_2px_4px_rgba(0,0,0,0.05),0_4px_8px_rgba(0,0,0,0.08)]
          hover:shadow-[0_4px_8px_rgba(0,0,0,0.08),0_8px_16px_rgba(0,0,0,0.12)]
          hover:-translate-y-1
          transition-all duration-300
          cursor-pointer
        ">
          <CardHeader className="pb-3">
            {/* Category Badge */}
            <div className="flex items-start justify-between gap-2 mb-2">
              <Badge className={`${categoryColors[post.category]} rounded-full px-3 py-1`}>
                {post.category}
              </Badge>
              
              {/* Heat Indicator */}
              <div className="flex items-center gap-1">
                {flameIcons.map((i) => (
                  <img 
                    key={i}
                    src="/images/flame-icon.png" 
                    alt="热度" 
                    className="w-4 h-4"
                  />
                ))}
              </div>
            </div>

            {/* Title */}
            <CardTitle 
              className="text-xl leading-tight text-[#2D2D2D] hover:text-[#007BFF] transition-colors line-clamp-2"
              style={{ fontFamily: "'Noto Serif SC', serif" }}
            >
              {post.title}
            </CardTitle>

            {/* Meta Info */}
            <CardDescription className="flex items-center gap-4 text-xs mt-2" style={{ fontFamily: "'Courier New', monospace" }}>
              <span className="flex items-center gap-1">
                <User className="w-3 h-3" />
                {post.author}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {post.publishDate}
              </span>
            </CardDescription>
          </CardHeader>

          <CardContent>
            {/* Excerpt */}
            <p className="text-sm text-[#2D2D2D]/70 leading-relaxed line-clamp-3">
              {post.excerpt}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-4">
              {post.tags.slice(0, 3).map((tag, index) => (
                <Badge 
                  key={index}
                  variant="outline" 
                  className="text-xs border-[#8B7355]/30 text-[#8B7355]"
                >
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Saved Count */}
            <div className="mt-4 pt-4 border-t border-[#8B7355]/20">
              <p className="text-xs text-[#2D2D2D]/60">
                已有 <span className="font-semibold text-[#007BFF]">{post.savedCount.toLocaleString()}</span> 人转存
              </p>
            </div>
          </CardContent>
      </Card>
    </Link>
  );
}
