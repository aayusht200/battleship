import Player from '../src/player.js';

import Ship from '../src/ship.js';
describe('Player', () => {
    describe('Initalization', () => {
        it('Initalize player object with board', () => {
            const player = new Player();
            expect(player.board).toBeDefined();
        });
        it('Board can be accesed using player object', () => {
            const player = new Player();
            expect(player.board.board.length).toBe(10);
        });
        it('Ship placement works ', () => {
            const computer = new Player();
            const ship = new Ship(1);
            computer.board.placeShip(ship, 4, 4, 'vertical');
            expect(computer.board.board[4][4]).toBe(ship);
        });
    });
    describe('Attack', () => {
        it('attack is succesful', () => {
            const player = new Player();
            const ship = new Ship(1);
            const computer = new Player();

            computer.board.placeShip(ship, 4, 4, 'vertical');

            expect(player.attack(computer.board, [4, 4])).toBe('hit');
        });
    });
});
