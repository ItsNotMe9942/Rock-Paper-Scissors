const scoreBoardElem = document.getElementById('score-board');
const userElem = document.getElementById('user-badge');
const userScoreElem = document.getElementById('user-score');
const cpuScoreElem = document.getElementById('cpu-score');
const resultElem = document.getElementById('result');
const movesElem = document.getElementById('choices');
const rockElem = document.getElementById('rock');
const paperElem = document.getElementById('paper');
const scissorsElem = document.getElementById('scissors');
const messageElem = document.getElementById('message');
const redTextElem = document.querySelector('.red-text');


rockElem.addEventListener('click', () => {
  playGame('rock');
});

paperElem.addEventListener('click', () => {
  playGame('paper');
});

scissorsElem.addEventListener('click', () => {
  playGame('scissors');
});

const playGame = userMove => {
  const computerMove = pickComputerMove();
  console.log(computerMove);
  if (userMove === 'rock') {
    if (computerMove === 'rock') {
      console.log('Draw');
    } else if (computerMove === 'paper') {
      console.log('You lose!');
    } else {
      console.log('You win!');
    };
  } else if (userMove === 'paper') {
    if (computerMove === 'rock') {
      console.log('You Win!');
    } else if (computerMove === 'paper') {
      console.log('Draw');
    } else {
      console.log('You lose!');
    };
  } else if (userMove === 'scissors') {
    if (computerMove === 'rock') {
      console.log('You lose!');
    } else if (computerMove === 'paper' ) {
      console.log('You Win!');
    } else {
      console.log('Draw');
    }
  }
};

const pickComputerMove = () => {
  const randomNumber = Math.ceil(Math.random() * 3);
  if (randomNumber === 1) {
    return 'rock';
  } else if (randomNumber === 2) {
    return 'paper';
  } else {
    return 'scissors';
  }
};





