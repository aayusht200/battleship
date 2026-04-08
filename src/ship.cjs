class Ship {
    constructor(length) {
        this.length = length;
        this.health = 0;
    }
    hit() {
        if (!this.isSunk()) this.health++;
    }
    isSunk() {
        return this.health === this.length;
    }
}

module.exports = Ship;
