/**
 * Ranking Page
 * 
 * Design Philosophy: Digital Archaeology Aesthetic
 * - Medal-style ranking display
 * - Multiple sorting options
 * - Responsive grid layout
 */

import { useState } from 'react';
import Header from '@/components/layout/Header';
import RankingCard from '@/components/ranking/RankingCard';
import { posts } from '@/data/posts';
import { getRankingData, RankingPeriod, RankingSortBy } from '@/lib/ranking';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function RankingPage() {
  const [activePeriod, setActivePeriod] = useState<RankingPeriod>('allTime');
  const [sortBy, setSortBy] = useState<RankingSortBy>('saved');
  const [searchKeyword, setSearchKeyword] = useState('');

  // 获取排行榜数据
  const rankingData = getRankingData(posts, activePeriod, sortBy);

  // 如果有搜索关键词,进行过滤
  const filteredData = searchKeyword
    ? rankingData.filter(post =>
        post.title.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        post.author.toLowerCase().includes(searchKeyword.toLowerCase())
      )
    : rankingData;

  // 处理搜索
  const handleSearch = (keyword: string) => {
    setSearchKeyword(keyword);
  };

  return (
    <div className="min-h-screen bg-[#F5F5DC]">
      {/* Header */}
      <Header onSearch={handleSearch} />

      {/* Page Title */}
      <div className="bg-white/80 backdrop-blur border-b border-[#8B7355]/20 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-[#2D2D2D] mb-2" style={{ fontFamily: "'Noto Serif SC', serif" }}>
            神贴排行榜
          </h1>
          <p className="text-[#2D2D2D]/60">
            发现天涯论坛最受欢迎的经典神贴,按转存量和阅读量排名
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto py-8 px-4">
        {/* Tabs for Period Selection */}
        <div className="mb-8">
          <Tabs defaultValue="allTime" onValueChange={(value) => setActivePeriod(value as RankingPeriod)}>
            <TabsList className="grid w-full max-w-md grid-cols-3 bg-white/80 border border-[#8B7355]/20">
              <TabsTrigger value="weekly" className="data-[state=active]:bg-[#007BFF] data-[state=active]:text-white">
                周榜
              </TabsTrigger>
              <TabsTrigger value="monthly" className="data-[state=active]:bg-[#007BFF] data-[state=active]:text-white">
                月榜
              </TabsTrigger>
              <TabsTrigger value="allTime" className="data-[state=active]:bg-[#007BFF] data-[state=active]:text-white">
                总榜
              </TabsTrigger>
            </TabsList>

            {/* Sort Options */}
            <div className="mt-6 flex gap-3">
              <button
                onClick={() => setSortBy('saved')}
                className={`
                  px-4 py-2 rounded-lg font-medium transition-all duration-200
                  ${sortBy === 'saved'
                    ? 'bg-[#007BFF] text-white'
                    : 'bg-white/80 text-[#2D2D2D] border border-[#8B7355]/20 hover:bg-white'
                  }
                `}
              >
                按转存量排序
              </button>
              <button
                onClick={() => setSortBy('views')}
                className={`
                  px-4 py-2 rounded-lg font-medium transition-all duration-200
                  ${sortBy === 'views'
                    ? 'bg-[#8B7355] text-white'
                    : 'bg-white/80 text-[#2D2D2D] border border-[#8B7355]/20 hover:bg-white'
                  }
                `}
              >
                按阅读量排序
              </button>
            </div>

            {/* Search Result Hint */}
            {searchKeyword && (
              <div className="mt-6 p-4 bg-white/80 rounded-lg border border-[#8B7355]/20">
                <p className="text-sm text-[#2D2D2D]/70">
                  搜索 "<span className="font-semibold text-[#007BFF]">{searchKeyword}</span>" 的结果,
                  共找到 <span className="font-semibold">{filteredData.length}</span> 篇神贴
                </p>
              </div>
            )}

            {/* Rankings Grid */}
            <div className="mt-8">
              {filteredData.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredData.map((post, index) => (
                    <RankingCard
                      key={post.id}
                      post={post}
                      rank={index + 1}
                      sortBy={sortBy}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-20">
                  <div className="inline-block p-8 bg-white/80 rounded-lg border border-[#8B7355]/20">
                    <p className="text-lg text-[#2D2D2D]/60 mb-2" style={{ fontFamily: "'Noto Serif SC', serif" }}>
                      未找到相关神贴
                    </p>
                    <p className="text-sm text-[#2D2D2D]/40">
                      试试搜索其他关键词或切换排行榜类型
                    </p>
                  </div>
                </div>
              )}
            </div>
          </Tabs>
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
    </div>
  );
}
