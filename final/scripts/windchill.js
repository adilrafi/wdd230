let currentTemp = document.querySelector('#current-temp');
let weatherIcon = document.querySelector('#weather-icon');
let captionDesc = document.querySelector('#description');
let windChill = document.querySelector('#windChill');
let windSpeed = document.querySelector('#windSpeed');

//Geo coords [42.8686, -91.236]
let latitude = 42.8686;
let longitude = -91.236;
let baseURL = 'https://api.openweathermap.org/data/2.5/weather?';
let apiKey = '65d7dd34ded5c3f6bbd922d70f9ae239';
let units = 'imperial'
//

let apiURL = `${baseURL}lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`


async function apiFetch() {
    try {
        const response = await fetch(apiURL);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
            wind(data);
        } else {
            console.log(`Response not OK ${await response.text()}`);
        }
    } catch (error) {
        console.log(`Error: ${error}`)
    }
}

apiFetch()

//captialize
function captialize(string) {
    return `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
}

//wind
function wind(data) {
    const tempF = data.main.temp;
    const speed = data.wind.speed;
    return windchill = (35.74 + (0.6215*tempF) - 35.75*(Math.pow(speed, 0.16)) + (0.4275*tempF)*(Math.pow(speed, 0.16))).toFixed(2);
}
// display the results 
function displayResults(data) {
    currentTemp.textContent = data.main.temp;
    windSpeed.textContent = data.wind.speed;
    let desc = captialize(data.weather[0].description)
    captionDesc.textContent = desc;
    windChill.textContent = Math.round(wind(data) * 100) / 100;
    let icon = data.weather[0].icon;
    weatherIcon.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    weatherIcon.alt = `Guttenberg, Iowa Weather: ${desc}${icon}`;

    
    

// select HTML elements in the document




}