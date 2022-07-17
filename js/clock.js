const clock = document.querySelector("#clock");
const clockDate = document.querySelector("#clock h4");

function onClock() {
  const year = new Date().getFullYear();
  const month = String(new Date().getMonth()).padStart(2, "0");
  const day = String(new Date().getDate()).padStart(2, "0");

  const hour = String(new Date().getHours()).padStart(2, "0");
  const min = String(new Date().getMinutes()).padStart(2, "0");

  clockDate.innerText = `${year}년 ${month}월 ${day}일,  ${hour}시 ${min}분`;
}

onClock();
setInterval(onClock, 1000);
