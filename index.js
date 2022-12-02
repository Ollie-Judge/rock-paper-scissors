let playerSelection = window.prompt("Type a number between one and three");

let randomNumber = Math.ceil(Math.random() * 3);


console.log(`Randomly generated number is ${randomNumber}`);

/*let playerSelection;

let rockClick = (playerSelection) => {

    let randomNumber = Math.ceil(Math.random() * 3);


    console.log(`Randomly generated number is ${randomNumber}`);

    if(document.getElementById('rock')) {
        playerSelection = 1;
       return console.log(`Player generated number is ${playerSelection}`);
    } 
}

let paperClick = () => {

    let randomNumber = Math.ceil(Math.random() * 3);


    console.log(`Randomly generated number is ${randomNumber}`);

    if (document.getElementById('paper')) {
        playerSelection = 2;
        return console.log(`Player generated number is ${playerSelection}`);
    }
}

let scissorsClick = () => {

    let randomNumber = Math.ceil(Math.random() * 3);


    console.log(`Randomly generated number is ${randomNumber}`);

    if (document.getElementById('scissors')){
        playerSelection = 3;
        return console.log(`Player generated number is ${playerSelection}`);
    }
}*/

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