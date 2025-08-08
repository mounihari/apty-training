document.getElementById('padForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const input = document.getElementById('inputString').value;
  const result = padWithZeros(input);
  document.getElementById('output').textContent = result;
});

function padWithZeros(str) {
  return str.padStart(10, '0');
}
