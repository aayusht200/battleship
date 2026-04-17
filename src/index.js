import './style.css';
import GameController from './game/gameController.js';
import Ship from './game/ship.js';
import render from './ui/render.js';
let game;
const gameContainer = document.getElementById('gameContainer');

function resetGame() {
    game = new GameController();
    const playerShips = [new Ship(2), new Ship(2), new Ship(4), new Ship(4)];

    const computerShips = [new Ship(2), new Ship(2), new Ship(4), new Ship(4)];

    game.randomPlaceShip(playerShips, 'player');
    game.randomPlaceShip(computerShips, 'computer');
    render(game.getState());
}
gameContainer.addEventListener('click', (e) => {
    if (e.target.matches('.computer')) {
        let coord = [Number(e.target.dataset.x), Number(e.target.dataset.y)];
        game.playTurn(coord);
        render(game.getState());
    }
    if (e.target.matches('.reset-btn')) {
        resetGame();
    }
});
resetGame();
