class Grid {
  constructor() {
    this.grid = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
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
    this.resetButton = new resetButton();
  }
  handleClick() {
    const selectCells = document.querySelectorAll(".cell");

    selectCells.forEach((cell, index) => {
      cell.addEventListener("click", () => {
        if (cell.innerHTML === "") {
          const row = Math.floor(index / 3);
          const col = index % 3;
          this.gameBoard.grid[row][col] = this.currentPlayer.playerMarker;
          cell.innerHTML = this.currentPlayer.playerMarker;
          this.checkForWinner();
          this.switchPlayer();
        }
      });
    });
  }

  switchPlayer() {
    this.currentPlayer =
      this.currentPlayer === this.player1 ? this.player2 : this.player1;
  }
  checkTie() {
    for (let i = 0; i < this.gameBoard.grid.length; i++) {
      for (let j = 0; j < this.gameBoard.grid[i].length; j++) {
        if (this.gameBoard.grid[i][j] === "") {
          return false;
        }
      }
    }
    return true;
  }

  checkVertical() {
    const gridLength = this.gameBoard.grid.length;
    const grid = this.gameBoard.grid;

    for (let i = 0; i < gridLength; i++) {
      let counter1 = 0;
      let counter2 = 0;
      for (let j = 0; j < gridLength; j++) {
        if (grid[i][j] === this.player1.playerMarker) {
          counter1++;
        } else if (grid[i][j] === this.player2.playerMarker) {
          counter2++;
        }
      }
      if (counter1 === 3) {
        return this.player1;
      } else if (counter2 === 3) {
        return this.player2;
      }
    }
    return "";
  }

  checkHorizontal() {
    const gridLength = this.gameBoard.grid.length;
    const grid = this.gameBoard.grid;
    for (let j = 0; j < gridLength; j++) {
      let counter1 = 0;
      let counter2 = 0;
      for (let i = 0; i < gridLength; i++) {
        if (grid[i][j] === this.player1.playerMarker) {
          counter1++;
        } else if (grid[i][j] === this.player2.playerMarker) {
          counter2++;
        }
      }
      if (counter1 === 3) {
        return this.player1;
      } else if (counter2 === 3) {
        return this.player2;
      }
    }
    return "";
  }

  checkLeftDiagonal() {
    const gridLength = this.gameBoard.grid.length;
    const grid = this.gameBoard.grid;
    let counter1 = 0;
    let counter2 = 0;

    for (let i = 0; i < gridLength; i++) {
      if (grid[i][i] === this.player1.playerMarker) {
        counter1++;
      } else if (grid[i][i] === this.player2.playerMarker) {
        counter2++;
      }
    }

    if (counter1 === 3) {
      return this.player1;
    } else if (counter2 === 3) {
      return this.player2;
    }

    return "";
  }

  checkRightDiagonal() {
    const gridLength = this.gameBoard.grid.length;
    const grid = this.gameBoard.grid;
    let counter1 = 0;
    let counter2 = 0;

    for (let i = 0; i < gridLength; i++) {
      if (grid[i][gridLength - i - 1] === this.player1.playerMarker) {
        counter1++;
      } else if (grid[i][gridLength - i - 1] === this.player2.playerMarker) {
        counter2++;
      }
    }

    if (counter1 === 3) {
      return this.player1;
    } else if (counter2 === 3) {
      return this.player2;
    }

    return "";
  }

  checkForWinner() {
    const winnerHorizontal = this.checkHorizontal();
    if (winnerHorizontal) {
      alert(`${winnerHorizontal.playerMarker} has won horizontally!`);
      return winnerHorizontal;
    }

    const winnerVertical = this.checkVertical();
    if (winnerVertical) {
      alert(`${winnerVertical.playerMarker} has won vertically!`);

      return winnerVertical;
    }

    const winnerLeftDiagonal = this.checkLeftDiagonal();
    if (winnerLeftDiagonal) {
      alert(`${winnerLeftDiagonal.playerMarker} has won on the left diagonal!`);

      return winnerLeftDiagonal;
    }

    const winnerRightDiagonal = this.checkRightDiagonal();
    if (winnerRightDiagonal) {
      alert(
        `${winnerRightDiagonal.playerMarker} has won on the right diagonal!`
      );

      return winnerRightDiagonal;
    }
    const tie = this.checkTie();
    if (this.checkTie()) {
      alert("It's a tie!");
      return "tie";
    }
    return "";
  }
  resetGame() {
    // Clear the game board
    this.gameBoard.grid = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ];

    // Reset the current player to player 1
    this.currentPlayer = this.player1;

    // Clear the visual game board
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
      cell.innerHTML = "";
    });
  }
}
class resetButton {
  createBtn = () => {
    const resetBtn = document.createElement("button");
    resetBtn.className = "resetBtn";
    resetBtn.textContent = "Reset";
    return resetBtn;
  };
}
class Header {
  createHeader = () => {
    const header = document.createElement("header");
    header.className = "header";
    header.textContent = "Tic-Tac-Toe";
    return header;
  };
}

class Footer {
  createFooter = () => {
    const footerContainer = document.createElement("footer");
    footerContainer.className = "footer";
    const footer = document.createElement("p");
    footer.innerHTML = "Copyright © 2023 Thomas Vo ";
    footerContainer.appendChild(footer);
    return footerContainer;
  };
}

const header = new Header();
const headerElement = header.createHeader();
document.body.appendChild(headerElement);

const game = new Game();
const resetBtn = new resetButton().createBtn();
resetBtn.addEventListener("click", () => {
  game.resetGame();
});
document.body.appendChild(resetBtn);
document.body.appendChild(resetBtn);
const footer = new Footer();
const footerElement = footer.createFooter();
document.body.appendChild(footerElement);

game.handleClick();
