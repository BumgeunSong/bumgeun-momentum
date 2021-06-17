const API_KEY = "84e674ce17ac8a12f0a4c5d6d4f4bb68";

function onGeoOk(position) {
    console.log(position);
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("you live in " + lat + ", " + lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}
    `;
    console.log(url);
    fetch(url)
        .then((response) => response.json())
        .then(data => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            weather.innerText = `${data.weather[0].main}, `
            city.innerText = data.name;
        }
        );
}

function onGeoError() {
    alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)


