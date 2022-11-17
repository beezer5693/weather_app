// Converts date to day of the week, ex: '11-16-2022' to 'Wednesday'
function convertDateToDay(date) {
  const formattedDate = date.replace(/-/g, '/');
  const day = new Date(formattedDate).toLocaleString('en-us', { weekday: 'long' });
  return day;
}

// Removes 0 from the hour, ex: '05:00' to '5:00'
function formatTime(str) {
  const time = str.split('');
  time.splice(0, 1);
  const formattedTime = time.join('');
  return formattedTime;
}

export { convertDateToDay, formatTime };
