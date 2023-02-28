const choiceArr = ['rock', 'paper', 'scissors'];

let getComputerChoice = () => {
    const index = getRandomNum(0, choiceArr.length-1);
    return choiceArr[index];
};

let getRandomNum = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let computerScore = 0;
let playerScore = 0;
let round = 0;
let roundWinner = '';

const roundInfo = document.querySelector('#round');
const playerScoreInfo = document.querySelector('#player');
const computerScoreInfo = document.querySelector('#computer');
const message = document.querySelector('#message');
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        const playerSelection = e.target.id;
        
        const computerSelection = getComputerChoice();
        
        playRound(playerSelection, computerSelection);
        
        if (playerScore >= 5 || computerScore >=5 ) {
           
            endMessage();
            document.querySelector('#replay').removeAttribute('hidden');
        }

    });
});

let playRound = (playerSelection, computerSelection) => {
//    computerSelection = getComputerChoice();
    if ((playerSelection === computerSelection)) {
        round += 1;
        roundWinner = 'tie'
    }
    else if ((playerSelection === 'rock' && computerSelection === 'scissors') || 
            (playerSelection === 'paper' && computerSelection === 'rock') || 
            (playerSelection === 'scissors' && computerSelection === 'paper')) {
        round += 1;
        playerScore += 1;
        roundWinner = 'player'
    }
    else if ((playerSelection === 'rock' && computerSelection === 'paper') || 
            (playerSelection === 'paper' && computerSelection === 'scissors') || 
            (playerSelection === 'scissors' && computerSelection === 'rock')) {
        round += 1;
        computerScore += 1;
        roundWinner = 'computer'
    }
    roundMessage(roundWinner, playerSelection, computerSelection);
       roundInfo.textContent = `Round ${round}`;
       playerScoreInfo.textContent = `Player ${playerScore}`;
       computerScoreInfo.textContent = `Computer ${computerScore}`;
      
}

let roundMessage = (roundWinner, playerSelection, computerSelection) => {
    if (roundWinner === 'player') {
        message.textContent = `You win! ${playerSelection} beats ${computerSelection}!`;
    }
    else if (roundWinner === 'computer') {
        message.textContent = `You Lose! ${computerSelection} beats ${playerSelection}!`;
    }
    else {
        message.textContent = `Tie game! Both players chose ${playerSelection}! Replay the round.`;
    }
}


let endMessage = () => {
    if (playerScore > computerScore) {
    return document.getElementById("end").innerHTML += "You won the Game!";
    }
    else {
    return document.getElementById("end").innerHTML += "You Lost the Game!";
    }
}



    
const onReplay = (e) => {

document.querySelector('#round').innerHTML = '';
document.querySelector('#player').innerHTML = '';
document.querySelector('#computer').innerHTML = '';
document.querySelector('#message').innerHTML = '';
document.querySelector('#end').innerHTML = '';
computerScore = 0;
playerScore = 0;
round = 0;
roundWinner = '';
e.target.setAttribute('hidden', 'hidden');
}