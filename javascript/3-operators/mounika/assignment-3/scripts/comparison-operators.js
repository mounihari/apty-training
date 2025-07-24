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
    val2: convert(val2, type2),
    type1,
    type2
  };
}

function showResult(operator, res, val1, val2) {
  const r = document.getElementById('result');
  r.innerHTML = `<p><code>${JSON.stringify(val1)}</code> <strong>${operator}</strong> <code>${JSON.stringify(val2)}</code> => <strong>${res}</strong></p>`;
}

function compareEquals() {
  const {val1, val2} = getConvertedValues();
  showResult('==', val1 == val2, val1, val2);
}

function compareStrictEquals() {
  const {val1, val2} = getConvertedValues();
  showResult('===', val1 === val2, val1, val2);
}

function compareNotEquals() {
  const {val1, val2} = getConvertedValues();
  showResult('!=', val1 != val2, val1, val2);
}

function compareStrictNotEquals() {
  const {val1, val2} = getConvertedValues();
  showResult('!==', val1 !== val2, val1, val2);
}

function compareGreater() {
  const {val1, val2} = getConvertedValues();
  showResult('>', val1 > val2, val1, val2);
}

function compareLess() {
  const {val1, val2} = getConvertedValues();
  showResult('<', val1 < val2, val1, val2);
}

function compareGreaterOrEqual() {
  const {val1, val2} = getConvertedValues();
  showResult('>=', val1 >= val2, val1, val2);
}

function compareLessOrEqual() {
  const {val1, val2} = getConvertedValues();
  showResult('<=', val1 <= val2, val1, val2);
}
