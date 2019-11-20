document.getElementById("diceImage").src = "./img/blank.png";
let diceResult = 0;
let score = 0;
let rollButton = document.getElementById("rollButton");
let scoreDisplay = document.getElementById("score");
let message = document.getElementById("message");
let endGame = document.getElementById("endGameMessage");
let diceImage = document.getElementById("diceImage")

const rollDice = () => {
    // console.log(diceResult);
    diceResult = Math.ceil(Math.random() * 6);         
    score += diceResult;
    scoreDisplay.textContent = score;
    console.log(diceResult)
    console.log(score)
    return score, diceResult;
}

displayDice = () => {
    if (diceResult == 1){
        document.getElementById("diceImage").src = "./img/dice1.png";
    } else if (diceResult == 2){
        document.getElementById("diceImage").src = "./img/dice2.png";
    } else if (diceResult == 3){
        document.getElementById("diceImage").src = "./img/dice3.png";
    } else if (diceResult == 4){
        document.getElementById("diceImage").src = "./img/dice4.png";
    } else if (diceResult == 5){
        document.getElementById("diceImage").src = "./img/dice5.png";        
    } else if (diceResult == 6){
        document.getElementById("diceImage").src = "./img/dice6.png";
    }
}

let game = () => { 
    diceResult = 0;
    endGame.textContent = "";  
    rollDice();
    displayDice();
    if (diceResult == 1) {
        endGame.textContent= "You lose!";
        message.textContent = "Click to play again";
        score = 0
    } else if ((diceResult > 0) && (score >= 20)) {
        endGame.textContent= "You win!";
        score = 0
        message.textContent = "Click to play again";
    } else if ((diceResult > 1) && (score < 20)) {
        message.textContent = "Please roll again";
    }    
}

rollButton.addEventListener("click", game); 
