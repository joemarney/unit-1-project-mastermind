/*-------------- Constants -------------*/
const colours = [
  "rgb(0, 128, 0)",
  "rgb(255, 255, 255)",
  "rgb(255, 165, 0)",
  "rgb(0, 0, 255)",
  "rgb(255, 192, 203)",
  "rgb(75, 0, 130)",
  "rgb(255, 0, 0)",
  "rgb(255, 255, 0)",
  "rgb(169, 169, 169)",
];
/*---------- Variables (state) ---------*/
let mystery = [];
let currentTurn = 0;
let timer;
let timerActive = false;

/*----- Cached Element References  -----*/
const colourSelector = document.querySelectorAll(".colour");
const checkBtn = document.querySelector(".check");
const resultMsg = document.querySelector(".message");
const hamMenu = document.querySelector(".ham-menu");
const offScreenMenu = document.querySelector(".off-screen-menu");
const themeBtn = document.querySelector("#light");
const instructions = document.querySelector(".how-to");
const navBar = document.querySelector(".nav-bar");
const exitBtn = document.querySelector(".exit");
const showInstructions = document.querySelector("#instructionsPage");
const modeToggle = document.querySelectorAll(".mode");
const timerBtn = document.querySelector(".add-timer");
const timeLeft = document.querySelector("#time");

const secretCode = document.querySelectorAll(
  "#secret1, #secret2, #secret3, #secret4"
);
const turns = [
  document.querySelectorAll(".first"),
  document.querySelectorAll(".second"),
  document.querySelectorAll(".third"),
  document.querySelectorAll(".fourth"),
  document.querySelectorAll(".fifth"),
  document.querySelectorAll(".sixth"),
  document.querySelectorAll(".seventh"),
  document.querySelectorAll(".eighth"),
];

const feedback = [
  document.querySelectorAll(".hint1"),
  document.querySelectorAll(".hint2"),
  document.querySelectorAll(".hint3"),
  document.querySelectorAll(".hint4"),
  document.querySelectorAll(".hint5"),
  document.querySelectorAll(".hint6"),
  document.querySelectorAll(".hint7"),
  document.querySelectorAll(".hint8"),
];
/*-------------- Functions -------------*/
const init = function () {
  currentTurn = 0;
  correctGuesses = 0;
  mystery = [];
  resetColours();
  getSecretCode();
  playerTurns(currentTurn);
  resultMsg.textContent = "MASTERMIND";
  checkBtn.textContent = "CHECK";
  checkBtn.removeEventListener("click", init);
  checkBtn.addEventListener("click", giveFeedback);
  if (timerActive) {
    clearInterval(timer);
    countdownTimer();
  }
};

const countdownTimer = function () {
  let count = 60;
  timeLeft.textContent = count;
  timer = setInterval(function () {
    count--;
    if (count > 0) {
      timeLeft.textContent = count;
    } else {
      clearInterval(timer);
      timeLeft.textContent = "0.";
    }
    if (count === 0) {
      loser();
    }
  }, 1000);
};

const resetColours = function () {
  turns.forEach((turn) => {
    turn.forEach((guess) => {
      guess.style.backgroundColor = "";
      guess.style.outline = "";
    });
  });
  feedback.forEach((hints) => {
    hints.forEach((hint) => {
      hint.style.backgroundColor = "";
    });
  });
};

const getSecretCode = function () {
  mystery.length = 0;
  while (mystery.length < 4) {
    let random = colours[Math.floor(Math.random() * colours.length)];
    if (!mystery.includes(random)) {
      mystery.push(random);
    }
  }
  [...secretCode].forEach((element, index) => {
    element.style.backgroundColor = mystery[index];
  });
};

const changeColour = function (event) {
  if (selectedDiv) {
    const selectedColour = window.getComputedStyle(
      event.target
    ).backgroundColor;
    if (selectedColour) {
      selectedDiv.style.backgroundColor = selectedColour;
    }
  }
};

const playerTurns = function (turnIndex) {
  turns[turnIndex].forEach((guess) => {
    guess.addEventListener("click", function () {
      selectedDiv = guess;
      turns[turnIndex].forEach((d) => (d.style.outline = ""));
      guess.style.outline = "2px solid white";
    });
  });
};

const disablePlayerTurn = function (turnIndex) {
  turns[turnIndex].forEach((el) => {
    el.style.outline = "";
  });
};

const giveFeedback = function () {
  let result = [];
  let matched = Array(mystery.length).fill(false);
  let guessColours = [...turns[currentTurn]].map(
    (el) => el.style.backgroundColor
  );
  let correctGuesses = 0;

  for (let i = 0; i < turns[currentTurn].length; i++) {
    if (guessColours[i] === mystery[i]) {
      result[i] = "correct";
      matched[i] = true;
      correctGuesses++;
    } else {
      result[i] = "blank";
    }
  }
  for (let i = 0; i < turns[currentTurn].length; i++) {
    if (result[i] === "correct") continue;
    for (let j = 0; j < mystery.length; j++) {
      if (!matched[j] && guessColours[i] === mystery[j]) {
        result[i] = "incorrect";
        matched[j] = true;
        break;
      }
    }
  }
  result.forEach((feedbackResult, index) => {
    if (feedbackResult === "correct") {
      feedback[currentTurn][index].style.backgroundColor = "green";
    } else if (feedbackResult === "incorrect") {
      feedback[currentTurn][index].style.backgroundColor = "orange";
    } else if (feedbackResult === "blank") {
      feedback[currentTurn][index].style.backgroundColor = "";
    }
  });

  if (correctGuesses === mystery.length) {
    winner();
  } else if (currentTurn < turns.length - 1) {
    disablePlayerTurn(currentTurn);
    currentTurn++;
    playerTurns(currentTurn);
    turns.forEach((turn) => {
      turn.forEach((guess) => {
        guess.style.outline = "";
      });
    });
  } else {
    loser();
  }
};

const winner = function () {
  resultMsg.textContent = "GOOD JOB, YOU CRACKED THE CODE.";
  checkBtn.textContent = "RESET";
  clearInterval(timer);
  checkBtn.removeEventListener("click", giveFeedback);
  checkBtn.addEventListener("click", init);
  youWereMasterful();
};

const loser = function () {
  resultMsg.textContent = "BETTER LUCK NEXT TIME.";
  checkBtn.textContent = "RETRY";
  clearInterval(timer);
  checkBtn.removeEventListener("click", giveFeedback);
  checkBtn.addEventListener("click", init);
  iUsedToWin();
};

const okayReady = function () {
  const okayReadySoundbite = new Audio("../soundbites/okay_ready.wav");
  okayReadySoundbite.volume = 0.3;
  okayReadySoundbite.play();
};
const ahMastermind = function () {
  const ahMastermindSoundbite = new Audio("../soundbites/ah_mastermind.wav");
  ahMastermindSoundbite.volume = 0.3;
  ahMastermindSoundbite.play();
};
const mastermindUgh = function () {
  const mastermindUghSoundbite = new Audio("../soundbites/mastermind_ugh.wav");
  mastermindUghSoundbite.volume = 0.3;
  mastermindUghSoundbite.play();
};
const youWereMasterful = function () {
  const youWereMasterfulSoundbite = new Audio(
    "../soundbites/you_were_masterful.wav"
  );
  youWereMasterfulSoundbite.volume = 0.3;
  youWereMasterfulSoundbite.play();
};
const iUsedToWin = function () {
  const iUsedToWinSoundbite = new Audio("../soundbites/i_used_to_win.wav");
  iUsedToWinSoundbite.volume = 0.3;
  iUsedToWinSoundbite.play();
};
const mastermindGames = function () {
  const mastermindGamesSoundbite = new Audio(
    "../soundbites/mastermind_games_of.wav"
  );
  mastermindGamesSoundbite.volume = 0.3;
  mastermindGamesSoundbite.play();
};

const changeThemeBtn = function () {
  if (themeBtn.innerText == "LIGHT MODE") {
    themeBtn.innerText = "DARK MODE";
  } else {
    themeBtn.innerText = "LIGHT MODE";
  }
  for (let i = 0; i < modeToggle.length; i++) {
    modeToggle[i].classList.toggle("mode");
  }
  mastermindUgh();
};
/*----------- Event Listeners ----------*/
colourSelector.forEach((button) => {
  button.addEventListener("click", changeColour);
});
checkBtn.addEventListener("click", giveFeedback);
hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
  ahMastermind();
});
instructions.addEventListener("click", () => {
  showInstructions.classList.toggle("show");
  mastermindGames();
});
exitBtn.addEventListener("click", () => {
  showInstructions.classList.toggle("show");
});

themeBtn.addEventListener("click", changeThemeBtn);

timerBtn.addEventListener("click", () => {
  timerActive = !timerActive;
  if (timerActive) {
    countdownTimer();
  } else {
    clearInterval(timer);
    timeLeft.textContent = "";
  }
});
init();
