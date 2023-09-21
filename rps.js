const choiceButtons = document.querySelectorAll("[data-choice]");
const resultLabel = document.querySelector(".result");
const playerLabel = document.querySelector(".score .player");
const pcLabel = document.querySelector(".score .pc");
const resetBtn = document.querySelector(".reset");

let player_score = 0;
let pc_score = 0;

resetBtn.addEventListener("click", resetGame);

choiceButtons.forEach(choiceBtn => {
  choiceBtn.addEventListener("click", () => {
    const choice = choiceBtn.dataset.choice;
    makeChoice(choice);
  });
});

function makeChoice(choice) {
  let player_choice;
  switch (choice) {
    case "rock":
      player_choice = 1;
      break;
    case "paper":
      player_choice = 2;
      break;
    case "scissors":
      player_choice = 3;
      break;
    default:
      break;
  }
  let pc_choice = Math.floor(Math.random() * (3 - 1 + 1) + 1);
  playRound(player_choice, pc_choice);
}

function playRound(player_choice, pc_choice) {
  let result;
  if (player_choice == pc_choice) {
    result = 0;
  } else if (player_choice == 1 && pc_choice == 3) {
    result = 1;
  } else if (player_choice == 2 && pc_choice == 1) {
    result = 1;
  } else if (player_choice == 3 && pc_choice == 2) {
    result = 1;
  } else {
    result = 2;
  }
  updateScore(result);
}

function updateScore(result) {
  if (player_score == 5) {
    resultLabel.textContent = "You won the game!";
    // can write and add here another function endgame.
  } else if (pc_score == 5) {
    resultLabel.textContent = "Game over! PC wins!";
  } else {
    switch (result) {
      case 1:
        player_score++;
        resultLabel.textContent = "you win!";
        playerLabel.textContent = `Player: ${player_score}`;
        break;
      case 2:
        pc_score++;
        resultLabel.textContent = "pc wins!";
        pcLabel.textContent = `PC: ${pc_score}`;
        break;
      default:
        resultLabel.textContent = "draw!";
        break;
    }
  }
}

function resetGame() {
  player_score = 0;
  pc_score = 0;
  resultLabel.textContent = "Make your pick to start the game";
  playerLabel.textContent = `Player: ${player_score}`;
  pcLabel.textContent = `PC: ${pc_score}`;
}
