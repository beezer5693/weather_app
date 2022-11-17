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

export { displayCurrentWeather, displayFiveDayForecast };
