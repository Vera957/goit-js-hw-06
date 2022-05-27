/** @format */

const controlEl = document.querySelector("#font-size-control");
const spanFontSizeEl = document.querySelector("#text");
controlEl.addEventListener("input", () => {
    spanFontSizeEl.style.fontSize = `${controlEl.value}px`;

})
