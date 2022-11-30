const generateRandomNumberBetween1and3 = () => {
   let random = Math.random();
   console.log(Math.floor(random*3 + 1));
}

generateRandomNumberBetween1and3();

let getComputerChoice = () => {
    generateRandomNumberBetween1and3();
}

getComputerChoice();

let playerSelection = window.prompt("Type a number between one and three");

console.log(playerSelection);

let checkResult = () => {
    var win = document.getElementById("result").innerHTML = "You Win!";
    var draw = document.getElementById("result").innerHTML = "Draw!";
    var loose = document.getElementById("result").innerHTML = "You Loose!";

    if (playerSelection == 1 && getComputerChoice == 2 || playerSelection == 2 && getComputerChoice == 1 || playerSelection == 3 && getComputerChoice == 2) {
        return win;
    } if (playerSelection == getComputerChoice) {
        return draw;
    } else {
        return loose;
    }
}

console.log(checkResult());