import GameController from './gameController.js';
const gameContainer = document.getElementById('gameContainer');
const game = new GameController();
const statusBar = document.createElement('div');
statusBar.className = 'status-bar';

function handleClick(x, y) {
    const result = game.playTurn([x, y]);
    statusBar.textContent = result;
    render();
}
function render() {
    gameContainer.innerHTML = '';
    const playerBoard = game.player.board.board;
    const computerBoard = game.computer.board.board;
    let playerRender = renderBoard(playerBoard, 'player');
    let computerRender = renderBoard(computerBoard, 'computer');
    gameContainer.append(playerRender, computerRender, statusBar);
}

function renderBoard(board, role) {
    let newBoard = document.createElement('div');
    newBoard.className = 'gameGrid';

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            const button = document.createElement('button');
            button.className = role;
            const status = board[i][j];
            if (role === 'computer') {
                button.addEventListener('click', () => {
                    handleClick(i, j);
                });
            }
            newBoard.append(button);
        }
    }
    return newBoard;
}

render();
