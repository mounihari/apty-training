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
  const val1 = document.getElementById('value1').value.trim();
  const type1 = document.getElementById('type1').value;
  const val2 = document.getElementById('value2').value.trim();
  const type2 = document.getElementById('type2').value;

  return {
    val1: convert(val1, type1),
    val2: convert(val2, type2)
  };
}

function showResult(operator, before, after, result) {
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = `<p><code>${JSON.stringify(before)}</code> <strong>${operator}</strong> <code>${JSON.stringify(after)}</code> => <strong>${JSON.stringify(result)}</strong></p>`;
}

function logicalAndAssign() {
  let { val1, val2 } = getConvertedValues();
  const before = val1;
  val1 &&= val2;
  showResult('&&=', before, val2, val1);
}

function logicalOrAssign() {
  let { val1, val2 } = getConvertedValues();
  const before = val1;
  val1 ||= val2;
  showResult('||=', before, val2, val1);
}

function nullishAssign() {
  let { val1, val2 } = getConvertedValues();
  const before = val1;
  val1 ??= val2;
  showResult('??=', before, val2, val1);
}
