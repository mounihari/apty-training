function combineArrays() {
  const arr1Input = document.getElementById('array1').value;
  const arr2Input = document.getElementById('array2').value;

  const arr1 = arr1Input.split(',').map(Number);
  const arr2 = arr2Input.split(',').map(Number);

  const combined = [...new Set([...arr1, ...arr2])];

  document.getElementById('result').textContent = `[${combined.join(', ')}]`;
}
