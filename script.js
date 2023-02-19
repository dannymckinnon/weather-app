async function getWeatherData(location) {
  const result = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=700e25afd76eac4e4a2c6a616b26ba3b`,
    { mode: 'cors' }
  );
  console.log(result);
}

getWeatherData('vancouver');
