/**
 * Download CTA Component
 * 
 * Design Philosophy: Digital Archaeology Aesthetic
 * - Quark blue button for strong visual contrast
 * - Social proof to build trust
 * - Benefits highlight to encourage conversion
 */

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, Users, HardDrive, Smartphone, CheckCircle2 } from "lucide-react";

interface DownloadCTAProps {
  savedCount: number;
  onDownload: () => void;
}

export default function DownloadCTA({ savedCount, onDownload }: DownloadCTAProps) {
  return (
    <Card className="bg-gradient-to-br from-[#007BFF]/5 to-[#007BFF]/10 border-[#007BFF]/30 shadow-lg sticky top-20">
      <CardHeader>
        <div className="flex items-center gap-2 mb-2">
          <Download className="w-6 h-6 text-[#007BFF]" />
          <CardTitle className="text-xl" style={{ fontFamily: "'Noto Serif SC', serif" }}>
            资源下载
          </CardTitle>
        </div>
        <CardDescription className="text-base">
          天涯神贴全集 · 精排版
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Main CTA Button */}
        <Button 
          onClick={onDownload}
          className="w-full h-12 text-base font-semibold bg-[#007BFF] hover:bg-[#0056b3] text-white shadow-md hover:shadow-lg transition-all"
        >
          <Download className="w-5 h-5 mr-2" />
          保存至网盘 (不限速)
        </Button>

        {/* Social Proof */}
        <div className="flex items-center justify-center gap-2 text-sm text-[#2D2D2D]/70">
          <Users className="w-4 h-4" />
          <span>
            已有 <span className="font-semibold text-[#007BFF]">{savedCount.toLocaleString()}</span> 人转存,资源有效
          </span>
        </div>

        {/* Benefits */}
        <div className="space-y-2 pt-4 border-t border-[#8B7355]/20">
          <p className="text-sm font-semibold text-[#2D2D2D] mb-3">
            新用户福利:
          </p>
          <div className="space-y-2">
            <div className="flex items-start gap-2 text-sm text-[#2D2D2D]/70">
              <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
              <span>转存可领 <span className="font-semibold text-[#007BFF]">1TB</span> 免费空间</span>
            </div>
            <div className="flex items-start gap-2 text-sm text-[#2D2D2D]/70">
              <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
              <span>支持手机端 AI 朗读功能</span>
            </div>
            <div className="flex items-start gap-2 text-sm text-[#2D2D2D]/70">
              <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
              <span>多格式支持:PDF / Epub / TXT</span>
            </div>
            <div className="flex items-start gap-2 text-sm text-[#2D2D2D]/70">
              <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
              <span>离线阅读,随时随地查看</span>
            </div>
          </div>
        </div>

        {/* Warning */}
        <div className="p-3 bg-orange-50 border border-orange-200 rounded-lg">
          <p className="text-xs text-orange-800">
            💡 提示:点击后将跳转至网盘,请在页面中点击"一键转存"按钮,以防链接失效
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
