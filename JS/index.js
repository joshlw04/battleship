const board = new Board(6, 6);
const domBoard = document.querySelector('div.board');
const boardView = new BoardView(domBoard, board);
boardView.render();

document.getElementById('submit').addEventListener('click', function() {

  const guess = document.getElementById('guess-input').value;
  const boatHit = document.getElementById(`game-cell-${guess}`);
  if (guess <= 35) {
    boardView.displayGameOver();
    console.log('running displayGameOver');
    if (board.cellsInBoard[guess].hasBoat === true) {
      boatHit.setAttribute('class', 'hit cell');
      boatHit.innerHTML = 'H'; // TODO: why can't I clear the innerHTML of this without it freaking out?
      document.getElementById('guess-input').value = '';
      document.querySelector('#shots-fired').innerHTML = 'You got a hit!';
    } else {
      boatHit.setAttribute('class', 'miss cell');
      boatHit.innerHTML = 'M';
      document.getElementById('guess-input').value = ''; // TODO why can't i say guess here? its the same thing...
      document.querySelector('#shots-fired').innerHTML = 'You missed!';
    }
  } else {
    document.querySelector('#shots-fired').innerHTML = 'Aim for the board!';
    document.getElementById('guess-input').value = '';
  }
});
