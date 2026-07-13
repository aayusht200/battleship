# Battleship Game

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Game Development](https://img.shields.io/badge/Game%20Dev-Interactive%20Logic-blue)
![State Management](https://img.shields.io/badge/State%20Management-OOP-green)
![License](https://img.shields.io/badge/License-MIT-lightgrey)

A fully functional implementation of the classic **Battleship** board game in JavaScript. This project demonstrates game logic, turn-based mechanics, AI opponent logic, and state management through an interactive gaming experience.

## Overview

Battleship is a strategic guessing game where two players take turns trying to sink each other's fleet. This implementation features:

- **Game state management** — Tracking boards, ships, and turn sequences
- **Ship placement logic** — Validating ship positions on grids
- **Turn-based mechanics** — Alternating player and AI turns
- **AI strategy** — Computer opponent with intelligent targeting
- **Win/loss conditions** — Detecting game completion
- **User experience** — Clear feedback on hits, misses, and sinks

## Features

### Core Gameplay
- **2-Player Mode** — Human vs AI opponent
- **Board Setup** — Place ships on 10×10 grid
- **Turn System** — Players alternate attacking opponent's board
- **Hit/Miss Tracking** — Visual feedback for each attack
- **Ship Sinking** — Detect when ships are fully destroyed
- **Game Over Detection** — Determine winner when all opponent ships are sunk

### Game Mechanics
- **Multiple Ship Types** — Battleship, Cruiser, Destroyer, Submarine
- **Ship Placement Validation** — Prevent overlapping or invalid placements
- **Shot Tracking** — Record previously attacked squares
- **Reveal/Hide Boards** — Strategic information hiding

### AI Opponent
- **Smart Targeting** — AI adapts strategy based on hits
- **Hunt Mode** — Search grid systematically when no hits
- **Destroy Mode** — Focus on completing sunk ships
- **Pattern Recognition** — Optimize next guess based on previous hits

## Tech Stack

- **Language**: JavaScript (ES6+)
- **Paradigms**: Object-oriented programming, game loops, state management
- **Architecture**: Turn-based game system with AI logic
- **UI**: Console-based or DOM manipulation (depending on implementation)

## Getting Started

### Prerequisites
- Node.js (any recent version)
- Web browser (if DOM-based implementation)

### Installation

```bash
git clone https://github.com/aayusht200/battleship.git
cd battleship
```

### Running the Game

```bash
# Console-based version
node index.js

# Or open in browser (if web version exists)
open index.html
```

## Game Rules

### Setup Phase
1. Each player places 4 ships on their 10×10 board:
   - Battleship (4 squares)
   - Cruiser (3 squares)
   - Destroyer (2 squares)
   - Submarine (1 square)
2. Ships cannot overlap or extend off the board
3. Ships can be placed horizontally or vertically

### Play Phase
1. Players alternate calling out coordinates (e.g., "B5")
2. Opponent announces if it's a "Hit" or "Miss"
3. If hit, attacker continues; if miss, turn ends
4. Continue until one player's fleet is completely destroyed

### Win Condition
- First player to sink all opponent's ships wins

## Game Classes and Methods

### Game

```javascript
class Game {
    constructor(playerBoard, aiBoard)
    startGame()              // Initialize game loop
    currentPlayerAttack()    // Handle player's turn
    aiAttack()              // Handle AI's turn
    isGameOver()            // Check win conditions
    endGame(winner)         // Conclude game
}
```

### Board

```javascript
class Board {
    constructor()
    placeShip(ship, row, col, horizontal)  // Add ship to board
    receiveAttack(row, col)                // Register opponent's attack
    allShipsSunk()                         // Check if fleet destroyed
    isValidPlacement(ship, row, col, horizontal)  // Validate position
    getBoard()              // Return visible board state
}
```

### Ship

```javascript
class Ship {
    constructor(name, length)
    takeDamage()           // Register a hit
    isSunk()               // Check if destroyed
    getHealth()            // Remaining health
}
```

### AI

```javascript
class AI {
    constructor(board)
    makeMove(enemyBoard)   // Determine next attack
    processHit(row, col)   // Update strategy after hit
    updateStrategy()       // Adapt hunting vs destroying
}
```

## Example Usage

```javascript
const { Game, Board, Ship } = require('./battleship');

// Create game boards
const playerBoard = new Board();
const aiBoard = new Board();

// Place player's ships
const battleship = new Ship("Battleship", 4);
playerBoard.placeShip(battleship, 0, 0, true);  // Horizontal at (0,0)

const cruiser = new Ship("Cruiser", 3);
playerBoard.placeShip(cruiser, 2, 0, true);

// Create and start game
const game = new Game(playerBoard, aiBoard);
game.startGame();

// Simulate turn
game.currentPlayerAttack(3, 5);  // Player attacks AI's (3,5)
game.aiAttack();                  // AI makes counter-attack
```

## Game Flow Diagram

```
START
  ↓
Player Places Ships
  ↓
AI Places Ships (Random)
  ↓
GAME LOOP:
  ├→ Player's Turn: Attack AI Board
  │   ├→ Hit? → Mark Hit, Continue
  │   ├→ Miss? → Pass to AI
  │   └→ All enemy ships sunk? → Player Wins!
  │
  └→ AI's Turn: Attack Player Board
      ├→ Hit? → Mark Hit, Continue
      ├→ Miss? → Pass to Player
      └→ All player ships sunk? → AI Wins!
```

## AI Strategy

### Hunt Mode
```
When no hits detected:
1. Search grid systematically (diagonal or checkerboard pattern)
2. Minimize overlap with previous misses
3. Adjust search pattern based on ship sizes
```

### Destroy Mode
```
When hit detected:
1. Target adjacent squares (up, down, left, right)
2. Determine ship orientation from multiple hits
3. Complete sinking by eliminating entire ship
4. Return to hunt mode when ship sunk
```

## Complexity Analysis

### Time Complexity
| Operation | Complexity |
|-----------|-----------|
| Place ship | O(ship_length) |
| Receive attack | O(1) |
| Check win condition | O(number_of_ships) |
| AI move | O(board_size²) worst case |

### Space Complexity
- **Board**: O(10²) = O(100) for 10×10 grid
- **Ships**: O(4) for fixed number of ships
- **AI state**: O(board_size²) for tracking shots

## Key Learning Points

### Game State Management
- Separate player and AI boards (information hiding)
- Track game phase (setup vs play vs end)
- Store move history for validation

### Turn-Based Systems
- Implement turn controller
- Clear player/AI action boundaries
- Handle turn transitions

### Opponent AI
- Hunt vs Destroy strategies
- Predictive targeting
- Adaptive difficulty

### Input Validation
- Verify ship placements
- Validate attack coordinates
- Prevent illegal moves

## Interview Discussion Points

1. **State Management** — How would you extend for multiplayer?
2. **AI Complexity** — Can you implement different difficulty levels?
3. **Data Structures** — What's optimal for board representation?
4. **Optimization** — Can you reduce AI computation time?
5. **Scalability** — How does this scale to larger boards?

## Roadmap

- [ ] Add web UI with canvas/DOM visualization
- [ ] Implement multiple AI difficulty levels (Easy, Medium, Hard)
- [ ] Add multiplayer support (local or network-based)
- [ ] Add game statistics and scoring
- [ ] Implement saved games feature
- [ ] Add unit tests (Jest)
- [ ] Add mobile-responsive interface
- [ ] Add sound effects and animations

## Enhancement Ideas

### Difficulty Levels
- **Easy**: Random moves only
- **Medium**: Hunt + Destroy strategy
- **Hard**: Advanced pattern recognition, prediction

### Game Variants
- **Large boards** — 12×12 or 15×15
- **More ships** — Add additional ship types
- **Special rules** — Power-ups, radar scans, etc.
- **Campaign mode** — Multiple rounds with scoring

### Features
- **Undo moves** — Take back shots
- **Hint system** — Suggest optimal moves
- **Replay** — Watch game playback
- **Statistics** — Win/loss ratio, average shots

## Related Concepts

- **Turn-based systems** — Common in strategy games
- **Game loops** — Core game engine concept
- **State machines** — Game phase transitions
- **Minimax algorithm** — Advanced AI strategy
- **Monte Carlo methods** — AI decision optimization

## Resources for Learning

- [Wikipedia: Battleship Game](https://en.wikipedia.org/wiki/Battleship_(game))
- [Game Design Patterns](https://gameprogrammingpatterns.com/)
- [AI for Games](https://www.youtube.com/watch?v=_CKryf2i0OM)
- [LeetCode: Game Problems](https://leetcode.com/tag/game/)

## License

MIT

## Author

[aayusht200](https://github.com/aayusht200)

---

**Game Design Note:** This implementation prioritizes clear code structure and strategic depth. For production games, consider using game engines like Phaser or Three.js.
