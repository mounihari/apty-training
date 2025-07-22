const types = [
  { type: 'String', value: "10" },
  { type: 'Number', value: 5 },
  { type: 'Boolean', value: true },
  { type: 'Undefined', value: undefined },
  { type: 'Null', value: null },
  { type: 'Symbol', value: Symbol("sym") },
  { type: 'Object', value: { key: "value" } }
];

const output = document.getElementById("output");

function safeAdd(a, b) {
  try {
    return a + b;
  } catch (e) {
    return `Error: ${e.message}`;
  }
}

for (let i = 0; i < types.length; i++) {
  for (let j = 0; j < types.length; j++) {
    const a = types[i];
    const b = types[j];
    const result = safeAdd(a.value, b.value);
    output.textContent += `${a.type} + ${b.type} → ${String(result)}\n`;
  }
}
