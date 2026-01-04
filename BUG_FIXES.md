# 天涯神贴库网站 - Bug 修复记录

## 修复内容

### 1. 友情链接样式优化
**问题**: 友情链接原本设计为卡片网格,占用过多页面空间,用户希望改为简单的文本链接放在页脚

**解决方案**:
- 创建新组件 `SimpleFooterLinks.tsx`,将友情链接改为简单的文本链接列表
- 在页脚中添加 6 个友情链接(天涯论坛、知乎、微博、豆瓣、小红书、B站)
- 使用竖线 `|` 分隔符,保持简洁风格
- 移除原来的 `FriendlyLinks.tsx` 卡片组件

**修改文件**:
- 新建: `client/src/components/home/SimpleFooterLinks.tsx`
- 修改: `client/src/pages/HomePage.tsx` - 移除 FriendlyLinks 导入,添加 SimpleFooterLinks

### 2. "全部神贴"分类 Bug 修复
**问题**: 点击"全部神贴"分类按钮时,页面显示"未找到相关神贴"

**根本原因**: 分类导航中"全部神贴"按钮的 value 是 `'全部'`,但 `getPostsByCategory()` 函数检查的是 `'全部神贴'`,导致条件不匹配

**解决方案**:
- 修改 `client/src/data/posts.ts` 中的 `getPostsByCategory()` 函数
- 将条件从 `if (category === '全部神贴')` 改为 `if (category === '全部')`
- 现在点击"全部神贴"按钮能正确显示所有 25 篇神贴

**修改文件**:
- 修改: `client/src/data/posts.ts` - 第 415 行

## 验证

### 修复 1 验证
- ✅ 页脚显示 6 个友情链接
- ✅ 链接使用竖线分隔,风格简洁
- ✅ 所有链接都能正常点击并跳转

### 修复 2 验证
- ✅ 点击"全部神贴"按钮后显示全部 25 篇神贴
- ✅ 不再显示"未找到相关神贴"错误信息
- ✅ 其他分类(金融/房产、官场/纪实等)筛选功能正常

## 代码变更统计
- 新增文件: 1 个 (`SimpleFooterLinks.tsx`)
- 修改文件: 2 个 (`HomePage.tsx`, `posts.ts`)
- 删除文件: 0 个 (保留 `FriendlyLinks.tsx` 以备后用)

## 部署说明
所有修复已完成,无需额外配置。直接部署即可生效。
