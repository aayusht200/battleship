const Player = require('./player');
class gameController {
    constructor() {
        this.player = new Player();
        this.computer = new Player();
        this.currPlayer = this.player;
        this.gameOver = false;
    }
    playTurn(coord) {
        if (this.gameOver) return;
        let attacker = this.currPlayer;
        let defender = attacker === this.player ? this.computer : this.player;
        let attackCoord = attacker === this.player ? coord : this.getRandomCoord(defender.board);

        let result = attacker.attack(defender.board, attackCoord);
        if (result != 'invalid') {
            if (defender.board.areAllShipsSunk()) {
                this.gameOver = true;
                return attacker;
            }
            this.currPlayer = defender;
        }
    }
    getRandomCoord(board) {
        let coord;

        do {
            let i = Math.floor(Math.random() * 10);
            let j = Math.floor(Math.random() * 10);
            coord = [i, j];
        } while (board.attacked.some(([x, y]) => x === coord[0] && y === coord[1]));

        return coord;
    }
}
