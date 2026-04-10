const gameBoard = require('./gameboard');

class Player {
    constructor() {
        this.board = new gameBoard();
    }
    attack(board, coords) {
        const [i, j] = coords;
        return board.receiveAttack(i, j);
    }
}

module.exports = Player;
