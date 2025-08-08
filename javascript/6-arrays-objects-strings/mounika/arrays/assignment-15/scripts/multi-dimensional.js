function transposeMatrix(matrix) {
  return matrix[0].map((_, colIndex) => matrix.map(row => row[colIndex]));
}

function handleTranspose() {
  const input = document.getElementById('matrixInput').value.trim();

  if (!input) {
    document.getElementById('matrixOutput').textContent = 'Please enter a valid matrix.';
    return;
  }

  const rows = input.split('\n').map(row => row.split(',').map(Number));
  
  const colCount = rows[0]?.length;
  if (!colCount || rows.some(r => r.length !== colCount || r.some(isNaN))) {
    document.getElementById('matrixOutput').textContent =
      'Invalid matrix format. Ensure each row has the same number of numeric values.';
    return;
  }

  const transposed = transposeMatrix(rows);
  document.getElementById('matrixOutput').textContent = JSON.stringify(transposed, null, 2);
}
