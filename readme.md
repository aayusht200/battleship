# Battleship Project – Execution Checklist

## How to Use This

Follow this strictly in order. Do not skip steps. Do not jump ahead.

---

# Phase 0 – Setup

### ✅ Tasks

* [ ] Initialize project (Vite or basic setup)
* [ ] Install Jest
* [ ] Configure Jest
* [ ] Verify Jest runs with a dummy test

---

# Phase 1 – Ship Module

## Step 1: Write Tests First

* [ ] Test that a ship initializes correctly
* [ ] Test that `hit()` increases hit count
* [ ] Test that `isSunk()` returns false initially
* [ ] Test that `isSunk()` returns true when hits = length

## Step 2: Implement Ship

* [ ] Add length property
* [ ] Add hit tracking
* [ ] Implement `hit()`
* [ ] Implement `isSunk()`

## Done When:

* [ ] All Ship tests pass

---

# Phase 2 – Gameboard Module

## Step 1: Plan Before Coding

* [ ] Decide grid structure (2D array recommended)
* [ ] Decide how ships will be stored
* [ ] Decide how to track missed attacks

---

## Step 2: Write Tests

### Ship Placement

* [ ] Test placing a ship at valid coordinates
* [ ] Test preventing invalid placement (optional early)

### Attacks

* [ ] Test hit detection
* [ ] Test miss detection
* [ ] Test recording missed attacks

### Edge Cases

* [ ] Test repeated attack on same coordinate

### Game State

* [ ] Test all ships sunk condition

---

## Step 3: Implement Gameboard

* [ ] Create grid structure
* [ ] Implement ship placement
* [ ] Implement attack handling
* [ ] Store missed shots
* [ ] Implement win condition check

## Done When:

* [ ] All Gameboard tests pass
* [ ] No duplicate attacks allowed

---

# Phase 3 – Player Module

## Step 1: Write Tests

* [ ] Player has a gameboard
* [ ] Player can attack opponent board
* [ ] Computer generates valid moves
* [ ] Computer does not repeat moves

---

## Step 2: Implement Player

* [ ] Create player factory/class
* [ ] Attach gameboard
* [ ] Implement attack method
* [ ] Add computer move logic
* [ ] Track previous moves

## Done When:

* [ ] Player tests pass
* [ ] Computer avoids duplicate moves

---

# Phase 4 – Game Controller

## Step 1: Plan

* [ ] Where will turn logic live? (Answer: here)
* [ ] How will players be initialized?
* [ ] How will game end be detected?

---

## Step 2: Implement

* [ ] Initialize two players
* [ ] Track current turn
* [ ] Implement attack flow
* [ ] Switch turns after each move
* [ ] Detect winner

## Done When:

* [ ] Turns alternate correctly
* [ ] Game stops when finished

---

# Phase 5 – DOM Module (UI)

## Step 1: Structure UI

* [ ] Create basic HTML layout
* [ ] Two boards (player + enemy)

---

## Step 2: Rendering

* [ ] Render grid from gameboard data
* [ ] Show hits and misses

---

## Step 3: Interaction

* [ ] Add click listeners to enemy board
* [ ] Send coordinates to controller
* [ ] Re-render after each move

## Rules:

* [ ] No game logic inside DOM module

---

# Phase 6 – Game Initialization

* [ ] Create players
* [ ] Pre-place ships (hardcoded)
* [ ] Render initial boards

---

# Phase 7 – Gameplay Loop

* [ ] Player clicks enemy grid
* [ ] Attack is processed
* [ ] Board updates
* [ ] Turn switches
* [ ] UI updates

---

# Phase 8 – Computer Logic

* [ ] Generate random coordinates
* [ ] Prevent duplicate moves
* [ ] Execute move automatically

---

# Phase 9 – Game End

* [ ] Detect when all ships are sunk
* [ ] Stop further input
* [ ] Display winner

---

# Phase 10 – Ship Placement (Later)

* [ ] Add manual placement OR
* [ ] Add random placement button

---

# Final Checklist (Definition of Done)

* [ ] All tests pass
* [ ] No console.log debugging
* [ ] No duplicate attacks
* [ ] Turns work correctly
* [ ] Game ends properly
* [ ] UI reflects actual game state
* [ ] Logic and UI are fully separated

---

# Discipline Rules

* Do not skip tests
* Do not mix DOM with logic
* Do not jump phases
* Fix issues immediately before moving forward

---

# Your Next Step

👉 Start Phase 1: Ship tests

Do not write implementation yet.
