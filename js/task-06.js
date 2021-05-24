let inputEl = document.getElementById('validation-input');
let inputLength = inputEl.dataset.length;

const input = document.querySelector('input');
inputEl.addEventListener('change', el => {
    const text = el.target.value;
    if (text.length === +inputLength) {
        inputEl.classList.add("valid");
        inputEl.classList.remove("invalid");
    } else {
        inputEl.classList.remove("valid");
        inputEl.classList.add("invalid"); 
    }
});




