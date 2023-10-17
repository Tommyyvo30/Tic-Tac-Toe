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
        }
      });
    });
  }
  switchPlayer() {
    this.currentPlayer =
      this.currentPlayer === this.player1 ? this.player2 : this.player1;
  }
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
