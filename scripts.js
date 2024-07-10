const scoreBoardElem = document.getElementById('score-board');
const userNameElem = document.getElementById('user-badge');
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

let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0
};

updateScore();

const playGame = userMove => {
  const computerMove = pickComputerMove();
  messageElem.remove();

  resultElem.innerHTML = `You <img src="images/${userMove}-emoji.png"><img src="images/${computerMove}-emoji.png"> CPU`;
  
  if (userMove === 'rock') {
    if (computerMove === 'rock') {
      console.log('draw');
    } else if (computerMove === 'paper') {
      console.log('lose');
      score.losses ++;
    } else {
      console.log('win');
      score.wins ++;
    }

  } else if (userMove === 'paper') {
    if (computerMove === 'rock') {
      console.log('win');
      score.wins ++;
    } else if (computerMove === 'paper') {
      console.log('draw');
    } else {
      console.log('lose');
      score.losses ++;
    }
    
  } else if (userMove === 'scissors') {
    if (computerMove === 'rock') {
      console.log('lose');
      score.losses ++;
    } else if (computerMove === 'paper' ) {
      score.wins ++;
      console.log('win');
    } else {
      console.log('draw')
    }
  }
  console.log(score);

  updateScore();
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

function updateScore() {
  userScoreElem.innerHTML = score.wins;
  cpuScoreElem.innerHTML = score.losses;
  localStorage.setItem('score', JSON.stringify(score));
  
};

scoreBoardElem.addEventListener('mouseenter', () => { 
  const resetButtonElem = document.createElement('div');
  resetButtonElem.innerHTML = 'reset'
  resetButtonElem.classList.add('reset-button', 'badge')
  scoreBoardElem.appendChild(resetButtonElem);

  resetButtonElem.addEventListener('click', () => {
    score.wins = 0;
    score.losses = 0;
    updateScore();
    resultElem.innerHTML = '';
    console.log(score);
    document.body.appendChild(messageElem)
  })

  resetButtonElem.addEventListener('mouseleave', () => {
    scoreBoardElem.removeChild(resetButtonElem);
  })

  scoreBoardElem.addEventListener('mouseleave', () => {
    scoreBoardElem.removeChild(resetButtonElem);
  })
});














