"use srtrict";
const weatherBlock = document.querySelector("#weather");
let city = "London";
let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=89ea4480f451ffd24b79617df1ba2bb0`;
async function loadWeather() {
  weatherBlock.innerHTML = `
    <div class="weather_loading"><img class="loader" src="./images/loading.gif" alt=""></div>
    `;
  // let url = "books.json";
  let response = await fetch(url, { method: "GET" });
  let data = await response.json();
  console.log(data);
}
loadWeather();
