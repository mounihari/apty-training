function comparePerformance() {
  const size = parseInt(document.getElementById("arraySize").value);
  const arr = Array.from({ length: size }, (_, i) => i + 1);

  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = "<h3>Performance Results:</h3>";
  
  let sum = 0;
  const t0 = performance.now();
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  const t1 = performance.now();
  resultsDiv.innerHTML += `<p>For Loop: ${(t1 - t0).toFixed(2)} ms</p>`;

  sum = 0;
  const t2 = performance.now();
  for (let val of arr) {
    sum += val;
  }
  const t3 = performance.now();
  resultsDiv.innerHTML += `<p>For...of Loop: ${(t3 - t2).toFixed(2)} ms</p>`;

  sum = 0;
  const t4 = performance.now();
  arr.forEach(val => sum += val);
  const t5 = performance.now();
  resultsDiv.innerHTML += `<p>forEach Loop: ${(t5 - t4).toFixed(2)} ms</p>`;

  resultsDiv.innerHTML += `<h4>Conclusion:</h4>
    <ul>
      <li><b>For loop</b> is generally the fastest for raw performance.</li>
      <li><b>for...of</b> is slightly slower but more readable.</li>
      <li><b>forEach</b> is clean and functional but often the slowest in tight loops.</li>
    </ul>`;
}
