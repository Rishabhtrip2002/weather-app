const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.not-found');

search.addEventListener('click', () => {

    const APIKey = 'fdb933db6311819798cf6b45371edacf';
    const city = document.querySelector('.search-box input').value;

    if (city == '')
        return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`).then(response => response.json()).then(json => {

        container.computedStyleMap.height = '555px';
        weatherBox.classList.remove('active');
        weatherDetails.classList.add('active');
        


        const image = document.querySelector('.weather-box img');
        const temperature = document.querySelector('.weather-box .temperature');
        const description = document.querySelector('.weather-box .description');
        const humidity = document.querySelector('.weather-details .humidity span');
        const wind = document.querySelector('.weather-details .wind span');

        switch (json.weather[0].main) {
            case 'Clear':
                image.src = 'images/clear.png';

            case 'Rain':
                image.src = 'images/rain.png';

            case 'Snow':
                image.src = 'images/snow.png';
                break;

            case 'Cloud':
                image.src = 'images/cloud.png';
                break;

            case 'Mist':
                image.src = 'images/mist.png';
                break;

            case 'Haze':
                image.src = 'images/haze.png';
                break;

            default:
                image.src = 'images/cloud.png';
        }

        temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
        description.innerHTML = `${json.weather[0].description}`;
        humidity.innerHTML = `${json.main.humidity}%`;
        wind.innerHTML = `${parseInt(json.wind.speed)}km/h`;

    });
});