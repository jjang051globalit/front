const coronaList = document.querySelector(".coronaList ul");
const loadCoronaData = async (date) => {
  const corona = await fetch(
    `http://apis.data.go.kr/1352000/ODMS_COVID_04/callCovid04Api?serviceKey=Wnus4QpirWGI56CfvzMWDIDHMRL%2FmEF%2FqTl9gwVNbRggLYTGPFIdwBy0L51B%2B27d5QRbLanNmIAxPwNvl7dKPA%3D%3D&pageNo=1&numOfRows=500&apiType=JSON&std_day=${date}`
  );
  const response = await corona.json();
  //.then((response) => response.json())
  const items = response.items;
  items.forEach((item, idx) => {
    console.log(item.gubun + "===" + item.incDec);
    const li = document.createElement("li");
    const region = document.createElement("span");
    region.classList.add("region");
    const incDec = document.createElement("span");
    incDec.classList.add("incDec");
    region.textContent = item.gubun;
    incDec.textContent = item.incDec;
    li.append(region);
    li.append(incDec);
    coronaList.append(li);
  });
};
const datePicker = new Lightpick({
  field: document.querySelector(".date-picker"),
  format: "YYYY-MM-DD",
  onSelect: function (date) {
    //console.log(date.format("YYYY-MM-DD"));
    loadCoronaData(date.format("YYYY-MM-DD"));
  },
});
datePicker.setDate(new Date());
//loadCoronaData("2023-05-30");
