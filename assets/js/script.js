var locationInput = document.getElementById('locationInput');
var submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener("click", function (event) {
    event.preventDefault();
    var location = locationInput.value;
    location = location.replace(/\s+/g, '');
    var weatherApi = "https://api.openweathermap.org/data/2.5/weather?q=" + location + "&APPID=299a753009beb3228931e68024a5a0bc";
    console.log(weatherApi);
    getWeather(weatherApi);

    var forecastApi = "https://api.openweathermap.org/data/2.5/forecast?q=" + location + "&appid=299a753009beb3228931e68024a5a0bc";
    console.log(forecastApi);
    getForecast(forecastApi);

    localStorage.setItem("Location", location);
})

function getWeather(weatherApi) {
    fetch(weatherApi)
        .then(function (response) {
            console.log(response);
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            document.getElementById("city-name").textContent = data.name;
            document.getElementById("temperature").textContent = data.main.temp;
            document.getElementById("wind").textContent = data.wind.speed;
            document.getElementById("humidity").textContent = data.main.humidity;
            //document.getElementById("uv-index").textContent = data.
        })
}

function getForecast(forecastApi) {
    fetch(forecastApi)
        .then(function (forecastResponse) {
            console.log(forecastResponse);
            return forecastResponse.json();
        })
        .then(function (forecastData) {
            console.log(forecastData);
        })
}
