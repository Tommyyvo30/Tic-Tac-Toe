class Grid {
  constructor() {
    this.grid = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];
  }

  render() {
    const gameBoardContainer = document.createElement("div");
    gameBoardContainer.className = "gameBoardContainer";

    const gameBoard = document.createElement("div");
    gameBoard.className = "gameBoard";

    for (let i = 0; i < this.grid.length; i++) {
      let row = document.createElement("div");
      row.className = "row";
      gameBoard.appendChild(row);
      for (let j = 0; j < this.grid.length; j++) {
        const cell = document.createElement("div");
        cell.className = "cell";
        row.appendChild(cell);
      }
    }

    gameBoardContainer.appendChild(gameBoard);
    document.body.appendChild(gameBoardContainer);
    return gameBoardContainer;
  }
}

class Player {
  constructor(playerMarker) {
    this.playerMarker = playerMarker;
  }
}
class Game {
  constructor() {
    this.gameBoard = new Grid();
    this.gameBoard.render();
    this.player1 = new Player("X");
    this.player2 = new Player("O");
    this.currentPlayer = this.player1;
  }
  handleClick() {
    const selectCells = document.querySelectorAll(".cell");
    let playerMarker = this.playerMarker;

    selectCells.forEach((cell) => {
      cell.addEventListener("click", () => {
        if (cell.textContent === "") {
          cell.textContent = this.currentPlayer.playerMarker;
          this.currentPlayer =
            this.currentPlayer === this.player1 ? this.player2 : this.player1; // If condition is true, return player2 otherwise return player1
        }
      });
    });
  }
  // Create game instance
  // Create 2 player objects
  // Create logic to check for win
  // Handle click
  // Handle Turns
}

const game = new Game();
game.handleClick();
