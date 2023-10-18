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
          this.switchPlayer();
          //console.log(this.checkForWinner());
        }
      });
    });
  }
  switchPlayer() {
    this.currentPlayer =
      this.currentPlayer === this.player1 ? this.player2 : this.player1;
  }
  checkHorizontal() {
    const gridLength = this.gameBoard.grid.length;
    const grid = this.gameBoard.grid;

    for (let i = 0; i < gridLength; i++) {
      let counter1 = 0;
      let counter2 = 0;
      for (let j = 0; j < gridLength; j++) {
        if (grid[i][j] === this.player1.playerMarker) {
          counter1++;
        } else {
          counter2++;
        }
      }
      if (counter1 === 3) {
        return this.player1;
      } else if (counter2 === 3) {
        return this.player2;
      }
    }
    return null;
  }

  checkVertical() {
    const gridLength = this.gameBoard.grid.length;
    const grid = this.gameBoard.grid;
    for (let j = 0; j < gridLength; j++) {
      let counter1 = 0;
      let counter2 = 0;
      for (let i = 0; i < gridLength; i++) {
        if (grid[i][j] === this.player1.playerMarker) {
          counter1++;
        } else {
          counter2++;
        }
      }
      if (counter1 === 3) {
        return this.player1;
      } else if (counter2 === 3) {
        return this.player2;
      }
    }
    return null;
  }

  checkLeftDiagonal() {
    const gridLength = this.gameBoard.grid.length;
    const grid = this.gameBoard.grid;
    for (let i = 0; i < gridLength; i++) {
      let counter1 = 0;
      let counter2 = 0;
      for (let j = i; j < gridLength; j++) {
        if (grid[i][j] === this.player1.playerMarker) {
          counter1++;
        } else {
          counter2++;
        }
      }
      if (counter1 === 3) {
        return this.player1;
      } else if (counter2 === 3) {
        return this.player2;
      }
    }
    return null;
  }
  checkRightDiagonal() {
    const gridLength = this.gameBoard.grid.length;
    const grid = this.gameBoard.grid;
    for (let i = 0; i < gridLength; i++) {
      let counter1 = 0;
      let counter2 = 0;
      for (let j = gridLength - i - 1; j >= 0; j--) {
        if (grid[i][j] === this.player1.playerMarker) {
          counter1++;
        } else {
          counter2++;
        }
      }
      if (counter1 === 3) {
        return this.player1;
      } else if (counter2 === 3) {
        return this.player2;
      }
    }
    return null;
  }
  checkForWinner() {
    const winnerHorizontal = this.checkHorizontal();
    if (winnerHorizontal) {
      setTimeout(() => {
        alert(`${winnerHorizontal.playerMarker} has won horizontally!`);
      }, 1000);
      return winnerHorizontal;
    }

    const winnerVertical = this.checkVertical();
    if (winnerVertical) {
      setTimeout(() => {
        alert(`${winnerVertical.playerMarker} has won vertically!`);
      }, 1000);
      return winnerVertical;
    }

    const winnerLeftDiagonal = this.checkLeftDiagonal();
    if (winnerLeftDiagonal) {
      setTimeout(() => {
        alert(
          `${winnerLeftDiagonal.playerMarker} has won on the left diagonal!`
        );
      }, 1000);
      return winnerLeftDiagonal;
    }

    const winnerRightDiagonal = this.checkRightDiagonal();
    if (winnerRightDiagonal) {
      setTimeout(() => {
        alert(
          `${winnerRightDiagonal.playerMarker} has won on the right diagonal!`
        );
      }, 1000);
      return winnerRightDiagonal;
    }

    return null;
  }
  startGame() {}
  resetGame() {}
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

const footer = new Footer();
const footerElement = footer.createFooter();
document.body.appendChild(footerElement);

game.handleClick();
