const scoreBoardElem = document.getElementById('score-board');
const userElem = document.getElementById('user-badge');
const userScoreElem = document.getElementById('user-score');
const cpuScoreElem = document.getElementById('cpu-score');
const resultElem = document.getElementById('result');
const choicesElem = document.getElementById('choices');
const rockElem = document.getElementById('rock');
const paperElem = document.getElementById('paper');
const scissorsElem = document.getElementById('scissors');
const messageElem = document.getElementById('message');
const redTextElem = document.querySelector('.red-text');


rockElem.addEventListener('click', () => {
  playGame('rock')
});

paperElem.addEventListener('click', () => {
  playGame('paper')

})

scissorsElem.addEventListener('click', () => {
  playGame('scissors')

});

const playGame = (userMove) => {
  console.log(userMove)
};

const computerMove = () => {
  const randomNumber = Math.ceil(Math.random() * 3);
  console.log(randomNumber);
};

computerMove();



