function countFrequency() {
  const str = document.getElementById("textInput").value;
  const resultDiv = document.getElementById("result");

  if (!str) {
    resultDiv.textContent = "Please enter a string.";
    return;
  }

  const freq = {};
  for (const char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }

  // Clear old content safely
  resultDiv.innerHTML = "";

  const heading = document.createElement("h3");
  heading.textContent = "Character Frequencies:";
  resultDiv.appendChild(heading);

  const ul = document.createElement("ul");

  for (const char in freq) {
    const li = document.createElement("li");
    li.textContent = `'${char}': ${freq[char]}`;
    ul.appendChild(li);
  }

  resultDiv.appendChild(ul);
}
