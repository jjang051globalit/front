/*
const menu01 = document.querySelector(".master-piece .menu li:nth-child(1)");
const menu02 = document.querySelector(".master-piece .menu li:nth-child(2)");
const menu03 = document.querySelector(".master-piece .menu li:nth-child(3)");

menu01.addEventListener("click", function () {
  alert("menu01을 눌렀습니다.");
});

menu02.addEventListener("click", callFunc);

// 사용자가 이벤트를 발생시켰을때 나중에 호출된다. callback
function callFunc() {
  console.log("함수를 실행합니다.");
}
//callFunc();
*/
const header = document.querySelector(".header");
const menu = document.querySelectorAll(".master-piece .menu li");
const gnbList = document.querySelectorAll(".gnb .list > li");
gnbList.forEach(function (item, idx) {
  item.addEventListener("mouseenter", function () {
    header.classList.add("on");
  });
  item.addEventListener("mouseleave", function () {
    header.classList.remove("on");
  });
});
// 진짜 배열은 아님.. 그러므로 배열의 메서드는 쓸 수 없음.
//console.log(menu);
for (let i = 0; i < menu.length; i++) {
  menu[i].addEventListener("click", function () {
    alert(i + "번째 입니다.");
  });
}

const fruits = ["apple", "melon", "peach"];
