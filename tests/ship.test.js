const Ship = require('../src/ship');

it('creates a ship with correct length', () => {
    const ship = new Ship(3);
    expect(ship.length).toBe(3);
});

it('initial health is zero', () => {
    const ship = new Ship(3);
    expect(ship.health).toBe(0);
});

it('increments health when hit is called', () => {
    const ship = new Ship(3);
    ship.hit();
    expect(ship.health).toBe(1);
});

it('is not sunk after one hit', () => {
    const ship = new Ship(3);
    ship.hit();
    expect(ship.isSunk()).toBe(false);
});

it('is sunk when health equals length', () => {
    const ship = new Ship(3);
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(true);
});

it('does not increase health after ship is sunk', () => {
    const ship = new Ship(3);
    ship.hit();
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.health).toBe(3);
    expect(ship.isSunk()).toBe(true);
});
