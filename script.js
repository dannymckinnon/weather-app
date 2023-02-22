import getWeatherData from './weather-data.js';

const input = document.querySelector('.city-input input');
const celsius = document.querySelector('.celsius');
const fahrenheit = document.querySelector('.fahrenheit');

input.addEventListener('keydown', (e) => {
  if (e.keyCode === 13) {
    const weatherData = getWeatherData(input.value);
    weatherData
      .then((data) => displayData(data))
      .catch((error) => console.log(error));
    input.value = '';
  }
});

function displayData(data) {
  const temp = document.querySelector('.temperature');
  const feelsLike = document.querySelector('.feels-like');
  const humidity = document.querySelector('.humidity');
  const wind = document.querySelector('.wind');
  const city = document.querySelector('.city-name');
  const icon = document.querySelector('.icon');
  const description = document.querySelector('.description');
  const dayTime = document.querySelector('.daytime');

  temp.textContent = Math.round(data.main.temp);
  feelsLike.textContent = `Feels like: ${Math.round(data.main.feels_like)}°C`;
  humidity.textContent = `Humidity: ${data.main.humidity}%`;
  // will always display windspeed in imperial, so have to do another fetch
  getWeatherData(data.name, 'imperial').then((data) => {
    wind.textContent = `Wind: ${Math.round(data.wind.speed)}mph`;
  });
  city.textContent = data.name;
  icon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  //set first char of description to uppercase
  const weatherDescription = data.weather[0].description;
  description.textContent =
    weatherDescription.charAt(0).toUpperCase() + weatherDescription.slice(1);
  dayTime.textContent = getDayTime(data);
}

function getDayTime(data) {
  const now = new Date();
  const utcTime = Math.floor(now.getTime() / 1000);
  const dateObj = new Date((utcTime + data.timezone) * 1000);
  const dayOfWeek = dateObj.toLocaleString('en-US', {
    timeZone: 'UTC',
    weekday: 'long',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });
  return dayOfWeek;
}

getWeatherData('vancouver')
  .then((data) => {
    console.log(data);
    displayData(data);
  })
  .catch((error) => console.log(error));
