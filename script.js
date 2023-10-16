class Grid{
  constructor() {
      this.grid = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
      ];
    }

render(){ 
  const gameBoardContainer = document.createElement('div');
  gameBoardContainer.className = "gameBoardContainer";

  const gameBoard = document.createElement("div");
  gameBoard.className = "gameBoard"

  for(let i = 0; i < this.grid.length; i++){
      let row = document.createElement('div');
      row.className = "row";
      gameBoard.appendChild(row);
      for(let j = 0; j < this.grid.length; j++){
          const cell = document.createElement('div')
          cell.className = 'cell';
          row.appendChild(cell);
      }
  }
 
  gameBoardContainer.appendChild(gameBoard)
  document.body.appendChild(gameBoardContainer);
  return gameBoardContainer;
}

}

class Player{
  constructor(playerMarker){
      this.playerMarker = playerMarker;
  }
  handleClick(){
     const selectCells = document.querySelectorAll('.cell');
     const playerMarker = this.playerMarker;

     selectCells.forEach(cell => {
      cell.addEventListener('click', () =>{
          if(cell.textContent === ""){
            cell.textContent = playerMarker;
            cell.removeEventListener('click', this.handleClick);
          }
          
      })
     })

  }
}


const grid = new Grid();
grid.render();
const playerX = new Player("X");
playerX.handleClick();
