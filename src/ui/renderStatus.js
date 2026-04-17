export default function renderStatus(state) {
    const status = document.createElement('div');
    status.className = 'status-text';

    status.textContent = state.winner === null ? state.status : `${state.winner} wins`;

    return status;
}
