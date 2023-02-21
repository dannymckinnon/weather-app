import getWeatherData from './weatherdata.js';

// do another function that gets windspeed in mph by calling with units as
// imperial regardless of the units your fetching with

getWeatherData('vancouver')
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));
