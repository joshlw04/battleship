/*
class Game:
  Methods:
    getAnswer() -> returns a random answer from answers array
*/


class Game {
  constructor() {
    this.answers = ['Yes', 'No', 'It is Certain', 'Without a Doubt', 'You may rely on it', 'Outlook is Good', 'Reply Hazy, Please try again', 'Ask again    later', 'Better not tell you now', 'Do not count on it', 'My reply is... No', 'Very Doubtful', 'You\'re fucked.'];
  }
  getAnswer() {
    let randomNumber = Math.floor(Math.random() * this.answers.length) ;
    return this.answers[randomNumber];
  }
}
