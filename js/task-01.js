/** @format */

const categories = document.querySelector("#categories");
const item = categories.querySelectorAll(".item");
console.log(`Number of categories: ${item.length}`);

const result = item.forEach(function (elem) {
  const elemName = elem.querySelector("h2").textContent;
  const elemSum = elem.querySelectorAll("li").length;
  console.log("");
  console.log(`Category: ${elemName}`);
  console.log(`Elements: ${elemSum}`);
});
