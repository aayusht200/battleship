const gameBoard = require('../src/gameboard');
const Ship = require('../src/ship');

it('gameBoard Created', () => {
    const newBoard = new gameBoard();
    expect(Array.isArray(newBoard.board)).toBe(true);
    expect(newBoard.board[0].length).toBe(10);
    expect(newBoard.board.length).toBe(10);
    expect(newBoard.board[0][4]).toBe(null);
});

it('places ships on the board', () => {
    const newBoard = new gameBoard();
    const ship = new Ship(3);

    newBoard.placeShip(ship, 0, 0);

    expect(newBoard.board[0][0]).toBe(ship);
});

it('hits a ship when attacked', () => {
    const newBoard = new gameBoard();
    const ship = new Ship(3);

    newBoard.placeShip(ship, 0, 0);
    newBoard.receiveAttack(0, 0);

    expect(ship.isSunk()).toBe(false);
});

it('records a missed attack', () => {
    const newBoard = new gameBoard();
    const ship = new Ship(3);

    newBoard.placeShip(ship, 0, 0);
    newBoard.receiveAttack(1, 0);

    expect(newBoard.missedShots).toContainEqual([1, 0]);
});

it('all ships sunk', () => {
    const newBoard = new gameBoard();
    const ship = new Ship(1);

    newBoard.placeShip(ship, 0, 0);
    newBoard.receiveAttack(0, 0);

    expect(newBoard.areAllShipsSunk()).toBe(true);
});

it('does not allow attacking the same cell twice', () => {
    const board = new gameBoard();
    const ship = new Ship(1);

    board.placeShip(ship, 0, 0);

    board.receiveAttack(0, 0);
    board.receiveAttack(0, 0);

    // ship should only be hit once
    expect(ship.isSunk()).toBe(true);
});