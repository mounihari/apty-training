function findPrimes() {
  const start = parseInt(document.getElementById("start").value);
  const end = parseInt(document.getElementById("end").value);
  const outputDiv = document.getElementById("output");

  if (isNaN(start) || isNaN(end) || start < 2 || end < start) {
    outputDiv.innerHTML = "<p>Please enter a valid range (start ≥ 2 and end ≥ start).</p>";
    return;
  }

  let primes = [];

  for (let num = start; num <= end; num++) {
    let isPrime = true;
    for (let div = 2; div <= Math.sqrt(num); div++) {
      if (num % div === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) primes.push(num);
  }

  outputDiv.innerHTML = `<p><strong>Primes between ${start} and ${end}:</strong><br>${primes.join(", ")}</p>`;
}
