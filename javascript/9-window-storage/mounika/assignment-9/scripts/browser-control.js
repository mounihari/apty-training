let childWin = null;

const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
const resizeBtn = document.getElementById("resizeBtn");
const widthInput = document.getElementById("width");
const heightInput = document.getElementById("height");

openBtn.onclick = () => {
  if(!childWin || childWin.closed){
    childWin = window.open("", "childWindow", "width=400,height=300");
    childWin.document.write("<h2>Hello! This is a new window.</h2>");
    childWin.document.close();
  } else {
    alert("Window is already open");
  }
};

closeBtn.onclick = () => {
  if(childWin && !childWin.closed) childWin.close();
};

resizeBtn.onclick = () => {
  if(childWin && !childWin.closed){
    const w = Number(widthInput.value) || 400;
    const h = Number(heightInput.value) || 300;
    childWin.resizeTo(w,h);
  }
};
