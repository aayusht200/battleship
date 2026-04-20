export default function renderStatus(state) {
    const wrapper = document.createElement('div');
    wrapper.className = 'status-wrapper';

    const status = document.createElement('div');
    status.className = 'status-text';

    const instruction = document.createElement('span');
    instruction.className = 'instruction-text';

    const button = document.createElement('button');
    button.className = 'reset-btn';

    status.textContent = state.winner === null ? state.status : `${state.winner} wins`;

    instruction.textContent = 'Click enemy grid to attack';

    button.textContent = state.status === 'ongoing' ? 'Rearrange Ships' : 'Reset Game';

    wrapper.append(status, instruction, button);

    return wrapper;
}
