import { Client } from 'boardgame.io/client';
import { TicTacToe } from '../Game';

describe('TicTacToe', () => {
  let client;

  beforeEach(() => {
    client = Client({ game: TicTacToe });
  });

  test('initial state has empty cells', () => {
    const { G } = client.getState();
    expect(G.cells).toEqual(Array(9).fill(null));
  });

  test('player can click a cell', () => {
    client.moves.clickCell(0);
    const { G } = client.getState();
    expect(G.cells[0]).toBe('0');
  });

  test('cannot click on an already filled cell', () => {
    client.moves.clickCell(0);
    client.moves.clickCell(0);
    const { G } = client.getState();
    // Cell should still be '0' (player 0), not overwritten
    expect(G.cells[0]).toBe('0');
  });

  test('players alternate turns', () => {
    client.moves.clickCell(0);
    let state = client.getState();
    expect(state.G.cells[0]).toBe('0');
    expect(state.ctx.currentPlayer).toBe('1');

    client.moves.clickCell(1);
    state = client.getState();
    expect(state.G.cells[1]).toBe('1');
    expect(state.ctx.currentPlayer).toBe('0');
  });

  test('detects winner - horizontal', () => {
    client.moves.clickCell(0); // X
    client.moves.clickCell(3); // O
    client.moves.clickCell(1); // X
    client.moves.clickCell(4); // O
    client.moves.clickCell(2); // X wins (0, 1, 2)

    const { ctx } = client.getState();
    expect(ctx.gameover).toEqual({ winner: '0' });
  });

  test('detects winner - vertical', () => {
    client.moves.clickCell(0); // X
    client.moves.clickCell(1); // O
    client.moves.clickCell(3); // X
    client.moves.clickCell(2); // O
    client.moves.clickCell(6); // X wins (0, 3, 6)

    const { ctx } = client.getState();
    expect(ctx.gameover).toEqual({ winner: '0' });
  });

  test('detects winner - diagonal', () => {
    client.moves.clickCell(0); // X
    client.moves.clickCell(1); // O
    client.moves.clickCell(4); // X
    client.moves.clickCell(2); // O
    client.moves.clickCell(8); // X wins (0, 4, 8)

    const { ctx } = client.getState();
    expect(ctx.gameover).toEqual({ winner: '0' });
  });

  test('detects draw', () => {
    // Create a draw scenario
    // X O X
    // O X X
    // O X O
    client.moves.clickCell(0); // X
    client.moves.clickCell(1); // O
    client.moves.clickCell(2); // X
    client.moves.clickCell(3); // O
    client.moves.clickCell(4); // X
    client.moves.clickCell(6); // O
    client.moves.clickCell(5); // X
    client.moves.clickCell(8); // O
    client.moves.clickCell(7); // X - draw

    const { ctx } = client.getState();
    expect(ctx.gameover).toEqual({ draw: true });
  });

  test('game ends and no more moves can be made after winner', () => {
    // Player 0 wins
    client.moves.clickCell(0); // X
    client.moves.clickCell(3); // O
    client.moves.clickCell(1); // X
    client.moves.clickCell(4); // O
    client.moves.clickCell(2); // X wins

    const stateBefore = client.getState();
    expect(stateBefore.ctx.gameover).toEqual({ winner: '0' });

    // Try to make another move
    client.moves.clickCell(5);
    const stateAfter = client.getState();

    // Cell 5 should still be null because game is over
    expect(stateAfter.G.cells[5]).toBe(null);
  });
});
