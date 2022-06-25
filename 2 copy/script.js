//date
let currentTime = new Date();
let dayNow = document.querySelector("h4");
let dateNow = document.querySelector(".date-today");
let timeNow = document.querySelector(".time-today");
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednsday",
  "Thursday",
  "Friday",
  "Saturday",
];
let currentDay = days[currentTime.getDay()];
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let currentMonth = months[currentTime.getMonth()];
let currentDate = currentTime.getDate();
let currentHour = currentTime.getHours();
let currentMinute = currentTime.getMinutes();
if (currentMinute < 10) {
  currentMinute = "0" + currentMinute;
}
dayNow.innerHTML = `${currentDay}`;
dateNow.innerHTML = `${currentMonth}, ${currentDate}th`;
timeNow.innerHTML = `${currentHour}:${currentMinute}`;

//cities
function searchingForCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector(".form-control");

  let city = document.querySelector(".main-city");
  if (cityInput.value) {
    city.innerHTML = `${cityInput.value}`;
  } else {
    city.innerHTML = null;
    alert("Please enter your city");
  }
  city.innerHTML = cityInput.value;
  let apiKey = "b233685c45437c641f99bf2f5f2020ca";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showTemperature);
  console.log(apiUrl);
}
let searchCity = document.querySelector(".search-form");

searchCity.addEventListener("submit", searchingForCity);
//

//
function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let degree = document.querySelector(".current-degree");
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  console.log(degree);
  degree.innerHTML = ` ${temperature}°C`;
}
