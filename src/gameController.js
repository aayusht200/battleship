import Player from './player.js';

export default class GameController {
    constructor() {
        this.player = new Player();
        this.computer = new Player();
        this.currentPlayer = this.player;
    }

    playTurn(coord) {
        let result = this._game(coord);
        if (result === 'miss' && this.currentPlayer === this.computer) {
            let compResult;
            do {
                const compCoord = this.getRandomCoord(this.player.board.attacked);
                compResult = this._game(compCoord);
            } while (this.currentPlayer === this.computer && compResult === 'hit');

            return compResult;
        }

        return result;
    }

    _game(coord) {
        const defender = this.currentPlayer === this.player ? this.computer : this.player;

        const result = this.currentPlayer.attack(defender.board, coord);

        if (result === 'hit') {
            if (defender.board.areAllShipsSunk()) {
                return this.currentPlayer === this.player ? 'player wins' : 'computer wins';
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
