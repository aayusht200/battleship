const gameBoard = require('./gameboard');

class Player {
    constructor(role) {
        this.board = new gameBoard();
        this.role = role;
    }
    attack(board, x, y) {
        board.receiveAttack(x, y);
    }
    makeMove(board) {
        if (this.role === 'player') return;
        let x = Math.floor(Math.random() * 10) + 1;
        let y = Math.floor(Math.random() * 10) + 1;
        this.attack(board, x, y);
    }
}

module.exports = Player;
