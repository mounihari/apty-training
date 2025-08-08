function chunkArray(arr, size) {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}

function handleChunk() {
  const arrayInput = document.getElementById('chunkArrayInput').value;
  const sizeInput = parseInt(document.getElementById('chunkSizeInput').value);

  try {
    const arr = JSON.parse(arrayInput);
    if (!Array.isArray(arr) || isNaN(sizeInput) || sizeInput <= 0) throw new Error();

    const result = chunkArray(arr, sizeInput);
    document.getElementById('chunkOutput').textContent = `Chunks: ${JSON.stringify(result)}`;
  } catch {
    document.getElementById('chunkOutput').textContent = 'Invalid input! Ensure you provide a valid array and a positive chunk size.';
  }
}
