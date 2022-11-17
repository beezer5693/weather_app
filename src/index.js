import './styles/main.scss';

const searchButton = document.querySelector('.search-button');
const searchBox = document.querySelector('#search-input');
const form = document.querySelector('form');

function changeDateToDay(date) {
  const formattedDate = date.replace(/-/g, '/');
  const day = new Date(formattedDate).toLocaleString('en-us', { weekday: 'long' });
  return day;
}

function adjustTime(str) {
  const arr = str.split('');
  arr.splice(0, 1);
  const newSrtring = arr.join('');
  return newSrtring;
}

function currentWeatherObject(data) {
  const currentWeather = {
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
  return currentWeather;
}

function fiveDayForecastObject(data) {
  const fiveDayForeCast = {
    dayOne: {
      day: changeDateToDay(data.forecast.forecastday[0].date),
      condition: data.forecast.forecastday[0].day.condition.text,
      conditionIcon: data.forecast.forecastday[0].day.condition.icon,
      hi: Math.round(data.forecast.forecastday[0].day.maxtemp_f),
      lo: Math.round(data.forecast.forecastday[0].day.mintemp_f),
    },
    dayTwo: {
      day: changeDateToDay(data.forecast.forecastday[1].date),
      condition: data.forecast.forecastday[1].day.condition.text,
      conditionIcon: data.forecast.forecastday[1].day.condition.icon,
      hi: Math.round(data.forecast.forecastday[1].day.maxtemp_f),
      lo: Math.round(data.forecast.forecastday[1].day.mintemp_f),
    },
    dayThree: {
      day: changeDateToDay(data.forecast.forecastday[2].date),
      condition: data.forecast.forecastday[2].day.condition.text,
      conditionIcon: data.forecast.forecastday[2].day.condition.icon,
      hi: Math.round(data.forecast.forecastday[2].day.maxtemp_f),
      lo: Math.round(data.forecast.forecastday[2].day.mintemp_f),
    },
    dayFour: {
      day: changeDateToDay(data.forecast.forecastday[3].date),
      condition: data.forecast.forecastday[3].day.condition.text,
      conditionIcon: data.forecast.forecastday[3].day.condition.icon,
      hi: Math.round(data.forecast.forecastday[3].day.maxtemp_f),
      lo: Math.round(data.forecast.forecastday[3].day.mintemp_f),
    },
    dayFive: {
      day: changeDateToDay(data.forecast.forecastday[4].date),
      condition: data.forecast.forecastday[4].day.condition.text,
      conditionIcon: data.forecast.forecastday[4].day.condition.icon,
      hi: Math.round(data.forecast.forecastday[4].day.maxtemp_f),
      lo: Math.round(data.forecast.forecastday[4].day.mintemp_f),
    },
  };
  return fiveDayForeCast;
}

async function fetchWeatherData(location) {
  const endPoint = `https://api.weatherapi.com/v1/forecast.json?key=27c7cc7f7be44d9c8c831838221511&q=${location}&days=5&aqi=no&alerts=no`;
  try {
    const response = await fetch(endPoint, { mode: 'cors' });
    const data = await response.json();
    const currentWeatherData = currentWeatherObject(data);
    const fiveDayForeCastData = fiveDayForecastObject(data);
    return [currentWeatherData, fiveDayForeCastData];
  } catch (error) {
    console.log('No search results found');
    return null;
  }
}

function displayCurrentWeather(data) {
  const city = document.querySelector('.city');
  const state = document.querySelector('.state');
  const weatherIcon = document.getElementById('weather-icon');
  const condition = document.querySelector('.condition');
  const temperature = document.querySelector('.temperature');
  const feelsLikeTemperature = document.querySelector('.feels-like-temperature');
  const chanceOfRainStat = document.querySelector('.chance-of-rain-stat');
  const windSpeedStat = document.querySelector('.wind-speed-stat');
  const humidityStat = document.querySelector('.humidity-stat');
  const sunriseStat = document.querySelector('.sunrise-stat');
  const sunsetStat = document.querySelector('.sunset-stat');

  city.innerText = `${data.city},`;
  state.innerText = `${data.state}`;
  condition.innerText = `${data.condition}`;
  weatherIcon.src = `${data.conditionIcon}`;
  temperature.innerHTML = `${data.temperature.f}&#176;`;
  feelsLikeTemperature.innerHTML = `${data.feelsLike.f}&#176;`;
  chanceOfRainStat.innerText = `${data.chainceOfRain}%`;
  windSpeedStat.innerText = `${data.wind} MPH`;
  humidityStat.innerText = `${data.humidity}%`;
  sunriseStat.innerText = `${data.sunrise}`;
  sunsetStat.innerText = `${data.sunset}`;
}

function displayFiveDayForecast(data) {
  const dayOne = document.querySelector('.day-one');
  const dayOneIcon = document.getElementById('day-one-icon');
  const dayOneHi = document.querySelector('.day-one-hi');
  const dayOneLo = document.querySelector('.day-one-lo');

  const dayTwo = document.querySelector('.day-two');
  const dayTwoIcon = document.getElementById('day-two-icon');
  const dayTwoHi = document.querySelector('.day-two-hi');
  const dayTwoLo = document.querySelector('.day-two-lo');

  const dayThree = document.querySelector('.day-three');
  const dayThreeIcon = document.getElementById('day-three-icon');
  const dayThreeHi = document.querySelector('.day-three-hi');
  const dayThreeLo = document.querySelector('.day-three-lo');

  const dayFour = document.querySelector('.day-four');
  const dayFourIcon = document.getElementById('day-four-icon');
  const dayFourHi = document.querySelector('.day-four-hi');
  const dayFourLo = document.querySelector('.day-four-lo');

  const dayFive = document.querySelector('.day-five');
  const dayFiveIcon = document.getElementById('day-five-icon');
  const dayFiveHi = document.querySelector('.day-five-hi');
  const dayFiveLo = document.querySelector('.day-five-lo');

  dayOne.innerText = `${data.dayOne.day}`;
  dayOneIcon.src = `${data.dayOne.conditionIcon}`;
  dayOneHi.innerHTML = `${data.dayOne.hi}&#176;`;
  dayOneLo.innerHTML = `${data.dayOne.lo}&#176;`;

  dayTwo.innerText = `${data.dayTwo.day}`;
  dayTwoIcon.src = `${data.dayTwo.conditionIcon}`;
  dayTwoHi.innerHTML = `${data.dayTwo.hi}&#176;`;
  dayTwoLo.innerHTML = `${data.dayTwo.lo}&#176;`;

  dayThree.innerText = `${data.dayThree.day}`;
  dayThreeIcon.src = `${data.dayThree.conditionIcon}`;
  dayThreeHi.innerHTML = `${data.dayThree.hi}&#176;`;
  dayThreeLo.innerHTML = `${data.dayThree.lo}&#176;`;

  dayFour.innerText = `${data.dayFour.day}`;
  dayFourIcon.src = `${data.dayFour.conditionIcon}`;
  dayFourHi.innerHTML = `${data.dayFour.hi}&#176;`;
  dayFourLo.innerHTML = `${data.dayFour.lo}&#176;`;

  dayFive.innerText = `${data.dayFive.day}`;
  dayFiveIcon.src = `${data.dayFive.conditionIcon}`;
  dayFiveHi.innerHTML = `${data.dayFive.hi}&#176;`;
  dayFiveLo.innerHTML = `${data.dayFive.lo}&#176;`;
}

function showWeatherDisplay() {
  const cardContainer = document.querySelector('.card-container');
  cardContainer.classList.remove('hide');
}

function resetInput() {
  form.reset();
}

async function init(e) {
  e.preventDefault();
  const weatherData = await fetchWeatherData(searchBox.value);
  displayCurrentWeather(weatherData[0]);
  displayFiveDayForecast(weatherData[1]);
  showWeatherDisplay();
  resetInput();
}

searchButton.addEventListener('click', init);
