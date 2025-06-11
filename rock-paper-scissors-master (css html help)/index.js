const tally = document.getElementById("score");
const myTarget = document.getElementById("result");
const youPicked = document.getElementById("you-picked");
const computerPicked = document.getElementById("computer-picked");

const WIN = "You Win";
const LOSE = "You Lose";
const TIE = "There was a Tie";

let choices = ["ROCK", "PAPER", "SCISSORS"];
let choicePaths = ["icon-rock.svg", "icon-paper.svg", "icon-scissors.svg"];
let score = 0; // Initialize score

// chooses a number between 0 and 2 (computer choice)
function randomChoice() {
  return Math.floor(Math.random() * choices.length);
}

function userChoice(choice) {
  const computerChoice = randomChoice();
  const result = compareWhoWins(choice, computerChoice);

  myTarget.innerText = result;
  youPicked.innerText = choices[choice];
  computerPicked.innerText = choices[computerChoice];

  // Update score based on the result
  if (result === WIN) {
    score++;
  } else {
    console.log("score");
  }

  tally.innerText = ` ${score}`; // Update the score on the page
}

function compareWhoWins(choice, computerChoice) {
  if (choice === 0) {
    if (computerChoice === 0) {
      return TIE;
    }
    if (computerChoice === 1) {
      return WIN;
    }
    if (computerChoice === 2) {
      return LOSE;
    }
  }
  if (choice === 1) {
    if (computerChoice === 0) {
      return WIN;
    }
    if (computerChoice === 1) {
      return TIE;
    }
    if (computerChoice === 2) {
      return LOSE;
    }
  }
  if (choice === 2) {
    if (computerChoice === 0) {
      return LOSE;
    }
    if (computerChoice === 1) {
      return WIN;
    }
    if (computerChoice === 2) {
      return TIE;
    }
  }
}

// javascaript rules modal
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
