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



// document.getElementById("validation-input").onblur = function() {
//   console.log(this.value.length);
//   if (this.getAttribute('data-length') > this.value.length) { 
//     this.classList.remove('valid');
//     this.classList.add('invalid');
//   } else {
//     this.classList.remove('invalid');
//     this.classList.add('valid');
//   }
// };

