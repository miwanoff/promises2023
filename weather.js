"use srtrict";
const weatherBlock = document.querySelector("#weather");
let city = "Kharkiv";
let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=89ea4480f451ffd24b79617df1ba2bb0`;
async function loadWeather() {
  weatherBlock.innerHTML = `
    <div class="weather_loading"><img class="loader" src="./images/loading.gif" alt=""></div>
    `;
  // let url = "books.json";
  let response = await fetch(url, { method: "GET" });
  let data = await response.json();
  if (response.ok) {
    getWeather(data);
  } else {
    weatherBlock.innerHTML = data.message;
  }
  //console.log(data);
}

function getWeather(data) {
  console.log(data);
  const city = data.name;
  const temp = data.main.temp;
  const icon = data.weather[0].icon;
  const template = `
      <div id="city"><h2>${city}</h2></div>
      <div id="temp">${temp}</div>
      <div id="icon"><img src="https://api.openweathermap.org/img/w/${icon}.png" alt=""></div>
      `;
  weatherBlock.innerHTML = template;
}
loadWeather();
