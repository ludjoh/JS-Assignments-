
let button0Reference = document.getElementById("button0");

let playerRoll = 0;
let A1Roll = 0;
let playerWins = 0;
let A1Wins = 0;
let ties = 0;

let playerRollText = document.getElementById("playerRollText");
let A1RollText = document.getElementById("A1RollText");
let resultRoll = document.getElementById("resultRoll");

let scoreboardPlayer = document.getElementById("scoreboardPlayer");
let scoreboardTies = document.getElementById("scoreboardTies");
let scoreboardA1 = document.getElementById("scoreboardA1");

// Function to save a cookie with a 30-year expiration date
function saveCookie(name, value) {
  const date = new Date();
  date.setFullYear(date.getFullYear() + 30); // Set the date to 30 years in the future
  const expires = "expires=" + date.toUTCString(); // Format the expiration date
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// Function to get a cookie value by name
function getCookie(name) {
  const cookies = document.cookie.split("; ");
  for (let cookie of cookies) {
    let [key, value] = cookie.split("=");
    if (key === name) return value;
  }
  return 0; // Return 0 if the cookie is not found
}

// Function to load saved cookies and initialize variables
function loadCookies() {
  playerWins = parseInt(getCookie("playerWins")) || 0;
  A1Wins = parseInt(getCookie("A1Wins")) || 0;
  ties = parseInt(getCookie("ties")) || 0;

  showUpdatedScoreboard(); // Update the scoreboard with loaded values
}

// Function to update the scoreboard
function showUpdatedScoreboard() {
  scoreboardPlayer.innerHTML = "Spelare Vinster: " + playerWins;
  scoreboardTies.innerHTML = "Oavgjorda: " + ties;
  scoreboardA1.innerHTML = "Dator Vinster: " + A1Wins;
}

// Function to generate random number for player
function getRandomNumberForPlayer() {
  playerRoll = Math.floor(Math.random() * 6) + 1;
}

// Function to show player's roll
function showPlayerRollText() {
  playerRollText.innerText = "Spelarens kast blev: " + playerRoll;
}

// Function to generate random number for AI
function getRandomNumberForA1() {
  A1Roll = Math.floor(Math.random() * 6) + 1;
}

// Function to show AI's roll
function showA1RollText() {
  A1RollText.innerText = "Datorns kast blev: " + A1Roll;
}

// Function to update scoreboard based on the game outcome
function updateScoreboard() {
  if (playerRoll > A1Roll) {
    playerWins++;
  } else if (playerRoll < A1Roll) {
    A1Wins++;
  } else {
    ties++;
  }
}

// Function to show the result of the game round
function showResultRoll() {
  if (playerRoll < A1Roll) {
    resultRoll.innerText = "Datorn vinner!";
    resultRoll.style.color = "red";
  } else if (playerRoll > A1Roll) {
    resultRoll.innerText = "Spelaren vinner!";
    resultRoll.style.color = "green";
  } else {
    resultRoll.innerText = "Oavgjort!";
    resultRoll.style.color = "yellow";
  }
}

// Add event listener to the button
button0Reference.addEventListener("click", function() {
  getRandomNumberForPlayer();
  showPlayerRollText();
  getRandomNumberForA1();
  showA1RollText();
  showResultRoll();
  updateScoreboard();
  showUpdatedScoreboard();

  // Save updated scores to cookies with a 30-year expiration
  saveCookie("playerWins", playerWins);
  saveCookie("A1Wins", A1Wins);
  saveCookie("ties", ties);
});

// Load cookies and display saved scores when the page loads
window.onload = function() {
  loadCookies();
};

