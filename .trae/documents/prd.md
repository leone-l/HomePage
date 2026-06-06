## 1. Product Overview
个人主页是一个展示个人信息、作品和联系方式的单页网站，采用现代化设计风格，具有良好的视觉效果和响应式布局。
- 主要用途：个人品牌展示、作品展示、联系方式呈现
- 目标用户：想要展示个人专业形象的设计师、开发者、自由职业者等

## 2. Core Features

### 2.2 Feature Module
1. **Home page**: 英雄区、个人介绍、技能展示、作品展示、联系方式、页脚
2. **UI 资产文件夹**: 便于用户替换图片和图标资源

### 2.3 Page Details
| Page Name | Module Name | Feature description |
|-----------|-------------|---------------------|
| Home page | Hero section | 展示个人姓名、标语、背景图片，有平滑动画效果 |
| Home page | About section | 个人介绍、头像、简短描述 |
| Home page | Skills section | 技能列表，使用图标展示 |
| Home page | Portfolio section | 作品卡片网格，支持悬停效果 |
| Home page | Contact section | 联系方式，社交媒体链接 |
| Home page | Footer | 版权信息 |

## 3. Core Process
用户访问个人主页，首先看到英雄区，然后通过滚动浏览各个板块，了解个人信息、技能和作品，最后可以通过联系方式与个人取得联系。

## 4. User Interface Design
### 4.1 Design Style
- 主色调：深蓝色 (#0a192f)，辅色调：青绿色 (#64ffda)
- 按钮风格：圆角、悬浮效果
- 字体：使用 JetBrains Mono 作为代码字体，Noto Sans 作为正文
- 布局风格：卡片式、分块布局、响应式网格
- 图标风格：线性图标、简洁现代

### 4.2 Page Design Overview
| Page Name | Module Name | UI Elements |
|-----------|-------------|-------------|
| Home page | Hero section | 全屏背景、渐变遮罩、居中文字、向下滚动提示 |
| Home page | About section | 双列布局、头像、文字描述 |
| Home page | Skills section | 网格布局、图标 + 文字标签 |
| Home page | Portfolio section | 响应式卡片网格、悬停放大效果 |
| Home page | Contact section | 居中布局、联系表单或链接 |
| Home page | Footer | 简洁版权信息、返回顶部按钮 |

### 4.3 Responsiveness
- Desktop-first 设计，自适应各种屏幕尺寸
- 移动端优化布局和字体大小
- 触摸友好的交互

### 4.4 UI Assets
- 创建 `assets` 文件夹存放图片资源
- 用户可替换 `hero-bg.jpg`、`avatar.jpg` 等图片
- 支持自定义图标和作品缩略图
