//let playerSelection = window.prompt("Type a number between one and three");


/*let divClick = () => {

    let randomNumber = Math.ceil(Math.random() * 3);


    console.log(`Randomly generated number is ${randomNumber}`);

    if(document.getElementById('rock')) {
        playerSelection = 1;
       return console.log(`Player generated number is ${playerSelection}`);
    } else if (document.getElementById('paper')) {
        playerSelection = 2;
        return console.log(`Player generated number is ${playerSelection}`);
    } else if (document.getElementById('scissors')){
        playerSelection = 3;
        return console.log(`Player generated number is ${playerSelection}`);
    } else {
        return "error";
    }
}*/

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