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
    const formValues = new FormData(event.currentTarget);
    formValues.forEach((value, name) => {
      console.log(name + ":", value);
    });
    formEl.reset();
  }
}
