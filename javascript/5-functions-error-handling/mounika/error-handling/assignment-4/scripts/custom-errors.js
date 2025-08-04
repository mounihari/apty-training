function calculate(a, b, operator) {
    const num1 = parseFloat(a);
    const num2 = parseFloat(b);

    if (isNaN(num1) || isNaN(num2)) {
        throw new Error("Invalid number input.");
    }

    switch (operator) {
        case '+': return num1 + num2;
        case '-': return num1 - num2;
        case '*': return num1 * num2;
        case '/':
            if (num2 === 0) throw new Error("Cannot divide by zero.");
            return num1 / num2;
        case '%':
            if (num2 === 0) throw new Error("Cannot modulo by zero.");
            return num1 % num2;
        default:
            throw new Error(`Unsupported operator "${operator}".`);
    }
}

document.getElementById('calcForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const a = document.getElementById('num1').value;
    const b = document.getElementById('num2').value;
    const op = document.getElementById('operator').value;
    const resultEl = document.getElementById('result');

    try {
        const result = calculate(a, b, op);
        resultEl.style.color = 'green';
        resultEl.innerText = `Result: ${result}`;
    } catch (err) {
        resultEl.style.color = 'red';
        resultEl.innerText = `Error: ${err.message}`;
    }
});
