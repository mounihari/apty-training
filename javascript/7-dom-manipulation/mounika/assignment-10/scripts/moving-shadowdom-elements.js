const tableHTML = `
<table id="myTable">
  <thead>
    <tr><th>Row</th><th>Note</th></tr>
  </thead>
  <tbody>
    ${Array.from({ length: 10 }, (_, i) => `<tr><td>Row ${i + 1}</td><td>Content</td></tr>`).join('')}
  </tbody>
</table>
`;

const host = document.getElementById("shadowHost");
const shadowRoot = host.attachShadow({ mode: "open" });

shadowRoot.innerHTML = `
  <style>
    table {
      border-collapse: collapse;
      width: 100%;
    }
    th, td {
      border: 1px solid #ccc;
      padding: 8px;
      text-align: center;
    }
  </style>
  ${tableHTML}
`;

const btnUp = document.getElementById("btnUp");
const btnDown = document.getElementById("btnDown");
const btnTop = document.getElementById("btnTop");
const btnBottom = document.getElementById("btnBottom");
const rowInput = document.getElementById("rowIndex");

function getRows() {
  return Array.from(shadowRoot.querySelectorAll("#myTable tbody tr"));
}

function moveRow(rowIndex, action) {
  const tbody = shadowRoot.querySelector("#myTable tbody");
  const rows = getRows();

  if (rowIndex < 1 || rowIndex > rows.length) return;

  const row = rows[rowIndex - 1];

  switch(action) {
    case "up":
      const prev = row.previousElementSibling;
      if (prev) tbody.insertBefore(row, prev);
      break;
    case "down":
      const next = row.nextElementSibling;
      if (next) tbody.insertBefore(next, row);
      break;
    case "top":
      tbody.insertBefore(row, tbody.firstElementChild);
      break;
    case "bottom":
      tbody.appendChild(row);
      break;
  }
}

btnUp.addEventListener("click", () => {
  moveRow(parseInt(rowInput.value, 10), "up");
});

btnDown.addEventListener("click", () => {
  moveRow(parseInt(rowInput.value, 10), "down");
});

btnTop.addEventListener("click", () => {
  moveRow(parseInt(rowInput.value, 10), "top");
});

btnBottom.addEventListener("click", () => {
  moveRow(parseInt(rowInput.value, 10), "bottom");
});
