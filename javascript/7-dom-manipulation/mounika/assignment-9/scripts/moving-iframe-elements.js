const iframe = document.getElementById("myFrame");
const tbodyRows = 10;

const iframeHTML = `
  <style>
    table { border-collapse: collapse; width: 100%; }
    th, td { border: 1px solid #ccc; padding: 8px; text-align: center; }
  </style>
  <table id="myTable">
    <thead><tr><th>Row</th><th>Note</th></tr></thead>
    <tbody>
      ${Array.from({ length: tbodyRows }, (_, i) => `
        <tr><td>Row ${i + 1}</td><td>Content</td></tr>
      `).join("")}
    </tbody>
  </table>
`;

const doc = iframe.contentDocument || iframe.contentWindow.document;
doc.open();
doc.write(`<html><head></head><body>${iframeHTML}</body></html>`);
doc.close();

const btnUp = document.getElementById("btnUp");
const btnDown = document.getElementById("btnDown");
const btnTop = document.getElementById("btnTop");
const btnBottom = document.getElementById("btnBottom");
const rowInput = document.getElementById("rowIndex");

function getRows() {
  const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
  return Array.from(iframeDoc.querySelectorAll("#myTable tbody tr"));
}

function moveRow(rowIndex, action) {
  const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
  const tbody = iframeDoc.querySelector("#myTable tbody");
  const rows = getRows();

  if (rowIndex < 1 || rowIndex > rows.length) return;

  const row = rows[rowIndex - 1];

  switch (action) {
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
  const index = parseInt(rowInput.value, 10);
  moveRow(index, "up");
});

btnDown.addEventListener("click", () => {
  const index = parseInt(rowInput.value, 10);
  moveRow(index, "down");
});

btnTop.addEventListener("click", () => {
  const index = parseInt(rowInput.value, 10);
  moveRow(index, "top");
});

btnBottom.addEventListener("click", () => {
  const index = parseInt(rowInput.value, 10);
  moveRow(index, "bottom");
});
