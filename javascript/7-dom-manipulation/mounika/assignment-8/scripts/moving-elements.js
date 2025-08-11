const tbody = document.querySelector("#myTable tbody");

for (let i = 1; i <= 10; i++) {
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>Row ${i}</td>
    <td>
      <button class="btn-up">Up</button>
      <button class="btn-down">Down</button>
      <button class="btn-top">Top</button>
      <button class="btn-bottom">Bottom</button>
    </td>
  `;
  tbody.appendChild(tr);
}

tbody.addEventListener("click", e => {
  if (!e.target.matches("button")) return;

  const btn = e.target;
  const row = btn.closest("tr");

  if (btn.classList.contains("btn-up")) {
    const prev = row.previousElementSibling;
    if (prev) tbody.insertBefore(row, prev);
  }

  if (btn.classList.contains("btn-down")) {
    const next = row.nextElementSibling;
    if (next) tbody.insertBefore(next, row);
  }

  if (btn.classList.contains("btn-top")) {
    tbody.insertBefore(row, tbody.firstElementChild);
  }

  if (btn.classList.contains("btn-bottom")) {
    tbody.appendChild(row);
  }
});
