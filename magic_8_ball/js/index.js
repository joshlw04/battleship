let newBall = new View;

document.getElementById('submit').addEventListener('click', function() {

    newBall.displayQuestion(document.getElementById('question').value);

    if (document.getElementById('question').value === '') {
      newBall.displayQuestion('Please enter a question!');
    } else {
      newBall.displayAnswer( newBall.game.getAnswer() );
    }
    document.getElementById('question').value = '';
});
