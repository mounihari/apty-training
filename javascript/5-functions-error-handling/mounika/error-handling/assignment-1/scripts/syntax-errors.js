function parseJSON(jsonStr) {
  try {
    const parsed = JSON.parse(jsonStr);
    return { success: true, data: parsed };
  } catch (err) {
    return {
      success: false,
      error: `Invalid JSON: ${err.message}`
    };
  }
}

document.getElementById('jsonForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const input = document.getElementById('jsonInput').value.trim();
  const result = parseJSON(input);

  const output = document.getElementById('output');
  output.style.color = result.success ? 'green' : 'red';
  output.innerText = result.success
    ? JSON.stringify(result.data, null, 2)
    : result.error;
});
