const shadowHTMLContent = `
<h2>DOM Access and Manipulation</h2>
<table>
  <tr>
    <th>ID</th>
    <th>Class Name</th>
    <th>Tag</th>
    <th>Name</th>
    <th>Attribute</th>
  </tr>
  <tr>
    <!-- Column 1: ID -->
    <td>
      <p id="p1">Paragraph 1</p>
      <p id="p2">Paragraph 2</p>
      <p id="p3">Paragraph 3</p>
    </td>

    <!-- Column 2: Class Name -->
    <td>
      <p class="sameClass">Class Para 1</p>
      <p class="sameClass">Class Para 2</p>
      <p class="sameClass">Class Para 3</p>
    </td>

    <!-- Column 3: Tag -->
    <td>
      <span>Span 1</span><br>
      <span>Span 2</span><br>
      <span>Span 3</span><br>
    </td>

    <!-- Column 4: Name -->
    <td>
      <input type="text" name="input1" value="Value1"><br>
      <input type="text" name="input2" value="Value2"><br>
      <input type="text" name="input3" value="Value3"><br>
    </td>

    <!-- Column 5: Attribute -->
    <td>
      <p custom-attr="a1">Attr Para 1</p>
      <p custom-attr="a2">Attr Para 2</p>
      <p custom-attr="a3">Attr Para 3</p>
    </td>
  </tr>
</table>
`;

const shadowHost = document.getElementById("shadowHost");
const shadowRoot = shadowHost.attachShadow({ mode: "open" });

shadowRoot.innerHTML = `
  <link rel="stylesheet" href="style.css">
  ${shadowHTMLContent}
`;

document.getElementById("btnId").addEventListener("click", () => {
    const element = shadowRoot.getElementById("p2");
    element.style.color = "#" + Math.floor(Math.random() * 16777215).toString(16);
});

document.getElementById("btnClass").addEventListener("click", () => {
    const elements = shadowRoot.querySelectorAll(".sameClass");
    elements.forEach(el => el.classList.toggle("highlight"));
});

document.getElementById("btnTag").addEventListener("click", () => {
    const spans = shadowRoot.getElementsByTagName("span");
    for (let i = 0; i < spans.length; i++) {
        spans[i].innerHTML = "Updated Span " + (i + 1);
    }
});

document.getElementById("btnName").addEventListener("click", () => {
    const inputs = shadowRoot.querySelectorAll('input[name]');
    inputs.forEach(inp => inp.disabled = !inp.disabled);
});

document.getElementById("btnAttr").addEventListener("click", () => {
    const element = shadowRoot.querySelector('[custom-attr="a2"]');
    element.setAttribute("new-attr", "addedValue");
    element.innerHTML += " (New Attr Added)";
});
