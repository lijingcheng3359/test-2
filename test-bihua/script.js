// Character data mapping filenames to pinyin and characters
const characterData = {
    '上.gif': { pinyin: 'shàng', character: '上' },
    '下.gif': { pinyin: 'xià', character: '下' },
    '专.gif': { pinyin: 'zhuān', character: '专' },
    '东.gif': { pinyin: 'dōng', character: '东' },
    '中.gif': { pinyin: 'zhōng', character: '中' },
    '买.gif': { pinyin: 'mǎi', character: '买' },
    '了.gif': { pinyin: 'le', character: '了' },
    '五.gif': { pinyin: 'wǔ', character: '五' },
    '人.gif': { pinyin: 'rén', character: '人' },
    '仍.gif': { pinyin: 'réng', character: '仍' },
    '你.gif': { pinyin: 'nǐ', character: '你' },
    '儿.gif': { pinyin: 'ér', character: '儿' },
    '几.gif': { pinyin: 'jǐ', character: '几' },
    '凰.gif': { pinyin: 'huáng', character: '凰' },
    '凸.gif': { pinyin: 'tū', character: '凸' },
    '凹.gif': { pinyin: 'āo', character: '凹' },
    '力.gif': { pinyin: 'lì', character: '力' },
    '去.gif': { pinyin: 'qù', character: '去' },
    '及.gif': { pinyin: 'jí', character: '及' },
    '口.gif': { pinyin: 'kǒu', character: '口' },
    '可.gif': { pinyin: 'kě', character: '可' },
    '四.gif': { pinyin: 'sì', character: '四' },
    '土.gif': { pinyin: 'tǔ', character: '土' },
    '天.gif': { pinyin: 'tiān', character: '天' },
    '头.gif': { pinyin: 'tóu', character: '头' },
    '女.gif': { pinyin: 'nǚ', character: '女' },
    '子.gif': { pinyin: 'zǐ', character: '子' },
    '小.gif': { pinyin: 'xiǎo', character: '小' },
    '尺.gif': { pinyin: 'chǐ', character: '尺' },
    '山.gif': { pinyin: 'shān', character: '山' },
    '巴.gif': { pinyin: 'bā', character: '巴' },
    '开.gif': { pinyin: 'kāi', character: '开' },
    '心.gif': { pinyin: 'xīn', character: '心' },
    '我.gif': { pinyin: 'wǒ', character: '我' },
    '手.gif': { pinyin: 'shǒu', character: '手' },
    '把.gif': { pinyin: 'bǎ', character: '把' },
    '月.gif': { pinyin: 'yuè', character: '月' },
    '比.gif': { pinyin: 'bǐ', character: '比' },
    '水.gif': { pinyin: 'shuǐ', character: '水' },
    '没.gif': { pinyin: 'méi', character: '没' },
    '牙.gif': { pinyin: 'yá', character: '牙' },
    '禾.gif': { pinyin: 'hé', character: '禾' },
    '虫.gif': { pinyin: 'chóng', character: '虫' },
    '西.gif': { pinyin: 'xī', character: '西' },
    '课.gif': { pinyin: 'kè', character: '课' },
    '那.gif': { pinyin: 'nà', character: '那' },
    '长.gif': { pinyin: 'cháng', character: '长' },
    '马.gif': { pinyin: 'mǎ', character: '马' },
    '鸟.gif': { pinyin: 'niǎo', character: '鸟' },
    '鼎.gif': { pinyin: 'dǐng', character: '鼎' }
};

// Get DOM elements
const card = document.querySelector('.card');
const characterGif = document.getElementById('character-gif');
const pinyinElement = document.getElementById('pinyin');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const loadingElement = document.getElementById('loading');

// Get all gif filenames
const gifFiles = Object.keys(characterData);

// Current index
let currentIndex = 0;

// Preloaded images cache
const imageCache = {};

// Load a random character with preloading
function loadRandomCharacter() {
    // Show loading indicator
    characterGif.style.display = 'none';
    loadingElement.style.display = 'block';
    
    // Get a random index
    currentIndex = Math.floor(Math.random() * gifFiles.length);
    const currentGif = gifFiles[currentIndex];
    
    // Preload the image
    return preloadImage(currentGif).then(() => {
        // Hide loading indicator and show image
        loadingElement.style.display = 'none';
        characterGif.style.display = 'block';
        
        // Update the display only after image is loaded
        characterGif.src = `gifs/${currentGif}`;
        pinyinElement.textContent = characterData[currentGif].pinyin.toLowerCase();
    });
}

// Preload an image and cache it
function preloadImage(gifName) {
    // Return cached promise if already exists
    if (imageCache[gifName]) {
        return imageCache[gifName];
    }
    
    // Create a new promise for loading the image
    const promise = new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = resolve;
        img.onerror = reject;
        img.src = `gifs/${gifName}`;
    });
    
    // Cache the promise
    imageCache[gifName] = promise;
    return promise;
}

// Preload next and previous images for smoother transitions
function preloadAdjacentImages() {
    // Preload next image
    const nextIndex = (currentIndex + 1) % gifFiles.length;
    const nextGif = gifFiles[nextIndex];
    preloadImage(nextGif);
    
    // Preload previous image
    const prevIndex = (currentIndex - 1 + gifFiles.length) % gifFiles.length;
    const prevGif = gifFiles[prevIndex];
    preloadImage(prevGif);
}

// Load next character with animation
function loadNextCharacter() {
    card.classList.remove('slide-in-left', 'slide-in-right');
    void card.offsetWidth; // Trigger reflow
    card.classList.add('slide-in-right');
    
    // Show loading indicator
    characterGif.style.display = 'none';
    loadingElement.style.display = 'block';
    
    // Get next character
    currentIndex = (currentIndex + 1) % gifFiles.length;
    const currentGif = gifFiles[currentIndex];
    
    // Preload the image and update display when loaded
    preloadImage(currentGif).then(() => {
        // Hide loading indicator and show image
        loadingElement.style.display = 'none';
        characterGif.style.display = 'block';
        
        characterGif.src = `gifs/${currentGif}`;
        pinyinElement.textContent = characterData[currentGif].pinyin.toLowerCase();
        // Preload adjacent images for smoother future transitions
        preloadAdjacentImages();
    });
}

// Load previous character with animation
function loadPrevCharacter() {
    card.classList.remove('slide-in-left', 'slide-in-right');
    void card.offsetWidth; // Trigger reflow
    card.classList.add('slide-in-left');
    
    // Show loading indicator
    characterGif.style.display = 'none';
    loadingElement.style.display = 'block';
    
    // Get previous character
    currentIndex = (currentIndex - 1 + gifFiles.length) % gifFiles.length;
    const currentGif = gifFiles[currentIndex];
    
    // Preload the image and update display when loaded
    preloadImage(currentGif).then(() => {
        // Hide loading indicator and show image
        loadingElement.style.display = 'none';
        characterGif.style.display = 'block';
        
        characterGif.src = `gifs/${currentGif}`;
        pinyinElement.textContent = characterData[currentGif].pinyin.toLowerCase();
        // Preload adjacent images for smoother future transitions
        preloadAdjacentImages();
    });
}

// Touch swipe handling
let touchStartX = 0;
let touchEndX = 0;

function handleTouchStart(event) {
    touchStartX = event.changedTouches[0].screenX;
}

function handleTouchEnd(event) {
    touchEndX = event.changedTouches[0].screenX;
    handleSwipe();
}

function handleSwipe() {
    const swipeThreshold = 50;
    
    if (touchStartX - touchEndX > swipeThreshold) {
        // Swipe left - next character
        loadNextCharacter();
    } else if (touchEndX - touchStartX > swipeThreshold) {
        // Swipe right - previous character
        loadPrevCharacter();
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadRandomCharacter().then(() => {
        // Preload adjacent images after initial load
        preloadAdjacentImages();
    });
    
    // Add event listeners
    prevBtn.addEventListener('click', loadPrevCharacter);
    nextBtn.addEventListener('click', loadNextCharacter);
    
    // Add touch event listeners for swipe
    card.addEventListener('touchstart', handleTouchStart);
    card.addEventListener('touchend', handleTouchEnd);
});