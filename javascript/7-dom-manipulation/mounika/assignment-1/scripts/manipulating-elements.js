document.getElementById("btnId").addEventListener("click", function () {
  const element = document.getElementById("p2");
  element.style.color = "#" + Math.floor(Math.random() * 16777215).toString(16);
});

document.getElementById("btnClass").addEventListener("click", function () {
  const elements = document.getElementsByClassName("sameClass");
  for (let el of elements) {
    el.classList.toggle("highlight");
  }
});

document.getElementById("btnTag").addEventListener("click", function () {
  const spans = document.getElementsByTagName("span");
  for (let i = 0; i < spans.length; i++) {
    spans[i].innerHTML = "Updated Span " + (i + 1);
  }
});

document.getElementById("btnName").addEventListener("click", function () {
  const inputs = document.querySelectorAll('input[name]');
  inputs.forEach(inp => {
    inp.disabled = !inp.disabled;
  });
});

document.getElementById("btnAttr").addEventListener("click", function () {
  const element = document.querySelector('[custom-attr="a2"]');
  element.setAttribute("new-attr", "addedValue");
  element.innerHTML = element.innerHTML + " (New Attr Added)";
});
