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
const autoPlayElem = document.getElementById('auto-play');
const resetButtonElem = document.getElementById('reset-button');

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

let isAutoPlaying = false;
let intervalId;

function autoPlay() {
  if (!isAutoPlaying) {
    intervalId = setInterval(() => {
      const userMove = pickComputerMove();
      playGame(userMove);
      movesElem.removeEventListener('click', () => {
        autoPlayElem
      })
    }, 1000);
    isAutoPlaying = true;
    scoreBoardElem.style.color = '#34f240';
  } else {
    clearInterval(intervalId);
    isAutoPlaying = false;
    scoreBoardElem.style.color = 'whitesmoke'
  }
};

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
  setTimeout(() => {
    autoPlayElem.style.display = 'initial';
    resetButtonElem.style.display = 'initial'
    autoPlayElem.addEventListener('click', () => {
      autoPlay();
    });
    }, 250)
});

scoreBoardElem.addEventListener('mouseleave', () => {
  autoPlayElem.style.display = 'none';
  resetButtonElem.style.display = 'none';
  autoPlayElem.addEventListener('click', () => {
    autoPlay();
  })
})

resetButtonElem.addEventListener('click', () => {
  score.wins = 0;
  score.losses = 0;
  updateScore();
  resultElem.innerHTML = '';
  console.log(score);
  document.body.append(messageElem)
})

document.body.addEventListener('keydown', event => {
  if (event.key === 'r') {
    playGame('rock');
  } else if (event.key === 'p') {
    playGame('paper');
  } else if (event.key === 's') {
    playGame('scissors');
  } else if (event.key === 'Enter') {
    const userInput = confirm('Are you sure you want to reset the score board?');
    if (userInput) {
      score.wins = 0;
      score.losses = 0;
      updateScore();
      resultElem.innerHTML = '';
      document.body.appendChild(messageElem);
    }
  } else if (event.key === 'a') {
    autoPlay();
  }
});