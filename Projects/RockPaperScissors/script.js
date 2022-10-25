/* 
make "Random" variable of Rock, Paper or Scissors
make "Guess" variable from user input, either Rock, Paper or Scissors

Compare Random to Guess to see who wins
    Rock beats Scissors
    Scissors beat Paper
    Paper beats Rock

Display the winner
*/

//Function set to start at button click
function play() {
  // Array of the different choices allowed.
  let choices = ["rock", "paper", "scissors"];

  // Random choice from machine based on choices array
  let random = choices[Math.floor(Math.random() * 3)];

  //fetch player choice
  let playerChoice = document.getElementById("player-choice").value;

  console.log(playerChoice);
  console.log(random);

  //compare player choice to machine choice
  //player chose rock
  if (playerChoice == "rock") {
    if (random == "rock") {
      console.log("It's a tie!");
    }
    if (random == "scissors") {
      console.log("You won!");
    }
    if (random == "paper") {
      console.log("You lost:(");
    }
  }

  //player chose paper
  if (playerChoice == "paper") {
    if (random == "paper") {
      console.log("It's a tie!");
    }
    if (random == "rock") {
      console.log("You won!");
    }
    if (random == "scissors") {
      console.log("You lost:(");
    }
  }

  //player chose scissors
  if (playerChoice == "scissors") {
    if (random == "scissors") {
      console.log("It's a tie!");
    }
    if (random == "paper") {
      console.log("You won!");
    }
    if (random == "rock") {
      console.log("You lost:(");
    }
  }
}
