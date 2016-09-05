/*
class BoardView
      Parameters:
        domBoard, board
      Methods:
        render() -> creates board and sets attributes (classes, ids, innerHTML)
        displayGameOver() -> 
*/

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
    this.board.cellsInBoard.forEach((cell, idx) => {
      gameSquare = document.createElement('div');
      gameSquare.setAttribute('id', `game-cell-${idx}`);
      gameSquare.innerHTML = idx;
      gameSquare.setAttribute('class', 'hidden cell');
      gameBoard.appendChild(gameSquare);
    });
    this.el.appendChild(gameBoard);
  }

  displayGameOver() {
    if (this.board.isGameOver() === true) {
      document.querySelector('#shots-fired').innerHTML = 'You found all the ships!';
    }
  }
}
