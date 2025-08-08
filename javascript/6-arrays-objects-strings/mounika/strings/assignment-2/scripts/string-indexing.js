document.getElementById('stringForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const input = document.getElementById('inputString').value;
  const result = firstAndLastChars(input);
  document.getElementById('output').textContent = result === null ? 'Result: null' : `Result: ${result}`;
});

function firstAndLastChars(str) {
  if (!str) return null;
  return `${str[0]} ${str[str.length - 1]}`;
}
