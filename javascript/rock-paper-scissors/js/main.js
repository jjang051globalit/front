//1. computer li 3개중에 하나만 보이게 하기...
//2. computer li를 무작위 나오게 setInterval 만들기...
//3. 밑에 human li에 이벤트 걸기...
//4. human li 클릭했을때 멈추게 하기.  clearInterval
//5. 승패 확인하기...
const computerList = document.querySelectorAll(".computer ul li");
const humanList = document.querySelectorAll(".human ul li");
const resultList = document.querySelector(".result ul");
// const li = document.createElement("li");
// li.textContent = "W";
// li.classList.add("win");
// resultList.append(li);
let computerChoice = 0;
const makeRandom = function () {
  computerList[0].style.display = "none";
  computerList[1].style.display = "none";
  computerList[2].style.display = "none";
  computerChoice = Math.floor(Math.random() * 3);
  computerList[computerChoice].style.display = "block";
};
let computerIdx = setInterval(makeRandom, 10);
makeRandom();

const appendItems = (className) => {
  const li = document.createElement("li");
  li.classList.add(className);
  li.textContent = className.substring(0, 1);
  resultList.append(li);
};
//appendItems("draw");
let count = 0;
let gameIdx = 0;
humanList.forEach((item, idx) => {
  item.addEventListener("click", function () {
    clearInterval(computerIdx);
    count++;
    if (count >= 3) {
      clearTimeout(gameIdx);
    } else {
      gameIdx = setTimeout(function () {
        computerIdx = setInterval(makeRandom, 10);
      }, 1000);
    }
    if (computerChoice === idx) {
      appendItems("draw");
    } else if ((computerChoice === 0 && idx === 1) || (computerChoice === 1 && idx === 2) || (computerChoice === 2 && idx === 0)) {
      appendItems("win");
    } else {
      appendItems("lose");
    }
  });
});
const animals = ["lion", "dog", "rabbit"];
for (let i = 0; i < 3; i++) {
  console.log(animals[i]);
}
animals.forEach(function (item, idx) {
  console.log(idx + "===" + item);
});
