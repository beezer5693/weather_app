import { changeDateToDay, adjustTime } from './text';

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

export { currentWeatherObject, fiveDayForecastObject };
