export default function renderStatus(state) {
    const status = document.createElement('div');
    status.className = 'status-text';

    status.textContent = state.winner === null ? state.status : `${state.winner} wins`;

    if (state.status === 'over') {
        const button = document.createElement('button');
        button.className = 'reset-btn';
        button.textContent = 'Reset Game';
        status.append(button);
    }
    return status;
}
