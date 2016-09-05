/*
  Cell
    Params:
      boatOrNot -> true or false
    Interfaces:
      play() -> marks cell as played
      isExplosion() -> return true or false... based on IF the cell has an explosion
      isSplash() -> return ture or false... based on IF the cell has splashed
*/

class Cell {
  constructor (boatOrNot) {
    this.hasBoat = boatOrNot;
    this.beenPlayed = false;
  }

  play() {
    this.beenPlayed = true;
  }

  isExplosion() {
    return this.beenPlayed && this.hasBoat;
  }

  isSplash() {
    return this.beenPlayed && !this.hasBoat;
  }
}

class Board {
  constructor(width, height) {
    this.numCells = width * height;
    this.cellsInBoard = this.buildBoard();
  }

  buildBoard() {
    const cells = [];
    let boatOrNot;
    for (let i = 0; i < this.numCells; i++) {
      boatOrNot = Math.round(Math.random()) === 0;
      cells.push(new Cell(boatOrNot));
    }
  }

  guess(cellID) {
    const cell = this.ships.locations[cellID]; // we are calling the index of each cell 'cellID'
    cell.play(); // so, run the play method on whatever cell index we pass to it
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

  alertWinner() {
    if (this.isGameOver === true)
  }
