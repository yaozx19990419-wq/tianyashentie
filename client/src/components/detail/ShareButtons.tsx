/**
 * Share Buttons Component
 * 
 * Design Philosophy: Digital Archaeology Aesthetic
 * - Subtle share buttons with social media icons
 * - Smooth hover animations
 * - Positioned above content preview
 */

import { useState } from "react";
import { Share2, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface ShareButtonsProps {
  title: string;
  excerpt: string;
  url: string;
}

export default function ShareButtons({ title, excerpt, url }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  // 复制链接
  const handleCopyLink = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    toast.success("链接已复制到剪贴板");
    setTimeout(() => setCopied(false), 2000);
  };

  // 分享到微信(通过二维码)
  const handleShareWeChat = () => {
    toast.info("请使用微信扫描二维码分享");
    // 实际应用中可以生成二维码
  };

  // 分享到微博
  const handleShareWeibo = () => {
    const weiboUrl = `https://service.weibo.com/share/share.php?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`;
    window.open(weiboUrl, '_blank', 'width=600,height=400');
  };

  // 分享到QQ
  const handleShareQQ = () => {
    const qqUrl = `https://sns.qzone.qq.com/cgi-bin/qzoneshare/cgi_qzoneshare_onekey?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}&desc=${encodeURIComponent(excerpt)}`;
    window.open(qqUrl, '_blank', 'width=600,height=400');
  };

  return (
    <div className="flex items-center gap-2 mb-6 pb-6 border-b border-[#8B7355]/20">
      <div className="flex items-center gap-1 text-[#8B7355]/60 text-sm mr-2">
        <Share2 className="w-4 h-4" />
        <span>分享:</span>
      </div>

      {/* 微信分享 */}
      <Button
        variant="ghost"
        size="sm"
        onClick={handleShareWeChat}
        className="hover:bg-[#09B981]/10 text-[#09B981] transition-colors"
        title="分享到微信"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
        </svg>
      </Button>

      {/* 微博分享 */}
      <Button
        variant="ghost"
        size="sm"
        onClick={handleShareWeibo}
        className="hover:bg-[#E74C3C]/10 text-[#E74C3C] transition-colors"
        title="分享到微博"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9.5 9C10.88 9 12 7.88 12 6.5S10.88 4 9.5 4 7 5.12 7 6.5 8.12 9 9.5 9zm0-3c.83 0 1.5.67 1.5 1.5S10.33 9 9.5 9 8 8.33 8 7.5 8.67 6 9.5 6zm5 0c.83 0 1.5.67 1.5 1.5S15.33 9 14.5 9 13 8.33 13 7.5 13.67 6 14.5 6zm0 3c1.38 0 2.5-1.12 2.5-2.5S15.88 4 14.5 4 12 5.12 12 6.5 13.12 9 14.5 9zM9 12H7c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h2v-2H7v-2h2v-2zm5 0h-2v6h2v-2h2v2h2v-4c0-1.1-.9-2-2-2h-2v2z"/>
        </svg>
      </Button>

      {/* QQ分享 */}
      <Button
        variant="ghost"
        size="sm"
        onClick={handleShareQQ}
        className="hover:bg-[#1E90FF]/10 text-[#1E90FF] transition-colors"
        title="分享到QQ"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-13h-2v6h2v-6zm0 8h-2v2h2v-2z"/>
        </svg>
      </Button>

      {/* 复制链接 */}
      <Button
        variant="ghost"
        size="sm"
        onClick={handleCopyLink}
        className="hover:bg-[#8B7355]/10 text-[#8B7355] transition-colors"
        title="复制链接"
      >
        {copied ? (
          <Check className="w-5 h-5" />
        ) : (
          <Copy className="w-5 h-5" />
        )}
      </Button>
    </div>
  );
}
