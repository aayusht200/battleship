const Ship = require('../src/ship');

it('creates a ship with correct length', () => {
    const ship = new Ship(3);
    expect(ship.length).toBe(3);
});
