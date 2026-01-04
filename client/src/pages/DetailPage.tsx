/**
 * Detail Page
 * 
 * Design Philosophy: Digital Archaeology Aesthetic
 * - Immersive reading experience
 * - Content hook strategy (show only 20%)
 * - Conversion funnel with CTA card
 */

import { useState, useEffect } from "react";
import { useParams, useLocation } from "wouter";
import Header from "@/components/layout/Header";
import ContentPreview from "@/components/detail/ContentPreview";
import DownloadCTA from "@/components/detail/DownloadCTA";
import LoadingModal from "@/components/detail/LoadingModal";
import { getPostById } from "@/data/posts";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, User, Calendar, Tag, Flame } from "lucide-react";
import ShareButtons from "@/components/detail/ShareButtons";


export default function DetailPage() {
  const params = useParams();
  const [, setLocation] = useLocation();
  const [showLoadingModal, setShowLoadingModal] = useState(false);
  
  const postId = params.id as string;
  const post = getPostById(postId);

  // 如果找不到帖子,跳转到404
  useEffect(() => {
    if (!post) {
      setLocation('/404');
    }
  }, [post, setLocation]);

  if (!post) {
    return null;
  }

  // 处理下载按钮点击
  const handleDownload = () => {
    setShowLoadingModal(true);
    
    // 1.5秒后跳转到网盘
    setTimeout(() => {
      window.open(post.quarkLink, '_blank');
      setShowLoadingModal(false);
    }, 1500);
  };

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
    <>
      <div className="min-h-screen bg-[#F5F5DC]">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="container max-w-7xl mx-auto py-8 px-4">
          {/* Back Button */}
          <Button 
            variant="ghost" 
            onClick={() => setLocation('/')}
            className="mb-6 hover:bg-white/50"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            返回首页
          </Button>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Content Column */}
            <div className="lg:col-span-2 space-y-6">
              {/* Post Header */}
              <div className="bg-white/80 backdrop-blur rounded-lg border border-[#8B7355]/20 p-6 md:p-8 shadow-lg">
                {/* Category & Heat */}
                <div className="flex items-center justify-between mb-4">
                  <Badge className={`${categoryColors[post.category]} rounded-full px-4 py-1.5 text-sm`}>
                    {post.category}
                  </Badge>
                  <div className="flex items-center gap-1">
                    {flameIcons.map((i) => (
                      <img 
                        key={i}
                        src="/images/flame-icon.png" 
                        alt="热度" 
                        className="w-5 h-5"
                      />
                    ))}
                  </div>
                </div>

                {/* Title */}
                <h1 
                  className="text-3xl md:text-4xl font-bold text-[#2D2D2D] mb-4 leading-tight"
                  style={{ fontFamily: "'Noto Serif SC', serif" }}
                >
                  {post.title}
                </h1>

                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-[#2D2D2D]/60 mb-4" style={{ fontFamily: "'Courier New', monospace" }}>
                  <span className="flex items-center gap-1.5">
                    <User className="w-4 h-4" />
                    作者:{post.author}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    发布:{post.publishDate}
                  </span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap items-center gap-2">
                  <Tag className="w-4 h-4 text-[#8B7355]" />
                  {post.tags.map((tag: string, index: number) => (
                    <Badge 
                      key={`${tag}-${index}`}
                      variant="outline" 
                      className="border-[#8B7355]/30 text-[#8B7355]"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Share Buttons */}
              <ShareButtons 
                title={post.title}
                excerpt={post.excerpt}
                url={`${window.location.origin}/post/${post.id}`}
              />

              {/* Content Preview */}
              <ContentPreview content={post.content} />
            </div>

            {/* Sidebar Column */}
            <div className="lg:col-span-1">
              <DownloadCTA 
                savedCount={post.savedCount}
                onDownload={handleDownload}
              />
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-[#2D2D2D] text-white py-8 mt-12">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm opacity-80">
              天涯神贴库 · 互联网文化遗产资源站
            </p>
            <p className="text-xs opacity-60 mt-2">
              致敬天涯论坛的黄金时代 · 保存那些不应被遗忘的故事
            </p>
          </div>
        </footer>

        {/* Loading Modal */}
        <LoadingModal open={showLoadingModal} />
      </div>
    </>
  );
}
