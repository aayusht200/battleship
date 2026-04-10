const Player = require('../src/player');
const gameBoard = require('../src/gameboard');
const Ship = require('../src/ship');
it('player can attack enemy board', () => {
    const player = new Player();
    const enemyBoard = new gameBoard();
    const ship = new Ship(1);

    enemyBoard.placeShip(ship, 0, 0);

    player.attack(enemyBoard, 0, 0);
    expect(ship.isSunk()).toBe(true);
});

it('player has its own gameboard', () => {
    const player = new Player();

    expect(player.board).toBeDefined();
});