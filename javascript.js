let computerScore = 0;
let playerScore = 0;
let round = 0;

const choiceArr = ['rock', 'paper', 'scissors'];

let getComputerChoice = () => {
    index = randomNum(0, choiceArr.length-1)
    return choiceArr[index];
};

function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}






// console.log(`The computer chose ${computerSelection}`);

let playRound = (playerSelection, computerSelection) => {
    playerSelection = playerSelection.toLowerCase();
    // console.log(`You chose ${playerSelection}`)
    if ((playerSelection === computerSelection)) {
        return 'T';
    }
    else if ((playerSelection === 'rock' && computerSelection === 'scissors') || (playerSelection === 'paper' && computerSelection === 'rock') || (playerSelection === 'scissors' && computerSelection === 'paper')) {
    
        return 'W';
    }
    else if ((playerSelection === 'rock' && computerSelection === 'paper') || (playerSelection === 'paper' && computerSelection === 'scissors') || (playerSelection === 'scissors' && computerSelection === 'rock')) {
       
        return 'L';
    }
}

function capitalize(str) {
    return str.substr(0,1).toUpperCase() + str.slice(1);

}

// console.log(playRound(playerSelection, computerSelection));

function game() {

    
   for (let i = 0; i < 5; i++) {
    const playerSelection = prompt('Please enter your desired weapon: Rock, Paper, or Scissors');
    const computerSelection = getComputerChoice();    
   const result = playRound(playerSelection, computerSelection)
       
            if(result === 'W') {
                console.log(`Round: ${round += 1} Player: ${playerScore +=1 } Computer: ${computerScore} You win! ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}!`);
            
               
            }
            else if(result === 'L') {
                console.log(`Round: ${round +=1} Player: ${playerScore} Computer: ${computerScore +=1} You Lose! ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}!`);
                
               
            }
            else if(result === 'T') {
                console.log(`Round: ${round} Player: ${playerScore} Computer: ${computerScore} Tie game! Both players chose ${capitalize(playerSelection)}! Replay the round.`);
                i--;
            }
            else {
                console.log("an error occured");
                i--;
            }
        
    }
}
game();
