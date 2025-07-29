function generatePyramid() {
  const rows = parseInt(document.getElementById("rowsInput").value);
  const output = document.getElementById("patternOutput");

  if (isNaN(rows) || rows < 1) {
    output.textContent = "Please enter a valid positive number.";
    return;
  }

  let pattern = "";
  for (let i = 1; i <= rows; i++) {
    const spaces = " ".repeat(rows - i);
    const stars = "*".repeat(2 * i - 1);
    pattern += spaces + stars + "\n";
  }

  output.textContent = pattern;
}
