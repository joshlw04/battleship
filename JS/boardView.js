// the plastic... what does the game board LOOK like
class BoardView {
  constructor(domBoard, board) {
    this.el = domBoard;
    this.board = board;
  }

  render() {
    this.el.innerHTML = '';
    const gameBoard = document.createElement('div');
    gameBoard.setAttribute('id', 'game-board');

    let gameSquare;
    // forEach interation in the array...
    this.board.cellsInBoard.forEach((cell, idx) => { // forEach can take an iterator var as well as an index var
      gameSquare = document.createElement('div'); // create a div
      gameSquare.setAttribute('id', `game-cell-${idx}`); // set the id with an index value
      gameSquare.setAttribute('class', 'cell'); // set the class name
      gameSquare.innerHTML = idx;
      gameSquare.setAttribute('class', 'hidden cell');
      gameBoard.appendChild(gameSquare);
    });
    this.el.appendChild(gameBoard);
  }

  setCellClickEventHandler(gameSquare, cell) {
    gameSquare.addEventListener('click', (e) => {
      cell.play();
      this.render();
    });
  }
}

// const newBoard = new BoardView(document.createElement('game-container'));
// document.body.appendChild(newBoard);
//

// define boardview class
// in constructor accept a new board object
// save that board to the object... this.board = passInBoard

  // render() {
  //   const newBoard = this.document.createElement('div');
  //   newBoard.innerHTML = 'Hello';
  //   this.el.append(newBoard);
  // }

//  very similar to GOL... as in a grid of cells
//  ALL cells should be ... light grey..
//  cell should be red if someCells has a 1 there


// first step: make something appear on the page. anything. start with a word.

// this will be happening in the render?

// just write the code. then figure out where itll go
