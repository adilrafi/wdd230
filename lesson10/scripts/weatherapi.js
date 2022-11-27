const temperature = document.querySelector('#temperature');
const description = document.querySelector('#currently');
const weatherIcon = document.querySelector('#weatherIcon');
const caption = document.querySelector('#figcaption');

const apiURL = 'https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=imperial&APPID=883a34efdea0db6447c3fa6c1a893fa8';

async function apiFetch(){
try{
    const response = await fetch(apiURL);
    if(response.ok){
        const data = await response.json();
        console.log(data);
        displayResults(data);
    }
    else{

    
        console.log('Response not OK ${await resonse.text()}');
    }
} catch(error){
    console.log('Error: ${error.message}');
}

}
apiFetch()

function capitalize(string) {
    return `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
}

function displayResults(data) {
    temperature.textContent = data.main.temp.toFixed(0);
    let desc = capitalize(data.weather[0].description);
    description.textContent = desc;
    let icon = data.weather[0].icon;
    caption.textContent = `Guttenberg, Iowa Weather: ${desc} icon`;
    weatherIcon.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    weatherIcon.alt = `Guttenberg, Iowa Weather:  ${desc} icon`;
}