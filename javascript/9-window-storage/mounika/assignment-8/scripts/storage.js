const keyInput = document.getElementById("key");
const valueInput = document.getElementById("value");
const localOut = document.getElementById("localOut");
const sessionOut = document.getElementById("sessionOut");

function renderStorage() {
  let localHtml = '';
  for(let i=0; i<localStorage.length; i++){
    const k = localStorage.key(i);
    localHtml += `<p>${k} : ${localStorage.getItem(k)}</p>`;
  }
  localOut.innerHTML = localHtml;

  let sessionHtml = '';
  for(let i=0; i<sessionStorage.length; i++){
    const k = sessionStorage.key(i);
    sessionHtml += `<p>${k} : ${sessionStorage.getItem(k)}</p>`;
  }
  sessionOut.innerHTML = sessionHtml;
}

document.getElementById("saveLocal").onclick = () => {
  const k = keyInput.value.trim();
  const v = valueInput.value.trim();
  if(k) localStorage.setItem(k,v);
  renderStorage();
};

document.getElementById("saveSession").onclick = () => {
  const k = keyInput.value.trim();
  const v = valueInput.value.trim();
  if(k) sessionStorage.setItem(k,v);
  renderStorage();
};

window.onload = renderStorage;
