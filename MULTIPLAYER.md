# Tic-Tac-Toe Multiplayer Setup

This project implements a tic-tac-toe game using [boardgame.io](https://boardgame.io/) with remote multiplayer support.

## Getting Started

### Installation

First, install the dependencies:

```bash
npm install
```

### Running the Multiplayer Game

You have two options:

#### Option 1: Run Server and Client Together (Recommended)

```bash
npm run dev
```

This will:
- Start the boardgame.io server on port 8000
- Start the webpack dev server on port 8080 (and open the browser)

#### Option 2: Run Server and Client Separately

In one terminal, start the server:
```bash
npm run serve
```

In another terminal, start the client:
```bash
npm start
```

## How It Works

### Server

The server (`server.js`) runs a boardgame.io server that:
- Manages game state
- Synchronizes moves between players
- Runs on port 8000 by default

### Client

The client (`src/App.js`) creates two player views side-by-side:
- **Player 0 (X)**: Left side
- **Player 1 (O)**: Right side

Both players connect to the same match (matchID: "game-1") via SocketIO, so moves made by one player are immediately reflected for the other player.

## Testing Multiplayer

1. Run `npm run dev`
2. The browser will open showing both players side by side
3. Click on a cell as Player 0 (X) - you'll see it update on both sides
4. The turn automatically switches to Player 1 (O)
5. Click on a different cell as Player 1 (O)
6. Continue playing until someone wins or it's a draw

## Playing with Remote Players

To play with someone on a different computer:

1. Update `src/App.js` and change the server URL from `localhost:8000` to your server's IP/domain
2. Each player should open the application but modify the code to show only their player view
3. Both players must use the same `matchID` to join the same game

Example for a single player view:
```jsx
function App() {
  return (
    <div>
      <TicTacToeClient playerID="0" matchID="game-1" />
    </div>
  );
}
```

## Architecture

- **boardgame.io Server**: Manages game state and player synchronization
- **SocketIO**: Handles real-time communication between clients and server
- **React Client**: Renders the game board and handles player interactions
- **Game Logic**: Defined in `src/Game.js` with victory conditions and move validation

## Scripts

- `npm run dev` - Run both server and client concurrently
- `npm run serve` - Run only the boardgame.io server
- `npm start` - Run only the webpack dev server
- `npm run build` - Build the client for production
- `npm test` - Run tests

## Configuration

### Change Server Port

Edit `server.js` and modify the PORT constant, or set the `PORT` environment variable:
```bash
PORT=3000 npm run serve
```

### Change Match ID

In `src/App.js`, modify the `matchID` prop to create different game instances:
```jsx
<TicTacToeClient playerID="0" matchID="my-custom-game-id" />
```

## Resources

- [boardgame.io Documentation](https://boardgame.io/documentation/)
- [Multiplayer Guide](https://boardgame.io/documentation/#/multiplayer)
- [Tutorial](https://boardgame.io/documentation/#/tutorial)
