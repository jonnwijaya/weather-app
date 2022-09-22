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
            //document.getElementById("uv-index").textContent = data. (Can't get the uv index)
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

            //Day 1
            document.getElementById("temperature-1").textContent = forecastData.list[0].main.temp;
            document.getElementById("wind-1").textContent = forecastData.list[0].wind.speed;
            document.getElementById("humidity-1").textContent = forecastData.list[0].main.humidity;

            //Day 2
            document.getElementById("temperature-2").textContent = forecastData.list[8].main.temp;
            document.getElementById("wind-2").textContent = forecastData.list[8].wind.speed;
            document.getElementById("humidity-2").textContent = forecastData.list[8].main.humidity;

            //Day 3
            document.getElementById("temperature-3").textContent = forecastData.list[16].main.temp;
            document.getElementById("wind-3").textContent = forecastData.list[16].wind.speed;
            document.getElementById("humidity-3").textContent = forecastData.list[16].main.humidity;

            //Day 4
            document.getElementById("temperature-4").textContent = forecastData.list[24].main.temp;
            document.getElementById("wind-4").textContent = forecastData.list[24].wind.speed;
            document.getElementById("humidity-4").textContent = forecastData.list[24].main.humidity;

            //Day 5
            document.getElementById("temperature-5").textContent = forecastData.list[32].main.temp;
            document.getElementById("wind-5").textContent = forecastData.list[32].wind.speed;
            document.getElementById("humidity-5").textContent = forecastData.list[32].main.humidity;
        })
}