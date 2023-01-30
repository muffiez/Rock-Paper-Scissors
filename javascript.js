const choiceArr = ['Rock', 'Paper', 'Scissors'];

let getComputerChoice = () => {
    index = randomNum(0, choiceArr.length-1)
    return choiceArr[index];
};

function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const compChoice = getComputerChoice();


let playerSelection = prompt('Please enter your desired weapon: Rock, Paper, or Scissors');

console.log(`The computer chose ${compChoice}`);

let game = (playerSelection, compChoice) => {
    playerSelection = playerSelection.toLowerCase();
    console.log(`You chose ${playerSelection}`)
    if ((playerSelection === 'rock' && compChoice === 'Rock') || (playerSelection === 'paper' && compChoice === 'Paper') || (playerSelection === 'scissors' && compChoice === 'Scissors')) {
       return `Tie game! Both players chose ${capitalize(playerSelection)}!`;
    }
    else if ((playerSelection === 'rock' && compChoice === 'Scissors') || (playerSelection === 'paper' && compChoice === 'Rock') || (playerSelection === 'scissors' && compChoice === 'Paper')) {
        return `You win! ${capitalize(playerSelection)} beats ${compChoice}!`;
    }
    else if ((playerSelection === 'rock' && compChoice === 'Paper') || (playerSelection === 'paper' && compChoice === 'Scissors') || (playerSelection === 'scissors' && compChoice === 'Rock')) {
        return `You Lose! ${compChoice} beats ${capitalize(playerSelection)}!`;
    }
}

function capitalize(playerSelection) {
    const firstLetter = playerSelection.substr(0,1);
    const restOfString = playerSelection.substr(1);
    return (firstLetter.toUpperCase() + restOfString.toLowerCase());
}

console.log(game(playerSelection, compChoice));
