const colorInput = document.getElementById("color-input");
const mode = document.getElementById("mode");
const btn = document.getElementById("query-submit");

function getSelectedUrl() {
  const colorInput = document.getElementById("color-input").value;
  const plainColor = colorInput.replace("#", "");
  const mode = document.getElementById("mode").value;
  return `https://www.thecolorapi.com/scheme?hex=${plainColor}&count=5&mode=${mode}`;
}

btn.addEventListener("click", (e) => {
  e.preventDefault();
  
  document.querySelector(".scheme-container").innerHTML = "";
  let newUrl = getSelectedUrl();
  fetch(newUrl)
    .then((response) => response.json())
    .then((data) => {
      for (let colors of data.colors) {
        const hexValues = colors.hex.value;
        const renderHtml = `
            <div style="background: ${hexValues};" class="box">
                <p>${hexValues}</p>
            </div>
        `;
        document.querySelector(".scheme-container").innerHTML += renderHtml;
      }
    });
});
