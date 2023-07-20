
let result = '';
let player = 0;
let computer = 0;

// Begin with function "getComputerChoice" - random return 'Rock','Paper' or 'Scissors'
// Return of computerSelection

function getComputerChoice() {

    let computerNumber = Math.floor(Math.random()*3)

    console.log(computerNumber)

    switch(computerNumber) {
        case 0: computerSelection = 'rock';
        break;
        case 1: computerSelection = 'paper';
        break;
        case 2: computerSelection = 'scissors';
        break;
    }

    return(computerSelection)
}




// Write a function that plays a single round of rock, paper, scissors

function playRound(playerSelection, computerSelection) {
    //make the players selection case sensitive (doesn't yet check for correct wording)
    playerSelection = playerSelection.toLowerCase();
    
    //nested if statements to check possible combinations.  A draw can be checked in one conditional so it's first. 
    if (playerSelection === computerSelection) {
        resultPrint(`It's a draw!`);
        return (result = 'draw');
    }
    else if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            resultPrint("You lose!");
            return(result = 'loss')
        }
        else {
            resultPrint("Winner!");
            return(result = 'win')
        }
    }
    else if (playerSelection === 'paper') {
        if (computerSelection === 'scissors') {
            resultPrint("You lose!");
            return(result = 'loss')
        }
        else {
            resultPrint("Winner!");
            return(result = 'win')
        }
    }
    else {
        if (computerSelection === 'rock') {
            resultPrint("You lose!");
            return(result = 'loss')
        }
        else {
            resultPrint("Winner!");
            return(result = 'win')
        }
    }

}

//playRound(prompt("Rock, Paper, or Scissors?"), computerSelection)


//write a funcion game() which plays out three rounds, tabling the results to declare a winner


//function game() {
    //let computer = 0
    //let player = 0
    //let x = 1
    // for statement to play out five rounds
    //for (x; x <= 5; x++) {
        //playround function, prompting for user input, randomly generating new computer choice
        //playRound(playerSelection, getComputerChoice())
        //feed in return "result" from playround, increment score.
        
    //}
    //alert final score after playing out five rounds
    //alert(`Player=${player}    Computer=${computer}`)







const selections = document.querySelectorAll('.selection');
console.log(selections);

function game() {

if (player === 5 || computer === 5) {
    return;
}

else {
    selections.forEach((selection) => {
        selection.addEventListener('click', function (e) {
            console.log(e.target.id)
            if (player === 5 || computer === 5) {
                gameOver();
            }
            else {
                playRound(e.target.id, getComputerChoice());
                if (result === 'win') {
                    player++;
                    const score = document.querySelector('#player');
                    score.textContent = `${player}`;
                    console.log(`${player} - ${computer}`);
                }
                else if (result === 'loss') {
                    computer++;
                    const score = document.querySelector('#computer');
                    score.textContent = `${computer}`;
                    console.log(`${player} - ${computer}`);
                }

                if (player === 5) {
                    resultPrint(`You are the champion!`);
                    gameOver();
                    return;
                }
                else if (computer === 5) {
                    resultPrint('You have been defeated!');
                    gameOver();
                    return;
                }
            }

            
        });
    });

}
}

function gameOver() {
    const reset = document.querySelector('#reset');
    reset.setAttribute("style", 'visibility: visible;');
    reset.addEventListener('click',  () => {location.reload();});
}

function resultPrint(result) {
    const resultUpdate = document.querySelector(`#result`);
    resultUpdate.textContent = `${result}`;
}

game();











    // Prompt user for choice 'rock, paper, or scissors': return of playerSelection, case insensitive


    // if/else loop for computerSelection nested in if/else condition for playerSelection