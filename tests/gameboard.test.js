import gameBoard from "../src/gameboard.js"
import Ship from "../src/ship.js"

describe("GameBoard", () => {
	describe("initialization", () => {
		it("creates a game board instance", () => {
			const board = new gameBoard()
			expect(board).toBeDefined()
		})
		it("creates a board property", () => {
			const board = new gameBoard()
			expect(board.board).toBeDefined()
		})
		it("Board is an array", () => {
			const board = new gameBoard()
			expect(Array.isArray(board.board)).toBe(true)
		})
		it("board length is 10", () => {
			const board = new gameBoard()
			expect(board.board.length).toBe(10)
		})
		it("board is a 2D array (10*10)", () => {
			const board = new gameBoard()
			expect(board.board[0].length).toBe(10)
		})
		it("initializes all cells to null", () => {
			const board = new gameBoard()
			expect(board.board.flat().every((cell) => cell === null)).toBe(true)
		})
	})
	describe("placeShip", () => {
		it("place ship horizontally", () => {
			const board = new gameBoard()
			const ship = new Ship(2)

			board.placeShip(ship, 4, 4, "horizontal")
			expect(board.board[4][5]).toBe(ship)
		})
		it("place ship vertically", () => {
			const board = new gameBoard()
			const ship = new Ship(2)

			board.placeShip(ship, 4, 4, "vertical")
			expect(board.board[4][4]).toBe(ship)
			expect(board.board[5][4]).toBe(ship)
		})
		it("ship should not overlap", () => {
			const board = new gameBoard()
			const ship = new Ship(2)
			const shipTwo = new Ship(2)

			board.placeShip(ship, 4, 4, "vertical")
			expect(board.placeShip(shipTwo, 5, 4, "vertical")).toBe(false)
		})
		it("coords out of bounds", () => {
			const board = new gameBoard()
			const ship = new Ship(2)

			expect(board.placeShip(ship, 9, 9, "vertical")).toBe(false)
		})
	})
	describe("receiveAttack", () => {
		it("successful hit", () => {
			const board = new gameBoard()
			const ship = new Ship(1)
			board.placeShip(ship, 4, 4, "vertical")
			expect(board.receiveAttack(4, 4)).toBe("hit")
			expect(ship.isSunk()).toBe(true)
		})
		it("missed shot", () => {
			const board = new gameBoard()
			const ship = new Ship(1)
			board.placeShip(ship, 4, 4, "vertical")
			expect(board.receiveAttack(4, 3)).toBe("miss")
			expect(board.attacked[0]).toStrictEqual([4, 3])
		})
		it("invalid shot (Out of bound shot)", () => {
			const board = new gameBoard()
			const ship = new Ship(1)
			board.placeShip(ship, 4, 4, "vertical")
			expect(board.receiveAttack(10, 3)).toBe("invalid")
		})
		it("invalid shot (same location shot)", () => {
			const board = new gameBoard()
			const ship = new Ship(1)
			board.placeShip(ship, 4, 4, "vertical")
			board.receiveAttack(3, 3)
			expect(board.receiveAttack(3, 3)).toBe("invalid")
		})
	})
	describe("areAllShipsSunk", () => {
		it("check for one ship", () => {
			const board = new gameBoard()
			const ship = new Ship(1)

			board.placeShip(ship, 4, 4, "horizontal")
			board.receiveAttack(4, 4)
			expect(board.areAllShipsSunk()).toBe(true)
		})

		it("check for two ship where one is sunk", () => {
			const board = new gameBoard()
			const ship = new Ship(1)
			const shipTwo = new Ship(1)

			board.placeShip(ship, 4, 4, "horizontal")
			board.placeShip(shipTwo, 5, 5, "horizontal")

			board.receiveAttack(4, 4)
			expect(board.areAllShipsSunk()).toBe(false)
		})
	})
})
