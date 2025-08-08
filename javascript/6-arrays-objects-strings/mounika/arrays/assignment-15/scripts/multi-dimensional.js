function transposeMatrix() {
  const input = document.getElementById('matrixInput').value;
  const rows = input.split("\\n").map(row => row.split(',').map(Number));

  const transposed = rows[0].map((_, colIndex) => rows.map(row => row[colIndex]));

  document.getElementById('matrixOutput').textContent = JSON.stringify(transposed, null, 2);
}
