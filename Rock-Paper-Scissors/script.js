console.log("Rock Paper Scisscors");

const buttons = document.querySelectorAll("button");
let humanChoiceBtn;
let humanScore = 0;
let computerScore = 0;


function getComputerChoice(){
  const computerChoice = Math.random();
  // console.log(computerChoice);
  let computerChoiceInterpretation;
  
  if(computerChoice >= 0 && computerChoice < .33){
    computerChoiceInterpretation = "rock";
  } else if(computerChoice >= .33 && computerChoice < .66){
    computerChoiceInterpretation = "paper";
  } else {
    computerChoiceInterpretation = "scissors";
  }
  console.log("Computer:" + computerChoiceInterpretation);
  
  return computerChoiceInterpretation;
}

function getHumanChoice(){
  let humanChoice = prompt("Enter Choice: ");
  humanChoice = humanChoice.toLowerCase();
  
  console.log(humanChoice);
  return humanChoice;
}

function playRound(humanChoice, computerChoice){
  let winner;
  
  if(computerChoice === humanChoice){
    console.log("It's a Tie!");
  } else if(computerChoice === "rock"){
    if(humanChoice === "paper"){
      console.log("Paper beats Rock!");
      winner = "human";
    } else if(humanChoice === "scissors"){
      console.log("Rock beats Scissors!");
      winner = "computer";
    }
  } else if(computerChoice === "paper"){
    if(humanChoice === "rock"){
      console.log("Paper beats Rock!");
      winner = "computer";
    } else if(humanChoice === "scissors"){
      console.log("Scissors beats paper!");
      winner = "human";
    }
  } else if(computerChoice === "scissors"){
    if(humanChoice === "paper"){
      console.log("Scissors beats Paper!");
      winner = "human";
    } else if(humanChoice === "rock"){
      console.log("Rock beats Scissors!");
      winner = "computer";
    }
  }
  
  return winner;
}

function playGame(){
  console.log("PlayGameFunc");
  let humanChoice = humanChoiceBtn;
  // let humanChoice = getHumanChoice();
  let computerChoice = getComputerChoice();
  
  let winner = playRound(humanChoice, computerChoice);
  
  if(winner === "computer"){
    computerScore++;
  } else if(winner === "human"){
    humanScore++;
  }
  
  console.log("Computer Score:    " + computerScore);
  console.log("Human Score:   " + humanScore);
}

// playGame();

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // alert("HELLO!");
    humanChoiceBtn = button.id;
    console.log("Human: " + humanChoiceBtn);
    playGame();
  })
});




