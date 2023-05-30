const word = document.querySelector(".word");
const wordList = document.querySelector(".word-list ul");
//1. 주어진 단어를 하나 만든다.  배열에다 값을 넣고 그 중에 하나 골라서 뿌리기...
//console.log("🚀 ~ file: main.js:2 ~ word:", word);
const wordArray = []; // 배열은 참조 reference
const firstWords = ["강아지", "소나기", "기상청", "청소부", "부잣집", "호랑이"];
const firstWord = firstWords[Math.floor(Math.random() * firstWords.length)];

wordArray.push(firstWord);
const appedWord = (inputWord) => {
  const li = document.createElement("li");
  li.textContent = inputWord;
  wordList.append(li);
  wordArray.push(inputWord);
};

const fault = () => {
  word.value = "";
  gsap.from(".input-box", { x: 100, duration: 1, ease: "elastic.out(1, 0.2)" });
};

appedWord(firstWord);
//2. word에 글자를 입력하고 enter쳤을때 마지막 단어의 마지막 글자랑 입력한 단어의 첫글자가 같은지 따져야함
word.addEventListener("keyup", (e) => {
  if (e.key === "Enter" || e.keyCode === 13) {
    if (word.value.length !== 3) {
      fault();
      return;
    }
    const lastWord = document.querySelector(".word-list ul li:last-child").textContent;
    const lastChar = lastWord.substring(2);

    if (word.value.substring(0, 1) !== HanTools.dueum(lastChar)) {
      fault();
      return;
    }
    if (wordArray.includes(word.value)) {
      fault();
      return;
    }
    fetch(`https://opendict.korean.go.kr/api/search?key=9A816277AA70D1F8EC1ADC87D52CA5E2&q=${word.value}&req_type=json`)
      .then((response) => response.json())
      .then((data) => {
        if (data.channel.total <= 0) {
          fault();
          word.value = "";
        } else {
          appedWord(word.value);
          word.value = "";
        }
      });
  }
});

const checkDic = async (question) => {
  fetch(`https://opendict.korean.go.kr/api/search?key=9A816277AA70D1F8EC1ADC87D52CA5E2&q=${question}&req_type=json`)
    .then((response) => response.json())
    .then((data) => {
      return data.channel.total;
    });
};
