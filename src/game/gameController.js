import Player from './player.js';

export default class GameController {
    constructor() {
        this.player = new Player();
        this.computer = new Player();
        this.currentPlayer = this.player;
        this.status = 'ongoing';
        this.winner = null;
    }

    playTurn(coord) {
        if (this.status === 'over') return;

        const result = this._game(coord);

        // stop immediately if player wins
        if (this.status === 'over') return;

        // computer only plays after player miss
        if (result === 'miss' && this.currentPlayer === this.computer) {
            let compResult;

            do {
                const compCoord = this.getRandomCoord(this.player.board.attacked);
                compResult = this._game(compCoord);
            } while (this.status !== 'over' && this.currentPlayer === this.computer && compResult === 'hit');
        }
    }

    _game(coord) {
        const defender = this.currentPlayer === this.player ? this.computer : this.player;

        const result = this.currentPlayer.attack(defender.board, coord);

        if (result === 'hit') {
            if (defender.board.areAllShipsSunk()) {
                this.status = 'over';
                this.winner = this.currentPlayer === this.player ? 'player' : 'computer';

                return `${this.winner} wins`;
            }
        }

        if (result === 'miss') {
            this.currentPlayer = defender;
        }

        return result;
    }

    getRandomCoord(arr) {
        const allCoords = [];

        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                allCoords.push([i, j]);
            }
        }

        const available = allCoords.filter(([x, y]) => !arr.some(([i, j]) => i === x && j === y));

        return available[Math.floor(Math.random() * available.length)];
    }

    randomPlaceShip(shipList, role) {
        const listCopy = [...shipList];
        let flag = shipList.length;

        const board = role === 'player' ? this.player.board : this.computer.board;

        while (flag > 0 && listCopy.length > 0) {
            const coord = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];

            if (board.placeShip(listCopy[0], coord[0], coord[1], Math.random() < 0.5 ? 'horizontal' : 'vertical')) {
                flag--;
                listCopy.shift();
            }
        }
    }

    getState() {
        return {
            playerBoard: this.player.board.board,
            computerBoard: this.computer.board.board,
            playerAttacked: this.player.board.attacked,
            computerAttacked: this.computer.board.attacked,
            state: { status: this.status, winner: this.winner },
        };
    }
}
