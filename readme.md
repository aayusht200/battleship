# Battleship

A browser-based implementation of the classic Battleship game built with **modular JavaScript**, **Vite**, and **separated game state architecture**.

This project was built as part of **The Odin Project – JavaScript curriculum**, with a strong focus on **test-driven development, modular design, and clean separation of concerns**.

---

## Features

- Turn-based Battleship gameplay
- Random ship placement for player and computer
- Computer auto-turn logic
- Hit / miss state rendering
- Win detection
- Reset game functionality
- Rearrange ships functionality
- Fully separated UI and game logic layers
- Controller-driven state updates
- Event delegation for board interaction

---

## Tech Stack

- JavaScript (ES Modules)
- HTML / CSS
- Vite
- Jest

---

## Project Structure

```txt
src/
│
├── game/
│   ├── ship.js
│   ├── gameBoard.js
│   ├── player.js
│   └── gameController.js
│
├── ui/
│   ├── render.js
│   ├── renderBoard.js
│   └── renderStatus.js
│
├── index.js
└── style.css
```

---

## Architecture

The project follows a **controller-based state architecture**.

### Game Logic Layer
Responsible for all business logic.

- `ship.js` → ship health + sunk state
- `gameBoard.js` → board state + attacks + placement
- `player.js` → player attack interface
- `gameController.js` → turns, win logic, game flow

### UI Layer
Responsible only for rendering.

- `render.js` → page composition
- `renderBoard.js` → board grid UI
- `renderStatus.js` → game status + controls

The UI never directly mutates game state.

All state changes go through the controller.

---

## Key Learnings

This project focused heavily on:

- test-driven development
- modular JavaScript architecture
- DOM rendering patterns
- event delegation
- object reference debugging
- state-driven UI updates

A major debugging challenge solved during development was a **shared object reference issue**, where both player and computer boards were accidentally using the same ship instances.

---

## How to Run

```bash
npm install
npm run dev
```

---

## Future Improvements

- Manual ship placement
- Smarter computer AI
- Mobile responsiveness
- Animations / transitions
- Game history / move tracker

---

## Author

Built by **Aayush**
