function countFrequency() {
  const str = document.getElementById("textInput").value;
  const resultDiv = document.getElementById("result");

  if (!str) {
    resultDiv.textContent = "Please enter a string.";
    return;
  }

  const freq = {};
  for (const index in str) {
    const char = str[index];
    freq[char] = (freq[char] || 0) + 1;
  }

  let output = "<h3>Character Frequencies:</h3><ul>";
  for (const char in freq) {
    output += `<li>'${char}': ${freq[char]}</li>`;
  }
  output += "</ul>";

  resultDiv.innerHTML = output;
}
