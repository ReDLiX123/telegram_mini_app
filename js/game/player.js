class Player {
    constructor() {
        this.health = 100;
        this.maxHealth = 100;
        this.level = 1;
        this.exp = 0;
        this.gold = 0;
    }

    takeDamage(amount) {
        this.health = Math.max(0, this.health - amount);
        updateInterface();
    }

    gainExp(amount) {
        this.exp += amount;
        if (this.exp >= this.getExpToNextLevel()) {
            this.levelUp();
        }
        updateInterface();
    }

    getExpToNextLevel() {
        return this.level * 100;
    }

    levelUp() {
        this.level++;
        this.maxHealth += 20;
        this.health = this.maxHealth;
        this.exp = 0;
        tg.showAlert(`Уровень повышен! Теперь ваш уровень: ${this.level}`);
        updateInterface();
    }
}

let player;

function initPlayer() {
    player = new Player();
}
