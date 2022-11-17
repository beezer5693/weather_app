function showWeatherDisplay() {
  const cardContainer = document.querySelector('.card-container');
  cardContainer.classList.remove('hide');
}

function resetInput(form) {
  form.reset();
}

export { showWeatherDisplay, resetInput };
