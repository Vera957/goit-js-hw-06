/** @format */

const decr = document.querySelector('button[data-action="decrement"]');
const incr = document.querySelector('button[data-action="increment"]');
let counterValue = 0;

incr.addEventListener("click", () => {
  counterValue += 1;
  result.textContent = counterValue;
});
decr.addEventListener("click", () => {
  counterValue -= 1;
  result.textContent = counterValue;
});

const result = document.querySelector("#value");
