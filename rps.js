function playerChoice() {
  let player_choice;
  const rock = document.querySelector(".rock");
  const paper = document.querySelector(".paper");
  const scissors = document.querySelector(".scissors");
}
playerChoice();

function updateScore(winner) {
  let player_score = 0,
    pc_score = 0;
  const resultLabel = document.querySelector(".result");
  if (winner === 1) {
    const playerScoreLabel = document.querySelector(".score .player");
    player_score++;
    resultLabel.textContent = "Player wins round!";
    playerScoreLabel.textContent = `Player: ${player_score}`;
  } else if (winner === 2) {
    const pcScoreLabel = document.querySelector(".score .pc");
    pc_score++;
    resultLabel.textContent = "PC wins round!";
    pcScoreLabel.textContent = `PC: ${pc_score}`;
  } else {
    resultLabel.textContent = "Round ends in a draw!";
  }
}

function playRound(player_choice) {
  let pc_choice = Math.floor(Math.random() * (3 - 1 + 1) + 1);
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
