const word = document.querySelector(".word");
const wordList = document.querySelector(".word-list ul");
//1. 주어진 단어를 하나 만든다.  배열에다 값을 넣고 그 중에 하나 골라서 뿌리기...
//console.log("🚀 ~ file: main.js:2 ~ word:", word);
const firstWords = ["강아지", "소나기", "기상청", "청소부", "부잣집"];
const firstWord = firstWords[Math.floor(Math.random() * 5)];

const appedWord = (inputWord) => {
  const li = document.createElement("li");
  li.textContent = inputWord;
  wordList.append(li);
};
appedWord(firstWord);
//2. word에 글자를 입력하고 enter쳤을때 마지막 단어의 마지막 글자랑 입력한 단어의 첫글자가 같은지 따져야함
word.addEventListener("keyup", (e) => {
  if (e.key === "Enter" || e.keyCode === 13) {
    if (word.value.length !== 3) {
      word.value = "";
      return;
    }
    const lastWord = document.querySelector(".word-list ul li:last-child").textContent;
    const lastChar = lastWord.substring(2);
    if (word.value.substring(0, 1) !== lastChar) {
      word.value = "";
      return;
    }
    appedWord(word.value);
    word.value = "";
  }
});
