// Rock Paper Scissors
const getComputerChoice = () => {
    const rock = "rock";
    const paper = "paper";
    const scissors = "scissors";
    const randomIndex = Math.floor(Math.random() * 3);
    switch (randomIndex) {
        case 0:
            return rock;
        case 1:
            return paper;
        case 2:
            return scissors;
    }
};

const getHumanChoice = () => {
    const choice = prompt("Enter rock, paper, or scissors:").toLowerCase();
    if (choice === "rock" || choice === "paper" || choice === "scissors") {
        return choice;
    } else {
        alert("Invalid choice. Please try again.");
        return getHumanChoice();
    }
};

let humanScore = 0;
let computerScore = 0;


const playRound = (humanChoice,ComputerChoice) =>{
    if (humanChoice === ComputerChoice) {
        console.log(`It's a tie! ${humanChoice} equals ${ComputerChoice}`);
        return "It's a tie!";
    } else if (
        (humanChoice === "rock" && ComputerChoice === "scissors") ||
        (humanChoice === "paper" && ComputerChoice === "rock") ||
        (humanChoice === "scissors" && ComputerChoice === "paper")
    ) {
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${ComputerChoice}`);
        return "You win!";
    } else {
        computerScore++;
        console.log(`You lose! ${ComputerChoice} beats ${humanChoice}`);
        return "You lose!";
    }
};

const playGame = () => {

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log(`Human Score: ${humanScore}`);
    console.log(`Computer Score: ${computerScore}`);
};

for (let i = 0; i < 5; i++) {
    playGame();
}
console.log(`Final Human Score: ${humanScore}`);
console.log(`Final Computer Score: ${computerScore}`);