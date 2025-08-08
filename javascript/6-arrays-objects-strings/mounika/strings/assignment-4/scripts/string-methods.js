document.getElementById('sortForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const input = document.getElementById('inputString').value;
  const result = sortCharacters(input);
  document.getElementById('output').textContent = result;
});

function sortCharacters(str) {
  return str
    .split('')
    .sort((a, b) => a.localeCompare(b))
    .join('');
}
