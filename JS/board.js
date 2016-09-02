// Board
  // Params:
    // width, height
  // Interfaces:
    // guess(cellId) -> play cell
    //isGameOver -> checks to see if the boat cells have been exploded
// Rule book for the game

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
    let gameOver;
    for (let i = 0; i < this.cellsInBoard.length; i++) { // loop over all cells in the gameBoard
      if (this.cellsInBoard[i].hasBoat === true) { // if the cell has a boat... how do i reach that from here?
         // because this isnt working...
        if (this.cellsInBoard[i].beenPlayed && this.cellsInBoard[i].isExplosion) { // if the cell has been played and has been exploded...
          gameOver = true;
        }
      } else {
        gameOver = false;
      }
    }
    return gameOver;
  }
/*^^^^^^pretty sure this syntax isnt right. or the logic. prob both.

      in this fucntion... check if ALL Cells WITH a boat... have exploded..
  Looping over ALL the cells... the cellsInBoard array, which has all the new Cell objects
    checking if the cell has a boat...
      if is does... has it been played?
    If not... return false... cause the game istn' over
    return true

so, isExplosion and beenPlayed are in the cell class. what is the way to get
from the Board class into the cell class? I know i'm supposed to only think of one tiny
world at a time. index number?
  */
  }


// ok. we need to populate the gameboard with cell objects, so that they can each
// have the properties of if theyre hidden, if they have a ship under them, or
// if they have an ocean under them.

// each property will be manipulated later: a function to be called when the cell
// is clicked to
// */

// instead of 1s and 0s... can each of these elements... be... new Cell(0)
// or new Cell(1).
//   That way... that cell can maintain BOTH info about it being hidden...
//   AND if a ship is there or not... **using its parameters


// on the GAME object...   if ALL ships have been hit... then game won
// if number of turns excedes... some number... then lost
