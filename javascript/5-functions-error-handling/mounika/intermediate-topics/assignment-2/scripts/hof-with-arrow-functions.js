function filterNumbers(numbers, callback) {
  return numbers.filter(callback);
}

document.getElementById('filterForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const raw = document.getElementById('numbers').value;
  const limit = parseFloat(document.getElementById('limit').value);

  const numArray = raw
    .split(',')
    .map(n => parseFloat(n.trim()))
    .filter(n => !isNaN(n));

  const filtered = filterNumbers(numArray, n => n <= limit);

  document.getElementById('output').innerText = `Filtered: ${filtered.join(', ')}`;
});
