document.getElementById('unicodeForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const input = document.getElementById('inputString').value;
  const result = getUnicodeValues(input);
  document.getElementById('output').textContent = `[${result.join(', ')}]`;
});

function getUnicodeValues(str) {
  return [...str].map(char => char.charCodeAt(0));
}
