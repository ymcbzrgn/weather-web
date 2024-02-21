// Event listener for the weather form submission
document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();

    const city = document.getElementById("cityInput").value;
    const apiKey = "2d4671e44b406b790aa7e7db33a6dfd5";
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
            const weatherInfo = document.getElementById("weatherInfo");
            const sunriseTime = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
            const sunsetTime = new Date(data.sys.sunset * 1000).toLocaleTimeString();
            weatherInfo.innerHTML = `
                <div class="weather-header">
                    <h2>Weather in ${data.name}, ${data.sys.country}</h2>
                    <div class="weather-icon-container">
                        <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="${data.weather[0].description}" class="weather-icon" />
                    </div>
                </div>
                <div class="weather-details">
                    <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
                    <p><strong>Feels Like:</strong> ${data.main.feels_like} °C</p>
                    <p><strong>Description:</strong> ${data.weather[0].description}</p>
                    <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
                    <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
                    <p><strong>Visibility:</strong> ${data.visibility / 1000} km</p>
                    <p><strong>Pressure:</strong> ${data.main.pressure} hPa</p>
                    <p><strong>Sunrise:</strong> ${sunriseTime}</p>
                    <p><strong>Sunset:</strong> ${sunsetTime}</p>
                </div>
            `;
        })
        .catch(error => {
            console.error("There was a problem fetching the weather data:", error);
            const weatherInfo = document.getElementById("weatherInfo");
            weatherInfo.innerHTML = "<p>There was a problem fetching the weather data. Please try again later.</p>";
        });
});

// Dark Mode Toggle
document.getElementById('darkModeToggle').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');

    // Save the dark mode state in localStorage for persistence
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
});

// Check localStorage for dark mode setting on page load
if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
}
