class gameBoard {
    constructor() {
        this.board = this.createBoard();
        this.missedShots = [];
        this.ships = [];
        this.attacked = [];
    }
    createBoard() {
        let result = [];
        for (let i = 0; i < 10; i++) {
            let innerArr = [];
            for (let j = 0; j < 10; j++) {
                innerArr.push(null);
            }
            result.push(innerArr);
        }
        return result;
    }
    placeShip(ship, i, j, direction) {
        let coords = this.generateCoords(ship.health, i, j, direction);
        for (const val of coords) {
            if (!this.coordsWithInBounds(val[0], val[1])) return false;
            if (this.board[val[0]][val[1]] !== null) return false;
        }
        for (const val of coords) {
            this.board[val[0]][val[1]] = ship;
        }
        this.ships.push([ship, i, j, direction]);
        return true;
    }
    generateCoords(length, x, y, direction) {
        let coords = [];
        if (direction === 'horizontal') {
            for (let i = 0; i < length; i++) coords.push([x, i + y]);
            return coords;
        }
        for (let i = 0; i < length; i++) coords.push([i + x, y]);
        return coords;
    }
    receiveAttack(i, j) {
        if (!this.coordsWithInBounds(i, j)) return 'invalid';
        for (const val of this.attacked) if (val[0] === i && val[1] === j) return 'invalid';
        if (this.board[i][j] === null) {
            this.board[i][j] = 'miss';
            this.attacked.push([i, j]);
            return 'miss';
        }
        this.board[i][j].hit();
        this.attacked.push([i, j]);
        return 'hit';
    }
    areAllShipsSunk() {
        for (const shipRecord of this.ships) {
            if (!shipRecord[0].isSunk()) return false;
        }
        return true;
    }
    coordsWithInBounds(i, j) {
        if (i >= 0 && i < 10 && j >= 0 && j < 10) return true;
        return false;
    }
}

module.exports = gameBoard;
