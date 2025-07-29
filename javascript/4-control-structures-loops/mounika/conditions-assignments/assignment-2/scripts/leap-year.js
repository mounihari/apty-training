function checkLeapYear() {
  const year = Number(document.getElementById('yearInput').value);
  let result;

  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    result = 'Leap Year';
  } else {
    result = 'Not a Leap Year';
  }

  document.getElementById('result').textContent = result;
}
