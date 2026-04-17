import './style.css';
import GameController from './game/gameController.js';
import Ship from './game/ship.js';
import render from './ui/render.js';
let game;
function resetGame() {
    game = new GameController();
    const shipList = [new Ship(2), new Ship(2), new Ship(4), new Ship(4)];
    game.randomPlaceShip(shipList, 'player');
    game.randomPlaceShip(shipList, 'computer');
    render(game.getState());
}

resetGame();
