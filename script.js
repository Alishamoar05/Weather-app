const cityInput = document.getElementById("city-input");
const button = document.getElementById("get-weather");
const result = document.getElementById("result");

async function getWeather(city) {
  const apiKey = "79fa4da2e7fcf4706b80d5bfd8d92aa9";

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("City not found");
    }

    const data = await response.json();

    result.innerText = `
City: ${data.name}
Temperature: ${data.main.temp} °C
Weather: ${data.weather[0].description}
Humidity: ${data.main.humidity}%
    `;
  } catch (error) {
    result.innerText = "City not found ";
    console.error(error);
  }
}

button.addEventListener("click", () => {
  const city = cityInput.value.trim();

  if (!city) {
    alert("Please enter a city name");
    return;
  }

  getWeather(city);
});