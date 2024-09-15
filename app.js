/*-------------- Constants -------------*/
const colours = [
  "ACBEA3",
  "FFFFFF",
  "FF9B71",
  "3FADD7",
  "FF00C3",
  "8D6E63",
  "FF5E5E",
  "FDFD96",
  "32322C",
];
/*---------- Variables (state) ---------*/
let mystery = [];
let winArr = [];

/*----- Cached Element References  -----*/
const colourSelector = document.querySelectorAll(".button");
const checkBtn = document.querySelector(".check");
const resultMsg = document.querySelector(".message");

const secretCode = document.querySelectorAll(
  ".secret1, .secret2, .secret3, .secret4"
);

const [...turn1] = document.querySelectorAll(
  ".colour1, .colour2, .colour3, .colour4"
);
const [...turn2] = document.querySelectorAll(
  ".colour5, .colour6, .colour7, .colour8"
);
const [...turn3] = document.querySelectorAll(
  ".colour9, .colour10, .colour11, .colour12"
);
const [...turn4] = document.querySelectorAll(
  ".colour13, .colour14, .colour15, .colour16"
);
const [...turn5] = document.querySelectorAll(
  ".colour17, .colour18, .colour19, .colour20"
);
const [...turn6] = document.querySelectorAll(
  ".colour21, .colour22, .colour23, .colour24"
);
const [...turn7] = document.querySelectorAll(
  ".colour25, .colour26, .colour27, .colour28"
);
const [...turn8] = document.querySelectorAll(
  ".colour29, .colour30, .colour31, .colour32"
);

const [...firstHint] = document.querySelectorAll(
  ".hint1, .hint2, .hint3, .hint4"
);
const [...secondHint] = document.querySelectorAll(
  ".hint5, .hint6, .hint7, .hint8"
);
const [...thirdHint] = document.querySelectorAll(
  ".hint9, .hint10, .hint11, .hint12"
);
const [...fourthHint] = document.querySelectorAll(
  ".hint13, .hint14, .hint15, .hint16"
);
const [...fifthHint] = document.querySelectorAll(
  ".hint17, .hint18, .hint19, .hint20"
);
const [...sixthHint] = document.querySelectorAll(
  ".hint21, .hint22, .hint23, .hint24"
);
const [...seventhHint] = document.querySelectorAll(
  ".hint25, .hint26, .hint27, .hint28"
);
const [...eighthHint] = document.querySelectorAll(
  ".hint29, .hint30, .hint31, .hint32"
);

const guesses = [turn1, turn2, turn3, turn4, turn5, turn6, turn7, turn8];
const feedback = [
  firstHint,
  secondHint,
  thirdHint,
  fourthHint,
  fifthHint,
  sixthHint,
  seventhHint,
  eighthHint,
];
/*-------------- Functions -------------*/
const init = function () {
  getSecretCode();
};
const handleClick = function (event) {
  if (selectedDiv) {
    const selectedColor = event.target.getAttribute("data-color");
    if (selectedColor) {
      selectedDiv.style.backgroundColor = `#${selectedColor}`;
    }
  }
};

[...turn1].forEach((guess) => {
  guess.addEventListener("click", function () {
    selectedDiv = guess;
    turn1.forEach((d) => (d.style.outline = ""));
    guess.style.outline = "2px solid black";
  });
});

const getSecretCode = function () {
  mystery.length = 0;
  while (mystery.length < 4) {
    let random = colours[Math.floor(Math.random() * colours.length)];
    if (!mystery.includes(random)) {
      mystery.push(random);
      console.log(mystery);
    }
  }
  [...secretCode].forEach((element, index) => {
    element.style.backgroundColor = `#${mystery[index]}`;
  });
};
init();

/*----------- Event Listeners ----------*/
colourSelector.forEach((button) => {
  button.addEventListener("click", handleClick);
});
