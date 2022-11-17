function changeDateToDay(date) {
  const formattedDate = date.replace(/-/g, '/');
  const day = new Date(formattedDate).toLocaleString('en-us', { weekday: 'long' });
  return day;
}

function formatTime(str) {
  const time = str.split('');
  time.splice(0, 1);
  const formattedTime = time.join('');
  return formattedTime;
}

export { changeDateToDay, formatTime };
