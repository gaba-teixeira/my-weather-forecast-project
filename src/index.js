function showWeather(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#city");
  let conditionElement = document.querySelector("#conditions");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector(`#wind`);
  let timeElement = document.querySelector(`#current-time`);
  let date = new Date(response.data.time * 1000);
  let iconElement = document.querySelector("#icon");

  windElement.innerHTML = `${response.data.wind.speed}km/h`;
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
  conditionElement.innerHTML = response.data.condition.description;
  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = Math.round(temperature);
  timeElement.innerHTML = `${changeTime(date)}, `;
  iconElement.innerHTML = `<img src=${response.data.condition.icon_url}
                class="weather-app-icon"
              />`;

  getForecast(response.data.city);
}

function changeTime(date) {
  let days = [
    `Sunday`,
    `Monday`,
    `Tuesday`,
    `Wednesday`,
    `Thursday`,
    `Friday`,
    `Saturday`,
  ];
  let day = days[date.getDay()];
  let hour = date.getHours();
  let minutes = date.getMinutes();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hour < 10) {
    hour = `0${hour}`;
  }
  return `${day}, ${hour}:${minutes}`;
}

function searchCity(city) {
  let apiKey = "ab14t46ca824c44f19c53892o77f5c04";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  axios.get(apiUrl).then(showWeather);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchImput = document.querySelector("#search-form-input");

  searchCity(searchImput.value);
}

function getForecast(city) {
  let apiKey = `ab14t46ca824c44f19c53892o77f5c04`;
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}`;
  axios(apiUrl).then(displayForecast);
}

function displayForecast(response) {
  console.log(response.data);
  let days = ["Tue", "Wed", "Thu", "Fri", "Sat"];
  let forecastHtml = "";

  days.forEach(function (day) {
    forecastHtml =
      forecastHtml +
      `<div class="weather-forecast" id="forecast">
          <div class="weather-forecast-day">${day}</div>
          <div class="weather-forecast-icon">
          <img
            src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/scattered-clouds-night.png"
            width="50" 
          />
          </div>
          <span class="weather-forecast-temperature">
            <span><strong>16°</strong></strong></span>
            <span>10°</span>
            </span>
      
          
        </div>`;
  });

  let forecastElement = document.querySelector("#forecast");
  forecastElement.innerHTML = forecastHtml;
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity(`Salvador`);
displayForecast();
