import './styles/main.scss';

const searchButton = document.querySelector('.search-button');
const searchBox = document.querySelector('#search-input');
const form = document.querySelector('form');

function adjustTime(str) {
  const arr = str.split('');
  arr.splice(0, 1);
  const newSrtring = arr.join('');
  return newSrtring;
}

function compileWeatherDataIntoObject(data) {
  const weatherDataObject = {
    city: data.location.name,
    state: data.location.region,
    condition: data.current.condition.text,
    conditionIcon: data.current.condition.icon,
    chainceOfRain: data.forecast.forecastday[0].day.daily_chance_of_rain,
    sunrise: adjustTime(data.forecast.forecastday[0].astro.sunrise),
    sunset: adjustTime(data.forecast.forecastday[0].astro.sunset),
    temperature: {
      f: Math.round(data.current.temp_f),
      c: Math.round(data.current.temp_c),
    },
    feelsLike: {
      f: Math.round(data.current.feelslike_f),
      c: Math.round(data.current.feelslike_c),
    },
    wind: data.current.wind_mph,
    humidity: data.current.humidity,
  };
  return weatherDataObject;
}

async function fetchWeatherData(location) {
  const endPoint = `https://api.weatherapi.com/v1/forecast.json?key=27c7cc7f7be44d9c8c831838221511&q=${location}&days=1&aqi=no&alerts=no`;
  try {
    const response = await fetch(endPoint, { mode: 'cors' });
    const data = compileWeatherDataIntoObject(await response.json());
    return data;
  } catch (error) {
    console.log('No search results found');
    return null;
  }
}

function displayWeatherData(weatherData) {
  if (!weatherData);
  const city = document.querySelector('.city');
  const state = document.querySelector('.state');
  const weatherIcon = document.getElementById('weather-icon');
  const condition = document.querySelector('.condition');
  const temperature = document.querySelector('.temperature');
  const feelsLikeTemperature = document.querySelector(
    '.feels-like-temperature'
  );
  const chanceOfRainStat = document.querySelector('.chance-of-rain-stat');
  const windSpeedStat = document.querySelector('.wind-speed-stat');
  const humidityStat = document.querySelector('.humidity-stat');
  const sunriseStat = document.querySelector('.sunrise-stat');
  const sunsetStat = document.querySelector('.sunset-stat');

  city.innerText = `${weatherData.city},`;
  state.innerText = `${weatherData.state}`;
  condition.innerText = `${weatherData.condition}`;
  weatherIcon.src = `${weatherData.conditionIcon}`;
  temperature.innerHTML = `${weatherData.temperature.f}&#176;`;
  feelsLikeTemperature.innerHTML = `${weatherData.feelsLike.f}&#176;`;
  chanceOfRainStat.innerText = `${weatherData.chainceOfRain}%`;
  windSpeedStat.innerText = `${weatherData.wind}`;
  humidityStat.innerText = `${weatherData.humidity}%`;
  sunriseStat.innerText = `${weatherData.sunrise}`;
  sunsetStat.innerText = `${weatherData.sunset}`;
}

function showWeatherDisplay() {
  const cardContainer = document.querySelector('.card-container');
  cardContainer.classList.remove('hide');
}

function resetInput() {
  form.reset();
}

searchButton.addEventListener('click', async (e) => {
  e.preventDefault();
  const weatherData = await fetchWeatherData(searchBox.value);
  displayWeatherData(weatherData);
  showWeatherDisplay();
  resetInput();
});
