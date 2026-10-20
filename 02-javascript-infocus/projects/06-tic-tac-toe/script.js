// --- Game Logic ---

function Cell() {
  let value = 0;

  const addToken = (playerToken) => {
    value = playerToken;
  };

  const getValue = () => value;

  return { addToken, getValue };
}

function Gameboard() {
  const rows = 3;
  const columns = 3;
  let board = [];

  const initBoard = () => {
    board = [];
    for (let i = 0; i < rows; i++) {
      board[i] = [];
      for (let j = 0; j < columns; j++) {
        board[i].push(Cell());
      }
    }
  };

  initBoard();

  const getBoard = () => board;

  const placeToken = (row, col, playerToken) => {
    if (board[row][col].getValue() !== 0) return false;
    board[row][col].addToken(playerToken);
    return true;
  };

  const isFull = () => {
    return board.every((row) => row.every((cell) => cell.getValue() !== 0));
  };

  return { getBoard, placeToken, isFull, resetBoard: initBoard };
}

function GameController(playerOneName = "Player One", playerTwoName = "Player Two") {
  const board = Gameboard();

  const players = [
    { name: playerOneName, token: 1, symbol: "X" },
    { name: playerTwoName, token: 2, symbol: "O" }
  ];

  let activePlayer = players[0];
  let gameOver = false;
  let winningCells = [];

  const switchPlayerTurn = () => {
    activePlayer = activePlayer === players[0] ? players[1] : players[0];
  };

  const getActivePlayer = () => activePlayer;
  const isGameOver = () => gameOver;
  const getWinningCells = () => winningCells;

  const updatePlayerNames = (name1, name2) => {
    players[0].name = name1 || "Player One";
    players[1].name = name2 || "Player Two";
  };

  const checkWin = (token) => {
    const b = board.getBoard();

    // Check Rows
    for (let i = 0; i < 3; i++) {
      if (b[i][0].getValue() === token && b[i][1].getValue() === token && b[i][2].getValue() === token) {
        winningCells = [[i, 0], [i, 1], [i, 2]];
        return true;
      }
    }

    // Check Columns
    for (let j = 0; j < 3; j++) {
      if (b[0][j].getValue() === token && b[1][j].getValue() === token && b[2][j].getValue() === token) {
        winningCells = [[0, j], [1, j], [2, j]];
        return true;
      }
    }

    // Check Diagonals
    if (b[0][0].getValue() === token && b[1][1].getValue() === token && b[2][2].getValue() === token) {
      winningCells = [[0, 0], [1, 1], [2, 2]];
      return true;
    }

    if (b[0][2].getValue() === token && b[1][1].getValue() === token && b[2][0].getValue() === token) {
      winningCells = [[0, 2], [1, 1], [2, 0]];
      return true;
    }

    return false;
  };

  const playTurn = (row, col) => {
    if (gameOver) return { status: "game_over" };

    const moveSuccessful = board.placeToken(row, col, activePlayer.token);
    if (!moveSuccessful) return { status: "invalid" };

    if (checkWin(activePlayer.token)) {
      gameOver = true;
      return { status: "win", winner: activePlayer, winningCells };
    }

    if (board.isFull()) {
      gameOver = true;
      return { status: "tie" };
    }

    switchPlayerTurn();
    return { status: "ongoing", activePlayer };
  };

  const resetGame = () => {
    board.resetBoard();
    gameOver = false;
    winningCells = [];
    activePlayer = players[0];
  };

  return {
    playTurn,
    getActivePlayer,
    isGameOver,
    getWinningCells,
    getBoard: board.getBoard,
    resetGame,
    updatePlayerNames
  };
}

// --- UI Controller ---

function ScreenController() {
  const game = GameController();

  // DOM Elements
  const boardEl = document.getElementById("board");
  const turnStatusEl = document.getElementById("turn-status");
  const p1NameInput = document.getElementById("p1-name");
  const p2NameInput = document.getElementById("p2-name");
  const startBtn = document.getElementById("start-btn");
  const resetBtn = document.getElementById("reset-btn");

  const updateScreen = (lastResult = null) => {
    boardEl.innerHTML = "";
    const currentBoard = game.getBoard();
    const activePlayer = game.getActivePlayer();
    const winningCells = game.getWinningCells();

    // Update Status Message
    if (lastResult?.status === "win") {
      turnStatusEl.textContent = `🎉 ${lastResult.winner.name} wins!`;
      turnStatusEl.style.color = lastResult.winner.token === 1 ? "var(--accent-p1)" : "var(--accent-p2)";
    } else if (lastResult?.status === "tie") {
      turnStatusEl.textContent = "🤝 It's a Tie!";
      turnStatusEl.style.color = "var(--accent-tie)";
    } else {
      turnStatusEl.textContent = `${activePlayer.name}'s turn (${activePlayer.symbol})`;
      turnStatusEl.style.color = activePlayer.token === 1 ? "var(--accent-p1)" : "var(--accent-p2)";
    }

    // Render Grid
    currentBoard.forEach((row, rowIndex) => {
      row.forEach((cell, colIndex) => {
        const cellBtn = document.createElement("div");
        cellBtn.classList.add("cell");
        cellBtn.dataset.row = rowIndex;
        cellBtn.dataset.col = colIndex;

        const val = cell.getValue();
        if (val === 1) {
          cellBtn.textContent = "X";
          cellBtn.classList.add("taken", "token-1");
        } else if (val === 2) {
          cellBtn.textContent = "O";
          cellBtn.classList.add("taken", "token-2");
        }

        const isWinning = winningCells.some(
          ([r, c]) => r === rowIndex && c === colIndex
        );
        if (isWinning) {
          cellBtn.classList.add("winning-cell");
        }

        boardEl.appendChild(cellBtn);
      });
    });
  };

  const handleBoardClick = (e) => {
    const target = e.target;
    if (!target.classList.contains("cell")) return;

    const row = parseInt(target.dataset.row);
    const col = parseInt(target.dataset.col);

    const result = game.playTurn(row, col);
    if (result.status !== "invalid") {
      updateScreen(result);
    }
  };

  // Event Listeners
  boardEl.addEventListener("click", handleBoardClick);

  startBtn.addEventListener("click", () => {
    game.updatePlayerNames(p1NameInput.value, p2NameInput.value);
    game.resetGame();
    updateScreen();
  });

  resetBtn.addEventListener("click", () => {
    game.resetGame();
    updateScreen();
  });

  // Initial render
  updateScreen();
}

// Start Application
ScreenController();