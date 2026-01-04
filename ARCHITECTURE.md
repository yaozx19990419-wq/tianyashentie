# 天涯神贴库 - 项目架构文档 (Phase 1)

## 项目概述

**项目名称**: 天涯神贴库 (Tianya Archive)  
**项目定位**: 极简复古的互联网文化遗产资源站  
**核心目标**: 通过高质量"天涯神贴"内容吸引流量,引导用户转存至网盘,实现拉新转化

---

## 技术栈

### 前端框架
- **React 19** - 最新的 React 版本,提供更好的性能和开发体验
- **Wouter** - 轻量级路由库,替代 React Router
- **Tailwind CSS 4** - 实用优先的 CSS 框架,支持自定义设计系统
- **shadcn/ui** - 高质量的 React 组件库,基于 Radix UI

### 构建工具
- **Vite** - 快速的现代化构建工具
- **TypeScript** - 类型安全的 JavaScript 超集

### 部署
- **Manus 内置托管** - 支持自定义域名的一键部署

---

## 文件夹结构

```
tianya-archive/
├── client/                          # 前端应用根目录
│   ├── public/                      # 静态资源目录
│   │   ├── images/                  # 图片资源
│   │   │   ├── hero-background.png  # 首页背景纹理
│   │   │   ├── archive-hero.png     # 档案馆氛围图
│   │   │   ├── reading-atmosphere.png # 阅读氛围图
│   │   │   ├── flame-icon.png       # 火焰热度图标
│   │   │   └── seal-stamp.png       # 印章标签图标
│   │   └── favicon.ico              # 网站图标
│   │
│   ├── src/                         # 源代码目录
│   │   ├── components/              # 可复用组件
│   │   │   ├── ui/                  # shadcn/ui 基础组件
│   │   │   │   ├── button.tsx
│   │   │   │   ├── card.tsx
│   │   │   │   ├── dialog.tsx
│   │   │   │   ├── input.tsx
│   │   │   │   └── ...
│   │   │   ├── layout/              # 布局组件
│   │   │   │   ├── Header.tsx       # 全局头部(搜索栏)
│   │   │   │   └── Footer.tsx       # 全局底部
│   │   │   ├── home/                # 首页专用组件
│   │   │   │   ├── CategoryNav.tsx  # 分类导航
│   │   │   │   ├── PostCard.tsx     # 神贴卡片
│   │   │   │   └── SearchBar.tsx    # 搜索栏
│   │   │   └── detail/              # 详情页专用组件
│   │   │       ├── ContentPreview.tsx  # 内容预览(带截断)
│   │   │       ├── DownloadCTA.tsx     # 下载引导卡片
│   │   │       └── LoadingModal.tsx    # 跳转加载弹窗
│   │   │
│   │   ├── pages/                   # 页面组件
│   │   │   ├── Home.tsx             # 首页(神贴列表)
│   │   │   ├── Detail.tsx           # 详情页(单个神贴)
│   │   │   └── NotFound.tsx         # 404 页面
│   │   │
│   │   ├── lib/                     # 工具函数
│   │   │   ├── utils.ts             # 通用工具函数
│   │   │   └── constants.ts         # 常量定义
│   │   │
│   │   ├── data/                    # 数据文件
│   │   │   ├── posts.ts             # 神贴数据(标题、摘要、分类等)
│   │   │   └── links.ts             # 网盘链接配置中心
│   │   │
│   │   ├── contexts/                # React 上下文
│   │   │   └── ThemeContext.tsx     # 主题上下文(已配置为 light)
│   │   │
│   │   ├── App.tsx                  # 应用根组件(路由配置)
│   │   ├── main.tsx                 # 应用入口
│   │   └── index.css                # 全局样式(设计系统)
│   │
│   └── index.html                   # HTML 模板
│
├── server/                          # 服务器目录(静态站点占位)
│   └── index.ts                     # Express 服务器(生产环境)
│
├── shared/                          # 共享代码(占位)
│   └── const.ts                     # 共享常量
│
├── ideas.md                         # 设计方案头脑风暴
├── ARCHITECTURE.md                  # 本文档
├── package.json                     # 项目依赖配置
├── tsconfig.json                    # TypeScript 配置
├── tailwind.config.js               # Tailwind 配置
└── vite.config.ts                   # Vite 配置

```

---

## 核心功能模块

### 1. 首页 (Home Page)

**路由**: `/`

**核心组件**:
- `Header` - 全局搜索栏,支持按标题/作者检索
- `CategoryNav` - 分类导航(金融/房产、官场/纪实、玄学/奇闻、历史/考古)
- `PostCard` - 神贴卡片,显示:
  - 标题(衬线字体)
  - 热度指标(火焰图标 + 数字)
  - 摘要(前 100 字)
  - 分类标签(印章样式)

**布局**: 响应式瀑布流网格(CSS Grid)

**交互**:
- Hover 时卡片上浮(`translateY(-4px)`)并增强阴影
- 点击卡片跳转到详情页

---

### 2. 详情页 (Detail Page)

**路由**: `/post/:id`

**核心组件**:
- `ContentPreview` - 沉浸式阅读区域:
  - 米黄色背景(#F5F5DC)
  - 显示前 20% 内容
  - 底部使用 CSS `clip-path` 模拟纸张撕裂效果
  - 渐变遮罩(从透明到米黄色)
- `DownloadCTA` - 下载引导卡片:
  - 标题:"[资源下载] 天涯神贴全集·精排版"
  - 主按钮:"保存至网盘 (不限速)" (蓝 #007BFF)
  - 状态显示:"已有 10k+ 人转存,资源有效"
  - 拉新引导语:"新用户转存可领 1TB 空间,支持手机端 AI 朗读"
- `LoadingModal` - 跳转加载弹窗:
  - 1.5 秒加载动画(旋转的火焰图标)
  - 文案:"正在连接极速通道... 请在跳转后点击'一键转存',以防链接失效"

**布局**: 单栏居中,最大宽度 720px

**交互**:
- 点击下载按钮触发弹窗
- 1.5 秒后跳转到网盘链接(新窗口打开)

---

### 3. 数据管理

**神贴数据结构** (`src/data/posts.ts`):

```typescript
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
}

export type Category = 
  | '金融/房产' 
  | '官场/纪实' 
  | '玄学/奇闻' 
  | '历史/考古';
```

**链接配置中心** (`src/data/links.ts`):

```typescript
export const quarkLinks = {
  'kk-real-estate': 'https://pan.quark.cn/s/xxxxx',
  'dapeng-history': 'https://pan.quark.cn/s/xxxxx',
  'tianya-collection': 'https://pan.quark.cn/s/xxxxx',
  // ... 更多链接
};
```

---

## 设计系统 (Design System)

### 配色方案

在 `client/src/index.css` 中定义:

```css
:root {
  /* 主色调 - 数字考古美学 */
  --paper-beige: #F5F5DC;        /* 米黄/旧纸张 */
  --text-charcoal: #2D2D2D;      /* 深炭黑 */
  --quark-blue: #007BFF;         /* 蓝(CTA) */
  --brown-accent: #8B7355;       /* 棕褐色(装饰) */
  --seal-red: #C8102E;           /* 印章红 */
  
  /* Tailwind 语义化颜色映射 */
  --background: oklch(from var(--paper-beige) l c h);
  --foreground: oklch(from var(--text-charcoal) l c h);
  --primary: oklch(from var(--quark-blue) l c h);
  --accent: oklch(from var(--brown-accent) l c h);
}
```

### 字体系统

在 `client/index.html` 中引入 Google Fonts:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;700;900&family=Noto+Sans+SC:wght@400;500;600&family=Courier+New&display=swap" rel="stylesheet" />
```

在 `client/src/index.css` 中配置:

```css
:root {
  --font-serif: 'Noto Serif SC', serif;      /* 标题 */
  --font-sans: 'Noto Sans SC', sans-serif;   /* 正文 */
  --font-mono: 'Courier New', monospace;     /* 元数据 */
}

body {
  font-family: var(--font-sans);
}

h1, h2, h3 {
  font-family: var(--font-serif);
}
```

### 排版规范

| 元素 | 字号 | 字重 | 行高 | 字体 |
|------|------|------|------|------|
| H1(页面标题) | 2.5rem (40px) | 700 | 1.2 | Noto Serif SC |
| H2(卡片标题) | 1.75rem (28px) | 600 | 1.3 | Noto Serif SC |
| H3(章节标题) | 1.5rem (24px) | 600 | 1.4 | Noto Serif SC |
| Body(正文) | 1rem (16px) | 400 | 1.8 | Noto Sans SC |
| Small(元数据) | 0.875rem (14px) | 400 | 1.6 | Courier New |
| Button | 1rem (16px) | 500 | 1.5 | Noto Sans SC |

### 间距系统

遵循 Tailwind 的 4px 基准间距:

- **卡片内边距**: `p-6` (24px)
- **卡片间距**: `gap-6` (24px)
- **章节间距**: `mb-12` (48px)
- **元素间距**: `space-y-4` (16px)

### 圆角与阴影

```css
/* 圆角 */
--radius: 0.65rem;  /* 10.4px,略带复古感 */

/* 阴影 - 档案卡片效果 */
.card-shadow {
  box-shadow: 
    0 2px 4px rgba(0, 0, 0, 0.05),
    0 4px 8px rgba(0, 0, 0, 0.08);
}

.card-shadow-hover {
  box-shadow: 
    0 4px 8px rgba(0, 0, 0, 0.08),
    0 8px 16px rgba(0, 0, 0, 0.12);
}
```

---

## 转化优化策略

### 1. 内容钩子 (Content Hook)

- **展示策略**: 仅显示神贴前 20% 的精华内容
- **截断位置**: 在关键反转或结论处切断
- **视觉引导**: 使用纸张撕裂效果 + 渐变遮罩 + "内容已隐藏" 提示

### 2. CTA 设计 (Call-to-Action)

- **颜色对比**: 蓝(#007BFF)在米黄色背景上形成强烈视觉焦点
- **文案优化**: 
  - 主按钮:"保存至网盘 (不限速)" - 强调速度优势
  - 副文案:"新用户转存可领 1TB 空间" - 突出福利
- **社会证明**: "已有 10k+ 人转存,资源有效" - 建立信任

### 3. 跳转体验优化

- **加载动画**: 1.5 秒缓冲,避免突兀跳转
- **引导文案**: 提示用户在页面点击"一键转存"
- **新窗口打开**: 保留原页面,降低用户流失

---

## SEO 优化

### Meta 标签模板

每个详情页自动生成:

```html
<title>{神贴名称} - 天涯神贴在线阅读及PDF下载 - 天涯神贴库</title>
<meta name="description" content="深度复盘天涯论坛经典神贴{神贴名称},提供高清精排版PDF、Epub资源下载,支持网盘极速转存。" />
<meta name="keywords" content="天涯神贴,{神贴名称},{作者},天涯论坛,PDF下载,网盘" />
```

### 结构化数据

使用 JSON-LD 格式:

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "{神贴标题}",
  "author": {
    "@type": "Person",
    "name": "{作者}"
  },
  "publisher": {
    "@type": "Organization",
    "name": "天涯神贴库"
  },
  "description": "{摘要}"
}
```

---

## 响应式设计

### 断点定义

| 断点 | 宽度 | 布局调整 |
|------|------|----------|
| Mobile | < 640px | 单列布局,卡片全宽 |
| Tablet | 640px - 1024px | 双列网格 |
| Desktop | > 1024px | 三列网格,最大宽度 1280px |

### 移动端优化

- **大拇指热区**: CTA 按钮最小高度 48px
- **字体缩放**: 标题在移动端缩小 20%
- **图片优化**: 使用 WebP 格式 + 懒加载

---

## 性能优化

### 图片优化
- 使用 WebP 格式(备用 PNG)
- 懒加载(Intersection Observer)
- 响应式图片(`srcset`)

### 代码分割
- 路由级别代码分割(React.lazy)
- 组件按需加载

### 缓存策略
- 静态资源添加内容哈希(Vite 自动处理)
- Service Worker(可选,PWA 支持)

---

## 部署流程

### 开发环境
```bash
pnpm dev  # 启动开发服务器(http://localhost:3000)
```

### 生产构建
```bash
pnpm build  # 构建生产版本到 dist/
```

### Manus 部署
1. 创建 Checkpoint(保存当前版本)
2. 点击 UI 中的 "Publish" 按钮
3. 自动部署到 `xxx.manus.space`
4. 可绑定自定义域名

---

## 下一步开发计划 (Phase 2)

1. **实现首页**:
   - 创建 `PostCard` 组件
   - 实现响应式网格布局
   - 添加搜索和筛选功能

2. **实现详情页**:
   - 创建 `ContentPreview` 组件(带截断效果)
   - 实现 `DownloadCTA` 卡片
   - 添加跳转加载弹窗

3. **填充演示数据**:
   - 添加 3-5 个精选神贴
   - 配置网盘链接

4. **测试与优化**:
   - 跨浏览器测试
   - 移动端适配验证
   - 性能优化(Lighthouse 评分 > 90)

---

## 附录:演示数据示例

### 神贴示例 1: KK大神房产预测

```typescript
{
  id: 'kk-real-estate',
  title: 'KK大神2008年房产预测:十年后回看神准',
  author: 'KK',
  category: '金融/房产',
  heat: 5,
  excerpt: '2008年,在天涯论坛上,一位名叫KK的网友发表了对未来十年中国房地产市场的预测。他准确预言了一线城市房价的暴涨、三四线城市的分化,以及政策调控的节奏...',
  content: '(前20%完整内容,约1000字)',
  quarkLink: 'https://pan.quark.cn/s/xxxxx',
  seoTitle: 'KK大神2008年房产预测 - 天涯神贴在线阅读及PDF下载',
  seoDescription: '深度复盘天涯论坛经典神贴KK大神房产预测,提供高清精排版PDF下载',
  savedCount: 12580
}
```

### 神贴示例 2: 大鹏金翅鸟历史贴

```typescript
{
  id: 'dapeng-history',
  title: '大鹏金翅鸟:被隐藏的中国古代史真相',
  author: '大鹏金翅鸟',
  category: '历史/考古',
  heat: 4,
  excerpt: '这是一篇颠覆传统史观的神贴。作者通过大量史料考证,揭示了中国古代历史中被刻意隐藏的真相,从夏商周的真实面貌到秦汉的权力斗争...',
  content: '(前20%完整内容)',
  quarkLink: 'https://pan.quark.cn/s/xxxxx',
  seoTitle: '大鹏金翅鸟历史贴 - 天涯神贴在线阅读及PDF下载',
  seoDescription: '深度复盘天涯论坛经典神贴大鹏金翅鸟历史考证',
  savedCount: 8900
}
```

---

**文档版本**: Phase 1  
**最后更新**: 2026-01-04  
**维护者**: Manus AI
