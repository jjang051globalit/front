// async / await

/*
const myPromise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("success");
    //reject("fail");
  }, 1000);
});
console.log(myPromise);

myPromise
  .then(function (msg) {
    console.log(msg);
  })
  .catch(function (msg) {
    console.log(msg);
  })
  .finally(function () {
    console.log("이건 무조건 출력");
    console.log(myPromise);
  });
*/

const user = {
  id: "jjang051",
  name: "장성호",
};

// 비동기적 실행을 동기적으로 바꾼다.

function fetchUser() {
  const url = "https://jsonplaceholder.typicode.com/users/1";
  return fetch(url).then((response) => response.json());
}

async function checkName() {
  const user = await fetchUser(); // 엄마 철수
  console.log(user);
  if (user.id === 1) {
    console.log(user.name);
  }
}
//checkName();
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json())
  .then((data) => data.userId)
  .then(function (userId) {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => response.json())
      .then(function (user) {
        //console.log(user.name);
      });
  });

// promise;
async function fetchUserName(postId) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  const post = await response.json();
  const userId = post.userId;
  const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
  const user = await userResponse.json();
  return user.name;
}

fetchUserName(1).then(function (name) {
  console.log(name);
});
// const students = [
//   "장은진",
//   "안현우",
//   "정진영",
//   "김민하",
//   "장선영",
//   "박태은",
//   "최수민",
//   "장문선",
//   "최나슬",
//   "이민정",
//   "김지훈",
//   "이정재",
//   "손예지",
//   "권영현",
// ];

// console.log(students[Math.floor(Math.random() * students.length)]);
