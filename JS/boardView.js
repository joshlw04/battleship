class BoardView {
  constructor(domBoard, board) {
    this.el = domBoard;
    this.board = board;
  }

  setCellClickEventHandler(cellNode) {
    cellNode.addEventListener('click', (e) => {
      let className = e.target.getAttribute('class');
      className = className.replace('hidden', '');
      e.target.setAttribute('class', className);
    });
  }

  render() {
    this.el.innerHTML = '';
    const gameBoard = document.createElement('div');
    gameBoard.setAttribute('id', 'game-board');
    this.el.appendChild(gameBoard);

    let node;
    this.board.gameStateArray.forEach((cell) => {
      node = document.createElement('div');
      node.setAttribute('class', cell);
      node.setAttribute('id', 'game-cell');
      // will more like..   cell.isShip()    which returns... true or false
      if (node.getAttribute('class') === '0') {
        node.setAttribute('class', 'miss hidden');
      } else if (node.getAttribute('class') === '1') {
        node.setAttribute('class', 'hit hidden');
      }
      // this.setCellClickEventHandler(node);
      gameBoard.appendChild(node);
    });
    this.el.appendChild(gameBoard);
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
//  cell should be red if gameStateArray has a 1 there


// first step: make something appear on the page. anything. start with a word.

// this will be happening in the render?

// just write the code. then figure out where itll go
