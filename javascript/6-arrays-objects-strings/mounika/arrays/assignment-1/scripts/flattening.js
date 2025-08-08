function customFlatten(arr) {
  let result = [];
  for (let item of arr) {
    if (Array.isArray(item)) {
      result = result.concat(customFlatten(item));
    } else {
      result.push(item);
    }
  }
  return result;
}

function handleFlatten() {
  const input = document.getElementById('inputArray').value;
  try {
    const nestedArray = JSON.parse(input);
    const flattened = customFlatten(nestedArray);
    document.getElementById('output').textContent = JSON.stringify(flattened);
  } catch (e) {
    document.getElementById('output').textContent = 'Invalid input! Make sure it\'s a valid nested array.';
  }
}
