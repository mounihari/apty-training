function convert(value, type) {
  switch(type) {
    case 'string': return value;
    case 'number': return Number(value);
    case 'boolean':
      return value.toLowerCase() === 'true' ? true : value.toLowerCase() === 'false' ? false : Boolean(value);
    case 'null': return null;
    case 'undefined': return undefined;
    case 'object':
      try {
        return JSON.parse(value);
      } catch {
        return {};
      }
    default: return value;
  }
}

function getConvertedValues() {
  const val1 = convert(document.getElementById('value1').value.trim(), document.getElementById('type1').value);
  const val2 = convert(document.getElementById('value2').value.trim(), document.getElementById('type2').value);
  return { val1, val2 };
}

function showResult(operator, res) {
  const r = document.getElementById('result');
  r.innerHTML = `<p><strong>${operator}</strong> => <code>${JSON.stringify(res)}</code></p>`;
}

function logicalAnd() {
  const { val1, val2 } = getConvertedValues();
  showResult('&&', val1 && val2);
}

function logicalOr() {
  const { val1, val2 } = getConvertedValues();
  showResult('||', val1 || val2);
}

function logicalNotValue1() {
  const val1 = convert(document.getElementById('value1').value.trim(), document.getElementById('type1').value);
  showResult('!', !val1);
}

function logicalNotValue2() {
  const val2 = convert(document.getElementById('value2').value.trim(), document.getElementById('type2').value);
  showResult('!', !val2);
}
