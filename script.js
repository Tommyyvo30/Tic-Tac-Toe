class Gameboard {
  constructor() {
    this.grid = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];
  }

  createGameBoard() {
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
    return gameBoardContainer;
  }
}

//const game = new Gameboard().createGameBoard();
//document.body.appendChild(game);
