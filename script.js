let randomNumber = Math.trunc(Math.random() * 20) + 1;
let highScore = 0;
let score = 20;
let displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
document.querySelector(".check").addEventListener("click", () => {
  const guessNumber = Number(document.querySelector(".guess").value);
  if (!guessNumber) {
    displayMessage(" ⛔ please insert valid Number");
  } else if (guessNumber === randomNumber) {
    if (score > 1) {
      displayMessage("✌ The Correct Number");
      document.querySelector("body").style.backgroundColor = "#008000";
      document.querySelector(".number").style.width = "30rem";
      document.querySelector(".number").textContent = randomNumber;
      if (score > highScore) {
        highScore = score;
        document.querySelector(".highscore").textContent = highScore;
      }
    }
  } else if (guessNumber !== randomNumber) {
    if (score > 1) {
      displayMessage(
        guessNumber > randomNumber ? "📈 Too High Number" : "📉 Too Low Number"
      );
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage(" 🔥 You lost the Game");
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", () => {
  score = 20;
  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";
  displayMessage(" 😉 Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".highscore").textContent = score;
  document.querySelector(".number").style.width = "15rem";
  document.querySelector("body").style.backgroundColor = "#222";
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".highscore").textContent = highScore;
});
