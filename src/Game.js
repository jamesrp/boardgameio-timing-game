// Tic-Tac-Toe Game Logic using boardgame.io

// Check if there's a winner
function IsVictory(cells) {
  const positions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
    [0, 4, 8], [2, 4, 6]             // diagonals
  ];

  for (let pos of positions) {
    const [a, b, c] = pos;
    if (cells[a] !== null && cells[a] === cells[b] && cells[a] === cells[c]) {
      return true;
    }
  }

  return false;
}

// Check if the game is a draw
function IsDraw(cells) {
  return cells.every(cell => cell !== null);
}

// The Tic-Tac-Toe game definition
export const TicTacToe = {
  name: 'tic-tac-toe',

  setup: () => ({
    cells: Array(9).fill(null),
  }),

  turn: {
    minMoves: 1,
    maxMoves: 1,
  },

  moves: {
    clickCell: ({ G, playerID }, id) => {
      // Don't allow clicking on already filled cells
      if (G.cells[id] !== null) {
        return;
      }

      G.cells[id] = playerID;
    },
  },

  endIf: ({ G, ctx }) => {
    if (IsVictory(G.cells)) {
      return { winner: ctx.currentPlayer };
    }
    if (IsDraw(G.cells)) {
      return { draw: true };
    }
  },
};
