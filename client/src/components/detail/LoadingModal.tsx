/**
 * Loading Modal Component
 * 
 * Design Philosophy: Digital Archaeology Aesthetic
 * - 1.5 second buffer before redirect
 * - Flame icon animation
 * - User guidance text
 */

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Loader2 } from "lucide-react";

interface LoadingModalProps {
  open: boolean;
}

export default function LoadingModal({ open }: LoadingModalProps) {
  return (
    <Dialog open={open}>
      <DialogContent className="sm:max-w-md bg-white border-[#8B7355]/30">
        <DialogHeader>
          <DialogTitle className="text-center text-xl" style={{ fontFamily: "'Noto Serif SC', serif" }}>
            正在连接极速通道...
          </DialogTitle>
        </DialogHeader>
        
        <div className="flex flex-col items-center justify-center py-8 space-y-6">
          {/* Animated Flame Icon */}
          <div className="relative">
            <img 
              src="/images/flame-icon.png" 
              alt="加载中" 
              className="w-20 h-20 animate-bounce"
            />
            <Loader2 className="w-8 h-8 text-[#007BFF] animate-spin absolute -bottom-2 left-1/2 -translate-x-1/2" />
          </div>

          {/* Guidance Text */}
          <div className="text-center space-y-2">
            <DialogDescription className="text-base text-[#2D2D2D]/70">
              即将跳转至网盘...
            </DialogDescription>
            <DialogDescription className="text-sm text-[#2D2D2D]/60">
              请在跳转后点击 <span className="font-semibold text-[#007BFF]">"一键转存"</span> 按钮
            </DialogDescription>
            <DialogDescription className="text-xs text-[#2D2D2D]/50">
              以防链接失效,建议立即转存
            </DialogDescription>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
