const decr = document.querySelector('button[data-action="decrement"]');
//console.log(decr)
const arr = document.querySelector('button');
const incr = document.querySelector('button[data-action="increment"]');
const counterValue = document.querySelector("#value");
const btn = document.querySelectorAll('button');

//console.log(btn[0].dataset.action);

incr.addEventListener('click', () => {
    counterValue.textContent = Number(counterValue.textContent) + 1;
});
decr.addEventListener('click', () => {
    counterValue.textContent = Number(counterValue.textContent) - 1;
});





