/**
 * Header Component
 * 
 * Design Philosophy: Digital Archaeology Aesthetic
 * - Paper texture background (#F5F5DC)
 * - Serif font for title
 * - Simple and clean layout
 */

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Link } from "wouter";

interface HeaderProps {
  onSearch?: (keyword: string) => void;
}

export default function Header({ onSearch }: HeaderProps) {
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const keyword = formData.get('search') as string;
    if (onSearch && keyword.trim()) {
      onSearch(keyword.trim());
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#F5F5DC] border-b-2 border-[#8B7355]/30 shadow-md">
      <div className="container mx-auto py-4 px-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/">
            <a className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <div className="w-10 h-10 bg-[#C8102E] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl" style={{ fontFamily: "'Noto Serif SC', serif" }}>
                  天
                </span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-[#2D2D2D]" style={{ fontFamily: "'Noto Serif SC', serif" }}>
                  天涯神贴库
                </h1>
                <p className="text-xs text-[#2D2D2D]/60">互联网文化遗产资源站</p>
              </div>
            </a>
          </Link>

          {/* Navigation Links */}
          <nav className="flex items-center gap-6">
            <Link href="/ranking">
              <a className="text-sm font-medium text-[#2D2D2D] hover:text-[#007BFF] transition-colors">
                排行榜
              </a>
            </Link>
          </nav>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#2D2D2D]/40" />
              <Input
                type="text"
                name="search"
                placeholder="搜索神贴、作者..."
                className="pl-10 bg-white border-[#8B7355]/30 focus:border-[#007BFF] focus:ring-[#007BFF]"
              />
            </div>
          </form>
        </div>
      </div>
    </header>
  );
}
