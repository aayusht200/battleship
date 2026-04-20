import GameBoard from "./gameboard.js"

export default class Player {
	constructor() {
		this.board = new GameBoard()
	}

	attack(board, coords) {
		return board.receiveAttack(coords[0], coords[1])
	}
}
