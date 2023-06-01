const searchChargePlace = async (place) => {
  clusterer.clear();
  const charge = await fetch(
    `https://api.odcloud.kr/api/EvInfoServiceV2/v1/getEvSearchList?page=1&perPage=1000&cond%5Baddr%3A%3ALIKE%5D=${place}&serviceKey=Wnus4QpirWGI56CfvzMWDIDHMRL%2FmEF%2FqTl9gwVNbRggLYTGPFIdwBy0L51B%2B27d5QRbLanNmIAxPwNvl7dKPA%3D%3D`
  );
  const response = await charge.json();
  const evchargeList = response.data;
  const markers = [];
  evchargeList.forEach((item, idx) => {
    const marker = new kakao.maps.Marker({
      map: map,
      position: new kakao.maps.LatLng(item.lat, item.longi),
    });

    // 마커를 클릭했을 때 커스텀 오버레이를 표시합니다
    kakao.maps.event.addListener(marker, "click", function () {
      overlay.setMap(map);
      overlay.setPosition(marker.getPosition());
    });

    markers.push(marker);
    // 클러스터러에 마커들을 추가합니다
  });
  clusterer.addMarkers(markers);
};

console.log("1");
console.log("2");
setTimeout(function () {
  console.log("100");
}, 1000);
searchChargePlace("서울");
console.log("3");
console.log("4");
console.log("5");

//멀티스레드
//비동기 싱글스레드
