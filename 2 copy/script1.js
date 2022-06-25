let weather = [
  {
    location: "Paris",
    temp: 23,
    humidity: 70,
  },
  {
    location: "Kyiv",
    temp: 28,
    humidity: 50,
  },
  { location: "Berlin", temp: 20, humidity: 30 },
  {
    location: "Guangzhou",
    temp: 37,
    humidity: 70,
  },
];

let city = prompt("Enter your city");

city = city.trim();

if (city === "Paris") {
  alert(
    `It is currently ${weather[0].temp}°C in ${weather[0].location} with a humidity of ${weather[0].humidity}%.`
  );
} else if (city === "Kyiv") {
  alert(
    `It is currently ${weather[1].temp}°C in ${weather[1].location} with a humidity of ${weather[1].humidity}%.`
  );
} else if (city === "Berlin") {
  alert(
    `It is currently ${weather[2].temp}°C in ${weather[2].location} with a humidity of ${weather[2].humidity}%.`
  );
} else if (city === "Guangzhou") {
  alert(
    `It is currently ${weather[1].temp}°C in ${weather[1].location} with a humidity of ${weather[1].humidity}%.`
  );
} else {
  alert(
    "Sorry we don't know the weathe for this city, try going to https://www.google.com/search?q=weather+sydney"
  );
}
