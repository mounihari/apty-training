function processInput(input, callback = (str = "default text") => str.toUpperCase()) {
  return callback(input);
}

document.getElementById('stringForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const input = document.getElementById('userInput').value.trim();

  const result = input ? processInput(input) : processInput();

  document.getElementById('output').innerText = `Processed String: ${result}`;
});
