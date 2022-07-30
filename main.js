let computerNumber = 0;
let userInput = document.getElementById("userInput");
let resultArea = document.getElementById("resultArea");
let chanceArea = document.getElementById("chanceArea");
let playButton = document.getElementById("playButton");
let resetButton = document.getElementById("resetButton");

let chances = 5;
let gameOver = false;
let history = [];

playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
userInput.addEventListener("focus", function () {
  userInput.value = "";
});

function pickRandomNumber() {
  computerNumber = Math.floor(Math.random() * 100) + 1;
}

function play() {
  let userValue = userInput.value;
  if (userValue < 1 || userValue > 100) {
    resultArea.textContent = "1과 100사이의 숫자를 입력해 주세요";
    return;
  }

  if (history.includes(userInput.value)) {
    resultArea.textContent =
      "이미 입력한 숫자입니다. 다른 숫자를 입력해 주세요";
    return;
  }

  history.push(userValue);

  chances--;
  chanceArea.textContent = `남은 기회는 ${chances}번 입니다.`;

  if (userValue < computerNumber) {
    resultArea.textContent = "UP!!!";
  } else if (userValue > computerNumber) {
    resultArea.textContent = "DOWN!!!";
  } else {
    resultArea.textContent = "맞췄다!!!";
    gameOver = true;
  }

  if (chances < 1) {
    gameOver = true;
  }

  if (gameOver == true) {
    playButton.disabled = true;
  }
}

function reset() {
  userInput.value = "";
  pickRandomNumber();
  resultArea.textContent = "결과는 여기에 나옵니다!";
}

pickRandomNumber();
