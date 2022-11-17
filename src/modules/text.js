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

export { changeDateToDay, adjustTime };
