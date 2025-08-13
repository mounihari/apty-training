const container = document.getElementById("editableContainer");

const observer = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    mutation.addedNodes.forEach(node => {
      if (node.tagName === "TEXTAREA") {
        node.addEventListener("blur", saveEditedText);
      }
    });

    mutation.addedNodes.forEach(node => {
      if (node.tagName === "SPAN") {
        node.addEventListener("click", switchToEditMode);
      }
    });
  });
});

observer.observe(container, { childList: true, subtree: true });

document.getElementById("editableText").addEventListener("click", switchToEditMode);

function switchToEditMode() {
  const currentText = document.getElementById("editableText").textContent;
  container.innerHTML = `<textarea id="editor" style="width:100%; height:60px;">${currentText}</textarea>`;
  document.getElementById("editor").focus();
}

function saveEditedText() {
  const newText = document.getElementById("editor").value;
  container.innerHTML = `<span id="editableText">${newText}</span> ✏️`;
}
