//ajax (asynchronous javascript and xml)
const thumbsList = document.querySelector(".thumbs-box ul");

const search = document.querySelector(".search");
const btnSearch = document.querySelector(".btn-search");
search.addEventListener("keyup", (e) => {
  if (e.key === "Enter" || e.keyCode === 13) {
    const searchWord = search.value; //전지현
    searchImg(searchWord);
  }
});
btnSearch.addEventListener("click", (e) => {
  const searchWord = search.value; //전지현
  searchImg(searchWord);
});
//promise   홍대역 8번출구 맥도널드() fullfield / rejected
/*
const searchImg = (searchWord) => {
  const aa = fetch(`https://dapi.kakao.com/v2/search/image?query=${searchWord}`, {
    headers: {
      Authorization: "KakaoAK 8a0584e2ec2cc7627ecb66e8d623dd86",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const imgList = data.documents;
      imgList.forEach(function (item, idx) {
        const li = document.createElement("li");
        const img = document.createElement("img");
        img.src = item.thumbnail_url;
        li.append(img);
        thumbsList.append(li);
      });
    });
};
*/

const removeItem = () => {
  const imgItem = document.querySelectorAll(".thumbs-box ul li");
  imgItem.forEach((item, idx) => {
    item.remove();
  });
};

const searchImg = async (searchWord) => {
  // 기존 이미지 없애기... li 태그 없애기... remove();
  removeItem();
  const imgResponse = await fetch(`https://dapi.kakao.com/v2/search/vclip?query=${searchWord}&size=30`, {
    headers: {
      Authorization: "KakaoAK 8a0584e2ec2cc7627ecb66e8d623dd86",
    },
  });
  const imgJson = await imgResponse.json();
  const imgList = imgJson.documents;
  imgList.forEach(function (item, idx) {
    const li = document.createElement("li");
    const img = document.createElement("img");
    const a = document.createElement("a");
    img.src = item.thumbnail;
    a.href = item.url;
    a.setAttribute("data-fancybox", "gallery");
    a.append(img);
    li.append(a);
    thumbsList.append(li);
  });
  gsap.from(".thumbsList li", { scale: 0, duration: 1, stagger: 0.02 });
  Fancybox.bind("[data-fancybox]", {
    // Your options go here
  });
};
