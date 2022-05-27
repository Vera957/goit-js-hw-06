const val = document.querySelector("#validation-input");

val.addEventListener('blur', () => {
    val.classList.add('invalid');
    if (val.value.length >= val.dataset.length) {
        val.classList.add("valid");
        val.classList.remove("invalid");
    }
});