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

fetch(
  "https://api.odcloud.kr/api/EvInfoServiceV2/v1/getEvSearchList?page=1&perPage=1000&cond%5Baddr%3A%3ALIKE%5D=%EC%84%9C%EC%9A%B8&serviceKey=Wnus4QpirWGI56CfvzMWDIDHMRL%2FmEF%2FqTl9gwVNbRggLYTGPFIdwBy0L51B%2B27d5QRbLanNmIAxPwNvl7dKPA%3D%3D"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    const evchargeList = data.data;
    const markers = [];
    evchargeList.forEach((item, idx) => {
      const marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(item.lat, item.longi),
      });
      markers.push(marker);
      // 클러스터러에 마커들을 추가합니다
    });
    clusterer.addMarkers(markers);
  });
