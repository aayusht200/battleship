class Ship {
    constructor(health) {
        this.health = health;
        this.hitCount = 0;
    }
    hit() {
        if (!this.isSunk()) this.hitCount++;
    }
    isSunk() {
        if (this.hitCount >= this.health) return true;
        return false;
    }
}

module.exports = Ship;
