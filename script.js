async function getWeatherData(location, units = 'metric') {
  const data = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=${units}&APPID=700e25afd76eac4e4a2c6a616b26ba3b`,
    { mode: 'cors' }
  );
  const jsonData = await data.json();
  return jsonData;
}

getWeatherData('vancouver').then((data) => console.log(data));
