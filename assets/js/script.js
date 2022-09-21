var locationInput = document.getElementById('locationInput');
var submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener("click", function (event) {
    event.preventDefault();
    var location = locationInput.value;
    location = location.replace(/\s+/g, '');
    var weatherApi = "https://api.openweathermap.org/data/2.5/weather?q=" + location + "&APPID=299a753009beb3228931e68024a5a0bc";
    console.log(weatherApi);
    getWeather(weatherApi);

    localStorage.setItem("Location", location);
})

function getWeather(weatherApi) {
    fetch(weatherApi)
        .then(function (response) {
            console.log(response);
        })
}
