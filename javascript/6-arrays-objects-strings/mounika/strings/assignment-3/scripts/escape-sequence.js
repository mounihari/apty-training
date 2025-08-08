document.getElementById('escapeForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const input = document.getElementById('inputString').value;
  const result = replaceEscapeSequences(input);
  document.getElementById('output').textContent = result;
});

function replaceEscapeSequences(str) {
  return str
    .replace(/\\n/g, '\n')
    .replace(/\\t/g, '\t');
}
