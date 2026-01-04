/**
 * Category Navigation Component
 * 
 * Design Philosophy: Digital Archaeology Aesthetic
 * - Stamp-style category tags
 * - Warm color palette
 */

import { Badge } from "@/components/ui/badge";
import { Category } from "@/data/types";

interface CategoryNavProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const categories: Array<{ value: string; label: string; color: string }> = [
  { value: '全部', label: '全部神贴', color: 'bg-[#8B7355] hover:bg-[#8B7355]/80' },
  { value: '金融/房产', label: '金融/房产', color: 'bg-[#007BFF] hover:bg-[#007BFF]/80' },
  { value: '官场/纪实', label: '官场/纪实', color: 'bg-[#C8102E] hover:bg-[#C8102E]/80' },
  { value: '玄学/奇闻', label: '玄学/奇闻', color: 'bg-[#8B4513] hover:bg-[#8B4513]/80' },
  { value: '历史/考古', label: '历史/考古', color: 'bg-[#4A7C59] hover:bg-[#4A7C59]/80' },
];

export default function CategoryNav({ activeCategory, onCategoryChange }: CategoryNavProps) {
  return (
    <div className="bg-white/80 backdrop-blur border-b border-[#8B7355]/20 py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap gap-3 items-center">
          <span className="text-sm text-[#2D2D2D]/60" style={{ fontFamily: "'Courier New', monospace" }}>
            分类:
          </span>
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => onCategoryChange(category.value)}
              className={`
                px-4 py-2 rounded-full text-white text-sm font-medium
                transition-all duration-200 transform hover:scale-105
                ${category.color}
                ${activeCategory === category.value ? 'ring-2 ring-[#2D2D2D] ring-offset-2' : ''}
              `}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
