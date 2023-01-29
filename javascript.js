const choiceArr = ['Rock', 'Paper', 'Scissors'];
let getComputerChoice = () => {
index = randomNum(0, choiceArr.length-1)
return choiceArr[index];
}
function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
console.log(getComputerChoice());


