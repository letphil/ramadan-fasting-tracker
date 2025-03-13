// so searchLocationButton PRess event here
searchLocationButton.addEventListener("click", searchLocationToGeocode);

searchLocationInput.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    searchLocationToGeocode();
  }
});

async function searchLocationToGeocode() {
  // putting value of input into variable sarcHInput
  const searchInput = searchLocationInput.value.trim();
  // checking if searchInput is valid input by check that it's not just spaces or empty string
  if (searchInput === "") alert("search input is empty");
  // making request to geocoder
  const res = await (
    await fetch(
      // `${OPENWEATHER_EP}?q=${searchInput}&appid=${OPENWEATHERMAP_API_KEY}&limit=1`
      OPENWEATHER_API_URL(searchInput)
    )
  ).json();

  // checkig if aray lenth is 0 because that means location has mispelling or does not exist
  if (!res.length) {
    alert("no location found...");
  } else {
    const { lat, lon } = res[0];
    console.log(lat, lon);
    const { results } = await (
      await fetch(SUNRISE_SUNSET_API_URL(lat, lon))
    ).json();
    console.log("results =", results);
    sunriseTime.textContent = results.sunrise;
    sunsetTime.textContent = results.sunset;
    // https://api.sunrisesunset.io/json?lat=37.6054756&lng=126.9217810
  }

  // emptying out input field
  searchLocationInput.value = "";
}

// console.log(OPENWEATHER_API_URL("norway"));

console.log(OPENWEATHERMAP_API_KEY);
console.log(OPENWEATHER_EP);
