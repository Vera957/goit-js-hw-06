const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");

const render = ingredients.forEach(function(elem){
  let li = document.createElement("li");
  li.className = "item";
  li.textContent = elem;
  list.append(li)
})


  