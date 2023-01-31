const choiceArr = ['rock', 'paper', 'scissors'];

let getComputerChoice = () => {
    index = getRandomNum(0, choiceArr.length-1);
    return choiceArr[index];
};

function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let playRound = (playerSelection, computerSelection) => {
    playerSelection = playerSelection.toLowerCase();
    if ((playerSelection === computerSelection)) {
        return 'T';
    }
    else if ((playerSelection === 'rock' && computerSelection === 'scissors') || 
            (playerSelection === 'paper' && computerSelection === 'rock') || 
            (playerSelection === 'scissors' && computerSelection === 'paper')) {
        return 'W';
    }
    else if ((playerSelection === 'rock' && computerSelection === 'paper') || 
            (playerSelection === 'paper' && computerSelection === 'scissors') || 
            (playerSelection === 'scissors' && computerSelection === 'rock')) {
        return 'L';
    }
}

function capitalize(str) {          
    return str.substr(0,1).toUpperCase() + str.slice(1);
}

let computerScore = 0;
let playerScore = 0;
let round = 0;

function playGame() {                      
    console.log('Welcome to Rock, Paper, Scissors! This 5 round game will determine the champion.'); 
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Please enter your desired weapon: Rock, Paper, or Scissors');
        const computerSelection = getComputerChoice();    
        const result = playRound(playerSelection, computerSelection);
                if(result === 'W') {
                    console.log(`Round: ${round += 1} Player: ${playerScore +=1 } Computer: ${computerScore} 
                                You win! ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}!`);
                }
                else if(result === 'L') {
                    console.log(`Round: ${round +=1} Player: ${playerScore} Computer: ${computerScore +=1} 
                                You Lose! ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}!`);
                }
                else if(result === 'T') {
                    console.log(`Round: ${round} Player: ${playerScore} Computer: ${computerScore} 
                                Tie game! Both players chose ${capitalize(playerSelection)}! Replay the round.`);
                    i--;
                }
                else {
                    console.log("an error occured, please try again.");
                    i--;
                }
        }
    if (playerScore > computerScore) {
    console.log('You Won the Game!');
    }
    else {
    console.log('You Lost the Game!');
    }
}
playGame();
