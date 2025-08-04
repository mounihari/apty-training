function calculateArea(length = 10, width = 5) {
  return length * width;
}

document.getElementById('areaForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const lengthInput = document.getElementById('length').value;
  const widthInput = document.getElementById('width').value;

  const length = lengthInput ? parseFloat(lengthInput) : undefined;
  const width = widthInput ? parseFloat(widthInput) : undefined;

  const area = calculateArea(length, width);
  document.getElementById('result').innerText = `Area: ${area}`;
});
