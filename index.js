
function callApi() {
    const cityName = document.getElementById('cityname').value;
    const apiKey = "c230c68f4bd43bc9a85532273121b413";
    const baseUrl = "http://api.openweathermap.org/data/2.5/weather";
    const units = "metric";

    const apiUrl = `${baseUrl}?q=${cityName}&appid=${apiKey}&units=${units}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => { 
            const temperature = data.main.temp;
            const humidity = data.main.humidity;
            const weatherDescription = data.weather[0].description;
            const windSpeed = data.wind.speed;
            const date = new Date(data.dt).toLocaleDateString()
            const systeam = data.sys;
            const sunrisetime = new Date(systeam.sunrise * 1000).toLocaleTimeString()
            const sunsettime = new Date(systeam.sunset * 1000).toLocaleTimeString()

            const weatherDataDiv = document.getElementById("weather-data");
            weatherDataDiv.innerHTML = `<p>Temperature in ${cityName}: ${temperature}°C</p>
                                        <p>Wind Speed:${windSpeed}</p>
                                        <p>Humidity:${humidity}</p>
                                        <p>Sunrise:${sunrisetime}</p>
                                        <p>Sunset:${sunsettime}</p>
                                        <p>Date: ${date}</p>
                                        <p>Weather: ${weatherDescription}</p>`;
                document.getElementById('error').textContent = ""


        })
        .catch(error => {
            if (error) {
                document.getElementById('error').textContent = "Invalid Field(enter correct city name)"
      
            }
        });



        
}