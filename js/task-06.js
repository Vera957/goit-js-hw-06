/** @format */

const val = document.querySelector("#validation-input");

val.addEventListener("blur", function () {
  if (val.value.length == val.dataset.length) {
    val.classList.add("valid");
    val.classList.remove("invalid");
  } else {
    val.classList.add("invalid");
    val.classList.remove("valid");
  }
});

