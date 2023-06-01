const container = document.querySelector(".map"); //지도를 담을 영역의 DOM 레퍼런스
const options = {
  center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
  level: 13, //지도의 레벨(확대, 축소 정도)
};
const map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
// 마커 클러스터러를 생성합니다
const clusterer = new kakao.maps.MarkerClusterer({
  map: map, // 마커들을 클러스터로 관리하고 표시할 지도 객체
  averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
  minLevel: 10, // 클러스터 할 최소 지도 레벨
});
const content = `<div class="wrap">
          <div class="info">
              <div class="title">
                  카카오 스페이스닷원
                  <div class="close" onclick="closeOverlay()" title="닫기"></div>
              </div>
              <div class="body">
                  <div class="img">
                      <img src="https://cfile181.uf.daum.net/image/250649365602043421936D" width="73" height="70">
                 </div>
                  <div class="desc">
                      <div class="ellipsis">제주특별자치도 제주시 첨단로 242</div>
                      <div class="jibun ellipsis">(우) 63309 (지번) 영평동 2181</div>
                      <div><a href="https://www.kakaocorp.com/main" target="_blank" class="link">홈페이지</a></div>
                  </div>
              </div>
          </div>
      </div>`;

// 마커 위에 커스텀오버레이를 표시합니다
// 마커를 중심으로 커스텀 오버레이를 표시하기위해 CSS를 이용해 위치를 설정했습니다
const overlay = new kakao.maps.CustomOverlay({
  content: content,
  //map: map,
  //position: marker.getPosition(),
});
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
//searchChargePlace("서울");
const search = document.querySelector(".search");
search.addEventListener("keyup", (e) => {
  console.log(e);
  if (e.key === "Enter" || e.keyCode === 13) {
    searchChargePlace(search.value);
  }
});
