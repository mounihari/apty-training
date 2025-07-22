const output = document.getElementById('output');
function log(msg) {
  const p = document.createElement('p');
  p.textContent = msg;
  output.appendChild(p);
}

var a = 10;
let b = 20;
const c = 30;
log(`Initial values -> var a: ${a}, let b: ${b}, const c: ${c}`);

try {
  var a = 100;
  log('Re-declared var a: Success, new value = ' + a);
} catch (e) {
  log('Re-declare var a error: ' + e.message);
}

try {
  let b = 200;
  log('Re-declared let b: Success, new value = ' + b);
} catch (e) {
  log('Re-declare let b error: ' + e.message);
}

try {
  const c = 300;
  log('Re-declared const c: Success, new value = ' + c);
} catch (e) {
  log('Re-declare const c error: ' + e.message);
}

try {
  a = 1000;
  log('Changed var a to: ' + a);
} catch (e) {
  log('Change var a error: ' + e.message);
}

try {
  b = 2000;
  log('Changed let b to: ' + b);
} catch (e) {
  log('Change let b error: ' + e.message);
}

try {
  c = 3000;
  log('Changed const c to: ' + c);
} catch (e) {
  log('Change const c error: ' + e.message);
}
