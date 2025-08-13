const table = document.getElementById("myTable");
table.style.borderCollapse = "collapse";
table.style.margin = "20px";

for (let r = 0; r < 10; r++) {
  const row = document.createElement("tr");
  for (let c = 0; c < 10; c++) {
    const cell = document.createElement("td");
    cell.textContent = `${r+1},${c+1}`;
    cell.style.border = "1px solid black";
    cell.style.width = "50px";
    cell.style.height = "50px";
    cell.style.textAlign = "center";
    row.appendChild(cell);
  }
  table.appendChild(row);
}

table.addEventListener("mouseover", function(e) {
  if (e.target.tagName === "TD") {
    const cell = e.target;
    const rowIndex = cell.parentNode.rowIndex;
    const colIndex = cell.cellIndex;

    [...table.rows[rowIndex].cells].forEach(td => td.style.backgroundColor = "yellow");

    [...table.rows].forEach(row => row.cells[colIndex].style.backgroundColor = "yellow");
  }
});

table.addEventListener("mouseout", function() {
  [...table.getElementsByTagName("td")].forEach(td => td.style.backgroundColor = "");
});
