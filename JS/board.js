class Board {
  constructor() {
    // this.board.width = '25rem';
    this.gameStateArray = [1, 0, 1, 1, 1,
                           1, 0, 1, 1, 0,
                           1, 0, 0, 0, 0,
                           0, 1, 1, 1, 1,
                           0, 0, 0, 0, 0];

    // new Cell()
/*
ok. we need to populate the gameboard with cell objects, so that they can each
have the properties of if theyre hidden, if they have a ship under them, or
if they have an ocean under them.

each property will be manipulated later: a function to be called when the cell
is clicked to
*/

  }
}


// instead of 1s and 0s... can each of these elements... be... new Cell(0)
// or new Cell(1).
//   That way... that cell can maintain BOTH info about it being hidden...
//   AND if a ship is there or not... **using its parameters


// on the GAME object...   if ALL ships have been hit... then game won
// if number of turns excedes... some number... then lost
