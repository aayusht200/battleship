export default function renderStatus(state) {
    const status = document.createElement('div');
    status.className = 'status-text';
    const button = document.createElement('button');
    button.className = 'reset-btn';
    status.textContent = state.winner === null ? state.status : `${state.winner} wins`;
    if (state.status === 'ongoing') button.textContent = 'Rearrange Ships';
    if (state.status === 'over') button.textContent = 'Reset Game';

    status.append(button);
    return status;
}
