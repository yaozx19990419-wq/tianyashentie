/**
 * Home Page
 * 
 * Design Philosophy: Digital Archaeology Aesthetic
 * - Paper texture background
 * - Waterfall grid layout for post cards
 * - Search and filter functionality
 */

import { useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import CategoryNav from "@/components/home/CategoryNav";
import PostCard from "@/components/home/PostCard";
import CollectionDownload from "@/components/home/CollectionDownload";
import SimpleFooterLinks from "@/components/home/SimpleFooterLinks";
import { posts, getPostsByCategory, searchPosts } from "@/data/posts";
import { Post } from "@/data/types";

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState('全部');
  const [filteredPosts, setFilteredPosts] = useState<Post[]>(posts);
  const [searchKeyword, setSearchKeyword] = useState('');

  // 处理分类切换
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setSearchKeyword(''); // 清空搜索
    setFilteredPosts(getPostsByCategory(category));
  };

  // 处理搜索
  const handleSearch = (keyword: string) => {
    setSearchKeyword(keyword);
    setActiveCategory('全部'); // 重置分类
    setFilteredPosts(searchPosts(keyword));
  };

  return (
    <div className="min-h-screen bg-[#F5F5DC]">
      {/* Header */}
      <Header onSearch={handleSearch} />

      {/* Category Navigation */}
      <CategoryNav 
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
      />

      {/* Main Content */}
      <main className="container mx-auto py-8 px-4">
        {/* Search Result Hint */}
        {searchKeyword && (
          <div className="mb-6 p-4 bg-white/80 rounded-lg border border-[#8B7355]/20">
            <p className="text-sm text-[#2D2D2D]/70">
              搜索 "<span className="font-semibold text-[#007BFF]">{searchKeyword}</span>" 的结果,
              共找到 <span className="font-semibold">{filteredPosts.length}</span> 篇神贴
            </p>
          </div>
        )}

        {/* Posts Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="inline-block p-8 bg-white/80 rounded-lg border border-[#8B7355]/20">
              <p className="text-lg text-[#2D2D2D]/60 mb-2" style={{ fontFamily: "'Noto Serif SC', serif" }}>
                未找到相关神贴
              </p>
              <p className="text-sm text-[#2D2D2D]/40">
                试试搜索其他关键词或切换分类
              </p>
            </div>
          </div>
        )}
      </main>

      {/* Collection Download Section */}
      <CollectionDownload />

      {/* Footer */}
      <footer className="bg-[#2D2D2D] text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm opacity-80">
            天涯神贴库 · 互联网文化遗产资源站
          </p>
          <p className="text-xs opacity-60 mt-2">
            致敬天涯论坛的黄金时代 · 保存那些不应被遗忘的故事
          </p>
          <SimpleFooterLinks />
        </div>
      </footer>
    </div>
  );
}
