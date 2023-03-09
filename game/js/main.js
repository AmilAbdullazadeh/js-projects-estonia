const arr = [
  {
    imageURL: "lizard.png",
    name: "Lizard",
  },
  {
    imageURL: "paper.png",
    name: "Paper",
  },
  {
    imageURL: "rock.png",
    name: "Rock",
  },
  {
    imageURL: "scissor.png",
    name: "Scissor",
  },
  {
    imageURL: "spock.png",
    name: "Spock",
  },
];

const rule = {
  Lizard: ["Spock", "Paper"],

  Paper: ["Rock", "Spock"],

  Rock: ["Lizard", "Scissor"],

  Scissor: ["Paper", "Lizard"],

  Spock: ["Scissor", "Rock"],
};

const playerOptions = document.querySelectorAll(
  "#player1 .available-options .option"
);

const botOptions = document.querySelectorAll(
  "#player2 .available-options .option"
);

const playerShowArea = document.querySelector(
  "#player1 .selected-option .option"
);
const botShowArea = document.querySelector("#player2 .selected-option .option");

const playerScore = document.querySelector("#player1-score");
const botScore = document.querySelector("#player2-score");

const resetBtn = document.querySelector(".reset");
const roundMessage = document.querySelector("#round-message");

playerOptions.forEach((element) => {
  element.addEventListener("click", () => {
    play(element);
  });
});

function reset() {
  botShowArea.innerHTML = "";
  playerShowArea.innerHTML = "";
  roundMessage.innerHTML = "Choose your option";
  playerScore.innerHTML = 0;
  botScore.innerHTML = 0;
  playerOptions.forEach((element) => {
    element.classList.remove("active");
  });
  botOptions.forEach((element) => {
    element.classList.remove("active");
  });
}

resetBtn.addEventListener("click", reset);

function play(element) {
  const playerIndex = element.getAttribute("data-index");
  const length = arr.length;
  const botIndex = Math.floor(Math.random() * length);

  showPlayerOption(playerIndex, playerShowArea);
  showPlayerOption(botIndex, botShowArea);

  highlightSelectedOption(playerIndex, playerOptions);
  highlightSelectedOption(botIndex, botOptions);

  calculate(playerIndex, botIndex);
}

const imagesPath = "assets";

function generateImgElement(index) {
  const { imageURL, name } = arr[index];
  const imgElement = document.createElement("img");
  imgElement.src = `${imagesPath}/${imageURL}`;
  imgElement.title = name;
  imgElement.alt = name;
  return imgElement;
}

function showPlayerOption(index, showArea) {
  const element = generateImgElement(index);
  showArea.innerHTML = "";
  showArea.append(element);
}

function highlightSelectedOption(index, options) {
  options.forEach(element => {
    element.classList.remove("active")
  })
  options[index].classList.add("active")
}

function showMessage(msg) {
  roundMessage.innerHTML = ""
  roundMessage.innerHTML = msg
}

function calculate(player, bot) {
  const playerChoice = arr[player].name
  const botChoice = arr[bot].name

  const playerStrength = rule[playerChoice]

  if (playerChoice === botChoice) {
    showMessage("Draw")
  } else if (playerStrength.includes(botChoice)) {
    showMessage("Player win !")
    addScore(playerScore)
  } else {
    showMessage("Bot win !");
    addScore(botScore);
  }
}

function addScore(gamer) { 
  const { innerHTML } = gamer
  gamer.innerHTML = Number(innerHTML) + 1
 }