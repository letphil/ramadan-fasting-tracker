const searchLocationButton = document.getElementById("searchLocationButton");
const searchLocationInput = document.getElementById("searchLocationInput");
const sunsetTime = document.getElementById("sunsetTime");
const sunriseTime = document.getElementById("sunriseTime");

const OPENWEATHERMAP_API_KEY = "ad3433f779cb70ec57ec3e5d1586b919";
const OPENWEATHER_EP = "http://api.openweathermap.org/geo/1.0/direct";
const SUNRISE_SUNSET_EP = "https://api.sunrisesunset.io/json";

const OPENWEATHER_API_URL = (q) =>
  `${OPENWEATHER_EP}?q=${q}&limit=1&appid=${OPENWEATHERMAP_API_KEY}`;

const SUNRISE_SUNSET_API_URL = (lat, lon) =>
  `${SUNRISE_SUNSET_EP}?lat=${lat}&lng=${lon}`;

const sunrisePhoto =
  "https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
const sunsetPhoto =
  "https://images.pexels.com/photos/8643562/pexels-photo-8643562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
const nightPhoto =
  "https://images.pexels.com/photos/7046987/pexels-photo-7046987.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
