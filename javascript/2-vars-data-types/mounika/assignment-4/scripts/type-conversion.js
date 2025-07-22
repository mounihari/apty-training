const values = [
  { type: 'String', value: "123" },
  { type: 'Number', value: 123 },
  { type: 'Boolean', value: true },
  { type: 'Undefined', value: undefined },
  { type: 'Null', value: null },
  { type: 'Symbol', value: Symbol("sym") },
  { type: 'Object', value: { key: "value" } }
];

const output = document.getElementById("output");
values.forEach(item => {
  let numberVal, stringVal, booleanVal;

  try { numberVal = Number(item.value); } catch (e) { numberVal = e.message; }
  try { stringVal = String(item.value); } catch (e) { stringVal = e.message; }
  try { booleanVal = Boolean(item.value); } catch (e) { booleanVal = e.message; }

  output.insertAdjacentHTML('beforeend', `
    <p>
      <strong>${item.type}</strong><br>
      Original: ${String(item.value)}<br>
      Number(): ${numberVal}<br>
      String(): ${stringVal}<br>
      Boolean(): ${booleanVal}<br><br>
    </p>
  `);
});
