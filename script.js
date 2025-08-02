async function getWeather() {
  const apiKey = '74de4355ea968c79dece3e50dc3c10ac'; // Replace with your OpenWeatherMap API key
  const city = document.getElementById("city-input").value;

  if (!city) {
    alert("Please enter a city name.");
    return;
  }

  

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === "404") {
      document.getElementById("weather-result").innerHTML = "City not found.";
    } else {
      const weather = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Weather: ${data.weather[0].main}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
      `;
      document.getElementById("weather-result").innerHTML = weather;
    }
  } catch (error) {
    document.getElementById("weather-result").innerHTML = "Error fetching weather data.";
  }
}
