/**
 * Phase 1 Showcase Page
 * 
 * Design Philosophy: Digital Archaeology Aesthetic
 * - Warm paper texture backgrounds (#F5F5DC)
 * - Archive card layouts with subtle shadows
 * - Serif fonts for headings, sans-serif for body
 */

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  FileText, 
  Folder, 
  Palette, 
  Code, 
  Image as ImageIcon,
  Flame,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

export default function Phase1Showcase() {
  return (
    <div className="min-h-screen bg-[#F5F5DC]">
      {/* Hero Section */}
      <div 
        className="relative h-[400px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: 'url(/images/archive-hero.png)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4" style={{ fontFamily: "'Noto Serif SC', serif" }}>
            天涯神贴库
          </h1>
          <p className="text-xl mb-2">互联网文化遗产资源站</p>
          <Badge variant="secondary" className="text-sm">
            Phase 1: 设计方案与架构展示
          </Badge>
        </div>
      </div>

      {/* Main Content */}
      <div className="container max-w-7xl mx-auto py-12 px-4">
        {/* Overview Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-white/90 backdrop-blur border-[#8B7355]/20 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <Palette className="w-10 h-10 mb-2 text-[#007BFF]" />
              <CardTitle className="text-xl" style={{ fontFamily: "'Noto Serif SC', serif" }}>
                设计美学
              </CardTitle>
              <CardDescription>数字考古风格</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-[#2D2D2D]/80">
                融合档案馆质感与现代交互,通过米黄纸张背景、衬线字体和档案卡片布局营造温暖怀旧氛围
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/90 backdrop-blur border-[#8B7355]/20 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <Code className="w-10 h-10 mb-2 text-[#007BFF]" />
              <CardTitle className="text-xl" style={{ fontFamily: "'Noto Serif SC', serif" }}>
                技术架构
              </CardTitle>
              <CardDescription>React 19 + Tailwind 4</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-[#2D2D2D]/80">
                基于 Vite 构建的现代化前端应用,使用 shadcn/ui 组件库和 Wouter 路由
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/90 backdrop-blur border-[#8B7355]/20 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <ImageIcon className="w-10 h-10 mb-2 text-[#007BFF]" />
              <CardTitle className="text-xl" style={{ fontFamily: "'Noto Serif SC', serif" }}>
                视觉资源
              </CardTitle>
              <CardDescription>5 张高质量图片</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-[#2D2D2D]/80">
                AI 生成的背景纹理、氛围图和图标,完美契合数字考古主题
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Tabs */}
        <Tabs defaultValue="design" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8 bg-white/80">
            <TabsTrigger value="design">设计方案</TabsTrigger>
            <TabsTrigger value="structure">文件结构</TabsTrigger>
            <TabsTrigger value="assets">视觉资源</TabsTrigger>
            <TabsTrigger value="features">核心功能</TabsTrigger>
          </TabsList>

          {/* Design Tab */}
          <TabsContent value="design">
            <Card className="bg-white/90 backdrop-blur border-[#8B7355]/20">
              <CardHeader>
                <CardTitle style={{ fontFamily: "'Noto Serif SC', serif" }}>
                  数字考古美学 (Digital Archaeology)
                </CardTitle>
                <CardDescription>
                  受博物馆展览和考古文献启发的设计理念
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Core Principles */}
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2" style={{ fontFamily: "'Noto Serif SC', serif" }}>
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    核心原则
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { title: "文献质感", desc: "模拟泛黄纸张、打字机字体、档案标签" },
                      { title: "克制的装饰", desc: "仅在关键位置使用装饰,保持内容为王" },
                      { title: "时间叙事", desc: "引导用户从发现到保存的转化路径" },
                      { title: "真实性", desc: "避免过度设计,保持互联网早期朴素感" }
                    ].map((item, i) => (
                      <div key={i} className="p-4 bg-[#F5F5DC]/50 rounded-lg border border-[#8B7355]/20">
                        <h4 className="font-semibold text-[#2D2D2D] mb-1">{item.title}</h4>
                        <p className="text-sm text-[#2D2D2D]/70">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator className="bg-[#8B7355]/20" />

                {/* Color Palette */}
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2" style={{ fontFamily: "'Noto Serif SC', serif" }}>
                    <Palette className="w-5 h-5 text-[#007BFF]" />
                    配色方案
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {[
                      { name: "米黄/旧纸张", color: "#F5F5DC", usage: "主背景" },
                      { name: "深炭黑", color: "#2D2D2D", usage: "文字" },
                      { name: "蓝", color: "#007BFF", usage: "CTA按钮" },
                      { name: "棕褐色", color: "#8B7355", usage: "装饰边框" },
                      { name: "印章红", color: "#C8102E", usage: "标签强调" }
                    ].map((item, i) => (
                      <div key={i} className="text-center">
                        <div 
                          className="w-full h-20 rounded-lg mb-2 border-2 border-[#8B7355]/30 shadow-md"
                          style={{ backgroundColor: item.color }}
                        />
                        <p className="text-xs font-semibold text-[#2D2D2D]">{item.name}</p>
                        <p className="text-xs text-[#2D2D2D]/60">{item.color}</p>
                        <Badge variant="outline" className="text-xs mt-1">{item.usage}</Badge>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator className="bg-[#8B7355]/20" />

                {/* Typography */}
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2" style={{ fontFamily: "'Noto Serif SC', serif" }}>
                    <FileText className="w-5 h-5 text-[#007BFF]" />
                    字体系统
                  </h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-white rounded-lg border border-[#8B7355]/20">
                      <h4 className="text-3xl font-bold mb-2" style={{ fontFamily: "'Noto Serif SC', serif" }}>
                        标题字体 - 思源宋体
                      </h4>
                      <p className="text-sm text-[#2D2D2D]/70">Noto Serif SC · 700 weight · 传统衬线体</p>
                    </div>
                    <div className="p-4 bg-white rounded-lg border border-[#8B7355]/20">
                      <h4 className="text-xl font-normal mb-2" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
                        正文字体 - 思源黑体
                      </h4>
                      <p className="text-sm text-[#2D2D2D]/70">Noto Sans SC · 400 weight · 现代无衬线体</p>
                    </div>
                    <div className="p-4 bg-white rounded-lg border border-[#8B7355]/20">
                      <h4 className="text-sm mb-2" style={{ fontFamily: "'Courier New', monospace" }}>
                        元数据字体 - Courier New
                      </h4>
                      <p className="text-sm text-[#2D2D2D]/70">用于日期、作者等信息,模拟打字机效果</p>
                    </div>
                  </div>
                </div>

                <Separator className="bg-[#8B7355]/20" />

                {/* Signature Elements */}
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2" style={{ fontFamily: "'Noto Serif SC', serif" }}>
                    <Flame className="w-5 h-5 text-orange-500" />
                    标志性元素
                  </h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="p-4 bg-white rounded-lg border border-[#8B7355]/20 text-center">
                      <img src="/images/flame-icon.png" alt="火焰图标" className="w-16 h-16 mx-auto mb-2" />
                      <h4 className="font-semibold text-[#2D2D2D] mb-1">火苗热度指标</h4>
                      <p className="text-xs text-[#2D2D2D]/70">显示帖子热度(1-5级)</p>
                    </div>
                    <div className="p-4 bg-white rounded-lg border border-[#8B7355]/20 text-center">
                      <div className="w-16 h-16 mx-auto mb-2 bg-gradient-to-b from-[#F5F5DC] to-transparent" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 80%, 95% 85%, 90% 82%, 85% 88%, 80% 84%, 75% 90%, 70% 85%, 65% 92%, 60% 86%, 55% 94%, 50% 88%, 45% 95%, 40% 90%, 35% 93%, 30% 88%, 25% 94%, 20% 89%, 15% 92%, 10% 87%, 5% 91%, 0 86%)' }} />
                      <h4 className="font-semibold text-[#2D2D2D] mb-1">纸张撕裂效果</h4>
                      <p className="text-xs text-[#2D2D2D]/70">内容预览底部使用 CSS clip-path</p>
                    </div>
                    <div className="p-4 bg-white rounded-lg border border-[#8B7355]/20 text-center">
                      <img src="/images/seal-stamp.png" alt="印章" className="w-16 h-16 mx-auto mb-2 opacity-80" />
                      <h4 className="font-semibold text-[#2D2D2D] mb-1">印章式标签</h4>
                      <p className="text-xs text-[#2D2D2D]/70">分类标签设计为圆形印章</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Structure Tab */}
          <TabsContent value="structure">
            <Card className="bg-white/90 backdrop-blur border-[#8B7355]/20">
              <CardHeader>
                <CardTitle style={{ fontFamily: "'Noto Serif SC', serif" }}>
                  项目文件结构
                </CardTitle>
                <CardDescription>
                  基于 React 19 + Vite 的现代化前端架构
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[600px] w-full rounded-md border border-[#8B7355]/20 p-4 bg-[#2D2D2D] text-green-400 font-mono text-sm">
                  <pre className="whitespace-pre">{`tianya-archive/
├── client/                          # 前端应用根目录
│   ├── public/                      # 静态资源目录
│   │   ├── images/                  # 图片资源
│   │   │   ├── hero-background.png  # 首页背景纹理 ✓
│   │   │   ├── archive-hero.png     # 档案馆氛围图 ✓
│   │   │   ├── reading-atmosphere.png # 阅读氛围图 ✓
│   │   │   ├── flame-icon.png       # 火焰热度图标 ✓
│   │   │   └── seal-stamp.png       # 印章标签图标 ✓
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
│   │   │   ├── Phase1Showcase.tsx   # Phase 1 展示页 ✓
│   │   │   └── NotFound.tsx         # 404 页面
│   │   │
│   │   ├── lib/                     # 工具函数
│   │   │   ├── utils.ts             # 通用工具函数
│   │   │   └── constants.ts         # 常量定义
│   │   │
│   │   ├── data/                    # 数据文件
│   │   │   ├── posts.ts             # 神贴数据
│   │   │   └── links.ts             # 网盘链接配置
│   │   │
│   │   ├── contexts/                # React 上下文
│   │   │   └── ThemeContext.tsx     # 主题上下文
│   │   │
│   │   ├── App.tsx                  # 应用根组件(路由)
│   │   ├── main.tsx                 # 应用入口
│   │   └── index.css                # 全局样式
│   │
│   └── index.html                   # HTML 模板
│
├── server/                          # 服务器目录
│   └── index.ts                     # Express 服务器
│
├── shared/                          # 共享代码
│   └── const.ts                     # 共享常量
│
├── ideas.md                         # 设计方案头脑风暴 ✓
├── ARCHITECTURE.md                  # 架构文档 ✓
├── package.json                     # 项目依赖配置
├── tsconfig.json                    # TypeScript 配置
├── tailwind.config.js               # Tailwind 配置
└── vite.config.ts                   # Vite 配置

✓ = 已完成`}</pre>
                </ScrollArea>
                
                <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                    <Folder className="w-5 h-5" />
                    关键目录说明
                  </h4>
                  <ul className="text-sm text-blue-800 space-y-2">
                    <li><strong>client/public/images/</strong> - 所有静态图片资源,已生成 5 张高质量图片</li>
                    <li><strong>client/src/components/</strong> - 按功能模块组织的可复用组件</li>
                    <li><strong>client/src/pages/</strong> - 页面级组件,对应路由</li>
                    <li><strong>client/src/data/</strong> - 神贴数据和链接配置中心</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Assets Tab */}
          <TabsContent value="assets">
            <Card className="bg-white/90 backdrop-blur border-[#8B7355]/20">
              <CardHeader>
                <CardTitle style={{ fontFamily: "'Noto Serif SC', serif" }}>
                  视觉资源展示
                </CardTitle>
                <CardDescription>
                  AI 生成的高质量图片,完美契合数字考古主题
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Hero Background */}
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2" style={{ fontFamily: "'Noto Serif SC', serif" }}>
                    <ImageIcon className="w-5 h-5 text-[#007BFF]" />
                    背景纹理
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <img 
                        src="/images/hero-background.png" 
                        alt="背景纹理" 
                        className="w-full h-48 object-cover rounded-lg border-2 border-[#8B7355]/30 shadow-lg"
                      />
                      <p className="text-sm text-[#2D2D2D]/70">
                        <strong>hero-background.png</strong> - 米黄色纸张纹理,带有咖啡渍和网格线
                      </p>
                    </div>
                    <div className="space-y-2">
                      <img 
                        src="/images/archive-hero.png" 
                        alt="档案馆氛围" 
                        className="w-full h-48 object-cover rounded-lg border-2 border-[#8B7355]/30 shadow-lg"
                      />
                      <p className="text-sm text-[#2D2D2D]/70">
                        <strong>archive-hero.png</strong> - 早期网吧/档案馆场景,金色光线
                      </p>
                    </div>
                  </div>
                </div>

                <Separator className="bg-[#8B7355]/20" />

                {/* Atmosphere */}
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2" style={{ fontFamily: "'Noto Serif SC', serif" }}>
                    <ImageIcon className="w-5 h-5 text-[#007BFF]" />
                    氛围图片
                  </h3>
                  <div className="space-y-2">
                    <img 
                      src="/images/reading-atmosphere.png" 
                      alt="阅读氛围" 
                      className="w-full max-w-md mx-auto h-64 object-cover rounded-lg border-2 border-[#8B7355]/30 shadow-lg"
                    />
                    <p className="text-sm text-[#2D2D2D]/70 text-center">
                      <strong>reading-atmosphere.png</strong> - 温馨的阅读场景,台灯与咖啡
                    </p>
                  </div>
                </div>

                <Separator className="bg-[#8B7355]/20" />

                {/* Icons */}
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2" style={{ fontFamily: "'Noto Serif SC', serif" }}>
                    <ImageIcon className="w-5 h-5 text-[#007BFF]" />
                    功能图标
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-6 bg-white rounded-lg border border-[#8B7355]/20 text-center">
                      <img 
                        src="/images/flame-icon.png" 
                        alt="火焰图标" 
                        className="w-32 h-32 mx-auto mb-3"
                      />
                      <p className="text-sm text-[#2D2D2D]/70">
                        <strong>flame-icon.png</strong> - 热度指标图标,橙黄渐变
                      </p>
                    </div>
                    <div className="p-6 bg-white rounded-lg border border-[#8B7355]/20 text-center">
                      <img 
                        src="/images/seal-stamp.png" 
                        alt="印章图标" 
                        className="w-32 h-32 mx-auto mb-3"
                      />
                      <p className="text-sm text-[#2D2D2D]/70">
                        <strong>seal-stamp.png</strong> - 中国传统印章,红色半透明
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Features Tab */}
          <TabsContent value="features">
            <Card className="bg-white/90 backdrop-blur border-[#8B7355]/20">
              <CardHeader>
                <CardTitle style={{ fontFamily: "'Noto Serif SC', serif" }}>
                  核心功能模块
                </CardTitle>
                <CardDescription>
                  基于转化漏斗设计的功能架构
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Homepage */}
                <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                      1
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 text-blue-900" style={{ fontFamily: "'Noto Serif SC', serif" }}>
                        首页 - 发现神贴
                      </h3>
                      <p className="text-sm text-blue-800 mb-4">
                        路由: <code className="bg-white px-2 py-1 rounded">/</code>
                      </p>
                      <div className="space-y-2 text-sm text-blue-900">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-600" />
                          <span><strong>搜索功能</strong> - 全局搜索栏,支持按标题/作者检索</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-600" />
                          <span><strong>分类导航</strong> - 金融/房产、官场/纪实、玄学/奇闻、历史/考古</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-600" />
                          <span><strong>神贴卡片</strong> - 瀑布流布局,显示标题、热度、摘要</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-600" />
                          <span><strong>交互动画</strong> - Hover 上浮效果,点击跳转详情页</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Detail Page */}
                <div className="p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg border border-orange-200">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                      2
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 text-orange-900" style={{ fontFamily: "'Noto Serif SC', serif" }}>
                        详情页 - 内容钩子
                      </h3>
                      <p className="text-sm text-orange-800 mb-4">
                        路由: <code className="bg-white px-2 py-1 rounded">/post/:id</code>
                      </p>
                      <div className="space-y-2 text-sm text-orange-900">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-600" />
                          <span><strong>内容预览</strong> - 仅显示前 20% 精华内容</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-600" />
                          <span><strong>纸张撕裂效果</strong> - 底部使用 CSS clip-path 模拟</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-600" />
                          <span><strong>渐变遮罩</strong> - 从透明到米黄色的平滑过渡</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-600" />
                          <span><strong>沉浸式排版</strong> - 单栏居中,最大宽度 720px</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-lg border border-green-200">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                      3
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 text-green-900" style={{ fontFamily: "'Noto Serif SC', serif" }}>
                        转化引导 - CTA 卡片
                      </h3>
                      <p className="text-sm text-green-800 mb-4">
                        核心转化组件: <code className="bg-white px-2 py-1 rounded">DownloadCTA.tsx</code>
                      </p>
                      <div className="space-y-2 text-sm text-green-900">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-600" />
                          <span><strong>主按钮</strong> - "保存至网盘 (不限速)" 蓝配色</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-600" />
                          <span><strong>社会证明</strong> - "已有 10k+ 人转存,资源有效"</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-600" />
                          <span><strong>福利引导</strong> - "新用户转存可领 1TB 空间"</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-600" />
                          <span><strong>加载弹窗</strong> - 1.5 秒缓冲,提示用户操作步骤</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <Separator className="bg-[#8B7355]/20" />

                {/* Data Structure */}
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2" style={{ fontFamily: "'Noto Serif SC', serif" }}>
                    <Code className="w-5 h-5 text-[#007BFF]" />
                    数据结构设计
                  </h3>
                  <div className="p-4 bg-[#2D2D2D] rounded-lg text-green-400 font-mono text-sm overflow-x-auto">
                    <pre>{`interface Post {
  id: string;                // 唯一标识
  title: string;             // 标题
  author: string;            // 作者
  category: Category;        // 分类
  heat: number;              // 热度(1-5)
  excerpt: string;           // 摘要(100-150字)
  content: string;           // 完整内容(前20%)
  quarkLink: string;         // 网盘链接
  seoTitle: string;          // SEO 标题
  seoDescription: string;    // SEO 描述
  savedCount: number;        // 转存人数
}

type Category = 
  | '金融/房产' 
  | '官场/纪实' 
  | '玄学/奇闻' 
  | '历史/考古';`}</pre>
                  </div>
                </div>

                <Separator className="bg-[#8B7355]/20" />

                {/* SEO */}
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2" style={{ fontFamily: "'Noto Serif SC', serif" }}>
                    <FileText className="w-5 h-5 text-[#007BFF]" />
                    SEO 优化策略
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                      <h4 className="font-semibold text-purple-900 mb-2">Meta 标签模板</h4>
                      <code className="text-xs text-purple-800 block bg-white p-2 rounded">
                        {`<title>{神贴名称} - 天涯神贴在线阅读及PDF下载</title>`}
                      </code>
                    </div>
                    <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                      <h4 className="font-semibold text-purple-900 mb-2">结构化数据</h4>
                      <code className="text-xs text-purple-800 block bg-white p-2 rounded">
                        {`JSON-LD Article schema`}
                      </code>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Next Steps */}
        <Card className="mt-12 bg-gradient-to-br from-[#007BFF]/10 to-[#007BFF]/5 border-[#007BFF]/30">
          <CardHeader>
            <CardTitle className="flex items-center gap-2" style={{ fontFamily: "'Noto Serif SC', serif" }}>
              <ArrowRight className="w-6 h-6 text-[#007BFF]" />
              下一步:Phase 2 开发计划
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-white/80 rounded-lg">
                <h4 className="font-semibold text-[#2D2D2D] mb-2">1. 实现首页</h4>
                <ul className="text-sm text-[#2D2D2D]/70 space-y-1">
                  <li>• 创建 PostCard 组件</li>
                  <li>• 实现响应式网格布局</li>
                  <li>• 添加搜索和筛选功能</li>
                </ul>
              </div>
              <div className="p-4 bg-white/80 rounded-lg">
                <h4 className="font-semibold text-[#2D2D2D] mb-2">2. 实现详情页</h4>
                <ul className="text-sm text-[#2D2D2D]/70 space-y-1">
                  <li>• 创建 ContentPreview 组件</li>
                  <li>• 实现 DownloadCTA 卡片</li>
                  <li>• 添加跳转加载弹窗</li>
                </ul>
              </div>
              <div className="p-4 bg-white/80 rounded-lg">
                <h4 className="font-semibold text-[#2D2D2D] mb-2">3. 填充演示数据</h4>
                <ul className="text-sm text-[#2D2D2D]/70 space-y-1">
                  <li>• 添加 3-5 个精选神贴</li>
                  <li>• 配置网盘链接</li>
                  <li>• 生成 SEO 元数据</li>
                </ul>
              </div>
              <div className="p-4 bg-white/80 rounded-lg">
                <h4 className="font-semibold text-[#2D2D2D] mb-2">4. 测试与优化</h4>
                <ul className="text-sm text-[#2D2D2D]/70 space-y-1">
                  <li>• 跨浏览器测试</li>
                  <li>• 移动端适配验证</li>
                  <li>• 性能优化(Lighthouse &gt; 90)</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Footer */}
      <footer className="bg-[#2D2D2D] text-white py-8 mt-12">
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm opacity-80">
            天涯神贴库 · Phase 1 设计方案展示 · 2026-01-04
          </p>
          <p className="text-xs opacity-60 mt-2">
            基于数字考古美学 · 由 Manus AI 设计与开发
          </p>
        </div>
      </footer>
    </div>
  );
}
