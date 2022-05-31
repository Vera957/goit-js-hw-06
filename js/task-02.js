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

ingredients.forEach(e => {
  const li = document.createElement('li');
  li.textContent = e;
  li.classList.add('item');
  console.log(li);
  arr.push(li)
})

list.append(...arr);


