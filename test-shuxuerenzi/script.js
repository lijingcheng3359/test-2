// 词组列表
// const wordList = ['错误', '合适', '那么', '如果', '认识', '数一数', '比一比', '涂一涂', '画一画'];
const wordList = ['上下', '左右', '前后', '多少', '对错', '加减', '方法', '和差', '同样', '不同', '高矮', '长短', '轻重', '大小', '远近', '快慢', '图形', '正方体', '长方体', '正方形', '长方形', '圆柱', '球', '看图', '选择', '判断', '按照', '要求', '顺序', '排列', '计算', '得数', '准确', '去掉', '添加', '比较', '现在', '接着', '组成', '相比', '读一读', '写一写', '数一数', '比一比', '涂一涂', '画一画', '填一填', '连一连', '合起来', '圈起来', '近一些', '认位置', '一共', '原来', '还有', '剩下', '涂色', '红色', '绿色', '黄色', '蓝色', '同样多', '自己', '爸妈', '动物', '课作本', '直尺', '数学书', '口算本', '第几页', '练习册', '课本', '作业', '排队', '写数', '读数', '写作', '读作', '列式', '解答', '钟表', '计数器', '提出', '解决', '问题', '被减数', '减数', '差', '加数', '相加', '和', '或', '摆一摆', '序号', '等于', '适当', '从左往右', '你我他', '从小到大', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '百', '五比三多', '六比九少', '九班在四班上面', '四班在九班下面', '一在二的左边', '二在一的右边', '数一数', '比一比', '摆一摆', '读一读', '做一做', '想一想', '连一连', '填一填', '找一找', '同样多', '上下', '大小', '长短', '高矮', '粗细', '前', '后', '左', '右', '边', '写一写', '涂一涂', '圈一圈', '划一划', '算一算', '还剩下', '合起来', '倒着数', '第几', '遮住', '等于', '大于', '加法', '减法', '一共', '还有', '物体', '图形', '形状', '哪些', '圆柱', '正方体', '长方体', '球', '拼一拼', '搭一搭', '分成两', '按顺序', '告诉', '知道', '问题', '解决', '卡片', '条', '只', '个', '面', '页', '辆', '朵', '盒', '小棒', '捆', '个位', '十位', '加数', '和', '被减数', '减数', '差', '大约', '等于', '组成', '钟表', '时间', '时分', '分针', '进位', '凑成', '发现', '规律', '括号', '照样', '根据', '日', '期', '选择', '序号', '相应', '做', '上下', '左右', '前后', '多少', '对错', '加减', '方法', '和差', '同样', '不同', '高矮', '长短', '轻重', '一共', '还有', '剩下', '原来', '现在', '涂色', '排列', '顺序', '算式', '看图', '哪些', '或者', '只有', '表示', '相邻', '选择', '判断', '按照', '去掉', '添加', '得数', '计算', '准确', '组成', '接着', '图形', '比较', '要求', '自己', '大小', '爸爸', '妈妈', '动物', '植物', '红色', '绿色', '蓝色', '紫色', '黄色', '白色', '直尺', '远近', '作业', '快慢', '一个', '第几', '每行', '可以', '规律', '现在', '相同', '相比', '错误', '合适', '那么', '如果', '认识', '数一数', '比一比', '涂一涂', '画一画', '圈一圈', '填一填', '练一练', '圈起来', '正方体', '长方体', '圆柱体', '球体', '正方形', '长方形', '认位置', '读一读', '认一认', '近一些', '练习册', '第几页'];

// 计数器变量
let eliminatedCount = 0;

// 已消除的词组列表
let eliminatedWords = [];

// DOM元素
const wordGrid = document.getElementById('word-grid');
const countElement = document.getElementById('count');
const celebrationElement = document.getElementById('celebration');
const resetBtn = document.getElementById('reset-btn');

// 本地存储键名
const STORAGE_KEY = 'eliminatedWords';

// 初始化游戏
function initGame() {
    // 从本地存储加载已消除的词组
    const savedEliminatedWords = localStorage.getItem(STORAGE_KEY);
    if (savedEliminatedWords) {
        eliminatedWords = JSON.parse(savedEliminatedWords);
        eliminatedCount = eliminatedWords.length;
        countElement.textContent = eliminatedCount;
    }
    
    // 清空现有内容
    wordGrid.innerHTML = '';
    
    // 为每个词组创建卡片（除非已被消除）
    wordList.forEach(word => {
        // 如果词组已被消除，创建一个隐藏的占位卡片
        if (eliminatedWords.includes(word)) {
            const card = document.createElement('div');
            card.className = 'word-card hidden';
            card.textContent = word;
            wordGrid.appendChild(card);
            return;
        }
        
        const card = document.createElement('div');
        card.className = 'word-card';
        card.textContent = word;
        
        // 添加点击事件监听器
        card.addEventListener('click', () => eliminateWord(card, word));
        
        // 将卡片添加到网格中
        wordGrid.appendChild(card);
    });
    
    // 检查是否有完整的行可以移除
    checkRowCompletion();
    
    // 检查是否所有词组都已消除
    checkCompletion();
}

// 消除词组函数
function eliminateWord(card, word) {
    // 添加消除动画类
    card.classList.add('eliminate');
    
    // 动画结束后隐藏元素但保持占位
    card.addEventListener('animationend', () => {
        // 隐藏卡片但保持占位
        card.classList.remove('eliminate');
        card.classList.add('hidden');
        
        // 将词组添加到已消除列表
        eliminatedWords.push(word);
        // 保存到本地存储
        localStorage.setItem(STORAGE_KEY, JSON.stringify(eliminatedWords));
        // 更新计数器
        updateCounter();
        // 检查整行是否需要移除
        checkRowCompletion();
        // 检查是否所有词组都已消除
        checkCompletion();
    }, {once: true});
}

// 更新计数器
function updateCounter() {
    eliminatedCount++;
    countElement.textContent = eliminatedCount;
}

// 检查并移除整行占位
function checkRowCompletion() {
    // 获取网格中的所有卡片
    const cards = Array.from(wordGrid.children);
    
    // 如果没有卡片，直接返回
    if (cards.length === 0) return;
    
    // 简化方法：检查是否有完整的行可以移除
    // 由于CSS Grid的auto-fill特性，我们检查是否所有可见卡片都在同一行
    
    // 获取容器宽度和计算实际列数
    const containerWidth = wordGrid.clientWidth;
    const itemWidth = 150; // 与CSS中的minmax(150px, 1fr)对应
    const gap = 20; // 与CSS中的gap: 20px对应
    const columnCount = Math.max(1, Math.floor((containerWidth + gap) / (itemWidth + gap)));
    
    // 按行分组卡片
    const rows = [];
    for (let i = 0; i < cards.length; i += columnCount) {
        rows.push(cards.slice(i, Math.min(i + columnCount, cards.length)));
    }
    
    // 检查每一行是否所有卡片都已被隐藏
    for (const row of rows) {
        const allHidden = row.every(card => card.classList.contains('hidden'));
        
        // 如果一行所有卡片都被隐藏，则移除整行
        if (allHidden && row.length > 0) {
            row.forEach(card => card.remove());
            // 重新检查后续行，因为移除一行后索引会变化
            checkRowCompletion();
            return;
        }
    }
}

// 检查是否完成所有词组消除
function checkCompletion() {
    const remainingCards = document.querySelectorAll('.word-card');
    if (remainingCards.length === 0) {
        showCelebration();
    }
}

// 显示庆祝消息
function showCelebration() {
    celebrationElement.classList.remove('hidden');
}

// 重置游戏功能
function resetGame() {
    // 清空已消除词组列表
    eliminatedWords = [];
    eliminatedCount = 0;
    
    // 清除本地存储
    localStorage.removeItem(STORAGE_KEY);
    
    // 更新计数器显示
    countElement.textContent = eliminatedCount;
    
    // 隐藏庆祝消息
    celebrationElement.classList.add('hidden');
    
    // 重新初始化游戏
    initGame();
}

// 添加重置按钮事件监听器
resetBtn.addEventListener('click', resetGame);

// 页面加载完成后初始化游戏
document.addEventListener('DOMContentLoaded', initGame);