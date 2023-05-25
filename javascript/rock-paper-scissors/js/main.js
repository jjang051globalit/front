const computerList = document.querySelectorAll(".computer ul li");
const humanList = document.querySelectorAll(".human ul li");
const resultList = document.querySelector(".result ul");
const appendItems = function (className) {
  const apppendItem = document.createElement("li");
  apppendItem.classList.add(className);
  apppendItem.textContent = className.substring(0, 1);
  resultList.appendChild(apppendItem);
};
let computerChoice = 0;
//console.log("🚀 ~ file: main.js:2 ~ computerList:", computerList);
const makeRandom = () => {
  computerList[0].style.display = "none";
  computerList[1].style.display = "none";
  computerList[2].style.display = "none";
  computerChoice = Math.floor(Math.random() * 3);
  computerList[computerChoice].style.display = "block";
};
//console.log(10 === "10");
humanList.forEach((item, idx) => {
  item.addEventListener("click", () => {
    clearInterval(computerIdx);
    if (idx === computerChoice) {
      //console.log("draw");
      appendItems("draw");
    } else if (idx === 0 && computerChoice === 1) {
      appendItems("lose");
    } else if (idx === 1 && computerChoice === 2) {
      appendItems("lose");
    } else if (idx === 2 && computerChoice === 0) {
      appendItems("lose");
    } else {
      appendItems("win");
    }
  });
});

const computerIdx = setInterval(makeRandom, 50); // clearInterval
makeRandom();
