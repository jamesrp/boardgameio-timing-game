# boardgameio-timing-game
A boardgame.io implementation of 'the timing game'

## Current Status

This repository currently contains a working Tic-Tac-Toe example using boardgame.io to demonstrate the framework setup.

## Installation

```bash
npm install
```

## Running the Game

### Development Server
Start the development server with hot reload:
```bash
npm start
```

The game will open in your browser at `http://localhost:8000`.

### Running Tests
Run the unit tests using boardgame.io's testing utilities:
```bash
npm test
```

Run tests in watch mode:
```bash
npm test:watch
```

### Build for Production
Create a production build:
```bash
npm build
```

## Project Structure

```
src/
  Game.js          # Game logic and rules
  Board.js         # React board component
  App.js           # Client setup
  index.js         # Entry point
  __tests__/       # Unit tests
    Game.test.js   # Game logic tests
```

## Testing

The project includes comprehensive unit tests that verify:
- Initial game state
- Player moves and turn alternation
- Move validation (preventing overwriting cells)
- Win condition detection (horizontal, vertical, diagonal)
- Draw detection
- Game end state enforcement

All tests use boardgame.io's testing utilities for command-line testing.
