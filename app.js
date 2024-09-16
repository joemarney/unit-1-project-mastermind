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
let result = [];

/*----- Cached Element References  -----*/
const colourSelector = document.querySelectorAll(".button");
const checkBtn = document.querySelector(".check");
const resultMsg = document.querySelector(".message");

const secretCode = document.querySelectorAll(
  ".secret1, .secret2, .secret3, .secret4"
);
const turn1 = document.querySelectorAll(
  ".colour1, .colour2, .colour3, .colour4"
);
// const turn2 = document.querySelectorAll(
//   ".colour5, .colour6, .colour7, .colour8"
// );
// const turn3 = document.querySelectorAll(
//   ".colour9, .colour10, .colour11, .colour12"
// );
// const turn4 = document.querySelectorAll(
//   ".colour13, .colour14, .colour15, .colour16"
// );
// const turn5 = document.querySelectorAll(
//   ".colour17, .colour18, .colour19, .colour20"
// );
// const turn6 = document.querySelectorAll(
//   ".colour21, .colour22, .colour23, .colour24"
// );
// const turn7 = document.querySelectorAll(
//   ".colour25, .colour26, .colour27, .colour28"
// );
// const turn8 = document.querySelectorAll(
//   ".colour29, .colour30, .colour31, .colour32"
// );

const firstHint = document.getElementsByClassName("hint");
// const secondHint = document.querySelectorAll(".hint5, .hint6, .hint7, .hint8");
// const thirdHint = document.querySelectorAll(
//   ".hint9, .hint10, .hint11, .hint12"
// );
// const fourthHint = document.querySelectorAll(
//   ".hint13, .hint14, .hint15, .hint16"
// );
// const fifthHint = document.querySelectorAll(
//   ".hint17, .hint18, .hint19, .hint20"
// );
// const sixthHint = document.querySelectorAll(
//   ".hint21, .hint22, .hint23, .hint24"
// );
// const seventhHint = document.querySelectorAll(
//   ".hint25, .hint26, .hint27, .hint28"
// );
// const eighthHint = document.querySelectorAll(
//   ".hint29, .hint30, .hint31, .hint32"
// );

// const guesses = [turn1, turn2, turn3, turn4, turn5, turn6, turn7, turn8];
// const feedback = [
//   firstHint,
//   secondHint,
//   thirdHint,
//   fourthHint,
//   fifthHint,
//   sixthHint,
//   seventhHint,
//   eighthHint,
// ];
/*-------------- Functions -------------*/
const init = function () {
  getSecretCode();
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

turn1.forEach((guess) => {
  guess.addEventListener("click", function () {
    selectedDiv = guess;
    turn1.forEach((d) => (d.style.outline = ""));
    guess.style.outline = "2px solid white";
  });
});

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

const giveFeedback = function () {
  let result = [];
  let matched = Array(mystery.length).fill(false);
  let guessColors = [...turn1].map((el) => el.style.backgroundColor);

  for (let i = 0; i < turn1.length; i++) {
    if (guessColors[i] === mystery[i]) {
      result[i] = "correct";
      matched[i] = true;
    } else {
      result[i] = "blank";
    }
  }
  for (let i = 0; i < turn1.length; i++) {
    if (result[i] === "correct") continue;
    for (let j = 0; j < mystery.length; j++) {
      if (!matched[j] && guessColors[i] === mystery[j]) {
        result[i] = "incorrect";
        matched[j] = true;
        break;
      }
    }
  }
  result.forEach((feedback, index) => {
    if (feedback === "correct") {
      firstHint[index].style.backgroundColor = "green";
    } else if (feedback === "incorrect") {
      firstHint[index].style.backgroundColor = "orange";
    } else if (feedback === "blank") {
      firstHint[index].style.backgroundColor = "";
    }
  });

  console.log("Guess Colors: ", guessColors);
  console.log("Mystery Colors: ", mystery);
  console.log("Result: ", result);
};

const checkWin = function () {
  resultMsg.textContent = "GOOD JOB, YOU CRACKED THE CODE.";
  checkBtn.textContent = "RESET";
};

// checkWin();
init();

/*----------- Event Listeners ----------*/
colourSelector.forEach((button) => {
  button.addEventListener("click", changeColour);
});
checkBtn.addEventListener("click", giveFeedback);
