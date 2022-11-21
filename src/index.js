import './styles/main.scss';
import { currentWeatherObject, fiveDayForecastObject } from './modules/objects';
import { displayCurrentWeather, displayFiveDayForecast } from './modules/display';
import { showWeatherDisplay, resetInput } from './modules/helper';

const searchButton = document.querySelector('.search-button');
const searchBox = document.querySelector('#search-input');
const form = document.querySelector('form');

const fetchWeatherData = async (location) => {
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
};

const init = async (e) => {
  e.preventDefault();
  const weatherData = await fetchWeatherData(searchBox.value);
  displayCurrentWeather(weatherData[0]);
  displayFiveDayForecast(weatherData[1]);
  showWeatherDisplay();
  resetInput(form);
};

searchButton.addEventListener('click', init);
