/** @format */

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");
const arr = [];

const render = ingredients.map(function (elem) {
  const li = document.createElement("li");
  li.className = "item";
  li.textContent = elem;
  arr.push(li);
});

list.append(...arr);


