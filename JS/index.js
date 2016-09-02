
const board = new Board(2, 2);
const domBoard = document.querySelector('div.board');
const boardView = new BoardView(domBoard, board);
boardView.render();

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
