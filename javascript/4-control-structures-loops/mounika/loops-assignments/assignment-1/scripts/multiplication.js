document.getElementById("generateBtn").addEventListener("click", generateTable);

function generateTable() {
  const numberInput = document.getElementById("numberInput");
  const outputDiv = document.getElementById("tableOutput");
  const number = parseInt(numberInput.value.trim());

  outputDiv.innerHTML = "";

  if (isNaN(number)) {
    const errorPara = document.createElement("p");
    errorPara.textContent = "Please enter a valid number.";
    outputDiv.appendChild(errorPara);
    return;
  }

  const heading = document.createElement("h3");
  heading.textContent = `Multiplication Table for ${number}`;
  outputDiv.appendChild(heading);

  for (let i = 1; i <= 10; i++) {
    const row = document.createElement("p");
    row.textContent = `${number} × ${i} = ${number * i}`;
    outputDiv.appendChild(row);
  }
}
