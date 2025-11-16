# boardgameio-timing-game
A boardgame.io implementation of 'the timing game'

## Current Status

This repository currently contains a working Tic-Tac-Toe example using boardgame.io to demonstrate the framework setup.

## Development Setup (macOS)

### First-Time Setup

1. **Check your Node.js version:**
   ```bash
   node --version
   ```
   This project requires Node.js 16+ (Node 18 or 20 LTS recommended).

2. **Consider using a Node version manager** (recommended):

   With homebrew, you can install either:
   - **nvm** (Node Version Manager) - most popular
     ```bash
     brew install nvm
     ```
   - **fnm** (Fast Node Manager) - faster, written in Rust
     ```bash
     brew install fnm
     ```

   Node version managers let you switch Node versions per-project, which is helpful when working on multiple repositories.

3. **Keep npm up to date:**
   ```bash
   npm install -g npm@latest
   ```

### Important Notes

- **Always run `npm install`** after pulling changes (if `package.json` changed)
- **Don't use `npm update`** unless you specifically want to upgrade dependencies - it can introduce breaking changes
- **Check for outdated packages** (optional):
  ```bash
  npm outdated  # Shows what could be updated, doesn't change anything
  ```

## Installation

```bash
npm install
```

This installs all dependencies specified in `package.json` and creates a `package-lock.json` file locally (gitignored).

## Development Workflow

### Typical Daily Workflow

```bash
# After pulling changes from git
npm install          # Only if package.json changed

# Development
npm test            # Run all tests once
npm test:watch      # Run tests in watch mode (re-runs on file changes)
npm start           # Start dev server (opens browser automatically at localhost:8000)

# Building
npm run build       # Create production build in dist/
```

### When to Run `npm install`

- After cloning the repository for the first time
- After pulling changes that modified `package.json`
- After switching branches that have different dependencies
- If you see errors about missing modules

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
