import { Client } from 'boardgame.io/react';
import { TicTacToe } from './Game';
import { TicTacToeBoard } from './Board';

// Create the boardgame.io client
const App = Client({
  game: TicTacToe,
  board: TicTacToeBoard,
  numPlayers: 2,
  debug: true,
});

export default App;
