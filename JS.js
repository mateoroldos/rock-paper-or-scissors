let computerSelection
let playerSelection

// When button pressed
const play = document.querySelectorAll('button');
play.forEach((button) => {
  button.addEventListener('click', function (e) {
    // Assign player selection
    playerSelection = (e.target.id);
    // Assign computer selection
    computerSelection = computerPlay ();
    // Put icons
    putIcons();
    // Compare selections
    counter();
    // Change number of round
    roundCounter();
    // Check round number
    roundCheck();
  });
})

// Computer selection
function computerPlay () {
    let options = ["ROCK","PAPER","SCISSORS"];
    let random = Math.floor((Math.random() * options.length));
    let randomOption = options[random];
    return randomOption;
}

// Put icons
const putIconYourPlay = document.createElement('img');
const putIconComputerPlay = document.createElement('img');

putIconYourPlay.classList.add('play-icon');
putIconComputerPlay.classList.add('play-icon');

function putIcons() {
    switch(playerSelection){
        case "ROCK" : 
            putIconYourPlay.src = "hand-rock-solid.svg";
            break;
        case "PAPER" : 
            putIconYourPlay.src = "hand-paper-solid.svg";
            break;
        case "SCISSORS" : 
            putIconYourPlay.src = "hand-scissors-solid.svg";
            break;
        default:alert("Select a button!");
    }
    document.getElementById("playerPlayIcon").appendChild(putIconYourPlay);

    switch(computerSelection){
        case "ROCK" : 
            putIconComputerPlay.src = "hand-rock-solid.svg";
            break;
        case "PAPER" : 
            putIconComputerPlay.src = "hand-paper-solid.svg";
            break;
        case "SCISSORS" : 
            putIconComputerPlay.src = "hand-scissors-solid.svg";
            break;
        default:alert("Select a button!");
    }
    document.getElementById("computerPlayIcon").appendChild(putIconComputerPlay);
}


// Count plays

let yourScore = 0
let computerScore = 0
let numberOfPlays = 0

let yourScoreNumber = document.getElementById("your-score");
let computerScoreNumber = document.getElementById("computer-score");

function counter() {
    
    if (playerSelection == computerSelection) {
    }
    else if (playerSelection=="SCISSORS" && computerSelection=="PAPER" || playerSelection=="ROCK" && computerSelection=="SCISSORS" || playerSelection=="PAPER" && computerSelection=="ROCK") {
        yourScore = yourScore + 1;
    }
    else if (computerSelection=="SCISSORS" && playerSelection=="PAPER" || computerSelection=="ROCK" && playerSelection=="SCISSORS" || computerSelection=="PAPER" && playerSelection=="ROCK") {
        computerScore = computerScore + 1;
    }
    else {
        alert ("Insert a valid play");
    }


    yourScoreNumber.innerHTML = yourScore
    computerScoreNumber.innerHTML = computerScore

}


let numberOfRound = document.getElementById("number-of-round");

function roundCounter() {

    numberOfPlays = numberOfPlays + 1
    numberOfRound.innerHTML = numberOfPlays;

}



function roundCheck() {

    if (numberOfPlays == 5) {
        
        if (yourScore > computerScore) {
            alert ("you won")
        }
        else if (yourScore < computerScore) {
            alert ("looser")
        }
        else {
            alert ("tie")
        }

        numberOfPlays = 0;
        yourScore = 0;
        computerScore = 0;

        numberOfRound.innerHTML = numberOfPlays;
        yourScoreNumber.innerHTML = yourScore
        computerScoreNumber.innerHTML = computerScore

    }

}
