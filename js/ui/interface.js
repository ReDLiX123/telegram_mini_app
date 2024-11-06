function initInterface() {
    const gameInterface = document.getElementById('gameInterface');
    gameInterface.innerHTML = `
        <div class="character-panel">
            <div class="character-info">
                <h2>Персонаж</h2>
                <div class="stats">
                    <div class="stat-bar">
                        <span>HP: <span id="healthValue">${player.health}</span>/${player.maxHealth}</span>
                        <div class="progress-bar">
                            <div class="health-bar" style="width: ${(player.health/player.maxHealth)*100}%"></div>
                        </div>
                    </div>
                    <div class="stat-info">
                        <p>Уровень: <span id="levelValue">${player.level}</span></p>
                        <p>Опыт: <span id="expValue">${player.exp}</span></p>
                        <p>Золото: <span id="goldValue">${player.gold}</span></p>
                    </div>
                </div>
            </div>
            <div class="action-buttons">
                <button class="button" onclick="startCombat()">В бой</button>
                <button class="button" onclick="openInventory()">Инвентарь</button>
                <button class="button" onclick="openShop()">Магазин</button>
            </div>
        </div>
    `;
}

function updateInterface() {
    document.getElementById('healthValue').textContent = player.health;
    document.getElementById('levelValue').textContent = player.level;
    document.getElementById('expValue').textContent = player.exp;
    document.getElementById('goldValue').textContent = player.gold;
    
    const healthBar = document.querySelector('.health-bar');
    healthBar.style.width = `${(player.health/player.maxHealth)*100}%`;
}
