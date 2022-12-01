let randomNumber = Math.ceil(Math.random() * 3);

console.log(`Randomly generate number is ${randomNumber}`);

//let playerSelection = window.prompt("Type a number between one and three");

let playerSelection;

let rock = 1;
let paper = 2;
let scissors = 3;
let error = "there was an error";

let divClick = (rock, paper, scissors) => {
    if (rock) {
        playerSelection = rock;
    } else if (paper) {
        playerSelection = paper;
    } else if (scissors) {
        playerSelection = scissors;
    } else {
        return error;
    }
}

console.log(`Player generated number is ${playerSelection}`);

let checkResult = (playerSelection, randomNumber) => {
    if (playerSelection == 1 && randomNumber == 2 || playerSelection == 2 && randomNumber == 1 || playerSelection == 3 && randomNumber == 2) {
        return document.getElementById("result").innerHTML = "You Win!";
    } else if (playerSelection == randomNumber) {
        return document.getElementById("result").innerHTML = "Draw!";
    } else {
        return document.getElementById("result").innerHTML = "You Loose!";
    }
}

checkResult(playerSelection, randomNumber);

console.log(checkResult(playerSelection, randomNumber));

const reload = () => {
    location.reload();  
}