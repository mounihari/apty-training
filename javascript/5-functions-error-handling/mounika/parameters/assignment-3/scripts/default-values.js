function calculateRectangle(length = 10, width = 5) {
  const perimeter = 2 * (length + width);

  function calculateArea() {
    return length * width;
  }

  return {
    perimeter,
    area: calculateArea()
  };
}

document.getElementById('rectForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const lenInput = document.getElementById('length').value;
  const widInput = document.getElementById('width').value;

  const length = lenInput ? parseFloat(lenInput) : undefined;
  const width = widInput ? parseFloat(widInput) : undefined;

  const { perimeter, area } = calculateRectangle(length, width);

  document.getElementById('result').innerHTML = `
    Perimeter: ${perimeter} <br>
    Area: ${area}
  `;
});
