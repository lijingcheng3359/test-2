# 唐诗学习网页设计文档

## 1. 概述

### 1.1 项目目标
开发一个唐诗学习网页，用于展示和学习经典的唐诗作品。每首唐诗以卡片形式展示，包含诗名、作者信息、诗句正文及拼音标注。

### 1.2 功能需求
- 展示11首经典唐诗：江南、风、古朗月行、悯农（一）、咏鹅、小池、池上、寻隐者不遇、静夜思、赠汪伦、春晓
- 每首诗以卡片形式展示，包含：
  - 诗名及拼音
  - 作者朝代及拼音
  - 作者名及拼音
  - 诗句正文（每行两句诗）
  - 诗句拼音
  - 完整拼音（标题+朝代+作者+诗句）
- 卡片按顺序依次展示，点击"下一首"按钮后显示下一张卡片
- 到最后一张卡片后重新从第一张开始

## 2. 技术架构

### 2.1 技术栈
- HTML5：页面结构
- CSS3：样式设计和响应式布局
- JavaScript (ES6+)：交互逻辑和数据处理
- 模块化组织代码结构

### 2.2 项目结构
```
project/
├── index.html          # 主页面
├── css/
│   └── style.css       # 样式文件
├── js/
│   ├── data.js         # 唐诗数据
│   └── main.js         # 主要交互逻辑
└── README.md           # 项目说明
```

## 3. 前端设计

### 3.1 页面结构
- 顶部标题区域
- 唐诗卡片展示区域
- 底部操作按钮区域

### 3.2 响应式设计
- 适配手机、平板和桌面设备
- 使用Flexbox或Grid布局实现响应式卡片展示

### 3.3 组件设计

#### 3.3.1 唐诗卡片组件
```html
<div class="poem-card">
  <h2 class="poem-title">诗名</h2>
  <div class="poem-title-pinyin">诗名拼音</div>
  <div class="poem-author">
    <span class="author-dynasty">朝代</span>
    <span class="author-name">作者</span>
  </div>
  <div class="poem-author-pinyin">
    <span class="author-dynasty-pinyin">朝代拼音</span>
    <span class="author-name-pinyin">作者拼音</span>
  </div>
  <div class="poem-content">
    <!-- 诗句内容，每行两句 -->
  </div>
  <div class="poem-content-pinyin">
    <!-- 诗句拼音 -->
  </div>
  <div class="poem-pinyin">
    <!-- 完整拼音 -->
  </div>
</div>
```

#### 3.3.2 完整页面结构
```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>唐诗学习</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <header>
    <h1>唐诗学习</h1>
  </header>
  
  <main>
    <div class="poem-container">
      <div class="poem-card">
        <h2 class="poem-title">诗名</h2>
        <div class="poem-title-pinyin">诗名拼音</div>
        <div class="poem-author">
          <span class="author-dynasty">朝代</span>
          <span class="author-name">作者</span>
        </div>
        <div class="poem-author-pinyin">
          <span class="author-dynasty-pinyin">朝代拼音</span>
          <span class="author-name-pinyin">作者拼音</span>
        </div>
        <div class="poem-content">
          <!-- 诗句内容，每行两句 -->
        </div>
        <div class="poem-content-pinyin">
          <!-- 诗句拼音 -->
        </div>
        <div class="poem-pinyin">
          <!-- 完整拼音 -->
        </div>
      </div>
    </div>
  </main>
  
  <footer>
    <button class="next-button">下一首</button>
  </footer>
  
  <script type="module" src="js/main.js"></script>
</body>
</html>
```

## 4. 数据结构设计

### 4.1 唐诗数据模型
```javascript
{
  id: 1,
  title: "诗名",
  titlePinyin: "诗名拼音",
  dynasty: "朝代",
  dynastyPinyin: "朝代拼音",
  author: "作者",
  authorPinyin: "作者拼音",
  content: [
    ["诗句1", "诗句2"],
    ["诗句3", "诗句4"]
  ],
  contentPinyin: "诗句拼音",
  pinyin: "完整拼音（标题+朝代+作者+诗句）"
}
```

### 4.2 完整数据结构
```javascript
const poems = [
  {
    id: 1,
    title: "江南",
    titlePinyin: "Jiāng nán",
    dynasty: "汉代",
    dynastyPinyin: "Hàn dài",
    author: "佚名",
    authorPinyin: "Yì míng",
    content: [
      ["江南可采莲，莲叶何田田。", "鱼戏莲叶间。"]
    ],
    contentPinyin: "Jiāng nán kě cǎi lián, lián yè hé tián tián. Yú xì lián yè jiān.",
    pinyin: "Jiāng nán - Hàn dài · Yì míng\nJiāng nán kě cǎi lián, lián yè hé tián tián. Yú xì lián yè jiān."
  },
  {
    id: 2,
    title: "风",
    titlePinyin: "Fēng",
    dynasty: "唐代",
    dynastyPinyin: "Táng dài",
    author: "李峤",
    authorPinyin: "Lǐ qiáo",
    content: [
      ["解落三秋叶，能开二月花。", "过江千尺浪，入竹万竿斜。"]
    ],
    contentPinyin: "Jiě luò sān qiū yè, néng kāi èr yuè huā. Guò jiāng qiān chǐ làng, rù zhú wàn gān xié.",
    pinyin: "Fēng - Táng dài · Lǐ qiáo\nJiě luò sān qiū yè, néng kāi èr yuè huā. Guò jiāng qiān chǐ làng, rù zhú wàn gān xié."
  },
  {
    id: 3,
    title: "古朗月行",
    titlePinyin: "Gǔ lǎng yuè xíng",
    dynasty: "唐代",
    dynastyPinyin: "Táng dài",
    author: "李白",
    authorPinyin: "Lǐ bái",
    content: [
      ["小时不识月，呼作白玉盘。", "又疑瑶台镜，飞在青云端。"]
    ],
    contentPinyin: "Xiǎo shí bù shí yuè, hū zuò bái yù pán. Yòu yí yáo tái jìng, fēi zài qīng yún duān.",
    pinyin: "Gǔ lǎng yuè xíng - Táng dài · Lǐ bái\nXiǎo shí bù shí yuè, hū zuò bái yù pán. Yòu yí yáo tái jìng, fēi zài qīng yún duān."
  },
  {
    id: 4,
    title: "悯农（一）",
    titlePinyin: "Mǐn nóng (yī)",
    dynasty: "唐代",
    dynastyPinyin: "Táng dài",
    author: "李绅",
    authorPinyin: "Lǐ shēn",
    content: [
      ["锄禾日当午，汗滴禾下土。", "谁知盘中餐，粒粒皆辛苦。"]
    ],
    contentPinyin: "Chú hé rì dāng wǔ, hàn dī hé xià tǔ. Shéi zhī pán zhōng cān, lì lì jiē xīn kǔ.",
    pinyin: "Mǐn nóng (yī) - Táng dài · Lǐ shēn\nChú hé rì dāng wǔ, hàn dī hé xià tǔ. Shéi zhī pán zhōng cān, lì lì jiē xīn kǔ."
  },
  {
    id: 5,
    title: "咏鹅",
    titlePinyin: "Yǒng é",
    dynasty: "唐代",
    dynastyPinyin: "Táng dài",
    author: "骆宾王",
    authorPinyin: "Luò bīn wáng",
    content: [
      ["鹅，鹅，鹅，曲项向天歌。", "白毛浮绿水，红掌拨清波。"]
    ],
    contentPinyin: "É, é, é, qū xiàng xiàng tiān gē. Bái máo fú lǜ shuǐ, hóng zhǎng bō qīng bō.",
    pinyin: "Yǒng é - Táng dài · Luò bīn wáng\nÉ, é, é, qū xiàng xiàng tiān gē. Bái máo fú lǜ shuǐ, hóng zhǎng bō qīng bō."
  },
  {
    id: 6,
    title: "小池",
    titlePinyin: "Xiǎo chí",
    dynasty: "宋代",
    dynastyPinyin: "Sòng dài",
    author: "杨万里",
    authorPinyin: "Yáng wàn lǐ",
    content: [
      ["泉眼无声惜细流，树阴照水爱晴柔。", "小荷才露尖尖角，早有蜻蜓立上头。"]
    ],
    contentPinyin: "Quán yǎn wú shēng xī xì liú, shù yīn zhào shuǐ ài qíng róu. Xiǎo hé cái lù jiān jiān jiǎo, zǎo yǒu qīng tíng lì shàng tóu.",
    pinyin: "Xiǎo chí - Sòng dài · Yáng wàn lǐ\nQuán yǎn wú shēng xī xì liú, shù yīn zhào shuǐ ài qíng róu. Xiǎo hé cái lù jiān jiān jiǎo, zǎo yǒu qīng tíng lì shàng tóu."
  },
  {
    id: 7,
    title: "池上",
    titlePinyin: "Chí shàng",
    dynasty: "唐代",
    dynastyPinyin: "Táng dài",
    author: "白居易",
    authorPinyin: "Bái jū yì",
    content: [
      ["小娃撑小艇，偷采白莲回。", "不解藏踪迹，浮萍一道开。"]
    ],
    contentPinyin: "Xiǎo wá chēng xiǎo tǐng, tōu cǎi bái lián huí. Bù jiě cáng zōng jì, fú píng yī dào kāi.",
    pinyin: "Chí shàng - Táng dài · Bái jū yì\nXiǎo wá chēng xiǎo tǐng, tōu cǎi bái lián huí. Bù jiě cáng zōng jì, fú píng yī dào kāi."
  },
  {
    id: 8,
    title: "寻隐者不遇",
    titlePinyin: "Xún yǐn zhě bù yù",
    dynasty: "唐代",
    dynastyPinyin: "Táng dài",
    author: "贾岛",
    authorPinyin: "Jiǎ dǎo",
    content: [
      ["松下问童子，言师采药去。", "只在此山中，云深不知处。"]
    ],
    contentPinyin: "Sōng xià wèn tóng zǐ, yán shī cǎi yào qù. Zhǐ zài cǐ shān zhōng, yún shēn bù zhī chù.",
    pinyin: "Xún yǐn zhě bù yù - Táng dài · Jiǎ dǎo\nSōng xià wèn tóng zǐ, yán shī cǎi yào qù. Zhǐ zài cǐ shān zhōng, yún shēn bù zhī chù."
  },
  {
    id: 9,
    title: "静夜思",
    titlePinyin: "Jìng yè sī",
    dynasty: "唐代",
    dynastyPinyin: "Táng dài",
    author: "李白",
    authorPinyin: "Lǐ bái",
    content: [
      ["床前明月光，疑是地上霜。", "举头望明月，低头思故乡。"]
    ],
    contentPinyin: "Chuáng qián míng yuè guāng, yí shì dì shàng shuāng. Jǔ tóu wàng míng yuè, dī tóu sī gù xiāng.",
    pinyin: "Jìng yè sī - Táng dài · Lǐ bái\nChuáng qián míng yuè guāng, yí shì dì shàng shuāng. Jǔ tóu wàng míng yuè, dī tóu sī gù xiāng."
  },
  {
    id: 10,
    title: "赠汪伦",
    titlePinyin: "Zèng wāng lún",
    dynasty: "唐代",
    dynastyPinyin: "Táng dài",
    author: "李白",
    authorPinyin: "Lǐ bái",
    content: [
      ["李白乘舟将欲行，忽闻岸上踏歌声。", "桃花潭水深千尺，不及汪伦送我情。"]
    ],
    contentPinyin: "Lǐ bái chéng zhōu jiāng yù xíng, hū wén àn shàng tà gē shēng. Táo huā tán shuǐ shēn qiān chǐ, bù jí wāng lún sòng wǒ qíng.",
    pinyin: "Zèng wāng lún - Táng dài · Lǐ bái\nLǐ bái chéng zhōu jiāng yù xíng, hū wén àn shàng tà gē shēng. Táo huā tán shuǐ shēn qiān chǐ, bù jí wāng lún sòng wǒ qíng."
  },
  {
    id: 11,
    title: "春晓",
    titlePinyin: "Chūn xiǎo",
    dynasty: "唐代",
    dynastyPinyin: "Táng dài",
    author: "孟浩然",
    authorPinyin: "Mèng hào rán",
    content: [
      ["春眠不觉晓，处处闻啼鸟。", "夜来风雨声，花落知多少。"]
    ],
    contentPinyin: "Chūn mián bù jué xiǎo, chù chù wén tí niǎo. Yè lái fēng yǔ shēng, huā luò zhī duō shǎo.",
    pinyin: "Chūn xiǎo - Táng dài · Mèng hào rán\nChūn mián bù jué xiǎo, chù chù wén tí niǎo. Yè lái fēng yǔ shēng, huā luò zhī duō shǎo."
  }
];
```

### 4.3 数据组织
数据将以数组形式存储在`js/data.js`文件中，每首诗作为一个对象。

## 5. 交互逻辑设计

### 5.1 卡片切换逻辑
1. 页面加载时显示第一首诗
2. 点击"下一首"按钮后切换到下一首诗
3. 到达最后一首诗后，点击"下一首"按钮回到第一首诗

### 5.2 状态管理
```javascript
let currentPoemIndex = 0;  // 当前显示的诗索引
const poems = [...];       // 诗列表数据
```

### 5.3 事件处理
- 监听"完成"按钮点击事件
- 更新卡片内容
- 管理索引循环

### 5.4 核心函数设计
```javascript
// 切换到下一首诗
function nextPoem() {
  // 更新索引
  currentPoemIndex = (currentPoemIndex + 1) % poems.length;
  // 更新页面显示
  updatePoemDisplay();
}

// 更新诗歌显示
function updatePoemDisplay() {
  // 获取当前诗歌数据
  const poem = poems[currentPoemIndex];
  // 更新DOM元素
  document.querySelector('.poem-title').textContent = poem.title;
  document.querySelector('.poem-title-pinyin').textContent = poem.titlePinyin;
  document.querySelector('.author-dynasty').textContent = poem.dynasty;
  document.querySelector('.author-name').textContent = poem.author;
  document.querySelector('.author-dynasty-pinyin').textContent = poem.dynastyPinyin;
  document.querySelector('.author-name-pinyin').textContent = poem.authorPinyin;
  
  // 更新诗句内容
  const contentContainer = document.querySelector('.poem-content');
  contentContainer.innerHTML = '';
  poem.content.forEach(line => {
    const lineElement = document.createElement('div');
    lineElement.className = 'poem-line';
    lineElement.innerHTML = `<p>${line[0]}</p><p>${line[1]}</p>`;
    contentContainer.appendChild(lineElement);
  });
  
  // 更新诗句拼音
  document.querySelector('.poem-content-pinyin').textContent = poem.contentPinyin;
  
  // 更新完整拼音
  document.querySelector('.poem-pinyin').textContent = poem.pinyin;
}

// 初始化应用
function initApp() {
  // 绑定按钮事件
  document.querySelector('.next-button').addEventListener('click', nextPoem);
  // 显示第一首诗
  updatePoemDisplay();
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', initApp);
```

## 6. 样式设计

### 6.1 卡片样式
- 圆角边框设计
- 阴影效果
- 适当的内边距和外边距
- 文字居中对齐

### 6.2 响应式适配
- 使用媒体查询适配不同屏幕尺寸
- 移动端优化触摸体验
- 文字大小自适应

### 6.3 样式规范
```css
.poem-card {
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  background-color: #fff;
}

.poem-content {
  font-size: 18px;
  line-height: 1.6;
  margin: 20px 0;
}

.poem-pinyin {
  font-size: 14px;
  color: #666;
  margin-top: 15px;
}
```

## 7. 测试策略

### 7.1 功能测试
- 验证卡片内容正确显示
- 验证"下一首"按钮功能
- 验证索引循环功能

### 7.2 兼容性测试
- 在不同浏览器中测试显示效果
- 在不同设备尺寸下测试响应式布局

### 7.3 用户体验测试
- 验证界面美观性和易用性
- 确保文字大小适合阅读
- 检查颜色搭配的舒适度

