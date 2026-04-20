import renderBoard from './renderBoard.js';
import renderStatus from './renderStatus.js';
export default function render(state) {
    const gameContainer = document.getElementById('gameContainer');
    gameContainer.innerHTML = '';
    const playerArea = document.createElement('div');
    const computerArea = document.createElement('div');
    const statusArea = document.createElement('div');
    const playerTag = document.createElement('div');
    const computerTag = document.createElement('div');
    playerTag.className = 'tag-label';
    computerTag.className = 'tag-label';
    playerTag.innerText = 'Player Board';
    computerTag.innerText = 'Computer Board';
    playerArea.className = 'player-area';
    computerArea.className = 'computer-area';
    statusArea.className = 'status-area';
    playerArea.append(playerTag, renderBoard(state.playerBoard, state.playerAttacked, 'player'));
    computerArea.append(computerTag, renderBoard(state.computerBoard, state.computerAttacked, 'computer'));
    statusArea.append(renderStatus(state.state));
    gameContainer.append(playerArea, computerArea, statusArea);
}
