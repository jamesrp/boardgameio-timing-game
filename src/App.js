import React from 'react';
import { Client } from 'boardgame.io/react';
import { SocketIO } from 'boardgame.io/multiplayer';
import { TicTacToe } from './Game';
import { TicTacToeBoard } from './Board';

// Create the boardgame.io client with multiplayer support
const TicTacToeClient = Client({
  game: TicTacToe,
  board: TicTacToeBoard,
  multiplayer: SocketIO({ server: 'localhost:8000' }),
  debug: true,
});

// Component to render multiple players for testing
function App() {
  return (
    <div style={{ display: 'flex', gap: '50px', justifyContent: 'center', padding: '20px' }}>
      <div>
        <h2 style={{ textAlign: 'center' }}>Player 0 (X)</h2>
        <TicTacToeClient playerID="0" matchID="game-1" />
      </div>
      <div>
        <h2 style={{ textAlign: 'center' }}>Player 1 (O)</h2>
        <TicTacToeClient playerID="1" matchID="game-1" />
      </div>
    </div>
  );
}

export default App;
