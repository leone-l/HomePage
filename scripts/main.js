// 更新时间显示
function updateTime() {
    const now = new Date();
    
    // 更新日期
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const weekDays = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
    const weekDay = weekDays[now.getDay()];
    
    const dateText = document.getElementById('dateText');
    if (dateText) {
        dateText.textContent = `${year} 年 ${month} 月 ${day} 日 ${weekDay}`;
    }
    
    // 更新时间
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    const timeDisplay = document.getElementById('timeDisplay');
    if (timeDisplay) {
        timeDisplay.textContent = `${hours}:${minutes}:${seconds}`;
    }
}

// 初始化
function init() {
    updateTime();
    setInterval(updateTime, 1000);
}

// 页面加载完成后初始化
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// 名言列表（可以扩展）
const quotes = [
    { text: '生命如意志永存，青春永远年轻。', author: '「 安讯七旬 」' },
    { text: '生活不是等待风暴过去，而是学会在雨中跳舞。', author: '「 维维安·格林 」' },
    { text: '成功不是最终的，失败也不是致命的，重要的是继续前进的勇气。', author: '「 温斯顿·丘吉尔 」' },
    { text: '你的时间有限，不要浪费时间活在别人的生活里。', author: '「 史蒂夫·乔布斯 」' }
];

// 随机切换名言（可选功能）
function changeQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    
    const quoteText = document.getElementById('dailyQuote');
    const quoteAuthor = document.querySelector('.quote-author');
    
    if (quoteText) {
        quoteText.style.opacity = '0';
        setTimeout(() => {
            quoteText.textContent = quote.text;
            quoteText.style.opacity = '1';
        }, 300);
    }
    
    if (quoteAuthor) {
        quoteAuthor.style.opacity = '0';
        setTimeout(() => {
            quoteAuthor.textContent = `- ${quote.author}`;
            quoteAuthor.style.opacity = '1';
        }, 300);
    }
}

// 添加过渡效果
const style = document.createElement('style');
style.textContent = `
    #dailyQuote, .quote-author {
        transition: opacity 0.3s ease;
    }
`;
document.head.appendChild(style);

console.log('个人主页已加载完成');
