const API_KEY = "dcc2bdf255e62a5b0a13924c7e609710";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`;
  console.log(url);
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span");
      const weaterIconImg = document.querySelector("#weather img");
      const weatherIcon = data.weather[0].icon;
      const weatherIconAdrs = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
      weather.innerText = `${data.main.temp}°C / ${data.name}`;
      weaterIconImg.setAttribute("src", weatherIconAdrs);
    });
}

function onGeoError() {
  alert("위치를 찾을 수 없어 날씨 정보를 표기할 수 없습니다.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
