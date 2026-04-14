import './style.css';
import GameController from './gameController.js';

const canva = document.getElementById('main');
const game = new GameController();

function renderBoard(role) {
    let className = role;
    const grid = document.createElement('div');
    grid.className = 'grid-container';

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            const button = document.createElement('button');
            button.className = className;
            button.dataset.x = i;
            button.dataset.y = j;

            button.addEventListener('click', (e) => {
                console.log(game.player);
                game.playTurn([button.dataset.x, button.dataset.y]);
            });

            grid.append(button);
        }
    }

    return grid;
}

let player = renderBoard('player');
let computer = renderBoard('computer');

canva.append(player, computer);
