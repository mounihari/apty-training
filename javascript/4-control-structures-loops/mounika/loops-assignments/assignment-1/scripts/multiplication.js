function generateTable() {
  const number = parseInt(document.getElementById("numberInput").value);
  const outputDiv = document.getElementById("tableOutput");

  if (isNaN(number)) {
    outputDiv.innerHTML = "<p>Please enter a valid number.</p>";
    return;
  }

  let tableHTML = `<h3>Multiplication Table for ${number}</h3>`;
  for (let i = 1; i <= 10; i++) {
    tableHTML += `<p>${number} × ${i} = ${number * i}</p>`;
  }

  outputDiv.innerHTML = tableHTML;
}
