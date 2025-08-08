function sortByProperty() {
  const input = document.getElementById('sortInput').value;
  const prop = document.getElementById('propertyInput').value;

  try {
    const data = JSON.parse(input);
    if (!Array.isArray(data) || !prop) throw new Error();

    const sorted = [...data].sort((a, b) => {
      if (a[prop] > b[prop]) return -1;
      if (a[prop] < b[prop]) return 1;
      return 0;
    });

    document.getElementById('sortOutput').textContent = JSON.stringify(sorted);
  } catch (error) {
    document.getElementById('sortOutput').textContent = '❌ Invalid input or property!';
  }
}
