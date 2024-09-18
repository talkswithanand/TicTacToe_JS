let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let hiddenDiv = document.querySelectorAll(".winner.hide");
let msg = document.querySelector("#msg");
let newBtn = document.querySelector("#new");

let turn0 = true; //PlayerO

let btnCount = 0;

const resetGame = () => {
  turn0 = true;
  btnCount = 0;
  enableBoxes();
  hiddenDiv[0].classList.add("hide");
};

const winnings = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const showDrawer = () => {
  msg.innerText = "Match Tie! No Winner";
  hiddenDiv[0].classList.remove("hide");
  disableBoxes();
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    btnCount++;
    if (turn0) {
      box.innerText = "O";
      turn0 = false;
    } else {
      box.innerText = "X";
      turn0 = true;
    }
    box.disabled = true;
    if (btnCount == 9) {
      showDrawer();
    }
    checkWinner();
  });
});

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showWinner = (winner) => {
  msg.innerText = `Congratulations! Winner is ${winner}`;
  hiddenDiv[0].classList.remove("hide");
  disableBoxes();
};

const checkWinner = () => {
  for (let pattern of winnings) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showWinner(pos1Val);
      }
    }
  }
};

newBtn.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);
