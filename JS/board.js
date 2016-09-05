/* Board
  Params:
    width, height
  Interfaces:
    buildBoard -> builds board based on random cell placement
                  future version will include random ship placement
    guess(cellId) -> play cell
    isGameOver -> checks to see if the boat cells have been exploded
               -> returns true/false
*/

class Board {
  constructor(width, height) {
    this.numCells = width * height;
    this.cellsInBoard = this.buildBoard();
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
    this.cellsInBoard.forEach((cell) => {
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
