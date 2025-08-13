document.getElementById("parent").addEventListener("click", function() {
  alert("Parent Div Clicked");
});

document.getElementById("child").addEventListener("click", function(e) {
  alert("Child Div Clicked");
  e.stopPropagation();
});
