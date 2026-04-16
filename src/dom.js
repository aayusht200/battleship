import GameController from './gameController.js';
import Ship from './ship.js';

const gameContainer = document.getElementById('gameContainer');

const statusBar = document.createElement('div');
statusBar.className = 'status-bar';

// Handles a player's click: plays one turn,
// updates status text, re-renders the UI,
// and triggers reset when the game ends
function handleClick(game, x, y) {
    const result = game.playTurn([x, y]);

    statusBar.textContent = result;
    render(game);

    if (result === 'player wins' || result === 'computer wins') {
        setTimeout(() => reset(), 300);
    }
}

// Rebuilds the full game UI from the latest game state,
// including both boards and the status bar
function render(game) {
    gameContainer.innerHTML = '';

    const playerBoard = game.player.board.board;
    const computerBoard = game.computer.board.board;

    const playerRender = renderBoard(game, playerBoard, 'player');
    const computerRender = renderBoard(game, computerBoard, 'computer');

    gameContainer.append(playerRender, computerRender, statusBar);
}

// Creates and returns a single board grid,
// applies click behavior for computer cells,
// and updates visual cell states (hit, miss, disabled, ships)
function renderBoard(game, board, role) {
    const newBoard = document.createElement('div');
    newBoard.className = 'gameGrid';

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            const button = document.createElement('button');
            button.className = role;

            const status = board[i][j];

            if (role === 'computer') {
                button.addEventListener('click', () => {
                    handleClick(game, i, j);
                });

                if (status !== 'miss' && status !== null) {
                    if (isCellAttacked(game.computer.board.attacked, i, j)) {
                        button.classList.add('hit');
                    }
                }

                if (isCellAttacked(game.computer.board.attacked, i, j)) {
                    button.classList.add('disable');
                }
            }

            if (role === 'player') {
                if (status !== 'miss' && status !== null) {
                    button.classList.add('player-ships');

                    if (isCellAttacked(game.player.board.attacked, i, j)) {
                        button.classList.remove('player-ships');
                        button.classList.add('hit');
                    }
                }

                if (isCellAttacked(game.player.board.attacked, i, j)) {
                    button.classList.add('disable');
                }
            }

            if (status === 'miss') {
                button.classList.add('miss');
            }

            newBoard.append(button);
        }
    }

    if (game.player.board.areAllShipsSunk() || game.computer.board.areAllShipsSunk()) {
        newBoard.classList.add('disable');
    }

    return newBoard;
}

// Checks whether a given cell has already been attacked
function isCellAttacked(attacked, i, j) {
    return attacked.some(([x, y]) => x === i && y === j);
}

// Clears status controls and shows the reset button
// after the game has ended
function reset() {
    statusBar.innerHTML = '';

    const reset = document.createElement('button');

    reset.className = 'reset';
    reset.textContent = 'Reset Game';

    reset.addEventListener('click', () => {
        init();
    });

    statusBar.append(reset);
}

// Starts a new game instance, places ships,
// sets up initial controls, and renders the first board state
function init() {
    const game = new GameController();
    const rearrangeShips = document.createElement('button');
    const shipList = [new Ship(4), new Ship(4), new Ship(2), new Ship(2)];

    statusBar.innerHTML = '';

    rearrangeShips.className = 'btn rearrange-ships';
    rearrangeShips.textContent = 'Rearrange Ships';

    rearrangeShips.addEventListener('click', () => {
        init();
    });

    game.randomPlaceShip(shipList, 'player');
    game.randomPlaceShip(shipList, 'computer');

    statusBar.append(rearrangeShips);

    render(game);
}

init();
