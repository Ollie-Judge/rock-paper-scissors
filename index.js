const generateRandomNumberBetween1and3 = () => {
   let random = Math.random();
   console.log(Math.floor(random*3 + 1));
}

generateRandomNumberBetween1and3();

let getComputerChoice = () => {
    generateRandomNumberBetween1and3();
}

getComputerChoice();


let playerSelection = window.prompt("Type a number between 1 and 3");

console.log(playerSelection);

if (playerSelection == 1 && getComputerChoice == 2 || playerSelection == 2 && getComputerChoice == 1 || playerSelection == 3 && getComputerChoice == 2) {
    return document.getElementById("result").innerHTML = "You Win!";
} else {
    return document.getElementById("result").innerHTML = "You Loose!";
}