const generateRandomNumberBetween1and3 = () => {
   let random = Math.random();
   console.log(Math.floor(random*3 + 1));
}

generateRandomNumberBetween1and3();

let getComputerChoice = () => {
    generateRandomNumberBetween1and3();
}

getComputerChoice();

let playerSelection = window.prompt("pick a number between 1 and 3");

console.log(playerSelection);