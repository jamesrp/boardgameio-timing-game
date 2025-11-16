import React from 'react';

// Tic-Tac-Toe Board Component
export function TicTacToeBoard({ G, ctx, moves, playerID }) {
  const onClick = (id) => {
    moves.clickCell(id);
  };

  let winner = '';
  if (ctx.gameover) {
    if (ctx.gameover.winner !== undefined) {
      winner = <div id="winner">Winner: Player {ctx.gameover.winner}</div>;
    } else if (ctx.gameover.draw) {
      winner = <div id="winner">Draw!</div>;
    }
  }

  const cellStyle = {
    border: '1px solid #555',
    width: '50px',
    height: '50px',
    lineHeight: '50px',
    textAlign: 'center',
    cursor: 'pointer',
    fontSize: '24px',
  };

  const boardStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 50px)',
    gridGap: '5px',
    margin: '20px auto',
    width: 'fit-content',
  };

  const cells = G.cells.map((cell, i) => (
    <div
      key={i}
      style={cellStyle}
      onClick={() => onClick(i)}
    >
      {cell === '0' ? 'X' : cell === '1' ? 'O' : ''}
    </div>
  ));

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Tic-Tac-Toe</h1>
      <div style={boardStyle}>{cells}</div>
      {winner}
      {!ctx.gameover && (
        <div style={{ marginTop: '20px' }}>
          Current Player: {ctx.currentPlayer === '0' ? 'X' : 'O'}
        </div>
      )}
    </div>
  );
}
