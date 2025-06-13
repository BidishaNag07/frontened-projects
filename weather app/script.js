const apiKey = "51527d0aae2aa4d95016cecb21edaf01";

function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  if (city === "") {
    alert("Please enter a city name.");
    return;
  }

  const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(apiURL)
    .then(response => response.json())
    .then(data => {
      if (data.cod === "404") {
        alert("City not found.");
        return;
      }

      document.getElementById("weatherInfo").style.display = "block";
      document.getElementById("cityName").innerText = data.name;
      document.getElementById("temp").innerHTML = `${data.main.temp}°C`;
      document.getElementById("desc").innerText = data.weather[0].description;
      document.getElementById("humidity").innerText = `Humidity: ${data.main.humidity}%`;
      document.getElementById("wind").innerText = `Wind: ${data.wind.speed} km/h`;

      let condition = data.weather[0].main.toLowerCase();
      let image = "clear.png";

      if (condition.includes("cloud")) image = "cloud.png";
      else if (condition.includes("rain")) image = "rain.png";
      else if (condition.includes("snow")) image = "snow.png";
      else if (condition.includes("mist")) image = "mist.png";

      document.getElementById("iconContainer").src = `images/${image}`;

      // Dynamic gradient overlay
      if (condition.includes("cloud")) {
        document.body.style.background = "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('images/background.jpg') no-repeat center center fixed, linear-gradient(135deg, #bdc3c7, #2c3e50)";
      } else if (condition.includes("rain")) {
        document.body.style.background = "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('images/background.jpg') no-repeat center center fixed, linear-gradient(135deg, #667db6, #0082c8)";
      } else if (condition.includes("clear")) {
        document.body.style.background = "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('images/background.jpg') no-repeat center center fixed, linear-gradient(135deg, #f7971e, #ffd200)";
      } else if (condition.includes("snow")) {
        document.body.style.background = "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('images/background.jpg') no-repeat center center fixed, linear-gradient(135deg, #83a4d4, #b6fbff)";
      } else {
        document.body.style.background = "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('images/background.jpg') no-repeat center center fixed, linear-gradient(135deg, #89f7fe, #66a6ff)";
      }

      document.body.style.backgroundSize = "cover";
      document.body.style.transition = "background 0.6s ease";
    })
    .catch(error => {
      alert("Unable to fetch data.");
      console.error(error);
    });
}
