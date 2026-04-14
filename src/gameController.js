const Player = require('./player');
class gameController {
    constructor() {
        this.player = new Player();
        this.computer = new Player();
        this.currentPlayer = this.player;
    }
    playTurn(coord) {
        let attacker = this.currentPlayer === this.player ? this.player : this.computer;
        let defender = attacker === this.player ? this.computer : this.player;
        if (attacker !== this.player) {
            coord = this.getRandomCoord(defender.attacked);
        }
        let result = attacker.attack(defender.board, coord);
        if (result === 'hit') {
            if (defender.areAllShipsSunk()) {
                if (attacker === this.player) return 'player wins';
                else return 'computer wins';
            }
        }
        if (result === 'miss') {
            this.currentPlayer = defender;
            return result;
        }
        return result;
    }
    getRandomCoord(attackedArray) {
        let result = [];
        for (let i = 0; i < 10; i++) for (let j = 0; j < 10; j++) result.push([i, j]);
        let filterArr = result.filter(([x, y]) => !attackedArray.some(([i, j]) => i === x && j === y));
        return filterArr[Math.floor(Math.random() * filterArr.length)];
    }
}
