/** @format */

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const divEl = document.querySelector("#controls");
const inputEl = document.querySelector("input");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const box = document.querySelector("#boxes");

createBtn.addEventListener("click", () => {
  сreation(inputEl.value);
});

function BoxSize(obj, index) {
  obj.style.backgroundColor = getRandomHexColor();
  obj.style.width = `${30 + index * 10}px`;
  obj.style.height = `${30 + index * 10}px`;
  obj.classList.add("new-box");
}

function сreation(value) {
  for (let i = 0; i < value; i++) {
    const boxy = box.appendChild(document.createElement("div"));
    BoxSize(boxy, i);
  }
}

const destroyBoxes = (className) => {
  const boxChildren = document.querySelectorAll(className);
  boxChildren.forEach((el) => el.remove());
};

destroyBtn.addEventListener("click", () => {
  destroyBoxes(".new-box");
});
