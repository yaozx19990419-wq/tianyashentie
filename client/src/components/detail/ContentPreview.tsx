/**
 * Content Preview Component
 * 
 * Design Philosophy: Digital Archaeology Aesthetic
 * - Immersive reading experience with paper texture
 * - Paper tear effect at bottom using CSS clip-path
 * - Gradient mask from transparent to beige
 * - Single column layout, max-width 720px
 */

import { Card, CardContent } from "@/components/ui/card";
import { Streamdown } from 'streamdown';

interface ContentPreviewProps {
  content: string;
}

export default function ContentPreview({ content }: ContentPreviewProps) {
  return (
    <div className="relative">
      {/* Content Card */}
      <Card className="bg-white border-[#8B7355]/20 shadow-lg overflow-hidden">
        <CardContent className="p-8 md:p-12">
          {/* Markdown Content */}
          <div 
            className="prose prose-lg max-w-none
              prose-headings:font-serif prose-headings:text-[#2D2D2D]
              prose-p:text-[#2D2D2D]/80 prose-p:leading-relaxed
              prose-strong:text-[#2D2D2D] prose-strong:font-semibold
              prose-a:text-[#007BFF] prose-a:no-underline hover:prose-a:underline
              prose-blockquote:border-l-[#8B7355] prose-blockquote:text-[#2D2D2D]/70
              prose-code:text-[#C8102E] prose-code:bg-[#F5F5DC]/50
            "
          >
            <Streamdown>{content}</Streamdown>
          </div>
        </CardContent>

        {/* Paper Tear Effect */}
        <div 
          className="h-8 bg-white"
          style={{
            clipPath: 'polygon(0 0, 100% 0, 100% 60%, 98% 65%, 96% 58%, 94% 70%, 92% 62%, 90% 75%, 88% 65%, 86% 80%, 84% 68%, 82% 85%, 80% 70%, 78% 88%, 76% 72%, 74% 90%, 72% 74%, 70% 92%, 68% 76%, 66% 94%, 64% 78%, 62% 95%, 60% 80%, 58% 96%, 56% 82%, 54% 94%, 52% 84%, 50% 95%, 48% 86%, 46% 93%, 44% 88%, 42% 94%, 40% 90%, 38% 92%, 36% 88%, 34% 93%, 32% 86%, 30% 91%, 28% 84%, 26% 89%, 24% 82%, 22% 87%, 20% 80%, 18% 85%, 16% 78%, 14% 83%, 12% 76%, 10% 81%, 8% 74%, 6% 79%, 4% 72%, 2% 77%, 0 70%)'
          }}
        />
      </Card>

      {/* Gradient Mask Overlay */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, rgba(245, 245, 220, 0.8) 50%, rgba(245, 245, 220, 1) 100%)'
        }}
      />

      {/* Content Hidden Notice */}
      <div className="absolute bottom-8 left-0 right-0 text-center pointer-events-none">
        <div className="inline-block px-6 py-3 bg-[#2D2D2D]/90 text-white rounded-full shadow-lg">
          <p className="text-sm font-medium">
            📜 内容已隐藏 80%,完整版请保存至网盘
          </p>
        </div>
      </div>
    </div>
  );
}
