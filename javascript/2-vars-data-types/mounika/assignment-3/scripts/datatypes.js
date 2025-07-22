const output = document.getElementById('output');
function log(msg) {
  const p = document.createElement('p');
  p.textContent = msg;
  output.appendChild(p);
}

const str = "Hello World";         
const num = 42;                     
const bool = true;                  
let undef;                         
const nul = null;                  
const sym = Symbol('sym');         
const obj = { name: "ChatGPT" };

log(`String ("Hello World"): ${typeof str}`);
log(`Number (42): ${typeof num}`);
log(`Boolean (true): ${typeof bool}`);
log(`Undefined (declared but not assigned): ${typeof undef}`);
log(`Null (null): ${typeof nul}`);
log(`Symbol (Symbol('sym')): ${typeof sym}`);
log(`Object ({ name: "ChatGPT" }): ${typeof obj}`);
