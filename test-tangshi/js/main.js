import poems from './data.js';

// 从localStorage获取保存的索引，如果没有则默认为0
let currentPoemIndex = parseInt(localStorage.getItem('currentPoemIndex')) || 0;

/**
 * 导航到上一首诗
 */
function navigateToPrevPoem() {
  // 添加按钮点击效果
  const button = document.querySelector('.prev-button');
  applyButtonEffect(button);
  
  // 更新索引 - 如果是第一首，则跳转到最后一首
  currentPoemIndex = (currentPoemIndex - 1 + poems.length) % poems.length;
  // 保存当前索引到localStorage
  saveCurrentPoemIndex();
  // 更新页面显示
  updatePoemDisplay();
}

/**
 * 导航到下一首诗
 */
function navigateToNextPoem() {
  // 添加按钮点击效果
  const button = document.querySelector('.next-button');
  applyButtonEffect(button);
  
  // 更新索引 - 如果是最后一首，则跳转到第一首
  currentPoemIndex = (currentPoemIndex + 1) % poems.length;
  // 保存当前索引到localStorage
  saveCurrentPoemIndex();
  // 更新页面显示
  updatePoemDisplay();
}

/**
 * 为按钮添加点击效果
 * @param {HTMLElement} button - 要应用效果的按钮元素
 */
function applyButtonEffect(button) {
  button.style.transform = 'scale(0.95)';
  setTimeout(() => {
    button.style.transform = '';
  }, 150);
}

/**
 * 保存当前诗歌索引到localStorage
 */
function saveCurrentPoemIndex() {
  localStorage.setItem('currentPoemIndex', currentPoemIndex.toString());
}

/**
 * 更新诗歌显示
 */
function updatePoemDisplay() {
  // 获取当前诗歌数据
  const poem = poems[currentPoemIndex];
  
  // 更新DOM元素
  updatePoemHeader(poem);
  updatePoemPinyinHeader(poem);
  updatePoemContent(poem);
}

/**
 * 更新诗歌标题和作者信息
 * @param {Object} poem - 诗歌数据对象
 */
function updatePoemHeader(poem) {
  document.querySelector('.poem-title').textContent = poem.title;
  document.querySelector('.author-dynasty').textContent = poem.dynasty;
  document.querySelector('.author-name').textContent = poem.author;
}

/**
 * 更新诗歌标题和作者拼音信息
 * @param {Object} poem - 诗歌数据对象
 */
function updatePoemPinyinHeader(poem) {
  document.querySelector('.poem-title-pinyin').textContent = poem.titlePinyin;
  document.querySelector('.author-dynasty-pinyin').textContent = poem.dynastyPinyin;
  document.querySelector('.author-name-pinyin').textContent = poem.authorPinyin;
}

/**
 * 更新诗歌内容显示
 * @param {Object} poem - 诗歌数据对象
 */
function updatePoemContent(poem) {
  const contentContainer = document.querySelector('.poem-content');
  contentContainer.innerHTML = '';
  
  poem.content.forEach((couplet, index) => {
    const coupletElement = createCoupletElement(couplet, poem.coupletPinyin[index]);
    contentContainer.appendChild(coupletElement);
  });
}

/**
 * 创建诗句对元素
 * @param {string} characters - 汉字内容
 * @param {string} pinyin - 拼音内容
 * @returns {HTMLElement} 诗句对元素
 */
function createCoupletElement(characters, pinyin) {
  const coupletElement = document.createElement('div');
  coupletElement.className = 'poem-couplet';
  
  // 创建拼音行
  const pinyinElement = document.createElement('div');
  pinyinElement.className = 'poem-pinyin-line';
  pinyinElement.textContent = pinyin;
  
  // 创建汉字行
  const charactersElement = document.createElement('div');
  charactersElement.className = 'poem-characters-line';
  charactersElement.textContent = characters;
  
  // 调整显示顺序：拼音在上，汉字在下
  coupletElement.appendChild(charactersElement);
  coupletElement.appendChild(pinyinElement);

  
  return coupletElement;
}

/**
 * 初始化应用
 */
function initApp() {
  // 确保索引在有效范围内
  validateCurrentPoemIndex();
  
  // 绑定按钮事件
  bindNavigationEvents();
  
  // 显示当前索引的诗
  updatePoemDisplay();
  
  // 添加键盘支持
  bindKeyboardEvents();
}

/**
 * 验证当前诗歌索引的有效性
 */
function validateCurrentPoemIndex() {
  if (currentPoemIndex >= poems.length || currentPoemIndex < 0) {
    currentPoemIndex = 0;
    saveCurrentPoemIndex();
  }
}

/**
 * 绑定导航按钮事件
 */
function bindNavigationEvents() {
  document.querySelector('.prev-button').addEventListener('click', navigateToPrevPoem);
  document.querySelector('.next-button').addEventListener('click', navigateToNextPoem);
}

/**
 * 绑定键盘事件
 */
function bindKeyboardEvents() {
  document.addEventListener('keydown', (e) => {
    if (e.code === 'Space' || e.code === 'ArrowRight') {
      e.preventDefault();
      navigateToNextPoem();
    } else if (e.code === 'ArrowLeft') {
      e.preventDefault();
      navigateToPrevPoem();
    }
  });
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', initApp);