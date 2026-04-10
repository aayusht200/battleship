class gameBoard {
    constructor() {
        this.board = this.createBoard();
        this.missedShots = [];
        this.ships = [];
        this.attacked = [];
    }
    createBoard() {
        let arr = [];
        for (let i = 0; i < 10; i++) {
            let row = [];
            for (let index = 0; index < 10; index++) {
                row.push(null);
            }
            arr.push(row);
        }
        return arr;
    }
    placeShip(ship, i, j) {
        this.board[i][j] = ship;
        this.ships.push(ship);
    }
    receiveAttack(i, j) {
        const alreadyAttacked = this.attacked.some(([x, y]) => x === i && y === j);
        if (alreadyAttacked) return 'invalid';
        this.attacked.push([i, j]);

        if (this.board[i][j] !== null) {
            this.board[i][j].hit();
            return 'hit';
        } else {
            this.missedShots.push([i, j]);
            return 'miss';
        }
    }
    areAllShipsSunk() {
        return this.ships.every((ship) => ship.isSunk());
    }
}

module.exports = gameBoard;
