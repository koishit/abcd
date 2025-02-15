// 播放/暂停音乐
const bgMusic = document.getElementById('bg-music');
const musicControl = document.getElementById('music-control');

musicControl.addEventListener('click', function() {
    if (bgMusic.paused) {
        bgMusic.play();
        musicControl.textContent = "暂停音乐";
    } else {
        bgMusic.pause();
        musicControl.textContent = "播放音乐";
    }
});

// 每日一句
const messages = [
    "你是我的唯一 💖",
    "每天都想你一百遍！",
    "情人节快乐，永远宠你！",
    "今天也要开心哦~"
];

document.getElementById('daily-message').textContent = messages[new Date().getDay() % messages.length];

// 点击惊喜
document.getElementById('surpriseBtn').addEventListener('click', function() {
    const surpriseMessages = [
        "偷偷告诉你，我超级喜欢你！",
        "今天的你比昨天更可爱！",
        "你是我生命里最甜的惊喜~",
        "小爪爪已经走到你心里啦🐾"
    ];
    document.getElementById('message').textContent = surpriseMessages[Math.floor(Math.random() * surpriseMessages.length)];
    document.getElementById('message').classList.remove('hidden');
});

// 计算纪念日天数
const startDate = new Date("2023-02-14");
const today = new Date();
const daysTogether = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));
document.getElementById('days-count').textContent = daysTogether;

// 翻牌小游戏
function flipCard(card) {
    card.classList.toggle('flipped');
}

// 留言板
const messageInput = document.getElementById('user-message');
const saveMessage = document.getElementById('save-message');
const savedMessages = document.getElementById('saved-messages');

saveMessage.addEventListener('click', function() {
    const text = messageInput.value.trim();
    if (text) {
        const p = document.createElement('p');
        p.textContent = text;
        savedMessages.appendChild(p);
        messageInput.value = "";
    }
});
