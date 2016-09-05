
const board = new Board(6, 6);
const domBoard = document.querySelector('div.board');
const boardView = new BoardView(domBoard, board);
boardView.render();


document.getElementById('submit').addEventListener('click', function() {
  const guess = document.getElementById('guess-input').value;
  // console.log(`value is ${guess}`);
  const checkIndex = [];
  board.cellsInBoard.forEach((fire) => { //fire is a var name for each item in cellsInBoard
    if (fire.boatOrNot === true) {
      checkIndex.push(fire);
      if (board.gameSquare.cell.isExplosion()) {
        board.gameSquare.setAttribute('class', 'hit cell');
      } else if (board.gameSquare.cell.isSplash()) {
        board.gameSquare.setAttribute('class', 'miss cell');
      }
    }
  });
});
// now, guess has to match the index of a cell in cellsInBoard...
// we could loop through the cellsInBoard and when the index is found, push to a new array,
// then run an if/else to check the class



/* This is what I want my code to do when a player enters a number to fire:
  player enters a numbner
  player hits submit
  the number entered will be matched with the index number of the cell
  the cell's class will be changed from hidden to:
    hit if there is a ship there, or
    missed if there isnt a ship there
  the text field will clear and the player can play again

this.cellsInBoard
how to find guess inside the array?


the number entered will be matched with the index number of the cell: indexof?

  isGameOver() {
    const guess = document.getElementById('guessInput');

    this.cellsInBoard.forEach((cell) => { //cell is a var name for each item in cellsInBoard
      if (cell.boatOrNot === true) {
        allBoats.push(cell.beenPlayed);
      }
    });


  this.setCellClickEventHandler(gameSquare, cell);


/*
this page is for Using your code...
write on an index.js page how you want your code to make the classes work together

If you look at the classes, we need to see what is being passed into them to
make them work, so we need to declare/assign them.

class BoardView {
  constructor(domBoard, board) {
    this.el = domBoard;
    this.board = board;
  }

domBoard is what we will be passing into the class BoardView, as is board,
so we need to define them:

board is a new Board instance, and we are passing that into
a new BoardView instance along with domBoard
*/
