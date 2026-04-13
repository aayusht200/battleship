const Ship = require('../src/ship');

describe('Ship', () => {
    describe('initialization', () => {
        it('creates a ship object', () => {
            const ship = new Ship();
            expect(ship).toBeDefined();
        });

        it('sets length/health correctly', () => {
            const ship = new Ship(2);
            expect(ship.health).toBe(2);
        });

        it('starts with hitCount = 0', () => {
            const ship = new Ship(2);
            expect(ship.hitCount).toBe(0);
        });

        it('is not sunk initially', () => {
            const ship = new Ship(2);
            expect(ship.isSunk()).toBe(false);
        });
    });

    describe('hit()', () => {
        it('increments hitCount by 1', () => {
            const ship = new Ship(2);
            ship.hit();
            expect(ship.hitCount).toBe(1);
        });

        it('does not exceed ship length', () => {
            const ship = new Ship(2);

            ship.hit();
            ship.hit();
            ship.hit(); // extra hit

            expect(ship.hitCount).toBe(2);
        });
    });

    describe('isSunk()', () => {
        it('returns true when hitCount equals length', () => {
            const ship = new Ship(2);

            ship.hit();
            ship.hit();

            expect(ship.isSunk()).toBe(true);
        });

        it('returns false if hitCount is less than length', () => {
            const ship = new Ship(2);

            ship.hit();

            expect(ship.isSunk()).toBe(false);
        });
    });
});
