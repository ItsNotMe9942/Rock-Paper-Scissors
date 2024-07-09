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
  messageElem.remove();
  resultElem.innerHTML = `You <img src="images/${userMove}-emoji.png"><img src="images/${computerMove}-emoji.png"> CPU`;
  
  if (userMove === 'rock') {
    if (computerMove === 'rock') {
      console.log('draw')
      return 'Draw';
    } else if (computerMove === 'paper') {
      console.log('lose')
      score.losses ++;
      return 'You lose!';
    } else {
      console.log('win')
      score.wins ++;
      return 'You win!';
    }

  } else if (userMove === 'paper') {
    if (computerMove === 'rock') {
      console.log('win')
      score.wins ++;
      return 'You win!';
    } else if (computerMove === 'paper') {
      console.log('draw');
      return 'Draw';
    } else {
      console.log('lose')
      score.losses ++;
      return 'You lose!';
    }
    
  } else if (userMove === 'scissors') {
    if (computerMove === 'rock') {
      console.log('lose')
      score.losses ++;
      return 'You lose!';
    } else if (computerMove === 'paper' ) {
      console.log('win');
      score.wins ++;
      return 'You win!';
    } else {
      console.log('draw')
      return 'draw';
    }
  }
  
  console.log(score);

  
};

const pickComputerMove = () => {
  const randomNumber = Math.ceil(Math.random() * 3);
  if (randomNumber === 1) {
    console.log('rock');
    return 'rock';
  } else if (randomNumber === 2) {
    console.log('paper');
    return 'paper';
  } else {
    console.log('scissors');
    return 'scissors';
  }
};

const score = {
  wins: 0,
  losses: 0
};
console.log(score)


const updateScore = () => {
  if (userMove = 'win') {

  }
}


  








