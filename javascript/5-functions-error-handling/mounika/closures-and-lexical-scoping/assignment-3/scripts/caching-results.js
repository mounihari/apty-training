const factorialWithCache = (function () {
    const cache = {};

    function factorial(n) {
        if (n === 0 || n === 1) return 1;
        if (cache[n]) return cache[n];

        const result = n * factorial(n - 1);
        cache[n] = result;
        return result;
    }

    return factorial;
})();

document.getElementById('factorialForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const input = parseInt(document.getElementById('number').value);

    if (isNaN(input) || input < 0) {
        document.getElementById('result').innerText = 'Please enter a non-negative number.';
        return;
    }

    const result = factorialWithCache(input);
    document.getElementById('result').innerText = `Factorial of ${input} is ${result}`;
});
