/**
 * Collection Download Section
 * 
 * Design Philosophy: Digital Archaeology Aesthetic
 * - Archive box visual metaphor
 * - Deep brown background (#4A3728)
 * - Cream text (#FFFEF0)
 * - Left image, right content layout
 */

import { Button } from "@/components/ui/button";
import { Download, HardDrive, BookOpen, Users } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function CollectionDownload() {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);
    toast.info("正在连接网盘...");
    
    setTimeout(() => {
      window.open('https://pan.xunlei.com/s/VOi7LIhQdw8LbSmV6DMx2hl6A1?pwd=5pah#', '_blank');
      setIsDownloading(false);
      toast.success("已打开网盘下载页面");
    }, 1000);
  };

  return (
    <section className="bg-[#4A3728] text-[#FFFEF0] py-16 md:py-20 px-4 md:px-8">
      <div className="container max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left: Image */}
          <div className="flex justify-center">
            <div className="relative">
              {/* 档案盒视觉效果 */}
              <div className="bg-gradient-to-br from-[#6B5344] to-[#3D2817] rounded-lg p-8 shadow-2xl border-4 border-[#8B7355]/50 max-w-sm">
                <div className="bg-[#8B7355]/30 rounded p-6 text-center">
                  <HardDrive className="w-16 h-16 mx-auto mb-4 text-[#FFD700]" />
                  <div className="text-4xl font-bold mb-2 text-[#FFD700]">200G</div>
                  <div className="text-lg font-semibold text-[#FFFEF0]" style={{ fontFamily: "'Noto Serif SC', serif" }}>
                    天涯神贴全集
                  </div>
                  <div className="text-sm text-[#FFFEF0]/70 mt-2">
                    互联网文化遗产
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-6">
            {/* Title */}
            <div>
              <h2 
                className="text-3xl md:text-4xl font-bold mb-2 text-[#FFD700]"
                style={{ fontFamily: "'Noto Serif SC', serif" }}
              >
                天涯神贴全集
              </h2>
              <p className="text-lg text-[#FFFEF0]/80">
                互联网文化遗产·精排版合集
              </p>
            </div>

            {/* Description */}
            <p className="text-[#FFFEF0]/90 leading-relaxed">
              这是一份珍贵的互联网文化遗产合集,精心收录了天涯论坛2000-2015年间最具影响力的神贴。包含KK大神房产预测、大鹏金翅鸟历史考证、《二号首长》官场揭秘等经典作品,以及无数普通网友的精彩讨论和思想碰撞。
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 py-4 border-t border-b border-[#8B7355]/30">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#FFD700]">10万+</div>
                <div className="text-sm text-[#FFFEF0]/70">篇帖子</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#FFD700]">50+</div>
                <div className="text-sm text-[#FFFEF0]/70">位知名作者</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#FFD700]">20+</div>
                <div className="text-sm text-[#FFFEF0]/70">个热门话题</div>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <BookOpen className="w-5 h-5 text-[#FFD700] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-[#FFFEF0]">多种格式</div>
                  <div className="text-sm text-[#FFFEF0]/70">精排版PDF、Epub电子书、TXT纯文本、原始HTML</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-[#FFD700] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-[#FFFEF0]">完整收录</div>
                  <div className="text-sm text-[#FFFEF0]/70">保留原始讨论、评论、用户互动,还原论坛生态</div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <Button
              onClick={handleDownload}
              disabled={isDownloading}
              className="w-full md:w-auto bg-[#007BFF] hover:bg-[#0056CC] text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 hover:shadow-lg text-lg"
            >
              <Download className="w-5 h-5 mr-2" />
              {isDownloading ? '正在连接...' : '立即下载全集'}
            </Button>

            {/* Tip */}
            <p className="text-sm text-[#FFFEF0]/60 flex items-start gap-2">
              <span className="text-[#FFD700] font-bold">💡</span>
              <span>建议使用网盘App下载,可获得1TB免费空间和极速下载体验</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
