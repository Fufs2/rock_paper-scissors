function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function getHumanChoice() {
    let choice = prompt("Choose rock, paper, or scissors");
    if (choice.toLowerCase() === "rock") {
        return "rock";
    } else if (choice.toLowerCase() === "paper") {
        return "paper";
    } else if (choice.toLowerCase() === "scissors") {
        return "scissors";
    } else {
        return getHumanChoice();
    }
}


function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        return "You win! Rock beats scissors";
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        return "You win! Paper beats rock";
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        return "You win! Scissors beats paper";
    } else {
        return "You lose! " + computerChoice + " beats " + humanChoice;
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        console.log(playRound(humanChoice, computerChoice));
    }
}


game();