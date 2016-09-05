
class View {
  constructor() {
    this.question = '';
    this.game = new Game();
  }

  displayQuestion(question) {
    let questionDiv = document.getElementById('question-display').innerHTML = question;
  }

  displayAnswer(answer) {
    document.getElementById('triangle').innerHTML = answer;
  }
}
