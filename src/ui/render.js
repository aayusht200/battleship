import renderBoard from './renderBoard.js';
import renderStatus from './renderStatus.js';
export default function render(state) {
    const gameContainer = document.getElementById('gameContainer');
    gameContainer.innerHTML = '';
    const playerArea = document.createElement('div');
    const computerArea = document.createElement('div');
    const statusArea = document.createElement('div');
    playerArea.className = 'player-area';
    computerArea.className = 'computer-area';
    statusArea.className = 'status-area';
    playerArea.append(renderBoard(state.playerBoard, state.playerAttacked, 'player'));
    computerArea.append(renderBoard(state.computerBoard, state.computerAttacked, 'computer'));
    statusArea.append(renderStatus(state.state));
    gameContainer.append(playerArea, computerArea, statusArea);
}
