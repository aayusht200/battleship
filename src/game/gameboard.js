export default class GameBoard {
    constructor() {
        this.board = this.createBoard();
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

        for (const [x, y] of coords) {
            if (!this.coordsWithinBounds(x, y)) return false;
            if (this.board[x][y] !== null) return false;
        }

        for (const [x, y] of coords) {
            this.board[x][y] = ship;
        }

        this.ships.push([ship, i, j, direction]);
        return true;
    }

    generateCoords(length, x, y, direction) {
        let coords = [];

        if (direction === 'horizontal') {
            for (let i = 0; i < length; i++) coords.push([x, y + i]);
        } else {
            for (let i = 0; i < length; i++) coords.push([x + i, y]);
        }

        return coords;
    }

    receiveAttack(i, j) {
        if (!this.coordsWithinBounds(i, j)) return 'invalid';

        for (const [x, y] of this.attacked) {
            if (x === i && y === j) return 'invalid';
        }

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
        for (const [ship] of this.ships) {
            if (!ship.isSunk()) return false;
        }
        return true;
    }

    coordsWithinBounds(i, j) {
        return i >= 0 && i < 10 && j >= 0 && j < 10;
    }
}
