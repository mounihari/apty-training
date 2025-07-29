function calculate(operator) {
  let val1 = parseFloat(document.getElementById('value1').value);
  let val2 = parseFloat(document.getElementById('value2').value);
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
      if (val2 === 0) {
        result = 'Error: Division by zero!';
      } else {
        result = val1 / val2;
      }
      break;
    case '%':
      result = val1 % val2;
      break;
    case '++':
      val1++;
      result = `Incremented Value1: ${val1}`;
      break;
    case '--':
      val1--;
      result = `Decremented Value1: ${val1}`;
      break;
    default:
      result = 'Invalid operator';
  }

  document.getElementById('result').textContent = `Result: ${result}`;
}
