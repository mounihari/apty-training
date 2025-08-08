document.getElementById('stringForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const input = document.getElementById('inputString').value.trim();
  const result = wordLengths(input);
  document.getElementById('output').textContent = `Result: ${result}`;
});

function wordLengths(str) {
  return str
    .split(/\s+/)
    .map(word => word.length)
    .join(' ');
}
