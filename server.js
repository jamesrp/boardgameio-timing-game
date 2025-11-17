const { Server, Origins } = require('boardgame.io/server');
const { TicTacToe } = require('./src/Game');

const server = Server({
  games: [TicTacToe],
  origins: [
    // Allow localhost connections
    Origins.LOCALHOST,
    // Allow connections from different ports during development
    /^http:\/\/localhost:\d+$/,
  ],
});

const PORT = process.env.PORT || 8000;

server.run(PORT, () => {
  console.log(`Boardgame.io server running on port ${PORT}...`);
});
