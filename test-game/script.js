class StroopGame {
    constructor() {
        this.colors = [
            { name: '红', value: 'red' },
            { name: '蓝', value: 'blue' },
            { name: '绿', value: 'green' },
            { name: '黄', value: 'yellow' },
            { name: '紫', value: 'purple' },
            { name: '橙', value: 'orange' }
        ];
        
        this.stats = {
            correct: 0,
            wrong: 0,
            totalTime: 0,
            count: 0
        };
        
        this.gameActive = false;
        this.startTime = 0;
        this.currentWord = null;
        
        this.initializeElements();
        this.attachEventListeners();
    }
    
    initializeElements() {
        this.wordDisplay = document.getElementById('word-display');
        this.correctCount = document.getElementById('correct-count');
        this.wrongCount = document.getElementById('wrong-count');
        this.avgTime = document.getElementById('avg-time');
        this.totalCount = document.getElementById('total-count');
        this.startBtn = document.getElementById('start-btn');
        this.restartBtn = document.getElementById('restart-btn');
        this.colorButtons = document.querySelectorAll('.color-btn');
    }
    
    attachEventListeners() {
        this.startBtn.addEventListener('click', () => this.startGame());
        this.restartBtn.addEventListener('click', () => this.restartGame());
        
        this.colorButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                if (this.gameActive) {
                    this.checkAnswer(e.target.dataset.color);
                }
            });
        });
    }
    
    startGame() {
        this.gameActive = true;
        this.startBtn.disabled = true;
        this.enableColorButtons(true);
        this.generateWord();
    }
    
    restartGame() {
        this.stats = {
            correct: 0,
            wrong: 0,
            totalTime: 0,
            count: 0
        };
        
        this.gameActive = false;
        this.startTime = 0;
        this.currentWord = null;
        
        this.wordDisplay.textContent = '';
        this.updateStats();
        this.startBtn.disabled = false;
        this.enableColorButtons(false);
    }
    
    generateWord() {
        if (!this.gameActive) return;
        
        // Get random word and color
        const word = this.colors[Math.floor(Math.random() * this.colors.length)];
        const color = this.colors[Math.floor(Math.random() * this.colors.length)];
        
        this.currentWord = {
            word: word.name,
            color: color.value
        };
        
        this.wordDisplay.textContent = word.name;
        this.wordDisplay.style.color = color.value;
        
        this.startTime = Date.now();
    }
    
    checkAnswer(selectedColor) {
        if (!this.gameActive || !this.currentWord) return;
        
        const endTime = Date.now();
        const reactionTime = endTime - this.startTime;
        
        this.stats.count++;
        this.stats.totalTime += reactionTime;
        
        if (selectedColor === this.currentWord.color) {
            this.stats.correct++;
        } else {
            this.stats.wrong++;
        }
        
        this.updateStats();
        this.generateWord();
    }
    
    updateStats() {
        this.correctCount.textContent = this.stats.correct;
        this.wrongCount.textContent = this.stats.wrong;
        this.totalCount.textContent = this.stats.count;
        
        if (this.stats.count > 0) {
            const avg = Math.round(this.stats.totalTime / this.stats.count);
            this.avgTime.textContent = `${avg}ms`;
        } else {
            this.avgTime.textContent = '0ms';
        }
    }
    
    enableColorButtons(enabled) {
        this.colorButtons.forEach(button => {
            button.disabled = !enabled;
        });
    }
}

// Initialize the game when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new StroopGame();
});