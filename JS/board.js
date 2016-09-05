/* Board
  Params:
    width, height
  Interfaces:
    guess(cellId) -> play cell
    isGameOver -> checks to see if the boat cells have been exploded
                 -> returns true/false
*/

class Board {
  constructor(width, height) {  // <-   WHEN I CALL new Board...
    this.numCells = width * height;
    this.cellsInBoard = this.buildBoard(); // Array of new Cell
  }


  buildBoard() {
    const cells = [];
    let boatOrNot;
    for (let i = 0; i < this.numCells; i++) {
      boatOrNot = Math.round(Math.random()) === 0; // TODO: How can this not be random?
      cells.push(new Cell(boatOrNot));
    }
    return cells;
  }

  guess(cellID) {
    const cell = this.cellsInBoard[cellID];
    cell.play();
  }

  isGameOver() {
    const allBoats = [];
    this.cellsInBoard.forEach((cell) => { //cell is a var name for each item in cellsInBoard
      if (cell.hasBoat === true) {
        allBoats.push(cell.beenPlayed);
      }
    });

    if (allBoats.includes(false)) {
      return false;
    } else {
      return true;
    }
  }
}
