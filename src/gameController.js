import Player from './player.js';

export default class GameController {
    constructor() {
        this.player = new Player();
        this.computer = new Player();
        this.currentPlayer = this.player;
    }

    playTurn(coord) {
        const attacker = this.currentPlayer;
        const defender = attacker === this.player ? this.computer : this.player;

        if (attacker !== this.player) {
            coord = this.getRandomCoord(defender.board.attacked);
        }

        const result = attacker.attack(defender.board, coord);

        if (result === 'hit') {
            if (defender.board.areAllShipsSunk()) {
                return attacker === this.player ? 'player wins' : 'computer wins';
            }
        }

        if (result === 'miss') {
            this.currentPlayer = defender;
        }

        return result;
    }

    getRandomCoord(attackedArray) {
        const allCoords = [];

        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                allCoords.push([i, j]);
            }
        }

        const available = allCoords.filter(([x, y]) => !attackedArray.some(([i, j]) => i === x && j === y));

        return available[Math.floor(Math.random() * available.length)];
    }
}
