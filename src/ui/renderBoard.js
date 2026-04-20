export default function renderBoard(board, attacked, role) {
	const playGrid = document.createElement("div")
	playGrid.className = "play-grid"
	for (let i = 0; i < 10; i++) {
		for (let j = 0; j < 10; j++) {
			const value = board[i][j]
			const button = document.createElement("button")
			button.className = `${role}`
			button.dataset.x = i
			button.dataset.y = j

			if (role === "player") {
				button.classList.add("disable")
				if (value !== null && value !== "miss")
					button.classList.add("player-ships")
			}
			if (attacked.some(([x, y]) => x === i && y === j)) {
				if (value === "miss") button.classList.add("miss")
				else {
					button.classList.remove("player-ships")
					button.classList.add("hit")
				}
			}
			playGrid.append(button)
		}
	}
	return playGrid
}
