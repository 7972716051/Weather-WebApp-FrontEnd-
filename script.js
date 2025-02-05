document.getElementById("weather-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const city = document.getElementById("city").value.trim();
    if (!city) {
        displayError("Please enter a city name.");
        return;
    }
    fetchWeatherByCity(city);
});

document.getElementById("unit-toggle").addEventListener("click", toggleUnits);

const apiKey = "e08109fabcce584c0087d60cf8f31a91"; // Replace with your OpenWeatherMap API key
let currentUnit = "metric"; // Default to Celsius
let lastFetchedData = null;

function fetchWeatherByCity(city) {
    const encodedCity = encodeURIComponent(city); // Ensure proper encoding
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodedCity}&appid=${apiKey}&units=${currentUnit}`;
    fetchWeather(apiUrl);
}

function fetchWeather(url) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onload = function () {
        if (xhr.status === 200) {
            lastFetchedData = JSON.parse(xhr.responseText);
            if (lastFetchedData.cod === "404") {
                displayError("City not found. Please try again.");
            } else {
                updateWeatherUI(lastFetchedData);
            }
        } else {
            displayError("City not found. Please try again.");
        }
    };
    xhr.onerror = function () {
        displayError("Error fetching data. Please check your connection.");
    };
    xhr.send();
}

function updateWeatherUI(data) {
    document.getElementById("city-name").textContent = data.name;
    document.getElementById("temperature").textContent = formatTemperature(data.main.temp);
    document.getElementById("humidity").textContent = data.main.humidity;
    document.getElementById("condition").textContent = data.weather[0].description;
    document.getElementById("weather-icon").src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

    document.getElementById("weather-result").classList.remove("hidden");
    document.getElementById("error-message").classList.add("hidden");
}

function formatTemperature(temp) {
    return currentUnit === "metric" ? `${temp}°C` : `${(temp * 9/5 + 32).toFixed(2)}°F`;
}

function toggleUnits() {
    currentUnit = currentUnit === "metric" ? "imperial" : "metric";
    document.getElementById("unit-toggle").textContent = `Switch to ${currentUnit === "metric" ? "°F" : "°C"}`;
    
    if (lastFetchedData) {
        fetchWeatherByCity(lastFetchedData.name);
    }
}

function displayError(message) {
    document.getElementById("error-message").textContent = message;
    document.getElementById("error-message").classList.remove("hidden");
    document.getElementById("weather-result").classList.add("hidden");
}
