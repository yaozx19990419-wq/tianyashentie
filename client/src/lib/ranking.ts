/**
 * Ranking Utilities
 * 
 * 排行榜计算和排序逻辑
 */

import { Post } from '@/data/types';

export type RankingPeriod = 'weekly' | 'monthly' | 'allTime';
export type RankingSortBy = 'saved' | 'views';

/**
 * 计算周榜(最近 7 天发布的神贴)
 */
export function getWeeklyRanking(posts: Post[], sortBy: RankingSortBy = 'saved'): Post[] {
  const now = new Date();
  const sevenDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
  
  const weeklyPosts = posts.filter(post => {
    const postDate = new Date(post.publishDate);
    return postDate >= sevenDaysAgo;
  });

  return sortPosts(weeklyPosts, sortBy);
}

/**
 * 计算月榜(最近 30 天发布的神贴)
 */
export function getMonthlyRanking(posts: Post[], sortBy: RankingSortBy = 'saved'): Post[] {
  const now = new Date();
  const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
  
  const monthlyPosts = posts.filter(post => {
    const postDate = new Date(post.publishDate);
    return postDate >= thirtyDaysAgo;
  });

  return sortPosts(monthlyPosts, sortBy);
}

/**
 * 计算总榜(所有时间)
 */
export function getAllTimeRanking(posts: Post[], sortBy: RankingSortBy = 'saved'): Post[] {
  return sortPosts([...posts], sortBy);
}

/**
 * 排序神贴
 */
function sortPosts(posts: Post[], sortBy: RankingSortBy): Post[] {
  return posts.sort((a, b) => {
    if (sortBy === 'saved') {
      return b.savedCount - a.savedCount;
    } else {
      return b.viewCount - a.viewCount;
    }
  });
}

/**
 * 获取排行榜数据
 */
export function getRankingData(
  posts: Post[],
  period: RankingPeriod,
  sortBy: RankingSortBy = 'saved'
): Post[] {
  switch (period) {
    case 'weekly':
      return getWeeklyRanking(posts, sortBy);
    case 'monthly':
      return getMonthlyRanking(posts, sortBy);
    case 'allTime':
      return getAllTimeRanking(posts, sortBy);
    default:
      return getAllTimeRanking(posts, sortBy);
  }
}

/**
 * 获取排名徽章颜色
 */
export function getRankBadgeColor(rank: number): string {
  if (rank === 1) return 'bg-yellow-400 text-yellow-900'; // 金牌
  if (rank === 2) return 'bg-gray-300 text-gray-900';     // 银牌
  if (rank === 3) return 'bg-orange-300 text-orange-900'; // 铜牌
  return 'bg-blue-100 text-blue-900';                      // 其他
}

/**
 * 格式化数字(用于显示)
 */
export function formatNumber(num: number): string {
  if (num >= 10000) {
    return (num / 10000).toFixed(1) + '万';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num.toString();
}
