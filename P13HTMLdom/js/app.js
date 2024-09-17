

const textField0 = document.getElementById("text0");
textField0.innerHTML ="Rufus";

const buttonnumber0 = document.getElementById("button0");
buttonnumber0.innerHTML ="Press me <3";
buttonnumber0.style.color = "green";

let score = 0;

buttonnumber0.addEventListener("click", () => {
  increaseScore(1);
  updateScore();
});

function increaseScore() {
  score++;
}

function updateScore() {
  textField0.innerHTML = score;
}







