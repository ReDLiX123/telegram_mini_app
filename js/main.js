let tg = window.Telegram.WebApp;
tg.expand();
tg.ready();

// Инициализация игры
document.addEventListener('DOMContentLoaded', function() {
    initializeGame();
});

function initializeGame() {
    // Инициализация игрока
    initPlayer();
    // Инициализация интерфейса
    initInterface();
}
