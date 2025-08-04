function calculate(operator) {
  const val1 = parseFloat(document.getElementById('value1').value);
  const val2 = parseFloat(document.getElementById('value2').value);
  let result;

  switch (operator) {
    case '+':
      result = val1 + val2;
      break;
    case '-':
      result = val1 - val2;
      break;
    case '*':
      result = val1 * val2;
      break;
    case '/':
      result = val2 === 0 ? 'Error: Division by zero!' : val1 / val2;
      break;
    case '%':
      result = val1 % val2;
      break;
    case '++':
      result = `Incremented Value1: ${val1 + 1}`;
      break;
    case '--':
      result = `Decremented Value1: ${val1 - 1}`;
      break;
    default:
      result = 'Invalid Operator';
  }

  document.getElementById('result').textContent = result;
}
