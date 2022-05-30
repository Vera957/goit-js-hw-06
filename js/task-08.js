/** @format */

const formEl = document.querySelector(".login-form");
const inputElements = document.querySelectorAll("input");
const btn = document.querySelector("button");

formEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  if (formEl.email.value === "" || formEl.password.value === "") {
    alert("all fields must be filled in");
  } else {
        
    const obj = {
      email: event.currentTarget.elements.email.value,
      password: event.currentTarget.elements.password.value,
    }

    console.log(obj);
    formEl.reset();
  }
}
