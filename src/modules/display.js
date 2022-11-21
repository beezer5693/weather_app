function displayCurrentWeather({
  city,
  state,
  condition,
  conditionIcon,
  temperature,
  feelsLike,
  chainceOfRain,
  wind,
  humidity,
  sunrise,
  sunset,
}) {
  const locationCity = document.querySelector('.city');
  const locationState = document.querySelector('.state');
  const weatherIcon = document.getElementById('weather-icon');
  const locationConditions = document.querySelector('.condition');
  const locationTemperature = document.querySelector('.temperature');
  const feelsLikeTemperature = document.querySelector('.feels-like-temperature');
  const chanceOfRainStat = document.querySelector('.chance-of-rain-stat');
  const windSpeedStat = document.querySelector('.wind-speed-stat');
  const humidityStat = document.querySelector('.humidity-stat');
  const sunriseStat = document.querySelector('.sunrise-stat');
  const sunsetStat = document.querySelector('.sunset-stat');

  locationCity.innerText = `${city},`;
  locationState.innerText = `${state}`;
  locationConditions.innerText = `${condition}`;
  weatherIcon.src = `${conditionIcon}`;
  locationTemperature.innerHTML = `${temperature.f}&#176;`;
  feelsLikeTemperature.innerHTML = `${feelsLike.f}&#176;`;
  chanceOfRainStat.innerText = `${chainceOfRain}%`;
  windSpeedStat.innerText = `${wind} mph`;
  humidityStat.innerText = `${humidity}%`;
  sunriseStat.innerText = `${sunrise}`;
  sunsetStat.innerText = `${sunset}`;
}

function displayFiveDayForecast({ dayOne, dayTwo, dayThree, dayFour, dayFive }) {
  const weatherDayOne = document.querySelector('.day-one');
  const weatherDayOneIcon = document.getElementById('day-one-icon');
  const weatherDayOneHi = document.querySelector('.day-one-hi');
  const weatherDayOneLo = document.querySelector('.day-one-lo');

  const weatherDayTwo = document.querySelector('.day-two');
  const weatherDayTwoIcon = document.getElementById('day-two-icon');
  const weatherDayTwoHi = document.querySelector('.day-two-hi');
  const weatherDayTwoLo = document.querySelector('.day-two-lo');

  const weatherDayThree = document.querySelector('.day-three');
  const weatherDayThreeIcon = document.getElementById('day-three-icon');
  const weatherDayThreeHi = document.querySelector('.day-three-hi');
  const weatherDayThreeLo = document.querySelector('.day-three-lo');

  const weatherDayFour = document.querySelector('.day-four');
  const weatherDayFourIcon = document.getElementById('day-four-icon');
  const weatherDayFourHi = document.querySelector('.day-four-hi');
  const weatherDayFourLo = document.querySelector('.day-four-lo');

  const weatherDayFive = document.querySelector('.day-five');
  const weatherDayFiveIcon = document.getElementById('day-five-icon');
  const weatherDayFiveHi = document.querySelector('.day-five-hi');
  const weatherDayFiveLo = document.querySelector('.day-five-lo');

  weatherDayOne.innerText = `${dayOne.day}`;
  weatherDayOneIcon.src = `${dayOne.conditionIcon}`;
  weatherDayOneHi.innerHTML = `${dayOne.hi}&#176;`;
  weatherDayOneLo.innerHTML = `${dayOne.lo}&#176;`;

  weatherDayTwo.innerText = `${dayTwo.day}`;
  weatherDayTwoIcon.src = `${dayTwo.conditionIcon}`;
  weatherDayTwoHi.innerHTML = `${dayTwo.hi}&#176;`;
  weatherDayTwoLo.innerHTML = `${dayTwo.lo}&#176;`;

  weatherDayThree.innerText = `${dayThree.day}`;
  weatherDayThreeIcon.src = `${dayThree.conditionIcon}`;
  weatherDayThreeHi.innerHTML = `${dayThree.hi}&#176;`;
  weatherDayThreeLo.innerHTML = `${dayThree.lo}&#176;`;

  weatherDayFour.innerText = `${dayFour.day}`;
  weatherDayFourIcon.src = `${dayFour.conditionIcon}`;
  weatherDayFourHi.innerHTML = `${dayFour.hi}&#176;`;
  weatherDayFourLo.innerHTML = `${dayFour.lo}&#176;`;

  weatherDayFive.innerText = `${dayFive.day}`;
  weatherDayFiveIcon.src = `${dayFive.conditionIcon}`;
  weatherDayFiveHi.innerHTML = `${dayFive.hi}&#176;`;
  weatherDayFiveLo.innerHTML = `${dayFive.lo}&#176;`;
}

export { displayCurrentWeather, displayFiveDayForecast };
