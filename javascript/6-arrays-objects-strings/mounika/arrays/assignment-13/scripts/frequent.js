function mostFrequent() {
  const input = document.getElementById('freqInput').value;
  try {
    const arr = JSON.parse(input);
    if (!Array.isArray(arr)) throw new Error();

    const frequencyMap = arr.reduce((acc, val) => {
      acc[val] = (acc[val] || 0) + 1;
      return acc;
    }, {});

    let maxCount = 0;
    let mostFreq = null;

    for (const key in frequencyMap) {
      if (frequencyMap[key] > maxCount) {
        maxCount = frequencyMap[key];
        mostFreq = key;
      }
    }

    document.getElementById('freqOutput').textContent = `Most Frequent Element: ${mostFreq} (x${maxCount})`;
  } catch {
    document.getElementById('freqOutput').textContent = 'Invalid input! Please enter a valid array.';
  }
}
