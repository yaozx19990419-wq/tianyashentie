/**
 * Data Types for Tianya Archive
 * 
 * Design Philosophy: Digital Archaeology Aesthetic
 */

export type Category = 
  | '金融/房产' 
  | '官场/纪实' 
  | '玄学/奇闻' 
  | '历史/考古';

export interface Post {
  id: string;                    // 唯一标识
  title: string;                 // 标题
  author: string;                // 作者
  category: Category;            // 分类
  heat: number;                  // 热度(1-5,对应火焰数量)
  excerpt: string;               // 摘要(100-150字)
  content: string;               // 完整内容(前20%)
  quarkLink: string;             // 网盘链接
  seoTitle: string;              // SEO 标题
  seoDescription: string;        // SEO 描述
  savedCount: number;            // 转存人数
  viewCount: number;             // 阅读人数
  publishDate: string;           // 发布日期
  tags: string[];                // 标签
  weeklyRank?: number;           // 周榜排名
  monthlyRank?: number;          // 月榜排名
  allTimeRank?: number;          // 总榜排名
}

export interface QuarkLinks {
  [key: string]: string;
}
