import getWeatherData from './weather-data.js';

const input = document.querySelector('.city-input input');

input.addEventListener('keydown', (e) => {
  if (e.keyCode === 13) {
    console.log(input.value);
    input.value = '';
  }
});

// do another function that gets windspeed in mph by calling with units as
// imperial regardless of the units your fetching with

getWeatherData('vancouver')
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));
