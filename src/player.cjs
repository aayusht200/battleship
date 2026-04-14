const gameBoard = require('./gameboard');

class Player {
    constructor() {
        this.board = new gameBoard();
    }
    attack(board, coords) {
        return board.receiveAttack(coords[0], coords[1]);
    }
}

module.exports = Player;
